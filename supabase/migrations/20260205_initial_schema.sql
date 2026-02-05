-- Postclaw Database Schema
-- Migration: Initial setup

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- POSTCARDS TABLE
-- ============================================
CREATE TABLE postcards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Order identification
  order_id TEXT UNIQUE NOT NULL, -- pc_XXXXXXXXXXXX format
  idempotency_key TEXT UNIQUE, -- Prevent duplicate orders
  
  -- Status tracking
  -- pending → paid → sent → in_transit → delivered
  -- OR → payment_expired, failed
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN (
    'pending', 'paid', 'sent', 'in_transit', 'delivered', 
    'payment_expired', 'failed'
  )),
  
  -- Recipient address
  recipient_name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT,
  postal_code TEXT,
  country TEXT NOT NULL DEFAULT 'US',
  
  -- Postcard content
  front_html TEXT,
  back_html TEXT,
  back_message TEXT,
  size TEXT NOT NULL CHECK (size IN ('4x6', '6x9', '6x11')),
  
  -- Payment
  amount_cents INTEGER NOT NULL,
  discount_cents INTEGER DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'usd',
  stripe_checkout_session_id TEXT,
  stripe_payment_intent_id TEXT,
  payment_url TEXT,
  
  -- Print fulfillment (Lob.com)
  lob_postcard_id TEXT,
  tracking_number TEXT,
  expected_delivery_date DATE,
  
  -- Referral system
  referral_code TEXT, -- Will be FK after referrals table created
  share_code TEXT UNIQUE, -- This order's referral code
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ, -- Payment expiry (24h from creation)
  paid_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  failed_at TIMESTAMPTZ,
  
  -- Audit
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_postcards_order_id ON postcards(order_id);
CREATE INDEX idx_postcards_status ON postcards(status);
CREATE INDEX idx_postcards_stripe_session ON postcards(stripe_checkout_session_id);
CREATE INDEX idx_postcards_created_at ON postcards(created_at DESC);

-- ============================================
-- REFERRALS TABLE
-- ============================================
CREATE TABLE referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL, -- 8-char alphanumeric (e.g., Ab3kX9mZ)
  postcard_id UUID REFERENCES postcards(id) ON DELETE CASCADE,
  uses INTEGER DEFAULT 0,
  discount_amount_cents INTEGER DEFAULT 100, -- $1.00 default
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast code lookups
CREATE INDEX idx_referrals_code ON referrals(code);

-- Now add FK constraint to postcards
ALTER TABLE postcards 
  ADD CONSTRAINT fk_postcards_referral_code 
  FOREIGN KEY (referral_code) 
  REFERENCES referrals(code) 
  ON DELETE SET NULL;

-- ============================================
-- WEBHOOK EVENTS TABLE (for debugging)
-- ============================================
CREATE TABLE webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source TEXT NOT NULL CHECK (source IN ('stripe', 'lob')),
  event_type TEXT NOT NULL,
  payload JSONB NOT NULL,
  processed BOOLEAN DEFAULT FALSE,
  error TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_webhook_events_source ON webhook_events(source);
CREATE INDEX idx_webhook_events_processed ON webhook_events(processed);
CREATE INDEX idx_webhook_events_created_at ON webhook_events(created_at DESC);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE postcards ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_events ENABLE ROW LEVEL SECURITY;

-- Postcards policies
-- Allow public read access to anyone (for order status checks)
CREATE POLICY "Allow public read postcards" ON postcards
  FOR SELECT USING (true);

-- Allow service role full access (for Edge Functions)
CREATE POLICY "Service role full access postcards" ON postcards
  FOR ALL USING (auth.role() = 'service_role');

-- Referrals policies
CREATE POLICY "Allow public read referrals" ON referrals
  FOR SELECT USING (true);

CREATE POLICY "Service role full access referrals" ON referrals
  FOR ALL USING (auth.role() = 'service_role');

-- Webhook events policies (service role only)
CREATE POLICY "Service role full access webhook_events" ON webhook_events
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to generate random referral code
CREATE OR REPLACE FUNCTION generate_referral_code() 
RETURNS TEXT AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  result TEXT := '';
  i INTEGER := 0;
BEGIN
  FOR i IN 1..8 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::int, 1);
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at on postcards
CREATE TRIGGER update_postcards_updated_at
  BEFORE UPDATE ON postcards
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- COMMENTS (Documentation)
-- ============================================

COMMENT ON TABLE postcards IS 'Stores all postcard orders and their status';
COMMENT ON TABLE referrals IS 'Referral codes for $1 discount system';
COMMENT ON TABLE webhook_events IS 'Logs all webhook events from Stripe and Lob for debugging';

COMMENT ON COLUMN postcards.order_id IS 'Public-facing order ID (format: pc_XXXXXXXXXXXX)';
COMMENT ON COLUMN postcards.idempotency_key IS 'Prevents duplicate orders if request is retried';
COMMENT ON COLUMN postcards.expires_at IS 'Payment link expires 24 hours after creation';
COMMENT ON COLUMN postcards.share_code IS 'Unique referral code generated for this order';

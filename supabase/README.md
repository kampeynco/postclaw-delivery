# Supabase Setup Guide

## Prerequisites

1. Supabase account: https://supabase.com
2. Supabase CLI installed: `npm install -g supabase`

## Initial Setup

### 1. Create Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Fill in:
   - **Name:** Postclaw
   - **Database Password:** (save this securely)
   - **Region:** Choose closest to your users
4. Click "Create new project"
5. Wait for project to initialize (~2 minutes)

### 2. Get Project Credentials

From your Supabase Dashboard:

- **Project URL:** Settings → API → Project URL
- **Anon Key:** Settings → API → `anon` `public` key
- **Service Role Key:** Settings → API → `service_role` `secret` key (keep this secret!)

### 3. Run Migrations

```bash
# Link to your Supabase project
supabase link --project-ref <your-project-ref>

# Run migrations
supabase db push

# Verify migration succeeded
supabase db remote changes
```

### 4. Set Environment Variables

Create `.env.local` in project root:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>

# Stripe (get from https://dashboard.stripe.com/test/apikeys)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_... # Get after creating webhook

# Lob (get from https://dashboard.lob.com/#/settings/keys)
LOB_API_KEY=test_... # Use test key for development

# Frontend
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Set Supabase Edge Function Secrets

```bash
# Set secrets for Edge Functions
supabase secrets set STRIPE_SECRET_KEY=sk_test_...
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
supabase secrets set LOB_API_KEY=test_...
supabase secrets set FRONTEND_URL=http://localhost:3000
```

## Database Schema

### Tables Created

1. **postcards** - All postcard orders
2. **referrals** - Referral codes for $1 discount
3. **webhook_events** - Webhook event logs (for debugging)

### Key Indexes

- `idx_postcards_order_id` - Fast order lookups
- `idx_postcards_status` - Status filtering
- `idx_referrals_code` - Referral code validation

## Row Level Security (RLS)

- ✅ **Public read** - Anyone can check order status
- ✅ **Service role full access** - Edge Functions can CRUD
- ✅ **Webhook events** - Service role only

## Helper Functions

- `generate_referral_code()` - Creates 8-char alphanumeric codes
- `update_updated_at_column()` - Auto-updates timestamps

## Verification

Check that everything is set up correctly:

```sql
-- Verify tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- Check RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';

-- Test referral code generation
SELECT generate_referral_code();
```

## Next Steps

After database setup:
1. Deploy Edge Functions (see `/supabase/functions/`)
2. Set up Hookdeck webhooks
3. Test end-to-end flow

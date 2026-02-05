import Link from 'next/link'

export function PricingSection() {
    const pricingTiers = [
        {
            size: '4×6"',
            name: 'Standard',
            price: '$1.99',
            description: 'Perfect for thank-yous and reminders.',
            features: [
                'HTML/CSS front design',
                'Custom back message',
                'Premium cardstock',
                'Worldwide delivery',
                'Typical delivery: 3–7 days',
            ],
            cta: 'Start with Standard',
        },
        {
            size: '6×9"',
            name: 'Large',
            price: '$2.99',
            description: 'Great for marketing and announcements.',
            features: [
                'Everything in Standard',
                'More design space',
                'Higher visual impact',
                'Ideal for promotions',
            ],
            featured: true,
            cta: 'Start with Large',
        },
        {
            size: '6×11"',
            name: 'Premium',
            price: '$3.99',
            description: 'Maximum impact for photo-heavy cards and premium moments.',
            features: [
                'Everything in Large',
                'Maximum design space',
                'Best for photos',
                'Gift-worthy presentation',
            ],
            cta: 'Start with Premium',
        },
    ]

    return (
        <section className="section-brutal bg-usps-blue" id="pricing">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="badge-brutal bg-usps-red text-white mb-4">
                        PRICING
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                        One price. Everything included.
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Printing, postage, and worldwide delivery—flat rate per card. No subscriptions.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`
                relative flex flex-col p-6 md:p-8 border-4 border-black cursor-pointer
                ${tier.featured
                                    ? 'bg-cream shadow-brutal-lg transform md:-translate-y-4'
                                    : 'bg-white shadow-brutal'
                                }
                transition-transform hover:translate-x-[-4px] hover:translate-y-[-4px]
              `}
                        >
                            {/* Featured Badge - Positioned on top border */}
                            {tier.featured && (
                                <div className="absolute -top-4 left-4 badge-brutal bg-usps-red text-white">
                                    MOST POPULAR
                                </div>
                            )}

                            {/* Size */}
                            <div className="text-sm font-mono text-gray-500 mb-1">
                                {tier.size}
                            </div>

                            {/* Name */}
                            <h3 className="font-display text-2xl text-usps-black mb-2">
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="font-display text-5xl text-usps-blue">
                                    {tier.price}
                                </span>
                                <span className="text-gray-600">/ card</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6">
                                {tier.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <svg
                                            className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                href="/docs"
                                className={`
                  w-full text-center py-3 px-6 font-bold border-4 border-black cursor-pointer
                  transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]
                  ${tier.featured
                                        ? 'bg-usps-red text-white shadow-brutal-sm hover:shadow-brutal'
                                        : 'bg-usps-blue text-white shadow-brutal-sm hover:shadow-brutal'
                                    }
                `}
                            >
                                {tier.cta} →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Currency Note */}
                <div className="text-center text-blue-100 mb-8">
                    <p>
                        We accept USD, EUR, GBP, CAD, AUD, and more via Stripe.
                    </p>
                </div>

                {/* Enterprise CTA */}
                <div className="card-brutal p-6 bg-white text-center">
                    <p className="text-gray-700">
                        Sending high volume or need invoicing / account controls?{' '}
                        <a href="mailto:hello@postclaw.delivery" className="font-bold text-usps-blue hover:underline cursor-pointer">
                            Talk to us →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

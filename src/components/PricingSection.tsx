export function PricingSection() {
    const pricingTiers = [
        {
            size: '4×6"',
            name: 'Standard',
            price: '$2.99',
            description: 'Perfect for thank-you notes and reminders',
            features: [
                'HTML/CSS front design',
                'Custom back message',
                '100lb glossy cardstock',
                'Worldwide delivery',
                '3-7 day shipping',
            ],
        },
        {
            size: '6×9"',
            name: 'Large',
            price: '$3.99',
            description: 'Great for marketing and announcements',
            features: [
                'Everything in Standard',
                '50% more design space',
                'Higher visual impact',
                'Ideal for promotions',
                'Same fast shipping',
            ],
            featured: true,
        },
        {
            size: '6x11"',
            name: 'Premium',
            price: '$4.99',
            description: 'Maximum impact for premium gifts',
            features: [
                'Everything in Large',
                'Maximum design space',
                'Premium presentation',
                'Perfect for photos',
                'Gift-worthy quality',
            ],
        },
    ]

    return (
        <section className="section-brutal bg-usps-blue" id="pricing">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="badge-brutal bg-usps-red text-white mb-4">
                        SIMPLE PRICING
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                        One Price, Everything Included
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Printing, postage, and worldwide delivery for 4x6 cards—all in one flat rate.
                        No hidden fees. No subscriptions.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`
                flex flex-col p-6 md:p-8 border-4 border-black cursor-pointer
                ${tier.featured
                                    ? 'bg-cream shadow-brutal-lg transform md:-translate-y-4'
                                    : 'bg-white shadow-brutal'
                                }
                transition-transform hover:translate-x-[-4px] hover:translate-y-[-4px]
              `}
                        >
                            {/* Featured Badge */}
                            {tier.featured && (
                                <div className="badge-brutal bg-usps-red text-white mb-4 self-start">
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
                                <span className="text-gray-600">/card</span>
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
                            <a
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
                                Get Started →
                            </a>
                        </div>
                    ))}
                </div>

                {/* Currency Note */}
                <div className="text-center mt-8 text-blue-100">
                    <p>
                        💳 We accept USD, EUR, GBP, CAD, AUD, and more via Stripe
                    </p>
                </div>
            </div>
        </section>
    )
}

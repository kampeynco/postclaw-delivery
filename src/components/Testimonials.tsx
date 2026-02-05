export function Testimonials() {
    return (
        <section className="section-brutal bg-surface">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="badge-brutal bg-usps-blue text-white mb-4">
                        TRUSTED BY
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-usps-black mb-4">
                        Teams use Postclaw when delivery matters
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Built on Stripe Checkout for secure approvals. Designed for automation with webhooks and clean APIs. Print quality you&apos;d actually send to someone you respect.
                    </p>
                </div>

                {/* Testimonial Placeholder Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="card-brutal p-6 bg-white"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gray-200 border-2 border-black"></div>
                                <div>
                                    <div className="h-4 w-24 bg-gray-200 mb-1"></div>
                                    <div className="h-3 w-16 bg-gray-100"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-3 w-full bg-gray-100"></div>
                                <div className="h-3 w-full bg-gray-100"></div>
                                <div className="h-3 w-3/4 bg-gray-100"></div>
                            </div>
                            <p className="text-sm text-gray-400 italic mt-4">
                                Testimonial coming soon
                            </p>
                        </div>
                    ))}
                </div>

                {/* Logo Placeholder */}
                <div className="card-brutal p-6 bg-cream text-center">
                    <p className="text-gray-500 text-sm mb-4">CUSTOMER LOGOS</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-24 h-8 bg-gray-200 border border-gray-300"></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

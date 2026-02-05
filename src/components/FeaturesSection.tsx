export function FeaturesSection() {
    const features = [
        { title: 'Approval-first', description: 'AI initiates, a human confirms' },
        { title: 'No API keys to start', description: 'Move fast, lock down later' },
        { title: 'HTML/CSS front', description: 'Custom message back' },
        { title: 'Webhooks + order status', description: 'Track postcards end-to-end' },
    ]

    return (
        <section className="section-brutal bg-usps-blue">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <div className="badge-brutal bg-white text-usps-blue mb-4">
                        WHY POSTCLAW
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-white mb-2">
                        Purpose-built for AI agents
                    </h2>
                    <p className="text-white/80 text-lg">
                        Four features that make physical mail work for autonomous systems
                    </p>
                </div>

                {/* Horizontal Feature Strip */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="relative"
                        >
                            {/* Feature Number Badge */}
                            <div className="absolute -top-3 -left-3 w-10 h-10 bg-usps-red border-4 border-black shadow-brutal flex items-center justify-center z-10">
                                <span className="font-display text-xl text-white">{index + 1}</span>
                            </div>

                            {/* Feature Card */}
                            <div className="card-brutal p-6 bg-white h-full">
                                <h3 className="font-display text-lg text-usps-black mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Callout */}
                <div className="mt-8 text-center">
                    <p className="text-white/90 text-base">
                        <strong className="text-white">No credit card required.</strong> Start with simple API requests, add authentication when you're ready.
                    </p>
                </div>
            </div>
        </section>
    )
}

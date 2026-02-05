export function HeroSection() {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-surface" id="demo">
            <div className="max-w-6xl mx-auto">
                {/* Hero Content */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-usps-black leading-tight mb-6">
                        Send a real postcard from your AI with one POST request
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
                        Postclaw turns "agent intent" into physical mail—safely. Your AI creates the postcard + recipient details, we return a Stripe Checkout link for human approval, then we print and mail worldwide.
                    </p>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {[
                        'Approval-first: AI initiates, a human confirms',
                        'No API keys to start',
                        'HTML/CSS front + custom message back',
                        'Webhooks + order status',
                    ].map((feature) => (
                        <div
                            key={feature}
                            className="bg-white border-2 border-black px-4 py-2 text-sm font-medium shadow-brutal-sm"
                        >
                            {feature}
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a href="#pricing" className="btn-brutal-cta text-center text-lg px-8 py-4">
                        Generate a demo payment link
                    </a>
                    <a href="/docs" className="btn-brutal-outline text-center text-lg px-8 py-4">
                        Read API docs
                    </a>
                </div>

                {/* Trust Bar */}
                <p className="text-center text-gray-500 text-sm mb-12">
                    Payments powered by Stripe · Print on premium cardstock · Ships to 195+ countries
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: '1', label: 'request to create a card' },
                        { value: 'Human approval', label: 'via Stripe Checkout' },
                        { value: '3–7 days', label: 'typical delivery' },
                        { value: '195+', label: 'countries supported' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="card-brutal p-4 text-center bg-white"
                        >
                            <div className="font-display text-2xl md:text-3xl text-usps-blue">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm font-medium text-gray-600 mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

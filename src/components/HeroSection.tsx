export function HeroSection() {
    const codeExample = `POST /v1/postcards
{
  "to": {
    "name": "Jane Doe",
    "address_line1": "123 Main St",
    "city": "Austin",
    "state": "TX",
    "postal_code": "78701",
    "country": "US"
  },
  "front_html": "<h1>Thanks!</h1>",
  "back_message": "We appreciate you.",
  "size": "4x6"
}`

    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-surface" id="demo">
            <div className="max-w-6xl mx-auto">
                {/* Two Column Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    {/* Left Column - Text Content */}
                    <div>
                        <h1 className="font-display text-4xl md:text-5xl text-usps-black leading-tight mb-6">
                            From prompt to mailbox: OpenClaw mails real postcards
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Postclaw lets your OpenClaw agent draft a postcard, generate a Stripe approval link, then print + mail it in the real world.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a href="#pricing" className="btn-brutal-cta text-center text-lg px-8 py-4">
                                Generate a demo payment link
                            </a>
                            <a href="/docs" className="btn-brutal-outline text-center text-lg px-8 py-4">
                                Read API docs
                            </a>
                        </div>

                        {/* Trust Bar */}
                        <p className="text-gray-500 text-sm">
                            Payments powered by Stripe · Print on premium cardstock · Ships to 195+ countries
                        </p>
                    </div>

                    {/* Right Column - Code Example */}
                    <div className="card-brutal p-0 overflow-hidden">
                        <div className="bg-usps-blue px-4 py-2 border-b-4 border-black flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-usps-red border border-black"></div>
                            <div className="w-3 h-3 rounded-full bg-warning border border-black"></div>
                            <div className="w-3 h-3 rounded-full bg-success border border-black"></div>
                            <span className="ml-4 text-white font-mono text-sm">create_postcard.json</span>
                        </div>
                        <pre className="code-brutal border-0 shadow-none m-0 text-sm">
                            <code>{codeExample}</code>
                        </pre>
                    </div>
                </div>

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

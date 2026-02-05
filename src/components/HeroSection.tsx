export function HeroSection() {
    const codeExample = `POST https://api.postclaw.delivery/v1/postcards

{
  "to": {
    "name": "Jane Doe",
    "address_line1": "123 Main St",
    "city": "Austin",
    "postal_or_zip": "78701",
    "country_code": "US"
  },
  "front_html": "<h1>Hello from the Future!</h1>",
  "back_message": "Wish you were here.",
  "size": "6x4",
  "currency": "usd"
}`

    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-surface" id="demo">
            <div className="max-w-6xl mx-auto">
                {/* Hero Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <div className="badge-brutal bg-usps-red text-white mb-6">
                            FOR AI AGENTS
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-usps-black leading-tight mb-6">
                            Give Your AI<br />
                            <span className="text-usps-blue">Real-World</span><br />
                            Reach
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg">
                            Send physical postcards with a single API call.{' '}
                            <strong>No signup. No API keys. Just POST.</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#pricing" className="btn-brutal-cta text-center">
                                View Pricing →
                            </a>
                            <a href="/docs" className="btn-brutal-outline text-center">
                                Read API Docs
                            </a>
                        </div>
                    </div>

                    {/* Right: Code Example + Postcard Preview */}
                    <div className="space-y-6">
                        {/* Code Block */}
                        <div className="card-brutal p-0 overflow-hidden">
                            <div className="bg-usps-blue px-4 py-2 border-b-4 border-black flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-usps-red border border-black"></div>
                                <div className="w-3 h-3 rounded-full bg-warning border border-black"></div>
                                <div className="w-3 h-3 rounded-full bg-success border border-black"></div>
                                <span className="ml-4 text-white font-mono text-sm">request.json</span>
                            </div>
                            <pre className="code-brutal border-0 shadow-none m-0">
                                <code>{codeExample}</code>
                            </pre>
                        </div>

                        {/* Response Preview */}
                        <div className="card-brutal bg-surface p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                                <span className="font-mono text-sm text-gray-600">Response: 200 OK</span>
                            </div>
                            <div className="font-mono text-sm">
                                <span className="text-gray-500">{`{ `}</span>
                                <span className="text-usps-blue">"payment_url"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-success">"https://pay.postclaw.delivery/..."</span>
                                <span className="text-gray-500">{` }`}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                    {[
                        { value: '1', label: 'API Call' },
                        { value: '0', label: 'Auth Required' },
                        { value: '3-7', label: 'Days Delivery' },
                        { value: '195+', label: 'Countries' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="card-brutal p-4 text-center bg-white"
                        >
                            <div className="font-display text-3xl md:text-4xl text-usps-blue">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-gray-600 mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

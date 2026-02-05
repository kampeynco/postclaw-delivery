export function ApiSection() {
    const codeExample = `POST /v1/postcards
{
  "to": {
    "name": "Jane Doe",
    "address_line1": "123 Main St",
    "city": "Austin",
    "postal_or_zip": "78701",
    "country_code": "US"
  },
  "front_html": "<h1>Hello!</h1>",
  "back_message": "Sent with love.",
  "size": "4x6"
}`

    return (
        <section className="section-brutal bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <div className="badge-brutal bg-usps-blue text-white mb-4">
                            API
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl text-usps-black mb-4">
                            Minimal API. Maximum real-world output.
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Create a postcard with a single request. Supply recipient details, choose size, render the front with HTML/CSS, and add a message on the back.
                        </p>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            <h4 className="font-display text-lg text-usps-black">Built for automation:</h4>
                            <ul className="space-y-2">
                                {[
                                    'Webhook events for paid → printed → mailed',
                                    'Order status endpoint for tracking',
                                    'Idempotency support for safe retries',
                                ].map((feature) => (
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
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4">
                            <a href="/examples" className="font-medium text-usps-blue hover:underline cursor-pointer">
                                View code examples →
                            </a>
                            <a href="/docs" className="font-medium text-usps-blue hover:underline cursor-pointer">
                                Read the docs →
                            </a>
                            <a href="#pricing" className="font-medium text-usps-blue hover:underline cursor-pointer">
                                See pricing →
                            </a>
                        </div>
                    </div>

                    {/* Right: Code Block */}
                    <div className="card-brutal p-0 overflow-hidden">
                        <div className="bg-usps-blue px-4 py-2 border-b-4 border-black flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-usps-red border border-black"></div>
                            <div className="w-3 h-3 rounded-full bg-warning border border-black"></div>
                            <div className="w-3 h-3 rounded-full bg-success border border-black"></div>
                            <span className="ml-4 text-white font-mono text-sm">create_postcard.json</span>
                        </div>
                        <pre className="code-brutal border-0 shadow-none m-0">
                            <code>{codeExample}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}

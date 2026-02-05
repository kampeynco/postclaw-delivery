export function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Your AI Calls Our API',
            description: 'A single POST request with recipient details and postcard content. No API key needed.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'We Return a Payment Link',
            description: 'The AI receives a unique Stripe checkout URL to share with the user.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'User Pays via Stripe',
            description: 'The human approves the postcard by completing a secure Stripe payment.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                    <path fillRule="evenodd" d="M1.5 9.75v6.75a3 3 0 003 3h15a3 3 0 003-3V9.75H1.5zm4.5 5.25a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm4.5 0a.75.75 0 01.75-.75h6.01a.75.75 0 010 1.5h-6.01a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            number: '04',
            title: 'We Print & Mail Worldwide',
            description: 'Professional printing on glossy 100lb cardstock. Delivered in 3-7 days.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            ),
        },
    ]

    return (
        <section className="section-brutal bg-white" id="how-it-works">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="badge-brutal bg-usps-blue text-white mb-4">
                        HOW IT WORKS
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-usps-black">
                        Four Steps to Physical Mail
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="card-brutal p-6 bg-surface relative cursor-pointer"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-usps-red border-4 border-black flex items-center justify-center">
                                <span className="font-display text-xl text-white">{step.number}</span>
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 bg-usps-blue border-4 border-black flex items-center justify-center text-white mt-4 mb-4">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-xl text-usps-black mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>

                            {/* Connector Line (except last) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-usps-red"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Flow Diagram */}
                <div className="mt-16 card-brutal p-6 bg-cream">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-usps-blue border-2 border-black flex items-center justify-center">
                                <span className="text-white font-bold">🤖</span>
                            </div>
                            <span className="font-mono text-sm">AI Agent</span>
                        </div>
                        <div className="hidden md:block w-8 h-1 bg-black"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-surface border-2 border-black flex items-center justify-center">
                                <span className="font-mono text-xs">POST</span>
                            </div>
                            <span className="font-mono text-sm">API</span>
                        </div>
                        <div className="hidden md:block w-8 h-1 bg-black"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-usps-red border-2 border-black flex items-center justify-center text-white">
                                <span className="font-bold">$</span>
                            </div>
                            <span className="font-mono text-sm">Pay</span>
                        </div>
                        <div className="hidden md:block w-8 h-1 bg-black"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-success border-2 border-black flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </div>
                            <span className="font-mono text-sm">Delivered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

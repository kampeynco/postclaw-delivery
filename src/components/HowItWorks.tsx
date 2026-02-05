export function HowItWorks() {
    const steps = [
        {
            number: '1',
            title: 'Your AI calls the API',
            description: 'Send recipient details and postcard payload in a single request.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            number: '2',
            title: 'We return an approval link',
            description: 'We generate a unique Stripe Checkout URL your agent can share with the user.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            number: '3',
            title: 'The human approves payment',
            description: 'The postcard is authorized with a secure Stripe payment—no surprises, no hidden fees.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                    <path fillRule="evenodd" d="M1.5 9.75v6.75a3 3 0 003 3h15a3 3 0 003-3V9.75H1.5zm4.5 5.25a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm4.5 0a.75.75 0 01.75-.75h6.01a.75.75 0 010 1.5h-6.01a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            number: '4',
            title: 'We print & mail worldwide',
            description: 'We print on premium cardstock and ship to the destination address.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            ),
        },
    ]

    return (
        <section className="section-brutal bg-surface" id="how-it-works">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="badge-brutal bg-usps-red text-white mb-4">
                        HOW IT WORKS
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-usps-black">
                        Four steps to physical mail
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="card-brutal p-6 bg-white relative cursor-pointer"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-usps-red border-4 border-black flex items-center justify-center">
                                <span className="font-display text-lg text-white">{step.number}</span>
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 bg-usps-blue border-4 border-black flex items-center justify-center text-white mt-2 mb-4">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-lg text-usps-black mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Callout */}
                <div className="card-brutal p-6 bg-usps-blue text-white">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center text-usps-blue flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-display text-xl mb-1">Approval-first by design</h4>
                            <p className="text-blue-100">
                                Your AI can draft and initiate, but the user always controls sending.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

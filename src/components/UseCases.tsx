export function UseCases() {
    const useCases = [
        {
            title: 'Thank-you + follow-up',
            description: 'Donors, customers, supporters',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            ),
        },
        {
            title: 'Reminders',
            description: 'Appointments, renewals, compliance',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            title: 'Promos + announcements',
            description: 'Launches, events, outreach',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            title: 'High-intent moments',
            description: 'When email is ignored, mail gets opened',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            ),
        },
    ]

    return (
        <section className="section-brutal bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="badge-brutal bg-usps-blue text-white mb-4">
                        USE CASES
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-usps-black mb-4">
                        Built for agents, but loved by developers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Use Postclaw for moments where delivery matters and email gets ignored.
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.title}
                            className="card-brutal p-6 bg-surface cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-usps-blue border-4 border-black flex items-center justify-center text-white mb-4">
                                {useCase.icon}
                            </div>
                            <h3 className="font-display text-lg text-usps-black mb-1">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="card-brutal p-6 bg-cream text-center">
                    <p className="text-lg text-gray-700">
                        If your AI can trigger an email, it can trigger a postcard—<strong>with a human still in control.</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}

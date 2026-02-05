export function FAQ() {
    const faqs = [
        {
            question: 'Do I need an API key?',
            answer: 'Not to get started. Generate approval links fast—then add keys and restrictions when you\'re ready.',
        },
        {
            question: 'Why require payment approval?',
            answer: 'Because physical mail should be intentional. Your AI can draft and initiate—but the user stays in control.',
        },
        {
            question: 'Do you support webhooks?',
            answer: 'Yes. Subscribe to events like paid, printing, mailed, and delivered (where available).',
        },
        {
            question: 'How fast is delivery?',
            answer: 'Typical delivery is 3–7 days, depending on destination and local postal service.',
        },
        {
            question: 'Can I preview the postcard before sending?',
            answer: 'Yes—your user sees exactly what will be mailed before they approve payment.',
        },
    ]

    return (
        <section className="section-brutal bg-white" id="faq">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="badge-brutal bg-usps-blue text-white mb-4">
                        FAQ
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-usps-black">
                        Frequently asked questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.question}
                            className="card-brutal p-6 bg-surface"
                        >
                            <h3 className="font-display text-lg text-usps-black mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-gray-700">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

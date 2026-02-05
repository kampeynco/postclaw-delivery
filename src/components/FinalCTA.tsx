export function FinalCTA() {
    return (
        <section className="section-brutal bg-usps-blue">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                    Turn AI intent into something that shows up in the real world.
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#pricing" className="btn-brutal bg-white text-usps-blue text-lg px-8 py-4">
                        Generate a demo payment link
                    </a>
                    <a href="/docs" className="btn-brutal-outline border-white text-white hover:bg-white hover:text-usps-blue text-lg px-8 py-4">
                        Read API docs
                    </a>
                </div>
            </div>
        </section>
    )
}

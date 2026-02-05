import Link from 'next/link'

export function Navbar() {
    return (
        <nav className="fixed top-4 left-4 right-4 z-50">
            <div className="max-w-6xl mx-auto bg-white border-4 border-black shadow-brutal-sm">
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 bg-usps-blue border-2 border-black flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                        </div>
                        <span className="font-display text-2xl text-usps-black">POSTCLAW</span>
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="#how-it-works"
                            className="font-medium text-usps-black hover:text-usps-blue transition-colors cursor-pointer"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#pricing"
                            className="font-medium text-usps-black hover:text-usps-blue transition-colors cursor-pointer"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/docs"
                            className="font-medium text-usps-black hover:text-usps-blue transition-colors cursor-pointer"
                        >
                            Docs
                        </Link>
                        <Link
                            href="/examples"
                            className="font-medium text-usps-black hover:text-usps-blue transition-colors cursor-pointer"
                        >
                            Examples
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link href="#demo" className="btn-brutal-cta text-base py-2 px-4">
                        Generate Demo Link
                    </Link>
                </div>
            </div>
        </nav>
    )
}

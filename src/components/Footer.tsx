import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-usps-black text-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 cursor-pointer">
                            <div className="w-10 h-10 bg-usps-blue border-2 border-white flex items-center justify-center">
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
                            <span className="font-display text-2xl">POSTCLAW</span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-md mb-4">
                            Turn AI intent into physical mail. Your AI creates the postcard, we return a Stripe Checkout link for human approval, then we print and mail worldwide.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="https://twitter.com/postclaw" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://github.com/postclaw" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h4 className="font-display text-sm text-gray-400 mb-4">PRODUCT</h4>
                        <ul className="space-y-2">
                            <li><Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors cursor-pointer">How It Works</Link></li>
                            <li><Link href="#pricing" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
                            <li><Link href="/docs" className="text-gray-300 hover:text-white transition-colors cursor-pointer">API Docs</Link></li>
                            <li><Link href="/examples" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Examples</Link></li>
                            <li><Link href="#faq" className="text-gray-300 hover:text-white transition-colors cursor-pointer">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-display text-sm text-gray-400 mb-4">COMPANY</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:hello@postclaw.delivery" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</a></li>
                            <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Privacy</Link></li>
                            <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Postclaw. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Payments powered by <span className="text-white">Stripe</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

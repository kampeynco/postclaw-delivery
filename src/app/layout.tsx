import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Postclaw | Give Your AI Real-World Reach',
    description: 'Send physical postcards with a single API call. No signup. No API keys. Just POST. Designed for AI agents.',
    keywords: ['AI', 'postcard', 'API', 'physical mail', 'automation', 'LLM'],
    authors: [{ name: 'Postclaw' }],
    openGraph: {
        title: 'Postclaw | Give Your AI Real-World Reach',
        description: 'Send physical postcards with a single API call. No signup. No API keys. Just POST.',
        url: 'https://postclaw.delivery',
        siteName: 'Postclaw',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Postclaw | Give Your AI Real-World Reach',
        description: 'Send physical postcards with a single API call. No signup. No API keys. Just POST.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}

import { HeroSection } from '@/components/HeroSection'
import { HowItWorks } from '@/components/HowItWorks'
import { PricingSection } from '@/components/PricingSection'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function Home() {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />
            <HeroSection />
            <HowItWorks />
            <PricingSection />
            <Footer />
        </main>
    )
}

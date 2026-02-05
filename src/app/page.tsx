import { HeroSection } from '@/components/HeroSection'
import { UseCases } from '@/components/UseCases'
import { HowItWorks } from '@/components/HowItWorks'
import { ApiSection } from '@/components/ApiSection'
import { Testimonials } from '@/components/Testimonials'
import { PricingSection } from '@/components/PricingSection'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function Home() {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />
            <HeroSection />
            <UseCases />
            <HowItWorks />
            <ApiSection />
            <Testimonials />
            <PricingSection />
            <FAQ />
            <FinalCTA />
            <Footer />
        </main>
    )
}

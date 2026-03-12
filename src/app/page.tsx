import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ClassesSection from '@/components/ClassesSection'
import ScheduleSection from '@/components/ScheduleSection'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upform Studio | Reformer Pilates in Haacht',
  description: 'Upform Studio in Haacht — professionele reformer pilates lessen voor beginners en gevorderden. Ontdek onze klassen, uurrooster en prijzen.',
  alternates: {
    canonical: 'https://upform.be',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <ScheduleSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}

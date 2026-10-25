import LandingPage from '@/components/LandingPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upform — Move with Purpose',
  description: 'Upform Studio — Reformer Pilates classes, Academy, and Corporate programs. Upform Reformers — premium pilates equipment for studios and professionals.',
  alternates: {
    canonical: 'https://upform.be',
  },
  openGraph: {
    title: 'Upform — Move with Purpose',
    description: 'Discover Upform Studio for premium reformer pilates or Upform Reformers for professional equipment.',
    type: 'website',
    locale: 'nl_BE',
  },
}

export default function Home() {
  return <LandingPage />
}

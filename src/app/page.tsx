import FaqSection from '../components/pages/FaqSection'
import NewsletterSection from '../components/pages/NewsletterSection'
import VisionSection from '../components/pages/VisionSection'
import TrustComplianceSection from '../components/pages/TrustComplianceSection'
import HowItWorksSection from '../components/pages/HowItWorksSection'

import NeonHeroSection from '../components/pages/NeonHeroSection'
import ProblemsSection from '../components/pages/ProblemsSection'
import SolutionsSection from '../components/pages/SolutionsSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NartaQ | The AI-Powered Startup Funding Platform',
  description:
    'NartaQ is an AI-powered platform connecting the best founders with the right capital. Discover pre-seed startups in the France-Tunisia corridor or streamline your fundraising process. Join our founding community.',
  keywords: [
    'AI venture matching',
    'startup funding platform',
    'venture capital automation',
    'dealflow matching',
    'automated deal execution',
    'venture matchmaking',
    'AI powered funding',
    'startup investor matching',
    'AI deal sourcing',
    'funding platform development',
    'France Tunisia startups',
    'pre-seed funding',
    'fundraising process',
  ],
  openGraph: {
    title: 'NartaQ | The AI-Powered Startup Funding Platform',
    description:
      'NartaQ is an AI-powered platform connecting the best founders with the right capital. Join our founding community.',
    images: [
      {
        url: '/images/home-og.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ - AI-Powered Platform for Startup Funding',
      },
    ],
  },
  twitter: {
    title: 'NartaQ | The AI-Powered Startup Funding Platform',
    description:
      'AI-powered platform connecting the best founders with the right capital. Join our founding community.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-black text-white relative overflow-hidden'>
      {/* New Neon-Style Hero Section */}
      <NeonHeroSection />

      {/* Problems Section - What we're solving */}
      <ProblemsSection />

      {/* Solutions Section - How we're solving it */}
      <SolutionsSection />

      {/* How It Works - The Full Journey */}
      <HowItWorksSection />

      {/* Main Content Sections */}
      <VisionSection />

      <TrustComplianceSection />
      {/* Pricing and Resources */}
      <FaqSection />

      <NewsletterSection />
    </div>
  )
}

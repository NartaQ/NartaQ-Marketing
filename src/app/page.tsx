import FaqSection from '../components/FaqSection'
import NewsletterSection from '../components/NewsletterSection'
import DAOSection from '../components/DAOSection'
import TrustComplianceSection from '../components/TrustComplianceSection'
import HowItWorksSection from '../components/HowItWorksSection'

import NeonHeroSection from '../components/NeonHeroSection'
import ProblemsSection from '../components/ProblemsSection'
import SolutionsSection from '../components/SolutionsSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NartaQ - The AI-Powered Protocol for Startup Funding',
  description:
    'Decentralize discovery, simplify execution. AI-powered venture matchmaking protocol connects founders with the right investors through trustless matching and automated deal execution.',
  keywords: [
    'AI venture matching',
    'startup funding protocol',
    'venture capital automation',
    'dealflow matching',
    'automated deal execution',
    'venture matchmaking',
    'AI powered funding',
    'decentralized venture capital',
    'startup investor matching',
    'AI deal sourcing',
  ],
  openGraph: {
    title: 'NartaQ - The AI-Powered Protocol for Startup Funding',
    description:
      'Decentralize discovery, simplify execution. AI-powered venture matchmaking protocol connects founders with the right investors.',
    images: [
      {
        url: '/images/home-og.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ - AI-Powered Protocol for Startup Funding',
      },
    ],
  },
  twitter: {
    title: 'NartaQ - The AI-Powered Protocol for Startup Funding',
    description:
      'Decentralize discovery, simplify execution. AI-powered venture matchmaking protocol.',
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
      <DAOSection />

      {/* <EcosystemSection /> */}
      <TrustComplianceSection />
      {/* Pricing and Resources */}
      <FaqSection />

      <NewsletterSection />
    </div>
  )
}

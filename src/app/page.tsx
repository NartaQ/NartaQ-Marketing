import StorytellingSection from '../components/StorytellingSection'

import CoreToolsShowcase from '../components/CoreToolsShowcase'
import IndustryVerticals from '../components/IndustryVerticals'

import BountySection from '../components/BountySection'
import EcosystemSection from '../components/EcosystemSection'
import FaqSection from '../components/FaqSection'
import FinalCTASection from '../components/FinalCTASection'
import NewsletterSection from '../components/NewsletterSection'
import OrchestrationSection from '../components/OrchestrationSection'
import ResourceHub from '../components/ResourceHub'
import TrustComplianceSection from '../components/TrustComplianceSection'

import NeonHeroSection from '../components/NeonHeroSection'
import PerformanceMetrics from '../components/PerformanceMetrics'
import InteractiveShowcase from '../components/InteractiveShowcase'
import { Metadata } from 'next'
import HookText from '@/components/HookText'
import Hero from '@/components/test/herotest'

export const metadata: Metadata = {
  title: 'NartaQ - Elite Startup Investment & Talent Platform',
  description:
    'Connect with smart investors, hire A-player talent, or find premium projects. Exclusive invitation-only platform for funded startups, accredited investors, and expert service providers.',
  keywords: [
    'startup funding platform',
    'elite investment network',
    'premium talent marketplace',
    'startup investor matching',
    'venture capital platform',
    'expert service providers',
    'France Tunisia startups',
    'exclusive investor network',
    'startup talent acquisition',
    'premium bounty system',
  ],
  openGraph: {
    title: 'NartaQ - Elite Startup Investment & Talent Platform',
    description:
      'Connect with smart investors, hire A-player talent, or find premium projects. Exclusive invitation-only platform for the startup ecosystem.',
    images: [
      {
        url: '/images/home-og.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ Homepage - Elite Startup Investment & Talent Platform',
      },
    ],
  },
  twitter: {
    title: 'NartaQ - Elite Startup Investment & Talent Platform',
    description:
      'Connect with smart investors, hire A-player talent, or find premium projects. Exclusive invitation-only platform.',
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
      {/* Performance Metrics Section */}
      <PerformanceMetrics />
      {/* Interactive Feature Showcase */}
      <InteractiveShowcase />
      {/* Main Content Sections */}

      <HookText />

      <OrchestrationSection />
      <StorytellingSection />
      <CoreToolsShowcase />
      <IndustryVerticals />

      <Hero />
      {/* <EcosystemSection /> */}
      <BountySection />
      <TrustComplianceSection />
      {/* Pricing and Resources */}
      <ResourceHub />
      <FinalCTASection />
      {/* Footer Sections */}
      <FaqSection />

      <NewsletterSection />
    </div>
  )
}

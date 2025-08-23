import FaqSection from '../components/FaqSection'
import NewsletterSection from '../components/NewsletterSection'
import OrchestrationSection from '../components/OrchestrationSection'
import TrustComplianceSection from '../components/TrustComplianceSection'

import NeonHeroSection from '../components/NeonHeroSection'
import PerformanceMetrics from '../components/PerformanceMetrics'
import InteractiveShowcase from '../components/InteractiveShowcase'
import { Metadata } from 'next'
import SolutionsSection from '@/components/SolutionsSection'

export const metadata: Metadata = {
  title: 'NartaQ - Where Startups Find Investors & Top Talent',
  description:
    'Find smart investors, hire top talent, or get premium projects. Invite-only platform for funded startups, real investors, and expert service providers.',
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
    title: 'NartaQ - Where Startups Find Investors & Top Talent',
    description:
      'Find smart investors, hire top talent, or get premium projects. Invite-only platform for the startup ecosystem.',
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
    title: 'NartaQ - Where Startups Find Investors & Top Talent',
    description:
      'Find smart investors, hire top talent, or get premium projects. Invite-only platform.',
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
      <SolutionsSection />
      {/* Main Content Sections */}

      <OrchestrationSection />

      {/* <EcosystemSection /> */}
      <TrustComplianceSection />
      {/* Pricing and Resources */}
      <FaqSection />

      <NewsletterSection />
    </div>
  )
}

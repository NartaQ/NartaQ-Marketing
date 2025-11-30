import FaqSection from '../components/pages/FaqSection'
import NewsletterSection from '../components/pages/NewsletterSection'
import VisionSection from '../components/pages/VisionSection'
import TrustComplianceSection from '../components/pages/TrustComplianceSection'
import HowItWorksSection from '../components/pages/HowItWorksSection'
import GovernanceSection from '../components/pages/GovernanceSection'
import NeonHeroSection from '../components/pages/NeonHeroSection'
import ProblemsSection from '../components/pages/ProblemsSection'
import SolutionsSection from '../components/pages/SolutionsSection'
import { Metadata } from 'next'
import { getCohortStats } from './actions/cohort-stats'

export const metadata: Metadata = {
  title: 'NartaQ | The AI-Powered Startup Funding Platform',
  description:
    'AI-powered platform connecting founders with the right investors. Discover pre-seed startups or streamline your fundraising process.',
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
    'pre-seed funding',
    'fundraising process',
  ],
  openGraph: {
    title: 'NartaQ | The AI-Powered Startup Funding Platform',
    description:
      'NartaQ is an AI-powered platform connecting the best founders with the right capital. Join our founding community.',
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

export default async function Home() {
  const stats = await getCohortStats()

  return (
    <div className='flex min-h-screen flex-col relative overflow-hidden'>
      {/* New Neon-Style Hero Section */}
      <NeonHeroSection cohortStats={stats} />

      {/* Problems Section - What we're solving */}
      <ProblemsSection />

      {/* Solutions Section - How we're solving it */}
      <SolutionsSection />

      {/* Governance Infrastructure - Blockchain value prop */}
      <GovernanceSection />

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

import FaqSection from '../components/FaqSection'
import NewsletterSection from '../components/NewsletterSection'
import DAOSection from '../components/DAOSection'
import TrustComplianceSection from '../components/TrustComplianceSection'

import NeonHeroSection from '../components/NeonHeroSection'
import ProblemsSection from '../components/ProblemsSection'
import SolutionsSection from '../components/SolutionsSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NartaQ - The Best Way to Find Tunisia Startups',
  description:
    'Elite investors team up to find and check the best Tunisian startups. One shared platform. One community.',
  keywords: [
    'dealflow platform',
    'France Tunisia corridor',
    'investor network',
    'DAO governance',
    'startup funding',
    'collective intelligence',
    'decentralized sourcing',
    'Tunisia startup ecosystem',
    'French investors',
    'community-owned platform',
  ],
  openGraph: {
    title: 'NartaQ - The Best Way to Find Tunisia Startups',
    description:
      'Elite investors team up to find and check the best Tunisian startups. One shared platform. One community.',
    images: [
      {
        url: '/images/home-og.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ - Collective Intelligence Deal Engine for France-Tunisia',
      },
    ],
  },
  twitter: {
    title: 'NartaQ - The Best Way to Find Tunisia Startups',
    description:
      'Elite investors team up to find and check the best Tunisian startups.',
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

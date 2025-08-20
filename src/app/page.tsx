import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import StorytellingSection from '../components/StorytellingSection'

import CoreToolsShowcase from '../components/CoreToolsShowcase'
import IndustryVerticals from '../components/IndustryVerticals'

import EcosystemSection from '../components/EcosystemSection'
import TrustComplianceSection from '../components/TrustComplianceSection'
import OrchestrationSection from '../components/OrchestrationSection'
import BountySection from '../components/BountySection'
import ResourceHub from '../components/ResourceHub'
import FinalCTASection from '../components/FinalCTASection'
import FaqSection from '../components/FaqSection'
import BlogSection from '../components/BlogSection'
import NewsletterSection from '../components/NewsletterSection'

import PremiumParticles from '../components/ui/premium-particles'

import HookText from '@/components/HookText'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-black text-white relative overflow-hidden'>
      {/* Premium background layers */}
      <div className='fixed inset-0 -z-10'>
        {/* Base gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-black via-[#232428] to-[#1a1b1f]'></div>

        {/* Floating orbs for ambiance */}
        <div className='absolute top-1/4 left-1/6 w-96 h-96 bg-[#a98b5d]/3 rounded-full blur-3xl floating'></div>
        <div className='absolute bottom-1/3 right-1/5 w-80 h-80 bg-[#dcd7ce]/2 rounded-full blur-3xl floating'></div>
        <div className='absolute top-2/3 left-1/3 w-64 h-64 bg-[#a98b5d]/2 rounded-full blur-3xl floating'></div>

        {/* Premium texture overlay */}
        <div className='absolute inset-0 luxury-texture opacity-40'></div>

        {/* Subtle noise for premium feel */}
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      {/* Premium animated particles */}
      <PremiumParticles />
      {/* Header */}

      {/* Main Content Sections */}
      {/* <HeroSection /> */}
      <HookText />
      {/* <FlipStackDemo /> */}
      <StorytellingSection />
      <CoreToolsShowcase />
      <IndustryVerticals />
      {/* Original Existing Sections */}
      <EcosystemSection />
      <BountySection />
      <OrchestrationSection />
      <TrustComplianceSection />
      {/* Pricing and Resources */}
      <ResourceHub />
      <FinalCTASection />
      {/* Footer Sections */}
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  )
}

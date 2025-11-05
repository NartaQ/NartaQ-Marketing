'use client'

import { Sparkles, ArrowRight, Zap, Users, Target } from 'lucide-react'
import Link from 'next/link'
import { animatePageOut } from '../pageTransition/animations'
import { usePathname, useRouter } from 'next/navigation'

export default function NeonHeroSection() {
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Don't animate if we're already on the page
    if (pathname === href) return

    // Trigger page transition animation
    animatePageOut(href, router)
  }

  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>
      {/* Animated Grid Background */}
      <div className='absolute inset-0 grid-pattern opacity-40' />
      
      {/* Main Content */}
      <div className='relative z-10 max-w-6xl mx-auto px-4 text-center bg-blend-difference '>
        {/* Premium Badge */}
        <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8'>
          <Sparkles className='w-4 h-4 text-[#a98b5d]' />
          <span className='text-sm font-medium text-[#dcd7ce]'>
            AI-POWERED PLATFORM IN DEVELOPMENT
          </span>
        </div>

        {/* Main Headline */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2'>
          <span className='text-[#dcd7ce]'>Building the AI-Powered </span>
          <br />
          <span className='text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
            Platform
          </span>{' '}
          <span className='text-[#dcd7ce]'>for Startup Funding</span>
        </h1>

        {/* Subheadline */}
        <p className='text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-6 leading-relaxed px-4'>
          We're building a merit-based platform that connects the best founders
          with the right capital, regardless of location or network. Get matched
          with investors or discover your next investment with NartaQ.
        </p>

        {/* CTA Button */}
        <div className='flex justify-center items-center mb-8 sm:mb-12 px-4'>
          <Link
            title='Get Early Access'
            href='/apply'
            onClick={(e) => handleNavigation(e, '/apply')}
            className='group relative px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#a98b5d]/50'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <div className='relative flex items-center justify-center gap-2'>
              <Sparkles className='w-5 h-5 group-hover:rotate-180 transition-transform duration-500' />
              Get Early Access
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </div>
          </Link>
        </div>

        {/* Current Status/Milestone */}
        <div className='mb-8 px-4'>
          <div className='inline-flex items-center gap-3 px-4 py-2 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-full backdrop-blur-xl'>
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
            <span className='text-sm text-[#dcd7ce] font-medium'>
              Phase 1: Building our founding community of 1,000+ participants
            </span>
          </div>
        </div>

        {/* Key Features Pills */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto px-4'>
          {[
            { icon: Users, text: 'Community Sourcing' },
            { icon: Target, text: 'AI-Powered Matching' },
            { icon: Zap, text: 'Transparent Process' },
          ].map((feature, index) => (
            <div
              key={index}
              className='flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 border border-[#a98b5d]/20 rounded-full backdrop-blur-xl'
            >
              <feature.icon className='w-3 h-3 sm:w-4 sm:h-4 text-[#a98b5d] flex-shrink-0' />
              <span className='text-xs sm:text-sm text-[#dcd7ce] whitespace-nowrap'>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none' />
    </div>
  )
}

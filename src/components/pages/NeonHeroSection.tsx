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
            LIMITED BETA ACCESS OPEN
          </span>
        </div>

        {/* Main Headline */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2'>
          <span className='text-[#dcd7ce]'>Raise Capital </span>
          <br />
          <span className='text-glow bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
            Without The Warm Intro
          </span>
        </h1>

        {/* Subheadline */}
        <p className='text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-6 leading-relaxed px-4'>
          NartaQ's AI instantly matches you with active investors looking for deals like yours.
          Stop chasing leads. Start closing rounds.
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
              Get Matched Now
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </div>
          </Link>
        </div>

        {/* Current Status/Milestone */}
        <div className='mb-8 px-4'>
          <div className='inline-flex items-center gap-3 px-4 py-2 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-full backdrop-blur-xl'>
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
            <span className='text-sm text-[#dcd7ce] font-medium'>
              Join 100+ Founders on the Waitlist
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Gradient Fade */}
    </div>
  )
}

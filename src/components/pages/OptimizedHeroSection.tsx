'use client'

import { Sparkles, ArrowRight, Zap, Users, Target } from 'lucide-react'
import Link from 'next/link'
import { animatePageOut } from '../pageTransition/animations'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function OptimizedHeroSection() {
  const [shouldLoadAnimations, setShouldLoadAnimations] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  // Delay heavy animations and components
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadAnimations(true)
    }, 2000) // Load animations after 2s for better performance

    return () => clearTimeout(timer)
  }, [])

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Don't animate if we're already on the page
    if (pathname === href) return

    // Trigger page transition animation only after initial load
    if (shouldLoadAnimations) {
      animatePageOut(href, router)
    } else {
      router.push(href)
    }
  }

  return (
    <div className='hero-critical'>
      {/* Simplified grid background - no complex animations initially */}
      <div className='absolute inset-0 opacity-30' style={{
        backgroundImage: `linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Main Content using critical CSS classes */}
      <div className='hero-content'>
        {/* Premium Badge */}
        <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8'>
          <Sparkles className='w-4 h-4 text-[#a98b5d]' />
          <span className='text-sm font-medium text-[#dcd7ce]'>
            FOUNDING COHORT NOW OPEN
          </span>
        </div>

        {/* Main Headline using critical CSS */}
        <h1 className='hero-title'>
          <span className='text-[#dcd7ce]'>Stop Pitching. </span>
          <br />
          <span className='hero-gradient'>
            Start Matching.
          </span>
        </h1>

        {/* Subheadline using critical CSS */}
        <p className='hero-subtitle'>
          AI matching + automated SPV creation + blockchain governance. Get funded faster with institutional-grade infrastructure from day one.
          <br />
          <span className='text-[#a98b5d] font-semibold'>250 founding spots. Applications close when full.</span>
        </p>

        {/* CTA Button using critical CSS */}
        <div className='flex justify-center items-center mb-8 sm:mb-12 px-4'>
          <Link
            title='Get Early Access'
            href='/apply'
            onClick={(e) => handleNavigation(e, '/apply')}
            className='cta-button'
          >
            <Sparkles className={`w-5 h-5 ${shouldLoadAnimations ? 'group-hover:rotate-180 transition-transform duration-500' : ''}`} />
            Claim Your Spot
            <ArrowRight className={`w-5 h-5 ${shouldLoadAnimations ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
          </Link>
        </div>

        {/* Current Status/Milestone */}
        <div className='mb-8 px-4'>
          <div className='inline-flex items-center gap-3 px-4 py-2 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-full backdrop-blur-xl'>
            <div className={`w-2 h-2 bg-green-500 rounded-full ${shouldLoadAnimations ? 'animate-pulse' : ''}`} />
            <span className='text-sm text-[#dcd7ce] font-medium'>
              127 of 250 founding spots taken • Applications close Dec 31st or when full
            </span>
          </div>
        </div>

        {/* Key Features Pills - Load with animation delay */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto px-4 non-critical ${shouldLoadAnimations ? 'loaded' : ''}`}>
          {[
            { icon: Users, text: 'Community Sourcing' },
            { icon: Target, text: 'AI-Powered Matching' },
            { icon: Zap, text: 'Transparent Process' },
          ].map((feature, index) => (
            <div
              key={index}
              className='flex items-center gap-2 px-4 py-2 bg-[#a98b5d]/5 border border-[#a98b5d]/20 rounded-full backdrop-blur-xl'
            >
              <feature.icon className='w-4 h-4 text-[#a98b5d]' />
              <span className='text-sm text-[#dcd7ce] font-medium'>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
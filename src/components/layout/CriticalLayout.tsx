'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import Link from 'next/link'

// Critical components that load immediately
const NavigationSkeleton = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            NartaQ
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/for-founders" className="text-gray-300 hover:text-white transition-colors">
            For Founders
          </Link>
          <Link href="/for-investors" className="text-gray-300 hover:text-white transition-colors">
            For Investors
          </Link>
          <Link href="/apply" className="bg-[#a98b5d] hover:bg-[#8b7249] text-white px-4 py-2 rounded-lg transition-colors">
            Apply
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

const FooterSkeleton = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-gray-400">© 2025 NartaQ SAS. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

// Lazy load heavy components
const FullNavigation = lazy(() =>
  import('@/components/pages/UnifiedNavigation').then(module => ({ default: module.default }))
)

const FullFooter = lazy(() =>
  import('@/components/pages/Footer').then(module => ({ default: module.default }))
)

const LenisProvider = lazy(() =>
  import('@/components/pages/LenisProvider').then(module => ({ default: module.default }))
)

const IntercomProvider = lazy(() =>
  import('@/components/lazyLoadIntercom').then(module => ({ default: module.default }))
)

interface CriticalLayoutProps {
  children: React.ReactNode
}

export function CriticalLayout({ children }: CriticalLayoutProps) {
  const [enhancedMode, setEnhancedMode] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true)
        // Enable enhanced mode after first interaction
        setTimeout(() => setEnhancedMode(true), 200)
      }
    }

    // Listen for user interactions
    const events = ['mousedown', 'touchstart', 'keydown', 'scroll', 'click']
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true, once: true })
    })

    // Fallback: enable enhanced mode after 4 seconds
    const fallbackTimeout = setTimeout(() => {
      setEnhancedMode(true)
    }, 4000)

    return () => {
      clearTimeout(fallbackTimeout)
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction)
      })
    }
  }, [userInteracted])

  if (!enhancedMode) {
    // Critical path: minimal layout
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <NavigationSkeleton />
        <main className="pt-16">
          {children}
        </main>
        <FooterSkeleton />
      </div>
    )
  }

  // Enhanced mode: full layout with all features
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <NavigationSkeleton />
        <main className="pt-16">{children}</main>
        <FooterSkeleton />
      </div>
    }>
      <LenisProvider>
        <FullNavigation bannerSettings={{
          bannerEnabled: true,
          banners: [{
            bannerText: 'Cohort Urgency Banner',
            bannerLinkText: 'Apply',
            bannerLinkUrl: '/apply/cohort-urgency',
            bannerBackgroundColor: '#a98b5d',
            bannerTextColor: 'white',
          }],
          rotationInterval: 5,
          scrollSpeed: 50,
          bannerDismissible: true
        }} />
        <main className='main mt-[var(--header-height)]'>
          {children}
        </main>
        <FullFooter />
      </LenisProvider>
      <IntercomProvider />
    </Suspense>
  )
}
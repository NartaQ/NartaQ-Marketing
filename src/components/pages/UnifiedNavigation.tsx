'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import SideNav from '../sideNavBar/SideNav'
import Banner from '../layout/Banner';
import { type BannerSettings } from '@/app/actions/banner-settings'

interface UnifiedNavigationProps {
  bannerSettings: BannerSettings
}

export default function UnifiedNavigation({ bannerSettings }: UnifiedNavigationProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  const pathname = usePathname()
  const scrollPositionRef = useRef(0)

  // Close nav when pathname changes
  useEffect(() => {
    if (isNavOpen) setIsNavOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Show floating nav when scrolled down more than 100px
      setShowFloatingNav(currentScrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock when nav is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    const body = document.body

    if (isNavOpen) {
      // Store the current scroll position
      scrollPositionRef.current = window.scrollY
      body.style.position = 'fixed'
      body.style.top = `-${scrollPositionRef.current}px`
      body.style.width = '100%'
      body.classList.add('nav-open', 'modal-open')
    } else {
      // Restore the scroll position
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      body.classList.remove('nav-open', 'modal-open')

      window.scrollTo({ top: scrollPositionRef.current, behavior: 'instant' })
    }

    return () => {
      // Cleanup on unmount
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      body.classList.remove('nav-open', 'modal-open')
    }
  }, [isNavOpen])

  // Check if banner is enabled for layout calculations
  const showBanner = bannerSettings?.bannerEnabled

  return (
    <>
      {/* Dynamic Cohort Banner - Always visible */}
      <Banner settings={bannerSettings} />

      {/* Header - only show when at top of page and nav is not open */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: scrollY > 100 || isNavOpen ? -120 : 0,
          opacity: scrollY > 100 || isNavOpen ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className='fixed left-0 right-0 z-50'
        style={{ 
          minHeight: 'var(--header-height)',
          top: showBanner ? 'var(--banner-height)' : '0'
        }}
      >
        <Header
          onMobileMenuToggle={() => setIsNavOpen(!isNavOpen)}
          isMobileMenuOpen={isNavOpen}
        />
      </motion.div>

      {/* Floating Navigation Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: showFloatingNav || isNavOpen ? 1 : 0,
          opacity: showFloatingNav || isNavOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`fixed right-4 sm:right-6 md:right-8 z-50 ${
          showBanner ? 'top-[calc(1rem+var(--banner-height))] sm:top-[calc(1.5rem+var(--banner-height))] md:top-[calc(2rem+var(--banner-height))]' : 'top-4 sm:top-6 md:top-8'
        }`}
        style={{
          pointerEvents: showFloatingNav || isNavOpen ? 'auto' : 'none',
          position: 'fixed', // Ensure it stays fixed regardless of content
        }}
      >
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className='w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-[#A98B5D] hover:bg-[#c4a77c] cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105'
          aria-label='Toggle navigation menu'
        >
          <div className='w-full relative'>
            <div
              className={`w-2/5 h-px bg-black block mx-auto relative transition-transform duration-300 ${isNavOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
            ></div>
            <div
              className={`w-2/5 h-px bg-black block mx-auto relative transition-transform duration-300 ${isNavOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
            ></div>
          </div>
        </button>
      </motion.div>

      {/* Navigation Menu */}
      {isNavOpen && (
        <div
          onClick={() => setIsNavOpen(false)}
          className='fixed inset-0 bg-transparent z-30'
        />
      )}

      <AnimatePresence mode='wait'>{isNavOpen && <SideNav />}</AnimatePresence>
    </>
  )
}

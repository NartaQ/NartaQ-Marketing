'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import Header from './Header'
import Nav from '../sideNavBar/SideNav'

export default function UnifiedNavigation() {
  const [scrollY, setScrollY] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(true)
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

  return (
    <>
      {/* Hiring Banner */}
      {isBannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--lion)] text-black">
          <div className="relative flex items-center justify-center px-4 py-2 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">🚀</span>
              <span>We're Hiring!</span>
              <Link 
                href="/careers"
                className="underline hover:no-underline transition-all duration-200 font-semibold hover:opacity-80"
              >
                Join our team
              </Link>
            </div>
            
            <button
              onClick={() => setIsBannerVisible(false)}
              className="absolute right-2 p-1 hover:bg-black/10 rounded-full transition-colors duration-200"
              aria-label="Close banner"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

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
          top: isBannerVisible ? 'var(--banner-height)' : '0'
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
          isBannerVisible ? 'top-[calc(1rem+var(--banner-height))] sm:top-[calc(1.5rem+var(--banner-height))] md:top-[calc(2rem+var(--banner-height))]' : 'top-4 sm:top-6 md:top-8'
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

      <AnimatePresence mode='wait'>{isNavOpen && <Nav />}</AnimatePresence>
    </>
  )
}

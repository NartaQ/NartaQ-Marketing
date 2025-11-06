'use client'

/**
 * Smart Banner Component
 * 
 * Supports two banner types:
 * 1. Standard CMS banners - Regular text banners from Sanity CMS
 * 2. Cohort Urgency Banner - Special prominent banner showing real-time cohort stats
 * 
 * To enable the cohort urgency banner, set bannerLinkUrl to '/apply/cohort-urgency'
 * The component will automatically detect this and render the enhanced urgency UI with:
 * - Live stats (founders/investors joined, spots remaining)
 * - Dynamic progress bar
 * - Color-coded urgency states (green/gold -> orange -> red)
 * - Prominent call-to-action button
 */

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { X, AlertCircle, TrendingUp, Users } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { type BannerSettings, type BannerItem } from '@/app/actions/banner-settings'
import { getCohortStats } from '@/app/actions/cohort-stats'

interface BannerProps {
  settings: BannerSettings
}

export default function Banner({ settings }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shouldScroll, setShouldScroll] = useState(false)
  const [stats, setStats] = useState<any>(null)
  const [isLoadingStats, setIsLoadingStats] = useState(true)
  const textRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Provide default values if settings is undefined
  const { 
    bannerEnabled = true,  // Default to true so cohort banner shows
    banners = [], 
    rotationInterval = 5, 
    scrollSpeed = 50, 
    bannerDismissible = true 
  } = settings || {}
  
  const currentBanner = banners[currentIndex]

  // Debug logging
  useEffect(() => {
    console.log('Banner Debug:', { 
      bannerEnabled, 
      bannersLength: banners.length, 
      currentBanner,
      settings 
    })
  }, [bannerEnabled, banners, currentBanner, settings])

  // Check if this is a cohort urgency banner
  const isCohortBanner = currentBanner?.bannerLinkUrl === '/apply/cohort-urgency'

  // Fetch cohort stats if it's a cohort banner
  useEffect(() => {
    if (!isCohortBanner) {
      setIsLoadingStats(false)
      return
    }

    const fetchStats = async () => {
      const result = await getCohortStats()
      if (result.success && result.data) {
        setStats(result.data)
      }
      setIsLoadingStats(false)
    }
    fetchStats()
    
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [isCohortBanner])

  // Rotate through banners if multiple
  useEffect(() => {
    if (banners.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, rotationInterval * 1000)

    return () => clearInterval(interval)
  }, [banners.length, rotationInterval])

  // Check if text needs scrolling (only for non-cohort banners)
  useEffect(() => {
    if (isCohortBanner || !textRef.current || !containerRef.current) return

    const checkScroll = () => {
      const textWidth = textRef.current?.scrollWidth || 0
      const containerWidth = containerRef.current?.clientWidth || 0
      setShouldScroll(textWidth > containerWidth - 100)
    }

    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [currentBanner, currentIndex, isCohortBanner])

  if (!bannerEnabled || !isVisible || !currentBanner) {
    return null
  }

  // Calculate animation duration based on text length and scroll speed
  const textWidth = textRef.current?.scrollWidth || 0
  const scrollDuration = shouldScroll ? textWidth / scrollSpeed : 0

  // Render cohort urgency banner
  if (isCohortBanner) {
    if (isLoadingStats || !stats) {
      return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d]  text-white">
          <div className="px-4 py-4 md:py-5 animate-pulse">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="h-6 bg-white/20 rounded w-2/3" />
              <div className="h-6 bg-white/20 rounded w-24" />
            </div>
          </div>
        </div>
      )
    }

    const {  totalApplications, spotsRemaining, percentageFilled, isNearCapacity, isFull } = stats

    return (
      <div 
        className={`fixed top-0 left-0 right-0 z-[100] overflow-hidden transition-all duration-300 ${
          isFull 
            ? 'bg-gradient-to-r from-red-600 to-red-700'
            : isNearCapacity 
              ? 'bg-gradient-to-r from-orange-500 to-red-500'
              : 'bg-gradient-to-r from-[#a98b5d] to-[#8B7349]'
        } text-white shadow-lg`}
      >
        <div className="px-4 py-2.5 md:py-3">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-4">
              {/* Left side - Main message */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <p className="text-sm md:text-base font-bold">{isFull ? (
                    'Founding Cohort Full - Join Waitlist'
                  ) : isNearCapacity ? (
                    `Only ${spotsRemaining} spots left in founding cohort!`
                  ) : (
                    `Join our founding cohort - ${totalApplications}/1000 members`
                  )}
                </p>
              </div>

              {/* Center - Progress bar (desktop only) */}
              <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                <div className="w-32 xl:w-48 bg-white/20 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-white transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${percentageFilled}%` }}
                  />
                </div>
                <span className="text-xs font-semibold whitespace-nowrap">{percentageFilled}%</span>
              </div>

              {/* Right side - CTA */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {!isFull && (
                  <Link
                    href="/apply"
                    style={{
                      animation: 'pulse-scale 1.5s ease-in-out infinite'
                    }}
                    className="inline-flex items-center gap-2 px-3 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d]  text-black font-bold rounded-lg hover:opacity-90 transition-all duration-200 text-xs md:text-sm shadow-lg hover:shadow-xl"
                  >
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Apply Now</span>
                    <span className="sm:hidden">Apply</span>
                  </Link>
                )}
                {isFull && (
                  <Link
                    href="/apply"
                    style={{
                      animation: 'pulse-scale 2s ease-in-out infinite'
                    }}
                    className="inline-flex items-center gap-2 px-3 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-lg hover:opacity-90 transition-all duration-200 text-xs md:text-sm"
                  >
                    Join Waitlist
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}</style>
      </div>
    )
  }

  // Render standard CMS banner
  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[100] overflow-hidden"
      style={{ 
        backgroundColor: currentBanner.bannerBackgroundColor,
        color: currentBanner.bannerTextColor 
      }}
    >
      <div 
        ref={containerRef}
        className="relative flex items-center justify-center px-4 py-2 text-sm font-medium overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 max-w-full"
          >
            <div 
              ref={textRef}
              className={`flex items-center gap-2 ${shouldScroll ? 'whitespace-nowrap' : ''}`}
              style={shouldScroll ? {
                animation: `scroll-text ${scrollDuration}s linear infinite`,
              } : undefined}
            >
              {currentBanner.bannerEmoji && <span>{currentBanner.bannerEmoji}</span>}
              <span>{currentBanner.bannerText}</span>
              <Link 
                href={currentBanner.bannerLinkUrl}
                className="underline hover:no-underline transition-all duration-200 font-semibold hover:opacity-80"
              >
                {currentBanner.bannerLinkText}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {bannerDismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 p-1 hover:bg-black/10 rounded-full transition-colors duration-200 z-10"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes scroll-text {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { type BannerSettings, type BannerItem } from '@/app/actions/banner-settings'

interface BannerProps {
  settings: BannerSettings
}

export default function Banner({ settings }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shouldScroll, setShouldScroll] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { bannerEnabled, banners, rotationInterval = 5, scrollSpeed = 50, bannerDismissible } = settings
  const currentBanner = banners[currentIndex]

  // Rotate through banners if multiple
  useEffect(() => {
    if (banners.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, rotationInterval * 1000)

    return () => clearInterval(interval)
  }, [banners.length, rotationInterval])

  // Check if text needs scrolling
  useEffect(() => {
    if (!textRef.current || !containerRef.current) return

    const checkScroll = () => {
      const textWidth = textRef.current?.scrollWidth || 0
      const containerWidth = containerRef.current?.clientWidth || 0
      setShouldScroll(textWidth > containerWidth - 100) // -100 for padding and button
    }

    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [currentBanner, currentIndex])

  if (!bannerEnabled || !isVisible || !currentBanner) {
    return null
  }

  // Calculate animation duration based on text length and scroll speed
  const textWidth = textRef.current?.scrollWidth || 0
  const scrollDuration = shouldScroll ? textWidth / scrollSpeed : 0

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

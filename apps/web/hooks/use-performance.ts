'use client'

import { useEffect } from 'react'

export function usePerformanceOptimization() {
 useEffect(() => {
  // Preload critical resources
  const preloadCriticalResources = () => {
   // Preload fonts
   const fontLink = document.createElement('link')
   fontLink.rel = 'preload'
   fontLink.as = 'font'
   fontLink.type = 'font/woff2'
   fontLink.crossOrigin = 'anonymous'
   document.head.appendChild(fontLink)

   // Preload critical images
   const criticalImages: string[] = [
    // Add your critical image paths here
   ]

   criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
   })
  }

  // Optimize scroll performance
  const optimizeScrolling = () => {
   let ticking = false

   const updateScrollPosition = () => {
    // Update scroll-dependent elements
    ticking = false
   }

   const requestTick = () => {
    if (!ticking) {
     requestAnimationFrame(updateScrollPosition)
     ticking = true
    }
   }

   window.addEventListener('scroll', requestTick, { passive: true })

   return () => {
    window.removeEventListener('scroll', requestTick)
   }
  }

  // Reduce layout thrashing
  const optimizeLayout = () => {
   // Batch DOM reads and writes
   const elements = document.querySelectorAll('[data-animate]')

   elements.forEach(element => {
    element.setAttribute('style', 'will-change: transform, opacity')
   })
  }

  // Initialize optimizations
  preloadCriticalResources()
  const cleanupScroll = optimizeScrolling()
  optimizeLayout()

  // Performance monitoring
  if (typeof window !== 'undefined' && 'performance' in window) {
   // Monitor Core Web Vitals
   const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
     if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime)
     }
     if (entry.entryType === 'first-input') {
      const fidEntry = entry as any
      console.log('FID:', fidEntry.processingStart - entry.startTime)
     }
     if (entry.entryType === 'layout-shift') {
      const clsEntry = entry as any
      if (!clsEntry.hadRecentInput) {
       console.log('CLS:', clsEntry.value)
      }
     }
    })
   })

   try {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
   } catch (e) {
    // Fallback for browsers that don't support all entry types
    console.log('Performance observer not fully supported')
   }

   return () => {
    observer.disconnect()
    cleanupScroll?.()
   }
  }

  return cleanupScroll
 }, [])
}
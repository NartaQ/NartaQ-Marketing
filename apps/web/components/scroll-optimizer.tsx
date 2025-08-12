'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger)
}

export function ScrollOptimizer() {
 useEffect(() => {
  // Configure GSAP for maximum performance
  gsap.config({
   force3D: true, // Force hardware acceleration
   nullTargetWarn: false
  })

  // Configure ScrollTrigger for fast scrolling
  ScrollTrigger.config({
   limitCallbacks: true, // Limit callback frequency for better performance
   syncInterval: 100, // Sync every 100ms instead of every frame
   autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
   ignoreMobileResize: true // Ignore mobile resize events
  })

  // Create a global scroll optimization timeline
  const optimizationTL = gsap.timeline()

  // Batch DOM operations for better performance
  ScrollTrigger.batch('.fast-animate', {
   onEnter: (elements) => {
    gsap.fromTo(elements,
     { opacity: 0, y: 20 },
     {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.02,
      ease: 'power2.out',
      overwrite: 'auto'
     }
    )
   },
   start: 'top 98%'
  })

  // Ultra-fast batch animation for cards
  ScrollTrigger.batch('.instant-card', {
   onEnter: (elements) => {
    gsap.fromTo(elements,
     { opacity: 0, scale: 0.98 },
     {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      stagger: 0.01,
      ease: 'power2.out',
      overwrite: 'auto'
     }
    )
   },
   start: 'top 99%'
  })

  // Immediate visibility for critical elements
  ScrollTrigger.batch('.instant-visible', {
   onEnter: (elements) => {
    gsap.set(elements, { opacity: 1, y: 0, scale: 1 })
   },
   start: 'top 100%'
  })

  // Optimize scroll performance with requestAnimationFrame
  let scrollTicking = false
  let lastScrollY = 0

  const optimizeScrollPerformance = () => {
   const currentScrollY = window.scrollY
   const scrollDelta = Math.abs(currentScrollY - lastScrollY)

   // Only update if scroll delta is significant
   if (scrollDelta > 5) {
    if (!scrollTicking) {
     requestAnimationFrame(() => {
      // Batch scroll-dependent operations
      ScrollTrigger.refresh()
      scrollTicking = false
     })
     scrollTicking = true
    }
    lastScrollY = currentScrollY
   }
  }

  // Use passive event listeners for better performance
  window.addEventListener('scroll', optimizeScrollPerformance, {
   passive: true,
   capture: false
  })

  // Preload animations for elements about to enter viewport
  const preloadObserver = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      // Prepare element for animation
      gsap.set(entry.target, {
       willChange: 'transform, opacity',
       force3D: true
      })

      // Remove will-change after a delay to free GPU memory
      setTimeout(() => {
       gsap.set(entry.target, { willChange: 'auto' })
      }, 1000)
     }
    })
   },
   {
    threshold: 0,
    rootMargin: '100px 0px' // Start preloading 100px before element is visible
   }
  )

  // Observe all animatable elements
  document.querySelectorAll('.fast-animate, .instant-card, .stagger-item').forEach((el) => {
   preloadObserver.observe(el)
  })

  // Performance monitoring (development only)
  if (process.env.NODE_ENV === 'development') {
   let frameCount = 0
   let lastTime = performance.now()

   const monitorPerformance = () => {
    frameCount++
    const currentTime = performance.now()

    if (currentTime - lastTime >= 1000) {
     const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
     console.log(`Scroll FPS: ${fps}`)
     frameCount = 0
     lastTime = currentTime
    }

    requestAnimationFrame(monitorPerformance)
   }

   monitorPerformance()
  }

  // Cleanup function
  return () => {
   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
   preloadObserver.disconnect()
   window.removeEventListener('scroll', optimizeScrollPerformance)
   optimizationTL.kill()
   gsap.killTweensOf('*')
  }
 }, [])

 return null // This component doesn't render anything
}

// Hook for components that need instant visibility
export function useInstantVisibility(ref: React.RefObject<HTMLElement>) {
 useEffect(() => {
  if (!ref.current) return

  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      // Make element visible immediately
      gsap.set(entry.target, {
       opacity: 1,
       y: 0,
       scale: 1,
       duration: 0.1
      })
      entry.target.classList.add('visible')
     }
    })
   },
   {
    threshold: 0.01, // Trigger as soon as 1% is visible
    rootMargin: '20px 0px' // Start 20px before element is visible
   }
  )

  observer.observe(ref.current)

  return () => observer.disconnect()
 }, [ref])
}

// Hook for ultra-fast component animations
export function useFastAnimation(ref: React.RefObject<HTMLElement>, options = {}) {
 useEffect(() => {
  if (!ref.current) return

  const defaultOptions = {
   start: 'top 98%',
   duration: 0.3,
   ease: 'power2.out',
   ...options
  }

  gsap.fromTo(ref.current,
   { opacity: 0, y: 20 },
   {
    opacity: 1,
    y: 0,
    duration: defaultOptions.duration,
    ease: defaultOptions.ease,
    scrollTrigger: {
     trigger: ref.current,
     start: defaultOptions.start,
     toggleActions: 'play none none reverse',
     fastScrollEnd: true,
     refreshPriority: 1
    }
   }
  )

  return () => {
   ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger === ref.current) {
     trigger.kill()
    }
   })
  }
 }, [ref, options])
}
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger)
}

export function useFastScroll() {
 const initialized = useRef(false)

 useEffect(() => {
  if (initialized.current || typeof window === 'undefined') return
  initialized.current = true

  // Configure ScrollTrigger for maximum performance
  ScrollTrigger.config({
   limitCallbacks: true,
   syncInterval: 120, // Faster sync for smoother scrolling
   autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize'
  })

  // Ultra-fast scroll configuration
  const fastScrollConfig = {
   start: 'top 98%', // Start almost immediately when element enters viewport
   end: 'bottom 2%',
   toggleActions: 'play none none reverse',
   refreshPriority: 1,
   fastScrollEnd: true,
   anticipatePin: 1
  }

  // Immediate animation for any element with .fast-animate class
  gsap.utils.toArray('.fast-animate').forEach((element: any) => {
   gsap.fromTo(element,
    { opacity: 0, y: 20 },
    {
     opacity: 1,
     y: 0,
     duration: 0.4,
     ease: 'power2.out',
     scrollTrigger: {
      trigger: element,
      ...fastScrollConfig
     }
    }
   )
  })

  // Super fast stagger animations
  gsap.utils.toArray('.fast-stagger').forEach((container: any) => {
   const items = container.querySelectorAll('.stagger-item')

   gsap.fromTo(items,
    { opacity: 0, y: 30, scale: 0.98 },
    {
     opacity: 1,
     y: 0,
     scale: 1,
     duration: 0.3,
     stagger: 0.03, // Very fast stagger
     ease: 'power2.out',
     scrollTrigger: {
      trigger: container,
      ...fastScrollConfig
     }
    }
   )
  })

  // Instant card animations
  gsap.utils.toArray('.instant-card').forEach((element: any, index) => {
   gsap.fromTo(element,
    { opacity: 0, scale: 0.97 },
    {
     opacity: 1,
     scale: 1,
     duration: 0.25,
     delay: index * 0.02,
     ease: 'power2.out',
     scrollTrigger: {
      trigger: element,
      ...fastScrollConfig
     }
    }
   )
  })

  // Preload animations for elements about to enter viewport
  const preloadObserver = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      entry.target.classList.add('preloaded')
      // Pre-animate elements that are about to be visible
      gsap.set(entry.target, { willChange: 'transform, opacity' })
     }
    })
   },
   {
    threshold: 0,
    rootMargin: '200px 0px' // Start preloading 200px before element is visible
   }
  )

  // Observe all animatable elements
  document.querySelectorAll('.fast-animate, .fast-stagger, .instant-card').forEach((el) => {
   preloadObserver.observe(el)
  })

  // Optimize scroll performance with requestAnimationFrame
  let scrollTicking = false
  let lastScrollY = 0
  const optimizeScroll = () => {
   const currentScrollY = window.scrollY
   // Only refresh if scroll position changed significantly
   if (Math.abs(currentScrollY - lastScrollY) > 10 && !scrollTicking) {
    requestAnimationFrame(() => {
     // Batch scroll-dependent operations
     ScrollTrigger.refresh()
     lastScrollY = currentScrollY
     scrollTicking = false
    })
    scrollTicking = true
   }
  }

  // Throttled scroll listener for performance
  window.addEventListener('scroll', optimizeScroll, { passive: true })

  return () => {
   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
   preloadObserver.disconnect()
   window.removeEventListener('scroll', optimizeScroll)
   gsap.killTweensOf('*')
  }
 }, [])
}

// Hook for instant component visibility (no animation delay)
export function useInstantVisibility() {
 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      // Immediately show element
      gsap.set(entry.target, { opacity: 1, y: 0, scale: 1 })
     }
    })
   },
   {
    threshold: 0.01, // Trigger as soon as 1% is visible
    rootMargin: '50px 0px' // Start 50px before element is visible
   }
  )

  document.querySelectorAll('.instant-visible').forEach((el) => {
   observer.observe(el)
  })

  return () => observer.disconnect()
 }, [])
}
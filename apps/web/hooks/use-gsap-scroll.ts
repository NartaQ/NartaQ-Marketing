'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAPScroll() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current || typeof window === 'undefined') return
    initialized.current = true

    // Set up performance optimizations
    ScrollTrigger.config({
      limitCallbacks: true,
      syncInterval: 100,
      ignoreMobileResize: true,
    })

    // Batch DOM queries for better performance
    const animateElements = gsap.utils.toArray('.animate-on-scroll')
    const staggerElements = gsap.utils.toArray('.stagger-item')
    const counterElements = gsap.utils.toArray('.counter')

    // Simplified scroll animations with better performance
    animateElements.forEach((element: any) => {
      gsap.set(element, { opacity: 0, y: 30 })

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          once: true,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      })
    })

    // Optimized stagger animations
    staggerElements.forEach((element: any, index) => {
      gsap.set(element, { opacity: 0, y: 20 })

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: index * 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
          fastScrollEnd: true,
        },
      })
    })

    // Enhanced counter animations with better formatting
    counterElements.forEach((element: any) => {
      const target = parseInt(element.dataset.target || '0')
      const obj = { value: 0 }

      gsap.to(obj, {
        value: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          element.textContent = Math.floor(obj.value).toLocaleString()
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf('*')
    }
  }, [])
}

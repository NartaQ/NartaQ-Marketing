'use client'

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    // Disable native smooth scrolling to prevent conflicts
    document.documentElement.style.scrollBehavior = 'auto'

    // Simple smooth scroll implementation without GSAP conflicts
    const smoothScrollTo = (target: number, duration: number = 800) => {
      const start = window.pageYOffset
      const distance = target - start
      const startTime = performance.now()

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

        const position = start + distance * easeInOutCubic(progress)
        window.scrollTo(0, position)

        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        }
      }

      requestAnimationFrame(animateScroll)
    }

    // Handle anchor link clicks
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute('href')

      if (href?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)

        if (element) {
          const rect = element.getBoundingClientRect()
          const targetPosition = window.pageYOffset + rect.top - 80 // Account for header
          smoothScrollTo(targetPosition)
        }
      }
    }

    // Add click listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])
}

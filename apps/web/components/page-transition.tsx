'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface PageTransitionProps {
 children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
 const containerRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
  if (!containerRef.current) return

  // Page entrance animation
  gsap.fromTo(containerRef.current,
   {
    opacity: 0,
    y: 20,
    scale: 0.98
   },
   {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out'
   }
  )

  // Cleanup on unmount
  return () => {
   gsap.killTweensOf(containerRef.current)
  }
 }, [])

 return (
  <div ref={containerRef} className="min-h-screen">
   {children}
  </div>
 )
}
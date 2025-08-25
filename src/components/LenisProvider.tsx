'use client'

import { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'

interface LenisProviderProps {
  children: React.ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event('resize'))
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ReactLenis 
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
'use client'

import { animatePageIn } from '@/components/test/transition/animations'
import { useEffect } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <div>
      {/* Transition Banners - Updated with better styling */}
      <div
        id='banner-1'
        className='min-h-screen bg-gradient-to-br from-[#232428] to-[#5c5d63] z-[100] fixed top-0 left-0 w-1/4 pointer-events-none'
        style={{
          boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
        }}
      />
      <div
        id='banner-2'
        className='min-h-screen bg-gradient-to-br from-[#5c5d63] to-[#8B7349] z-[100] fixed top-0 left-1/4 w-1/4 pointer-events-none'
        style={{
          boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
        }}
      />
      <div
        id='banner-3'
        className='min-h-screen bg-gradient-to-br from-[#8B7349] to-[#a98b5d] z-[100] fixed top-0 left-2/4 w-1/4 pointer-events-none'
        style={{
          boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
        }}
      />
      <div
        id='banner-4'
        className='min-h-screen bg-gradient-to-br from-[#a98b5d] to-[#dcd7ce] z-[100] fixed top-0 left-3/4 w-1/4 pointer-events-none'
        style={{
          boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
        }}
      />

      {/* Optional: Add an overlay for fade effects */}
      <div
        id='transition-overlay'
        className='fixed inset-0 bg-black z-[99] pointer-events-none opacity-0'
      />

      {children}
    </div>
  )
}

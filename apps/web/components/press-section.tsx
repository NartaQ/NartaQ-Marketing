'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const pressLogos = [
  { name: 'TechCrunch', logo: '/logos/techcrunch.svg' },
  { name: 'Forbes', logo: '/logos/forbes.svg' },
  { name: 'Bloomberg', logo: '/logos/bloomberg.svg' },
  { name: 'Reuters', logo: '/logos/reuters.svg' },
  { name: 'VentureBeat', logo: '/logos/venturebeat.svg' },
  { name: 'Startup Grind', logo: '/logos/startup-grind.svg' },
]

export function PressSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Infinite horizontal scroll animation
    const logos = sectionRef.current.querySelectorAll('.logo-item')

    gsap.set(logos, { x: (index) => index * 200 })

    gsap.to(logos, {
      x: '-=200',
      duration: 20,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x, target) => {
          const totalWidth = logos.length * 200
          return gsap.utils.wrap(-200, totalWidth, parseFloat(x)) + 'px'
        },
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className='py-16 bg-gray-900 border-y border-gray-800'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-2xl font-semibold text-white mb-2'>
            The World's Gateway For Startup Funding, As Seen In
          </h2>
        </div>

        <div className='relative overflow-hidden'>
          <div className='flex items-center justify-center space-x-12'>
            {/* Mock logos - in real implementation, you'd use actual logo images */}
            <div className='logo-item flex items-center justify-center w-32 h-16 bg-gray-800 rounded-lg border border-gray-700'>
              <span className='text-gray-300 font-semibold'>NASDAQ</span>
            </div>
            <div className='logo-item flex items-center justify-center w-32 h-16 bg-gray-800 rounded-lg border border-gray-700'>
              <span className='text-gray-300 font-semibold'>TechCrunch</span>
            </div>
            <div className='logo-item flex items-center justify-center w-32 h-16 bg-gray-800 rounded-lg border border-gray-700'>
              <span className='text-gray-300 font-semibold'>Forbes</span>
            </div>
            <div className='logo-item flex items-center justify-center w-32 h-16 bg-gray-800 rounded-lg border border-gray-700'>
              <span className='text-gray-300 font-semibold'>Bloomberg</span>
            </div>
            <div className='logo-item flex items-center justify-center w-32 h-16 bg-gray-800 rounded-lg border border-gray-700'>
              <span className='text-gray-300 font-semibold'>VentureBeat</span>
            </div>
            <div className='logo-item flex items-center justify-center w-32 h-16 bg-gray-800 rounded-lg border border-gray-700'>
              <span className='text-gray-300 font-semibold'>Reuters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

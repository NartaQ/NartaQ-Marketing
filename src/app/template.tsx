'use client'

import { animatePageIn } from '@/components/test/transition/animations'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [pageName, setPageName] = useState('')

  useEffect(() => {
    // Extract page name from pathname
    const name =
      pathname === '/'
        ? 'Home'
        : pathname
            .slice(1)
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase())
    setPageName(name)

    // Update the page name in the DOM immediately, then animate
    const pageNameElement = document.querySelector('#page-name-display h1')
    if (pageNameElement) {
      pageNameElement.textContent = name
    }

    animatePageIn()
  }, [pathname])

  return (
    <div className='relative min-h-screen'>
      {/* Curved Transition Element */}
      <div
        id='curve-transition'
        className='fixed inset-0 z-[100] pointer-events-none overflow-hidden'
      >
        {/* Main curve shape */}
        <svg
          id='curve-svg'
          className='absolute inset-0 w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <defs>
            <linearGradient
              id='curveGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#1a1918' />
              <stop offset='20%' stopColor='#232428' />
              <stop offset='40%' stopColor='#3e3f44' />
              <stop offset='60%' stopColor='#5c5d63' />
              <stop offset='80%' stopColor='#a98b5d' />
              <stop offset='100%' stopColor='#dcd7ce' />
            </linearGradient>
            <filter id='curveGlow' x='-50%' y='-50%' width='200%' height='200%'>
              <feGaussianBlur stdDeviation='4' result='coloredBlur' />
              <feMerge>
                <feMergeNode in='coloredBlur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>
          <path
            id='curve-path'
            d='M 0,100 Q 50,80 100,100 L 100,0 L 0,0 Z'
            fill='url(#curveGradient)'
            filter='url(#curveGlow)'
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
            }}
          />
        </svg>

        {/* Page name display */}
        <div
          id='page-name-display'
          className='absolute inset-0 flex items-center justify-center opacity-0'
        >
          <span className='text-6xl md:text-8xl font-bold  tracking-wide text-white font-serif'>
            {pageName}
          </span>
        </div>
      </div>

      {/* Main content wrapper */}
      <div className='relative z-10'>{children}</div>

      {/* Curved Bottom Section */}
      <div className='curved-bottom-section relative z-20 -mt-1'>
        <svg
          className='w-full h-24 md:h-32 lg:h-40 curved-bottom-animated'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <defs>
            <linearGradient
              id='bottomCurveGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              {/* in case you want to change the bg of the transition change this hex colors */}
              <stop offset='0%' stopColor='#1a1918' />
              <stop offset='20%' stopColor='#232428' />
              <stop offset='40%' stopColor='#3e3f44' />
              <stop offset='60%' stopColor='#5c5d63' />
              <stop offset='80%' stopColor='#a98b5d' />
              <stop offset='100%' stopColor='#dcd7ce' />
            </linearGradient>
            <filter id='bottomCurveGlow'>
              <feGaussianBlur stdDeviation='3' result='coloredBlur' />
              <feMerge>
                <feMergeNode in='coloredBlur' />
                <feMergeNode in='SourceGraphic' />
              </feMerge>
            </filter>
          </defs>
          <path
            d='M0,0 C200,80 400,80 600,40 C800,0 1000,0 1200,40 L1200,120 L0,120 Z'
            fill='url(#bottomCurveGradient)'
            filter='url(#bottomCurveGlow)'
            className='drop-shadow-lg'
          />
        </svg>
      </div>
    </div>
  )
}

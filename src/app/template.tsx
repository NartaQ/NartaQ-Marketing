'use client'

import { animatePageIn } from '@/components/test/transition/animations'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [pageName, setPageName] = useState('')

  useEffect(() => {
    // Extract page name from pathname
    const name = pathname === '/' ? 'Home' : pathname.slice(1).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    setPageName(name)
    animatePageIn()
  }, [pathname])

  return (
    <div>
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
            <linearGradient id='curveGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#232428' />
              <stop offset='25%' stopColor='#5c5d63' />
              <stop offset='50%' stopColor='#8B7349' />
              <stop offset='75%' stopColor='#a98b5d' />
              <stop offset='100%' stopColor='#dcd7ce' />
            </linearGradient>
          </defs>
          <path
            id='curve-path'
            d='M 0,100 Q 50,80 100,100 L 100,0 L 0,0 Z'
            fill='url(#curveGradient)'
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))',
            }}
          />
        </svg>

        {/* Page name display */}
        <div
          id='page-name-display'
          className='absolute inset-0 flex items-center justify-center opacity-0'
        >
          <h1 className='text-6xl md:text-8xl font-bold text-white tracking-wider'>
            {pageName}
          </h1>
        </div>
      </div>

      {children}
    </div>
  )
}

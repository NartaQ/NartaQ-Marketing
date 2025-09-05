'use client'

import { animatePageIn } from '@/components/pageTransition/animations'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// Complete mapping of all available routes in the app
const PAGE_ROUTES = [
  { pathname: '/', name: 'Home' },
  { pathname: '/blog', name: 'Blogs' },
  { pathname: '/about', name: 'About' },
  { pathname: '/apply', name: 'Apply' },
  { pathname: '/careers', name: 'Careers' },
  { pathname: '/careers/apply', name: 'Career Application' },
  { pathname: '/careers/backend-developer', name: 'Backend Developer' },
  {
    pathname: '/careers/backend-developer/apply',
    name: 'Backend Developer Application',
  },
  { pathname: '/careers/community-manager', name: 'Community Manager' },
  {
    pathname: '/careers/community-manager/apply',
    name: 'Community Manager Application',
  },
  { pathname: '/careers/devops-engineer', name: 'DevOps Engineer' },
  {
    pathname: '/careers/devops-engineer/apply',
    name: 'DevOps Engineer Application',
  },
  {
    pathname: '/careers/digital-marketing-analyst',
    name: 'Digital Marketing Analyst',
  },
  {
    pathname: '/careers/digital-marketing-analyst/apply',
    name: 'Digital Marketing Analyst Application',
  },
  { pathname: '/careers/ui-ux-designer', name: 'UI/UX Designer' },
  {
    pathname: '/careers/ui-ux-designer/apply',
    name: 'UI/UX Designer Application',
  },
  { pathname: '/faq', name: 'FAQ' },
  { pathname: '/for-founders', name: 'For Founders' },
  { pathname: '/for-investors', name: 'For Investors' },
  { pathname: '/legal', name: 'Legal' },
  { pathname: '/legal/cookies', name: 'Cookie Policy' },
  { pathname: '/legal/dmca', name: 'DMCA Policy' },
  { pathname: '/legal/privacy', name: 'Privacy Policy' },
  { pathname: '/legal/terms', name: 'Terms of Service' },
  { pathname: '/data-request', name: 'Data Request' },
] as const

// Function to determine page name based on pathname
function getPageName(pathname: string): string {
  // First, check for exact matches
  const exactMatch = PAGE_ROUTES.find((route) => route.pathname === pathname)
  if (exactMatch) {
    return exactMatch.name
  }

  // Handle dynamic blog routes
  if (pathname.startsWith('/blog/') && pathname !== '/blog') {
    return 'Blog Article'
  }

  // Handle dynamic career application routes
  if (pathname.includes('/careers/') && pathname.endsWith('/apply')) {
    const jobTitle = pathname.split('/careers/')[1]?.split('/apply')[0]
    if (jobTitle) {
      const formattedTitle = jobTitle
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return `${formattedTitle} Application`
    }
    return 'Career Application'
  }

  // Handle other dynamic career routes
  if (pathname.startsWith('/careers/') && pathname !== '/careers') {
    const jobTitle = pathname.split('/careers/')[1]
    if (jobTitle) {
      const formattedTitle = jobTitle
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return formattedTitle
    }
    return 'Career Position'
  }

  // Handle legal sub-routes
  if (pathname.startsWith('/legal/')) {
    const legalPage = pathname.split('/legal/')[1]
    if (legalPage) {
      const formattedTitle = legalPage
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return formattedTitle
    }
    return 'Legal'
  }

  // Default fallback
  return 'Not Found'
}

// Export the routes array for use in other components if needed
export { PAGE_ROUTES }

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [pageName, setPageName] = useState('')

  useEffect(() => {
    // Find the page name using the new function
    const name = getPageName(pathname)

    setPageName(name)

    // Update the page name in the DOM immediately, then animate
    const pageNameElement = document.querySelector('#page-name-display span')
    if (pageNameElement) {
      pageNameElement.textContent = name
    }

    // Ensure transition element is immediately visible and positioned
    const curveTransition = document.getElementById('curve-transition')
    const curvePath = document.getElementById('curve-path')
    if (curveTransition && curvePath) {
      curveTransition.style.visibility = 'visible'
      curvePath.setAttribute(
        'd',
        'M 0,0 Q 50,-15 100,0 L 100,100 Q 50,115 0,100 Z'
      )
    }

    animatePageIn()
  }, [pathname])

  return (
    <div className='relative min-h-screen'>
      {/* Curved Transition Element */}
      <div
        id='curve-transition'
        className='fixed inset-0 z-[100] pointer-events-none overflow-hidden'
        style={{ visibility: 'visible' }}
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
              <stop offset='0%' stopColor='#443927' />
              <stop offset='100%' stopColor='#443927' />
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
            d='M 0,0 Q 50,-15 100,0 L 100,100 Q 50,115 0,100 Z'
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
          <span className='text-6xl md:text-6xl font-serif tracking-tight text-white'>
            {pageName}
          </span>
        </div>
      </div>

      {/* Main content wrapper */}
      <div className='relative z-10'>{children}</div>
    </div>
  )
}

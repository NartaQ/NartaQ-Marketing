import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { menuSlide } from './anim'
import NavLink from './LinkNav'
import Curve from './Curve'
import Link from 'next/link'
import { animatePageOut } from '../pageTransition/animations'

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'For Founders',
    href: '/for-founders',
  },
  {
    title: 'For Investors',
    href: '/for-investors',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'FAQ',
    href: '/faq',
  },
  {
    title: 'Legal',
    href: '/legal',
  },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nartaq_inv',
    aria: 'NartaQ on Instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nartaq',
    aria: 'NartaQ on LinkedIn',
  },
  {
    name: 'X',
    href: 'https://x.com/NartaQ_',
    aria: 'NartaQ on X',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/nartaq/',
    aria: 'NartaQ on Facebook',
  },
]

export default function NavMenu() {
  const pathname = usePathname()
  const router = useRouter()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Don't animate if we're already on the page
    if (pathname === href) return

    // Trigger page transition animation
    animatePageOut(href, router)
  }

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className='h-screen bg-[#1a1918] fixed right-0 top-0 text-white z-40 w-full sm:w-96 md:w-[450px] lg:w-[500px]'
    >
      <div className='box-border h-full p-6 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-between'>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname)
          }}
          className='flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 mt-16 sm:mt-20 md:mt-24'
        >
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            )
          })}
        </div>
        {/* CTAs - vertically centered */}
        <div className='flex-1 flex flex-col items-center justify-center gap-4'>
          <Link
            href='/apply/founders'
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
            onMouseEnter={() => setSelectedIndicator('/apply/founders')}
            onMouseLeave={() => setSelectedIndicator(pathname)}
            onClick={(e) => handleNavigation(e, '/apply/founders')}
          >
            Get Funding
            <ArrowRight className='w-4 h-4' />
          </Link>

          <Link
            href='/apply/investors'
            className='inline-flex items-center gap-2 px-6 py-3 border-2 border-[#a98b5d] text-[#a98b5d] font-semibold rounded-xl hover:bg-[#a98b5d] hover:text-black transition-all duration-300'
            onMouseEnter={() => setSelectedIndicator('/apply/investors')}
            onMouseLeave={() => setSelectedIndicator(pathname)}
            onClick={(e) => handleNavigation(e, '/apply/investors')}
          >
            Find Deals
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
        {/* Bottom area: social follow block placed here so it sits at the bottom */}
        <div className='mt-6 sm:mt-8'>
          <div className='flex gap-4 items-center'>
            {socialLinks.map((s) => (
              <React.Fragment key={s.name}>
                <Link
                  key={s.name}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={s.aria}
                  onMouseEnter={() => setSelectedIndicator(s.href)}
                  onMouseLeave={() => setSelectedIndicator(pathname)}
                  className='text-white hover:text-gray-300 transition-colors font-serif'
                >
                  <span className='inline-flex items-center justify-center rounded-full bg-white/3'>
                    {s.name}
                  </span>
                </Link>
                {s.name !== 'Facebook' && (
                  <span className=' border-2 opacity-30 rounded'></span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}

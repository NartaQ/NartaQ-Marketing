import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { menuSlide } from '../anim'
import NavLink from './Link'
import Curve from './Curve'

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

export default function NavMenu() {
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

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
          <div className='text-gray-400 border-b border-[#f7a6101e] uppercase text-xs mb-4 sm:mb-6 md:mb-8 lg:mb-10 pb-2'>
            <p>Navigation</p>
          </div>
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
      </div>
      <Curve />
    </motion.div>
  )
}

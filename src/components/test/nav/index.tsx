import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { menuSlide } from '../anim'
import Link from './Link'
import Curve from './Curve'
import Footer from './Footer'

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export default function index() {
  const pathname = usePathname()
  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className='h-screen bg-[#dcd7ce1e] fixed right-0 top-0 text-white z-40 w-full sm:w-96 md:w-[450px] lg:w-[500px]'
    >
      <div className='box-border h-full p-6 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-between'>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname)
          }}
          className='flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl gap-2 sm:gap-3 mt-16 sm:mt-20 md:mt-24'
        >
          <div className='text-gray-400 border-b border-gray-400 uppercase text-xs mb-4 sm:mb-6 md:mb-8 lg:mb-10 pb-2'>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            )
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}

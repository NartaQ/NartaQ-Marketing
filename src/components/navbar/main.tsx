'use client'
import { useEffect, useState } from 'react'
import Nav from './nav/NavBar'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Home() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
      <div className='min-h-screen'>
        <div className='fixed top-0 right-0 p-4 sm:p-6 md:p-8 z-50'>
          <div
            onClick={() => {
              setIsActive(!isActive)
            }}
            className='w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer flex items-center justify-center transition-colors duration-300 shadow-lg'
          >
            <div className='w-full relative'>
              <div
                className={`w-2/5 h-px bg-white block mx-auto relative transition-transform duration-300 ${
                  isActive ? 'rotate-45 top-0' : '-top-1.5'
                }`}
              ></div>
              <div
                className={`w-2/5 h-px bg-white block mx-auto relative transition-transform duration-300 ${
                  isActive ? '-rotate-45 top-0' : 'top-1.5'
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
    </>
  )
}

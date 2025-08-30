'use client'
import { useEffect, useState, useRef } from 'react'
import Nav from './test/nav'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function ResponsiveNavigation() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isActive) setIsActive(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Toggle body classes to blur page content and disable scroll when nav is open
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const body = document.body

    if (isActive) {
      // Store the current scroll position in the ref
      scrollPositionRef.current = window.scrollY
      body.style.position = 'fixed'
      body.style.top = `-${scrollPositionRef.current}px`
      body.style.width = '100%'
      body.classList.add('nav-open', 'modal-open')
    } else {
      // Restore the scroll position from the ref
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      body.classList.remove('nav-open', 'modal-open')

      window.scrollTo({ top: scrollPositionRef.current, behavior: 'instant' })
    }

    return () => {
      // Cleanup on unmount
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      body.classList.remove('nav-open', 'modal-open')
    }
  }, [isActive])

  return (
    <>
      <div className='fixed top-0 right-0 p-4 sm:p-6 md:p-8 z-50'>
        <div
          onClick={() => {
            setIsActive(!isActive)
          }}
          className='w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-[#A98B5D] hover:bg-[#c4a77c] cursor-pointer flex items-center justify-center transition-colors duration-300 shadow-lg '
        >
          <div className='w-full relative'>
            <div
              className={`w-2/5 h-px bg-black block mx-auto relative transition-transform duration-300 ${
                isActive ? 'rotate-45 top-0' : '-top-1.5'
              }`}
            ></div>
            <div
              className={`w-2/5 h-px bg-black block mx-auto relative transition-transform duration-300 ${
                isActive ? '-rotate-45 top-0' : 'top-1.5'
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* keep AnimatePresence mounted so Nav can run its exit animation when isActive becomes false */}
      <div>
        {isActive && (
          <div
            onClick={() => setIsActive(false)}
            className='fixed inset-0 bg-transparent z-30'
          />
        )}
        <AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
      </div>
    </>
  )
}

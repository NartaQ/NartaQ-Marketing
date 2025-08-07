'use client'

import { Button } from '@investi/ui'
import { Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false)
 const headerRef = useRef<HTMLElement>(null)
 const logoRef = useRef<HTMLDivElement>(null)
 const navRef = useRef<HTMLElement>(null)
 const buttonsRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
  if (!headerRef.current || typeof window === 'undefined') return

  // Initial header animation
  const tl = gsap.timeline()

  tl.fromTo(
   headerRef.current,
   { y: -100, opacity: 0 },
   { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
  ).fromTo(
   logoRef.current,
   { scale: 0, rotation: -180 },
   { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
   '-=0.4'
  )

  // Animate nav items only if they exist
  if (navRef.current?.children && navRef.current.children.length > 0) {
   tl.fromTo(
    Array.from(navRef.current.children),
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
    '-=0.4'
   )
  }

  // Animate button items only if they exist
  if (
   buttonsRef.current?.children &&
   buttonsRef.current.children.length > 0
  ) {
   tl.fromTo(
    Array.from(buttonsRef.current.children),
    { opacity: 0, scale: 0.8 },
    {
     opacity: 1,
     scale: 1,
     duration: 0.4,
     stagger: 0.1,
     ease: 'back.out(1.7)',
    },
    '-=0.2'
   )
  }

  // Header scroll effect
  let lastScrollY = 0
  let ticking = false

  const handleScroll = () => {
   const currentScrollY = window.scrollY

   if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down
    gsap.to(headerRef.current, {
     y: -100,
     duration: 0.3,
     ease: 'power2.out',
    })
   } else {
    // Scrolling up
    gsap.to(headerRef.current, {
     y: 0,
     duration: 0.3,
     ease: 'power2.out',
    })
   }

   lastScrollY = currentScrollY
   ticking = false
  }

  const requestTick = () => {
   if (!ticking) {
    requestAnimationFrame(handleScroll)
    ticking = true
   }
  }

  window.addEventListener('scroll', requestTick, { passive: true })
  return () => {
   window.removeEventListener('scroll', requestTick)
  }
 }, [])

 return (
  <header
   ref={headerRef}
   className='fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50 z-50'
  >
   <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='flex justify-between items-center py-4'>
     <div className='flex items-center'>
      <div
       ref={logoRef}
       className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform cursor-pointer'
      >
       Investi
      </div>
     </div>

     <nav ref={navRef} className='hidden md:flex items-center space-x-8'>
      <a
       href='#investors'
       className='text-slate-300 hover:text-white hover:scale-105 transition-all'
      >
       For Investors
      </a>
      <a
       href='#pricing'
       className='text-slate-300 hover:text-white hover:scale-105 transition-all'
      >
       Pricing
      </a>
      <a
       href='#resources'
       className='text-slate-300 hover:text-white hover:scale-105 transition-all'
      >
       Resources
      </a>
      <a
       href='#about'
       className='text-slate-300 hover:text-white hover:scale-105 transition-all'
      >
       About
      </a>
     </nav>

     <div
      ref={buttonsRef}
      className='hidden md:flex items-center space-x-4'
     >
      <Button
       variant='ghost'
       className='text-slate-300 hover:text-white hover:bg-slate-800 hover:scale-105 transition-transform'
      >
       Sign In
      </Button>
      <Button className='hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'>
       Join for free
      </Button>
     </div>

     <button
      className='md:hidden text-slate-300 hover:text-white hover:scale-110 transition-transform'
      onClick={() => setIsMenuOpen(!isMenuOpen)}
     >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
     </button>
    </div>

    {isMenuOpen && (
     <div className='md:hidden py-4 border-t border-slate-800'>
      <nav className='flex flex-col space-y-4'>
       <a
        href='#investors'
        className='text-slate-300 hover:text-white hover:translate-x-2 transition-all'
       >
        For Investors
       </a>
       <a
        href='#pricing'
        className='text-slate-300 hover:text-white hover:translate-x-2 transition-all'
       >
        Pricing
       </a>
       <a
        href='#resources'
        className='text-slate-300 hover:text-white hover:translate-x-2 transition-all'
       >
        Resources
       </a>
       <a
        href='#about'
        className='text-slate-300 hover:text-white hover:translate-x-2 transition-all'
       >
        About
       </a>
       <div className='flex flex-col space-y-2 pt-4'>
        <Button
         variant='ghost'
         className='text-slate-300 hover:text-white hover:bg-slate-800 hover:scale-105 transition-transform'
        >
         Sign In
        </Button>
        <Button className='hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
         Join for free
        </Button>
       </div>
      </nav>
     </div>
    )}
   </div>
  </header>
 )
}

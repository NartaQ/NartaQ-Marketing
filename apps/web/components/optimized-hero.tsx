'use client'

import { Button } from '@investi/ui'
import { ArrowRight, Search, TrendingUp, Users, DollarSign } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Lottie from 'lottie-react'
import { Logo } from './logo'

// Inline Lottie animation data for investment growth
const investmentAnimation = {
 "v": "5.7.4",
 "fr": 30,
 "ip": 0,
 "op": 90,
 "w": 400,
 "h": 400,
 "nm": "Investment Growth",
 "ddd": 0,
 "assets": [],
 "layers": [
  {
   "ddd": 0,
   "ind": 1,
   "ty": 4,
   "nm": "Circle",
   "sr": 1,
   "ks": {
    "o": { "a": 0, "k": 100 },
    "r": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0] }, { "t": 90, "s": [360] }] },
    "p": { "a": 0, "k": [200, 200, 0] },
    "a": { "a": 0, "k": [0, 0, 0] },
    "s": { "a": 1, "k": [{ "i": { "x": [0.667, 0.667, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [50, 50, 100] }, { "t": 45, "s": [100, 100, 100] }] }
   },
   "ao": 0,
   "shapes": [
    {
     "ty": "gr",
     "it": [
      {
       "d": 1,
       "ty": "el",
       "s": { "a": 0, "k": [100, 100] },
       "p": { "a": 0, "k": [0, 0] },
       "nm": "Ellipse Path 1",
       "mn": "ADBE Vector Shape - Ellipse"
      },
      {
       "ty": "st",
       "c": { "a": 0, "k": [0.2, 0.6, 1, 1] },
       "o": { "a": 0, "k": 100 },
       "w": { "a": 0, "k": 4 },
       "lc": 1,
       "lj": 1,
       "ml": 4,
       "bm": 0,
       "nm": "Stroke 1",
       "mn": "ADBE Vector Graphic - Stroke"
      }
     ],
     "nm": "Ellipse 1",
     "np": 2,
     "cix": 2,
     "bm": 0,
     "ix": 1,
     "mn": "ADBE Vector Group"
    }
   ],
   "ip": 0,
   "op": 90,
   "st": 0,
   "bm": 0
  }
 ]
}

export function OptimizedHero() {
 const heroRef = useRef<HTMLElement>(null)
 const titleRef = useRef<HTMLHeadingElement>(null)
 const subtitleRef = useRef<HTMLParagraphElement>(null)
 const buttonsRef = useRef<HTMLDivElement>(null)
 const searchRef = useRef<HTMLDivElement>(null)
 const statsRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
  if (!heroRef.current) return

  const tl = gsap.timeline()

  // Optimized entrance animations
  tl.set([titleRef.current, subtitleRef.current, buttonsRef.current, searchRef.current, statsRef.current], {
   opacity: 0,
   y: 30
  })

  tl.to(titleRef.current, {
   opacity: 1,
   y: 0,
   duration: 0.8,
   ease: 'power2.out'
  })
   .to(subtitleRef.current, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out'
   }, '-=0.4')
   .to(buttonsRef.current, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out'
   }, '-=0.3')
   .to(searchRef.current, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out'
   }, '-=0.2')
   .to(statsRef.current, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out'
   }, '-=0.1')

  // Floating animation for background elements
  gsap.to('.floating-bg', {
   y: -20,
   duration: 3,
   ease: 'sine.inOut',
   repeat: -1,
   yoyo: true
  })

  return () => {
   tl.kill()
  }
 }, [])

 return (
  <section
   ref={heroRef}
   className='relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-primary-950/20 to-zinc-950'
  >
   {/* Optimized Background */}
   <div className='absolute inset-0'>
    <div className='floating-bg absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl'></div>
    <div className='floating-bg absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl'></div>
    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent'></div>
   </div>

   <div className='container mx-auto text-center relative z-10'>
    {/* Lottie Animation */}
    <div className='absolute top-0 right-0 w-32 h-32 opacity-30'>
     <Lottie
      animationData={investmentAnimation}
      loop={true}
      autoplay={true}
     />
    </div>

    <h1
     ref={titleRef}
     className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight'
    >
     <span className='block'>Connect with</span>
     <span className='text-gradient-hero'>
      6,034 investors
     </span>
     <span className='block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2'>
      ready to fund your startup
     </span>
    </h1>

    <p
     ref={subtitleRef}
     className='text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed'
    >
     The most efficient way to raise capital. Find investors, get introductions,
     and close deals faster with our AI-powered platform.
    </p>

    <div
     ref={buttonsRef}
     className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
    >
     <Button
      size='lg'
      className='group text-lg px-8 py-6 gradient-primary hover-primary text-white shadow-primary hover:shadow-xl transition-all duration-300 hover:scale-105'
     >
      Start Fundraising Free
      <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
     </Button>
     <Button
      variant='outline'
      size='lg'
      className='text-lg px-8 py-6 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300'
     >
      Watch Demo
     </Button>
    </div>

    {/* Enhanced Search Demo */}
    <div ref={searchRef} className='max-w-4xl mx-auto mb-12'>
     <div className='bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-primary transition-all duration-300'>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
       <div className='flex items-center gap-4 flex-1 flex-wrap justify-center md:justify-start'>
        <div className='flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg'>
         <span className='text-sm text-slate-400'>Stage:</span>
         <span className='text-sm text-secondary'>Series A</span>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg'>
         <span className='text-sm text-slate-400'>Industry:</span>
         <span className='text-sm text-success'>FinTech</span>
        </div>
        <div className='flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg'>
         <span className='text-sm text-slate-400'>Location:</span>
         <span className='text-sm text-primary'>Global</span>
        </div>
       </div>
       <Button className='gradient-primary hover-primary px-8 text-white hover:scale-105 transition-all duration-300'>
        <Search className='mr-2 h-4 w-4' />
        Find Investors
       </Button>
      </div>
     </div>
    </div>

    {/* Optimized Stats */}
    <div ref={statsRef} className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
     <div className='group text-center'>
      <div className='flex justify-center mb-4'>
       <div className='w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
        <TrendingUp className='h-8 w-8 text-secondary' />
       </div>
      </div>
      <div className='text-3xl sm:text-4xl font-bold text-white mb-2'>$2.5B+</div>
      <div className='text-slate-400'>Total funding raised</div>
     </div>

     <div className='group text-center'>
      <div className='flex justify-center mb-4'>
       <div className='w-16 h-16 bg-gradient-to-br from-success-500/20 to-success-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
        <Users className='h-8 w-8 text-success' />
       </div>
      </div>
      <div className='text-3xl sm:text-4xl font-bold text-white mb-2'>25K+</div>
      <div className='text-slate-400'>Active founders</div>
     </div>

     <div className='group text-center'>
      <div className='flex justify-center mb-4'>
       <div className='w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
        <DollarSign className='h-8 w-8 text-primary' />
       </div>
      </div>
      <div className='text-3xl sm:text-4xl font-bold text-white mb-2'>6,034</div>
      <div className='text-slate-400'>Verified investors</div>
     </div>
    </div>
   </div>
  </section>
 )
}
'use client'

import { Button } from '@investi/ui'
import { ArrowRight, Rocket, Users, TrendingUp } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger)
}

// Simple rocket launch animation
const rocketAnimation = {
 "v": "5.7.4",
 "fr": 30,
 "ip": 0,
 "op": 90,
 "w": 200,
 "h": 200,
 "nm": "Rocket Launch",
 "ddd": 0,
 "assets": [],
 "layers": [
  {
   "ddd": 0,
   "ind": 1,
   "ty": 4,
   "nm": "Rocket",
   "sr": 1,
   "ks": {
    "o": { "a": 0, "k": 100 },
    "p": {
     "a": 1, "k": [
      { "t": 0, "s": [100, 150, 0] },
      { "t": 90, "s": [100, 50, 0] }
     ]
    },
    "s": { "a": 0, "k": [100, 100, 100] }
   },
   "ao": 0,
   "shapes": [
    {
     "ty": "gr",
     "it": [
      {
       "ty": "rc",
       "s": { "a": 0, "k": [20, 40] },
       "p": { "a": 0, "k": [0, 0] },
       "r": { "a": 0, "k": 10 }
      },
      {
       "ty": "fl",
       "c": { "a": 0, "k": [0.2, 0.6, 1, 1] },
       "o": { "a": 0, "k": 100 }
      }
     ]
    }
   ],
   "ip": 0,
   "op": 90,
   "st": 0
  }
 ]
}

const features = [
 {
  icon: Users,
  title: '6,034 Active Investors',
  description: 'Ready to fund your startup'
 },
 {
  icon: TrendingUp,
  title: '$2.5B+ Raised',
  description: 'By startups on our platform'
 },
 {
  icon: Rocket,
  title: '40% Response Rate',
  description: 'Industry-leading outreach success'
 }
]

export function OptimizedCTA() {
 const sectionRef = useRef<HTMLElement>(null)
 const contentRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
  if (!sectionRef.current) return

  gsap.fromTo(contentRef.current,
   { opacity: 0, y: 50 },
   {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
     trigger: sectionRef.current,
     start: 'top 80%',
     toggleActions: 'play none none reverse'
    }
   }
  )

  return () => {
   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
 }, [])

 return (
  <section
   ref={sectionRef}
   className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900 relative overflow-hidden'
  >
   {/* Background Elements */}
   <div className='absolute inset-0'>
    <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
    <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent'></div>
   </div>

   <div className='container mx-auto relative z-10'>
    <div ref={contentRef} className='text-center'>
     {/* Lottie Animation */}
     <div className='flex justify-center mb-8'>
      <div className='w-24 h-24'>
       <Lottie
        animationData={rocketAnimation}
        loop={true}
        autoplay={true}
       />
      </div>
     </div>

     <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'>
      Ready to{' '}
      <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
       raise funding?
      </span>
     </h2>

     <p className='text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed'>
      Join thousands of successful founders who have raised capital using our platform.
      Start your fundraising journey today - completely free.
     </p>

     {/* Feature highlights */}
     <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto'>
      {features.map((feature, index) => (
       <div key={index} className='text-center group'>
        <div className='flex justify-center mb-4'>
         <div className='w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
          <feature.icon className='h-8 w-8 text-blue-400' />
         </div>
        </div>
        <h3 className='text-lg font-bold text-white mb-2'>
         {feature.title}
        </h3>
        <p className='text-slate-400 text-sm'>
         {feature.description}
        </p>
       </div>
      ))}
     </div>

     {/* CTA Buttons */}
     <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
      <Button
       size='lg'
       className='group text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105'
      >
       Start Fundraising Free
       <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
      </Button>

      <Button
       variant='outline'
       size='lg'
       className='text-lg px-10 py-6 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300'
      >
       Schedule Demo
      </Button>
     </div>

     {/* Trust indicators */}
     <div className='text-center'>
      <p className='text-sm text-slate-400 mb-4'>
       Trusted by startups from
      </p>
      <div className='flex flex-wrap justify-center gap-6 text-slate-500'>
       <span className='px-4 py-2 bg-slate-800/30 rounded-lg text-sm'>Y Combinator</span>
       <span className='px-4 py-2 bg-slate-800/30 rounded-lg text-sm'>Techstars</span>
       <span className='px-4 py-2 bg-slate-800/30 rounded-lg text-sm'>500 Startups</span>
       <span className='px-4 py-2 bg-slate-800/30 rounded-lg text-sm'>Plug and Play</span>
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}
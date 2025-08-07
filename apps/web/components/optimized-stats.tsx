'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, Users, DollarSign, Target, Globe, Zap } from 'lucide-react'
import Lottie from 'lottie-react'

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger)
}

// Simple success animation
const successAnimation = {
 "v": "5.7.4",
 "fr": 30,
 "ip": 0,
 "op": 60,
 "w": 100,
 "h": 100,
 "nm": "Success",
 "ddd": 0,
 "assets": [],
 "layers": [
  {
   "ddd": 0,
   "ind": 1,
   "ty": 4,
   "nm": "Check",
   "sr": 1,
   "ks": {
    "o": { "a": 0, "k": 100 },
    "p": { "a": 0, "k": [50, 50, 0] },
    "s": {
     "a": 1, "k": [
      { "t": 0, "s": [0, 0, 100] },
      { "t": 30, "s": [100, 100, 100] }
     ]
    }
   },
   "ao": 0,
   "shapes": [
    {
     "ty": "gr",
     "it": [
      {
       "ty": "sh",
       "ks": {
        "a": 0,
        "k": {
         "i": [[0, 0], [0, 0], [0, 0]],
         "o": [[0, 0], [0, 0], [0, 0]],
         "v": [[-10, 0], [0, 10], [20, -10]],
         "c": false
        }
       }
      },
      {
       "ty": "st",
       "c": { "a": 0, "k": [0.2, 0.8, 0.2, 1] },
       "o": { "a": 0, "k": 100 },
       "w": { "a": 0, "k": 4 },
       "lc": 2,
       "lj": 2
      }
     ]
    }
   ],
   "ip": 0,
   "op": 60,
   "st": 0
  }
 ]
}

const stats = [
 {
  icon: DollarSign,
  value: '$2.5B+',
  label: 'Total Funding Raised',
  description: 'Capital raised by startups on our platform',
  gradient: 'from-green-500 to-emerald-500',
  color: 'text-green-400'
 },
 {
  icon: Users,
  value: '25,000+',
  label: 'Active Founders',
  description: 'Entrepreneurs actively fundraising',
  gradient: 'from-blue-500 to-cyan-500',
  color: 'text-blue-400'
 },
 {
  icon: Target,
  value: '6,034',
  label: 'Verified Investors',
  description: 'Active investors ready to fund',
  gradient: 'from-purple-500 to-violet-500',
  color: 'text-purple-400'
 },
 {
  icon: TrendingUp,
  value: '40%',
  label: 'Response Rate',
  description: 'Average email response rate',
  gradient: 'from-orange-500 to-red-500',
  color: 'text-orange-400'
 },
 {
  icon: Globe,
  value: '50+',
  label: 'Countries',
  description: 'Global investor network reach',
  gradient: 'from-pink-500 to-rose-500',
  color: 'text-pink-400'
 },
 {
  icon: Zap,
  value: '45 days',
  label: 'Average Close Time',
  description: '50% faster than traditional VC',
  gradient: 'from-indigo-500 to-blue-500',
  color: 'text-indigo-400'
 }
]

export function OptimizedStats() {
 const sectionRef = useRef<HTMLElement>(null)
 const titleRef = useRef<HTMLHeadingElement>(null)
 const gridRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
  if (!sectionRef.current) return

  // Title animation
  gsap.fromTo(titleRef.current,
   { opacity: 0, y: 50 },
   {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
     trigger: titleRef.current,
     start: 'top 80%',
     toggleActions: 'play none none reverse'
    }
   }
  )

  // Stats animation with counter effect
  const statElements = gridRef.current?.querySelectorAll('.stat-item')
  if (statElements) {
   statElements.forEach((element, index) => {
    const valueElement = element.querySelector('.stat-value')
    const originalValue = valueElement?.textContent || '0'

    gsap.fromTo(element,
     {
      opacity: 0,
      y: 60,
      scale: 0.9
     },
     {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
       trigger: element,
       start: 'top 85%',
       toggleActions: 'play none none reverse'
      }
     }
    )

    // Counter animation for numeric values
    if (valueElement && originalValue.match(/\d/)) {
     const numericValue = parseFloat(originalValue.replace(/[^\d.]/g, ''))
     if (!isNaN(numericValue)) {
      gsap.fromTo({ value: 0 },
       { value: numericValue },
       {
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
         const currentValue = Math.floor(this.targets()[0].value)
         const suffix = originalValue.replace(/[\d.]/g, '')
         valueElement.textContent = currentValue + suffix
        },
        scrollTrigger: {
         trigger: element,
         start: 'top 85%',
         toggleActions: 'play none none reverse'
        }
       }
      )
     }
    }
   })
  }

  return () => {
   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
 }, [])

 return (
  <section
   ref={sectionRef}
   className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden'
  >
   {/* Background Elements */}
   <div className='absolute inset-0'>
    <div className='absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
    <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent'></div>
   </div>

   <div className='container mx-auto relative z-10'>
    <div className='text-center mb-16'>
     <h2
      ref={titleRef}
      className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'
     >
      Trusted by the{' '}
      <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
       best startups
      </span>
     </h2>
     <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
      Our platform delivers results that matter. Here's the proof from thousands
      of successful fundraising campaigns.
     </p>
    </div>

    <div ref={gridRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
     {stats.map((stat, index) => (
      <div
       key={index}
       className='stat-item group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10'
      >
       {/* Gradient overlay */}
       <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>

       <div className='relative z-10'>
        <div className='flex items-center justify-between mb-6'>
         <div
          className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
         >
          <stat.icon className='h-8 w-8 text-white' />
         </div>

         {index === 0 && (
          <div className='w-8 h-8 opacity-60'>
           <Lottie
            animationData={successAnimation}
            loop={true}
            autoplay={true}
           />
          </div>
         )}
        </div>

        <div className={`stat-value text-4xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
         {stat.value}
        </div>

        <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300'>
         {stat.label}
        </h3>

        <p className='text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300'>
         {stat.description}
        </p>
       </div>
      </div>
     ))}
    </div>

    {/* Success Stories Section */}
    <div className='mt-16 text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8'>
     <h3 className='text-2xl font-bold text-white mb-4'>
      Join the success stories
     </h3>
     <p className='text-slate-300 mb-6 max-w-2xl mx-auto'>
      From seed to Series C, startups across all industries have successfully
      raised funding using our platform. Your success story could be next.
     </p>
     <div className='flex flex-wrap justify-center gap-4 text-sm text-slate-400'>
      <span className='px-3 py-1 bg-slate-800/50 rounded-full'>FinTech</span>
      <span className='px-3 py-1 bg-slate-800/50 rounded-full'>HealthTech</span>
      <span className='px-3 py-1 bg-slate-800/50 rounded-full'>AI/ML</span>
      <span className='px-3 py-1 bg-slate-800/50 rounded-full'>SaaS</span>
      <span className='px-3 py-1 bg-slate-800/50 rounded-full'>E-commerce</span>
      <span className='px-3 py-1 bg-slate-800/50 rounded-full'>CleanTech</span>
     </div>
    </div>
   </div>
  </section>
 )
}
'use client'

import { Button } from '@investi/ui'
import { Card, CardContent } from '@investi/ui'
import {
 Search,
 Users,
 Mail,
 BarChart3,
 Target,
 Zap,
 Brain,
 Shield,
 ArrowRight
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger)
}

// Simple Lottie animation for data visualization
const dataAnimation = {
 "v": "5.7.4",
 "fr": 30,
 "ip": 0,
 "op": 60,
 "w": 200,
 "h": 200,
 "nm": "Data Flow",
 "ddd": 0,
 "assets": [],
 "layers": [
  {
   "ddd": 0,
   "ind": 1,
   "ty": 4,
   "nm": "Bar 1",
   "sr": 1,
   "ks": {
    "o": { "a": 0, "k": 100 },
    "p": { "a": 0, "k": [50, 100, 0] },
    "s": {
     "a": 1, "k": [
      { "t": 0, "s": [100, 0, 100] },
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
       "ty": "rc",
       "s": { "a": 0, "k": [20, 80] },
       "p": { "a": 0, "k": [0, 0] },
       "r": { "a": 0, "k": 4 }
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
   "op": 60,
   "st": 0
  }
 ]
}

const features = [
 {
  icon: Search,
  title: 'AI-Powered Investor Discovery',
  description: 'Find the perfect investors for your startup using advanced AI matching algorithms that analyze 50+ data points.',
  gradient: 'from-blue-500 to-cyan-500',
  delay: 0
 },
 {
  icon: Mail,
  title: 'Smart Outreach System',
  description: 'Personalized email campaigns with 40% response rates. Our AI crafts compelling messages that get results.',
  gradient: 'from-green-500 to-emerald-500',
  delay: 0.1
 },
 {
  icon: Users,
  title: 'Network Intelligence',
  description: 'Leverage your existing connections to get warm introductions to top-tier investors in your industry.',
  gradient: 'from-purple-500 to-violet-500',
  delay: 0.2
 },
 {
  icon: BarChart3,
  title: 'Advanced Analytics',
  description: 'Track every interaction, measure engagement, and optimize your fundraising strategy with real-time insights.',
  gradient: 'from-orange-500 to-red-500',
  delay: 0.3
 },
 {
  icon: Target,
  title: 'Precision Targeting',
  description: 'Filter investors by stage, check size, industry focus, and geographic preferences for maximum relevance.',
  gradient: 'from-pink-500 to-rose-500',
  delay: 0.4
 },
 {
  icon: Zap,
  title: 'Instant Deal Flow',
  description: 'Get discovered by investors actively seeking startups in your space through our curated deal flow platform.',
  gradient: 'from-indigo-500 to-blue-500',
  delay: 0.5
 }
]

const additionalFeatures = [
 {
  icon: Brain,
  title: 'AI Recommendations',
  description: 'Smart suggestions on timing, approach, and investor prioritization.',
  stats: '95% accuracy'
 },
 {
  icon: Shield,
  title: 'Secure Platform',
  description: 'Enterprise-grade security protecting your sensitive business data.',
  stats: 'SOC 2 compliant'
 }
]

export function AceternityFeatures() {
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

  // Feature cards stagger animation
  const cards = gridRef.current?.querySelectorAll('.feature-card')
  if (cards) {
   gsap.fromTo(cards,
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
     stagger: 0.1,
     ease: 'power2.out',
     scrollTrigger: {
      trigger: gridRef.current,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
     }
    }
   )
  }

  return () => {
   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
 }, [])

 return (
  <section
   ref={sectionRef}
   className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden'
  >
   {/* Background Elements */}
   <div className='absolute inset-0'>
    <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
    <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
   </div>

   <div className='container mx-auto relative z-10'>
    <div className='text-center mb-16'>
     <h2
      ref={titleRef}
      className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'
     >
      Everything you need to{' '}
      <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
       raise capital
      </span>
     </h2>
     <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
      Our comprehensive platform provides all the tools, insights, and connections
      you need to successfully fund your startup.
     </p>
    </div>

    {/* Main Features Grid */}
    <div ref={gridRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
     {features.map((feature, index) => (
      <Card
       key={index}
       className='feature-card group relative overflow-hidden bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10'
      >
       {/* Gradient overlay */}
       <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

       <CardContent className='p-8 relative z-10'>
        <div
         className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
        >
         <feature.icon className='h-8 w-8 text-white' />
        </div>

        <h3 className='text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300'>
         {feature.title}
        </h3>

        <p className='text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 mb-4'>
         {feature.description}
        </p>

        <Button
         variant='ghost'
         size='sm'
         className='text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto font-medium group/btn'
        >
         Learn more
         <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1' />
        </Button>
       </CardContent>
      </Card>
     ))}
    </div>

    {/* Additional Features with Lottie */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
     {additionalFeatures.map((feature, index) => (
      <Card
       key={index}
       className='group relative overflow-hidden bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-500'
      >
       <CardContent className='p-8 flex items-center gap-6'>
        <div className='flex-shrink-0'>
         <div className='w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
          <feature.icon className='h-8 w-8 text-blue-400' />
         </div>
        </div>

        <div className='flex-1'>
         <h3 className='text-xl font-bold mb-2 text-white'>
          {feature.title}
         </h3>
         <p className='text-slate-300 mb-2'>
          {feature.description}
         </p>
         <div className='text-sm text-blue-400 font-medium'>
          {feature.stats}
         </div>
        </div>

        {index === 0 && (
         <div className='flex-shrink-0 w-20 h-20 opacity-60'>
          <Lottie
           animationData={dataAnimation}
           loop={true}
           autoplay={true}
          />
         </div>
        )}
       </CardContent>
      </Card>
     ))}
    </div>

    {/* CTA Section */}
    <div className='text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8'>
     <h3 className='text-2xl font-bold text-white mb-4'>
      Ready to accelerate your fundraising?
     </h3>
     <p className='text-slate-300 mb-6 max-w-2xl mx-auto'>
      Join thousands of successful founders who have raised over $2.5B using our platform.
     </p>
     <div className='flex flex-col sm:flex-row gap-4 justify-center'>
      <Button
       size='lg'
       className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg text-white hover:scale-105 transition-all duration-300'
      >
       Start Free Trial
       <ArrowRight className='ml-2 h-5 w-5' />
      </Button>
      <Button
       variant='outline'
       size='lg'
       className='border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg transition-all duration-300'
      >
       Schedule Demo
      </Button>
     </div>
    </div>
   </div>
  </section>
 )
}
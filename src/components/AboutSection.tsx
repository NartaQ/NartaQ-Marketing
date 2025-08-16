'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MagicCard } from './magicui/magic-card'

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger)
}

interface AboutSectionProps {
 className?: string
}

export default function AboutSection({ className }: AboutSectionProps) {
 const [isMobile, setIsMobile] = useState(false)
 const sectionRef = useRef<HTMLElement>(null)
 const stickyRef = useRef<HTMLDivElement>(null)
 const contentRef = useRef<HTMLDivElement>(null)
 const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

 // Memoized resize handler to prevent unnecessary re-renders
 const checkMobile = useCallback(() => {
  setIsMobile(window.innerWidth < 768)
 }, [])

 useEffect(() => {
  checkMobile()
  // Remove the window resize listener since we handle it separately now
  // window.addEventListener('resize', checkMobile)
  // return () => window.removeEventListener('resize', checkMobile)
 }, [checkMobile])

 useEffect(() => {
  // Always clean up existing ScrollTrigger first
  if (scrollTriggerRef.current) {
   scrollTriggerRef.current.kill(true) // Force kill with revert
   scrollTriggerRef.current = null
  }

  // Refresh ScrollTrigger to clean up any orphaned instances
  ScrollTrigger.refresh()

  // Only create ScrollTrigger for desktop
  if (
   !isMobile &&
   sectionRef.current &&
   stickyRef.current &&
   contentRef.current
  ) {
   const section = sectionRef.current
   const stickyElement = stickyRef.current

   // Wait for layout to stabilize before creating ScrollTrigger
   const timer = setTimeout(() => {
    // Double-check that we're still in desktop mode and elements exist
    if (
     !isMobile &&
     section &&
     stickyElement &&
     section.offsetHeight > 0 &&
     stickyElement.offsetHeight > 0 &&
     section.parentNode &&
     stickyElement.parentNode
    ) {
     try {
      // Create the sticky effect with GSAP ScrollTrigger
      scrollTriggerRef.current = ScrollTrigger.create({
       trigger: section,
       start: 'top top',
       end: 'bottom bottom',
       pin: stickyElement,
       pinSpacing: false,
       anticipatePin: 1,
       refreshPriority: -1,
       invalidateOnRefresh: true, // Force recalculation on refresh
       onRefresh: () => {
        // Ensure element is still in DOM and we're still in desktop mode
        if (!stickyElement.parentNode || isMobile) {
         if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill(true)
          scrollTriggerRef.current = null
         }
        }
       },
       onKill: () => {
        scrollTriggerRef.current = null
       },
      })
     } catch (error) {
      console.warn('ScrollTrigger creation failed:', error)
     }
    }
   }, 150) // Increased delay for better stability

   return () => {
    clearTimeout(timer)
    if (scrollTriggerRef.current) {
     scrollTriggerRef.current.kill(true)
     scrollTriggerRef.current = null
    }
   }
  }

  // Return cleanup function for all cases
  return () => {
   if (scrollTriggerRef.current) {
    scrollTriggerRef.current.kill(true)
    scrollTriggerRef.current = null
   }
  }
 }, [isMobile])

 // Additional cleanup on unmount
 useEffect(() => {
  return () => {
   // Kill all ScrollTrigger instances on unmount
   if (scrollTriggerRef.current) {
    scrollTriggerRef.current.kill(true)
    scrollTriggerRef.current = null
   }
   // Clean up any orphaned ScrollTrigger instances
   ScrollTrigger.killAll()
   ScrollTrigger.refresh()
  }
 }, [])

 // Handle window resize more aggressively
 useEffect(() => {
  const handleResize = () => {
   // Kill ScrollTrigger before resize to prevent conflicts
   if (scrollTriggerRef.current) {
    scrollTriggerRef.current.kill(true)
    scrollTriggerRef.current = null
   }

   checkMobile()

   // Refresh after resize
   setTimeout(() => {
    ScrollTrigger.refresh()
   }, 100)
  }

  window.addEventListener('resize', handleResize, { passive: true })
  return () => window.removeEventListener('resize', handleResize)
 }, [checkMobile])

 // Animate cards when they come into view
 useEffect(() => {
  if (!isMobile && contentRef.current) {
   const timer = setTimeout(() => {
    const cards = contentRef.current?.querySelectorAll('.card-animate')
    if (cards && cards.length > 0) {
     gsap.fromTo(
      cards,
      {
       opacity: 0,
       y: 50,
      },
      {
       opacity: 1,
       y: 0,
       duration: 0.8,
       stagger: 0.2,
       ease: 'power3.out',
       scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
       },
      }
     )
    }
   }, 300)

   return () => clearTimeout(timer)
  }
 }, [isMobile])

 const stickyText = {
  title: 'Who We Are',
  subtitle: 'Connecting startups with the perfect investors',
  description:
   'Nartaq is an innovative platform that uses AI technology and personalized customer service to create perfect matches between ambitious startups and the right investors.',
 }

 const scrollingContent = [
  {
   step: '01',
   title: 'AI-Powered Matching',
   description:
    "Nartaq's advanced AI algorithms analyze startup profiles, business models, and growth potential to identify the most compatible investors based on industry focus, investment stage, and strategic alignment.",
   features: [
    'Nartaq Smart Algorithm',
    'Industry Analysis',
    'Stage Matching',
    'Strategic Fit',
   ],
  },
  {
   step: '02',
   title: 'Startup Profiling',
   description:
    'Nartaq creates comprehensive profiles for each startup, highlighting their unique value proposition, market opportunity, team expertise, and funding requirements to attract the right investors.',
   features: [
    'Business Analysis',
    'Market Research',
    'Team Assessment',
    'Nartaq Financial Planning',
   ],
  },
  {
   step: '03',
   title: 'Investor Network',
   description:
    "Access Nartaq's curated network of verified investors, from angel investors to venture capital firms, each with detailed profiles showing their investment preferences and portfolio companies.",
   features: [
    'Nartaq Verified Investors',
    'Investment Focus',
    'Portfolio Insights',
    'Success Stories',
   ],
  },
  {
   step: '04',
   title: 'Personalized Service',
   description:
    "Nartaq's dedicated customer service team provides personalized guidance throughout the matching process, offering strategic advice and facilitating meaningful connections.",
   features: [
    'Nartaq Dedicated Support',
    'Strategic Guidance',
    'Connection Facilitation',
    'Expert Advice',
   ],
  },
  {
   step: '05',
   title: 'Due Diligence Support',
   description:
    'Nartaq assists both startups and investors with due diligence processes, providing comprehensive documentation, financial analysis, and market validation to ensure informed decisions.',
   features: [
    'Document Preparation',
    'Nartaq Financial Analysis',
    'Market Validation',
    'Risk Assessment',
   ],
  },
  {
   step: '06',
   title: 'Deal Facilitation',
   description:
    "Nartaq's platform streamlines the investment process with secure communication channels, document sharing, and negotiation support to help close deals efficiently.",
   features: [
    'Nartaq Secure Platform',
    'Document Management',
    'Communication Tools',
    'Deal Tracking',
   ],
  },
  {
   step: '07',
   title: 'Success Monitoring',
   description:
    'Nartaq tracks the success of our matches through ongoing monitoring of funded startups, measuring growth metrics and investor satisfaction to continuously improve our matching algorithm.',
   features: [
    'Growth Tracking',
    'Success Metrics',
    'Investor Feedback',
    'Nartaq Algorithm Optimization',
   ],
  },
  {
   step: '08',
   title: 'Ongoing Partnership',
   description:
    'Beyond the initial match, Nartaq maintains relationships with both startups and investors, providing continued support for future funding rounds and strategic partnerships.',
   features: [
    'Nartaq Long-term Support',
    'Future Rounds',
    'Strategic Partnerships',
    'Network Expansion',
   ],
  },
 ]

 if (isMobile) {
  // Mobile layout - no sticky behavior
  return (
   <section
    key='mobile-layout'
    className={cn(
     'py-20 bg-gradient-to-br from-[#232428] via-[#3e3f44] to-[#232428]',
     className
    )}
   >
    <div className='container mx-auto px-4'>
     {/* Mobile header */}
     <div className='text-center mb-16'>
      <div className='inline-block mb-2'>
       <h2 className='text-4xl font-bold text-[#dcd7ce]  tracking-tight'>
        {stickyText.title}
       </h2>
      </div>
      <p className='text-2xl text-[#a98b5d] font-medium tracking-wide mb-6'>
       {stickyText.subtitle}
      </p>
      <p className='text-[#dcd7ce] text-lg leading-relaxed max-w-2xl mx-auto'>
       {stickyText.description}
      </p>
      <div className='pt-8 flex justify-center'>
       <div className='w-32 h-1 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full'></div>
      </div>
     </div>

     {/* Mobile content */}
     <div className='space-y-12'>
      {scrollingContent.map((item, index) => (
       <MagicCard
        key={`mobile-${item.step}-${index}`}
        gradientColor={'#262626'}
        gradientSize={200}
        className='bg-[#3e3f44]/70 backdrop-blur-sm rounded-2xl p-6 border border-[#5c5d63]/50 shadow-lg'
       >
        <div className='flex items-start gap-6'>
         <div className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#a98b5d] to-[#dcd7ce] rounded-xl flex items-center justify-center shadow-md'>
          <span className='text-black font-bold text-lg'>
           {item.step}
          </span>
         </div>
         <div className='flex-1'>
          <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
           {item.title}
          </h3>
          <p className='text-[#dcd7ce] mb-6 leading-relaxed'>
           {item.description}
          </p>
          <div className='grid grid-cols-1 gap-3'>
           {item.features.map((feature, featureIndex) => (
            <div
             key={`mobile-${feature}-${featureIndex}`}
             className='flex items-center gap-4'
            >
             <div className='w-3 h-3 bg-[#a98b5d] rounded-full'></div>
             <span className='text-[#dcd7ce] font-medium'>
              {feature}
             </span>
            </div>
           ))}
          </div>
         </div>
        </div>
       </MagicCard>
      ))}
     </div>
    </div>
   </section>
  )
 }

 // Desktop layout with GSAP sticky behavior
 return (
  <section
   key='desktop-layout'
   ref={sectionRef}
   className={cn(
    'min-h-screen bg-gradient-to-br from-[#232428] via-[#3e3f44] to-[#232428]',
    className
   )}
  >
   <div className='container mx-auto px-4'>
    <div className='flex lg:flex-row flex-col'>
     {/* Sticky left content */}
     <div
      ref={stickyRef}
      className='lg:w-1/2 lg:h-screen lg:flex lg:items-center py-20'
      style={{ willChange: 'transform' }} // Optimize for transforms
     >
      <div className='space-y-8 lg:pr-12'>
       <div className='inline-block'>
        <h2 className='text-4xl lg:text-6xl font-bold text-[#dcd7ce]  tracking-tight'>
         {stickyText.title}
        </h2>
       </div>
       <p className='text-2xl text-[#a98b5d] font-medium tracking-wide'>
        {stickyText.subtitle}
       </p>
       <p className='text-[#dcd7ce] text-lg leading-relaxed max-w-2xl'>
        {stickyText.description}
       </p>
       <div className='pt-8'>
        <div className='w-32 h-1 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full'></div>
       </div>
      </div>
     </div>

     {/* Scrolling right content */}
     <div ref={contentRef} className='lg:w-1/2 py-20'>
      <div className='space-y-20 lg:pl-12'>
       {scrollingContent.map((item, index) => (
        <div
         key={`${item.step}-${index}`}
         className='group card-animate'
        >
         <MagicCard
          gradientColor={'#262626'}
          gradientSize={300}
          className='bg-[#3e3f44]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#5c5d63]/50 hover:border-[#a98b5d]/80 transition-all duration-500 hover:bg-[#3e3f44]/80 shadow-lg hover:shadow-xl'
         >
          <div className='flex items-start gap-8'>
           <div className='flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#a98b5d] to-[#dcd7ce] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md'>
            <span className='text-black font-bold text-xl'>
             {item.step}
            </span>
           </div>
           <div className='flex-1'>
            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4 group-hover:text-[#a98b5d] transition-colors duration-300'>
             {item.title}
            </h3>
            <p className='text-[#dcd7ce] mb-6 leading-relaxed'>
             {item.description}
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
             {item.features.map((feature, featureIndex) => (
              <div
               key={`${feature}-${featureIndex}`}
               className='flex items-center gap-4'
              >
               <div className='w-3 h-3 bg-[#a98b5d] rounded-full group-hover:bg-[#dcd7ce] transition-all duration-300 transform group-hover:scale-125'></div>
               <span className='text-[#dcd7ce] font-medium group-hover:text-[#a98b5d] transition-colors duration-300'>
                {feature}
               </span>
              </div>
             ))}
            </div>
           </div>
          </div>
         </MagicCard>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}
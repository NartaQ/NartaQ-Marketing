'use client'

import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Rocket, Target } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function HookText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLUListElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && !isMobile) {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

      const container = containerRef.current
      const list = navRef.current

      if (!container || !list) return

      const listItems = gsap.utils.toArray(
        '.carousel__nav__item',
        list
      ) as HTMLElement[]
      const slides = gsap.utils.toArray('.carousel__item') as HTMLElement[]
      const tl = gsap.timeline()

      const myST = ScrollTrigger.create({
        animation: tl,
        id: 'st',
        trigger: container,
        start: 'top top',
        end: '+=' + container.clientHeight * (slides.length - 1),
        pin: container,
        scrub: true,
        snap: {
          snapTo: 1 / (slides.length - 1),
        },
        markers: false,
      })

      // Initial state - all slides hidden except first (horizontal movement)
      gsap.set(slides, {
        xPercent: 100,
        opacity: 0,
      })

      listItems.forEach((item: HTMLElement, i: number) => {
        item.addEventListener('click', (e: Event) => {
          e.preventDefault()
          const target = (e.target as HTMLElement).getAttribute('data-target')
          const timeline = tl as unknown as { labels: Record<string, number> }
          if (target && timeline.labels[target]) {
            const percent = timeline.labels[target] / tl.totalDuration()
            const scrollPos = myST.start + (myST.end - myST.start) * percent
            gsap.to(window, { duration: 2, scrollTo: scrollPos })
          }
        })

        const previousItem = listItems[i - 1]
        if (previousItem) {
          tl.to(
            item,
            {
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2))',
              boxShadow:
                '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(169,139,93,0.2)',
              scale: 1.2,
            },
            0.5 * (i - 1)
          )
            .to(
              slides[i],
              {
                opacity: 1,
                xPercent: 0,
                ease: 'power2.out',
              },
              '<'
            )
            .to(
              previousItem,
              {
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                boxShadow: '0 0 0px transparent',
                scale: 1,
              },
              '<'
            )
            .to(
              slides[i - 1],
              {
                opacity: 0,
                xPercent: -100,
                ease: 'power2.in',
              },
              '<'
            )
            .add('our-work-' + (i + 1))
        } else {
          // First slide setup
          gsap.set(item, {
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2))',
            boxShadow:
              '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(169,139,93,0.2)',
            scale: 1.2,
          })
          gsap.set(slides[i], {
            xPercent: 0,
            opacity: 1,
          })
          tl.add('our-work-' + (i + 1), '+=0')
        }
      })

      return () => {
        myST.kill()
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [isMobile])

  const cardData = [
    {
      id: 'our-work-1',
      icon: <Rocket className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />,
      step: '01',
      title: 'Seeking Investment',
      subtitle: 'Turn Your Vision Into Reality',
      description:
        'Connect with smart investors who understand your market and can accelerate your growth trajectory.',
      features: [
        'Access to 5,000+ verified investors',
        'AI-powered matching with 95% accuracy',
        'Streamlined due diligence process',
        'Expert term sheet negotiation support',
      ],
      stats: { value: '85%', label: 'Success Rate' },
      color: 'from-emerald-500/30 to-teal-600/20',
      accentColor: 'emerald-500',
      bgGradient: 'from-emerald-500/5 via-teal-500/5 to-cyan-500/5',
    },
    {
      id: 'our-work-2',
      icon: <Briefcase className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />,
      step: '02',
      title: 'Need Talent',
      subtitle: 'Build Your Dream Team',
      description:
        'Access top-tier professionals and expert services to transform your projects into market leaders.',
      features: [
        'Vetted talent marketplace with 10,000+ professionals',
        'Advanced skill-based matching algorithm',
        'Integrated project management tools',
        'Secure escrow payment system',
      ],
      stats: { value: '10k+', label: 'Professionals' },
      color: 'from-blue-500/30 to-indigo-600/20',
      accentColor: 'blue-500',
      bgGradient: 'from-blue-500/5 via-indigo-500/5 to-purple-500/5',
    },
    {
      id: 'our-work-3',
      icon: <Target className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />,
      step: '03',
      title: 'Ready to Work',
      subtitle: 'Showcase Your Expertise',
      description:
        'Demonstrate your skills and discover high-impact projects that align with your professional goals.',
      features: [
        'Comprehensive portfolio showcase platform',
        'Real-time project matching',
        'Transparent and secure payment system',
        'Performance-based reputation system',
      ],
      stats: { value: '$2M+', label: 'Paid Out' },
      color: 'from-purple-500/30 to-pink-600/20',
      accentColor: 'purple-500',
      bgGradient: 'from-purple-500/5 via-pink-500/5 to-rose-500/5',
    },
  ]

  // Mobile Card Component
  const MobileCard = ({
    card,
    index,
  }: {
    card: (typeof cardData)[0]
    index: number
  }) => {
    const { ref, inView } = useInView({
      threshold: 0.3,
      triggerOnce: true,
    })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`w-full p-4 sm:p-6 text-white bg-gradient-to-br ${card.bgGradient} border border-white/30 rounded-2xl backdrop-blur-xl shadow-2xl mb-6`}
      >
        {/* Card Header */}
        <div className='flex items-start justify-between mb-6'>
          <div className='flex items-center gap-3'>
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
            >
              {card.icon}
            </div>
            <div>
              <div
                className={`text-${card.accentColor} text-sm font-semibold mb-1 tracking-wider`}
              >
                STEP {card.step}
              </div>
              <h3 className='text-xl font-bold text-white leading-tight'>
                {card.title}
              </h3>
            </div>
          </div>
          <div className='text-right bg-white/10 rounded-xl p-3 backdrop-blur-sm'>
            <div className={`text-xl font-bold text-${card.accentColor}`}>
              {card.stats.value}
            </div>
            <div className='text-xs text-gray-300 font-medium'>
              {card.stats.label}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className='space-y-4'>
          <div>
            <h4 className='text-lg font-bold text-white mb-2 leading-tight'>
              {card.subtitle}
            </h4>
            <p className='text-gray-200 text-sm leading-relaxed'>
              {card.description}
            </p>
          </div>

          {/* Features List */}
          <div className='grid grid-cols-1 gap-2'>
            {card.features.map((feature, idx) => (
              <div
                key={idx}
                className='flex items-start gap-2 p-2 bg-white/5 rounded-lg backdrop-blur-sm'
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-${card.accentColor} mt-1.5 flex-shrink-0`}
                ></div>
                <span className='text-gray-200 text-xs font-medium leading-relaxed'>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className='pt-3'>
            <button
              className={`w-full px-6 py-3 bg-gradient-to-r from-${card.accentColor} to-${card.accentColor}/80 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-${card.accentColor}/30 hover:scale-105 transform`}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  // If mobile, return simplified layout
  if (isMobile) {
    return (
      <div className='relative'>
        <section className='min-h-screen bg-gradient-to-br from-[#14192d] via-[#1a1f35] to-[#0f1419] relative overflow-hidden py-12'>
          {/* Background Effects */}
          <div className='absolute inset-0'>
            <div className='absolute w-[80vw] h-[80vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#a98b5d] via-[#d4af37] to-[#8b6914] rounded-full opacity-10 blur-[200px] pointer-events-none animate-pulse'></div>
          </div>

          <div className='container mx-auto px-4 relative z-10'>
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center mb-8'
            >
              <h2 className='text-3xl font-bold bg-gradient-to-r from-[#a98b5d] via-[#d4af37] to-[#dcd7ce] bg-clip-text text-transparent leading-tight mb-4'>
                How it works
              </h2>
              <p className='text-[#8a8b90] text-base leading-relaxed max-w-md mx-auto'>
                Discover the seamless process that connects opportunities with
                outcomes through our innovative platform
              </p>
            </motion.div>

            {/* Cards */}
            <div className='space-y-6'>
              {cardData.map((card, index) => (
                <MobileCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className='relative'>
      {/* Initial Hero Section */}

      {/* Scroll-Triggered Cards Section */}
      <section
        ref={containerRef}
        className='our-work min-h-screen bg-gradient-to-br from-[#14192d] via-[#1a1f35] to-[#0f1419] relative overflow-hidden flex items-center'
      >
        {/* Background Effects */}
        <div className='absolute inset-0'>
          <div className='absolute w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] lg:w-[40vw] lg:h-[40vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#a98b5d] via-[#d4af37] to-[#8b6914] rounded-full opacity-10 blur-[300px] pointer-events-none animate-pulse'></div>
          <div className='absolute w-[30vw] h-[30vw] sm:w-[25vw] sm:h-[25vw] lg:w-[20vw] lg:h-[20vw] top-1/4 right-1/4 bg-gradient-to-l from-emerald-500 to-teal-600 rounded-full opacity-15 blur-[200px] pointer-events-none'></div>
          <div className='absolute w-[35vw] h-[35vw] sm:w-[30vw] sm:h-[30vw] lg:w-[25vw] lg:h-[25vw] bottom-1/4 left-1/4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-12 blur-[250px] pointer-events-none'></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24'>
            {/* Left Side - Title */}
            <div className='lg:w-1/3 text-center lg:text-left'>
              <h2 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[#a98b5d] via-[#d4af37] to-[#dcd7ce] bg-clip-text text-transparent leading-tight mb-6'>
                How it works
              </h2>
              <p className='text-[#8a8b90] text-xl sm:text-2xl lg:text-xl xl:text-2xl mt-6 max-w-md mx-auto lg:mx-0 leading-relaxed'>
                Discover the seamless process that connects opportunities with
                outcomes through our innovative platform
              </p>
            </div>

            {/* Right Side - Slider */}
            <div className='lg:w-2/3 slider flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
              {/* Cards Container */}
              <div className='carousel__slider relative w-full max-w-5xl min-h-[700px] sm:min-h-[750px] lg:min-h-[800px]'>
                {cardData.map((card) => (
                  <div
                    key={card.id}
                    id={card.id}
                    className={`carousel__item absolute top-0 w-full min-h-[700px] sm:min-h-[750px] lg:min-h-[800px] p-6 sm:p-8 lg:p-12 text-white bg-gradient-to-br ${card.bgGradient} border border-white/30 rounded-3xl backdrop-blur-xl opacity-0 shadow-2xl`}
                  >
                    {/* Card Header */}
                    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-4'>
                      <div className='flex items-center gap-4 sm:gap-6'>
                        <div
                          className={`w-18 h-18 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
                        >
                          {card.icon}
                        </div>
                        <div>
                          <div
                            className={`text-${card.accentColor} text-base sm:text-lg font-semibold mb-2 tracking-wider`}
                          >
                            STEP {card.step}
                          </div>
                          <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'>
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <div className='text-center sm:text-right bg-white/10 rounded-2xl p-4 backdrop-blur-sm'>
                        <div
                          className={`text-3xl sm:text-4xl font-bold text-${card.accentColor}`}
                        >
                          {card.stats.value}
                        </div>
                        <div className='text-base text-gray-300 font-medium'>
                          {card.stats.label}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className='space-y-8'>
                      <div>
                        <h4 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight'>
                          {card.subtitle}
                        </h4>
                        <p className='text-gray-200 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-4'>
                          {card.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className='grid sm:grid-cols-2 gap-8'>
                        {card.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-start gap-4 p-3 bg-white/5 rounded-xl backdrop-blur-sm'
                          >
                            <div
                              className={`w-3 h-3 rounded-full bg-${card.accentColor} mt-2 flex-shrink-0`}
                            ></div>
                            <span className='text-gray-200 text-base sm:text-lg font-medium leading-relaxed'>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className='pt-6'>
                        <button
                          className={`group relative px-10 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-${card.accentColor} to-${card.accentColor}/80 rounded-2xl font-bold text-lg sm:text-xl text-white transition-all duration-300 hover:shadow-xl hover:shadow-${card.accentColor}/30 hover:scale-105 transform`}
                        >
                          <span className='relative z-10'>
                            Get Started Today
                          </span>
                          <div
                            className={`absolute inset-0 bg-gradient-to-r from-${card.accentColor}/80 to-${card.accentColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <ul
                ref={navRef}
                className='carousel__nav flex lg:flex-col gap-6 mt-8 lg:mt-0 justify-center lg:justify-start'
              >
                {cardData.map((card) => (
                  <li
                    key={card.id}
                    className='carousel__nav__item w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 rounded-full cursor-pointer transition-all duration-500 hover:scale-150 hover:border-white/60 relative overflow-hidden'
                    data-target={card.id}
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-full transform scale-0 transition-transform duration-300'></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

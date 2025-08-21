'use client'

import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { TextAnimate } from '@/components/magicui/text-animate'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Rocket,
  Target,
  DollarSign,
  Users,
  TrendingUp,
  Award,
  Shield,
  Zap,
} from 'lucide-react'
import { LampContainer } from './ui/lamp'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default function HookText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
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

      // Initial state - all slides hidden except first
      gsap.set(slides, {
        xPercent: () => {
          return window.innerWidth < 1024 ? 125 : 0
        },
        yPercent: () => {
          return window.innerWidth >= 1024 ? 125 : 0
        },
        scale: 0.5,
        opacity: 0,
      })

      listItems.forEach((item: HTMLElement, i: number) => {
        item.addEventListener('click', (e: Event) => {
          e.preventDefault()
          const target = (e.target as HTMLElement).getAttribute('data-target')
          if (target && (tl as any).labels[target]) {
            const percent = (tl as any).labels[target] / tl.totalDuration()
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
                yPercent: 0,
                xPercent: 0,
                scale: 1,
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
                yPercent: () => {
                  return window.innerWidth >= 1024 ? -125 : 0
                },
                xPercent: () => {
                  return window.innerWidth < 1024 ? -125 : 0
                },
                scale: 0.5,
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
            yPercent: 0,
            xPercent: 0,
            opacity: 1,
            scale: 1,
          })
          tl.add('our-work-' + (i + 1), '+=0')
        }
      })

      return () => {
        myST.kill()
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  const cardData = [
    {
      id: 'our-work-1',
      icon: <Rocket className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />,
      step: '01',
      title: 'Seeking Investment',
      subtitle: 'Turn Your Vision Into Reality',
      description:
        'Connect with smart investors who understand your market and can accelerate your growth trajectory. Our platform leverages advanced AI algorithms to match startups with the most suitable investors based on industry expertise, investment preferences, and portfolio alignment.',
      detailedDescription:
        "Whether you're launching a disruptive tech startup or scaling an established business, our comprehensive investment platform provides everything you need to secure funding. From initial pitch preparation to final term negotiations, we guide you through every step of the investment journey.",
      features: [
        'Access to 5,000+ verified accredited investors',
        'AI-powered investor matching with 95% accuracy',
        'Streamlined due diligence process reducing time by 60%',
        'Expert term sheet negotiation support',
        'Real-time funding progress tracking',
        'Dedicated investment advisor assignment',
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
        'Access top-tier professionals and expert services to transform your projects into market leaders. Our talent ecosystem connects you with specialists who have proven track records in scaling successful ventures.',
      detailedDescription:
        'From technical co-founders to marketing specialists, our platform hosts a diverse community of professionals ready to join your mission. Each talent profile is thoroughly vetted, ensuring you connect with individuals who can genuinely contribute to your success.',
      features: [
        'Vetted talent marketplace with 10,000+ professionals',
        'Advanced skill-based matching algorithm',
        'Integrated project management and collaboration tools',
        '100% quality assurance guarantee on all deliverables',
        'Flexible engagement models (full-time, part-time, project-based)',
        'Secure escrow payment system with milestone tracking',
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
        'Demonstrate your skills and discover high-impact projects that align with your professional goals. Join a community where your expertise is valued and your contributions drive meaningful innovation.',
      detailedDescription:
        'Transform your skills into lucrative opportunities by joining projects that challenge and inspire you. Our platform ensures fair compensation, professional growth, and the chance to work with cutting-edge technologies alongside industry leaders.',
      features: [
        'Comprehensive portfolio showcase platform',
        'Real-time project matching based on skills and interests',
        'Transparent and secure payment system',
        'Professional growth tracking and skill development',
        'Direct communication with project stakeholders',
        'Performance-based reputation system and reviews',
      ],
      stats: { value: '$2M+', label: 'Paid Out' },
      color: 'from-purple-500/30 to-pink-600/20',
      accentColor: 'purple-500',
      bgGradient: 'from-purple-500/5 via-pink-500/5 to-rose-500/5',
    },
  ]

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
                {cardData.map((card, index) => (
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
                        <p className='text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed'>
                          {card.detailedDescription}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
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
                {cardData.map((card, index) => (
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

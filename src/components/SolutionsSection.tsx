'use client'

import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Shield,
  TrendingUp,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export default function SolutionsSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const horizontalRef = useRef<HTMLElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  // Initialize horizontal scroll effect
  useEffect(() => {
    if (!horizontalRef.current || !stripRef.current) return

    const section = horizontalRef.current
    const strip = stripRef.current

    let pinWrapWidth: number
    let horizontalScrollLength: number

    function refresh() {
      pinWrapWidth = strip.scrollWidth
      // Calculate proper scroll length to center first and last cards
      const cardWidth = window.innerWidth * 0.7 // 70vw card width
      const centerOffset = (window.innerWidth - cardWidth) / 2
      horizontalScrollLength =
        pinWrapWidth - window.innerWidth + centerOffset * 2
    }

    refresh()

    // Set initial position to center the first card
    gsap.set(strip, {
      x: (window.innerWidth - window.innerWidth * 0.7) / 2, // Better centering for 70vw cards
    })

    // Create the horizontal scroll animation with centered positioning
    const scrollTween = gsap.to(strip, {
      scrollTrigger: {
        trigger: section,
        pin: section,
        scrub: 1,
        start: 'top top',
        end: () => `+=${horizontalScrollLength * 0.9}`,
        invalidateOnRefresh: true,
        pinSpacing: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        onUpdate: (self: any) => {
          // Update active feature based on scroll progress
          const progress = self.progress
          const newActiveFeature = Math.min(
            Math.floor(progress * solutions.length),
            solutions.length - 1
          )
          setActiveFeature(newActiveFeature)
        },
        onLeave: () => {
          // Clean up when leaving the section
          setActiveFeature(solutions.length - 1)
        },
      },
      // Move from centered first card to centered last card
      x: () => {
        const cardWidth = window.innerWidth * 0.7
        const centerOffset = (window.innerWidth - cardWidth) / 2
        return -horizontalScrollLength + centerOffset
      },
      ease: 'none',
    })

    // Reduced parallax effect intensity to prevent spacing issues
    strip.querySelectorAll('[data-speed-x]').forEach((el: any, i: number) => {
      const speed = parseFloat(el.getAttribute('data-speed-x') || '1')
      gsap.to(el, {
        x: () => (1 - speed) * (window.innerWidth * 0.1), // Reduced parallax intensity
        ease: 'none',
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: el,
          scrub: true,
          onRefresh: (self: any) => {
            const start = Math.max(0, self.start)
            if (self.setPositions) {
              self.setPositions(
                start,
                start + (self.end - self.start) / Math.abs(speed)
              )
            }
            if (self.animation) {
              self.animation.progress(0)
            }
          },
        },
      })
    })

    ScrollTrigger.addEventListener('refreshInit', refresh)

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
      ScrollTrigger.removeEventListener('refreshInit', refresh)
    }
  }, [])

  const solutions = [
    {
      id: 0,
      icon: Brain,
      title: 'Source Collectively',
      subtitle: 'Network reach × aligned incentives',
      description:
        'Leverage our network’s reach. Contributors are rewarded for surfacing high-potential, qualified deals.',
      benefits: [
        'Structured intake & routing',
        'Signal over noise scoring',
        'Rewarded sourcing behavior',
      ],
      visual: { type: 'neural-network', color: '#a98b5d' },
    },
    {
      id: 1,
      icon: Brain,
      title: 'Vet with AI & Expertise',
      subtitle: 'Layered filtration & review',
      description:
        'Adaptive AI pre-filters for thesis fit. Expert reviewers then perform structured diligence with standardized outputs.',
      benefits: [
        'Faster qualification cycles',
        'Comparable evaluation frames',
        'Reduced false positives',
      ],
      visual: { type: 'radar', color: '#dcd7ce' },
    },
    {
      id: 2,
      icon: Shield,
      title: 'Trust On-Chain Verification',
      subtitle: 'Immutable data attestations',
      description:
        'Key metrics, technical claims, and milestone proofs are immutably attested to reduce misrepresentation risk.',
      benefits: [
        'Tamper-evident records',
        'Reduced diligence redundancy',
        'Higher confidence early',
      ],
      visual: { type: 'shield', color: '#5c5d63' },
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Succeed Together',
      subtitle: 'Ownership-aligned outcomes',
      description:
        'Governance participants share in value creation and guide platform direction through transparent processes.',
      benefits: [
        'Incentive alignment',
        'Compounded network effects',
        'Long-term value focus',
      ],
      visual: { type: 'lightning', color: '#a98b5d' },
    },
  ]

  return (
    <>
      {/* Regular Section Header */}
      <section className='relative py-16 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden'>
        {/* Background Grid */}
        <div className='absolute inset-0 opacity-20'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `
              linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div ref={ref} className='relative z-10 max-w-7xl mx-auto px-4'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className='text-center mb-8'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'
            >
              <CheckCircle className='w-4 h-4' />
              OUR SOLUTION
            </motion.div>

            <h2 className='text-5xl md:text-6xl font-bold mb-6'>
              <span className='text-[#dcd7ce]'>A Smarter Way to </span>
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Source, Vet, and Invest
              </span>
            </h2>

            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              We&apos;re building a community-owned platform to de-risk
              investing in the Tunisia–France corridor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scrolling Section */}
      <section
        ref={horizontalRef}
        className='relative bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden'
        style={{ minHeight: '100vh' }} // Reduced height for tighter spacing
      >
        {/* Background Grid */}
        <div className='absolute inset-0 opacity-20'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `
              linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div
          ref={stripRef}
          className='flex items-center h-screen will-change-transform gsap-element'
          style={{
            width: `${solutions.length * 70}vw`, // Reduced to match 70vw cards
            gap: '0',
          }}
        >
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className='flex-shrink-0 horizontal-scroll-item'
              style={{
                width: '70vw', // Reduced width for tighter spacing
                minWidth: '70vw',
                maxWidth: '70vw',
              }}
              data-speed-x={index % 2 === 0 ? '1.05' : '0.95'}
            >
              <div className='w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-screen px-4 sm:px-6 lg:px-8'>
                {/* Solution Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className='space-y-6 lg:space-y-8 order-2 lg:order-1'
                >
                  <div
                    className={`group relative overflow-hidden p-6 lg:p-8 rounded-2xl lg:rounded-3xl border transition-all duration-500 premium-glass ${
                      activeFeature === index
                        ? 'border-[#a98b5d]/60 bg-gradient-to-br from-[#a98b5d]/15 via-[#dcd7ce]/8 to-[#a98b5d]/10 shadow-2xl shadow-[#a98b5d]/20'
                        : 'border-white/10 hover:border-[#a98b5d]/40 bg-gradient-to-br from-white/5 to-transparent'
                    }`}
                  >
                    {/* Animated background effect - only for non-active cards */}
                    {activeFeature !== index && (
                      <div className='absolute inset-0 bg-gradient-to-r from-[#a98b5d]/5 via-transparent to-[#dcd7ce]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    )}

                    {/* Glowing border effect */}
                    {activeFeature === index && (
                      <div className='absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#a98b5d]/30 to-[#dcd7ce]/30 p-[1px]'>
                        <div className='w-full h-full rounded-2xl lg:rounded-3xl bg-black/90' />
                      </div>
                    )}

                    <div className='relative z-10 flex items-start gap-4 lg:gap-6'>
                      <div
                        className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-r transition-all duration-500 p-0.5 ${
                          activeFeature === index
                            ? 'from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] shadow-lg shadow-[#a98b5d]/40'
                            : 'from-white/20 to-white/10 group-hover:from-[#a98b5d]/50 group-hover:to-[#dcd7ce]/50 group-hover:scale-110'
                        }`}
                      >
                        <div className='w-full h-full bg-gradient-to-br from-black to-gray-900 rounded-xl lg:rounded-2xl flex items-center justify-center'>
                          <solution.icon
                            className={`w-6 h-6 lg:w-8 lg:h-8 transition-all duration-500 ${
                              activeFeature === index
                                ? 'text-[#a98b5d] drop-shadow-lg'
                                : 'text-gray-400 group-hover:text-[#a98b5d]'
                            }`}
                          />
                        </div>
                      </div>

                      <div className='flex-1'>
                        <div className='flex items-center justify-between mb-2 lg:mb-3'>
                          <h3
                            className={`text-xl lg:text-2xl xl:text-3xl font-bold transition-all duration-500 ${
                              activeFeature === index
                                ? 'text-[#dcd7ce] drop-shadow-md'
                                : 'text-gray-300 group-hover:text-white'
                            }`}
                          >
                            {solution.title}
                          </h3>
                          <ArrowRight
                            className={`w-5 h-5 lg:w-6 lg:h-6 transition-all duration-500 ${
                              activeFeature === index
                                ? 'text-[#a98b5d] translate-x-1 scale-110'
                                : 'text-gray-500 group-hover:text-[#a98b5d] group-hover:translate-x-1'
                            }`}
                          />
                        </div>
                        <p className='text-sm lg:text-lg text-[#a98b5d]/80 mb-3 lg:mb-4 font-medium'>
                          {solution.subtitle}
                        </p>
                        <p
                          className={`text-sm lg:text-base transition-colors duration-500 mb-4 lg:mb-6 leading-relaxed ${
                            activeFeature === index
                              ? 'text-gray-200'
                              : 'text-gray-400 group-hover:text-gray-300'
                          }`}
                        >
                          {solution.description}
                        </p>

                        {/* Benefits List */}
                        <div className='space-y-2 lg:space-y-3'>
                          {solution.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className='flex items-center gap-2 lg:gap-3'
                            >
                              <CheckCircle className='w-3 h-3 lg:w-4 lg:h-4 text-[#a98b5d] flex-shrink-0' />
                              <span className='text-xs lg:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
                                {benefit}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Interactive Visual Display */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className='h-full flex items-center justify-center order-1 lg:order-2'
                >
                  <div className='aspect-square w-full max-w-sm lg:max-w-lg bg-gradient-to-br from-[#a98b5d]/20 via-[#dcd7ce]/10 to-[#a98b5d]/5 rounded-2xl lg:rounded-3xl border border-[#a98b5d]/30 backdrop-blur-xl p-6 lg:p-8 flex items-center justify-center premium-glass shadow-2xl'>
                    {/* Dynamic Visual Content */}
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.7,
                        type: 'spring',
                        bounce: 0.3,
                      }}
                      className='w-full h-full relative flex items-center justify-center'
                    >
                      {/* Neural Network Visual */}
                      {solution.visual.type === 'neural-network' && (
                        <div className='relative w-48 h-48 lg:w-64 lg:h-64'>
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              className='absolute w-2 h-2 lg:w-3 lg:h-3 bg-[#a98b5d] rounded-full shadow-lg'
                              style={{
                                left: `${20 + (i % 3) * 30}%`,
                                top: `${20 + Math.floor(i / 3) * 20}%`,
                              }}
                              animate={{
                                scale: [1, 1.8, 1],
                                opacity: [0.4, 1, 0.4],
                                boxShadow: [
                                  '0 0 0px #a98b5d',
                                  '0 0 20px #a98b5d',
                                  '0 0 0px #a98b5d',
                                ],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.15,
                              }}
                            />
                          ))}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={`line-${i}`}
                              className='absolute h-px bg-gradient-to-r from-[#a98b5d]/60 via-[#dcd7ce]/40 to-transparent'
                              style={{
                                left: '25%',
                                top: `${25 + i * 10}%`,
                                width: '50%',
                              }}
                              animate={{
                                opacity: [0, 1, 0],
                                scaleX: [0, 1, 0.8],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Other visual types */}
                      {solution.visual.type !== 'neural-network' && (
                        <div className='w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-[#a98b5d]/40 via-[#dcd7ce]/30 to-[#a98b5d]/40 flex items-center justify-center relative premium-glow'>
                          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 animate-pulse' />
                          {(() => {
                            const IconComponent = solution.icon
                            return (
                              <IconComponent className='w-16 h-16 lg:w-24 lg:h-24 text-[#a98b5d] relative z-10 drop-shadow-lg' />
                            )
                          })()}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

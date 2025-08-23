'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Network,
  Brain,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Link2,
} from 'lucide-react'

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
      horizontalScrollLength = pinWrapWidth - window.innerWidth
    }

    refresh()

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(strip, {
      scrollTrigger: {
        trigger: section,
        pin: section,
        scrub: 1,
        start: 'top top',
        end: () => `+=${horizontalScrollLength * 1.5}`, // Increased end point
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
      x: () => -horizontalScrollLength,
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
      <section className='relative py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden'>
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
            className='text-center mb-20'
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
        style={{ minHeight: '150vh' }}
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
          style={{ width: `${solutions.length * 100}vw`, gap: '0' }}
        >
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className='flex-shrink-0 horizontal-scroll-item'
              style={{
                width: '100vw',
                minWidth: '100vw',
                maxWidth: '100vw',
              }}
              data-speed-x={index % 2 === 0 ? '1.1' : '0.9'}
            >
              <div className='w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center h-screen px-8 lg:px-16'>
                {/* Solution Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className='space-y-8'
                >
                  <div
                    className={`group cursor-pointer p-8 rounded-2xl border transition-all duration-300 ${
                      activeFeature === index
                        ? 'border-[#a98b5d] bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/5'
                        : 'border-white/10 hover:border-[#a98b5d]/50'
                    }`}
                  >
                    <div className='flex items-start gap-6'>
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r transition-all duration-300 p-0.5 ${
                          activeFeature === index
                            ? 'from-[#a98b5d] to-[#dcd7ce]'
                            : 'from-white/20 to-white/10'
                        }`}
                      >
                        <div className='w-full h-full bg-black rounded-xl flex items-center justify-center'>
                          <solution.icon
                            className={`w-8 h-8 transition-colors duration-300 ${
                              activeFeature === index
                                ? 'text-[#a98b5d]'
                                : 'text-gray-400'
                            }`}
                          />
                        </div>
                      </div>

                      <div className='flex-1'>
                        <div className='flex items-center justify-between mb-3'>
                          <h3
                            className={`text-2xl font-semibold transition-colors duration-300 ${
                              activeFeature === index
                                ? 'text-[#dcd7ce]'
                                : 'text-gray-300'
                            }`}
                          >
                            {solution.title}
                          </h3>
                          <ArrowRight
                            className={`w-6 h-6 transition-all duration-300 ${
                              activeFeature === index
                                ? 'text-[#a98b5d] translate-x-1'
                                : 'text-gray-500'
                            }`}
                          />
                        </div>
                        <p className='text-lg text-gray-500 mb-4'>
                          {solution.subtitle}
                        </p>
                        <p
                          className={`text-base transition-colors duration-300 mb-6 ${
                            activeFeature === index
                              ? 'text-gray-300'
                              : 'text-gray-500'
                          }`}
                        >
                          {solution.description}
                        </p>

                        {/* Benefits List */}
                        <div className='space-y-3'>
                          {solution.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className='flex items-center gap-3'
                            >
                              <CheckCircle className='w-4 h-4 text-[#a98b5d] flex-shrink-0' />
                              <span className='text-sm text-gray-400'>
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
                  className='h-full flex items-center justify-center'
                >
                  <div className='aspect-square w-full max-w-lg bg-gradient-to-br from-[#a98b5d]/20 to-[#dcd7ce]/10 rounded-3xl border border-[#a98b5d]/30 backdrop-blur-xl p-8 flex items-center justify-center'>
                    {/* Dynamic Visual Content */}
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className='w-full h-full relative flex items-center justify-center'
                    >
                      {/* Neural Network Visual */}
                      {solution.visual.type === 'neural-network' && (
                        <div className='relative w-64 h-64'>
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              className='absolute w-3 h-3 bg-[#a98b5d] rounded-full'
                              style={{
                                left: `${20 + (i % 3) * 30}%`,
                                top: `${20 + Math.floor(i / 3) * 20}%`,
                              }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={`line-${i}`}
                              className='absolute h-px bg-gradient-to-r from-[#a98b5d]/50 to-transparent'
                              style={{
                                left: '25%',
                                top: `${25 + i * 10}%`,
                                width: '50%',
                              }}
                              animate={{
                                opacity: [0, 1, 0],
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
                        <div className='w-48 h-48 rounded-full bg-gradient-to-r from-[#a98b5d]/30 to-[#dcd7ce]/30 flex items-center justify-center'>
                          {(() => {
                            const IconComponent = solution.icon
                            return (
                              <IconComponent className='w-24 h-24 text-[#a98b5d]' />
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

      {/* Spacer Section to prevent overlap */}
      <section className='h-32 bg-gradient-to-b from-[#0a0a0a] to-black'></section>
    </>
  )
}

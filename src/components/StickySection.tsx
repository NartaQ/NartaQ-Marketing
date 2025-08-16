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

interface StickySectionProps {
  className?: string
}

export default function StickySection({ className }: StickySectionProps) {
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

  const stickyText = {
    title: 'About NartaQ',
    subtitle: 'From brief to release — in one trusted flow',
    description:
      'NartaQ helps innovators and companies hire service providers through scoped bounties and tri‑party orchestration with milestone protections, hybrid compensation, and optional intermediation.',
  }

  const scrollingContent = [
    {
      step: '01',
      title: 'Start with one corridor',
      description:
        'We focus the platform where we can guarantee quality and outcomes first, then expand. Relevance over breadth.',
      features: [
        'Segmented supply',
        'Verified demand',
        'Tight feedback loops',
        'Quality bar > volume',
      ],
    },
    {
      step: '02',
      title: 'Post a scoped bounty',
      description:
        'Turn work into a brief with acceptance criteria and budget ranges. Run open or private to a vetted pool of SPs.',
      features: [
        'Clear deliverables',
        'Acceptance tests',
        'Private bounties',
        'Payout on acceptance',
      ],
    },
    {
      step: '03',
      title: 'Verify & gate access',
      description:
        'KYC/KYB, NDAs, and role‑based access ensure only the right SPs see sensitive briefs and data.',
      features: [
        'KYC/KYB',
        'NDA gating',
        'Role‑based access',
        'Audit trails',
      ],
    },
    {
      step: '04',
      title: 'Assign & contract',
      description:
        'Shortlist, assign, and establish milestone‑based terms with optional hybrid compensation (cash + equity).',
      features: [
        'Shortlist → award',
        'Milestone terms',
        'Hybrid comp',
        'Standard templates',
      ],
    },
    {
      step: '05',
      title: 'Deliver & accept',
      description:
        'SPs deliver to spec; acceptance criteria make quality measurable and objective.',
      features: [
        'Artifact hand‑off',
        'Acceptance checks',
        'Change requests',
        'Version control',
      ],
    },
    {
      step: '06',
      title: 'Resolve issues fast',
      description:
        'Optional intermediation handles scope clarifications and disputes without derailing delivery.',
      features: [
        'Mediated escalations',
        'Clear SLAs',
        'Evidence trails',
        'Fair outcomes',
      ],
    },
    {
      step: '07',
      title: 'Release payouts',
      description:
        'Milestone protections govern releases; equity components are handled via partners under NDA.',
      features: [
        'Milestone release',
        'Split payments',
        'Equity docs (NDA)',
        'Reconciliation',
      ],
    },
    {
      step: '08',
      title: 'Learn and scale',
      description:
        'Capture learnings, improve briefs, and scale to adjacent corridors backed by measurable outcomes.',
      features: [
        'Post‑mortems',
        'Quality metrics',
        'Playbooks',
        'Expansion signals',
      ],
    },
  ]

  if (isMobile) {
    // Mobile layout - no sticky behavior
    return (
      <section
        id='about'
        key='mobile-layout'
        className={cn(
          'py-20 bg-gradient-to-br from-[#232428] via-[#3e3f44] to-[#232428]',
          className
        )}
      >
        <div className='container mx-auto px-4'>
          {/* Mobile header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#dcd7ce] mb-4'>
              {stickyText.title}
            </h2>
            <p className='text-xl text-[#a98b5d] mb-6'>{stickyText.subtitle}</p>
            <p className='text-[#dcd7ce] max-w-2xl mx-auto'>
              {stickyText.description}
            </p>
          </div>

          {/* Mobile content */}
          <div className='space-y-8'>
            {scrollingContent.map((item, index) => (
              <MagicCard
                key={`mobile-${item.step}-${index}`}
                gradientColor={'#262626'}
                className='bg-[#3e3f44]/70 rounded-xl p-6 border border-[#5c5d63]'
              >
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 bg-[#a98b5d] rounded-lg flex items-center justify-center'>
                    <span className='text-white font-bold text-sm'>
                      {item.step}
                    </span>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold text-[#dcd7ce] mb-3'>
                      {item.title}
                    </h3>
                    <p className='text-[#dcd7ce] mb-4'>{item.description}</p>
                    <div className='grid grid-cols-2 gap-2'>
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={`mobile-${feature}-${featureIndex}`}
                          className='flex items-center gap-2'
                        >
                          <div className='w-1.5 h-1.5 bg-[#a98b5d] rounded-full'></div>
                          <span className='text-sm text-[#dcd7ce]'>
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
      id='about'
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
            <div className='space-y-6 lg:pr-12'>
              <h2 className='text-4xl lg:text-5xl font-bold text-[#dcd7ce] '>
                {stickyText.title}
              </h2>
              <p className='text-xl text-[#a98b5d]'>{stickyText.subtitle}</p>
              <p className='text-[#dcd7ce] text-lg leading-relaxed'>
                {stickyText.description}
              </p>
              <div className='pt-6'>
                <div className='w-20 h-1 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full'></div>
              </div>
            </div>
          </div>

          {/* Scrolling right content */}
          <div ref={contentRef} className='lg:w-1/2 py-20'>
            <div className='space-y-16 lg:pl-12'>
              {scrollingContent.map((item, index) => (
                <div key={`${item.step}-${index}`} className='group'>
                  <MagicCard
                    gradientColor={'#262626'}
                    gradientSize={300}
                    className='bg-[#3e3f44]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#5c5d63]/50 hover:border-[#a98b5d]/70 transition-all duration-300 hover:bg-[#3e3f44]/70'
                  >
                    <div className='flex items-start gap-6'>
                      <div className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#a98b5d] to-[#dcd7ce] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <span className='text-black font-bold text-lg'>
                          {item.step}
                        </span>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-semibold text-[#dcd7ce] mb-4 group-hover:text-[#a98b5d] transition-colors duration-300'>
                          {item.title}
                        </h3>
                        <p className='text-[#dcd7ce] mb-6 leading-relaxed'>
                          {item.description}
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                          {item.features.map((feature, featureIndex) => (
                            <div
                              key={`${feature}-${featureIndex}`}
                              className='flex items-center gap-3'
                            >
                              <div className='w-2 h-2 bg-[#a98b5d] rounded-full group-hover:bg-[#dcd7ce] transition-colors duration-300'></div>
                              <span className='text-[#dcd7ce] group-hover:text-[#dcd7ce] transition-colors duration-300'>
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

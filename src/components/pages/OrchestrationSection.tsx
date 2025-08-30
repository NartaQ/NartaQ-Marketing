'use client'

import {
  Target,
  Users,
  CheckCircle,
  CreditCard,
  ArrowRight,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function OrchestrationSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const cardsWrappers = gsap.utils.toArray('.card-wrapper')
    const cards = gsap.utils.toArray('.orchestration-card')

    cardsWrappers.forEach((wrapper: unknown, i: number) => {
      const wrapperElement = wrapper as Element
      const card = cards[i] as Element
      let scale = 1,
        rotation = 0
      if (i !== cards.length - 1) {
        scale = 0.9 + 0.025 * i
        rotation = -10
      }
      gsap.to(card, {
        scale: scale,
        rotationX: rotation,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperElement,
          start: 'top ' + (60 + 10 * i),
          end: 'bottom 550',
          endTrigger: '.orchestration-wrapper',
          scrub: true,
          pin: wrapperElement,
          pinSpacing: false,
          id: `card-${i + 1}`,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
  const orchestrationSteps = [
    {
      id: 1,
      title: 'Plan Scope',
      desc: 'Clear deliverables, success criteria, and timeline with locked documentation.',
      icon: 'target',
      color: 'from-[#a98b5d]/10 via-[#a98b5d]/5 to-transparent',
    },
    {
      id: 2,
      title: 'Find Talent',
      desc: 'Vetted service providers or teams matched to your exact needs.',
      icon: 'users',
      color: 'from-[#dcd7ce]/10 via-[#dcd7ce]/5 to-transparent',
    },
    {
      id: 3,
      title: 'Top Quality',
      desc: 'Milestone reviews with audit trails, approval gates, and quality checks.',
      icon: 'checkcircle',
      color: 'from-[#5c5d63]/15 via-[#5c5d63]/8 to-transparent',
    },
    {
      id: 4,
      title: 'Safe Payment',
      desc: 'Staged payouts with optional support for complex work and disputes.',
      icon: 'creditcard',
      color: 'from-[#a98b5d]/12 via-[#a98b5d]/6 to-transparent',
    },
  ]

  // Card data for GSAP stacked cards
  const cardData = [
    {
      title: 'Scope Planning',
      description:
        'Clear goals, timeline, and success criteria. Locked docs so everyone knows what to build.',
      icon: <Target className='w-16 h-16 text-[#a98b5d]' />,
      bgGradient: 'from-[#a98b5d]/10 via-[#a98b5d]/5 to-transparent',
      features: [
        {
          title: 'Tech Requirements',
          desc: 'Detailed specs and milestones',
        },
        {
          title: 'Project Timeline',
          desc: 'Fixed schedule with approval gates',
        },
      ],
    },
    {
      title: 'Find Top Talent',
      description:
        'We check every expert twice. Match you with people who fit your exact needs.',
      icon: <Users className='w-16 h-16 text-[#a98b5d]' />,
      bgGradient: 'from-[#dcd7ce]/10 via-[#dcd7ce]/5 to-transparent',
      features: [
        {
          title: 'We Check Everyone',
          desc: 'Tech interviews and portfolio review',
        },
        {
          title: 'Perfect Match',
          desc: 'Smart matching based on skills and fit',
        },
      ],
    },
    {
      title: 'Top Quality Work',
      description:
        'We check each step and track progress. You see what gets done in real time.',
      icon: <CheckCircle className='w-16 h-16 text-[#a98b5d]' />,
      bgGradient: 'from-[#5c5d63]/15 via-[#5c5d63]/8 to-transparent',
      features: [
        {
          title: 'Quality Checks',
          desc: 'Code reviews and testing',
        },
        {
          title: 'Live Updates',
          desc: 'See progress as it happens',
        },
      ],
    },
    {
      title: 'Safe Payment',
      description:
        'We hold your money until work is done right. Pay in cash, equity, or both.',
      icon: <CreditCard className='w-16 h-16 text-[#a98b5d]' />,
      bgGradient: 'from-[#a98b5d]/12 via-[#a98b5d]/6 to-transparent',
      features: [
        {
          title: 'Money Protected',
          desc: 'Funds held until you approve work',
        },
        {
          title: 'Pay Your Way',
          desc: 'Cash + equity deals made simple',
        },
      ],
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'target':
        return <Target className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />
      case 'users':
        return <Users className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />
      case 'checkcircle':
        return (
          <CheckCircle className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />
        )
      case 'creditcard':
        return (
          <CreditCard className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />
        )
      default:
        return <Target className='w-10 h-10 md:w-12 md:h-12 text-[#a98b5d]' />
    }
  }

  return (
    <section
      id='orchestration'
      className='flex w-full flex-col items-center justify-center p-[2%] py-32 relative'
    >
      {/* Premium background elements */}
      <div className='absolute inset-0 luxury-texture opacity-25'></div>
      <div className='absolute top-1/5 right-1/4 w-96 h-96 bg-[#a98b5d]/4 rounded-full blur-3xl floating'></div>
      <div className='absolute bottom-1/5 left-1/4 w-80 h-80 bg-[#dcd7ce]/3 rounded-full blur-3xl floating'></div>

      <div className='max-w-6xl mx-auto text-center space-y-8 relative z-10'>
        {/* Premium section header */}
        <div className='space-y-6'>
          <div className='flex justify-center mb-4'>
            <div className='premium-glass px-8 py-3 rounded-full border border-[#a98b5d]/20'>
              <span className='text-sm font-medium text-[#a98b5d] tracking-wider'>
                TRI-PARTY ORCHESTRATION
              </span>
            </div>
          </div>

          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce] '>
            From <span className='font-medium text-[#a98b5d] '>term sheet</span>{' '}
            to delivery
            <br />
            <span className='text-3xl md:text-4xl opacity-80'>
              sophisticated orchestration
            </span>
          </h2>

          <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

          <p className='text-xl text-[#dcd7ce] font-light leading-relaxed max-w-4xl mx-auto'>
            Transform funding intent into shipped outcomes with our premium
            orchestration platform.
            <br />
            <br />
            <span className='text-[#a98b5d]/90'>
              Define scopes and milestones, assign vetted service providers, and
              release escrow‑style payouts on acceptance. Full support for
              hybrid compensation with standardized legal templates.
            </span>
          </p>
        </div>
      </div>

      {/* Premium orchestration workflow - Hidden on mobile */}
      <div className='mt-16 md:mt-20 max-w-7xl w-full hidden md:block'>
        <div className='space-y-6 md:space-y-8 mb-12 md:mb-16 px-4'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-light text-[#dcd7ce] text-center'>
            <span className='font-medium text-[#a98b5d]'>
              Complete orchestration
            </span>{' '}
            workflow
          </h3>
          <p className='text-base md:text-lg lg:text-xl text-[#dcd7ce] font-light text-center max-w-3xl mx-auto leading-relaxed'>
            From initial scope definition to final delivery, our orchestration
            platform manages every aspect of your project with precision and
            transparency.
          </p>
        </div>

        {/* GSAP Stacked Cards for orchestration phases */}
        <div
          className='orchestration-wrapper min-h-[400vh] pt-20 pb-20'
          ref={wrapperRef}
        >
          <div className='cards-container max-w-4xl mx-auto px-4 md:px-8'>
            {cardData.map((card, index) => (
              <div
                key={index}
                className='card-wrapper mb-12 last:mb-0'
                style={{ perspective: '500px' }}
              >
                <div
                  className={`orchestration-card w-full h-[500px] bg-gradient-to-br ${card.bgGradient} premium-glass rounded-3xl border border-[#a98b5d]/20 flex flex-col items-center justify-center p-8 md:p-12`}
                >
                  <div className='mb-8'>{card.icon}</div>
                  <h2 className='text-3xl md:text-4xl font-medium mb-6 text-center text-[#dcd7ce]'>
                    {card.title}
                  </h2>
                  <div className='w-16 h-1 bg-[#a98b5d] mb-8'></div>
                  <p className='text-lg md:text-xl max-w-3xl mb-10 text-center leading-relaxed text-[#dcd7ce]/90'>
                    {card.description}
                  </p>

                  <div className='grid sm:grid-cols-2 gap-8 max-w-2xl w-full'>
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='premium-glass rounded-lg p-4 md:p-6 border border-[#a98b5d]/20'
                      >
                        <h4 className='text-sm md:text-base font-medium text-[#a98b5d] mb-3'>
                          {feature.title}
                        </h4>
                        <p className='text-xs md:text-sm text-[#dcd7ce]/70'>
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium orchestration flow cards */}
      <div className='mt-16 md:mt-24 lg:mt-32 max-w-7xl w-full px-4'>
        <div className='text-center mb-12 md:mb-16'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-light text-[#dcd7ce] mb-4 md:mb-6'>
            <span className='md:hidden'>Our orchestration process</span>
            <span className='hidden md:inline'>
              At a <span className='font-medium text-[#a98b5d]'>glance</span>
            </span>
          </h3>
          <p className='text-base md:text-lg text-[#dcd7ce]/80 max-w-2xl mx-auto'>
            <span className='md:hidden'>
              Step-by-step breakdown of how we transform your project from
              concept to delivery
            </span>
            <span className='hidden md:inline'>
              Quick overview of our orchestration process
            </span>
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          {orchestrationSteps.map((card) => (
            <div
              key={card.id}
              className='group premium-glass elite-hover rounded-3xl md:rounded-3xl overflow-hidden border border-[#a98b5d]/20 relative min-h-[280px] md:min-h-[320px]'
            >
              {/* Dynamic background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color}`}
              ></div>

              <div className='relative z-10 p-8 md:p-10 h-full flex flex-col'>
                {/* Step number and icon */}
                <div className='flex items-center justify-between mb-6 md:mb-8'>
                  <div className='text-3xl md:text-4xl font-light text-[#a98b5d]/40'>
                    {String(card.id).padStart(2, '0')}
                  </div>
                  <div className='w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500'>
                    {getIcon(card.icon)}
                  </div>
                </div>

                <div className='flex-1 flex flex-col'>
                  <h3 className='text-xl md:text-2xl font-medium text-[#dcd7ce] mb-4 md:mb-6 leading-tight'>
                    {card.title}
                  </h3>

                  <div className='w-12 md:w-16 h-1 bg-[#a98b5d] mb-4 md:mb-6 group-hover:w-16 md:group-hover:w-20 transition-all duration-300'></div>

                  <p className='text-[#dcd7ce] leading-relaxed font-light text-sm md:text-base flex-1'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium value proposition */}
      <div className='mt-16 md:mt-20'>
        <div className='premium-glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-[#a98b5d]/20 max-w-4xl mx-auto'>
          <div className='text-center space-y-4 md:space-y-6'>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-[#dcd7ce]'>
              <span className='font-medium text-[#a98b5d]'>
                Hybrid compensation
              </span>{' '}
              supported
            </h3>

            <p className='text-base md:text-lg text-[#dcd7ce] font-light leading-relaxed'>
              Cash + equity/options arrangements with standardized legal
              templates via our trusted partner network. All structures are
              NDA-protected and jurisdiction-compliant.
            </p>

            <div className='flex justify-center pt-2'>
              <Link
                href='mailto:contact@nartaq.com?subject=Orchestration%20Inquiry'
                className='premium-glass elite-hover px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl border border-[#a98b5d]/30 hover:border-[#a98b5d]/60 transition-all duration-300 inline-flex items-center gap-2 md:gap-3'
              >
                <span className='text-[#a98b5d] font-medium text-sm md:text-base'>
                  Learn about orchestration
                </span>
                <ArrowRight className='w-3 h-3 md:w-4 md:h-4 text-[#a98b5d]' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

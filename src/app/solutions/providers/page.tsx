'use client'

import Header from '@/components/Header'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { MagicCard } from '@/components/magicui/magic-card'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { Particles } from '@/components/magicui/particles'
import { Spotlight } from '@/components/ui/spotlight'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function ForServiceProvidersPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial reveal animations
    gsap.set('.reveal-up', { opacity: 0, y: '100%' })
    gsap.set('.reveal-fade', { opacity: 0 })
    gsap.set('.reveal-scale', { opacity: 0, scale: 0.8 })

    // Reveal animations for sections
    const sections = gsap.utils.toArray('section')
    sections.forEach((sec) => {
      const element = sec as Element
      const timeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: element,
          start: '10% 80%',
          end: '20% 90%',
        },
      })

      // Animate reveal-up elements
      const revealUpElements = element.querySelectorAll('.reveal-up')
      if (revealUpElements.length > 0) {
        timeline.to(revealUpElements, {
          opacity: 1,
          duration: 0.8,
          y: '0%',
          stagger: 0.2,
        })
      }

      // Animate reveal-fade elements
      const revealFadeElements = element.querySelectorAll('.reveal-fade')
      if (revealFadeElements.length > 0) {
        timeline.to(
          revealFadeElements,
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
          },
          '-=0.4'
        )
      }

      // Animate reveal-scale elements
      const revealScaleElements = element.querySelectorAll('.reveal-scale')
      if (revealScaleElements.length > 0) {
        timeline.to(
          revealScaleElements,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
          },
          '-=0.4'
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div
      ref={pageRef}
      className='flex min-h-screen flex-col bg-black text-white'
    >
      <Header />
      <main className='pt-20'>
        {/* Hero Section */}
        <section className='relative flex w-full flex-col items-center justify-center p-[2%] py-20 text-center overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <Spotlight />
            <Particles
              className='absolute inset-0'
              quantity={100}
              ease={80}
              color='#a98b5d'
              refresh={false}
            />
          </div>
          <div className='relative z-10 max-w-4xl space-y-8'>
            <div className='flex justify-center mb-6 reveal-fade'>
              <AnimatedGradientText
                className='text-sm font-medium'
                colorFrom='#a98b5d'
                colorTo='#dcd7ce'
              >
                Work with Tomorrow&apos;s Unicorns Today
              </AnimatedGradientText>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold leading-tight reveal-up'>
              Skip Upwork, work with{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                top companies
              </span>{' '}
              at great rates.
            </h1>
            <p className='text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
              Great projects for great talent. Get exclusive contracts from
              funded startups and top companies. Your skills,
              top-level pay.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 reveal-scale'>
              <a
                href='mailto:talent@nartaq.com?subject=Join%20Elite%20Network%20Request'
                className='group relative px-10 py-5 text-lg font-bold text-black bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-xl shadow-2xl hover:shadow-[#a98b5d]/50 transform hover:scale-105 transition-all duration-300 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative flex items-center space-x-3'>
                  <span>Join Elite Network</span>
                  <span className='text-xl group-hover:translate-x-1 transition-transform duration-300'>
                    →
                  </span>
                </div>
                <div className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300'></div>
              </a>
              <Link
                href='#how-it-works'
                className='px-8 py-5 rounded-xl font-semibold border-2 border-[#5c5d63] text-[#dcd7ce] hover:border-[#a98b5d] hover:bg-[#a98b5d]/10 hover:text-[#a98b5d] transition-all duration-300 shadow-lg hover:shadow-[#5c5d63]/30'
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-gradient-to-b from-black to-[#232428]'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  $<NumberTicker value={75} />K
                </div>
                <p className='text-neutral-400'>Average Project Value vs $5K</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={92} />%
                </div>
                <p className='text-neutral-400'>Long-term Partnerships</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  $<NumberTicker value={350} />
                  /h
                </div>
                <p className='text-neutral-400'>Average Rate vs $50 Market</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={15} />%
                </div>
                <p className='text-neutral-400'>Got Equity That 10x&apos;d</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
                Where A-players work on{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  A+ projects
                </span>
              </h2>
              <p className='text-xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
                From FAANG to founding teams. Elite freelancers and service
                providers working with high-growth startups and unicorn
                companies.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Premium Client Access */}
              <div className='reveal-scale'>
                <MagicCard
                  className='p-8 h-full'
                  gradientColor='#a98b5d'
                  gradientOpacity={0.1}
                >
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-2xl'>
                        🎯
                      </div>
                      <h3 className='text-3xl font-bold text-[#a98b5d]'>
                        PREMIUM CLIENT ACCESS
                      </h3>
                    </div>
                    <p className='text-lg text-neutral-300 leading-relaxed'>
                      Work with funded startups and unicorn companies. Access
                      exclusive projects from Series A+ companies with
                      high-value contracts.
                    </p>
                    <ul className='space-y-4'>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          High-value contracts ($50K-$500K+ projects)
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Equity compensation opportunities in promising
                          startups
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Direct access to CTOs, founders, and decision makers
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Skip agency middlemen and keep 100% of your rates
                        </span>
                      </li>
                    </ul>
                  </div>
                </MagicCard>
              </div>

              {/* Elite Earning Potential */}
              <div className='reveal-scale'>
                <MagicCard
                  className='p-8 h-full'
                  gradientColor='#dcd7ce'
                  gradientOpacity={0.1}
                >
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-2xl'>
                        💰
                      </div>
                      <h3 className='text-3xl font-bold text-[#dcd7ce]'>
                        ELITE EARNING POTENTIAL
                      </h3>
                    </div>
                    <p className='text-lg text-neutral-300 leading-relaxed'>
                      3-5x higher rates than traditional freelancing platforms.
                      Equity upside in high-growth companies with premium
                      project budgets.
                    </p>
                    <ul className='space-y-4'>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#dcd7ce] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Long-term retainer opportunities
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#dcd7ce] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Performance bonuses and success fees
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#dcd7ce] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Premium project budgets ($10K+ minimum)
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#dcd7ce] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Recurring revenue from growing clients
                        </span>
                      </li>
                    </ul>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>

        {/* Target Service Provider Types */}
        <section className='py-20 bg-gradient-to-b from-[#232428] to-black'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
                Elite Talent We&apos;re Looking For
              </h2>
              <p className='text-xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
                We work with the top 1% of service providers who have built
                products for unicorn companies and FAANG organizations.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>⚡</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Senior Software Engineers
                    </h3>
                    <p className='text-neutral-300'>
                      FAANG background with experience building scalable
                      systems. Full-stack, backend, and specialized engineers.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🏗️</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Technical Architects
                    </h3>
                    <p className='text-neutral-300'>
                      CTOs and technical architects who have designed
                      billion-dollar platforms and led engineering teams.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🎨</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Product Designers
                    </h3>
                    <p className='text-neutral-300'>
                      Unicorn company experience creating award-winning products
                      and user experiences that scale.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>📈</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Growth Marketing Experts
                    </h3>
                    <p className='text-neutral-300'>
                      Growth hackers who scaled companies 10x with proven track
                      records in user acquisition and retention.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🤖</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      AI/ML Engineers
                    </h3>
                    <p className='text-neutral-300'>
                      Machine learning experts and AI specialists who built
                      production ML systems at scale.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🔒</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Cybersecurity Specialists
                    </h3>
                    <p className='text-neutral-300'>
                      Security experts who protected billion-dollar platforms
                      and built enterprise-grade security systems.
                    </p>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
                Why Elite Talent Chooses{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  NartaQ
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🎯</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Exclusive Client Vetting
                    </h3>
                    <p className='text-neutral-300'>
                      Only funded and profitable companies. No bidding wars or
                      race-to-the-bottom pricing. Work with serious clients who
                      value expertise.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🏠</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Flexible Work Arrangements
                    </h3>
                    <p className='text-neutral-300'>
                      Remote-first culture with flexible schedules. Long-term
                      partnership potential with direct founder and CTO
                      relationships.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>📊</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Equity Participation
                    </h3>
                    <p className='text-neutral-300'>
                      Equity participation opportunities in high-growth
                      startups. Share in the upside of the companies you help
                      build.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>💎</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Premium Project Scopes
                    </h3>
                    <p className='text-neutral-300'>
                      Work on cutting-edge projects that matter. Premium budgets
                      for premium work with the latest technologies and
                      methodologies.
                    </p>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-20 bg-gradient-to-b from-[#232428] to-black'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
                Trusted by Elite{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Service Providers
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-white font-bold'>
                        JC
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          James Chen
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          Ex-Google Senior Engineer
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;Tripled my freelance income working with NartaQ
                      clients. These are the projects I dreamed of working on -
                      billion-dollar potential with equity upside.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-white font-bold'>
                        SP
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          Sarah Park
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          Product Designer, Ex-Airbnb
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;My equity from one NartaQ client is now worth $2M
                      after their Series B. Finally found clients who understand
                      the value of great design.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-black font-bold'>
                        MR
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          Marcus Rodriguez
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          Growth Marketing, Ex-Stripe
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;Helped 3 startups reach unicorn status through
                      NartaQ. The quality of clients and projects is unmatched -
                      this is where the best work happens.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className='py-20 px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
              Transparent{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Pricing
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-12 max-w-2xl mx-auto reveal-up'>
              Keep more of what you earn. Lower fees than other platforms with
              premium project opportunities.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              <div className='reveal-scale h-full'>
                <MagicCard className='p-8 h-full flex flex-col'>
                  <div className='flex-1 space-y-6'>
                    <div className='h-8 flex items-center'>
                      <div className='bg-[#5c5d63] text-[#dcd7ce] px-3 py-1 rounded-full text-sm font-medium inline-block'>
                        Standard
                      </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                      Premium Tier
                    </h3>
                    <div className='text-4xl font-bold text-[#a98b5d]'>
                      10% fee
                    </div>
                    <p className='text-neutral-300'>
                      Platform fee vs 20% on other platforms. Access to premium
                      projects and clients.
                    </p>
                    <ul className='space-y-3 text-left flex-1'>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Vetted client access</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Premium project matching</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Direct client communication</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Secure milestone payments</span>
                      </li>
                    </ul>
                  </div>
                  <div className='pt-6 mt-auto'>
                    <a
                      href='mailto:talent@nartaq.com?subject=Premium%20Tier%20Application'
                      className='w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-lg hover:from-[#dcd7ce] hover:to-[#a98b5d] transition-all duration-300 shadow-lg hover:shadow-[#a98b5d]/50'
                    >
                      Apply Now
                    </a>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale h-full'>
                <MagicCard className='p-8 border-2 border-[#a98b5d] h-full flex flex-col'>
                  <div className='flex-1 space-y-6'>
                    <div className='h-8 flex items-center'>
                      <div className='bg-[#a98b5d] text-black px-3 py-1 rounded-full text-sm font-medium inline-block'>
                        Most Popular
                      </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                      Elite Tier
                    </h3>
                    <div className='text-4xl font-bold text-[#a98b5d]'>
                      5% fee
                    </div>
                    <p className='text-neutral-300'>
                      For proven performers with track record. Lowest fees in
                      the industry for elite talent.
                    </p>
                    <ul className='space-y-3 text-left flex-1'>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Priority project access</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Dedicated account manager</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Equity opportunity matching</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Long-term retainer priority</span>
                      </li>
                    </ul>
                  </div>
                  <div className='pt-6 mt-auto'>
                    <a
                      href='mailto:talent@nartaq.com?subject=Elite%20Tier%20Application'
                      className='w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[#a98b5d]/60 border-2 border-[#dcd7ce]/50'
                    >
                      Start Earning More
                    </a>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale h-full'>
                <MagicCard className='p-8 h-full flex flex-col'>
                  <div className='flex-1 space-y-6'>
                    <div className='h-8 flex items-center'>
                      <div className='bg-[#dcd7ce] text-black px-3 py-1 rounded-full text-sm font-medium inline-block'>
                        Equity Focus
                      </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                      Equity Projects
                    </h3>
                    <div className='text-4xl font-bold text-[#a98b5d]'>
                      0% fee
                    </div>
                    <p className='text-neutral-300'>
                      Equity participation only. Share in the upside of
                      high-growth startups you help build.
                    </p>
                    <ul className='space-y-3 text-left flex-1'>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Equity-only compensation</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>High-growth startup access</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Co-founder level involvement</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Unicorn potential projects</span>
                      </li>
                    </ul>
                  </div>
                  <div className='pt-6 mt-auto'>
                    <a
                      href='mailto:talent@nartaq.com?subject=Equity%20Projects%20Interest'
                      className='w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] text-black font-bold rounded-lg hover:from-[#a98b5d] hover:to-[#dcd7ce] transition-all duration-300 shadow-lg hover:shadow-[#dcd7ce]/50'
                    >
                      Join Elite Network
                    </a>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-b from-black to-[#232428]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
              Ready to Work with{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Tomorrow&apos;s Unicorns?
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-8 max-w-2xl mx-auto reveal-up'>
              Join elite service providers who are already earning unicorn-level
              compensation working on the most exciting projects.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center reveal-scale'>
              <a
                href='mailto:talent@nartaq.com?subject=Join%20Elite%20Network%20Request'
                className='group relative px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] rounded-xl shadow-2xl hover:shadow-[#a98b5d]/60 transform hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-[#dcd7ce]/30'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] via-white to-[#dcd7ce] opacity-0 group-hover:opacity-30 transition-opacity duration-500'></div>
                <div className='absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000'></div>
                <div className='relative flex items-center space-x-3'>
                  <span className='tracking-wide'>Join Elite Network</span>
                  <span className='text-xl group-hover:translate-x-2 transition-transform duration-300'>
                    →
                  </span>
                </div>
              </a>
              <Link
                href='/service-providers-companies'
                className='px-10 py-6 rounded-2xl font-semibold border-2 border-[#5c5d63] text-[#dcd7ce] hover:border-[#a98b5d] hover:bg-gradient-to-r hover:from-[#a98b5d]/20 hover:to-[#dcd7ce]/20 hover:text-[#a98b5d] transition-all duration-500 shadow-lg hover:shadow-[#5c5d63]/40 backdrop-blur-sm'
              >
                Browse Projects
              </Link>
            </div>
            <p className='text-sm text-neutral-400 mt-6'>
              Application review within 48 hours for qualified candidates
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

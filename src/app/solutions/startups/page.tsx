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

export default function ForStartupsPage() {
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
                FRANCE-TUNISIA CORRIDOR
              </AnimatedGradientText>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold leading-tight reveal-up'>
              Get discovered by{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                elite investors
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
              Apply to be part of the inaugural cohort and get discovered by our curated investor network.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 reveal-scale'>
              <a
                href='mailto:startups@nartaq.com?subject=Apply%20for%20Access'
                className='group relative px-6 py-3 text-base font-bold text-black bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-lg shadow-xl hover:shadow-[#a98b5d]/50 transform hover:scale-105 transition-all duration-300 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative flex items-center space-x-2'>
                  <span>Apply for Access</span>
                  <span className='text-lg group-hover:translate-x-1 transition-transform duration-300'>
                    →
                  </span>
                </div>
                <div className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300'></div>
              </a>
              <Link
                href='/solutions/investors'
                className='px-6 py-3 rounded-lg font-semibold border-2 border-[#5c5d63] text-[#dcd7ce] hover:border-[#a98b5d] hover:bg-[#a98b5d]/10 hover:text-[#a98b5d] transition-all duration-300 shadow-lg hover:shadow-[#5c5d63]/30'
              >
                For Investors
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
                  <NumberTicker value={90} />
                </div>
                <p className='text-neutral-400'>Days to Funding vs 18 Months</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={87} />%
                </div>
                <p className='text-neutral-400'>Get Follow-on Rounds</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={94} />%
                </div>
                <p className='text-neutral-400'>From Unicorn Companies</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={80} />%
                </div>
                <p className='text-neutral-400'>Cost Savings vs Agencies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
                Get Ready for{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Smart Capital
                </span>
              </h2>
              <p className='text-xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
                Pre-vetted startups get matched with investors who understand their stage, sector, and corridor context.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Funding Pathway */}
              <div className='reveal-scale'>
                <MagicCard
                  className='p-8 h-full'
                  gradientColor='#a98b5d'
                  gradientOpacity={0.1}
                >
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-2xl'>
                        🚀
                      </div>
                      <h3 className='text-3xl font-bold text-[#a98b5d]'>
                        GET FUNDING
                      </h3>
                    </div>
                    <p className='text-lg text-neutral-300 leading-relaxed'>
                      Connect with smart investors who fund your
                      stage and sector. Skip cold emails and get warm
                      introductions to the right VCs.
                    </p>
                    <ul className='space-y-4'>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          AI finds investors who match your startup
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Get help with pitch decks and investor prep
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Fast-track to Series A/B with trusted
                          investors
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Connect with angel investors and big company partners
                        </span>
                      </li>
                    </ul>
                    <div className='pt-4'>
                      <a
                        href='mailto:startups@nartaq.com?subject=Funding%20Pathway%20Request'
                        className='inline-block px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-lg hover:from-[#dcd7ce] hover:to-[#a98b5d] transition-all duration-300 shadow-lg hover:shadow-[#a98b5d]/50'
                      >
                        Get Funded
                      </a>
                    </div>
                  </div>
                </MagicCard>
              </div>

              {/* Elite Service Providers */}
              <div className='reveal-scale'>
                <MagicCard
                  className='p-8 h-full'
                  gradientColor='#dcd7ce'
                  gradientOpacity={0.1}
                >
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-2xl'>
                        ⚡
                      </div>
                      <h3 className='text-3xl font-bold text-[#dcd7ce]'>
                        HIRE TOP TALENT
                      </h3>
                    </div>
                    <p className='text-lg text-neutral-300 leading-relaxed'>
                      Hire amazing talent who built billion-dollar
                      companies. Get tech founders and CTOs from Google
                      and Facebook at fair rates.
                    </p>
                    <ul className='space-y-4'>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#dcd7ce] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Growth experts who scaled startups to IPO
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#dcd7ce] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Designers who created award-winning products
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#dcd7ce] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Legal, marketing, and business experts
                        </span>
                      </li>
                      <li className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-[#dcd7ce] rounded-full mt-2'></div>
                        <span className='text-neutral-300'>
                          Fair rates for startups with tight budgets
                        </span>
                      </li>
                    </ul>
                    <div className='pt-4'>
                      <a
                        href='mailto:startups@nartaq.com?subject=Elite%20Talent%20Request'
                        className='inline-block px-6 py-3 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] text-black font-bold rounded-lg hover:from-[#a98b5d] hover:to-[#dcd7ce] transition-all duration-300 shadow-lg hover:shadow-[#dcd7ce]/50'
                      >
                        Scale Your Startup
                      </a>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 bg-gradient-to-b from-[#232428] to-black'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
                Why Startups Choose{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  NartaQ
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🎯</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Get Your Pitch Deck Right
                    </h3>
                    <p className='text-neutral-300'>
                      Turn your pitch into a funding winner. Our experts
                      help you tell your story in a way VCs love.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🔍</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Get Ready for Investors
                    </h3>
                    <p className='text-neutral-300'>
                      Get your startup ready for investors with complete
                      prep work that speeds up funding decisions.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>👥</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Build Your Tech Team
                    </h3>
                    <p className='text-neutral-300'>
                      Build your dream team with top talent who have scaled
                      companies from zero to billion-dollar worth.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🚀</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Launch Your Product Right
                    </h3>
                    <p className='text-neutral-300'>
                      Use winning launch strategies with experts who
                      launched products that reached millions of users.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>📈</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Find Product-Market Fit Fast
                    </h3>
                    <p className='text-neutral-300'>
                      Find product-market fit faster with growth experts who
                      understand what makes products stick and scale.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>⚙️</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Build Strong Tech Systems
                    </h3>
                    <p className='text-neutral-300'>
                      Build strong tech systems and operations with
                      engineers who handled billion-user platforms.
                    </p>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
                Trusted by Successful{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Founders
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-white font-bold'>
                        AS
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          Alex Smith
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          CEO, TechFlow AI
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;Raised $5M Series A in 90 days through
                      NartaQ&apos;s investor network. Their pitch deck
                      optimization was game-changing - VCs were fighting to get
                      in.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-white font-bold'>
                        PR
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          Priya Raj
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          Founder, HealthTech Solutions
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;Found my technical co-founder through NartaQ - a
                      former Google engineer who built our MVP in 6 weeks. Now
                      we&apos;re scaling to 100K users.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-black font-bold'>
                        MJ
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          Marcus Johnson
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          CEO, FinanceFlow
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;Hired our entire growth team through NartaQ - all
                      ex-Stripe and Airbnb. Scaled from $100K to $10M ARR in 18
                      months with their expertise.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>
        {/* Coming Soon Section */}
        <section className='py-20 bg-gradient-to-b from-black to-[#232428]'>
          <div className='max-w-6xl mx-auto px-6 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
              Coming Soon: Your{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Growth Platform
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-12 max-w-2xl mx-auto reveal-up'>
              Be among the first startups to access our platform.
              Get early access when we launch.
            </p>

            <div className='max-w-lg mx-auto'>
              <a
                href='mailto:startups@nartaq.com?subject=Early%20Access%20Request'
                className='w-full inline-block text-center px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl shadow-2xl hover:shadow-[#a98b5d]/50 transform hover:scale-105 transition-all duration-300'
              >
                Get Early Access
              </a>
              <p className='text-sm text-neutral-400 mt-4'>
                Join our waitlist to be notified when we launch
              </p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
              Ready to Build Your{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Unicorn?
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-8 max-w-2xl mx-auto reveal-up'>
              Join successful founders who are already scaling faster with our
              funding and talent platform.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center reveal-scale'>
              <a
                href='mailto:startups@nartaq.com?subject=Scale%20My%20Startup%20Request'
                className='group relative px-6 py-3 text-base font-bold text-black bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] rounded-lg shadow-xl hover:shadow-[#a98b5d]/60 transform hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-[#dcd7ce]/30'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] via-white to-[#dcd7ce] opacity-0 group-hover:opacity-30 transition-opacity duration-500'></div>
                <div className='absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000'></div>
                <div className='relative flex items-center space-x-2'>
                  <span className='tracking-wide'>Start Your Journey</span>
                  <span className='text-lg group-hover:translate-x-2 transition-transform duration-300'>
                    →
                  </span>
                </div>
              </a>
              <Link
                href='#value-propositions'
                className='px-10 py-6 rounded-2xl font-semibold border-2 border-[#5c5d63] text-[#dcd7ce] hover:border-[#a98b5d] hover:bg-gradient-to-r hover:from-[#a98b5d]/20 hover:to-[#dcd7ce]/20 hover:text-[#a98b5d] transition-all duration-500 shadow-lg hover:shadow-[#5c5d63]/40 backdrop-blur-sm'
              >
                Learn More
              </Link>
            </div>
            <p className='text-sm text-neutral-400 mt-6'>
              Free consultation and startup assessment available
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

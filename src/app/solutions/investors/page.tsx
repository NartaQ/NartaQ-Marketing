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

export default function ForInvestorsPage() {
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
              Source, Vet & Invest{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Together
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
              An invitation-only network where elite investors co-source and vet exceptional Tunisian tech startups through shared intelligence.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 reveal-scale'>
              <a
                href='mailto:invest@nartaq.com?subject=Request%20Investor%20Deck'
                className='group relative px-10 py-5 text-lg font-bold text-black bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-xl shadow-2xl hover:shadow-[#a98b5d]/50 transform hover:scale-105 transition-all duration-300 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative flex items-center space-x-3'>
                  <span>Request Investor Deck</span>
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
                  <NumberTicker value={87} />%
                </div>
                <p className='text-neutral-400'>Time Saved on Deal Finding</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={15} />x
                </div>
                <p className='text-neutral-400'>Higher ROI Potential</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={24} />h
                </div>
                <p className='text-neutral-400'>Faster Due Diligence</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={92} />%
                </div>
                <p className='text-neutral-400'>Investor Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id='how-it-works' className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
                A Smarter Way to{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Source & Vet Deals
                </span>
              </h2>
              <p className='text-xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
                Community-owned platform to de-risk investing in the Tunisia–France corridor through collective intelligence.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='reveal-scale'>
                <MagicCard
                  className='p-8 h-full'
                  gradientColor='#a98b5d'
                  gradientOpacity={0.1}
                >
                  <div className='space-y-6'>
                    <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-2xl font-bold text-black'>
                      1
                    </div>
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                      Source Collectively
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      Leverage our network&apos;s reach. Contributors are rewarded for surfacing high-potential deals that match your thesis.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>
                        Quality Sourcing
                      </span>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>
                        Aligned Incentives
                      </span>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>
                        Signal Over Noise
                      </span>
                    </div>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard
                  className='p-8 h-full'
                  gradientColor='#5c5d63'
                  gradientOpacity={0.1}
                >
                  <div className='space-y-6'>
                    <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-2xl font-bold text-white'>
                      2
                    </div>
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                      Vet with AI & Expertise
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      AI pre-filters for thesis fit, then expert network provides structured diligence with standardized outputs.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>
                        Faster Qualification
                      </span>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>
                        Expert Validation
                      </span>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>
                        Comparable Frames
                      </span>
                    </div>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard
                  className='p-8 h-full'
                  gradientColor='#dcd7ce'
                  gradientOpacity={0.1}
                >
                  <div className='space-y-6'>
                    <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-2xl font-bold text-black'>
                      3
                    </div>
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                      On-Chain Verification
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      Key metrics and milestone proofs are immutably attested to reduce diligence redundancy and increase confidence.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>
                        Tamper-Evident
                      </span>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>
                        Reduced Redundancy
                      </span>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>
                        Higher Confidence
                      </span>
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
                Why Top-Tier Investors Trust{' '}
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
                      Aligned Incentives
                    </h3>
                    <p className='text-neutral-300'>
                      Rewards tied to quality contributions—not raw volume. Contributors share value creation as the ecosystem grows.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>⚡</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Collective Intelligence
                    </h3>
                    <p className='text-neutral-300'>
                      Pattern recognition improves as the network scales. Harness shared expertise across the corridor.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🔍</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Transparent Governance
                    </h3>
                    <p className='text-neutral-300'>
                      Clear, auditable decision trails for curation and platform evolution through community processes.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🤝</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Durable Trust Layer
                    </h3>
                    <p className='text-neutral-300'>
                      Neutral coordination and reputation signals reduce friction across the ecosystem.
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
                Trusted by Leading{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Investors
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-white font-bold'>
                        JD
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          Jean Dupont
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          Partner, TechVentures Paris
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;NartaQ helped us discover three unicorns before
                      they became billion-dollar companies. Our portfolio ROI
                      increased by 340% in just 18 months.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-white font-bold'>
                        AB
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          Ahmed Ben Ali
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          Managing Director, MENA Growth Fund
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;The platform&apos;s AI identified market
                      opportunities we completely missed. We invested early in
                      what became a $2B exit. NartaQ pays for itself 1000x
                      over.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-black font-bold'>
                        SM
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>
                          Sarah Martin
                        </h4>
                        <p className='text-sm text-neutral-400'>
                          Principal, Innovation Capital
                        </p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;We&apos;ve closed 5 deals in 6 months, all from
                      NartaQ&apos;s pipeline. The quality is unmatched - these
                      are the companies that will define the next decade.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className='py-20 bg-gradient-to-b from-black to-[#232428]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 reveal-up'>
              Join the Founding{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Cohort
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-12 max-w-2xl mx-auto reveal-up'>
              Gain exclusive access to a pre-vetted pipeline and help us shape the future of corridor investing.
            </p>

            <div className='max-w-lg mx-auto'>
              <a
                href='mailto:invest@nartaq.com?subject=Early%20Access%20Request'
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
              Ready to Upgrade Your{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Deal Flow?
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-8 max-w-2xl mx-auto reveal-up'>
              Join leading investors who are already using NartaQ to find better
              deals faster.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center reveal-scale'>
              <a
                href='mailto:invest@nartaq.com?subject=Investor%20Memo%20Request'
                className='group relative px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] rounded-xl shadow-2xl hover:shadow-[#a98b5d]/60 transform hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-[#dcd7ce]/30'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] via-white to-[#dcd7ce] opacity-0 group-hover:opacity-30 transition-opacity duration-500'></div>
                <div className='absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000'></div>
                <div className='relative flex items-center space-x-3'>
                  <span className='tracking-wide'>Get Exclusive Access</span>
                  <span className='text-xl group-hover:translate-x-2 transition-transform duration-300'>
                    →
                  </span>
                </div>
              </a>
              <Link
                href='/investors-startups'
                className='px-10 py-6 rounded-2xl font-semibold border-2 border-[#5c5d63] text-[#dcd7ce] hover:border-[#a98b5d] hover:bg-gradient-to-r hover:from-[#a98b5d]/20 hover:to-[#dcd7ce]/20 hover:text-[#a98b5d] transition-all duration-500 shadow-lg hover:shadow-[#5c5d63]/40 backdrop-blur-sm'
              >
                Learn More
              </Link>
            </div>
            <p className='text-sm text-neutral-400 mt-6'>
              NDA-protected investor memo available upon request
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

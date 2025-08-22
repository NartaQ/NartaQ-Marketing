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
                Exclusive Access to Tomorrow&apos;s Unicorns
              </AnimatedGradientText>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold leading-tight reveal-up'>
              Find the next{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Google, Tesla, Airbnb
              </span>{' '}
              before others do.
            </h1>
            <p className='text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
              Stop wasting time on bad pitches. Our AI finds only the 
              best startups that match what you want to invest in.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 reveal-scale'>
              <a
                href='mailto:invest@nartaq.com?subject=Investor%20Memo%20Request'
                className='group relative px-10 py-5 text-lg font-bold text-black bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-xl shadow-2xl hover:shadow-[#a98b5d]/50 transform hover:scale-105 transition-all duration-300 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative flex items-center space-x-3'>
                  <span>Get Investor Memo</span>
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
                Your Gateway to{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Billion-Dollar Companies
                </span>
              </h2>
              <p className='text-xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
                Join top investors who use our AI to find deals. Get access to 
                high-growth startups before they hit the market.
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
                      Set Your Investment Style
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      Tell us what you want: sectors, growth stage, 
                      deal size, and risk level. Our AI becomes your 
                      deal-finding assistant.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>
                        Unicorn Potential
                      </span>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>
                        Market Disruption
                      </span>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>
                        ROI Optimization
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
                      Smart Deal Finding
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      Our AI scans thousands of startups daily. It finds 
                      hidden gems with huge growth potential. Only the top 3% 
                      reach your inbox.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>
                        Predictive Analytics
                      </span>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>
                        Risk Assessment
                      </span>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>
                        Growth Forecasting
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
                      First Access
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      Get VIP access to tomorrow&apos;s market leaders before 
                      they become big names. Each deal comes with research, 
                      valuation insights, and direct founder contact.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>
                        Early Bird Access
                      </span>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>
                        Premium Deal Flow
                      </span>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>
                        Instant Connect
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
                      Zero Time Wasted
                    </h3>
                    <p className='text-neutral-300'>
                      No more looking through hundreds of bad pitches. Our 
                      AI filters out 97% of deals. You only get the best ones 
                      that fit what you want.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>⚡</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Maximize Your Returns
                    </h3>
                    <p className='text-neutral-300'>
                      Find startups with 10x-100x growth potential before they 
                      hit the news. Our smart system finds the next unicorns 
                      while they&apos;re still cheap.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🔍</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      Market Insights
                    </h3>
                    <p className='text-neutral-300'>
                      Get market insights, competitor analysis, and 
                      growth predictions that others don&apos;t have. Make 
                      smart decisions with better data.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🤝</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>
                      VIP Access & Top Deals
                    </h3>
                    <p className='text-neutral-300'>
                      Skip the line and get first pick on the hottest deals.
                      Direct access to founders, better terms, and special 
                      rounds for our top investors.
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
              Investment That{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Pays for Itself
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-12 max-w-2xl mx-auto reveal-up'>
              Pay only for billion-dollar opportunities. One successful deal
              covers years of platform access. No hidden fees, no long-term
              commitments.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div className='reveal-scale h-full'>
                <MagicCard className='p-8 h-full flex flex-col'>
                  <div className='flex-1 space-y-6'>
                    <div className='h-8 flex items-center'>
                      <div className='bg-[#5c5d63] text-[#dcd7ce] px-3 py-1 rounded-full text-sm font-medium inline-block'>
                        Pay Per Deal
                      </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>
                      Deal Hunter
                    </h3>
                    <div className='text-4xl font-bold text-[#a98b5d]'>
                      $2,500/deal
                    </div>
                    <p className='text-neutral-300'>
                      Pay only for unicorn-potential startups that match your
                      criteria. Average deal value: $50M+
                    </p>
                    <ul className='space-y-3 text-left flex-1'>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Pre-screened unicorn potential</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Exclusive deal access</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>ROI prediction analytics</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Direct founder connections</span>
                      </li>
                    </ul>
                  </div>
                  <div className='pt-6 mt-auto'>
                    <a
                      href='mailto:invest@nartaq.com?subject=Deal%20Hunter%20Package%20Inquiry'
                      className='w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-lg hover:from-[#dcd7ce] hover:to-[#a98b5d] transition-all duration-300 shadow-lg hover:shadow-[#a98b5d]/50'
                    >
                      Start Hunting →
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
                      Unicorn Hunter VIP
                    </h3>
                    <div className='text-4xl font-bold text-[#a98b5d]'>
                      $25K/month
                    </div>
                    <p className='text-neutral-300'>
                      Unlimited access to billion-dollar opportunities.
                      Dedicated deal sourcing and first-look rights on all
                      premium deals.
                    </p>
                    <ul className='space-y-3 text-left flex-1'>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Dedicated relationship manager</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Custom screening criteria</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Advanced analytics dashboard</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Priority deal flow</span>
                      </li>
                    </ul>
                  </div>
                  <div className='pt-6 mt-auto'>
                    <a
                      href='mailto:invest@nartaq.com?subject=VIP%20Unicorn%20Hunter%20Package%20Inquiry'
                      className='w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[#a98b5d]/60 border-2 border-[#dcd7ce]/50'
                    >
                      Join VIP Program
                    </a>
                  </div>
                </MagicCard>
              </div>
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

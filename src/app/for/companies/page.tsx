'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MagicCard } from '@/components/magicui/magic-card'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { Spotlight } from '@/components/ui/spotlight'
import { Particles } from '@/components/magicui/particles'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function ForCompaniesPage() {
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
        timeline.to(revealFadeElements, {
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.4')
      }

      // Animate reveal-scale elements
      const revealScaleElements = element.querySelectorAll('.reveal-scale')
      if (revealScaleElements.length > 0) {
        timeline.to(revealScaleElements, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.4')
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={pageRef} className='flex min-h-screen flex-col bg-black text-white'>
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
                Access Elite Talent in 48 Hours
              </AnimatedGradientText>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold leading-tight reveal-up'>
              Hire the{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                top 1% talent
              </span>
              {' '}that built unicorns.
            </h1>
            <p className='text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
              Stop wasting months on mediocre hires. Our AI-powered platform connects you with pre-vetted elite freelancers and service providers who have built billion-dollar companies.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 reveal-scale'>
              <a
                href='mailto:hire@nartaq.com?subject=Find%20Top%20Talent%20Request'
                className='group relative px-10 py-5 text-lg font-bold text-black bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-xl shadow-2xl hover:shadow-[#a98b5d]/50 transform hover:scale-105 transition-all duration-300 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative flex items-center space-x-3'>
                  <span>Find Top Talent</span>
                  <span className='text-xl group-hover:translate-x-1 transition-transform duration-300'>→</span>
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
                  <NumberTicker value={48} />h
                </div>
                <p className='text-neutral-400'>Average Time-to-Hire</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={96} />%
                </div>
                <p className='text-neutral-400'>Project Success Rate</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={73} />%
                </div>
                <p className='text-neutral-400'>Cost Savings vs Agencies</p>
              </div>
              <div className='space-y-2 reveal-scale'>
                <div className='text-4xl md:text-5xl font-bold text-[#a98b5d]'>
                  <NumberTicker value={94} />%
                </div>
                <p className='text-neutral-400'>Client Satisfaction Rate</p>
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
                  Elite Talent
                </span>
              </h2>
              <p className='text-xl text-neutral-300 max-w-3xl mx-auto reveal-up'>
                Join leading companies who are already building with our pre-vetted talent pool. Get access to developers, designers, and specialists who have built unicorn companies.
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
                      Define Your Dream Team
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      Tell us your project requirements, tech stack, timeline, and budget. Our AI matches you with talent who have built similar solutions at scale.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>Expert Matching</span>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>Skill Verification</span>
                      <span className='px-3 py-1 bg-[#a98b5d]/20 text-[#a98b5d] rounded-full text-sm'>Culture Fit</span>
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
                      Meet Pre-Vetted Experts
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      Interview hand-picked candidates who have passed our rigorous screening process. Each talent has a proven track record of delivering high-impact projects.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>Technical Assessment</span>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>Portfolio Review</span>
                      <span className='px-3 py-1 bg-[#5c5d63]/20 text-[#5c5d63] rounded-full text-sm'>Reference Checks</span>
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
                      Secure Milestone Delivery
                    </h3>
                    <p className='text-neutral-300 leading-relaxed'>
                      Work with confidence using our escrow-style milestone payments. Release funds only when deliverables meet your acceptance criteria. Optional equity compensation available.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>Escrow Protection</span>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>Milestone Tracking</span>
                      <span className='px-3 py-1 bg-[#dcd7ce]/20 text-[#dcd7ce] rounded-full text-sm'>Hybrid Payments</span>
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
                Why Leading Companies Choose{' '}
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  NartaQ
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>⚡</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>Lightning-Fast Hiring</h3>
                    <p className='text-neutral-300'>
                      Skip months of recruiting. Our pre-vetted talent pool means you can start working with elite developers, designers, and specialists within 48 hours of your request.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🎯</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>Proven Track Records</h3>
                    <p className='text-neutral-300'>
                      Every talent in our network has built products for unicorn companies. No junior developers or unproven freelancers - only battle-tested professionals who deliver results.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>🛡️</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>Risk-Free Collaboration</h3>
                    <p className='text-neutral-300'>
                      Our escrow-style milestone payments protect your investment. Pay only when deliverables meet your acceptance criteria. Full refund guarantee if expectations aren&apos;t met.
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-4'>
                    <div className='text-4xl'>💰</div>
                    <h3 className='text-2xl font-semibold text-[#a98b5d]'>Cost-Effective Excellence</h3>
                    <p className='text-neutral-300'>
                      Save 60-80% compared to traditional agencies while getting higher quality work. Flexible compensation options including cash, equity, and hybrid arrangements.
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
                  Companies
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#8a7249] flex items-center justify-center text-white font-bold'>
                        MR
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>Maria Rodriguez</h4>
                        <p className='text-sm text-neutral-400'>CTO, TechFlow Solutions</p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;We hired a full-stack team through NartaQ and launched our MVP in 6 weeks. The quality was exceptional - these developers had experience from Google and Stripe.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#5c5d63] to-[#3e3f44] flex items-center justify-center text-white font-bold'>
                        DK
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>David Kim</h4>
                        <p className='text-sm text-neutral-400'>Founder, FinanceAI</p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;The escrow system gave us complete confidence. We paid in milestones and got exactly what we needed. Saved us $200K compared to our previous agency.&rdquo;
                    </p>
                  </div>
                </MagicCard>
              </div>

              <div className='reveal-scale'>
                <MagicCard className='p-8'>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#dcd7ce] to-[#b8b3a8] flex items-center justify-center text-black font-bold'>
                        LJ
                      </div>
                      <div>
                        <h4 className='font-semibold text-[#dcd7ce]'>Lisa Johnson</h4>
                        <p className='text-sm text-neutral-400'>VP Engineering, ScaleUp Inc</p>
                      </div>
                    </div>
                    <p className='text-neutral-300 italic'>
                      &ldquo;Found our lead architect in 24 hours. He had built similar systems at Uber and knew exactly what we needed. Project delivered on time and under budget.&rdquo;
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
              Transparent{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Pricing
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-12 max-w-2xl mx-auto reveal-up'>
              Pay only for successful hires. No hidden fees, no long-term commitments. Get elite talent at a fraction of agency costs.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div className='reveal-scale h-full'>
                <MagicCard className='p-8 h-full flex flex-col'>
                  <div className='flex-1 space-y-6'>
                    <div className='h-8 flex items-center'>
                      <div className='bg-[#5c5d63] text-[#dcd7ce] px-3 py-1 rounded-full text-sm font-medium inline-block'>
                        Per Project
                      </div>
                    </div>
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>Project-Based Hiring</h3>
                    <div className='text-4xl font-bold text-[#a98b5d]'>
                      15% fee
                    </div>
                    <p className='text-neutral-300'>
                      One-time fee on successful project completion. Perfect for specific deliverables and short-term engagements.
                    </p>
                    <ul className='space-y-3 text-left flex-1'>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Pre-vetted talent matching</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Escrow milestone protection</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Quality guarantee</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Direct talent communication</span>
                      </li>
                    </ul>
                  </div>
                  <div className='pt-6 mt-auto'>
                    <a
                      href='mailto:hire@nartaq.com?subject=Project%20Based%20Hiring%20Inquiry'
                      className='w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-lg hover:from-[#dcd7ce] hover:to-[#a98b5d] transition-all duration-300 shadow-lg hover:shadow-[#a98b5d]/50'
                    >
                      Start Hiring
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
                    <h3 className='text-2xl font-semibold text-[#dcd7ce]'>Unlimited Access</h3>
                    <div className='text-4xl font-bold text-[#a98b5d]'>
                      $5K/month
                    </div>
                    <p className='text-neutral-300'>
                      Unlimited access to our talent network. Perfect for growing companies with ongoing hiring needs.
                    </p>
                    <ul className='space-y-3 text-left flex-1'>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Unlimited talent searches</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Dedicated account manager</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Priority talent access</span>
                      </li>
                      <li className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-[#a98b5d] rounded-full'></div>
                        <span>Custom team building</span>
                      </li>
                    </ul>
                  </div>
                  <div className='pt-6 mt-auto'>
                    <a
                      href='mailto:hire@nartaq.com?subject=Unlimited%20Access%20Plan%20Inquiry'
                      className='w-full inline-block text-center px-6 py-3 bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[#a98b5d]/60 border-2 border-[#dcd7ce]/50'
                    >
                      Get Unlimited Access
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
              Ready to Build with{' '}
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Elite Talent?
              </span>
            </h2>
            <p className='text-xl text-neutral-300 mb-8 max-w-2xl mx-auto reveal-up'>
              Join leading companies who are already building faster and better with our pre-vetted talent network.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center reveal-scale'>
              <a
                href='mailto:hire@nartaq.com?subject=Find%20Top%20Talent%20Request'
                className='group relative px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] rounded-xl shadow-2xl hover:shadow-[#a98b5d]/60 transform hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-[#dcd7ce]/30'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] via-white to-[#dcd7ce] opacity-0 group-hover:opacity-30 transition-opacity duration-500'></div>
                <div className='absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000'></div>
                <div className='relative flex items-center space-x-3'>
                  <span className='tracking-wide'>Start Hiring Today</span>
                  <span className='text-xl group-hover:translate-x-2 transition-transform duration-300'>→</span>
                </div>
              </a>
              <Link
                href='/companies-providers'
                className='px-10 py-6 rounded-2xl font-semibold border-2 border-[#5c5d63] text-[#dcd7ce] hover:border-[#a98b5d] hover:bg-gradient-to-r hover:from-[#a98b5d]/20 hover:to-[#dcd7ce]/20 hover:text-[#a98b5d] transition-all duration-500 shadow-lg hover:shadow-[#5c5d63]/40 backdrop-blur-sm'
              >
                Browse Talent
              </Link>
            </div>
            <p className='text-sm text-neutral-400 mt-6'>
              Free consultation and talent matching available
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
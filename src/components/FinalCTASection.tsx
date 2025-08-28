'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Users, Target, Settings, Sparkles } from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.cta-element', { opacity: 0, y: 30 })
      gsap.set('.cta-button', { opacity: 0, scale: 0.9 })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        })
        .to('.cta-element', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        })
        .to(
          '.cta-button',
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative py-15 bg-gradient-to-b from-black via-[#232428] to-black overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 luxury-texture opacity-40' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#a98b5d]/5 rounded-full blur-3xl' />

      {/* Floating Orbs */}
      <div className='absolute top-20 left-20 w-4 h-4 rounded-full bg-[#a98b5d]/30 blur-sm floating' />
      <div className='absolute top-40 right-32 w-6 h-6 rounded-full bg-[#dcd7ce]/20 blur-sm floating' />
      <div className='absolute bottom-32 left-1/3 w-8 h-8 rounded-full bg-[#a98b5d]/20 blur-sm floating' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Main CTA Content */}
        <div className='text-center space-y-12 max-w-5xl mx-auto'>
          {/* Header */}
          <div className='cta-element space-y-6'>
            <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full premium-glass border border-[#a98b5d]/30'>
              <Sparkles className='w-5 h-5 text-[#a98b5d]' />
              <span className='text-[#a98b5d] font-medium'>
                WHERE GROWTH PARTNERSHIPS BEGIN
              </span>
            </div>

            <h2 className='text-5xl md:text-7xl font-light text-[#dcd7ce] leading-tight'>
              Ready to{' '}
              <span className='text-[#a98b5d] font-medium'>Transform</span>
              <br className='hidden md:block' />
              Your Growth Journey?
            </h2>

            <p className='text-xl md:text-2xl text-[#5c5d63] max-w-3xl mx-auto leading-relaxed'>
              Join{' '}
              <span className='text-[#a98b5d] font-semibold'>startups</span>,
              <span className='text-[#a98b5d] font-semibold'> investors</span>,
              and
              <span className='text-[#a98b5d] font-semibold'>
                {' '}
                service providers
              </span>{' '}
              who build the future together
            </p>
          </div>

          {/* Triple CTA Buttons */}
          <div className='cta-element grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {/* For Startups */}
            <Link
              href='/for-founders'
              className='cta-button group premium-glass elite-hover rounded-2xl p-8 border border-[#a98b5d]/20 text-center space-y-4 transition-all duration-500 hover:border-[#a98b5d]/50'
            >
              <div className='w-16 h-16 rounded-2xl bg-[#a98b5d]/10 flex items-center justify-center mx-auto group-hover:bg-[#a98b5d]/20 transition-colors duration-300'>
                <Users className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <div className='space-y-2'>
                <h3 className='text-xl font-semibold text-[#dcd7ce] group-hover:text-[#a98b5d] transition-colors duration-300'>
                  For Startups
                </h3>
                <p className='text-[#5c5d63] text-sm'>
                  Get free valuation and connect with investors
                </p>
              </div>
              <div className='flex items-center justify-center gap-2 text-[#a98b5d] font-medium group-hover:gap-3 transition-all duration-300'>
                <span>Get Free Valuation</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
              </div>
            </Link>

            {/* For Investors */}
            <Link
              href='/for-investors'
              className='cta-button group premium-glass elite-hover rounded-2xl p-8 border border-[#a98b5d]/20 text-center space-y-4 transition-all duration-500 hover:border-[#a98b5d]/50 md:scale-105'
            >
              <div className='w-16 h-16 rounded-2xl bg-[#a98b5d]/10 flex items-center justify-center mx-auto group-hover:bg-[#a98b5d]/20 transition-colors duration-300'>
                <Target className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <div className='space-y-2'>
                <h3 className='text-xl font-semibold text-[#dcd7ce] group-hover:text-[#a98b5d] transition-colors duration-300'>
                  For Investors
                </h3>
                <p className='text-[#5c5d63] text-sm'>
                  Access curated deal flow that matches your thesis
                </p>
              </div>
              <div className='flex items-center justify-center gap-2 text-[#a98b5d] font-medium group-hover:gap-3 transition-all duration-300'>
                <span>Browse Deals</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
              </div>

              {/* Popular Badge */}
              <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
                <span className='bg-[#a98b5d] text-black px-3 py-1 rounded-full text-xs font-semibold'>
                  Most Popular
                </span>
              </div>
            </Link>

            {/* For Service Providers */}
            <Link
              href='/faq'
              className='cta-button group premium-glass elite-hover rounded-2xl p-8 border border-[#a98b5d]/20 text-center space-y-4 transition-all duration-500 hover:border-[#a98b5d]/50'
            >
              <div className='w-16 h-16 rounded-2xl bg-[#a98b5d]/10 flex items-center justify-center mx-auto group-hover:bg-[#a98b5d]/20 transition-colors duration-300'>
                <Settings className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <div className='space-y-2'>
                <h3 className='text-xl font-semibold text-[#dcd7ce] group-hover:text-[#a98b5d] transition-colors duration-300'>
                  For Providers
                </h3>
                <p className='text-[#5c5d63] text-sm'>
                  List your services and find clients
                </p>
              </div>
              <div className='flex items-center justify-center gap-2 text-[#a98b5d] font-medium group-hover:gap-3 transition-all duration-300'>
                <span>List Your Services</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
              </div>
            </Link>
          </div>

          {/* Secondary CTA */}
          <div className='cta-element space-y-6'>
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto' />

            <div className='space-y-4'>
              <p className='text-[#5c5d63]'>
                Ready to join? Get exclusive insights first.
              </p>
              <a
                href='mailto:contact@nartaq.com?subject=Investor%20Memo%20Request'
                className='inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-[#5c5d63]/30 text-[#5c5d63] font-medium hover:border-[#a98b5d]/50 hover:text-[#a98b5d] transition-all duration-300'
              >
                <span>Request Access (NDA)</span>
                <ArrowRight className='w-4 h-4' />
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className='cta-element grid grid-cols-3 gap-8 pt-8 border-t border-[#5c5d63]/20'>
            <div className='text-center space-y-1'>
              <div className='text-lg font-bold text-[#a98b5d]'>Secure</div>
              <div className='text-xs text-[#5c5d63]'>Platform</div>
            </div>
            <div className='text-center space-y-1'>
              <div className='text-lg font-bold text-[#a98b5d]'>Trusted</div>
              <div className='text-xs text-[#5c5d63]'>Network</div>
            </div>
            <div className='text-center space-y-1'>
              <div className='text-lg font-bold text-[#a98b5d]'>Global</div>
              <div className='text-xs text-[#5c5d63]'>Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

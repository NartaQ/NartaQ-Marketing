'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Spotlight } from './ui/spotlight'
import { ContainerScroll } from './ui/container-scroll-animation'
import { Globe, Shield, Gem } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Mouse tracking for premium effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Initial reveal animations - exact pattern from working code
    gsap.set('.reveal-up', { opacity: 0, y: '100%' })

    // Animate main content elements on load
    gsap.timeline({ delay: 1 }).to('.reveal-up', {
      opacity: 1,
      y: '0%',
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    })

    // Dashboard 3D transform - exact pattern from working code
    if (dashboardRef.current) {
      gsap.set(dashboardRef.current, {
        perspective: 1200,
        scale: 0.8,
        rotateX: '70deg',
        translateY: 12,
      })

      // Animate dashboard on scroll - exact pattern from working code
      gsap.to(dashboardRef.current, {
        scale: 1,
        translateY: 0,
        rotateX: '0deg',
        scrollTrigger: {
          trigger: heroRef.current,
          start: window.innerWidth > 1024 ? 'top 95%' : 'top 70%',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
    }

    // Reveal animations for sections - exact pattern from working code
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

      timeline.to(element.querySelectorAll('.reveal-up'), {
        opacity: 1,
        duration: 0.8,
        y: '0%',
        stagger: 0.2,
      })
    })

    // Floating elements animation
    gsap.to('.floating-element', {
      y: '-20px',
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div
      className='relative flex flex-col overflow-hidden bg-black'
      ref={heroRef}
    >
      {/* Premium Background Layers */}
      <div className='absolute inset-0 overflow-hidden'>
        <Spotlight />
        {/* Animated gradient overlay */}
        <div
          className='absolute inset-0 opacity-30 transition-all duration-700 ease-out'
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(169, 139, 93, 0.1), transparent 40%)`,
          }}
        />
        {/* Premium texture overlay */}
        <div className='absolute inset-0 luxury-texture opacity-50' />
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <div className='text-center space-y-6 '>
              {/* Exclusive Member Badge */}
              <div className='flex justify-center mb-4'>
                <div className='premium-glass px-6 py-2 rounded-full border border-[#a98b5d]/20'>
                  <span className='text-sm font-medium text-[#a98b5d] member-badge'>
                    EXCLUSIVE NETWORK
                  </span>
                </div>
              </div>

              <div className='flex justify-center mb-8'>
                <div className=' rounded-2xl p-1'>
                  <Image
                    src='/logo/main-tr-text.svg'
                    alt='Nartaq Logo'
                    width={450}
                    height={120}
                    className='h-24 md:h-28 w-auto premium-glow'
                  />
                </div>
              </div>

              <p
                className='text-xl md:text-2xl font-light max-w-2xl mx-auto'
                style={{ color: '#dcd7ceff' }}
              >
                Built for the{' '}
                <span className='font-medium text-[#a98b5d]'>
                  France & Tunisia
                </span>{' '}
                corridor.
              </p>

              <p
                className='text-lg md:text-xl max-w-3xl mx-auto opacity-80'
                style={{ color: '#5c5d63ff' }}
              >
                A trust‑driven matching layer for discerning professionals.
              </p>
            </div>
          </>
        }
      >
        <div
          className='mx-auto rounded-3xl h-full w-full max-w-6xl relative overflow-hidden premium-glass premium-glow'
          ref={dashboardRef}
        >
          {/* Enhanced Background Pattern */}
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[#a98b5d]/5 to-[#a98b5d]/10'></div>
            <div className='absolute inset-0 luxury-texture'></div>
            {/* Floating orbs */}
            <div className='floating-element absolute top-12 right-16 w-8 h-8 rounded-full bg-[#a98b5d]/20 blur-sm'></div>
            <div className='floating-element absolute top-32 left-20 w-6 h-6 rounded-full bg-[#dcd7ce]/15 blur-sm'></div>
            <div className='floating-element absolute bottom-24 right-32 w-10 h-10 rounded-full bg-[#a98b5d]/15 blur-sm'></div>
          </div>

          {/* Main Content */}
          <section className='relative z-10 flex flex-col items-center justify-center h-full min-h-[600px] p-8 md:p-20'>
            {/* Central Hook */}
            <div className='text-center space-y-10 max-w-5xl'>
              <div className='space-y-6'>
                <h1
                  className='text-3xl md:text-6xl font-light reveal-up'
                  style={{ color: '#dcd7ceff' }}
                >
                  Where{' '}
                  <span className='font-medium text-[#a98b5d] '>
                    serious capital
                  </span>{' '}
                  meets
                  <br className='hidden md:block' />
                  <span className='font-medium text-[#a98b5d] '>
                    proven execution
                  </span>
                </h1>
                <div className='w-24 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto reveal-up'></div>
                <p
                  className='text-xl md:text-2xl font-light leading-relaxed opacity-90 reveal-up'
                  style={{ color: '#a98b5dcc' }}
                >
                  The trust-driven platform connecting ambitious startups
                  <br className='hidden md:block' />
                  with smart investors and expert providers who deliver.
                </p>
                <p
                  className='text-base md:text-lg font-light opacity-75 reveal-up'
                  style={{ color: '#dcd7ce99' }}
                >
                  No more wasted time. No more broken promises. Just results.
                </p>
              </div>

              {/* Revolutionary Hook Cards - The Connection Crisis We Solve */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 reveal-up'>
                {/* Ambitious Startups Card */}
                <div className='premium-glass elite-hover rounded-2xl p-6 text-center space-y-4 floating-element group'>
                  <div className='w-14 h-14 rounded-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Globe className='w-7 h-7 text-[#a98b5d] group-hover:text-[#dcd7ce] transition-colors' />
                  </div>
                  <h3 className='font-bold text-[#dcd7ce] text-xl'>
                    Ambitious Startups
                  </h3>
                  <div className='space-y-2'>
                    <p
                      className='text-sm font-bold leading-tight tracking-wide'
                      style={{ color: '#a98b5d' }}
                    >
                      "Great ideas die in inbox silence"
                    </p>
                    <p
                      className='text-xs font-medium opacity-80'
                      style={{ color: '#dcd7ce' }}
                    >
                      500+ investor emails sent. 12 replies. 0 meetings.
                    </p>
                  </div>
                  <div className='w-16 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>
                  <div className='space-y-2 text-left'>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span>{' '}
                      Connect with investors actively seeking your sector
                    </p>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span> Access
                      expert providers who take equity stakes
                    </p>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span> Prove
                      execution ability through verified milestones
                    </p>
                  </div>
                </div>

                {/* Expert Service Providers Card */}
                <div
                  className='premium-glass elite-hover rounded-2xl p-6 text-center space-y-4 floating-element group'
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className='w-14 h-14 rounded-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Shield className='w-7 h-7 text-[#a98b5d] group-hover:text-[#dcd7ce] transition-colors' />
                  </div>
                  <h3 className='font-bold text-[#dcd7ce] text-xl'>
                    Expert Providers
                  </h3>
                  <div className='space-y-2'>
                    <p
                      className='text-sm font-bold leading-tight tracking-wide'
                      style={{ color: '#a98b5d' }}
                    >
                      "Brilliant work, broken promises"
                    </p>
                    <p
                      className='text-xs font-medium opacity-80'
                      style={{ color: '#dcd7ce' }}
                    >
                      Deliver excellence. Chase payments for months.
                    </p>
                  </div>
                  <div className='w-16 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>
                  <div className='space-y-2 text-left'>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span> Work
                      only with funded, verified startups
                    </p>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span> Secure
                      payments in escrow before starting
                    </p>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span> Build
                      equity wealth in client success stories
                    </p>
                  </div>
                </div>

                {/* Smart Investors Card */}
                <div
                  className='premium-glass elite-hover rounded-2xl p-6 text-center space-y-4 floating-element group'
                  style={{ animationDelay: '1s' }}
                >
                  <div className='w-14 h-14 rounded-full bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Gem className='w-7 h-7 text-[#a98b5d] group-hover:text-[#dcd7ce] transition-colors' />
                  </div>
                  <h3 className='font-bold text-[#dcd7ce] text-xl'>
                    Smart Investors
                  </h3>
                  <div className='space-y-2'>
                    <p
                      className='text-sm font-bold leading-tight tracking-wide'
                      style={{ color: '#a98b5d' }}
                    >
                      "Perfect pitch, failed execution"
                    </p>
                    <p
                      className='text-xs font-medium opacity-80'
                      style={{ color: '#dcd7ce' }}
                    >
                      Beautiful decks hide operational disasters.
                    </p>
                  </div>
                  <div className='w-16 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>
                  <div className='space-y-2 text-left'>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span> Back
                      startups with proven delivery records
                    </p>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span>{' '}
                      Monitor real progress through milestone tracking
                    </p>
                    <p
                      className='text-xs font-medium leading-relaxed'
                      style={{ color: '#dcd7cebb' }}
                    >
                      <span className='text-[#a98b5d] font-bold'>→</span>{' '}
                      Co-invest with your trusted network partners
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className='flex flex-wrap justify-center gap-6 mt-12 reveal-up'>
                <div
                  className='flex items-center gap-2 text-xs'
                  style={{ color: '#a98b5d99' }}
                >
                  <span className='w-2 h-2 rounded-full bg-[#a98b5d] animate-pulse'></span>
                  <span>NDA-Protected Deals</span>
                </div>
                <div
                  className='flex items-center gap-2 text-xs'
                  style={{ color: '#a98b5d99' }}
                >
                  <span className='w-2 h-2 rounded-full bg-[#a98b5d] animate-pulse'></span>
                  <span>Escrow-Secured Payments</span>
                </div>
                <div
                  className='flex items-center gap-2 text-xs'
                  style={{ color: '#a98b5d99' }}
                >
                  <span className='w-2 h-2 rounded-full bg-[#a98b5d] animate-pulse'></span>
                  <span>Curated Network Only</span>
                </div>
              </div>

              {/* Premium Call to Action */}
              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 reveal-up'>
                <Link
                  href='/investors-startups'
                  className='group relative px-10 py-4 rounded-xl font-semibold text-black transition-all duration-500 elite-hover '
                  style={{ backgroundColor: '#a98b5d' }}
                >
                  <span className='relative z-10'>Startups & Investors</span>
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </Link>

                <Link
                  href='/companies-providers#bounties'
                  className='group px-10 py-4 rounded-xl font-semibold border-2 premium-glass elite-hover transition-all duration-500'
                  style={{ color: '#dcd7ce', borderColor: '#a98b5d40' }}
                >
                  <span>Startups & Providers</span>
                </Link>

                <a
                  href='mailto:contact@nartaq.com?subject=Investor%20Memo%20Request'
                  className='group px-8 py-4 rounded-xl font-medium border premium-glass elite-hover transition-all duration-500 text-sm'
                  style={{ color: '#a98b5d', borderColor: '#5c5d6350' }}
                >
                  <span className='flex items-center gap-2'>
                    <span>Request Access</span>
                    <span className='text-xs opacity-60'>(NDA)</span>
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </ContainerScroll>
    </div>
  )
}

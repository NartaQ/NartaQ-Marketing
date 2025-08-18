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
    gsap.timeline({ delay: 1 })
      .to('.reveal-up', {
        opacity: 1,
        y: '0%',
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
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
    <div className='relative flex flex-col overflow-hidden bg-black' ref={heroRef}>
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
                  A{' '}
                  <span className='font-medium text-[#a98b5d] '>
                    focused ecosystem
                  </span>{' '}
                  to turn
                  <br className='hidden md:block' />
                  funding intent into delivered outcomes
                </h1>
                <div className='w-24 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto reveal-up'></div>
                <p
                  className='text-xl md:text-2xl font-light leading-relaxed opacity-90 reveal-up'
                  style={{ color: '#a98b5dcc' }}
                >
                  Early access platform. Core mechanisms: curated matches,
                  milestone protections,
                  <br className='hidden md:block' />
                  and hybrid compensation via trusted partners.
                </p>
              </div>

              {/* Premium Trust/Value Bullets */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 reveal-up'>
                <div className='premium-glass elite-hover rounded-2xl p-6 text-center space-y-3'>
                  <div className='w-12 h-12 rounded-full bg-[#a98b5d]/10 flex items-center justify-center mx-auto mb-4'>
                    <Globe className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h3 className='font-medium text-[#dcd7ce]'>
                    Corridor‑Focused
                  </h3>
                  <p
                    className='text-sm opacity-75'
                    style={{ color: '#a98b5dcc' }}
                  >
                    France & Tunisia corridor
                    <br />
                    (global expansion planned)
                  </p>
                </div>

                <div className='premium-glass elite-hover rounded-2xl p-6 text-center space-y-3'>
                  <div className='w-12 h-12 rounded-full bg-[#a98b5d]/10 flex items-center justify-center mx-auto mb-4'>
                    <Shield className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h3 className='font-medium text-[#dcd7ce]'>
                    Protected Workflows
                  </h3>
                  <p
                    className='text-sm opacity-75'
                    style={{ color: '#a98b5dcc' }}
                  >
                    Escrow‑style milestones
                    <br />
                    and NDA‑gated processes
                  </p>
                </div>

                <div className='premium-glass elite-hover rounded-2xl p-6 text-center space-y-3'>
                  <div className='w-12 h-12 rounded-full bg-[#a98b5d]/10 flex items-center justify-center mx-auto mb-4'>
                    <Gem className='w-6 h-6 text-[#a98b5d]' />
                  </div>
                  <h3 className='font-medium text-[#dcd7ce]'>Hybrid Value</h3>
                  <p
                    className='text-sm opacity-75'
                    style={{ color: '#a98b5dcc' }}
                  >
                    Cash and equity/options
                    <br />
                    compensation models
                  </p>
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

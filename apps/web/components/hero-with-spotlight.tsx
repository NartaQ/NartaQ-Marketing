'use client'

import { Button } from '@investi/ui'
import { ArrowRight, Search, Users, DollarSign } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Spotlight } from '@/components/ui/spotlight'

export function HeroWithSpotlight() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline()

    // Initial hero animations
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )

    // Animate button children if they exist
    if (
      buttonsRef.current?.children &&
      buttonsRef.current.children.length > 0
    ) {
      tl.fromTo(
        Array.from(buttonsRef.current.children),
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.4'
      )
    }

    tl.fromTo(
      searchRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.2'
    )
  }, [])

  return (
    <section
      ref={heroRef}
      className='pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-orange-900/5'></div>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/3 via-transparent to-transparent'></div>

      <div className='max-w-7xl mx-auto text-center relative z-10'>
        <h1
          ref={titleRef}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-zinc-100 leading-[1.1]'
        >
          <span className='text-reveal'>Raise funds for your</span>{' '}
          <span className='text-gradient-hero'>startup</span>
          <br className='hidden sm:block' />
          <span className='sm:hidden'> </span>
          <span className='text-reveal'>from 6,034 investors</span>
        </h1>

        <p
          ref={subtitleRef}
          className='text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium'
        >
          Find investors, reach out, and get replies - for free
        </p>

        <div
          ref={buttonsRef}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'
        >
          <Button
            size='lg'
            className='magnetic text-lg px-8 py-6 hover:scale-105 transition-all duration-300 gradient-primary hover-primary text-white shadow-primary hover:shadow-xl font-medium'
          >
            Join for free
            <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
          </Button>
        </div>

        {/* Search Bar Demo */}
        <div ref={searchRef} className='max-w-4xl mx-auto'>
          <div className='bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 shadow-2xl'>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
              <div className='flex items-center gap-2 flex-1 flex-wrap justify-center md:justify-start'>
                <span className='text-sm text-zinc-400 font-medium'>
                  Geography
                </span>
                <div className='h-6 w-px bg-zinc-700'></div>
                <span className='text-sm text-zinc-400 font-medium'>Stage</span>
                <div className='h-6 w-px bg-zinc-700'></div>
                <span className='text-sm text-zinc-400 font-medium'>
                  Round size
                </span>
              </div>
              <Button className='gradient-primary hover-primary px-8 text-white hover:scale-105 transition-transform font-medium'>
                <Search className='mr-2 h-4 w-4' />
                Search 6,034 investors
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
          <div className='text-center animate-on-scroll group'>
            <div className='flex justify-center mb-4'>
              <div className='w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Users className='h-8 w-8 text-primary' />
              </div>
            </div>
            <div
              className='counter text-3xl sm:text-4xl font-semibold text-zinc-100 mb-2'
              data-target='22000'
            >
              0
            </div>
            <div className='text-zinc-400 font-medium'>
              founders raising with Investi
            </div>
          </div>

          <div className='text-center animate-on-scroll group'>
            <div className='flex justify-center mb-4'>
              <div className='w-16 h-16 bg-gradient-to-br from-success-500/20 to-success-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <DollarSign className='h-8 w-8 text-success' />
              </div>
            </div>
            <div
              className='counter text-3xl sm:text-4xl font-semibold text-zinc-100 mb-2'
              data-target='1'
            >
              0
            </div>
            <div className='text-zinc-400 font-medium'>
              billion+ raised with Investi
            </div>
          </div>

          <div className='text-center animate-on-scroll group'>
            <div className='flex justify-center mb-4'>
              <div className='w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Search className='h-8 w-8 text-secondary' />
              </div>
            </div>
            <div
              className='counter text-3xl sm:text-4xl font-semibold text-zinc-100 mb-2'
              data-target='6034'
            >
              0
            </div>
            <div className='text-zinc-400 font-medium'>active investors</div>
          </div>
        </div>
      </div>
    </section>
  )
}

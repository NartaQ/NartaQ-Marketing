'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Spotlight } from './ui/spotlight'
import { ContainerScroll } from './ui/container-scroll-animation'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial reveal animations
    gsap.set('.reveal-up', { opacity: 0, y: '100%' })

    // Dashboard 3D transform
    if (dashboardRef.current) {
      gsap.set(dashboardRef.current, {
        perspective: 1200,
        scale: 0.8,
        rotateX: '70deg',
        translateY: 12,
      })

      // Animate dashboard on scroll
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

      timeline.to(element.querySelectorAll('.reveal-up'), {
        opacity: 1,
        duration: 0.8,
        y: '0%',
        stagger: 0.2,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className='relative flex flex-col overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        <Spotlight />
      </div>
      <ContainerScroll
        titleComponent={
          <>
            <div className='text-center space-y-4'>
              <div className='flex justify-center mb-6'>
                <Image
                  src='/logo/main-tr-text.svg'
                  alt='Nartaq Logo'
                  width={400}
                  height={100}
                  className='h-20 md:h-24 w-auto'
                />
              </div>
              <p
                className='text-lg md:text-xl font-medium max-w-2xl mx-auto'
                style={{ color: '#dcd7ceff' }}
              >
                Where Vision Meets Capital
              </p>
              <p
                className='text-base md:text-lg max-w-3xl mx-auto'
                style={{ color: '#5c5d63ff' }}
              >
                Connect innovative startups with forward-thinking investors.
                Build the future, one partnership at a time.
              </p>
            </div>
          </>
        }
      >
        <div
          className='mx-auto rounded-2xl h-full w-full max-w-6xl relative overflow-hidden'
          style={{ backgroundColor: '#232428ff' }}
        >
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-[#a98b5dff]'></div>
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #a98b5dff 1px, transparent 1px), radial-gradient(circle at 75% 75%, #5c5d63ff 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            ></div>
          </div>

          {/* Main Content */}
          <div className='relative z-10 flex flex-col items-center justify-center h-full min-h-[500px] p-8 md:p-16'>
            {/* Central Hook */}
            <div className='text-center space-y-8 max-w-4xl'>
              <div className='space-y-4'>
                <h2
                  className='text-3xl md:text-5xl font-bold'
                  style={{ color: '#dcd7ceff' }}
                >
                  From Idea to IPO
                </h2>
                <p
                  className='text-xl md:text-2xl font-medium'
                  style={{ color: '#a98b5dff' }}
                >
                  Every unicorn started with a single connection
                </p>
              </div>

              {/* Stats/Features Grid */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                <div className='text-center space-y-2'>
                  <div
                    className='text-3xl md:text-4xl font-bold'
                    style={{ color: '#a98b5dff' }}
                  >
                    500+
                  </div>
                  <p
                    className='text-sm md:text-base'
                    style={{ color: '#5c5d63ff' }}
                  >
                    Startups Funded
                  </p>
                </div>
                <div className='text-center space-y-2'>
                  <div
                    className='text-3xl md:text-4xl font-bold'
                    style={{ color: '#a98b5dff' }}
                  >
                    $2.5B+
                  </div>
                  <p
                    className='text-sm md:text-base'
                    style={{ color: '#5c5d63ff' }}
                  >
                    Capital Deployed
                  </p>
                </div>
                <div className='text-center space-y-2'>
                  <div
                    className='text-3xl md:text-4xl font-bold'
                    style={{ color: '#a98b5dff' }}
                  >
                    98%
                  </div>
                  <p
                    className='text-sm md:text-base'
                    style={{ color: '#5c5d63ff' }}
                  >
                    Match Success Rate
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-12'>
                <button
                  className='px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg'
                  style={{ backgroundColor: '#a98b5dff' }}
                >
                  Start Your Journey
                </button>
                <button
                  className='px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105'
                  style={{
                    color: '#dcd7ceff',
                    borderColor: '#5c5d63ff',
                    backgroundColor: 'transparent',
                  }}
                >
                  Explore Opportunities
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className='absolute top-8 right-8 w-16 h-16 rounded-full opacity-20'
              style={{ backgroundColor: '#a98b5dff' }}
            ></div>
            <div
              className='absolute bottom-8 left-8 w-12 h-12 rounded-full opacity-15'
              style={{ backgroundColor: '#5c5d63ff' }}
            ></div>
            <div
              className='absolute top-1/3 left-12 w-8 h-8 rounded-full opacity-10'
              style={{ backgroundColor: '#dcd7ceff' }}
            ></div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  )
}

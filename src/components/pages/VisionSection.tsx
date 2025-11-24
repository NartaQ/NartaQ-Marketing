'use client'

import { Sparkles, Users, Globe, Scale } from 'lucide-react'
import { useRef } from 'react'

import Link from 'next/link'

export default function VisionSection() {
  const ref = useRef(null)

  const visionPillars = [
    {
      title: 'Community-Driven',
      description:
        "Built by and for the startup ecosystem, ensuring every decision serves the community's best interests.",
      Icon: Users,
    },
    {
      title: 'Globally Accessible',
      description:
        'Breaking down geographical barriers to connect the best ideas with the right capital, anywhere in the world.',
      Icon: Globe,
    },
    {
      title: 'Transparently Governed',
      description:
        'Decentralized governance ensures the platform evolves with its users, not corporate shareholders.',
      Icon: Scale,
    },
  ]

  return (
    <section
      ref={ref}
      className='relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 grid-pattern opacity-20'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
            <Sparkles className='w-4 h-4 text-[#a98b5d]' />
            <span className='text-sm font-medium text-[#dcd7ce]'>
              OUR VISION
            </span>
          </div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
            <span className='text-[#dcd7ce]'>The Old Gatekeepers Are Gone.</span>
            <br />
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Join The New Standard.
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
            We're building a world where merit, not zip code, determines who gets funded.
            No warm intros. No "pay to play". Just pure, efficient capital allocation.
          </p>
        </div>

        {/* Vision Pillars Grid */}
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='group text-center'>
            <div className='relative p-8 rounded-2xl border border-[#a98b5d]/10 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                <Users className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                Built For Builders
              </h3>
              <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
              <p className='text-[#dcd7ce] leading-relaxed'>
                Every feature is designed to save you time and money. We only win when you close a round.
              </p>
            </div>
          </div>

          <div className='group text-center'>
            <div className='relative p-8 rounded-2xl border border-[#a98b5d]/10 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                <Globe className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                Capital Without Borders
              </h3>
              <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
              <p className='text-[#dcd7ce] leading-relaxed'>
                Great ideas are everywhere. We connect the best founders in Lagos to the best capital in New York.
              </p>
            </div>
          </div>

          <div className='group text-center'>
            <div className='relative p-8 rounded-2xl border border-[#a98b5d]/10 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center'>
                <Scale className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4'>
                You Own The Platform
              </h3>
              <div className='w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4'></div>
              <p className='text-[#dcd7ce] leading-relaxed'>
                Decentralized governance means the community decides the future, not corporate shareholders.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <Link
            title='Learn About Our Journey'
            href='/about'
            className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/30 rounded-xl text-[#dcd7ce] font-medium hover:bg-[#a98b5d]/20 transition-all duration-300'
          >
            Learn About Our Journey
            <Sparkles className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}

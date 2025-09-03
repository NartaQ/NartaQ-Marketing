'use client'

import { useRef } from 'react'

import { Brain, Shield, TrendingUp, CheckCircle } from 'lucide-react'

export default function SolutionsSection() {
  const ref = useRef(null)

  return (
    <section className='relative py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden'>
      {/* Background Grid */}
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

      <div ref={ref} className='relative z-10 max-w-7xl mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
            <CheckCircle className='w-4 h-4' />
            OUR SOLUTION
          </div>

          <h2 className='text-5xl md:text-6xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              The Right Match. On Demand.
            </span>
          </h2>

          <p className='text-xl text-gray-400 max-w-4xl mx-auto'>
            NartaQ uses AI to eliminate bias and inefficiency from startup
            funding. We make quality connections based on merit, not networks.
          </p>
        </div>

        {/* Three Key Solutions */}
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='text-center group'>
            <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <Brain className='w-10 h-10 text-[#a98b5d]' />
            </div>

            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              Smart Matching Technology
            </h3>

            <p className='text-gray-400 text-lg leading-relaxed'>
              Our AI analyzes compatibility beyond surface metrics—matching
              founders and investors based on vision alignment, expertise, and
              investment thesis.
            </p>
          </div>

          <div className='text-center group'>
            <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <Shield className='w-10 h-10 text-[#a98b5d]' />
            </div>

            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              Trust Through Transparency
            </h3>

            <p className='text-gray-400 text-lg leading-relaxed'>
              Verified profiles, transparent deal histories, and secure
              communication create a foundation of trust that traditional
              networks can't provide.
            </p>
          </div>

          <div className='text-center group'>
            <div className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <TrendingUp className='w-10 h-10 text-[#a98b5d]' />
            </div>

            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              Streamlined Deal Execution
            </h3>

            <p className='text-gray-400 text-lg leading-relaxed'>
              From first conversation to term sheet signing—automated workflows,
              integrated legal docs, and secure fund transfers eliminate the
              typical 6-month fundraising timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

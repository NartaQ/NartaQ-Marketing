'use client'

import { useRef } from 'react'

import { Brain, Shield, TrendingUp, CheckCircle } from 'lucide-react'

export default function SolutionsSection() {
  const ref = useRef(null)

  return (
    <section className='relative py-32  overflow-hidden'>
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
              The Unfair Advantage For Founders & VCs
            </span>
          </h2>

          <p className='text-xl text-gray-400 max-w-4xl mx-auto'>
            NartaQ replaces "who you know" with "what you've built".
            We use AI to give you the network you deserve, instantly.
          </p>
        </div>

        {/* Three Key Solutions */}
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='text-center group'>

            <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
              <Brain className='w-8 h-8 text-[#a98b5d]' />
            </div>

            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              Instant Deal Flow
            </h3>

            <p className='text-gray-400 text-lg leading-relaxed'>
              Get matched with 50+ relevant investors in seconds. Our AI analyzes
              investment thesis, check size, and sector focus to ensure every match is a potential "yes".
            </p>
          </div>

          <div className='text-center group'>
            <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
              <Shield className='w-8 h-8 text-[#a98b5d]' />
            </div>

            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              Zero-Risk Vetting
            </h3>

            <p className='text-gray-400 text-lg leading-relaxed'>
              Stop wasting time on "tire kickers". Every founder and investor is verified.
              Transparent deal histories and validated metrics mean you can trust who you're talking to.
            </p>
          </div>

          <div className='text-center group'>
            <div className='w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center border-2 border-[#a98b5d]/30'>
              <TrendingUp className='w-8 h-8 text-[#a98b5d]' />
            </div>

            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              Close Rounds In Weeks
            </h3>

            <p className='text-gray-400 text-lg leading-relaxed'>
              From first conversation to term sheet signing—automated workflows
              and integrated legal docs eliminate the 6-month fundraising slog.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { AlertTriangle, Clock, EyeOff } from 'lucide-react'
import { useRef } from 'react'

export default function ProblemsSection() {
  const ref = useRef(null)

  return (
    <section className='relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden'>
      {/* Background Pattern */}
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

      <div
        ref={ref}
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      >
        {/* Section Header */}
        <div className='text-center mb-16 sm:mb-20'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6'>
            <AlertTriangle className='w-4 h-4' />
            THE PROBLEM
          </div>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8'>
            <span className='bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent'>
              Why The Old Way Is Costing You Millions
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4 mb-12'>
            The current funding landscape is broken. It relies on warm intros and geography,
            leaving billions in potential returns on the table and exceptional founders unfunded.
          </p>
        </div>

        {/* Two-Column Problem Structure */}
        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16'>
          {/* Investors Problem */}
          <div className='relative'>
            <div className='p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent h-full'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-400/20 flex items-center justify-center mb-6'>
                <EyeOff className='w-8 h-8 text-red-400' />
              </div>

              <h3 className='text-2xl sm:text-3xl font-bold text-[#dcd7ce] mb-4'>
                For Investors: You're Missing The Best Deals
              </h3>

              <p className='text-gray-400 text-lg mb-6 leading-relaxed'>
                You're drowning in pitch decks from the same 50 connectors, while the next unicorn
                is being built by a founder you'll never meet. If they aren't in your inbox, they don't exist.
              </p>

              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Limited by your personal network
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Wasting 100+ hours/month on bad pitches
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Zero visibility into global talent
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Founders Problem */}
          <div className='relative'>
            <div className='p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent h-full'>
              <div className='w-16 h-16 flex items-center justify-center mb-6'>
                <Clock className='w-8 h-8 text-red-400' />
              </div>

              <h3 className='text-2xl sm:text-3xl font-bold text-[#dcd7ce] mb-4'>
                For Founders: Stuck Begging For Intros
              </h3>

              <p className='text-gray-400 text-lg mb-6 leading-relaxed'>
                You're building the future, but you're spending 90% of your time chasing "warm intros"
                instead of building your product. It's a rigged game, and you're losing time you don't have.
              </p>

              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Months wasted on "coffee chats"
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Ghosted by investors who "loved it"
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Running out of runway waiting for a "yes"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <p className='text-xl text-gray-400 mb-4'>
            The system isn't just unfair. It's inefficient.
          </p>
          <div className='w-24 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto' />
        </div>
      </div>
    </section>
  )
}

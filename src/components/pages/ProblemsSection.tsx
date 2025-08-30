'use client'

import { motion, useInView } from 'framer-motion'
import { AlertTriangle, Clock, EyeOff } from 'lucide-react'
import { useRef } from 'react'

export default function ProblemsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className='relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div
        ref={ref}
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className='text-center mb-16 sm:mb-20'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6'
          >
            <AlertTriangle className='w-4 h-4' />
            THE PROBLEM
          </motion.div>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8'>
            <span className='bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent'>
              The Old Rules of Startup Funding Are Broken
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4 mb-12'>
            Today's funding system creates two fundamental problems that waste
            billions in potential and leave exceptional founders unable to
            access capital.
          </p>
        </motion.div>

        {/* Two-Column Problem Structure */}
        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16'>
          {/* Investors Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className='relative'
          >
            <div className='p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent'>
              <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-400/20 flex items-center justify-center mb-6'>
                <EyeOff className='w-8 h-8 text-red-400' />
              </div>

              <h3 className='text-2xl sm:text-3xl font-bold text-[#dcd7ce] mb-4'>
                For Investors: Signal vs. Noise
              </h3>

              <p className='text-gray-400 text-lg mb-6 leading-relaxed'>
                You're drowning in pitch decks and warm intros, but the best
                opportunities never reach your inbox. The founders solving the
                biggest problems are building outside Silicon Valley—and you'll
                never find them through traditional channels.
              </p>

              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Endless deck reviews every quarter
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Deal flow limited by personal networks
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Best deals happen in private
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founders Problem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className='relative'
          >
            <div className='p-8 rounded-2xl border border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
              <div className='w-16 h-16 flex items-center justify-center mb-6'>
                <Clock className='w-8 h-8 text-red-400' />
              </div>

              <h3 className='text-2xl sm:text-3xl font-bold text-[#dcd7ce] mb-4'>
                For Founders: The Network Game
              </h3>

              <p className='text-gray-400 text-lg mb-6 leading-relaxed'>
                Your idea could change the world, but if you don't know someone
                who knows someone, you're locked out. The funding game is "warm
                intro roulette"—and most exceptional builders don't even get to
                play.
              </p>

              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Long, unpredictable fundraising cycles
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Hundreds of investor emails sent
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                  <span className='text-gray-300'>
                    Most never get a response
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className='text-center mt-16'
        >
          <p className='text-xl text-gray-400 mb-4'>
            We need a merit-based, transparent, and globally accessible funding
            system.
          </p>
          <div className='w-24 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto' />
        </motion.div>
      </div>
    </section>
  )
}

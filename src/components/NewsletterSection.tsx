'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add newsletter submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
    }, 1000)
  }

  return (
    <section
      ref={ref}
      className='relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/3 left-1/4 w-80 h-80 bg-[#a98b5d] rounded-full filter blur-3xl' />
        <div className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#dcd7ce] rounded-full filter blur-3xl' />
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8'>
            <Sparkles className='w-4 h-4 text-[#a98b5d]' />
            <span className='text-sm font-medium text-[#dcd7ce]'>
              STAY INFORMED
            </span>
          </div>

          {/* Header */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Ready to Join the Future of Startup Funding?
            </span>
          </h2>

          <p className='text-xl text-gray-400 mb-8 max-w-3xl mx-auto'>
            Whether you're a founder seeking capital or an investor looking for
            the next breakthrough—NartaQ connects you with the right
            opportunities.
          </p>
        </motion.div>

        {/* Dual CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12'
        >
          {/* Founders CTA */}
          <div className='rounded-2xl p-8 border backdrop-blur-xl text-center group hover:border-[#a98b5d]/40 transition-all duration-300 border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <Sparkles className='w-8 h-8 text-[#a98b5d]' />
            </div>

            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              For Founders
            </h3>
            <p className='text-gray-400 mb-6'>
              Connect with investors who understand your vision and want to fund
              your growth.
            </p>

            <a
              href='/apply/founders'
              className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
            >
              Get Funding
              <ArrowRight className='w-4 h-4' />
            </a>
          </div>

          {/* Investors CTA */}
          <div className='rounded-2xl p-8 border  backdrop-blur-xl text-center group hover:border-[#a98b5d]/40 transition-all duration-300 border-[#a98b5d]/20 bg-gradient-to-bl from-[#a98b5d]/5 to-transparent'>
            <div className='w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
              <Mail className='w-8 h-8 text-[#a98b5d]' />
            </div>

            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
              For Investors
            </h3>
            <p className='text-gray-400 mb-6'>
              Discover exceptional startups and founders before they hit the
              mainstream radar.
            </p>

            <a
              href='/apply/investors'
              className='inline-flex items-center gap-2 px-6 py-3 border-2 border-[#a98b5d] text-[#a98b5d] font-semibold rounded-xl hover:bg-[#a98b5d] hover:text-black transition-all duration-300'
            >
              Find Deals
              <ArrowRight className='w-4 h-4' />
            </a>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='text-center'
        >
          <p className='text-lg text-gray-400 mb-6'>
            Or stay updated with our progress:
          </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row gap-4 max-w-lg mx-auto'
          >
            <div className='flex-1 relative'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting || !email}
              className='px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Subscribing...' : 'Get Updates'}
            </button>
          </form>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className='mt-8 text-center'
        >
          <p className='text-gray-500 text-sm'>
            Join 250+ founders and investors already part of our founding
            community
          </p>
        </motion.div>
      </div>
    </section>
  )
}

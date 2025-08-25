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
      className='relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden'
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
            <span className='text-sm font-medium text-[#dcd7ce]'>STAY INFORMED</span>
          </div>

          {/* Header */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
            <span className='text-[#dcd7ce]'>Protocol</span>
            <br />
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>Updates</span>
          </h2>

          <p className='text-xl text-gray-400 mb-12 max-w-2xl mx-auto'>
            Get early access to new features, governance proposals, and protocol developments. 
            Be part of the future of venture capital.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='premium-glass rounded-2xl p-8 sm:p-10 border border-[#a98b5d]/20 backdrop-blur-xl'
        >
          <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4 max-w-lg mx-auto'>
            <div className='flex-1 relative'>
              <Mail className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                required
                className='w-full h-14 pl-12 pr-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              />
            </div>
            
            <button
              type='submit'
              disabled={isSubmitting || !email}
              className='group relative px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='relative flex items-center justify-center gap-2'>
                {isSubmitting ? (
                  <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </>
                )}
              </div>
            </button>
          </form>

          {/* Trust Indicators */}
          <div className='flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-[#a98b5d]/20'>
            <div className='flex items-center gap-2 text-gray-400 text-sm'>
              <div className='w-2 h-2 bg-[#a98b5d] rounded-full' />
              <span>No spam, ever</span>
            </div>
            <div className='flex items-center gap-2 text-gray-400 text-sm'>
              <div className='w-2 h-2 bg-[#a98b5d] rounded-full' />
              <span>Unsubscribe anytime</span>
            </div>
            <div className='flex items-center gap-2 text-gray-400 text-sm'>
              <div className='w-2 h-2 bg-[#a98b5d] rounded-full' />
              <span>Weekly updates only</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='mt-12 text-center'
        >
          <p className='text-gray-500 text-sm'>
            Join 1,000+ investors, founders, and contributors already shaping the future of venture capital
          </p>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../pageTransition/animations'

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Don't animate if we're already on the page
    if (pathname === href) return

    // Trigger page transition animation
    animatePageOut(href, router)
  }

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

        {/* Simplified Single CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='max-w-2xl mx-auto mb-12'
        >
          <div className='rounded-2xl p-8 border backdrop-blur-xl text-center border-[#a98b5d]/20 bg-gradient-to-br from-[#a98b5d]/5 to-transparent'>
            <h3 className='text-2xl font-bold text-[#dcd7ce] mb-6'>
              Join the Founding Community
            </h3>

            <div className='flex flex-col sm:flex-row gap-4 mb-6'>
              <Link
                href='/apply/founders'
                className='flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
                onClick={(e) => handleNavigation(e, '/apply/founders')}
              >
                I'm a Founder
                <ArrowRight className='w-4 h-4' />
              </Link>

              <Link
                href='/apply/investors'
                className='flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#a98b5d] text-[#a98b5d] font-semibold rounded-xl hover:bg-[#a98b5d] hover:text-black transition-all duration-300'
                onClick={(e) => handleNavigation(e, '/apply/investors')}
              >
                I'm an Investor
                <ArrowRight className='w-4 h-4' />
              </Link>
            </div>

            <div className='border-t border-[#a98b5d]/20 pt-6'>
              <p className='text-gray-400 mb-4 text-sm'>
                Or get updates on our progress:
              </p>

              <form
                onSubmit={handleSubmit}
                className='flex flex-col sm:flex-row gap-3'
              >
                <div className='flex-1 relative'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                    className='w-full h-10 px-4 rounded-lg bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300 text-sm'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting || !email}
                  className='px-4 py-2 bg-[#a98b5d]/20 border border-[#a98b5d]/30 text-[#a98b5d] font-medium rounded-lg hover:bg-[#a98b5d]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm'
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
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

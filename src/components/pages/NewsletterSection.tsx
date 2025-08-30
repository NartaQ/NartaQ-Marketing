'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '../pageTransition/animations'
import NewsletterForm from '../NewsletterForm'

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
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

  return (
    <section
      ref={ref}
      className='relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden'
    >
      {/* Background Elements */}

      <div className="absolute inset-0 grid-pattern opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
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

              <NewsletterForm
                source='homepage-newsletter-section'
                title=''
                description=''
                placeholder='Enter your email'
                buttonText='Subscribe'
                showName={false}
                className='text-left'
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

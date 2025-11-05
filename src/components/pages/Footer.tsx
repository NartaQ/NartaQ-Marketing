'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Mail, Loader2, CheckCircle } from 'lucide-react'
import { animatePageOut } from '../pageTransition/animations'

interface FooterProps {
  onMobileMenuToggle?: () => void
  isMobileMenuOpen?: boolean
}

export default function Footer({
  onMobileMenuToggle,
  isMobileMenuOpen = false,
}: FooterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  // Provide a default no-op function if onMobileMenuToggle is undefined
  const handleMobileToggle = onMobileMenuToggle || (() => void 0)

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Close mobile menu if open (via parent callback)
    if (isMobileMenuOpen) {
      handleMobileToggle()
    }

    // Don't animate if we're already on the page
    if (pathname === href) return

    // Trigger page transition animation
    animatePageOut(href, router)
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setEmail('')
        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className='mt-auto flex flex-col w-full gap-8 text-sm pt-[5%] pb-10 px-[10%] text-white max-md:flex-col'>
      <div className='flex max-md:flex-col max-md:gap-10 gap-10 w-full justify-between flex-wrap'>
        {/* Logo Section */}
        <div className='flex h-full w-[250px] flex-col items-center gap-6 max-md:w-full'>
          <Link
            href='/'
            className='w-full items-center flex flex-col gap-4'
            onClick={(e) => handleNavigation(e, '/')}
          >
            <Image
              title='nartaqLogo'
              src='/logo/main-tr.svg'
              alt='NartaQ Logo'
              width={120}
              height={120}
              className='max-w-[120px]'
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className='text-center'>
              <div className='text-sm font-medium text-[#a98b5d]'>
                Building the Future of Startup Funding
              </div>
              <div className='text-xs  text-gray-400 mt-1'>
                Our AI-powered platform revolutionizes startup funding by
                eliminating network bias and geographic barriers. We use
                advanced algorithms to analyze market opportunities, team
                capabilities, and investor preferences, creating optimal matches
                based on merit and compatibility rather than connections. Join
                entrepreneurs and investors building the future of merit-based
                startup funding.
              </div>
            </div>
          </Link>

          <div className='flex gap-4'>
            <Link
              href='https://twitter.com/nartaq'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl hover:text-[#a98b5d] transition-colors'
              aria-label='Follow us on Twitter'
            >
              <i className='bi bi-twitter' />
            </Link>
            <Link
              href='https://linkedin.com/company/nartaq'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl hover:text-[#a98b5d] transition-colors'
              aria-label='Connect on LinkedIn'
            >
              <i className='bi bi-linkedin' />
            </Link>
            <Link
              href='https://github.com/nartaq'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl hover:text-[#a98b5d] transition-colors'
              aria-label='View on GitHub'
            >
              <i className='bi bi-github' />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className='flex h-full min-w-[180px] flex-col gap-4'>
          <h2 className='text-xl'>Platform</h2>
          <div className='flex flex-col gap-3'>
            <Link
              href='/for-founders'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/for-founders')}
            >
              For Founders
            </Link>
            <Link
              href='/for-investors'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/for-investors')}
            >
              For Investors
            </Link>
            <Link
              href='/#how-it-works'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/#how-it-works')}
            >
              How It Works
            </Link>
            <Link
              href='/faq'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/faq')}
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* About */}
        <div className='flex h-full min-w-[180px] flex-col gap-4'>
          <h2 className='text-xl'>About</h2>
          <div className='flex flex-col gap-3'>
            <Link
              href='/about'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/about')}
            >
              Our Story
            </Link>
            <Link
              href='/about#team'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/about#team')}
            >
              The Team
            </Link>
            <Link
              href='/careers'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/careers')}
            >
              Careers
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className='flex h-full min-w-[180px] flex-col gap-4'>
          <h2 className='text-xl'>Legal</h2>
          <div className='flex flex-col gap-3'>
            <Link
              href='/legal/terms'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/legal/terms')}
            >
              Terms
            </Link>
            <Link
              href='/legal/privacy'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/legal/privacy')}
            >
              Privacy
            </Link>
            <Link
              href='/legal/dmca'
              className='footer-link hover:text-black dark:hover:text-white transition-colors'
              onClick={(e) => handleNavigation(e, '/legal/dmca')}
            >
              DMCA
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className='flex h-full min-w-[180px] flex-col gap-4'>
          <h2 className='text-xl'>Contact</h2>
          <div className='flex flex-col gap-3'>
            <div className='text-sm'>
              Email:{' '}
              <Link
                href='mailto:contact@nartaq.com'
                className='underline hover:text-[#a98b5d]'
              >
                contact@nartaq.com
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className='flex flex-col gap-3 mt-6 pt-6 border-t border-gray-600'>
            <h3 className='text-lg font-semibold'>Stay Updated</h3>
            <p className='text-xs text-gray-400'>
              Get the latest insights on startup funding delivered to your inbox.
            </p>
            
            {isSuccess ? (
              <div className='flex items-center gap-2 text-[#a98b5d] py-3'>
                <CheckCircle className='w-5 h-5' />
                <span className='text-sm font-medium'>Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className='flex flex-col gap-2'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                  className='w-full px-3 py-2 bg-black/50 border border-gray-600 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#a98b5d] focus:ring-1 focus:ring-[#a98b5d] transition-all'
                  disabled={isSubmitting}
                />
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full px-4 py-2 bg-[#a98b5d] text-black font-medium rounded-lg hover:bg-[#dcd7ce] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className='w-4 h-4 animate-spin' />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Mail className='w-4 h-4' />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
                
                {error && (
                  <p className='text-xs text-red-400'>{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <hr className='mt-8 border-gray-300 dark:border-gray-600' />

      <div className='mt-2 flex gap-2 flex-col text-gray-700 dark:text-gray-300 items-center text-[11px] w-full text-center'>
        <span>© {new Date().getFullYear()} NartaQ SAS. All rights reserved.</span>
        <span>
          NartaQ provides a technology platform and does not offer investment, legal, tax, or financial advice. 
        All investment decisions are made solely by users based on their own analysis and risk assessment.
        </span>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import { X, Mail, CheckCircle, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { subscribeToNewsletter } from '@/app/actions/newsletter'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const result = await subscribeToNewsletter({
        email,
        source: 'modal',
      })

      if (result.success) {
        setIsSuccess(true)
        setEmail('')
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
        }, 2000)
      } else {
        setError(result.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50'
          />

          {/* Modal */}
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className='relative w-full max-w-md bg-[#1a1a1a] border border-[#a98b5d]/30 rounded-3xl p-8 shadow-2xl'
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className='absolute top-4 right-4 p-2 text-[#dcd7ce]/60 hover:text-[#dcd7ce] hover:bg-[#a98b5d]/10 rounded-full transition-all duration-200'
                aria-label='Close modal'
              >
                <X className='w-5 h-5' />
              </button>

              {/* Content */}
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-center py-8'
                >
                  <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#a98b5d] to-[#dcd7ce] rounded-full flex items-center justify-center'>
                    <CheckCircle className='w-10 h-10 text-black' />
                  </div>
                  <h3 className='text-2xl font-bold text-[#dcd7ce] mb-2'>
                    You're Subscribed!
                  </h3>
                  <p className='text-[#dcd7ce]/70'>
                    Check your email for confirmation.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Icon */}
                  <div className='w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#a98b5d]/30 to-[#a98b5d]/10 rounded-2xl flex items-center justify-center border border-[#a98b5d]/20'>
                    <Mail className='w-8 h-8 text-[#a98b5d]' />
                  </div>

                  {/* Title */}
                  <h2 className='text-3xl font-bold text-[#dcd7ce] mb-3 text-center'>
                    Stay Updated
                  </h2>

                  {/* Description */}
                  <p className='text-[#dcd7ce]/70 text-center mb-8 leading-relaxed'>
                    Get the latest insights on startup funding, AI-powered venture matching, and more delivered to your inbox.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        required
                        className='w-full px-4 py-3 bg-black/50 border border-[#a98b5d]/30 rounded-xl text-[#dcd7ce] placeholder:text-[#dcd7ce]/40 focus:outline-none focus:border-[#a98b5d] focus:ring-2 focus:ring-[#a98b5d]/20 transition-all'
                        disabled={isSubmitting}
                      />
                    </div>

                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='text-red-400 text-sm'
                      >
                        {error}
                      </motion.p>
                    )}

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#a98b5d]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className='w-5 h-5 animate-spin' />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Mail className='w-5 h-5' />
                          Subscribe Now
                        </>
                      )}
                    </button>
                  </form>

                  {/* Privacy Note */}
                  <p className='text-xs text-[#dcd7ce]/50 text-center mt-6'>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

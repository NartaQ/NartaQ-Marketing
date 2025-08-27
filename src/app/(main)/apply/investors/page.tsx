'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function InvestorApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    title: '',
    investmentFocus: [] as string[],
    ticketSize: '',
    targetGeography: [] as string[],
    referralSource: '',
    otherFocus: '',
    otherSource: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const investmentFocusOptions = [
    'Tech',
    'Fintech', 
    'SaaS',
    'Deep Tech',
    'E-commerce',
    'AI/ML',
    'Other'
  ]

  const ticketSizeOptions = [
    'Pre-Seed ($50k - $250k)',
    'Seed ($250k - $1M)',
    'Series A ($1M - $5M)',
    'Series B+ ($5M+)'
  ]

  const geographyOptions = [
    'France',
    'Tunisia',
    'MENA Region',
    'Europe',
    'Global'
  ]

  const referralOptions = [
    'LinkedIn',
    'Referral',
    'Article',
    'Twitter',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleMultiSelect = (field: 'investmentFocus' | 'targetGeography', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className='min-h-screen bg-black text-white flex items-center justify-center p-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='max-w-2xl mx-auto text-center'
        >
          <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] flex items-center justify-center'>
            <CheckCircle className='w-10 h-10 text-black' />
          </div>
          
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-[#dcd7ce]'>
            Application Received!
          </h1>
          
          <p className='text-lg text-gray-400 mb-8 leading-relaxed'>
            Thank you! Your application to join the Founding Investor Cohort has been received. 
            Our team will review your information and be in touch soon. Welcome to the future of venture capital.
          </p>
          
          <Link
            href='/'
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Header */}
      <div className='border-b border-gray-800'>
        <div className='max-w-4xl mx-auto px-4 py-6'>
          <Link 
            href='/for-investors'
            className='inline-flex items-center gap-2 text-gray-400 hover:text-[#a98b5d] transition-colors mb-4'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Investors
          </Link>
          
          <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Apply to Join the NartaQ Founding Cohort as an Investor
            </span>
          </h1>
          
          <p className='text-gray-400'>
            Join an exclusive group of forward-thinking investors shaping the future of startup funding.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className='max-w-2xl mx-auto px-4 py-12'>
        <form onSubmit={handleSubmit} className='space-y-8'>
          {/* Full Name */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Full Name *
            </label>
            <input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              placeholder='Your full name'
            />
          </div>

          {/* Work Email */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Work Email *
            </label>
            <input
              type='email'
              name='workEmail'
              value={formData.workEmail}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              placeholder='your.email@company.com'
            />
          </div>

          {/* Company/Firm Name */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Company / Firm Name *
            </label>
            <input
              type='text'
              name='companyName'
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              placeholder='Your company or firm name'
            />
          </div>

          {/* Title */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Your Title *
            </label>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              placeholder='e.g., Partner, Investment Director, etc.'
            />
          </div>

          {/* Investment Focus */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              What sectors do you invest in? *
            </label>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4'>
              {investmentFocusOptions.map(option => (
                <button
                  key={option}
                  type='button'
                  onClick={() => handleMultiSelect('investmentFocus', option)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    formData.investmentFocus.includes(option)
                      ? 'border-[#a98b5d] bg-[#a98b5d]/20 text-[#a98b5d]'
                      : 'border-gray-600 bg-black/30 text-gray-400 hover:border-[#a98b5d]/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {formData.investmentFocus.includes('Other') && (
              <input
                type='text'
                name='otherFocus'
                value={formData.otherFocus}
                onChange={handleInputChange}
                placeholder='Please specify other sectors'
                className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              />
            )}
          </div>

          {/* Ticket Size */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Typical Investment Stage & Ticket Size *
            </label>
            <select
              name='ticketSize'
              value={formData.ticketSize}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
            >
              <option value=''>Select ticket size range</option>
              {ticketSizeOptions.map(option => (
                <option key={option} value={option} className='bg-black'>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Target Geography */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Target Geography *
            </label>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
              {geographyOptions.map(option => (
                <button
                  key={option}
                  type='button'
                  onClick={() => handleMultiSelect('targetGeography', option)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    formData.targetGeography.includes(option)
                      ? 'border-[#a98b5d] bg-[#a98b5d]/20 text-[#a98b5d]'
                      : 'border-gray-600 bg-black/30 text-gray-400 hover:border-[#a98b5d]/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* How did you hear about us */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              How did you hear about NartaQ?
            </label>
            <select
              name='referralSource'
              value={formData.referralSource}
              onChange={handleInputChange}
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300 mb-4'
            >
              <option value=''>Select source (optional)</option>
              {referralOptions.map(option => (
                <option key={option} value={option} className='bg-black'>
                  {option}
                </option>
              ))}
            </select>
            {formData.referralSource === 'Other' && (
              <input
                type='text'
                name='otherSource'
                value={formData.otherSource}
                onChange={handleInputChange}
                placeholder='Please specify how you heard about us'
                className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isSubmitting || !formData.fullName || !formData.workEmail || !formData.companyName || !formData.title || formData.investmentFocus.length === 0 || !formData.ticketSize || formData.targetGeography.length === 0}
            className='w-full py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
          >
            {isSubmitting ? (
              <div className='flex items-center justify-center gap-2'>
                <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                Submitting Application...
              </div>
            ) : (
              'Apply Now'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
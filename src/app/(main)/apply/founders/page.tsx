'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, Upload, X } from 'lucide-react'
import Link from 'next/link'

export default function FounderApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    website: '',
    sector: [] as string[],
    fundingStage: '',
    location: '',
    shortPitch: '',
    otherSector: ''
  })
  
  const [pitchDeck, setPitchDeck] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sectorOptions = [
    'Fintech',
    'SaaS', 
    'Deep Tech',
    'E-commerce',
    'AI/ML',
    'HealthTech',
    'EdTech',
    'Other'
  ]

  const fundingStageOptions = [
    'Pre-Revenue',
    'Pre-Seed',
    'Seed',
    'Series A',
    'Series B+'
  ]

  const locationOptions = [
    'France',
    'Tunisia',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleMultiSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      sector: prev.sector.includes(value) 
        ? prev.sector.filter(item => item !== value)
        : [...prev.sector, value]
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setPitchDeck(file)
    } else {
      alert('Please upload a PDF file only')
      e.target.value = ''
    }
  }

  const removePitchDeck = () => {
    setPitchDeck(null)
    const fileInput = document.getElementById('pitchDeck') as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call - in real implementation, handle file upload here
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
            Thank you! Your application to join the Founding Founder Cohort has been received. 
            Our team will review your information and be in touch soon. We look forward to connecting you with the right investors.
          </p>
          
          {!pitchDeck && (
            <div className='p-4 border border-[#a98b5d]/30 rounded-xl bg-[#a98b5d]/10 mb-6'>
              <p className='text-sm text-gray-300'>
                💡 Don't forget to send us your pitch deck at founders@nartaq.com to complete your application!
              </p>
            </div>
          )}
          
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
            href='/for-founders'
            className='inline-flex items-center gap-2 text-gray-400 hover:text-[#a98b5d] transition-colors mb-4'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Founders
          </Link>
          
          <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Apply to Join the NartaQ Founding Cohort as a Founder
            </span>
          </h1>
          
          <p className='text-gray-400'>
            Connect with investors who understand your vision and want to fund your growth.
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
              placeholder='founder@company.com'
            />
          </div>

          {/* Company Name */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Company Name *
            </label>
            <input
              type='text'
              name='companyName'
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              placeholder='Your company name'
            />
          </div>

          {/* Website */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Company Website *
            </label>
            <input
              type='url'
              name='website'
              value={formData.website}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              placeholder='https://www.yourcompany.com'
            />
          </div>

          {/* Sector */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              What sector is your company in? *
            </label>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4'>
              {sectorOptions.map(option => (
                <button
                  key={option}
                  type='button'
                  onClick={() => handleMultiSelect(option)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    formData.sector.includes(option)
                      ? 'border-[#a98b5d] bg-[#a98b5d]/20 text-[#a98b5d]'
                      : 'border-gray-600 bg-black/30 text-gray-400 hover:border-[#a98b5d]/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {formData.sector.includes('Other') && (
              <input
                type='text'
                name='otherSector'
                value={formData.otherSector}
                onChange={handleInputChange}
                placeholder='Please specify other sector'
                className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
              />
            )}
          </div>

          {/* Funding Stage */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              What is your current funding stage? *
            </label>
            <select
              name='fundingStage'
              value={formData.fundingStage}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
            >
              <option value=''>Select funding stage</option>
              {fundingStageOptions.map(option => (
                <option key={option} value={option} className='bg-black'>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Primary Location *
            </label>
            <select
              name='location'
              value={formData.location}
              onChange={handleInputChange}
              required
              className='w-full h-12 px-4 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300'
            >
              <option value=''>Select primary location</option>
              {locationOptions.map(option => (
                <option key={option} value={option} className='bg-black'>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Short Pitch */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Tell us about your company (1-2 sentences) *
            </label>
            <textarea
              name='shortPitch'
              value={formData.shortPitch}
              onChange={handleInputChange}
              required
              rows={4}
              className='w-full px-4 py-3 rounded-xl bg-black/50 border border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 focus:border-[#a98b5d] transition-all duration-300 resize-none'
              placeholder='Describe what your company does and the problem you solve...'
              maxLength={300}
            />
            <div className='text-right text-sm text-gray-500 mt-1'>
              {formData.shortPitch.length}/300 characters
            </div>
          </div>

          {/* Pitch Deck Upload */}
          <div>
            <label className='block text-sm font-medium text-[#dcd7ce] mb-2'>
              Upload your Pitch Deck (PDF)
            </label>
            <p className='text-xs text-gray-500 mb-3'>
              Optional - but highly recommended for a complete application
            </p>
            
            {!pitchDeck ? (
              <label className='block'>
                <input
                  type='file'
                  id='pitchDeck'
                  accept='.pdf'
                  onChange={handleFileChange}
                  className='hidden'
                />
                <div className='w-full h-32 border-2 border-dashed border-[#a98b5d]/30 rounded-xl flex items-center justify-center cursor-pointer hover:border-[#a98b5d]/50 transition-all duration-300 bg-black/20'>
                  <div className='text-center'>
                    <Upload className='w-8 h-8 text-[#a98b5d] mx-auto mb-2' />
                    <p className='text-sm text-gray-400'>
                      Click to upload your pitch deck
                    </p>
                    <p className='text-xs text-gray-500'>
                      PDF files only, max 10MB
                    </p>
                  </div>
                </div>
              </label>
            ) : (
              <div className='flex items-center justify-between p-4 border border-[#a98b5d]/30 rounded-xl bg-[#a98b5d]/10'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-[#a98b5d] rounded-lg flex items-center justify-center'>
                    <span className='text-black font-semibold text-xs'>PDF</span>
                  </div>
                  <div>
                    <p className='text-sm text-[#dcd7ce] font-medium'>{pitchDeck.name}</p>
                    <p className='text-xs text-gray-400'>
                      {(pitchDeck.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={removePitchDeck}
                  className='w-8 h-8 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors flex items-center justify-center'
                >
                  <X className='w-4 h-4' />
                </button>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isSubmitting || !formData.fullName || !formData.workEmail || !formData.companyName || !formData.website || formData.sector.length === 0 || !formData.fundingStage || !formData.location || !formData.shortPitch}
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
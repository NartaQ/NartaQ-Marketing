'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Upload, X, FileText, TrendingUp } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  submitCareerApplication,
  checkExistingCareerApplication,
} from '@/app/actions/career-application'
import { uploadFileToAzure } from '@/app/actions/file-upload'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  motivation: z
    .string()
    .min(
      50,
      'Please tell us more about your motivation (at least 50 characters)'
    ),
  portfolioUrl: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  cvUrl: z.string().optional(),
  marketingExperience: z
    .string()
    .min(
      50,
      'Please describe your marketing experience (at least 50 characters)'
    ),
  analyticsExperience: z
    .string()
    .min(
      50,
      'Please describe your analytics experience (at least 50 characters)'
    ),
  campaignExample: z
    .string()
    .min(50, 'Please provide a campaign example (at least 50 characters)'),
  toolsExperience: z
    .string()
    .min(1, 'Please list the marketing tools you have experience with'),
  position: z.literal('Digital Marketing Analyst'),
})

type FormData = z.infer<typeof formSchema>

interface DigitalMarketingAnalystFormProps {
  onSubmissionSuccess: () => void
}

export default function DigitalMarketingAnalystForm({
  onSubmissionSuccess,
}: DigitalMarketingAnalystFormProps) {
  const [submissionError, setSubmissionError] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadError, setUploadError] = useState<string>('')

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      motivation: '',
      portfolioUrl: '',
      cvUrl: '',
      marketingExperience: '',
      analyticsExperience: '',
      campaignExample: '',
      toolsExperience: '',
      position: 'Digital Marketing Analyst',
    },
  })

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (!file) return

      setUploadError('')

      const maxSize = 5 * 1024 * 1024 // 5MB
      if (file.size > maxSize) {
        setUploadError('File size must be less than 5MB')
        return
      }

      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ]

      if (!allowedTypes.includes(file.type)) {
        setUploadError('Only PDF and Word documents (.doc, .docx) are allowed')
        return
      }

      setSelectedFile(file)
      setUploadError('')
    },
    []
  )

  const handleFileRemove = useCallback(() => {
    setSelectedFile(null)
    setUploadError('')
    form.setValue('cvUrl', '')
  }, [form])

  const onSubmit = async (data: FormData) => {
    setSubmissionError('')
    setIsSubmitting(true)

    try {
      // Check if user already has an application BEFORE uploading file
      const existingCheck = await checkExistingCareerApplication(data.email)

      if (!existingCheck.success || existingCheck.exists) {
        setSubmissionError(
          existingCheck.message ||
            'You have already submitted an application. Please contact us if you need to update it.'
        )
        setIsSubmitting(false)
        return
      }

      // Only upload file if the user doesn't have an existing application
      if (selectedFile) {
        try {
          const formData = new FormData()
          formData.append('file', selectedFile)

          const uploadResult = await uploadFileToAzure(formData)

          if (uploadResult.success && uploadResult.url) {
            data.cvUrl = uploadResult.url
          } else {
            throw new Error(uploadResult.error || 'Failed to upload file')
          }
        } catch (uploadErr) {
          setUploadError('Failed to upload CV. Please try again.')
          setIsSubmitting(false)
          return
        }
      }

      const result = await submitCareerApplication(data)

      if (result.success) {
        onSubmissionSuccess()
      } else {
        if (result.error === 'Application already exists') {
          setSubmissionError(
            'You have already submitted an application for this position. Please contact us if you need to update it.'
          )
        } else {
          setSubmissionError(
            result.message || result.error || 'Failed to submit application'
          )
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmissionError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='max-w-3xl mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-gradient-to-br from-[#232428]/80 to-[#3e3f44]/60 backdrop-blur-sm border border-[#a98b5d]/20 rounded-3xl p-8 md:p-12'
          >
            {/* Header */}
            <div className='text-center mb-12'>
              <div className='w-16 h-16 bg-[#a98b5d]/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                <TrendingUp className='w-8 h-8 text-[#a98b5d]' />
              </div>
              <h2 className='font-serif text-3xl font-bold text-white mb-4'>
                <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                  Digital Marketing Analyst Application
                </span>
              </h2>
              <p className='font-serif text-lg text-[#dcd7ce]/80'>
                Drive growth through data-driven marketing strategies
              </p>
            </div>

            {/* Personal Information */}
            <div className='space-y-8 mb-12'>
              <div className='grid md:grid-cols-2 gap-8'>
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                        First Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='John'
                          {...field}
                          className='font-serif text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                        />
                      </FormControl>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='lastName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                        Last Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Doe'
                          {...field}
                          className='font-serif text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                        />
                      </FormControl>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />
              </div>

              <div className='grid md:grid-cols-2 gap-8'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='john@example.com'
                          {...field}
                          className='font-serif text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                        />
                      </FormControl>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                        Phone Number (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='tel'
                          placeholder='+33 1 23 45 67 89'
                          {...field}
                          className='font-serif text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                        />
                      </FormControl>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Position-Specific Questions */}
            <div className='space-y-8 mb-12'>
              <FormField
                control={form.control}
                name='marketingExperience'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      B2B Marketing Experience *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Describe your B2B marketing experience, including types of campaigns, target audiences, channels used, and results achieved...'
                        rows={5}
                        className='font-serif text-lg bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl resize-none transition-all duration-300'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='font-serif text-red-400 mt-2' />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='analyticsExperience'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      Analytics & Data Experience *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Describe your experience with marketing analytics, data analysis tools, KPI tracking, and how you use data to optimize campaigns...'
                        rows={5}
                        className='font-serif text-lg bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl resize-none transition-all duration-300'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='font-serif text-red-400 mt-2' />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='campaignExample'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      Successful Campaign Example *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Share a specific example of a successful marketing campaign you led or contributed to. Include objectives, strategy, execution, and measurable results...'
                        rows={5}
                        className='font-serif text-lg bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl resize-none transition-all duration-300'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='font-serif text-red-400 mt-2' />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='toolsExperience'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      Marketing Tools & Platforms *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='e.g., Google Analytics, HubSpot, Salesforce, LinkedIn Ads, Google Ads, SEMrush, etc.'
                        {...field}
                        className='font-serif text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                      />
                    </FormControl>
                    <FormMessage className='font-serif text-red-400 mt-2' />
                  </FormItem>
                )}
              />
            </div>

            {/* Motivation */}
            <div className='space-y-8 mb-12'>
              <FormField
                control={form.control}
                name='motivation'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      Why do you want to join NartaQ as a Digital Marketing
                      Analyst? *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Tell us what excites you about marketing in the fintech/investment space, and how you can contribute to our growth strategy...'
                        rows={6}
                        className='font-serif text-lg bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl resize-none transition-all duration-300'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='font-serif text-red-400 mt-2' />
                  </FormItem>
                )}
              />
            </div>

            {/* Portfolio & CV */}
            <div className='space-y-8'>
              <FormField
                control={form.control}
                name='portfolioUrl'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      Portfolio / LinkedIn URL (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='url'
                        placeholder='https://linkedin.com/in/yourprofile or portfolio showcasing marketing campaigns'
                        {...field}
                        className='font-serif text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                      />
                    </FormControl>
                    <FormMessage className='font-serif text-red-400 mt-2' />
                  </FormItem>
                )}
              />

              {/* CV Upload */}
              <div className='space-y-4'>
                <label className='font-serif text-xl text-[#dcd7ce] block'>
                  Upload your CV (optional)
                </label>
                <p className='font-serif text-sm text-[#5c5d63]'>
                  Accepted formats: PDF, Word (.doc, .docx) - Maximum size: 5MB
                </p>

                <div className='bg-[#232428]/40 border border-[#5c5d63]/30 rounded-xl p-6 hover:border-[#a98b5d]/30 transition-colors'>
                  {!selectedFile ? (
                    <div className='text-center'>
                      <input
                        type='file'
                        accept='.pdf,.doc,.docx'
                        onChange={handleFileSelect}
                        className='hidden'
                        id='cv-upload'
                      />
                      <label
                        htmlFor='cv-upload'
                        className='cursor-pointer inline-flex items-center gap-3 px-6 py-3 bg-[#a98b5d]/20 hover:bg-[#a98b5d]/30 border border-[#a98b5d]/50 rounded-lg text-[#dcd7ce] transition-all duration-300'
                      >
                        <Upload className='w-5 h-5' />
                        Choose File
                      </label>
                    </div>
                  ) : (
                    <div className='flex items-center justify-between p-3 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-lg'>
                      <div className='flex items-center gap-3'>
                        <FileText className='w-5 h-5 text-[#a98b5d]' />
                        <div>
                          <p className='font-serif text-[#dcd7ce] text-sm'>
                            {selectedFile.name}
                          </p>
                          <p className='font-serif text-[#5c5d63] text-xs'>
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type='button'
                        onClick={handleFileRemove}
                        className='p-1 hover:bg-red-500/20 rounded-full transition-colors'
                      >
                        <X className='w-4 h-4 text-red-400' />
                      </button>
                    </div>
                  )}

                  {uploadError && (
                    <div className='mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg'>
                      <p className='font-serif text-red-400 text-sm'>
                        {uploadError}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Data Processing Information */}
            <div className='mt-12 p-6 bg-[#232428]/40 border border-[#5c5d63]/30 rounded-xl'>
              <p className='font-serif text-sm text-[#a8a8a8] leading-relaxed'>
                By submitting this application, you consent to the processing of
                your personal data in accordance with our{' '}
                <a
                  href='/legal/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#a98b5d] hover:text-[#dcd7ce] underline transition-colors'
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Error Display */}
            {submissionError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className='mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl'
              >
                <p className='font-serif text-red-400 text-center'>
                  {submissionError}
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <div className='flex justify-center pt-8'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='font-serif text-lg px-12 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl shadow-lg hover:shadow-[#a98b5d]/20'
              >
                {isSubmitting ? (
                  <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                    Submitting Application...
                  </div>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </form>
      </Form>
    </div>
  )
}

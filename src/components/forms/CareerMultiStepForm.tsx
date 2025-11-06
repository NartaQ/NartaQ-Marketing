'use client'

import {
  checkExistingCareerApplication,
  submitCareerApplication,
} from '@/app/actions/career-application'
import { uploadFileToAzure } from '@/app/actions/file-upload'
import { identifyUser } from '@/lib/analytics/unified-tracker'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Upload, X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  motivation: z.string().optional(),
  portfolioUrl: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  cvUrl: z.string().optional(),
  position: z.string().min(1, 'Position is required'),
})

type FormData = z.infer<typeof formSchema>

interface CareerMultiStepFormProps {
  onSubmissionSuccess: () => void
  position?: string
}

export default function CareerMultiStepForm({
  onSubmissionSuccess,
  position = 'General',
}: CareerMultiStepFormProps) {
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
      position: position,
    },
  })

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (!file) return

      setUploadError('')

      // File size validation (5MB limit to be safe)
      const maxSize = 5 * 1024 * 1024 // 5MB in bytes
      if (file.size > maxSize) {
        setUploadError('File size must be less than 5MB')
        return
      }

      // File type validation
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

    // Identify user immediately when they submit
    identifyUser({
      email: data.email,
      name: `${data.firstName} ${data.lastName}`
    })

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
      let cvUrl = ''
      if (selectedFile) {
        try {
          const formData = new FormData()
          formData.append('file', selectedFile)

          const uploadResult = await uploadFileToAzure(formData)

          if (uploadResult.success && uploadResult.url) {
            cvUrl = uploadResult.url
          } else {
            throw new Error(uploadResult.error || 'Failed to upload file')
          }
        } catch (_uploadErr) {
          setUploadError('Failed to upload CV. Please try again.')
          setIsSubmitting(false)
          return
        }
      }

      // Prepare the submission data
      const submissionData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || '',
        motivation: data.motivation || '',
        portfolioUrl: data.portfolioUrl || '',
        cvUrl: cvUrl,
        position: data.position || position,
      }

      // Now submit the application
      const result = await submitCareerApplication(submissionData)

      if (result.success) {
        onSubmissionSuccess()
      } else {
        if (result.error === 'Application already exists') {
          setSubmissionError(
            'You have already submitted an application. Please contact us if you need to update it.'
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
            {/* Personal Information */}
            <div className='space-y-8 mb-12'>
              <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                    Tell Us About Yourself
                  </span>
                </h2>
                <p className='text-lg text-[#dcd7ce]/80'>
                  We'd love to learn more about you and what drives you
                </p>
              </div>

              <div className='grid md:grid-cols-2 gap-8'>
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl text-[#dcd7ce] mb-3 block'>
                        First Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='John'
                          {...field}
                          className='text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='lastName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl text-[#dcd7ce] mb-3 block'>
                        Last Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Doe'
                          {...field}
                          className='text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
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
                      <FormLabel className='text-xl text-[#dcd7ce] mb-3 block'>
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='john@example.com'
                          {...field}
                          className='text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl text-[#dcd7ce] mb-3 block'>
                        Phone Number (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='tel'
                          placeholder='+33 1 23 45 67 89'
                          {...field}
                          className='text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Motivation */}
            <div className='space-y-8 mb-12'>
              <FormField
                control={form.control}
                name='motivation'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xl text-[#dcd7ce] mb-3 block'>
                      Why do you want to join NartaQ? (optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Tell us what excites you about this opportunity and how you can contribute to our mission. Share your passion, experience, and what makes you unique...'
                        rows={6}
                        className='text-lg bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl resize-none transition-all duration-300'
                        {...field}
                      />
                    </FormControl>
                    <div className='flex justify-between items-center mt-2'>
                      <FormMessage className='text-red-400' />
                      <span className='text-[#5c5d63] text-sm'>
                        {field.value?.length || 0}/1000 characters
                      </span>
                    </div>
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
                    <FormLabel className='text-xl text-[#dcd7ce] mb-3 block'>
                      Portfolio / LinkedIn URL (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='url'
                        placeholder='https://linkedin.com/in/yourprofile or https://yourportfolio.com'
                        {...field}
                        className='text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                      />
                    </FormControl>
                    <FormMessage className='text-red-400 mt-2' />
                  </FormItem>
                )}
              />

              {/* CV Upload - Simplified */}
              <div className='space-y-4'>
                <label className='text-xl text-[#dcd7ce] block'>
                  Upload your CV (optional)
                </label>
                <p className='text-sm text-[#5c5d63]'>
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
                      <p className='text-sm text-[#5c5d63] mt-2'>
                        Or drag and drop your file here
                      </p>
                    </div>
                  ) : (
                    <div className='flex items-center justify-between p-3 bg-[#a98b5d]/10 border border-[#a98b5d]/30 rounded-lg'>
                      <div className='flex items-center gap-3'>
                        <FileText className='w-5 h-5 text-[#a98b5d]' />
                        <div>
                          <p className='text-[#dcd7ce] text-sm'>
                            {selectedFile.name}
                          </p>
                          <p className='text-[#5c5d63] text-xs'>
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
                      <p className='text-red-400 text-sm'>
                        {uploadError}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Data Processing Information */}
            <div className='mt-12 p-6 bg-[#232428]/40 border border-[#5c5d63]/30 rounded-xl'>
              <p className='text-sm text-[#a8a8a8] leading-relaxed'>
                By submitting this application, you consent to the processing of
                your personal data in accordance with our{' '}
                <a
                  href='/legal/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#a98b5d] hover:text-[#dcd7ce] underline transition-colors'
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href='/legal/terms'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#a98b5d] hover:text-[#dcd7ce] underline transition-colors'
                >
                  Terms of Service
                </a>
                . This information will be used to evaluate your application and
                communicate about potential opportunities.
              </p>
            </div>

            {/* Error Display */}
            {submissionError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className='mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl'
              >
                <p className='text-red-400 text-center'>
                  {submissionError}
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <div className='flex justify-center pt-8'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='text-lg px-12 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl shadow-lg hover:shadow-[#a98b5d]/20'
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

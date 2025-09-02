'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitCareerApplication } from '@/app/actions/career-application'
import { uploadFileToAzure } from '@/app/actions/file-upload'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FileUpload } from '@/components/ui/file-upload'
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
  motivation: z.string().optional(),
  portfolioUrl: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  cvUrl: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface CareerMultiStepFormProps {
  onSubmissionSuccess: () => void
}

export default function CareerMultiStepForm({
  onSubmissionSuccess,
}: CareerMultiStepFormProps) {
  // Add error boundary state
  const [hasError, setHasError] = useState(false)

  // Wrap onSubmissionSuccess to handle any errors
  const safeOnSubmissionSuccess = useCallback(() => {
    try {
      onSubmissionSuccess()
    } catch (error: unknown) {
      setHasError(true)
    }
  }, [onSubmissionSuccess])

  // Add global error handler to catch any unhandled errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Only handle errors related to our form
      if (event.error?.message?.includes('Application already exists')) {
        event.preventDefault()
        // Silently handle duplicate application errors
        safeOnSubmissionSuccess()
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // Handle promise rejections
      const reasonMessage = (event.reason as Error)?.message || String(event.reason) || ''
      if (reasonMessage.includes('Application already exists')) {
        event.preventDefault()
        safeOnSubmissionSuccess()
      }
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [safeOnSubmissionSuccess])

  // If there's an error, show a fallback UI
  if (hasError) {
    return (
      <div className='max-w-3xl mx-auto'>
        <div className='bg-gradient-to-br from-[#232428]/80 to-[#3e3f44]/60 backdrop-blur-sm border border-[#a98b5d]/20 rounded-3xl p-8 md:p-12 text-center'>
          <h2 className='font-serif text-2xl font-bold text-white mb-4'>
            Something went wrong
          </h2>
          <p className='font-serif text-[#dcd7ce]/80 mb-6'>
            Please refresh the page and try again.
          </p>
          <Button
            onClick={() => window.location.reload()}
            className='font-serif text-lg px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black rounded-xl'
          >
            Refresh Page
          </Button>
        </div>
      </div>
    )
  }
  const [submissionError, setSubmissionError] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    },
  })

  const handleFileSelect = useCallback((files: File[]) => {
    try {
      if (files.length === 0) return

      setUploadError('')
      const file = files[0]

      // File size validation (10MB limit)
      const maxSize = 10 * 1024 * 1024 // 10MB in bytes
      if (file.size > maxSize) {
        setUploadError('File size must be less than 10MB')
        return
      }

      // File type validation
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      ]

      if (!allowedTypes.includes(file.type)) {
        setUploadError('Only PDF, Word documents (.doc, .docx), and PowerPoint files (.ppt, .pptx) are allowed')
        return
      }

      // Just store the file, don't upload yet
      setSelectedFile(file)
      setUploadError('')
    } catch (error: unknown) {
      setUploadError('Error selecting file. Please try again.')
    }
  }, [])

  const uploadFileToServer = async (file: File): Promise<string | null> => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const result = await uploadFileToAzure(formData)

      if (result.success && result.url) {
        return result.url
      } else {
        throw new Error(result.error || 'Failed to upload file')
      }
    } catch (error: unknown) {
      // Don't log to console, just throw for handling upstream
      throw error
    }
  }

  const handleFileRemove = useCallback(() => {
    try {
      setSelectedFile(null)
      setUploadError('')
      form.setValue('cvUrl', '')
    } catch (error: unknown) {
      // Silently handle any errors during file removal
    }
  }, [form])
  console.log("'kjhksjdhfjksdf")
  const onSubmit = async (data: FormData) => {
    setSubmissionError('')
    setIsSubmitting(true)

    try {
      // Upload file first if one is selected
      if (selectedFile) {
        setIsUploading(true)
        try {
          const cvUrl = await uploadFileToServer(selectedFile)
          data.cvUrl = cvUrl || ''
        } catch (uploadErr) {
          setUploadError('Failed to upload CV. Please try again.')
          setIsSubmitting(false)
          setIsUploading(false)
          return
        } finally {
          setIsUploading(false)
        }
      }

      const result = await submitCareerApplication(data)

      if (result.success) {
        setIsSubmitted(true)
        safeOnSubmissionSuccess()
      } else {
        // Handle specific error messages without logging to console
        const errorMessage = result.error || result.message || ''

        if (errorMessage.includes('Application already exists') || errorMessage.includes('already exists')) {
          // Don't show error for duplicate applications - just inform user
          setSubmissionError('')
          // You could show a success message instead or redirect
          safeOnSubmissionSuccess()
        } else {
          setSubmissionError(
            result.message || result.error || 'Failed to submit application'
          )
        }
      }
    } catch (error: unknown) {
      // Handle network errors and other exceptions
      const errorMessage = (error as Error)?.message || String(error) || ''

      if (errorMessage.includes('Application already exists') || errorMessage.includes('already exists')) {
        // Don't show error for duplicate applications
        setSubmissionError('')
        safeOnSubmissionSuccess()
      } else {
        setSubmissionError('An unexpected error occurred. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // Use getValues instead of watch to avoid re-renders
  const getMotivationLength = () => {
    const motivation = form.getValues('motivation')
    return motivation?.length || 0
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
                <h2 className='font-serif text-3xl font-bold text-white mb-4'>
                  <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                    Tell Us About Yourself
                  </span>
                </h2>
                <p className='font-serif text-lg text-[#dcd7ce]/80'>
                  We'd love to learn more about you and what drives you
                </p>
              </div>

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

            {/* Motivation */}
            <div className='space-y-8 mb-12'>
              <FormField
                control={form.control}
                name='motivation'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      Why do you want to join NartaQ? (optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Tell us what excites you about this opportunity and how you can contribute to our mission. Share your passion, experience, and what makes you unique...'
                        rows={8}
                        className='font-serif text-lg bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl resize-none min-h-[200px] transition-all duration-300'
                        {...field}
                      />
                    </FormControl>
                    <div className='flex justify-between items-center mt-2'>
                      <FormMessage className='font-serif text-red-400' />
                      <span className='font-serif text-[#5c5d63] text-sm'>
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
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      Portfolio / LinkedIn URL (optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='url'
                        placeholder='https://linkedin.com/in/yourprofile or https://yourportfolio.com'
                        {...field}
                        className='font-serif text-lg h-14 bg-[#232428]/60 border-[#5c5d63]/50 text-[#dcd7ce] placeholder-[#5c5d63] focus:border-[#a98b5d] focus:ring-[#a98b5d]/20 rounded-xl transition-all duration-300'
                      />
                    </FormControl>
                    <FormMessage className='font-serif text-red-400 mt-2' />
                  </FormItem>
                )}
              />

              {/* CV Upload */}
              <FormField
                control={form.control}
                name='cvUrl'
                render={() => (
                  <FormItem>
                    <FormLabel className='font-serif text-xl text-[#dcd7ce] mb-3 block'>
                      Upload your CV (optional)
                    </FormLabel>
                    <p className='font-serif text-sm text-[#5c5d63] mb-4'>
                      Accepted formats: PDF, Word (.doc, .docx), PowerPoint (.ppt, .pptx) - Maximum size: 10MB
                      <br />
                      <span className='text-xs text-[#a98b5d]'>Your file will be uploaded when you submit the form</span>
                    </p>
                    <div className='bg-[#232428]/40 border border-[#5c5d63]/30 rounded-xl p-6 hover:border-[#a98b5d]/30 transition-colors'>
                      <FileUpload
                        onChange={handleFileSelect}
                        onRemove={handleFileRemove}
                      />

                      {/* Upload Error Message */}
                      {uploadError && (
                        <div className='mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg'>
                          <p className='font-serif text-red-400 text-sm'>{uploadError}</p>
                        </div>
                      )}

                      {/* File Selected Indicator */}
                      {selectedFile && !isUploading && (
                        <div className='mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center text-blue-400'>
                              <span className='font-serif'>
                                {selectedFile.name} ready to upload ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                              </span>
                            </div>
                            <button
                              type='button'
                              onClick={handleFileRemove}
                              className='font-serif text-sm text-red-400 hover:text-red-300 transition-colors underline'
                            >
                              Remove
                            </button>
                          </div>
                          <p className='font-serif text-xs text-blue-300 mt-1'>
                            File will be uploaded when you submit the form
                          </p>
                        </div>
                      )}

                      {/* Upload Progress */}
                      {isUploading && (
                        <div className='flex items-center justify-center mt-4'>
                          <div className='w-6 h-6 border-2 border-[#a98b5d] border-t-transparent rounded-full animate-spin mr-2' />
                          <span className='font-serif text-[#dcd7ce]/80'>
                            Uploading CV...
                          </span>
                        </div>
                      )}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* Data Processing Information */}
            <div className='mt-12 p-6 bg-[#232428]/40 border border-[#5c5d63]/30 rounded-xl'>
              <p className='font-serif text-sm text-[#5c5d63] leading-relaxed'>
                By submitting this application, you consent to the processing of your personal data in
                accordance with our{' '}
                <a
                  href='/legal/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#a98b5d] hover:text-[#dcd7ce] underline transition-colors'
                >
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a
                  href='/legal/terms'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#a98b5d] hover:text-[#dcd7ce] underline transition-colors'
                >
                  Terms of Service
                </a>
                . This information will be used to evaluate your application and communicate about potential opportunities.
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
                disabled={isSubmitting || isSubmitted || isUploading}
                className='font-serif text-lg px-12 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl shadow-lg hover:shadow-[#a98b5d]/20'
              >
                {isUploading ? (
                  <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                    Uploading CV...
                  </div>
                ) : isSubmitting ? (
                  <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                    Submitting Application...
                  </div>
                ) : isSubmitted ? (
                  <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin' />
                    Application Submitted!
                  </div>
                ) : (
                  <>
                    Submit Application
                    {selectedFile && <span className='text-sm opacity-75'>(+ Upload CV)</span>}
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

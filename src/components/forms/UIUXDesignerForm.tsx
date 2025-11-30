'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
  X,
  Palette,
} from 'lucide-react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'
import { submitCareerApplication } from '@/app/actions/career-application'
import { uploadFileToAzure } from '@/app/actions/file-upload'

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  portfolioUrl: z
    .string()
    .url('Please enter a valid portfolio URL')
    .min(1, 'Portfolio URL is required'),
  designTools: z
    .array(z.string())
    .min(1, 'Please select at least one design tool'),
  yearsOfExperience: z.string().min(1, 'Please select your experience level'),
  designProcessDescription: z
    .string()
    .min(50, 'Please describe your design process in at least 50 characters'),
  designChallenge: z
    .string()
    .min(100, 'Please provide a detailed response of at least 100 characters'),
  motivation: z.string().optional(),
  cvUrl: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function UIUXDesignerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submissionError, setSubmissionError] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadError, setUploadError] = useState<string>('')

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      portfolioUrl: '',
      designTools: [],
      yearsOfExperience: '',
      designProcessDescription: '',
      designChallenge: '',
      motivation: '',
      cvUrl: '',
    },
  })

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type and size
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Please upload a PDF or Word document')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB')
      return
    }

    setSelectedFile(file)
    setUploadError('')
  }

  const removeFile = () => {
    setSelectedFile(null)
    setUploadError('')
    form.setValue('cvUrl', '')
  }

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      setSubmissionError('')

      let cvUrl = ''

      // Upload CV if provided
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
        } catch (uploadErr) {
          console.error('Upload error:', uploadErr)
          setSubmissionError('Failed to upload CV. Please try again.')
          return
        }
      }

      // Submit the application with position-specific data
      const applicationData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || '',
        motivation: data.motivation || '',
        portfolioUrl: data.portfolioUrl,
        cvUrl,
        position: 'UI/UX Designer',
        additionalData: {
          designTools: data.designTools,
          yearsOfExperience: data.yearsOfExperience,
          designProcessDescription: data.designProcessDescription,
          designChallenge: data.designChallenge,
        },
      }

      const result = await submitCareerApplication(applicationData)

      if (result.error) {
        setSubmissionError(result.error)
      } else {
        setIsSuccess(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmissionError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className='min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center'>
        <div className='max-w-2xl mx-auto px-4 text-center'>
          <div className='bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm'>
            <CheckCircle className='w-16 h-16 text-green-400 mx-auto mb-6' />
            <h1 className='text-3xl font-bold text-white mb-4'>
              Application Submitted!
            </h1>
            <p className='text-gray-300 mb-8'>
              Thank you for applying for the UI/UX Designer position. We'll
              review your application and get back to you soon.
            </p>
            <Link href='/careers'>
              <Button className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold'>
                Back to Careers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#a98b5d]/20 via-gray-900 to-[#0a0a0a]' />
      <div className='absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#a98b5d]/30 to-[#dcd7ce]/30 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#dcd7ce]/20 to-[#a98b5d]/20 rounded-full blur-3xl animate-pulse delay-1000' />

      <div className='relative z-10'>
        {/* Header */}
        <div className='pt-8 px-4'>
          <div className='max-w-4xl mx-auto flex items-center justify-between'>
            <Link
              href='/careers/ui-ux-designer'
              className='inline-flex items-center gap-2 text-[#dcd7ce] hover:text-[#a98b5d] transition-colors group'
            >
              <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
              <span>Back to Position</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className='py-12 px-4'>
          <div className='max-w-4xl mx-auto'>
            {/* Header */}
            <div className='text-center mb-12'>
              <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/40 rounded-full text-sm font-semibold text-[#dcd7ce] mb-6'>
                <Palette className='w-4 h-4 text-[#a98b5d]' />
                UI/UX Designer Application
              </div>
              <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                <span className='bg-gradient-to-r from-white via-[#dcd7ce] to-white bg-clip-text text-transparent'>
                  Apply for UI/UX Designer
                </span>
              </h1>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Share your design portfolio and tell us about your experience
                creating exceptional user experiences.
              </p>
            </div>

            {/* Form */}
            <div className='bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-8'
                >
                  {/* Personal Information */}
                  <div className='grid md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='firstName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-white'>
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='bg-white/5 border-white/10 text-white placeholder:text-gray-400'
                              placeholder='Enter your first name'
                            />
                          </FormControl>
                          <FormMessage className='text-red-400' />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='lastName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-white'>
                            Last Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='bg-white/5 border-white/10 text-white placeholder:text-gray-400'
                              placeholder='Enter your last name'
                            />
                          </FormControl>
                          <FormMessage className='text-red-400' />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-white'>
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type='email'
                              className='bg-white/5 border-white/10 text-white placeholder:text-gray-400'
                              placeholder='Enter your email address'
                            />
                          </FormControl>
                          <FormMessage className='text-red-400' />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-white'>
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='bg-white/5 border-white/10 text-white placeholder:text-gray-400'
                              placeholder='Enter your phone number'
                            />
                          </FormControl>
                          <FormMessage className='text-red-400' />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Portfolio URL */}
                  <FormField
                    control={form.control}
                    name='portfolioUrl'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white'>
                          Portfolio URL *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className='bg-white/5 border-white/10 text-white placeholder:text-gray-400'
                            placeholder='https://your-portfolio.com'
                          />
                        </FormControl>
                        <FormMessage className='text-red-400' />
                      </FormItem>
                    )}
                  />

                  {/* Design Tools */}
                  <FormField
                    control={form.control}
                    name='designTools'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white'>
                          Design Tools & Software *
                        </FormLabel>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-2'>
                          {[
                            'Figma',
                            'Sketch',
                            'Adobe XD',
                            'Adobe Photoshop',
                            'Adobe Illustrator',
                            'Principle',
                            'Framer',
                            'InVision',
                            'Zeplin',
                          ].map((tool) => (
                            <label
                              key={tool}
                              className='flex items-center space-x-2 cursor-pointer'
                            >
                              <input
                                type='checkbox'
                                checked={field.value.includes(tool)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    field.onChange([...field.value, tool])
                                  } else {
                                    field.onChange(
                                      field.value.filter(
                                        (t: string) => t !== tool
                                      )
                                    )
                                  }
                                }}
                                className='rounded border-white/20 bg-white/5 text-[#a98b5d]'
                              />
                              <span className='text-gray-300 text-sm'>
                                {tool}
                              </span>
                            </label>
                          ))}
                        </div>
                        <FormMessage className='text-red-400' />
                      </FormItem>
                    )}
                  />

                  {/* Years of Experience */}
                  <FormField
                    control={form.control}
                    name='yearsOfExperience'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white'>
                          Years of Design Experience *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='bg-white/5 border-white/10 text-white'>
                              <SelectValue placeholder='Select your experience level' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='0-1'>0-1 years</SelectItem>
                            <SelectItem value='2-3'>2-3 years</SelectItem>
                            <SelectItem value='4-5'>4-5 years</SelectItem>
                            <SelectItem value='6-8'>6-8 years</SelectItem>
                            <SelectItem value='9+'>9+ years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className='text-red-400' />
                      </FormItem>
                    )}
                  />

                  {/* Design Process */}
                  <FormField
                    control={form.control}
                    name='designProcessDescription'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white'>
                          Describe Your Design Process *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className='bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[120px]'
                            placeholder='Walk us through your typical design process, from research to final implementation...'
                          />
                        </FormControl>
                        <FormMessage className='text-red-400' />
                      </FormItem>
                    )}
                  />

                  {/* Design Challenge */}
                  <FormField
                    control={form.control}
                    name='designChallenge'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white'>
                          Design Challenge Response *
                        </FormLabel>
                        <p className='text-sm text-gray-400 mb-2'>
                          How would you approach designing a dashboard for
                          investors to track multiple investment opportunities?
                          Consider user research, information architecture, and
                          visual hierarchy.
                        </p>
                        <FormControl>
                          <Textarea
                            {...field}
                            className='bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[150px]'
                            placeholder='Describe your approach to this design challenge...'
                          />
                        </FormControl>
                        <FormMessage className='text-red-400' />
                      </FormItem>
                    )}
                  />

                  {/* CV Upload */}
                  <div className='space-y-4'>
                    <label className='text-white font-medium'>
                      Upload CV/Resume
                    </label>
                    <div className='border-2 border-dashed border-white/20 rounded-lg p-6 text-center'>
                      {selectedFile ? (
                        <div className='flex items-center justify-between bg-white/5 p-3 rounded-lg'>
                          <span className='text-white'>
                            {selectedFile.name}
                          </span>
                          <Button
                            type='button'
                            variant='ghost'
                            size='sm'
                            onClick={removeFile}
                            className='text-red-400 hover:text-red-300'
                          >
                            <X className='w-4 h-4' />
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Upload className='w-8 h-8 text-gray-400 mx-auto mb-2' />
                          <p className='text-gray-400 mb-2'>
                            Click to upload your CV/Resume
                          </p>
                          <p className='text-xs text-gray-500'>
                            PDF or Word document, max 5MB
                          </p>
                        </div>
                      )}
                      <input
                        type='file'
                        accept='.pdf,.doc,.docx'
                        onChange={handleFileSelect}
                        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                      />
                    </div>
                    {uploadError && (
                      <p className='text-red-400 text-sm flex items-center gap-2'>
                        <AlertCircle className='w-4 h-4' />
                        {uploadError}
                      </p>
                    )}
                  </div>

                  {/* Additional Motivation */}
                  <FormField
                    control={form.control}
                    name='motivation'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white'>
                          Why do you want to join NartaQ?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className='bg-white/5 border-white/10 text-white placeholder:text-gray-400'
                            placeholder='Tell us what excites you about this opportunity...'
                          />
                        </FormControl>
                        <FormMessage className='text-red-400' />
                      </FormItem>
                    )}
                  />

                  {/* Error Message */}
                  {submissionError && (
                    <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-4'>
                      <p className='text-red-400 flex items-center gap-2'>
                        <AlertCircle className='w-5 h-5' />
                        {submissionError}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className='flex justify-center pt-6'>
                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:hover:scale-100'
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className='w-5 h-5 ml-2' />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

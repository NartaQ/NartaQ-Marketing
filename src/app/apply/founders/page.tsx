'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { FileUpload } from '@/components/ui/file-upload'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  submitFounderApplication,
  type FounderApplicationData,
} from '@/app/actions/founder-application'

const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  workEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(1, 'Company name is required'),
  website: z.string().url('Please enter a valid website URL'),
  sector: z.array(z.string()).min(1, 'Please select at least one sector'),
  otherSector: z.string().optional(),
  fundingStage: z.string().min(1, 'Please select a funding stage'),
  location: z.string().min(1, 'Please select a location'),
  shortPitch: z
    .string()
    .min(10, 'Please provide a short pitch (minimum 10 characters)')
    .max(300, 'Pitch must be under 300 characters'),
  pitchDeckUrl: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function FounderApplicationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [pitchDeckFiles, setPitchDeckFiles] = useState<File[]>([])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      companyName: '',
      website: '',
      sector: [],
      otherSector: '',
      fundingStage: '',
      location: '',
      shortPitch: '',
      pitchDeckUrl: '',
    },
  })

  const sectorOptions = [
    'Fintech',
    'SaaS',
    'Deep Tech',
    'E-commerce',
    'AI/ML',
    'HealthTech',
    'EdTech',
    'Other',
  ]

  const fundingStageOptions = [
    'Pre-Revenue',
    'Pre-Seed',
    'Seed',
    'Series A',
    'Series B+',
  ]

  const locationOptions = ['France', 'Tunisia', 'Other']

  const handleSectorChange = (sector: string, checked: boolean) => {
    const currentSectors = form.getValues('sector')
    if (checked) {
      form.setValue('sector', [...currentSectors, sector])
    } else {
      form.setValue(
        'sector',
        currentSectors.filter((s) => s !== sector)
      )
    }
  }

  const handleFileUpload = (files: File[]) => {
    setPitchDeckFiles(files)
    // In a real app, you would upload the file here and get a URL
    if (files.length > 0) {
      form.setValue('pitchDeckUrl', `uploaded-${files[0].name}`)
    }
  }

  const onSubmit = async (data: FormData) => {
    try {
      const result = await submitFounderApplication(data)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        console.error('Submission failed:', result.error)
        // Handle error - you could show a toast notification here
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const watchedSectors = form.watch('sector')
  const watchedPitch = form.watch('shortPitch')

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
            Thank you! Your application to join the Founding Founder Cohort has
            been received. Our team will review your information and be in touch
            soon. We look forward to connecting you with the right investors.
          </p>

          {pitchDeckFiles.length === 0 && (
            <div className='p-4 border border-[#a98b5d]/30 rounded-xl bg-[#a98b5d]/10 mb-6'>
              <p className='text-sm text-gray-300'>
                💡 Don't forget to send us your pitch deck at
                founders@nartaq.com to complete your application!
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
    <div className='min-h-screen bg-black text-white pt-20'>
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
            Connect with investors who understand your vision and want to fund
            your growth.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className='max-w-2xl mx-auto px-4 py-12'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            {/* Full Name */}
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Your full name'
                      {...field}
                      className='bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Work Email */}
            <FormField
              control={form.control}
              name='workEmail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>Work Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='founder@company.com'
                      {...field}
                      className='bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Name */}
            <FormField
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Your company name'
                      {...field}
                      className='bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Website */}
            <FormField
              control={form.control}
              name='website'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    Company Website
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='url'
                      placeholder='https://www.yourcompany.com'
                      {...field}
                      className='bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Sector */}
            <FormField
              control={form.control}
              name='sector'
              render={() => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    What sector is your company in?
                  </FormLabel>
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                    {sectorOptions.map((option) => {
                      const checked = watchedSectors?.includes(option)
                      return (
                        <FormField
                          key={option}
                          control={form.control}
                          name='sector'
                          render={({ field }) => (
                            <FormItem>
                              <motion.label
                                initial={{ scale: 1 }}
                                animate={
                                  checked ? { scale: 1.01 } : { scale: 1 }
                                }
                                transition={{
                                  type: 'spring',
                                  stiffness: 140,
                                  damping: 18,
                                }}
                                className={`flex items-center gap-3 p-3 rounded-xl border transition-colors duration-250 cursor-pointer select-none ${
                                  checked
                                    ? 'border-[#a98b5d] bg-[#a98b5d]/20 text-[#a98b5d]'
                                    : 'border-gray-600 bg-black/30 text-gray-300 hover:border-[#a98b5d]/50'
                                }`}
                              >
                                <FormControl>
                                  {/* keep Checkbox for accessibility/control but visually hide the square */}
                                  <Checkbox
                                    checked={checked}
                                    onCheckedChange={(val) =>
                                      handleSectorChange(option, val as boolean)
                                    }
                                    className='sr-only'
                                  />
                                </FormControl>

                                {/* animated check icon instead of the square box */}
                                <motion.span
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={
                                    checked
                                      ? { opacity: 1, scale: 1 }
                                      : { opacity: 0, scale: 0.8 }
                                  }
                                  transition={{
                                    type: 'spring',
                                    stiffness: 220,
                                    damping: 20,
                                  }}
                                  className='w-6 h-6 rounded-full flex items-center justify-center'
                                >
                                  <div
                                    className={`rounded-full ${
                                      checked
                                        ? 'bg-[#a98b5d] text-black'
                                        : 'bg-transparent'
                                    } w-6 h-6 flex items-center justify-center`}
                                  >
                                    <Check className='w-4 h-4' />
                                  </div>
                                </motion.span>

                                <span className='text-sm font-normal'>
                                  {option}
                                </span>
                              </motion.label>
                            </FormItem>
                          )}
                        />
                      )
                    })}
                  </div>
                  {watchedSectors?.includes('Other') && (
                    <FormField
                      control={form.control}
                      name='otherSector'
                      render={({ field }) => (
                        <FormItem className='mt-4'>
                          <FormControl>
                            <Input
                              placeholder='Please specify other sector'
                              {...field}
                              className='bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Funding Stage */}
            <FormField
              control={form.control}
              name='fundingStage'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    What is your current funding stage?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] focus:border-[#a98b5d]'>
                        <SelectValue placeholder='Select funding stage' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='bg-black border-[#a98b5d]/30'>
                      {fundingStageOptions.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className='text-[#dcd7ce] focus:bg-[#a98b5d]/20'
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name='location'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    Primary Location
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] focus:border-[#a98b5d]'>
                        <SelectValue placeholder='Select primary location' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='bg-black border-[#a98b5d]/30'>
                      {locationOptions.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className='text-[#dcd7ce] focus:bg-[#a98b5d]/20'
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Short Pitch */}
            <FormField
              control={form.control}
              name='shortPitch'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    Tell us about your company (1-2 sentences)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Describe what your company does and the problem you solve...'
                      rows={6}
                      className='bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d] resize-none text-lg py-3 min-h-[160px]'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className='text-right text-gray-500'>
                    {watchedPitch?.length || 0}/300 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Pitch Deck Upload */}
            <FormField
              control={form.control}
              name='pitchDeckUrl'
              render={() => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    Upload your Pitch Deck (PDF)
                  </FormLabel>
                  <FormDescription className='text-gray-500'>
                    Optional - but highly recommended for a complete application
                  </FormDescription>
                  <FormControl>
                    <div className='border-2 border-dashed border-[#a98b5d]/30 rounded-xl bg-black/20'>
                      <FileUpload onChange={handleFileUpload} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type='submit'
              disabled={form.formState.isSubmitting}
              className='w-full py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
            >
              {form.formState.isSubmitting ? (
                <div className='flex items-center justify-center gap-2'>
                  <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                  Submitting Application...
                </div>
              ) : (
                'Apply Now'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

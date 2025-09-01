'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitFounderApplication } from '@/app/actions/founder-application'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

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

interface FounderMultiStepFormProps {
  onSubmissionSuccess: () => void
}

export default function FounderMultiStepForm({ onSubmissionSuccess }: FounderMultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [submissionError, setSubmissionError] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const totalSteps = 4

  // Debug logging for component initialization
  useEffect(() => {
    console.log('🏗️ FounderMultiStepForm initialized')
    console.log('📊 Initial state:', {
      currentStep,
      totalSteps,
      isSubmitted,
      submissionError
    })
  }, [])

  // Debug logging for step changes
  useEffect(() => {
    console.log('📍 Step changed to:', currentStep, '/', totalSteps)
  }, [currentStep])

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

  const nextStep = async () => {
    console.log('➡️ Moving to next step from:', currentStep)
    const fieldsToValidate = getFieldsForStep(currentStep)
    console.log('🔍 Validating fields for step', currentStep, ':', fieldsToValidate)
    const isValid = await form.trigger(fieldsToValidate)
    console.log('✅ Step validation result:', isValid)
    
    if (isValid && currentStep < totalSteps) {
      const newStep = currentStep + 1
      console.log('🚀 Moving to step:', newStep)
      setCurrentStep(newStep)
    } else if (!isValid) {
      console.log('❌ Validation failed for step', currentStep, ', errors:', form.formState.errors)
    } else {
      console.log('🏁 Already at final step:', currentStep, '/', totalSteps)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'workEmail']
      case 2:
        return ['companyName', 'website']
      case 3:
        return ['sector', 'fundingStage', 'location']
      case 4:
        return ['shortPitch']
      default:
        return []
    }
  }

  const onSubmit = async (data: FormData) => {
    console.log('🚀 Founder form submission started')
    console.log('📋 Form data:', data)
    console.log('⚡ Form state:', form.formState)
    console.log('🔄 Current step:', currentStep)
    console.log('✅ Is form valid?', form.formState.isValid)
    console.log('❌ Form errors:', form.formState.errors)
    
    // Prevent double submission
    if (isSubmitted || form.formState.isSubmitting) {
      console.log('🚫 Submission blocked - already submitting or submitted')
      return
    }

    setSubmissionError('')
    setIsSubmitted(true)

    try {
      console.log('📤 Calling submitFounderApplication...')
      const result = await submitFounderApplication(data)
      console.log('📨 Server response:', result)
      
      if (result.success) {
        console.log('✅ Submission successful, calling onSubmissionSuccess')
        onSubmissionSuccess()
      } else {
        console.error('❌ Submission failed:', result.error)
        setSubmissionError(result.message || result.error || 'Failed to submit application')
        setIsSubmitted(false) // Allow retry if it's not a duplicate
      }
    } catch (error) {
      console.error('💥 Error submitting form:', error)
      setSubmissionError('An unexpected error occurred. Please try again.')
      setIsSubmitted(false)
    }
  }

  const watchedSectors = form.watch('sector')
  const watchedPitch = form.watch('shortPitch')

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  }

  return (
    <div className='max-w-2xl mx-auto'>
      {/* Progress Bar */}
      <div className='mb-12'>
        <div className='flex items-center justify-between mb-2'>
          <span className='font-serif text-sm text-gray-400'>
            Step {currentStep} of {totalSteps}
          </span>
          <span className='font-serif text-sm text-gray-400'>
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className='w-full bg-gray-800 rounded-full h-2'>
          <motion.div
            className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] h-2 rounded-full'
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={(e) => {
          console.log('🎯 Form onSubmit triggered')
          console.log('📄 Form event:', e)
          console.log('🔍 Form state before submit:', {
            isValid: form.formState.isValid,
            errors: form.formState.errors,
            isSubmitting: form.formState.isSubmitting,
            isDirty: form.formState.isDirty,
            isSubmitted: isSubmitted,
            currentStep: currentStep
          })
          console.log('📊 Form values:', form.getValues())
          return form.handleSubmit(onSubmit)(e)
        }} className='space-y-8'>
          <AnimatePresence mode='wait'>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <motion.div
                key='step1'
                variants={stepVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ duration: 0.3 }}
                className='space-y-8'
              >
                <div className='text-center mb-12'>
                  <h2 className='font-serif text-3xl font-bold text-white mb-4'>
                    Let's start with the basics
                  </h2>
                  <p className='font-serif text-lg text-gray-300'>
                    Tell us about yourself
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='fullName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        What's your full name? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='John Doe'
                          {...field}
                          className='font-serif text-lg h-14 bg-black/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='workEmail'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        What's your work email? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='founder@company.com'
                          {...field}
                          className='font-serif text-lg h-14 bg-black/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {/* Step 2: Company Information */}
            {currentStep === 2 && (
              <motion.div
                key='step2'
                variants={stepVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ duration: 0.3 }}
                className='space-y-8'
              >
                <div className='text-center mb-12'>
                  <h2 className='font-serif text-3xl font-bold text-white mb-4'>
                    Now about your company
                  </h2>
                  <p className='font-serif text-lg text-gray-300'>
                    Give us the basic details
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='companyName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        What's your company name? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Acme Inc.'
                          {...field}
                          className='font-serif text-lg h-14 bg-black/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='website'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        What's your company website? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='url'
                          placeholder='https://www.yourcompany.com'
                          {...field}
                          className='font-serif text-lg h-14 bg-black/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {/* Step 3: Business Details */}
            {currentStep === 3 && (
              <motion.div
                key='step3'
                variants={stepVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ duration: 0.3 }}
                className='space-y-8'
              >
                <div className='text-center mb-12'>
                  <h2 className='font-serif text-3xl font-bold text-white mb-4'>
                    Business specifics
                  </h2>
                  <p className='font-serif text-lg text-gray-300'>
                    Help us understand your industry and stage
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='sector'
                  render={() => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-6 block'>
                        What sector is your company in? *
                      </FormLabel>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {sectorOptions.map((option) => {
                          const checked = watchedSectors?.includes(option)
                          return (
                            <motion.label
                              key={option}
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                                checked
                                  ? 'border-[#a98b5d] bg-[#a98b5d]/20 text-[#a98b5d]'
                                  : 'border-gray-600 bg-black/30 text-gray-300 hover:border-[#a98b5d]/50'
                              }`}
                            >
                              <FormControl>
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={(val) =>
                                    handleSectorChange(option, val as boolean)
                                  }
                                  className='sr-only'
                                />
                              </FormControl>
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  checked
                                    ? 'bg-[#a98b5d] text-black'
                                    : 'bg-transparent border border-gray-500'
                                }`}
                              >
                                {checked && <Check className='w-4 h-4' />}
                              </div>
                              <span className='font-serif text-lg'>{option}</span>
                            </motion.label>
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
                                  className='font-serif text-lg h-12 bg-black/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <div className='grid md:grid-cols-2 gap-6'>
                  <FormField
                    control={form.control}
                    name='fundingStage'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-serif text-xl text-white mb-3 block'>
                          Current funding stage? *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='font-serif text-lg h-14 bg-black/50 border-[#a98b5d]/30 text-white focus:border-[#a98b5d] rounded-xl'>
                              <SelectValue placeholder='Select stage' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='bg-black border-[#a98b5d]/30 font-serif'>
                            {fundingStageOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className='text-white focus:bg-[#a98b5d]/20 font-serif'
                              >
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className='font-serif text-red-400 mt-2' />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='location'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-serif text-xl text-white mb-3 block'>
                          Primary location? *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='font-serif text-lg h-14 bg-black/50 border-[#a98b5d]/30 text-white focus:border-[#a98b5d] rounded-xl'>
                              <SelectValue placeholder='Select location' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='bg-black border-[#a98b5d]/30 font-serif'>
                            {locationOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className='text-white focus:bg-[#a98b5d]/20 font-serif'
                              >
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className='font-serif text-red-400 mt-2' />
                      </FormItem>
                    )}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Pitch */}
            {currentStep === 4 && (
              <motion.div
                key='step4'
                variants={stepVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ duration: 0.3 }}
                className='space-y-8'
              >
                <div className='text-center mb-12'>
                  <h2 className='font-serif text-3xl font-bold text-white mb-4'>
                    Tell us about your vision
                  </h2>
                  <p className='font-serif text-lg text-gray-300'>
                    What problem are you solving?
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='shortPitch'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        Describe your company in 1-2 sentences *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='We help businesses automate their customer service using AI, reducing response time by 80% while improving customer satisfaction...'
                          rows={6}
                          className='font-serif text-lg bg-black/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl resize-none min-h-[150px]'
                          {...field}
                        />
                      </FormControl>
                      <div className='flex justify-between items-center mt-2'>
                        <FormMessage className='font-serif text-red-400' />
                        <span className='font-serif text-gray-400 text-sm'>
                          {watchedPitch?.length || 0}/300 characters
                        </span>
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Display */}
          {submissionError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl'
            >
              <p className='font-serif text-red-400 text-center'>{submissionError}</p>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className='flex justify-between pt-8'>
            <Button
              type='button'
              onClick={prevStep}
              variant='ghost'
              disabled={currentStep === 1}
              className='font-serif text-lg text-gray-100 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                type='button'
                onClick={nextStep}
                className='font-serif text-lg px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform rounded-xl'
              >
                Continue
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            ) : (
              <Button
                type='submit'
                disabled={form.formState.isSubmitting || isSubmitted}
                className='font-serif text-lg px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl'
                onClick={(e) => {
                  console.log('🖱️ Submit button clicked!')
                  console.log('👆 Click event:', e)
                  console.log('🔘 Button disabled?', form.formState.isSubmitting || isSubmitted)
                  console.log('⚙️ Current form state:', {
                    isSubmitting: form.formState.isSubmitting,
                    isSubmitted: isSubmitted,
                    isValid: form.formState.isValid,
                    errors: form.formState.errors,
                    currentStep: currentStep
                  })
                  console.log('📋 Form values at button click:', form.getValues())
                  // Let the natural form submission flow continue
                }}
              >
                {form.formState.isSubmitting || isSubmitted ? (
                  <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                    {isSubmitted ? 'Processing...' : 'Submitting...'}
                  </div>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
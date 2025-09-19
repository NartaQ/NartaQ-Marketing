'use client'

import { useState, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitInvestorApplication, checkExistingInvestorApplication } from '@/app/actions/investor-application'
import { trackFormStep, trackCTAClick, identifyUser } from '@/lib/analytics/unified-tracker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  companyName: z.string().min(1, 'Company/Firm name is required'),
  title: z.string().min(1, 'Title is required'),
  investmentFocus: z
    .array(z.string())
    .min(1, 'Please select at least one investment focus'),
  otherFocus: z.string().optional(),
  ticketSize: z.string().min(1, 'Please select a ticket size'),
  targetGeography: z
    .array(z.string())
    .min(1, 'Please select at least one target geography'),
  referralSource: z.string().min(1, 'Please select a referral source'),
  otherSource: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface InvestorMultiStepFormProps {
  onSubmissionSuccess: () => void
}

export default function InvestorMultiStepForm({
  onSubmissionSuccess,
}: InvestorMultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [submissionError, setSubmissionError] = useState('')
  const [emailCheckError, setEmailCheckError] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCheckingEmail, setIsCheckingEmail] = useState(false)
  const [isPending, startTransition] = useTransition()
  const totalSteps = 4

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      companyName: '',
      title: '',
      investmentFocus: [],
      otherFocus: '',
      ticketSize: '',
      targetGeography: [],
      referralSource: '',
      otherSource: '',
    },
  })

  const investmentFocusOptions = [
    'Tech',
    'Fintech',
    'SaaS',
    'Deep Tech',
    'E-commerce',
    'AI/ML',
    'Other',
  ]

  const ticketSizeOptions = [
    'Early Bird ($5k - $50k)',
    'Pre-Seed ($50k - $250k)',
    'Seed ($250k - $1M)',
    'Series A ($1M - $5M)',
    'Series B+ ($5M+)',
  ]

  const geographyOptions = [
    'France',
    'Tunisia',
    'MENA Region',
    'Europe',
    'Global',
  ]

  const referralOptions = [
    'LinkedIn',
    'Referral',
    'Article',
    'Twitter',
    'Other',
  ]

  const handleMultiSelect = (
    field: 'investmentFocus' | 'targetGeography',
    option: string,
    checked: boolean
  ) => {
    const currentValues = form.getValues(field)
    if (checked) {
      form.setValue(field, [...currentValues, option])
    } else {
      form.setValue(
        field,
        currentValues.filter((item) => item !== option)
      )
    }
  }

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep)
    const isValid = await form.trigger(fieldsToValidate)

    if (isValid && currentStep < totalSteps) {
      // Clear any previous errors
      setEmailCheckError('')
      
      // Check for existing application when moving from step 1
      if (currentStep === 1) {
        setIsCheckingEmail(true)
        const formData = form.getValues()
        
        try {
          const existingCheck = await checkExistingInvestorApplication(formData.workEmail)
          
          if (!existingCheck.success) {
            setEmailCheckError(existingCheck.message)
            setIsCheckingEmail(false)
            return
          }
          
          if (existingCheck.exists) {
            setEmailCheckError(existingCheck.message)
            setIsCheckingEmail(false)
            return
          }
          
          // If no existing application, identify user for analytics
          identifyUser({
            email: formData.workEmail,
            name: formData.fullName
          })
        } catch (_error) {
          setEmailCheckError('Unable to verify email availability. Please try again.')
          setIsCheckingEmail(false)
          return
        }
        
        setIsCheckingEmail(false)
      }
      
      // Track CTA click for continue button
      trackCTAClick(
        'Continue',
        'button',
        `investor_form_step_${currentStep}`,
        undefined,
        'primary'
      )
      
      setCurrentStep(currentStep + 1)
      
      // Track step progression
      trackFormStep('investor', currentStep + 1)
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
        return ['companyName', 'title']
      case 3:
        return ['investmentFocus', 'ticketSize']
      case 4:
        return ['targetGeography', 'referralSource']
      default:
        return []
    }
  }

  const onSubmit = async (data: FormData) => {
    // Prevent duplicate submissions
    if (isSubmitted || isPending) {
      return
    }

    setSubmissionError('')

    startTransition(async () => {
      try {
        const result = await submitInvestorApplication(data)
        if (result.success) {
          setIsSubmitted(true)
          onSubmissionSuccess()
        } else {
          console.error('Submission failed:', result.error)
          setSubmissionError(
            result.error ||
              'An error occurred while submitting your application. Please try again.'
          )
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        setSubmissionError(
          'An unexpected error occurred. Please try again later.'
        )
      }
    })
  }

  const watchedInvestmentFocus = form.watch('investmentFocus')
  const watchedTargetGeography = form.watch('targetGeography')
  const watchedReferralSource = form.watch('referralSource')

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
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
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
                          placeholder='Jane Smith'
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
                          placeholder='jane@investmentfirm.com'
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
                    About your firm
                  </h2>
                  <p className='font-serif text-lg text-gray-300'>
                    Tell us about your organization and role
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='companyName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        What's your company/firm name? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Investment Partners LLC'
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
                  name='title'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        What's your title? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Partner, Investment Director, etc.'
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

            {/* Step 3: Investment Focus */}
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
                    Investment preferences
                  </h2>
                  <p className='font-serif text-lg text-gray-300'>
                    What sectors and stages do you focus on?
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='investmentFocus'
                  render={() => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-6 block'>
                        What sectors do you invest in? *
                      </FormLabel>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {investmentFocusOptions.map((option) => {
                          const checked =
                            watchedInvestmentFocus?.includes(option)
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
                                    handleMultiSelect(
                                      'investmentFocus',
                                      option,
                                      val as boolean
                                    )
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
                              <span className='font-serif text-lg'>
                                {option}
                              </span>
                            </motion.label>
                          )
                        })}
                      </div>
                      {watchedInvestmentFocus?.includes('Other') && (
                        <FormField
                          control={form.control}
                          name='otherFocus'
                          render={({ field }) => (
                            <FormItem className='mt-4'>
                              <FormControl>
                                <Input
                                  placeholder='Please specify other sectors'
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

                <FormField
                  control={form.control}
                  name='ticketSize'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        Typical investment stage & ticket size? *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='font-serif text-lg h-14 bg-black/50 border-[#a98b5d]/30 text-white focus:border-[#a98b5d] rounded-xl'>
                            <SelectValue placeholder='Select ticket size' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='bg-black border-[#a98b5d]/30 font-serif'>
                          {ticketSizeOptions.map((option) => (
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
              </motion.div>
            )}

            {/* Step 4: Geography & Referral */}
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
                    Final details
                  </h2>
                  <p className='font-serif text-lg text-gray-300'>
                    Geography and how you found us
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='targetGeography'
                  render={() => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-6 block'>
                        What is your target geography? *
                      </FormLabel>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {geographyOptions.map((option) => {
                          const checked =
                            watchedTargetGeography?.includes(option)
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
                                    handleMultiSelect(
                                      'targetGeography',
                                      option,
                                      val as boolean
                                    )
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
                              <span className='font-serif text-lg'>
                                {option}
                              </span>
                            </motion.label>
                          )
                        })}
                      </div>
                      <FormMessage className='font-serif text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='referralSource'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-serif text-xl text-white mb-3 block'>
                        How did you hear about us? *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='font-serif text-lg h-14 bg-black/50 border-[#a98b5d]/30 text-white focus:border-[#a98b5d] rounded-xl'>
                            <SelectValue placeholder='Select referral source' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='bg-black border-[#a98b5d]/30 font-serif'>
                          {referralOptions.map((option) => (
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

                {watchedReferralSource === 'Other' && (
                  <FormField
                    control={form.control}
                    name='otherSource'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='font-serif text-lg text-white mb-3 block'>
                          Please specify how you heard about us
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Please specify your referral source'
                            {...field}
                            className='font-serif text-lg h-12 bg-black/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                          />
                        </FormControl>
                        <FormMessage className='font-serif text-red-400 mt-2' />
                      </FormItem>
                    )}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Error Display */}
          {submissionError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mt-6 p-4 bg-red-50 border border-red-200 rounded-lg'
            >
              <p className='text-red-700 text-sm font-medium'>
                {submissionError}
              </p>
            </motion.div>
          )}

          {/* Email Check Error Display */}
          {emailCheckError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mt-6 p-4 bg-red-50 border border-red-200 rounded-lg'
            >
              <p className='text-red-700 text-sm font-medium'>
                {emailCheckError}
              </p>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className='flex justify-between pt-8'>
            <Button
              type='button'
              onClick={prevStep}
              variant='ghost'
              disabled={currentStep === 1}
              className='font-serif text-lg text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                type='button'
                onClick={nextStep}
                disabled={isCheckingEmail}
                className='font-serif text-lg px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl'
              >
                {isCheckingEmail ? 'Checking...' : 'Continue'}
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            ) : (
              <Button
                type='submit'
                disabled={
                  isSubmitted || isPending || form.formState.isSubmitting
                }
                className='font-serif text-lg px-8 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl'
              >
                {isPending || form.formState.isSubmitting ? (
                  <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin' />
                    {isPending ? 'Processing...' : 'Submitting...'}
                  </div>
                ) : isSubmitted ? (
                  <>
                    Submitted
                    <Check className='w-5 h-5 ml-2' />
                  </>
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

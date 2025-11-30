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
  investorType: z.string().min(1, 'Please select an investor type'),
  // Angel investor fields
  personalLinkedIn: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
  // Institutional investor fields
  companyName: z.string().optional(),
  title: z.string().optional(),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  companyLinkedIn: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
  investmentFocus: z
    .array(z.string())
    .min(1, 'Please select at least one investment focus'),
  otherFocus: z.string().optional(),
  ticketSize: z.string().min(1, 'Please select a ticket size'),
  targetGeography: z
    .array(z.string())
    .min(1, 'Please select at least one target geography'),
  otherGeography: z.string().optional(),
  referralSource: z.string().min(1, 'Please select a referral source'),
  otherSource: z.string().optional(),
}).superRefine((data, ctx) => {
  // Validate institutional investor fields
  const institutionalTypes = ['Venture Capital', 'Corporate VC', 'Private Equity', 'Accelerator/Incubator', 'Family Office', 'Institutional Investor', 'Syndicate']

  if (institutionalTypes.includes(data.investorType)) {
    if (!data.companyName || data.companyName.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Company/Firm name is required',
        path: ['companyName'],
      })
    }
    if (!data.title || data.title.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Title is required',
        path: ['title'],
      })
    }
  }
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
      investorType: '',
      personalLinkedIn: '',
      companyName: '',
      title: '',
      website: '',
      companyLinkedIn: '',
      investmentFocus: [],
      otherFocus: '',
      ticketSize: '',
      targetGeography: [],
      otherGeography: '',
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

  const investorTypeOptions = [
    'Angel Investor',
    'Venture Capital',
    'Corporate VC',
    'Family Office',
    'Private Equity',
    'Accelerator/Incubator',
    'Institutional Investor',
    'Syndicate',
  ]

  const geographyOptions = [
    'North America',
    'Europe',
    'MENA (Middle East & North Africa)',
    'Asia-Pacific',
    'Latin America',
    'Sub-Saharan Africa',
    'Global',
    'Other (more specific)',
  ]

  const referralOptions = [
    'Referral',
    'LinkedIn',
    'Facebook',
    'Twitter',
    'Article',
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

      // Skip step 2 for angel investors (go from step 1 to step 3)
      const isAngelInvestor = form.getValues('investorType') === 'Angel Investor'
      const nextStepNumber = currentStep === 1 && isAngelInvestor ? 3 : currentStep + 1

      setCurrentStep(nextStepNumber)

      // Track step progression
      trackFormStep('investor', nextStepNumber)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      // Skip step 2 for angel investors when going back (go from step 3 to step 1)
      const isAngelInvestor = form.getValues('investorType') === 'Angel Investor'
      const prevStepNumber = currentStep === 3 && isAngelInvestor ? 1 : currentStep - 1

      setCurrentStep(prevStepNumber)
    }
  }

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'workEmail', 'investorType']
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
  const watchedInvestorType = form.watch('investorType')

  const isInstitutionalInvestor = watchedInvestorType && !['Angel Investor'].includes(watchedInvestorType)

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  }

  return (
    <div className='max-w-2xl mx-auto px-2 sm:px-4'>
      {/* Progress Bar */}
      <div className='mb-8 sm:mb-12'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-xs sm:text-sm text-gray-400'>
            Step {currentStep} of {totalSteps}
          </span>
          <span className='text-xs sm:text-sm text-gray-400'>
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
                <div className='text-center mb-8 sm:mb-12'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                    Let's start with the basics
                  </h2>
                  <p className='text-base sm:text-lg text-gray-300'>
                    Tell us about yourself
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='fullName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        What's your full name? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Jane Smith'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className=' text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='workEmail'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        What's your work email? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='jane@investmentfirm.com'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className=' text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='investorType'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        What type of investor are you? *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white focus:border-[#a98b5d] rounded-xl'>
                            <SelectValue placeholder='Select investor type' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='bg-[#0a0a0a] border-[#a98b5d]/30'>
                          {investorTypeOptions.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className=' text-white focus:bg-[#a98b5d]/20'
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className=' text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='personalLinkedIn'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        Your LinkedIn profile (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='url'
                          placeholder='https://www.linkedin.com/in/yourprofile'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className=' text-red-400 mt-2' />
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
                {isInstitutionalInvestor ? (
                  <>
                    <div className='text-center mb-8 sm:mb-12'>
                      <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                        About your firm
                      </h2>
                      <p className='text-base sm:text-lg text-gray-300'>
                        Tell us about your organization and role
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name='companyName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-lg sm:text-xl text-white mb-2 sm:mb-3 block'>
                            What's your company/firm name? *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Investment Partners LLC'
                              {...field}
                              className='text-base sm:text-lg h-12 sm:h-14 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                            />
                          </FormControl>
                          <FormMessage className=' text-red-400 mt-2' />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='title'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-lg sm:text-xl text-white mb-2 sm:mb-3 block'>
                            What's your title? *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Partner, Investment Director, etc.'
                              {...field}
                              className='text-base sm:text-lg h-12 sm:h-14 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                            />
                          </FormControl>
                          <FormMessage className=' text-red-400 mt-2' />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='website'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-lg sm:text-xl text-white mb-2 sm:mb-3 block'>
                            Company website (optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type='url'
                              placeholder='https://www.yourfirm.com'
                              {...field}
                              className='text-base sm:text-lg h-12 sm:h-14 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                            />
                          </FormControl>
                          <FormMessage className=' text-red-400 mt-2' />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='companyLinkedIn'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-lg sm:text-xl text-white mb-2 sm:mb-3 block'>
                            Company LinkedIn page (optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type='url'
                              placeholder='https://www.linkedin.com/company/yourfirm'
                              {...field}
                              className='text-base sm:text-lg h-12 sm:h-14 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                            />
                          </FormControl>
                          <FormMessage className=' text-red-400 mt-2' />
                        </FormItem>
                      )}
                    />
                  </>
                ) : (
                  <div className='text-center py-12'>
                    <h2 className=' text-3xl font-bold text-white mb-4'>
                      Ready to continue
                    </h2>
                    <p className=' text-lg text-gray-300'>
                      Click Continue to proceed to investment preferences
                    </p>
                  </div>
                )}
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
                <div className='text-center mb-8 sm:mb-12'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                    Investment preferences
                  </h2>
                  <p className='text-base sm:text-lg text-gray-300'>
                    What sectors and stages do you focus on?
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='investmentFocus'
                  render={() => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-3 sm:mb-4 block'>
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
                              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${checked
                                ? 'border-[#a98b5d] bg-[#a98b5d]/20 text-[#a98b5d]'
                                : 'border-gray-600 bg-[#0a0a0a]/30 text-gray-300'
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
                                className={`w-6 h-6 rounded-full flex items-center justify-center ${checked
                                  ? 'bg-[#a98b5d] text-black'
                                  : 'bg-transparent border border-gray-500'
                                  }`}
                              >
                                {checked && <Check className='w-4 h-4' />}
                              </div>
                              <span className='text-base sm:text-lg'>
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
                                  className='text-base sm:text-lg h-10 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                      <FormMessage className=' text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='ticketSize'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        Typical investment stage & ticket size? *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white focus:border-[#a98b5d] rounded-xl'>
                            <SelectValue placeholder='Select ticket size' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='bg-[#0a0a0a] border-[#a98b5d]/30 '>
                          {ticketSizeOptions.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className='text-white focus:bg-[#a98b5d]/20 '
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className=' text-red-400 mt-2' />
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
                <div className='text-center mb-8 sm:mb-12'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                    Final details
                  </h2>
                  <p className='text-base sm:text-lg text-gray-300'>
                    Geography and how you found us
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name='targetGeography'
                  render={({ fieldState }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-3 sm:mb-4 block'>
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
                              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${checked
                                ? 'border-[#a98b5d] bg-[#a98b5d]/20 text-[#a98b5d]'
                                : 'border-gray-600 bg-[#0a0a0a]/30 text-gray-300'
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
                                className={`w-6 h-6 rounded-full flex items-center justify-center ${checked
                                  ? 'bg-[#a98b5d] text-black'
                                  : 'bg-transparent border border-gray-500'
                                  }`}
                              >
                                {checked && <Check className='w-4 h-4' />}
                              </div>
                              <span className='text-base sm:text-lg'>
                                {option}
                              </span>
                            </motion.label>
                          )
                        })}
                      </div>
                      {watchedTargetGeography?.includes('Other (more specific)') && (
                        <FormField
                          control={form.control}
                          name='otherGeography'
                          render={({ field }) => (
                            <FormItem className='mt-4'>
                              <FormLabel className='text-lg text-white mb-3 block'>
                                Please specify your target geography
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder='Please specify your target geography'
                                  {...field}
                                  className='text-base sm:text-lg h-10 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                                />
                              </FormControl>
                              <FormMessage className='text-red-400 mt-2' />
                            </FormItem>
                          )}
                        />
                      )}
                      {fieldState.isTouched && <FormMessage className=' text-red-400 mt-2' />}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='referralSource'
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        How did you hear about us? *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white focus:border-[#a98b5d] rounded-xl'>
                            <SelectValue placeholder='Select referral source' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='bg-[#0a0a0a] border-[#a98b5d]/30 '>
                          {referralOptions.map((option) => (
                            <SelectItem
                              key={option}
                              value={option}
                              className='text-white focus:bg-[#a98b5d]/20 '
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.isTouched && <FormMessage className=' text-red-400 mt-2' />}
                    </FormItem>
                  )}
                />

                {watchedReferralSource === 'Other' && (
                  <FormField
                    control={form.control}
                    name='otherSource'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=' text-lg text-white mb-3 block'>
                          Please specify how you heard about us
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Please specify your referral source'
                            {...field}
                            className='text-base sm:text-lg h-10 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                          />
                        </FormControl>
                        <FormMessage className=' text-red-400 mt-2' />
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
          <div className='flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-0 pt-6 sm:pt-8'>
            <Button
              type='button'
              onClick={prevStep}
              variant='ghost'
              disabled={currentStep === 1}
              className='text-base sm:text-lg text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed w-full sm:w-auto'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                type='button'
                onClick={nextStep}
                disabled={isCheckingEmail}
                className='text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl w-full sm:w-auto'
              >
                {isCheckingEmail ? 'Checking...' : 'Continue'}
                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 ml-2' />
              </Button>
            ) : (
              <Button
                type='submit'
                disabled={
                  isSubmitted || isPending || form.formState.isSubmitting
                }
                className='text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl w-full sm:w-auto'
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

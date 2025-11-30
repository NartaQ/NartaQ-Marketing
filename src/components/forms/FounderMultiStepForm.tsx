'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, ChevronsUpDown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitFounderApplication, checkExistingFounderApplication } from '@/app/actions/founder-application'
import { trackFormStart, trackFormStep, trackFormSubmit, trackFormComplete, trackFormError, trackCTAClick, identifyUser } from '@/lib/analytics/unified-tracker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
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
  workEmail: z.email('Please enter a valid email address'),
  founderLinkedIn: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
  companyName: z.string().min(1, 'Company name is required'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  companyLinkedIn: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
  sector: z.array(z.string()).min(1, 'Please select at least one sector'),
  otherSector: z.string().optional(),
  fundingStage: z.string().min(1, 'Please select a funding stage'),
  location: z.string().min(1, 'Please select a location').refine(
    (val) => [
      'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
      'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
      'Bangladesh', 'Barbados', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
      'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
      'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic',
      'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia',
      'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
      'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
      'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
      'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
      'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq',
      'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
      'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
      'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
      'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
      'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
      'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua',
      'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama',
      'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
      'Romania', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
      'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
      'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
      'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea',
      'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
      'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga',
      'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda',
      'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay',
      'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
    ].includes(val),
    'Please select a valid country from the list'
  ),
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

export default function FounderMultiStepForm({
  onSubmissionSuccess,
}: FounderMultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [submissionError, setSubmissionError] = useState<string>('')
  const [emailCheckError, setEmailCheckError] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCheckingEmail, setIsCheckingEmail] = useState(false)
  const [openLocationPopover, setOpenLocationPopover] = useState(false)
  const totalSteps = 4

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      founderLinkedIn: '',
      companyName: '',
      website: '',
      companyLinkedIn: '',
      sector: [],
      otherSector: '',
      fundingStage: '',
      location: '',
      shortPitch: '',
      pitchDeckUrl: '',
    },
  })

  // Track form initialization
  useEffect(() => {
    trackFormStart('founder')
  }, [])

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
    'Pre-Seed',
    'Seed',
    'Series A',
    'Series B+',
  ]

  const locationOptions = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ]

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
          const existingCheck = await checkExistingFounderApplication(formData.workEmail)

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
        `founder_form_step_${currentStep}`,
        undefined,
        'primary'
      )

      setCurrentStep(currentStep + 1)

      // Track step progression
      trackFormStep('founder', currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      // Track CTA click for previous button
      trackCTAClick(
        'Previous',
        'button',
        `founder_form_step_${currentStep}`,
        undefined,
        'secondary'
      )

      setCurrentStep(currentStep - 1)

      // Track step regression
      trackFormStep('founder', currentStep - 1, { action: 'back' })
    }
  }

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'workEmail']
      case 2:
        return ['companyName']
      case 3:
        return ['sector', 'fundingStage', 'location']
      case 4:
        return ['shortPitch']
      default:
        return []
    }
  }

  const onSubmit = async (data: FormData) => {
    setSubmissionError('')

    // Track form submission start
    trackFormSubmit('founder', {
      sector: data.sector,
      fundingStage: data.fundingStage,
      location: data.location,
      companyName: data.companyName,
      email: data.workEmail // Add email for LinkedIn enhanced matching
    })

    try {
      const result = await submitFounderApplication(data)

      if (result.success) {
        setIsSubmitted(true)
        onSubmissionSuccess()

        // Track successful submission
        trackFormComplete('founder', "", {
          email: data.workEmail // Add email for LinkedIn enhanced matching
        })
      } else {
        console.error('Submission failed:', result.error)
        setSubmissionError(
          result.message || result.error || 'Failed to submit application'
        )

        // Track submission error
        trackFormError('founder', result.error || 'Unknown error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmissionError('An unexpected error occurred. Please try again.')

      // Track unexpected error
      trackFormError('founder', String(error))
    }
  }

  const watchedSectors = form.watch('sector')
  const watchedPitch = form.watch('shortPitch')


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
              <div key='step1' className='space-y-8'>
                <div className='text-center mb-8 sm:mb-12'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                    Let's start with the basics
                  </h2>
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
                          placeholder='John Doe'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
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
                          placeholder='founder@company.com'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='founderLinkedIn'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        Your LinkedIn profile
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='url'
                          placeholder='https://www.linkedin.com/in/yourprofile'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 2: Company Information */}
            {currentStep === 2 && (
              <div key='step2' className='space-y-8'>
                <div className='text-center mb-8 sm:mb-12'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                    Now about your company
                  </h2>
                </div>

                <FormField
                  control={form.control}
                  name='companyName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        What's your company name? *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Acme Inc.'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='website'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm sm:text-base text-white mb-2 block'>
                        What's your company website?
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='url'
                          placeholder='https://www.yourcompany.com'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='companyLinkedIn'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        Company LinkedIn page
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='url'
                          placeholder='https://www.linkedin.com/company/yourcompany'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 3: Business Details */}
            {currentStep === 3 && (
              <div key='step3' className='space-y-8'>
                <div className='text-center mb-8 sm:mb-12'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                    Business specifics
                  </h2>
                </div>

                <FormField
                  control={form.control}
                  name='sector'
                  render={() => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-3 sm:mb-4 block'>
                        What sector is your company in? *
                      </FormLabel>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {sectorOptions.map((option) => {
                          const checked = watchedSectors?.includes(option)
                          return (
                            <label
                              key={option}
                              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${checked
                                ? 'border-[#a98b5d] bg-[#a98b5d]/20 text-[#a98b5d]'
                                : 'border-gray-600 bg-[#0a0a0a]/30 text-gray-300'
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
                            </label>
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
                                  className='text-base sm:text-lg h-10 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      )}
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                  <FormField
                    control={form.control}
                    name='fundingStage'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                          Current funding stage? *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white focus:border-[#a98b5d] rounded-xl'>
                              <SelectValue placeholder='Select stage' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='bg-[#0a0a0a] border-[#a98b5d]/30 '>
                            {fundingStageOptions.map((option) => (
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
                        <FormMessage className='text-red-400 mt-2' />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='location'
                    render={({ field }) => (
                      <FormItem className='flex flex-col'>
                        <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                          Primary location? *
                        </FormLabel>
                        <Popover open={openLocationPopover} onOpenChange={setOpenLocationPopover}>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant='outline'
                                role='combobox'
                                className={cn(
                                  'text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white justify-between hover:text-white rounded-xl',
                                  !field.value && 'text-gray-500'
                                )}
                              >
                                {field.value || 'Select your country'}
                                <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className='w-full p-0 bg-[#0a0a0a] border-[#a98b5d]/30' align='start'>
                            <Command className='bg-[#0a0a0a]'>
                              <CommandInput
                                placeholder='Search country...'
                                className='h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white'
                              />
                              <CommandList className='max-h-[300px]'>
                                <CommandEmpty className='text-gray-400 py-6 text-center'>
                                  No country found.
                                </CommandEmpty>
                                <CommandGroup>
                                  {locationOptions.map((country) => (
                                    <CommandItem
                                      key={country}
                                      value={country}
                                      onSelect={() => {
                                        form.setValue('location', country)
                                        setOpenLocationPopover(false)
                                      }}
                                      className='text-white cursor-pointer'
                                    >
                                      <Check
                                        className={cn(
                                          'mr-2 h-4 w-4',
                                          field.value === country ? 'opacity-100' : 'opacity-0'
                                        )}
                                      />
                                      {country}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormMessage className='text-red-400 mt-2' />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Pitch */}
            {currentStep === 4 && (
              <div key='step4' className='space-y-8'>
                <div className='text-center mb-8 sm:mb-12'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4'>
                    Tell us about your vision
                  </h2>
                </div>

                <FormField
                  control={form.control}
                  name='shortPitch'
                  render={({ field, formState }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        Describe your company in 1-2 sentences *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='We help businesses automate their customer service using AI, reducing response time by 80% while improving customer satisfaction...'
                          rows={5}
                          className='text-sm sm:text-base bg-[#0a0a0a]/50 border-[#a98b5d]/30 placeholder:text-white/50  focus:border-[#a98b5d] rounded-xl resize-none min-h-[100px] sm:min-h-[120px]'
                          {...field}
                        />
                      </FormControl>
                      <div className='flex justify-between items-center mt-2'>
                        <FormMessage className='text-red-400' />
                        <span className='text-gray-400 text-sm'>
                          {watchedPitch?.length || 0}/300 characters
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='pitchDeckUrl'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-base sm:text-lg text-white mb-2 block'>
                        Pitch deck URL
                      </FormLabel>
                      <FormControl>
                        <Input
                          type='url'
                          placeholder='Your pitch deck link'
                          {...field}
                          className='text-sm sm:text-base h-11 sm:h-12 bg-[#0a0a0a]/50 border-[#a98b5d]/30 text-white placeholder-gray-500 focus:border-[#a98b5d] rounded-xl'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 mt-2' />
                    </FormItem>
                  )}
                />

                {/* Data Processing Disclaimer */}
                <div className='mt-6 sm:mt-8 p-4 sm:p-6 bg-[#0a0a0a]/20 border border-[#a98b5d]/30 rounded-xl'>
                  <p className='text-xs sm:text-sm text-gray-300 leading-relaxed'>
                    By submitting this application, you agree to our processing
                    of your personal data in accordance with our{' '}
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
                    . We will use this information to evaluate your application
                    and communicate with you about potential opportunities.
                  </p>
                </div>
              </div>
            )}
          </AnimatePresence>

          {/* Error Display */}
          {submissionError && (
            <div className='mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl'>
              <p className='text-red-400 text-center'>
                {submissionError}
              </p>
            </div>
          )}

          {/* Email Check Error Display */}
          {emailCheckError && (
            <div className='mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl'>
              <p className='text-red-400 text-center'>
                {emailCheckError}
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className='flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-0 pt-6 sm:pt-8'>
            <Button
              type='button'
              onClick={prevStep}
              variant='ghost'
              disabled={currentStep === 1}
              className='text-base sm:text-lg text-gray-100 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed w-full sm:w-auto'
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
                disabled={form.formState.isSubmitting || isSubmitted}
                onClick={() => {
                  // Track submit button CTA click
                  trackCTAClick(
                    'Submit Application',
                    'button',
                    'founder_form_final_step',
                    '/apply/founder',
                    'primary'
                  )
                }}
                className='text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl w-full sm:w-auto'
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

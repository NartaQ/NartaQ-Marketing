'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
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
import {
  submitInvestorApplication,
  type InvestorApplicationData,
} from '@/app/actions/investor-application'
import { Separator } from '@/components/ui/separator'

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

export default function InvestorForm({
  onSubmitted,
}: {
  onSubmitted: () => void
}) {
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

  const onSubmit = async (data: FormData) => {
    try {
      const result = await submitInvestorApplication(data)
      if (result.success) {
        onSubmitted()
      } else {
        console.error('Submission failed:', result.error)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const watchedInvestmentFocus = form.watch('investmentFocus')
  const watchedTargetGeography = form.watch('targetGeography')
  const watchedReferralSource = form.watch('referralSource')

  return (
    <div className='w-full max-w-5xl mx-auto px-4 py-12'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/40 border border-[#a98b5d]/10 rounded-2xl p-8 shadow-lg'
        >
          {/* Full Name */}
          <div className='col-span-1 md:col-span-1'>
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
                      className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Work Email */}
          <div className='col-span-1 md:col-span-1'>
            <FormField
              control={form.control}
              name='workEmail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>Work Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='your.email@company.com'
                      {...field}
                      className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Company Name */}
          <div className='col-span-1 md:col-span-1'>
            <FormField
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    Company / Firm Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Your company or firm name'
                      {...field}
                      className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Title */}
          <div className='col-span-1 md:col-span-1'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>Your Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g., Partner, Investment Director, etc.'
                      {...field}
                      className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Investment Focus - full width */}
          <div className='col-span-1 md:col-span-2'>
            <FormField
              control={form.control}
              name='investmentFocus'
              render={() => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    What sectors do you invest in?
                  </FormLabel>
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                    {investmentFocusOptions.map((option) => {
                      const checked = watchedInvestmentFocus?.includes(option)
                      return (
                        <FormField
                          key={option}
                          control={form.control}
                          name='investmentFocus'
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
                              className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
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
          </div>

          {/* Ticket Size */}
          <div className='col-span-1 md:col-span-1'>
            <FormField
              control={form.control}
              name='ticketSize'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    Typical Investment Stage & Ticket Size
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] focus:border-[#a98b5d]'>
                        <SelectValue placeholder='Select ticket size' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='bg-black border-[#a98b5d]/30'>
                      {ticketSizeOptions.map((option) => (
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
          </div>

          {/* Referral Source */}
          <div className='col-span-1 md:col-span-1'>
            <FormField
              control={form.control}
              name='referralSource'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    How did you hear about us?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] focus:border-[#a98b5d]'>
                        <SelectValue placeholder='Select referral source' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='bg-black border-[#a98b5d]/30'>
                      {referralOptions.map((option) => (
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
          </div>

          {/* Other referral source */}
          {watchedReferralSource === 'Other' && (
            <div className='col-span-1 md:col-span-2'>
              <FormField
                control={form.control}
                name='otherSource'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-[#dcd7ce]'>
                      Please specify how you heard about us
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Please specify your referral source'
                        {...field}
                        className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Target Geography - full width */}
          <div className='col-span-1 md:col-span-2'>
            <FormField
              control={form.control}
              name='targetGeography'
              render={() => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    What is your target geography?
                  </FormLabel>
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                    {geographyOptions.map((option) => {
                      const checked = watchedTargetGeography?.includes(option)
                      return (
                        <FormField
                          key={option}
                          control={form.control}
                          name='targetGeography'
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button - full width */}
          <div className='col-span-1 md:col-span-2 pt-4'>
            <Button
              type='submit'
              disabled={form.formState.isSubmitting}
              className='mx-auto inline-flex px-8 py-3 text-base bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
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
          </div>
        </form>
      </Form>
    </div>
  )
}

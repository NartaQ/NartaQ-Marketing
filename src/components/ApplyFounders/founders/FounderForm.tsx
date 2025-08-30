'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { submitFounderApplication } from '@/app/actions/founder-application'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

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

export default function FounderForm({
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

  const onSubmit = async (data: FormData) => {
    try {
      const result = await submitFounderApplication(data)
      if (result.success) {
        onSubmitted()
      } else {
        console.error('Submission failed:', result.error)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const watchedSectors = form.watch('sector')
  const watchedPitch = form.watch('shortPitch')

  return (
    <div className='w-full max-w-5xl mx-auto px-4 py-12'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/40 border border-[#a98b5d]/10 rounded-2xl p-8 shadow-lg'
        >
          {/* Two-column responsive layout: small = single column, md+ = two columns */}

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
                      placeholder='founder@company.com'
                      {...field}
                      className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='col-span-1 md:col-span-1'>
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
                      className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='col-span-1 md:col-span-1'>
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
                      className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Sector - full width */}
          <div className='col-span-1 md:col-span-2'>
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
                          render={() => (
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
                                      handleSectorChange(option, val as boolean)
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

          <div className='col-span-1 md:col-span-1'>
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
                      <SelectTrigger className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] focus:border-[#a98b5d]'>
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
          </div>

          <div className='col-span-1 md:col-span-1'>
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
                      <SelectTrigger className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] focus:border-[#a98b5d]'>
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
          </div>

          {/* Short Pitch - full width */}
          <div className='col-span-1 md:col-span-2'>
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
                      className='w-full bg-black/50 border-[#a98b5d]/30 text-[#dcd7ce] placeholder-gray-500 focus:border-[#a98b5d] resize-none text-lg py-3 min-h-[160px]'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className='text-right text-gray-400'>
                    {watchedPitch?.length || 0}/300 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Pitch Deck Upload - full width with centered upload box */}
          {/* <div className='col-span-1 md:col-span-2'>
            <FormField
              control={form.control}
              name='pitchDeckUrl'
              render={() => (
                <FormItem>
                  <FormLabel className='text-[#dcd7ce]'>
                    Upload your Pitch Deck (PDF)
                  </FormLabel>
                  <FormDescription className='text-gray-400'>
                    Optional - but highly recommended for a complete application
                  </FormDescription>
                  <FormControl>
                    <div className='border-2 border-dashed border-[#a98b5d]/30 rounded-xl bg-black/20 p-4 flex items-center justify-center'>
                      <div className='w-full max-w-2xl'>
                        <FileUpload onChange={handleFileUpload} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}

          {/* Submit Button - full width */}
          <div className='col-span-1 md:col-span-2'>
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

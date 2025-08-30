'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { subscribeToNewsletter } from '@/app/actions/newsletter'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

interface NewsletterFormProps {
  source?: string
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
  showName?: boolean
  className?: string
}

export default function NewsletterForm({
  source = 'homepage',
  title = 'Stay Updated',
  description = 'Get the latest updates on our launch and exclusive early access to the platform.',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  showName = false,
  className = '',
}: NewsletterFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const result = await subscribeToNewsletter({
        email: data.email,
        name: data.name,
        source,
      })

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(result.error || 'Failed to subscribe')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/5 border border-[#a98b5d]/20 rounded-xl p-6 text-center ${className}`}
      >
        <CheckCircle className='w-12 h-12 text-[#a98b5d] mx-auto mb-4' />
        <h3 className='text-lg font-semibold text-[#dcd7ce] mb-2'>You're All Set!</h3>
        <p className='text-gray-400 text-sm'>
          Thanks for subscribing! You'll be among the first to know when we launch.
        </p>
      </motion.div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className='text-center space-y-2'>
        <h3 className='text-lg font-semibold text-[#dcd7ce]'>{title}</h3>
        <p className='text-gray-400 text-sm'>{description}</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
        {showName && (
          <div>
            <Input
              placeholder='Your name (optional)'
              {...form.register('name')}
              className='w-full'
            />
          </div>
        )}

        <div>
          <Input
            type='email'
            placeholder={placeholder}
            {...form.register('email')}
            className='w-full'
            disabled={status === 'loading'}
          />
          {form.formState.errors.email && (
            <p className='text-red-400 text-xs mt-1'>
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex items-center gap-2 text-red-400 text-sm'
          >
            <AlertCircle className='w-4 h-4' />
            {errorMessage}
          </motion.div>
        )}

        <Button
          type='submit'
          disabled={status === 'loading'}
          className='w-full bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
        >
          {status === 'loading' ? (
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin' />
              Subscribing...
            </div>
          ) : (
            <div className='flex items-center gap-2'>
              <Mail className='w-4 h-4' />
              {buttonText}
            </div>
          )}
        </Button>
      </form>

      <p className='text-xs text-gray-400 text-center'>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}
'use client'
import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus(null)
    setIsLoading(true)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        const errorData = await res.json()
        if (res.status === 409) {
          setStatus('duplicate')
        } else {
          setStatus('error')
        }
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      <div className='bg-[#3e3f44]/80 backdrop-blur-sm border border-[#a98b5d]/30 rounded-2xl p-8 shadow-2xl'>
        <h3 className='text-xl font-semibold text-white mb-6 text-center'>
          Enter your email address
        </h3>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='relative'>
            <input
              type='email'
              required
              placeholder='your@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className='w-full px-4 py-4 bg-[#232428] border border-[#5c5d63] rounded-lg text-white placeholder-[#dcd7ce]/60 focus:outline-none focus:ring-2 focus:ring-[#a98b5d] focus:border-transparent transition-all duration-200 disabled:opacity-50'
            />
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className='w-full bg-[#a98b5d] hover:bg-[#a98b5d]/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#a98b5d]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
          >
            {isLoading ? (
              <div className='flex items-center justify-center space-x-2'>
                <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                <span>Joining...</span>
              </div>
            ) : (
              'Join Waitlist'
            )}
          </button>
        </form>

        {/* Status Messages */}
        {status === 'success' && (
          <div className='mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg'>
            <p className='text-green-400 text-center font-medium'>
              🎉 Thank you for joining! We'll notify you as soon as access is
              available.
            </p>
          </div>
        )}

        {status === 'duplicate' && (
          <div className='mt-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg'>
            <p className='text-yellow-400 text-center font-medium'>
              ✓ You're already on our waitlist! We'll be in touch soon.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className='mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg'>
            <p className='text-red-400 text-center font-medium'>
              ⚠️ Something went wrong. Please try again.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

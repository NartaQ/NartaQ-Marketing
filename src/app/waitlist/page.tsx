'use client'

import { useState } from 'react'
import WaitlistForm from '../../../components/WaitlistForm'
import Particles from '@/components/ui/particles'

export default function WaitlistPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Why are you implementing a waitlist?',
      a: "NartaQ is seeing unprecedented demand. To ensure we can continue to provide the best experience for connecting investors with startups and startups with service providers, we've implemented a waitlist as we fine-tune the platform and prepare for launch.",
    },
    {
      q: 'I joined the waitlist. When will I hear back?',
      a: 'We will start notifying users in batches in the coming weeks as we gradually roll out access to the NartaQ platform. Early supporters will be prioritized.',
    },
    {
      q: 'How can I increase my chances of getting access?',
      a: 'Please join the waitlist on this page. There is currently no process for getting access other than joining this waitlist. Joining multiple times will not speed up the process. We are not using social media messages or other channels as ways to join the waitlist or provide early access.',
    },
    {
      q: 'What can I expect from NartaQ?',
      a: 'NartaQ will be a comprehensive platform designed to facilitate connections between investors seeking opportunities, startups looking for funding, and service providers offering specialized expertise to support startup growth.',
    },
    {
      q: 'When will NartaQ be available?',
      a: 'We are working around the clock to build the best possible platform for our community. We appreciate your patience as we develop and fine-tune NartaQ to provide the most valuable networking and connection experience for everyone.',
    },
  ]

  return (
    <div className='min-h-screen '>
      <main className='flex flex-col items-center justify-center min-h-screen p-4 md:p-8 pt-24 md:pt-28'>
        {/* Hero Section */}
        <div className='max-w-4xl mx-auto text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-white'>
            Thank you for your amazing response to{' '}
            <span className='text-[#a98b5d]'>NartaQ</span>!
          </h1>
          <p className='text-lg md:text-xl text-[#dcd7ce] mb-8 max-w-2xl mx-auto leading-relaxed'>
            NartaQ is seeing unprecedented demand. Join our waitlist and we'll
            notify you as soon as access is available to connect investors with
            startups and startups with service providers.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className='w-full max-w-md mb-16'>
          <WaitlistForm />
        </div>

        {/* FAQ Section */}
        <div className='w-full max-w-4xl'>
          <h2 className='text-2xl md:text-3xl font-bold text-white text-center mb-8'>
            Common Questions
          </h2>

          <div className='space-y-4'>
            {faqs.map((item, i) => (
              <div
                key={i}
                className='bg-[#3e3f44]/50 backdrop-blur-sm border border-[#a98b5d]/20 rounded-2xl overflow-hidden'
              >
                <button
                  className='w-full p-6 text-left flex items-center justify-between group'
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h3 className='text-lg font-medium text-white pr-4 group-hover:text-[#a98b5d] transition-colors duration-300'>
                    {item.q}
                  </h3>
                  <div
                    className={`text-2xl text-[#a98b5d] transition-transform duration-300 ${
                      openFaq === i ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='px-6 pb-6'>
                    <div className='w-full h-px bg-gradient-to-r from-[#a98b5d]/20 via-[#a98b5d]/40 to-[#a98b5d]/20 mb-4'></div>
                    <p className='text-[#dcd7ce] leading-relaxed'>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Particles
          quantityDesktop={350}
          quantityMobile={100}
          ease={80}
          color={'#F7FF9B'}
          refresh
        />
      </main>
    </div>
  )
}

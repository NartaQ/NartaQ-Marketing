'use client'

import { useState } from 'react'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How does AI-powered matching work?',
      a: 'Our algorithm analyzes 200+ data points including market metrics, team experience, business model fit, and investor preferences to create high-probability matches. The more data we process, the smarter it gets.',
    },
    {
      q: 'What makes this different from other platforms?',
      a: 'We\'re building an AI-powered platform that democratizes access to funding. Smart matching, transparent processes, and streamlined execution mean faster, fairer deals for everyone.',
    },
    {
      q: 'How do you verify participants?',
      a: 'Multi-layer verification including KYC, accreditation status, reference checks, and on-chain reputation scoring. All participants must meet strict quality standards before joining the network.',
    },
    {
      q: 'Is this only for specific regions?',
      a: 'No. While we started with specific corridors, the platform is designed to work globally. Any qualified investor or startup can participate, regardless of geography.',
    },
    {
      q: 'How do governance tokens work?',
      a: 'Contribute quality deals, participate in due diligence, or help with platform development to earn tokens. Token holders vote on algorithm improvements, quality standards, and platform evolution.',
    },
    {
      q: 'Who can join the platform?',
      a: 'Accredited investors, institutional VCs, qualified startups, and ecosystem contributors. We maintain high standards but welcome applications from serious participants worldwide.',
    },
  ]

  return (
    <section
      id='faq'
      className='flex w-full flex-col items-center justify-center p-[2%] py-16 sm:py-20 lg:py-24 relative'
    >
      {/* Premium background elements */}
      <div className='absolute inset-0 luxury-texture opacity-20'></div>
      <div className='absolute top-1/5 left-1/4 w-80 h-80 bg-[#a98b5d]/4 rounded-full blur-3xl floating'></div>
      <div className='absolute bottom-1/5 right-1/4 w-96 h-96 bg-[#dcd7ce]/3 rounded-full blur-3xl floating'></div>

      <div className='max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10 reveal-up px-4 sm:px-6 lg:px-8'>
        {/* Premium section header */}
        <div className='space-y-4 sm:space-y-6'>
          <div className='flex justify-center mb-4'>
            <div className='premium-glass px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-[#a98b5d]/20'>
              <span className='text-xs sm:text-sm font-medium text-[#a98b5d] tracking-wider'>
                FREQUENTLY ASKED
              </span>
            </div>
          </div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-light text-[#dcd7ce]'>
            <span className='font-medium text-[#a98b5d] '>Questions</span> &
            Answers
          </h2>

          <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

          <p className='text-lg sm:text-xl text-[#dcd7ce] font-light leading-relaxed max-w-3xl mx-auto'>
            Have questions about the platform? We have detailed answers.
            <br />
            Clear explanations, no technical jargon.
          </p>
        </div>
      </div>

      <div className='max-w-4xl w-full mt-12 sm:mt-16 px-4 reveal-up'>
        <div className='space-y-3 sm:space-y-4'>
          {faqs.map((item, i) => (
            <div
              key={i}
              className='premium-glass rounded-2xl border border-[#a98b5d]/20 overflow-hidden elite-hover'
            >
              <button
                className='w-full p-6 sm:p-8 text-left flex items-center justify-between group'
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h3 className='text-lg sm:text-xl font-medium text-[#dcd7ce] pr-4 group-hover:text-[#a98b5d] transition-colors duration-300'>
                  {item.q}
                </h3>
                <div
                  className={`text-xl sm:text-2xl text-[#a98b5d] transition-transform duration-300 ${
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
                <div className='px-6 sm:px-8 pb-6 sm:pb-8'>
                  <div className='w-full h-px bg-gradient-to-r from-[#a98b5d]/20 via-[#a98b5d]/40 to-[#a98b5d]/20 mb-4 sm:mb-6'></div>
                  <p className='text-[#dcd7ce] leading-relaxed font-light text-base sm:text-lg'>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium bottom element */}
      <div className='mt-20 text-center reveal-up'>
        <p className='text-[#dcd7ce] font-light italic mb-4'>
          &ldquo;Have more questions?&rdquo;
        </p>
        <a
          href='mailto:contact@nartaq.com?subject=Premium%20Inquiry'
          className='premium-glass elite-hover px-8 py-4 rounded-xl border border-[#a98b5d]/30 hover:border-[#a98b5d]/60 transition-all duration-300 inline-block'
        >
          <span className='text-[#a98b5d] font-medium'>
            Contact our concierge team
          </span>
        </a>
      </div>
    </section>
  )
}

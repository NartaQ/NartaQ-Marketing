'use client'

import { useState } from 'react'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How does the DAO work?',
      a: 'Token holders vote on big decisions. Submit deals and earn tokens. Good work gets rewarded.',
    },
    {
      q: 'Why only France-Tunisia?',
      a: 'We know this market well. Strong ties between the countries. Great talent in Tunisia. Focus helps us do better.',
    },
    {
      q: 'How do you check if startups are real?',
      a: 'We verify everything. Check IDs, call references, put key facts on blockchain so nobody can lie.',
    },
    {
      q: 'What makes you different?',
      a: 'We all own it together. We focus on one corridor. Everyone shares the wins.',
    },
    {
      q: 'How do I earn tokens?',
      a: 'Submit good deals. Vote on choices. Help review startups. Quality work gets paid.',
    },
    {
      q: 'Who can join?',
      a: 'Invitation only. Real investors, good startups, trusted partners. We check everyone.',
    },
  ]

  return (
    <section
      id='faq'
      className='flex w-full flex-col items-center justify-center p-[2%] py-20 relative'
    >
      {/* Premium background elements */}
      <div className='absolute inset-0 luxury-texture opacity-20'></div>
      <div className='absolute top-1/5 left-1/4 w-80 h-80 bg-[#a98b5d]/4 rounded-full blur-3xl floating'></div>
      <div className='absolute bottom-1/5 right-1/4 w-96 h-96 bg-[#dcd7ce]/3 rounded-full blur-3xl floating'></div>

      <div className='max-w-6xl mx-auto text-center space-y-8 relative z-10 reveal-up'>
        {/* Premium section header */}
        <div className='space-y-6'>
          <div className='flex justify-center mb-4'>
            <div className='premium-glass px-8 py-3 rounded-full border border-[#a98b5d]/20'>
              <span className='text-sm font-medium text-[#a98b5d] tracking-wider'>
                FREQUENTLY ASKED
              </span>
            </div>
          </div>

          <h2 className='text-4xl md:text-5xl font-light text-[#dcd7ce]'>
            <span className='font-medium text-[#a98b5d] '>Questions</span> &
            Answers
          </h2>

          <div className='w-32 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto'></div>

          <p className='text-xl text-[#dcd7ce] font-light leading-relaxed max-w-3xl mx-auto'>
            You have concerns. We have specific answers.
            <br />
            No fluff, no corporate speak.
          </p>
        </div>
      </div>

      <div className='max-w-4xl w-full mt-16 px-4 reveal-up'>
        <div className='space-y-4'>
          {faqs.map((item, i) => (
            <div
              key={i}
              className='premium-glass rounded-2xl border border-[#a98b5d]/20 overflow-hidden elite-hover'
            >
              <button
                className='w-full p-8 text-left flex items-center justify-between group'
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h3 className='text-xl font-medium text-[#dcd7ce] pr-4 group-hover:text-[#a98b5d] transition-colors duration-300'>
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
                <div className='px-8 pb-8'>
                  <div className='w-full h-px bg-gradient-to-r from-[#a98b5d]/20 via-[#a98b5d]/40 to-[#a98b5d]/20 mb-6'></div>
                  <p className='text-[#dcd7ce] leading-relaxed font-light text-lg'>
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

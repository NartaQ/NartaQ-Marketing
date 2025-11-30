'use client'

import { useState, useRef } from 'react'

import { CheckCircle2, Plus, Minus } from 'lucide-react'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const ref = useRef(null)

  const faqs = [
    {
      question: 'Is this another LinkedIn for startups?',
      answer:
        "No. LinkedIn is a resume. We're a matchmaker. Our AI actually reads your pitch, understands your business model, and finds investors who've funded companies like yours. Then we introduce you. That's it.",
    },
    {
      question: 'Why only 250 spots?',
      answer:
        "Because we're building this WITH you, not FOR you. 250 is small enough that we can actually talk to every founding member. After 250, we go into heads-down build mode for 6 months.",
    },
    {
      question: "What if I apply and don't get in?",
      answer:
        "You'll get in. We're not rejecting people. We're capping at 250 total. First come, first served. When we hit 250, applications close. Period.",
    },
    {
      question: 'Is this only for specific regions?',
      answer:
        "We focus on high-growth corridors like France-Tunisia first. Why? Because the talent is there, but the capital isn't. We prove it works there, then we take it global.",
    },
    {
      question: 'How do governance tokens work?',
      answer:
        "Think of it as a cap table that updates itself. No more emailing lawyers to update a spreadsheet. You get institutional-grade governance from day one, which makes you 10x more attractive to serious investors.",
    },
  ]

  // Generate FAQ structured data for Google's FAQ rich snippets
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className='relative py-16 sm:py-24 lg:py-32  overflow-hidden'>
      {/* SEO: FAQ Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      {/* Background Grid */}
      <div className='absolute inset-0 grid-pattern opacity-20'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div
        ref={ref}
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      >
        {/* Section Header */}
        <div className='text-center mb-16 sm:mb-20'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6'>
            <CheckCircle2 className='w-4 h-4' />
            FREQUENTLY ASKED
          </div>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8'>
            <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Questions & Answers
            </span>
          </h2>

          <p className='text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4'>
            Have questions about the platform? We have detailed answers. Clear
            explanations, no technical jargon.
          </p>
        </div>

        {/* FAQ Items */}
        <div className='max-w-4xl mx-auto space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border border-[#a98b5d]/20 rounded-2xl bg-gradient-to-r from-[#a98b5d]/5 to-transparent overflow-hidden'
            >
              <button
                className='w-full p-6 text-left flex items-center justify-between group hover:bg-[#a98b5d]/5 transition-colors duration-300'
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3 className='text-lg sm:text-xl font-bold text-[#dcd7ce] pr-4 group-hover:text-[#a98b5d] transition-colors duration-300'>
                  {faq.question}
                </h3>
                <div className='text-[#a98b5d] transition-transform duration-300'>
                  {openFaq === index ? (
                    <Minus className='w-5 h-5' />
                  ) : (
                    <Plus className='w-5 h-5' />
                  )}
                </div>
              </button>

              {openFaq === index && (
                <div className='overflow-hidden'>
                  <div className='px-6 pb-6'>
                    <div className='w-full h-px bg-gradient-to-r from-[#a98b5d]/20 via-[#a98b5d]/40 to-[#a98b5d]/20 mb-4' />
                    <p className='text-gray-400 text-lg leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

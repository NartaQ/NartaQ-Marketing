'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle, Search } from 'lucide-react'
import { cn } from '../../lib/utils'
import Link from 'next/link'

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const faqs = [
    {
      category: 'Platform & Technology',
      questions: [
        {
          question: 'Is this another LinkedIn for startups?',
          answer:
            "No. LinkedIn is a resume. We're a matchmaker. Our AI actually reads your pitch, understands your business model, and finds investors who've funded companies like yours. Then we introduce you. That's it.",
        },
        {
          question: 'How does the AI matching work?',
          answer:
            'Our AI engine analyzes multiple data points from both founders and investors—including business models, market focus, investment thesis, risk profiles, and success patterns. Rather than relying on warm introductions, the system creates compatibility scores and suggests high-potential matches based on alignment and mutual benefit.',
        },
        {
          question: 'What stage is the platform currently in?',
          answer:
            "We're currently in the pre-launch development phase, building our founding community of 250 members. We're actively developing the core platform architecture while validating our approach with our early community members.",
        },
      ],
    },
    {
      category: 'For Founders',
      questions: [
        {
          question: 'Why only 250 spots?',
          answer:
            "Because we're building this WITH you, not FOR you. 250 is small enough that we can actually talk to every founding member, get feedback, and build what you need. After 250, we go into heads-down build mode for 6 months.",
        },
        {
          question: "What if I apply and don't get in?",
          answer:
            "You'll get in. We're not rejecting people. We're capping at 250 total. First come, first served. When we hit 250, applications close. Period.",
        },
        {
          question: 'What stage companies are you targeting?',
          answer:
            "We're primarily focused on pre-seed to Series A companies that are seeking their first institutional funding rounds. However, we also welcome earlier stage founders who are preparing for future fundraising and want to build relationships with aligned investors.",
        },
        {
          question: 'Is there a cost for founders to use the platform?',
          answer:
            'During early access, there are no fees for selected founders. Our business model will focus on success-based fees and premium services, ensuring alignment between platform success and founder outcomes.',
        },
      ],
    },
    {
      category: 'For Investors',
      questions: [
        {
          question: 'What types of investors are you looking for?',
          answer:
            "We're seeking angel investors, VCs, and family offices interested in early-stage technology companies, particularly those open to Franco-Tunisian opportunities. We value investors who make decisions based on founder quality and market potential rather than just geographic proximity or warm introductions.",
        },
        {
          question: "What's the minimum investment requirement?",
          answer:
            "There's no minimum investment requirement to join the platform. We welcome investors across the spectrum—from angel investors making $25K+ investments to institutional funds deploying millions. The platform is designed to facilitate connections regardless of check size.",
        },
        {
          question: 'How will deal flow be curated?',
          answer:
            "Our AI system will provide personalized deal flow based on your stated investment thesis, past investment patterns, and sector preferences. Rather than seeing every deal, you'll receive high-signal opportunities that match your specific criteria and investment profile.",
        },
      ],
    },
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I get early access?',
          answer:
            'Visit our Apply page to submit your application as either a founder or investor. We review applications on a rolling basis. First come, first served until we hit 250 members.',
        },
        {
          question: 'When will the platform launch publicly?',
          answer:
            "After the 250-member founding cohort is full, we're going into a 6-month build mode. Public launch will follow that. Founding members get access first.",
        },
        {
          question: "Can I participate if I'm not in France or Tunisia?",
          answer:
            'Absolutely! While our initial focus is the France-Tunisia corridor, we welcome founders and investors globally who are interested in cross-border opportunities or want to be part of building more equitable funding infrastructure.',
        },
        {
          question: "How can I stay updated on NartaQ's progress?",
          answer:
            'Join our newsletter for regular updates on platform development and launch progress. You can also follow us on social media or reach out directly at contact@nartaq.com for specific questions.',
        },
      ],
    },
  ]

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className='min-h-screen bg-[#0a0a0a] text-white'>
      <div className='pt-32 pb-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-16'
          >
            <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
              Questions? We Have Answers.
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto mb-8'>
              Straight answers, no fluff. Here's what you need to know about
              how we're fixing startup funding.
            </p>

            {/* Search Bar */}
            <div className='relative max-w-md mx-auto'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
              <input
                type='text'
                placeholder='Search questions...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-[#a98b5d]/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#a98b5d] transition-colors'
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <div className='space-y-12'>
            {filteredFAQs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className='text-2xl font-bold text-[#a98b5d] mb-8'>
                  {category.category}
                </h2>
                <div className='space-y-4'>
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex
                    const isOpen = openQuestions.includes(globalIndex)

                    return (
                      <div
                        key={questionIndex}
                        className='bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-xl overflow-hidden'
                      >
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className='w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#a98b5d]/5 transition-colors'
                        >
                          <span className='text-lg font-semibold text-[#dcd7ce] pr-4'>
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 text-[#a98b5d] transition-transform flex-shrink-0',
                              isOpen && 'rotate-180'
                            )}
                          />
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='px-6 pb-5'
                          >
                            <div className='text-gray-400 leading-relaxed'>
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='mt-20 text-center'
          >
            <div className='bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-[#dcd7ce] mb-4'>
                Still Have Questions?
              </h3>
              <p className='text-gray-400 mb-6'>
                Can't find what you're looking for? We're here to help.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  title='Request Data Access'
                  href='mailto:contact@nartaq.com'
                  className='px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300'
                >
                  Contact Us
                </Link>
                <Link
                  title='Get Early Access'
                  href='/apply'
                  className='px-6 py-3 border border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl hover:bg-[#a98b5d]/10 transition-all duration-300'
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

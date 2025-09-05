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
          question: 'What exactly is NartaQ building?',
          answer:
            "NartaQ is building an AI-powered platform that democratizes access to startup funding by connecting founders with aligned investors based on merit, not networks. We're starting with the France-Tunisia corridor and will expand globally. The platform will use artificial intelligence to match founders and investors, streamline due diligence, and automate deal execution processes.",
        },
        {
          question: 'How does the AI matching work?',
          answer:
            'Our AI engine will analyze multiple data points from both founders and investors—including business models, market focus, investment thesis, risk profiles, and success patterns. Rather than relying on warm introductions, the system creates compatibility scores and suggests high-potential matches based on alignment and mutual benefit.',
        },
        {
          question: 'What stage is the platform currently in?',
          answer:
            "We're currently in the pre-launch development phase, building our founding community of 1,000+ participants (founders, investors, and ecosystem partners). We're actively developing the core platform architecture while validating our approach with early community members.",
        },
        {
          question: 'How is this different from existing VC platforms?',
          answer:
            'Traditional platforms focus on deal flow aggregation within existing networks. NartaQ is building infrastructure to create new connections based on merit and compatibility, specifically targeting underserved geographic corridors where exceptional founders lack access to capital due to network limitations.',
        },
      ],
    },
    {
      category: 'For Founders',
      questions: [
        {
          question: 'Who can apply to join as a founder?',
          answer:
            "We're looking for exceptional founders building scalable technology companies, particularly those in the France-Tunisia corridor or with connections to these markets. While we welcome founders from all backgrounds, our initial focus is on startups that can benefit from Franco-Tunisian strategic partnerships.",
        },
        {
          question: 'What stage companies are you targeting?',
          answer:
            "We're primarily focused on pre-seed to Series A companies that are seeking their first institutional funding rounds. However, we also welcome earlier stage founders who are preparing for future fundraising and want to build relationships with aligned investors.",
        },
        {
          question: 'What does the application process look like?',
          answer:
            "The application process involves submitting your company information, founding team details, and business overview. Selected founders will be invited to join our founding cohort, where you'll get early access to the platform, direct feedback from investors, and help shaping our product development.",
        },
        {
          question: 'Is there a cost for founders to use the platform?',
          answer:
            'During our founding cohort phase, there are no fees for selected founders. Our business model will focus on success-based fees and premium services, ensuring alignment between platform success and founder outcomes.',
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
        {
          question: 'What due diligence support will you provide?',
          answer:
            "We're developing tools to streamline due diligence including verified founder profiles, standardized data rooms, automated compliance checks, and peer investor insights. The goal is to reduce time-to-decision while maintaining high-quality deal evaluation.",
        },
      ],
    },
    {
      category: 'The Team & Company',
      questions: [
        {
          question: 'Who are the founders of NartaQ?',
          answer:
            'NartaQ is founded by Riadh Jouini (CEO) and Jesser Bedoui (CTO). Riadh brings deep Franco-Tunisian business experience and strategic partnerships expertise. Jesser is a full-stack developer and security specialist with extensive fintech and blockchain experience. Together, they combine business development, technical execution, and corridor-specific knowledge.',
        },
        {
          question: 'Why focus on the France-Tunisia corridor specifically?',
          answer:
            'The France-Tunisia corridor offers exceptional founder talent with cultural and linguistic alignment to European markets, but systematic underinvestment due to network limitations. This creates a perfect testing ground for our merit-based approach while addressing a specific market inefficiency with clear expansion potential.',
        },
        {
          question: "What's the long-term vision for NartaQ?",
          answer:
            'Our vision is to democratize startup funding globally by proving that merit-based, AI-powered matching can outperform traditional network-dependent VC processes. Starting with France-Tunisia, we plan to expand to other high-potential corridors worldwide, ultimately building the infrastructure for truly equitable venture capital.',
        },
        {
          question: 'Are you raising funding for NartaQ?',
          answer:
            'We are currently in pre-seed stage and building our founding community before formal fundraising. Interested investors can join our founding cohort to get early access and help shape our development. Formal fundraising details will be shared with community members first.',
        },
      ],
    },
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I join the founding cohort?',
          answer:
            "You can apply through our founder or investor application pages. We're selectively building a community of 1,000+ engaged participants who will help us validate our approach and provide feedback during development. Selected members get early platform access and direct input on product development.",
        },
        {
          question: 'When will the platform launch publicly?',
          answer:
            "We're currently focused on building and validating with our founding cohort. Public launch timing will depend on development progress and community feedback. Founding cohort members will get advance notice and early access to all platform features.",
        },
        {
          question: "Can I participate if I'm not in France or Tunisia?",
          answer:
            'Absolutely! While our initial focus is the France-Tunisia corridor, we welcome founders and investors globally who are interested in cross-border opportunities or want to be part of building more equitable funding infrastructure.',
        },
        {
          question: "How can I stay updated on NartaQ's progress?",
          answer:
            'Join our newsletter for regular updates on platform development, founding cohort progress, and early access opportunities. You can also follow us on social media or reach out directly at contact@nartaq.com for specific questions.',
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
    <div className='min-h-screen bg-black text-white'>
      <div className='pt-32 pb-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-16'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-8'>
              <HelpCircle className='w-4 h-4' />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              <span className='text-[#dcd7ce]'>Got</span>
              <br />
              <span className='bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent'>
                Questions?
              </span>
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto mb-8'>
              Find answers to common questions about our AI-powered investment platform, 
              the application process for founders and investors, our technology approach, 
              and our vision for democratizing startup funding through intelligent matching 
              and automated due diligence processes.
            </p>
            
            <div className='bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/5 border border-[#a98b5d]/20 rounded-xl p-6 max-w-2xl mx-auto mb-8'>
              <p className='text-gray-300 text-base leading-relaxed'>
                NartaQ is transforming how startups connect with investors by replacing 
                traditional network-based introductions with merit-driven AI matching. 
                Our platform analyzes business models, market opportunities, founder 
                backgrounds, and investor preferences to create optimal partnerships 
                that drive successful funding outcomes.
              </p>
            </div>

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
                  title='Join Founding Cohort'
                  href='/apply'
                  className='px-6 py-3 border border-[#a98b5d]/50 text-[#dcd7ce] font-semibold rounded-xl hover:bg-[#a98b5d]/10 transition-all duration-300'
                >
                  Join Founding Cohort
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

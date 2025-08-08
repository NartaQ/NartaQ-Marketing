'use client'

import { useState } from 'react'
import { Card, CardContent } from '@investi/ui'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is Investi?',
    answer:
      'Investi is a comprehensive fundraising platform that connects startups with investors. We provide tools for investor discovery, outreach, deck tracking, and fundraising management - all in one place.',
  },
  {
    question: 'Why do founders raise with Investi?',
    answer:
      'Founders choose Investi because we offer the most comprehensive investor database, proven outreach templates that achieve 40% reply rates, automated follow-ups, and powerful analytics to track their fundraising progress.',
  },
  {
    question: 'Who is Investi for?',
    answer:
      "Investi is designed for startup founders at any stage - from pre-seed to Series B and beyond. Whether you're a first-time founder or a serial entrepreneur, our platform adapts to your needs.",
  },
  {
    question: 'Is Investi free to use?',
    answer:
      "Yes! 90% of Investi's features are completely free forever. This includes unlimited investor search, deck sharing, analytics, CRM, and team collaboration. We also offer a Premium plan for advanced features.",
  },
  {
    question: 'How do I pitch investors on Investi?',
    answer:
      'You can reach out to investors through our platform with one-click outreach, request introductions through your network, or get discovered through our deal flow. We provide templates and guidance for each approach.',
  },
  {
    question: 'Can I raise pre-seed or seed funding on Investi?',
    answer:
      'Absolutely! Investi has investors across all stages, from angel investors writing $25k checks to VCs leading $10M+ rounds. Our filters help you find the right investors for your stage and industry.',
  },
  {
    question: 'What startups have raised capital with Investi?',
    answer:
      'Over 22,000 founders have used Investi to raise more than $1 billion in funding. This includes companies like Mobly ($2.5M), HealthTech Pro ($1.2M), and hundreds of other successful startups.',
  },
  {
    question: 'Who is behind Investi?',
    answer:
      'Investi was founded by experienced entrepreneurs and investors who understand the challenges of fundraising. Our team combines deep industry knowledge with cutting-edge technology to solve real problems.',
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <Card className='border-0 bg-gray-900 shadow-md hover:shadow-lg transition-shadow'>
      <CardContent className='p-0'>
        <button
          onClick={onToggle}
          className='w-full text-left p-6 flex items-center justify-between hover:bg-gray-800 transition-colors'
        >
          <h3 className='text-lg font-semibold text-white pr-8'>{question}</h3>
          {isOpen ? (
            <ChevronUp className='h-5 w-5 text-gray-400 flex-shrink-0' />
          ) : (
            <ChevronDown className='h-5 w-5 text-gray-400 flex-shrink-0' />
          )}
        </button>
        {isOpen && (
          <div className='px-6 pb-6'>
            <p className='text-gray-300 leading-relaxed'>{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-800'>
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center mb-10 animate-on-scroll'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'>
            Frequently Asked{' '}
            <span className='text-gradient-primary'>
              Questions
            </span>
          </h2>
        </div>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='stagger-item'>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

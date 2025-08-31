'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Plus, Minus } from 'lucide-react'

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const faqs = [
    {
      question: 'How does AI-powered matching work?',
      answer: 'Our algorithm analyzes multiple data points including market metrics, team experience, business model fit, and investor preferences to create high-probability matches. The more data we process, the smarter it gets.',
    },
    {
      question: 'What makes this different from other platforms?',
      answer: 'We\'re building an AI-powered platform that democratizes access to funding. Smart matching, transparent processes, and streamlined execution mean faster, fairer deals for everyone.',
    },
    {
      question: 'How do you verify participants?',
      answer: 'Multi-layer verification including KYC, accreditation status, reference checks, and on-chain reputation scoring. All participants must meet strict quality standards before joining the network.',
    },
    {
      question: 'Is this only for specific regions?',
      answer: 'No. While we started with specific corridors, the platform is designed to work globally. Any qualified investor or startup can participate, regardless of geography.',
    },
    {
      question: 'How do governance tokens work?',
      answer: 'Contribute quality deals, participate in due diligence, or help with platform development to earn tokens. Token holders vote on algorithm improvements, quality standards, and platform evolution.',
    },
    {
      question: 'Who can join the platform?',
      answer: 'Accredited investors, institutional VCs, qualified startups, and ecosystem contributors. We maintain high standards but welcome applications from serious participants worldwide.',
    },
  ]

  // Generate FAQ structured data for Google's FAQ rich snippets
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
      {/* SEO: FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6"
          >
            <CheckCircle2 className="w-4 h-4" />
            FREQUENTLY ASKED
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              Questions & Answers
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4">
            Have questions about the platform? We have detailed answers. Clear explanations, no technical jargon.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="border border-[#a98b5d]/20 rounded-2xl bg-gradient-to-r from-[#a98b5d]/5 to-transparent overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between group hover:bg-[#a98b5d]/5 transition-colors duration-300"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#dcd7ce] pr-4 group-hover:text-[#a98b5d] transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="text-[#a98b5d] transition-transform duration-300">
                  {openFaq === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-[#a98b5d]/20 via-[#a98b5d]/40 to-[#a98b5d]/20 mb-4" />
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

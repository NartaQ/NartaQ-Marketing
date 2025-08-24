'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, Brain, CheckCircle, FileText, DollarSign } from 'lucide-react'

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      id: 1,
      icon: User,
      title: 'Profile',
      description: 'Build an on-chain reputation profile with verifiable credentials and track record.',
      color: '#a98b5d'
    },
    {
      id: 2,
      icon: Brain,
      title: 'Match',
      description: 'Get AI-curated, high-probability introductions based on compatibility scoring.',
      color: '#dcd7ce'
    },
    {
      id: 3,
      icon: CheckCircle,
      title: 'Agree',
      description: 'Negotiate terms within a secure environment with smart contract templates.',
      color: '#a98b5d'
    },
    {
      id: 4,
      icon: FileText,
      title: 'Execute',
      description: 'Click "Close." We generate legal docs (SAFEs, SPV formation) and manage e-signatures.',
      color: '#dcd7ce'
    },
    {
      id: 5,
      icon: DollarSign,
      title: 'Fund',
      description: 'Investors wire funds to escrow account; upon confirmation, funds release to the startup.',
      color: '#a98b5d'
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a98b5d]/30 bg-[#a98b5d]/10 text-[#a98b5d] text-sm font-medium mb-6"
          >
            <CheckCircle className="w-4 h-4" />
            THE FULL JOURNEY
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#dcd7ce]">How It Works</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We make the complex simple, especially for cross-border deals.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center gap-4 justify-center lg:justify-start mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.id}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div 
                    className="w-32 h-32 rounded-2xl flex items-center justify-center border-2 backdrop-blur-xl"
                    style={{ 
                      borderColor: step.color + '40',
                      backgroundColor: step.color + '20'
                    }}
                  >
                    <step.icon 
                      className="w-16 h-16" 
                      style={{ color: step.color }}
                    />
                  </div>
                  
                  {/* Connecting Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-24 w-16 h-px bg-gradient-to-r from-gray-600 to-transparent" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-sm text-gray-500 font-medium">
            We are not a broker. We are a compliant utility.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
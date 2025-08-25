'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  UserCheck, 
  Brain, 
  Handshake, 
  FileSignature, 
  Banknote,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      icon: UserCheck,
      title: 'Connect & Verify',
      shortTitle: 'Connect',
      description: 'Create your verified protocol profile with on-chain credentials, KYC verification, and investment history. Our AI analyzes your preferences, risk profile, and deal criteria.',
      highlights: ['On-chain verification', 'AI preference mapping', 'Global KYC compliance'],
      color: '#a98b5d',
      bgGradient: 'from-[#a98b5d]/20 to-[#a98b5d]/5'
    },
    {
      id: 2,
      icon: Brain,
      title: 'AI-Powered Matching',
      shortTitle: 'Match',
      description: 'Our advanced AI engine analyzes thousands of data points to create high-probability matches. Get personalized deal flow based on compatibility scoring and market signals.',
      highlights: ['Smart compatibility scoring', 'Real-time market analysis', 'Personalized deal flow'],
      color: '#dcd7ce',
      bgGradient: 'from-[#dcd7ce]/20 to-[#dcd7ce]/5'
    },
    {
      id: 3,
      icon: Handshake,
      title: 'Secure Negotiation',
      shortTitle: 'Negotiate',
      description: 'Enter a secure negotiation environment with smart contract templates. AI assists with market-standard terms, valuation guidance, and deal structure optimization.',
      highlights: ['Smart contract templates', 'AI deal guidance', 'Secure environment'],
      color: '#a98b5d',
      bgGradient: 'from-[#a98b5d]/20 to-[#a98b5d]/5'
    },
    {
      id: 4,
      icon: FileSignature,
      title: 'Automated Execution',
      shortTitle: 'Execute',
      description: 'One-click deal closure generates all legal documentation (SAFEs, equity docs, SPV formation), manages e-signatures, and handles compliance across jurisdictions.',
      highlights: ['One-click closure', 'Auto-generated legal docs', 'Global compliance'],
      color: '#dcd7ce',
      bgGradient: 'from-[#dcd7ce]/20 to-[#dcd7ce]/5'
    },
    {
      id: 5,
      icon: Banknote,
      title: 'Trustless Settlement',
      shortTitle: 'Fund',
      description: 'Funds are held in protocol escrow with automated release upon milestone completion. Smart contracts ensure trustless, transparent, and efficient capital deployment.',
      highlights: ['Protocol escrow', 'Milestone automation', 'Trustless settlement'],
      color: '#a98b5d',
      bgGradient: 'from-[#a98b5d]/20 to-[#a98b5d]/5'
    }
  ]

  const protocolFeatures = [
    { icon: Zap, text: 'Lightning Fast', subtext: '10x faster than traditional VC' },
    { icon: Shield, text: 'Bank-Level Security', subtext: 'Multi-layer protection' },
    { icon: Globe, text: 'Global Access', subtext: '24/7 worldwide operations' }
  ]

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a] overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(169, 139, 93, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(169, 139, 93, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Ambient Light Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a98b5d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#dcd7ce]/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20 sm:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#a98b5d]/40 bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/10 backdrop-blur-sm text-[#a98b5d] text-sm font-semibold mb-8 shadow-lg"
          >
            <CheckCircle2 className="w-4 h-4" />
            AI-POWERED PROTOCOL WORKFLOW
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 sm:mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-[#dcd7ce] via-white to-[#dcd7ce] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            From first contact to funded startup — our AI-powered protocol automates the entire venture capital process
          </p>
        </motion.div>

        {/* Protocol Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {protocolFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/20 backdrop-blur-sm"
            >
              <feature.icon className="w-5 h-5 text-[#a98b5d]" />
              <div className="text-left">
                <div className="text-sm font-semibold text-white">{feature.text}</div>
                <div className="text-xs text-gray-400">{feature.subtext}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Steps with Interactive Elements */}
        <div className="space-y-16 sm:space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
              onHoverStart={() => setHoveredStep(step.id)}
              onHoverEnd={() => setHoveredStep(null)}
              className={`group relative ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
                {/* Enhanced Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Step Number and Title */}
                  <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-black font-black text-xl sm:text-2xl shadow-2xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}cc 100%)`,
                        boxShadow: `0 8px 32px ${step.color}40`
                      }}
                    >
                      {step.id}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{ 
                          background: `linear-gradient(135deg, ${step.color}40 0%, transparent 100%)` 
                        }}
                        animate={hoveredStep === step.id ? { opacity: 1 } : { opacity: 0 }}
                      />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black text-white mb-1 group-hover:text-[#dcd7ce] transition-colors">
                        {step.title}
                      </h3>
                      <div className="text-sm text-[#a98b5d] font-semibold uppercase tracking-wider">
                        Step {step.id} of {steps.length}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0 mb-6 leading-relaxed"
                    animate={hoveredStep === step.id ? { y: -5 } : { y: 0 }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start px-4 lg:px-0">
                    {step.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + hIndex * 0.1 }}
                        className="px-3 py-1.5 text-sm font-medium text-[#a98b5d] bg-[#a98b5d]/10 border border-[#a98b5d]/20 rounded-full backdrop-blur-sm"
                      >
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Visual Side */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.08, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative group/visual"
                  >
                    {/* Main Icon Container */}
                    <div 
                      className={`w-32 h-32 sm:w-40 sm:h-40 rounded-3xl flex items-center justify-center border-2 backdrop-blur-2xl shadow-2xl bg-gradient-to-br ${step.bgGradient} group-hover:shadow-3xl transition-all duration-500`}
                      style={{ 
                        borderColor: step.color + '60',
                        boxShadow: `0 20px 60px ${step.color}30`
                      }}
                    >
                      <step.icon 
                        className="w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 group-hover/visual:scale-110" 
                        style={{ color: step.color }}
                      />
                      
                      {/* Pulsing Ring Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover/visual:opacity-100"
                        style={{ borderColor: step.color }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: hoveredStep === step.id ? [0, 0.6, 0] : 0
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    {/* Connecting Arrow (desktop only) */}
                    {index < steps.length - 1 && (
                      <motion.div 
                        className={`hidden xl:block absolute top-1/2 ${
                          index % 2 === 0 ? '-right-28' : '-left-28'
                        } ${
                          index % 2 === 0 ? 'rotate-0' : 'rotate-180'
                        }`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <ArrowRight 
                          className="w-8 h-8 text-[#a98b5d]/40" 
                          style={{
                            filter: `drop-shadow(0 0 10px ${step.color}40)`
                          }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Mobile Progress Line */}
              {index < steps.length - 1 && (
                <div className="xl:hidden flex justify-center mt-8 mb-4">
                  <div className="w-px h-16 bg-gradient-to-b from-[#a98b5d]/40 via-[#a98b5d]/20 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-24 sm:mt-32"
        >
          {/* Protocol Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#a98b5d] mb-2">10x</div>
              <div className="text-sm text-gray-400 font-medium">Faster than traditional VC</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#dcd7ce] mb-2">24/7</div>
              <div className="text-sm text-gray-400 font-medium">Global protocol operation</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#a98b5d] mb-2">100%</div>
              <div className="text-sm text-gray-400 font-medium">Automated execution</div>
            </motion.div>
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.6 }}
            className="bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm max-w-4xl mx-auto"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Experience the Future of VC?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI-powered protocol that&apos;s transforming how startups get funded. 
              No brokers, no delays, just pure automated efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-[#a98b5d]/40 text-[#a98b5d] font-semibold rounded-xl hover:bg-[#a98b5d]/10 transition-all duration-300"
              >
                View Live Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Protocol Compliance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.8 }}
            className="mt-12 pt-8 border-t border-[#a98b5d]/20"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-2">
                <Shield className="w-3 h-3" />
                SEC Compliant Protocol
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3" />
                GDPR Ready
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-3 h-3" />
                Global Regulatory Framework
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
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
      description: 'Create your verified profile with identity confirmation and investment preferences. In this phase, our team will personally learn your criteria and preferences to prepare for AI-powered learning.',
      highlights: ['Identity verification', 'Personal consultation', 'Preparation for AI learning'],
      color: '#a98b5d',
      bgGradient: 'from-[#a98b5d]/20 to-[#a98b5d]/5'
    },
    {
      id: 2,
      icon: Brain,
      title: 'Intelligent Matching',
      shortTitle: 'Match',
      description: 'Our AI engine will analyze multiple data points to identify high-potential matches, providing personalized deal recommendations based on compatibility and success patterns.',
      highlights: ['Smart compatibility analysis', 'Real-time opportunities', 'Personalized recommendations'],
      color: '#dcd7ce',
      bgGradient: 'from-[#dcd7ce]/20 to-[#dcd7ce]/5'
    },
    {
      id: 3,
      icon: Handshake,
      title: 'Secure Discussion',
      shortTitle: 'Negotiate',
      description: 'Enter a protected environment with conversation templates and market guidance. AI will assist with standard terms and deal structure recommendations.',
      highlights: ['Guided templates', 'Market insights', 'Secure environment'],
      color: '#a98b5d',
      bgGradient: 'from-[#a98b5d]/20 to-[#a98b5d]/5'
    },
    {
      id: 4,
      icon: FileSignature,
      title: 'Automated Documentation',
      shortTitle: 'Execute',
      description: 'Streamlined deal closure will generate all necessary legal documentation (investment agreements, compliance forms), manage signatures, and handle regulatory requirements.',
      highlights: ['Automated documentation', 'Digital signatures', 'Compliance handling'],
      color: '#dcd7ce',
      bgGradient: 'from-[#dcd7ce]/20 to-[#dcd7ce]/5'
    },
    {
      id: 5,
      icon: Banknote,
      title: 'Transparent Fund Transfer',
      shortTitle: 'Fund',
      description: 'Funds will be held securely with automated release based on agreed milestones. Smart contracts will ensure transparent and efficient capital deployment.',
      highlights: ['Secure escrow', 'Milestone tracking', 'Transparent settlement'],
      color: '#a98b5d',
      bgGradient: 'from-[#a98b5d]/20 to-[#a98b5d]/5'
    }
  ]

  const platformFeatures = [
    { icon: Zap, text: 'Fast & Efficient', subtext: 'Streamlined processes' },
    { icon: Shield, text: 'Secure & Verified', subtext: 'Built-in trust layer' },
    { icon: Globe, text: 'Global Access', subtext: 'Open to everyone' }
  ]

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-black via-black to-[#0a0a0a] overflow-hidden">
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
            OUR PLANNED WORKFLOW
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 sm:mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-[#dcd7ce] via-white to-[#dcd7ce] bg-clip-text text-transparent">
              How It Will Work
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            We are building a simple, guided process that automates the early stages of fundraising
          </p>
        </motion.div>

        {/* Platform Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/20 backdrop-blur-sm"
            >
              <feature.icon className="w-5 h-5 text-[#a98b5d]" />
              <div className="text-left">
                <div className="text-sm  text-white">{feature.text}</div>
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
      

        </motion.div>
      </div>
    </section>
  )
}
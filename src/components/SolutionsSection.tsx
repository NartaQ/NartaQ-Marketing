'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Shield, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

export default function SolutionsSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const solutions = [
    {
      id: 0,
      icon: Brain,
      title: 'AI-Powered Matching',
      subtitle: 'Beyond the pitch deck',
      description: 'Our AI analyzes founder and investor DNA to facilitate perfect, double-opt-in introductions with proprietary Match Confidence Scores.',
      benefits: [
        'Founder-investor DNA analysis',
        'Match Confidence Scoring',
        'Double-opt-in introductions'
      ],
      visual: { type: 'neural-network', color: '#a98b5d' }
    },
    {
      id: 1,
      icon: Shield,
      title: 'Trustless Protocol',
      subtitle: 'Smart contracts & verification',
      description: 'Blockchain-based reputation profiles and automated legal framework eliminate traditional barriers to cross-border deals.',
      benefits: [
        'On-chain reputation profiles',
        'Smart contract execution',
        'Cross-border compliance'
      ],
      visual: { type: 'radar', color: '#dcd7ce' }
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Guided Close',
      subtitle: 'From handshake to funding',
      description: 'One-click deal execution with automated legal docs, e-signatures, and escrow management. No more "email hell."',
      benefits: [
        'Automated legal generation',
        'Integrated e-signatures',
        'Secure escrow flows'
      ],
      visual: { type: 'shield', color: '#5c5d63' }
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
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
            OUR SOLUTION
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#dcd7ce]">Decentralize Discovery,</span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Simplify Execution</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            NartaQ is a protocol that uses AI for high-signal matching and provides the legal tools for seamless execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Solutions List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  activeFeature === index
                    ? 'border-[#a98b5d] bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/5'
                    : 'border-white/10 hover:border-[#a98b5d]/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r transition-all duration-300 p-0.5 ${
                    activeFeature === index
                      ? 'from-[#a98b5d] to-[#dcd7ce]'
                      : 'from-white/20 to-white/10'
                  }`}>
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                      <solution.icon className={`w-6 h-6 transition-colors duration-300 ${
                        activeFeature === index ? 'text-[#a98b5d]' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        activeFeature === index ? 'text-[#dcd7ce]' : 'text-gray-300'
                      }`}>
                        {solution.title}
                      </h3>
                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                        activeFeature === index 
                          ? 'text-[#a98b5d] translate-x-1' 
                          : 'text-gray-500'
                      }`} />
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{solution.subtitle}</p>
                    <p className={`text-sm transition-colors duration-300 mb-4 ${
                      activeFeature === index ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {solution.description}
                    </p>
                    
                    {/* Benefits List - Only show for active feature */}
                    {activeFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-[#a98b5d] flex-shrink-0" />
                            <span className="text-xs text-gray-400">{benefit}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Interactive Visual Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="sticky top-8"
          >
            <div className="aspect-square bg-gradient-to-br from-[#a98b5d]/20 to-[#dcd7ce]/10 rounded-3xl border border-[#a98b5d]/30 backdrop-blur-xl p-8 flex items-center justify-center">
              {/* Dynamic Visual Content */}
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative flex items-center justify-center"
              >
                {/* Neural Network Visual */}
                {solutions[activeFeature].visual.type === 'neural-network' && (
                  <div className="relative w-64 h-64">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-[#a98b5d] rounded-full"
                        style={{
                          left: `${20 + (i % 3) * 30}%`,
                          top: `${20 + Math.floor(i / 3) * 20}%`
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`line-${i}`}
                        className="absolute h-px bg-gradient-to-r from-[#a98b5d]/50 to-transparent"
                        style={{
                          left: '25%',
                          top: `${25 + i * 10}%`,
                          width: '50%'
                        }}
                        animate={{
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Other visual types */}
                {solutions[activeFeature].visual.type !== 'neural-network' && (
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[#a98b5d]/30 to-[#dcd7ce]/30 flex items-center justify-center">
                    {(() => {
                      const IconComponent = solutions[activeFeature].icon
                      return <IconComponent className="w-24 h-24 text-[#a98b5d]" />
                    })()}
                  </div>
                )}
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Target, Shield, Zap, ArrowRight } from 'lucide-react'

export default function InteractiveShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      id: 0,
      icon: Brain,
      title: 'AI-Powered Matching',
      subtitle: 'Smart connections, instant results',
      description: 'Our AI analyzes thousands of data points to create perfect matches between startups, investors, and service providers.',
      visual: {
        type: 'neural-network',
        color: '#a98b5d'
      }
    },
    {
      id: 1,
      icon: Target,
      title: 'Precision Targeting',
      subtitle: 'Find exactly who you need',
      description: 'Advanced filters and targeting ensure you only connect with the most relevant opportunities and partners.',
      visual: {
        type: 'radar',
        color: '#dcd7ce'
      }
    },
    {
      id: 2,
      icon: Shield,
      title: 'Verified Security',
      subtitle: 'Enterprise-grade protection',
      description: 'Multi-layer verification, escrow payments, and NDA protection for all sensitive interactions.',
      visual: {
        type: 'shield',
        color: '#5c5d63'
      }
    },
    {
      id: 3,
      icon: Zap,
      title: 'Instant Processing',
      subtitle: 'Real-time results',
      description: 'Lightning-fast matching, automated workflows, and instant notifications keep deals moving forward.',
      visual: {
        type: 'lightning',
        color: '#a98b5d'
      }
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#dcd7ce]">Works with</span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              your workflow
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Seamlessly integrate with your existing processes while unlocking 
            powerful new capabilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <div
                key={feature.id}
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
                      <feature.icon className={`w-6 h-6 transition-colors duration-300 ${
                        activeFeature === index ? 'text-[#a98b5d]' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        activeFeature === index ? 'text-[#dcd7ce]' : 'text-gray-300'
                      }`}>
                        {feature.title}
                      </h3>
                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                        activeFeature === index 
                          ? 'text-[#a98b5d] translate-x-1' 
                          : 'text-gray-500'
                      }`} />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{feature.subtitle}</p>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeFeature === index ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Visual Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="relative"
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
                {features[activeFeature].visual.type === 'neural-network' && (
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

                {/* Other visual types would go here */}
                {features[activeFeature].visual.type !== 'neural-network' && (
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[#a98b5d]/30 to-[#dcd7ce]/30 flex items-center justify-center">
                    {(() => {
                      const IconComponent = features[activeFeature].icon
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
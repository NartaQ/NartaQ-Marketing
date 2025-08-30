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
      title: 'The Sourcing DAO',
      subtitle: 'Community-driven deal discovery',
      description: 'Our network of investors and ecosystem partners actively refers and scouts deals, earning rewards for quality submissions.',
      visual: {
        type: 'neural-network',
        color: '#a98b5d'
      }
    },
    {
      id: 1,
      icon: Target,
      title: 'The Vetting Stack',
      subtitle: 'AI screens, experts review',
      description: 'AI screens for fit, then our expert reviewer network (including active VCs) provides structured, actionable feedback.',
      visual: {
        type: 'radar',
        color: '#dcd7ce'
      }
    },
    {
      id: 2,
      icon: Shield,
      title: 'The Trust Layer',
      subtitle: 'On-chain verification',
      description: 'Every startup is verified. Key data—from cap tables to technical audits—is attested on-chain for immutable due diligence.',
      visual: {
        type: 'shield',
        color: '#5c5d63'
      }
    },
    {
      id: 3,
      icon: Zap,
      title: 'Shared Success',
      subtitle: 'Community-owned value',
      description: 'Token holders govern the platform, vote on key features, participate in due diligence, and share in the platform&apos;s success.',
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
            <span className="text-[#dcd7ce]">Sourcing in Tunisia is a</span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              Black Box. We&apos;re Opening It.
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-red-400 font-semibold mb-2">Time-Consuming</div>
              <p className="text-gray-400 text-sm">Endless unvetted decks, cold outreach, and fragmented networks.</p>
            </div>
            <div className="text-center">
              <div className="text-red-400 font-semibold mb-2">Lack of Trust</div>
              <p className="text-gray-400 text-sm">Difficult to verify teams, traction, and technical capability remotely.</p>
            </div>
            <div className="text-center">
              <div className="text-red-400 font-semibold mb-2">Missed Opportunities</div>
              <p className="text-gray-400 text-sm">The best deals are hidden within private networks and accelerators.</p>
            </div>
          </div>
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
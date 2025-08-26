'use client'

import { motion } from 'framer-motion'
import { Users, Vote, Coins, Target, ArrowRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function DAOSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const daoFeatures = [
    {
      icon: Users,
      title: 'Contribute & Earn',
      description: 'Source quality deals, provide diligence, or contribute to platform development to earn governance tokens.',
      color: '#a98b5d'
    },
    {
      icon: Vote,
      title: 'Govern & Decide',
      description: 'Shape matching algorithms, set quality standards, and guide platform evolution through democratic governance.',
      color: '#dcd7ce'
    },
    {
      icon: Coins,
      title: 'Share in Success',
      description: 'Benefit from platform growth through token appreciation and fee sharing as the network scales globally.',
      color: '#a98b5d'
    }
  ]

  return (
    <section ref={ref} className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#a98b5d] rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#dcd7ce] rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-[#a98b5d]" />
            <span className="text-xs sm:text-sm font-medium text-[#dcd7ce]">PLATFORM GOVERNANCE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-[#dcd7ce]">Governed by the Community,</span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">for the Community</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            The platform belongs to its users. We&apos;re building a DAO to align incentives and ensure sustainable value creation for all participants.
          </p>
        </motion.div>

        {/* How the DAO Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#dcd7ce]">
            How Platform Governance Works
          </h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {daoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-xl hover:border-[#a98b5d]/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#a98b5d]" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-lg sm:text-xl font-bold text-[#dcd7ce] mb-3 sm:mb-4">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  
                  {/* Connecting Line (for desktop) */}
                  {index < daoFeatures.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#a98b5d] to-transparent" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DAO Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center"
        >
          {/* Left Content */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-[#dcd7ce]">Why Decentralized </span>
              <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">Governance</span>
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: 'Aligned Incentives',
                  description: 'Contributors are rewarded based on value created, not politics or connections.'
                },
                {
                  title: 'Global Intelligence',
                  description: 'Collective wisdom from diverse participants improves matching quality over time.'
                },
                {
                  title: 'Transparent Operations',
                  description: 'All governance decisions and platform changes are recorded on-chain for full auditability.'
                },
                {
                  title: 'Network Effects',
                  description: 'As more quality participants join, the entire ecosystem becomes more valuable for everyone.'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {} }
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-2 h-2 bg-[#a98b5d] rounded-full mt-2 sm:mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#dcd7ce] mb-1 sm:mb-2 text-base sm:text-lg">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#a98b5d]/20 to-[#dcd7ce]/10 rounded-3xl border border-[#a98b5d]/30 backdrop-blur-xl p-8 flex items-center justify-center">
              {/* DAO Network Visualization */}
              <div className="relative w-full h-full">
                {/* Central Hub */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-full flex items-center justify-center"
                >
                  <Target className="w-8 h-8 text-black" />
                </motion.div>
                
                {/* Orbiting Nodes */}
                {[...Array(8)].map((_, i) => {
                  const angleRadians = (i * 45) * (Math.PI / 180)
                  const radius = 120
                  const x = Math.cos(angleRadians) * radius
                  const y = Math.sin(angleRadians) * radius
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-[#a98b5d]/50 rounded-full border-2 border-[#a98b5d]"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.25
                      }}
                    />
                  )
                })}
                
                {/* Connecting Lines */}
                {[...Array(8)].map((_, i) => {
                  const lineLength = 120
                  
                  return (
                    <div
                      key={`line-${i}`}
                      className="absolute bg-gradient-to-r from-[#a98b5d]/30 to-transparent"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: `${lineLength}px`,
                        height: '1px',
                        transformOrigin: '0 50%',
                        transform: `rotate(${i * 45}deg)`
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#dcd7ce] mb-4 sm:mb-6">
            Join the Platform as a Founding Participant
          </h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* For Investors */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#a98b5d]/10 to-transparent border border-[#a98b5d]/30 backdrop-blur-xl">
              <h4 className="text-lg sm:text-xl font-bold text-[#dcd7ce] mb-3 sm:mb-4">For Investors & VCs</h4>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Access AI-curated dealflow and help shape the future of venture capital through platform governance.
              </p>
              <button className="w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-semibold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                Join as Investor
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* For Startups */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#dcd7ce]/10 to-transparent border border-[#dcd7ce]/30 backdrop-blur-xl">
              <h4 className="text-lg sm:text-xl font-bold text-[#dcd7ce] mb-3 sm:mb-4">For Startups & Contributors</h4>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Get matched with aligned investors and contribute to platform development to earn governance tokens.
              </p>
              <button className="w-full px-4 sm:px-6 py-3 border-2 border-[#dcd7ce]/50 text-[#dcd7ce] font-semibold rounded-xl hover:bg-[#dcd7ce]/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                Join as Founder
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
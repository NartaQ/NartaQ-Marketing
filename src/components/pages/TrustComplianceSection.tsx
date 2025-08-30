'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Lock, Scale, CheckCircle2 } from 'lucide-react'

export default function TrustComplianceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const trustFeatures = [
    {
      title: 'Verified Participants',
      description: 'All investors and founders undergo multi-layer verification including KYC, accreditation checks, and reputation scoring.',
      icon: Shield,
    },
    {
      title: 'Bank-Level Security',
      description: 'Enterprise-grade encryption, secure data storage, and comprehensive privacy protection for all transactions.',
      icon: Lock,
    },
    {
      title: 'Smart Legal Framework',
      description: 'Automated compliance checking, standardized legal templates, and built-in dispute resolution mechanisms.',
      icon: Scale,
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
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
            TRUST & COMPLIANCE
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              Trust & Compliance Built In
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto px-4">
            Enterprise-grade security and regulatory compliance in all relevant jurisdictions. Every participant verified, all transactions compliant.
          </p>
        </motion.div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-[#a98b5d]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#dcd7ce] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#a98b5d] rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#dcd7ce] rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Simple Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
            <Sparkles className="w-4 h-4 text-[#a98b5d]" />
            <span className="text-sm font-medium text-[#dcd7ce]">OUR VISION</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#dcd7ce]">The Future of Funding</span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">is Community-Owned</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're building more than a platform—we're creating a community-owned future where the best ideas get funded, regardless of geography or connections. Our long-term vision includes decentralized governance, ensuring the platform serves its users, not shareholders.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="pt-6"
          >
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/30 rounded-xl text-[#dcd7ce] font-medium hover:bg-[#a98b5d]/20 transition-all duration-300"
            >
              Learn About Our Journey
              <Sparkles className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
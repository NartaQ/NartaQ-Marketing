'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, Globe, Scale } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'

export default function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const visionPillars = [
    {
      title: "Community-Driven",
      description: "Built by and for the startup ecosystem, ensuring every decision serves the community's best interests.",
      Icon: Users
    },
    {
      title: "Globally Accessible",
      description: "Breaking down geographical barriers to connect the best ideas with the right capital, anywhere in the world.",
      Icon: Globe
    },
    {
      title: "Transparently Governed",
      description: "Decentralized governance ensures the platform evolves with its users, not corporate shareholders.",
      Icon: Scale
    }
  ]

  return (
    <section ref={ref} className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
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

          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We're building more than a platform—we're creating a community-owned future where the best ideas get funded, regardless of geography or connections.
          </p>
        </motion.div>

        {/* Vision Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visionPillars.map((pillar, index) => {
            const Icon = pillar.Icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group text-center"
              >
                <div className="relative p-8 rounded-2xl border border-[#a98b5d]/10 bg-gradient-to-br from-[#a98b5d]/5 to-transparent hover:border-[#a98b5d]/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#a98b5d]/20 to-[#a98b5d]/5 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#a98b5d]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#a98b5d] mb-4">
                    {pillar.title}
                  </h3>

                  <div className="w-12 h-0.5 bg-[#a98b5d] mx-auto mb-4"></div>

                  <p className="text-[#dcd7ce] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a98b5d]/10 to-[#dcd7ce]/10 border border-[#a98b5d]/30 rounded-xl text-[#dcd7ce] font-medium hover:bg-[#a98b5d]/20 transition-all duration-300"
          >
            Learn About Our Journey
            <Sparkles className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
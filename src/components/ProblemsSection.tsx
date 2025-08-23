'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, AlertTriangle, EyeOff, TrendingDown } from 'lucide-react'

export default function ProblemsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const problems = [
    {
      icon: Clock,
      title: 'Wasted Time',
      description: '80% of investor time is spent sifting through unvetted, irrelevant deals.',
      stats: '80% time lost to noise',
      visual: 'clock'
    },
    {
      icon: AlertTriangle,
      title: 'Trust Deficit',
      description: '65% of deals lack verifiable proof of traction or technical capability.',
      stats: '65% unverifiable claims',
      visual: 'warning'
    },
    {
      icon: EyeOff,
      title: 'Hidden Gems',
      description: 'The top 70% of viable deals remain locked in private networks and accelerators.',
      stats: '70% stay locked away',
      visual: 'hidden'
    },
    {
      icon: TrendingDown,
      title: 'Systemic Failure',
      description: 'Only 2–5% of initial connections result in meaningful funding outcomes.',
      stats: '2–5% conversion rate',
      visual: 'decline'
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(220, 215, 206, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(169, 139, 93, 0.1) 0%, transparent 50%)
          `
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            THE CURRENT STATE
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="">The Search for Tunisia&apos;s Best</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Startups is Broken</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fragmented sourcing. Shallow filtering. Opaque validation. Misaligned incentives.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-red-500/40 transition-all duration-300">
                {/* Problem Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-400/20 flex items-center justify-center mb-6">
                  <problem.icon className="w-8 h-8 text-red-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#dcd7ce] mb-4">
                  {problem.title}
                </h3>
                
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {problem.description}
                </p>

                {/* Stats */}
                <div className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 inline-block">
                  <div className="text-red-400 font-semibold text-sm">
                    {problem.stats}
                  </div>
                </div>

                {/* Subtle Background Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400 mb-4">
            We need a coordinated, data-rich, incentive-aligned model.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}
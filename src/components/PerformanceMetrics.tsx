'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { Zap, Clock, Users, TrendingUp } from 'lucide-react'

export default function PerformanceMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const metrics = [
    {
      icon: Zap,
      value: 40,
      suffix: '%',
      label: 'Reply Rate',
      description: 'Higher than cold outreach',
      color: 'from-[#a98b5d] to-[#dcd7ce]'
    },
    {
      icon: Clock,
      value: 18,
      suffix: 'x',
      label: 'Faster Matching',
      description: 'Than traditional networks',
      color: 'from-[#dcd7ce] to-[#a98b5d]'
    },
    {
      icon: Users,
      value: 95,
      suffix: '%',
      label: 'Success Rate',
      description: 'For premium matches',
      color: 'from-[#a98b5d] to-[#5c5d63]'
    },
    {
      icon: TrendingUp,
      value: 3,
      suffix: 'M',
      prefix: '$',
      label: 'Avg Deal Size',
      description: 'In successful matches',
      color: 'from-[#5c5d63] to-[#dcd7ce]'
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#a98b5d]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#dcd7ce]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6">
            <Zap className="w-4 h-4 text-[#a98b5d]" />
            <span className="text-sm font-medium text-[#dcd7ce]">PERFORMANCE METRICS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#dcd7ce]">Lightning fast.</span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              Network results.
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our exclusive network delivers measurable results that traditional 
            platforms can&apos;t match.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-[#a98b5d]/20 group-hover:border-[#a98b5d]/40 transition-all duration-300" />
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300`} />
              
              {/* Card Content */}
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} p-0.5`}>
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-[#a98b5d]" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold text-[#dcd7ce] flex items-baseline">
                      {metric.prefix && <span className="text-2xl">{metric.prefix}</span>}
                      <NumberTicker 
                        value={metric.value} 
                        className="text-[#dcd7ce]"
                      />
                      <span className="text-2xl">{metric.suffix}</span>
                    </div>
                    <div className="text-sm font-medium text-[#a98b5d]">
                      {metric.label}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
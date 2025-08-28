'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Target,
  Users,
  Settings,
  Zap,
  Brain,
  PieChart,
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'

export default function CoreToolsShowcase() {
  const [activeTab, setActiveTab] = useState('startups')
  const [, setHoveredTool] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const tools = [
    {
      name: 'AI Match',
      icon: Brain,
      startups: {
        title: 'Investor targeting with 40% reply rate',
        description:
          'Our AI analyzes your startup profile and matches you with investors who have funded similar companies in your stage and sector.',
        features: [
          'Smart investor scoring',
          'Automated outreach',
          'Response tracking',
        ],
      },
      investors: {
        title: 'Deal flow filtering by stage/geo/traction',
        description:
          'Advanced filters help you find deals that match your investment thesis, with real-time traction metrics and geographic preferences.',
        features: [
          'Thesis-based matching',
          'Real-time filtering',
          'Quality scoring',
        ],
      },
      providers: {
        title: 'Client matching by specialization',
        description:
          'Get matched with startups that need your specific expertise, based on their current challenges and growth stage.',
        features: [
          'Skill-based matching',
          'Project recommendations',
          'Demand forecasting',
        ],
      },
    },
    {
      name: 'Valuation Lab',
      icon: PieChart,
      startups: {
        title: 'Real-time cap table simulations',
        description:
          'Model different funding scenarios and see how they impact your ownership and dilution across multiple rounds.',
        features: [
          'Cap table modeling',
          'Dilution analysis',
          'Scenario planning',
        ],
      },
      investors: {
        title: 'Portfolio monitoring + benchmarking',
        description:
          'Track portfolio company performance against industry benchmarks and identify opportunities for additional investment.',
        features: [
          'Performance tracking',
          'Benchmark analysis',
          'Risk assessment',
        ],
      },
      providers: {
        title: 'Service pricing optimizer',
        description:
          'Optimize your service pricing based on market rates, client budgets, and value delivered to maximize revenue.',
        features: [
          'Market rate analysis',
          'Value-based pricing',
          'Revenue optimization',
        ],
      },
    },
    {
      name: 'Market Intel',
      icon: Globe,
      startups: {
        title: 'Competitor funding reports',
        description:
          'Stay informed about competitor funding rounds, investor preferences, and market trends in your sector.',
        features: [
          'Funding intelligence',
          'Competitor analysis',
          'Market trends',
        ],
      },
      investors: {
        title: 'Sector deep dives + trend forecasts',
        description:
          'Access comprehensive sector analysis with trend forecasts to inform your investment strategy and thesis development.',
        features: [
          'Sector analysis',
          'Trend forecasting',
          'Investment insights',
        ],
      },
      providers: {
        title: 'Demand heatmaps for services',
        description:
          'Visualize demand patterns for different services across sectors and geographies to optimize your service offerings.',
        features: ['Demand mapping', 'Service trends', 'Market opportunities'],
      },
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(169, 139, 93, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(169, 139, 93, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#a98b5d]/20 to-[#dcd7ce]/10 rounded-2xl backdrop-blur-xl border border-[#a98b5d]/30 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-[#dcd7ce]/20 to-[#a98b5d]/10 rounded-full backdrop-blur-xl border border-[#dcd7ce]/30 animate-pulse" style={{ animationDelay: '1s' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-8">
            <Zap className="w-4 h-4 text-[#a98b5d]" />
            <span className="text-sm font-medium text-[#dcd7ce]">CORE TOOLS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#dcd7ce]">Powerful Tools </span>
            <br />
            <span className="bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] bg-clip-text text-transparent">
              for Every User
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tailored functionality that adapts to your specific needs and workflow
          </p>
        </motion.div>

        {/* Interactive Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <div className="flex items-center bg-black/60 backdrop-blur-xl rounded-2xl p-2 border border-[#333]">
            {[
              { value: 'startups', icon: Users, label: 'Startups' },
              { value: 'investors', icon: Target, label: 'Investors' },
              { value: 'providers', icon: Settings, label: 'Providers' }
            ].map((tab) => (
              <motion.button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300
                  ${activeTab === tab.value 
                    ? 'bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black shadow-xl' 
                    : 'text-[#dcd7ce]/80 hover:text-[#dcd7ce] hover:bg-[#a98b5d]/10'
                  }
                `}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-semibold">{tab.label}</span>
                
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
        >
          {tools.map((tool, index) => {
            const toolData = tool[activeTab as keyof typeof tool] as {
              title: string
              description: string
              features: string[]
            }
            const Icon = tool.icon

            return (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="group relative"
                onMouseEnter={() => setHoveredTool(index)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <div className="relative h-full bg-gradient-to-br from-black/60 to-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl border border-[#333]/50 overflow-hidden hover:border-[#a98b5d]/50 transition-all duration-500 p-8">
                  {/* Tool Icon */}
                  <div className="mb-6">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#a98b5d]/20 to-[#dcd7ce]/10 rounded-2xl backdrop-blur-xl border border-[#a98b5d]/30 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#a98b5d]" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#a98b5d]/10 to-[#dcd7ce]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#dcd7ce] mb-2 group-hover:text-[#a98b5d] transition-colors duration-300">
                        {tool.name}
                      </h3>
                      <h4 className="text-lg font-semibold text-[#a98b5d] mb-3 leading-tight">
                        {toolData.title}
                      </h4>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {toolData.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {toolData.features.map((feature: string, featureIndex: number) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-[#a98b5d] flex-shrink-0" />
                          <span className="text-sm text-[#dcd7ce]/90">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 px-6 py-3 bg-transparent border-2 border-[#a98b5d]/30 text-[#a98b5d] font-semibold rounded-xl hover:border-[#a98b5d] hover:bg-[#a98b5d]/10 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Explore {tool.name}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl bg-gradient-to-br from-[#a98b5d]/30 to-[#dcd7ce]/20" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tab-specific CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-black/60 to-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl border border-[#333]/50 p-8">
            <div className="mb-6">
              <Sparkles className="w-8 h-8 text-[#a98b5d] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#dcd7ce] mb-4">
                {activeTab === 'startups' && 'Ready to accelerate your fundraising?'}
                {activeTab === 'investors' && 'Ready to discover better deals?'}
                {activeTab === 'providers' && 'Ready to grow your practice?'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {activeTab === 'startups' && 'Join thousands of startups who\'ve raised faster with our platform'}
                {activeTab === 'investors' && 'Access curated deal flow that matches your investment thesis'}
                {activeTab === 'providers' && 'Connect with funded startups that need your expertise'}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(169, 139, 93, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-bold rounded-xl shadow-xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                {activeTab === 'startups' && 'Start Fundraising'}
                {activeTab === 'investors' && 'Browse Deals'}
                {activeTab === 'providers' && 'List Your Services'}
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

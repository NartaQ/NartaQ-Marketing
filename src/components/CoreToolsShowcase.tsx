'use client'

import { useState } from 'react'
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
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export default function CoreToolsShowcase() {
  const [activeTab, setActiveTab] = useState('startups')

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
    <section className='relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-[#232428] to-[#3e3f44]'>
      {/* Simple Background Elements */}
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a98b5d] to-transparent z-30' />
      <div className='absolute top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#dcd7ce]/60 to-transparent z-30' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Clean Section Header */}
        <div className='text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4'>
          <div className='inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#232428]/80 border border-[#a98b5d]/20 backdrop-blur-sm'>
            <Zap className='w-3 h-3 sm:w-4 sm:h-4 text-[#a98b5d]' />
            <span className='text-xs sm:text-sm font-medium text-[#a98b5d]'>
              CORE TOOLS
            </span>
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#dcd7ce] px-4'>
            <span className='text-[#a98b5d] font-semibold'>Powerful Tools</span>{' '}
            for Every User
          </h2>
          <p className='text-base sm:text-lg text-[#5c5d63] max-w-3xl mx-auto px-4'>
            Tailored functionality that adapts to your specific needs and
            workflow
          </p>
        </div>

        {/* Tools Showcase */}
        <div className='max-w-6xl mx-auto'>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            {/* Enhanced Tab Navigation */}
            <div className='flex justify-center mb-8 sm:mb-10 lg:mb-12 px-4'>
              <div className='inline-flex p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-[#1a1b1f]/90 border border-[#a98b5d]/30 backdrop-blur-sm shadow-lg w-full max-w-md sm:max-w-none sm:w-auto'>
                <TabsList className='grid grid-cols-3 bg-transparent p-0 h-auto gap-1 sm:gap-2 w-full'>
                  <TabsTrigger
                    value='startups'
                    className='flex items-center gap-1 sm:gap-2 px-2 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#a98b5d] data-[state=active]:to-[#c4a574] data-[state=active]:text-black data-[state=active]:shadow-xl data-[state=active]:shadow-[#a98b5d]/30 data-[state=active]:scale-105 data-[state=active]:border data-[state=active]:border-[#dcd7ce]/20 text-[#8a8a8a] hover:text-[#dcd7ce] hover:bg-[#a98b5d]/15 border-0 relative overflow-hidden'
                  >
                    <Users className='w-3 h-3 sm:w-4 sm:h-4 relative z-10 flex-shrink-0' />
                    <span className='relative z-10 hidden xs:inline sm:inline'>
                      Startups
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#a98b5d]/0 via-[#a98b5d]/5 to-[#a98b5d]/0 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300' />
                  </TabsTrigger>
                  <TabsTrigger
                    value='investors'
                    className='flex items-center gap-1 sm:gap-2 px-2 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#a98b5d] data-[state=active]:to-[#c4a574] data-[state=active]:text-black data-[state=active]:shadow-xl data-[state=active]:shadow-[#a98b5d]/30 data-[state=active]:scale-105 data-[state=active]:border data-[state=active]:border-[#dcd7ce]/20 text-[#8a8a8a] hover:text-[#dcd7ce] hover:bg-[#a98b5d]/15 border-0 relative overflow-hidden'
                  >
                    <Target className='w-3 h-3 sm:w-4 sm:h-4 relative z-10 flex-shrink-0' />
                    <span className='relative z-10 hidden xs:inline sm:inline'>
                      Investors
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#a98b5d]/0 via-[#a98b5d]/5 to-[#a98b5d]/0 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300' />
                  </TabsTrigger>
                  <TabsTrigger
                    value='providers'
                    className='flex items-center gap-1 sm:gap-2 px-2 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#a98b5d] data-[state=active]:to-[#c4a574] data-[state=active]:text-black data-[state=active]:shadow-xl data-[state=active]:shadow-[#a98b5d]/30 data-[state=active]:scale-105 data-[state=active]:border data-[state=active]:border-[#dcd7ce]/20 text-[#8a8a8a] hover:text-[#dcd7ce] hover:bg-[#a98b5d]/15 border-0 relative overflow-hidden'
                  >
                    <Settings className='w-3 h-3 sm:w-4 sm:h-4 relative z-10 flex-shrink-0' />
                    <span className='relative z-10 hidden xs:inline sm:inline'>
                      Providers
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#a98b5d]/0 via-[#a98b5d]/5 to-[#a98b5d]/0 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300' />
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {/* Tab Content */}
            {['startups', 'investors', 'providers'].map((tabValue) => (
              <TabsContent
                key={tabValue}
                value={tabValue}
                className='space-y-6 sm:space-y-8 px-4'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr'>
                  {tools.map((tool, index) => {
                    const toolData = tool[tabValue as keyof typeof tool] as {
                      title: string
                      description: string
                      features: string[]
                    }
                    const Icon = tool.icon

                    return (
                      <Card
                        key={index}
                        className='group hover:shadow-xl hover:shadow-[#a98b5d]/10 hover:-translate-y-1 transition-all duration-300 border-[#a98b5d]/20 bg-[#232428]/60 backdrop-blur-sm hover:border-[#a98b5d]/40 flex flex-col h-full'
                      >
                        <CardHeader className='pb-3 sm:pb-4 flex-shrink-0'>
                          <div className='flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3'>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#a98b5d]/10 flex items-center justify-center border border-[#a98b5d]/20 group-hover:bg-[#a98b5d]/20 group-hover:border-[#a98b5d]/40 transition-all duration-300 flex-shrink-0'>
                              <Icon className='w-5 h-5 sm:w-6 sm:h-6 text-[#a98b5d] group-hover:scale-110 transition-transform duration-300' />
                            </div>
                            <CardTitle className='text-lg sm:text-xl text-[#dcd7ce] group-hover:text-[#a98b5d] transition-colors duration-300 leading-tight'>
                              {tool.name}
                            </CardTitle>
                          </div>
                          <h4 className='text-base sm:text-lg font-semibold text-[#a98b5d] leading-tight'>
                            {toolData.title}
                          </h4>
                        </CardHeader>
                        <CardContent className='space-y-3 sm:space-y-4 flex-grow flex flex-col'>
                          <p className='text-sm sm:text-base text-[#5c5d63] leading-relaxed flex-shrink-0'>
                            {toolData.description}
                          </p>

                          {/* Features List */}
                          <div className='space-y-1.5 sm:space-y-2 flex-grow'>
                            {toolData.features.map(
                              (feature: string, featureIndex: number) => (
                                <div
                                  key={featureIndex}
                                  className='flex items-center gap-2'
                                >
                                  <CheckCircle className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a98b5d] flex-shrink-0' />
                                  <span className='text-xs sm:text-sm text-[#dcd7ce] leading-relaxed'>
                                    {feature}
                                  </span>
                                </div>
                              )
                            )}
                          </div>

                          {/* CTA Button */}
                          <Button
                            variant='outline'
                            className='w-full mt-3 sm:mt-4 border-[#a98b5d]/30 text-[#a98b5d] hover:bg-[#a98b5d]/10 hover:border-[#a98b5d]/50 group/btn transition-all duration-200 flex-shrink-0 text-sm sm:text-base py-2 sm:py-2.5'
                          >
                            <span className='hidden sm:inline'>
                              Explore {tool.name}
                            </span>
                            <span className='sm:hidden'>Explore</span>
                            <ArrowRight className='w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover/btn:translate-x-1 transition-transform duration-200' />
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Tab-specific CTA */}
                <div className='text-center mt-8 sm:mt-10 lg:mt-12'>
                  <Card className='max-w-2xl mx-auto border-[#a98b5d]/20 bg-[#232428]/50 backdrop-blur-sm'>
                    <CardContent className='p-4 sm:p-6 lg:p-8 text-center space-y-3 sm:space-y-4'>
                      <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-[#dcd7ce] leading-tight'>
                        {tabValue === 'startups' &&
                          'Ready to accelerate your fundraising?'}
                        {tabValue === 'investors' &&
                          'Ready to discover better deals?'}
                        {tabValue === 'providers' &&
                          'Ready to grow your practice?'}
                      </h3>
                      <p className='text-sm sm:text-base text-[#5c5d63] max-w-xl mx-auto leading-relaxed'>
                        {tabValue === 'startups' &&
                          "Join thousands of startups who've raised faster with our platform"}
                        {tabValue === 'investors' &&
                          'Access curated deal flow that matches your investment thesis'}
                        {tabValue === 'providers' &&
                          'Connect with funded startups that need your expertise'}
                      </p>
                      <Button
                        size='lg'
                        className='bg-[#a98b5d] text-black hover:bg-[#dcd7ce] font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base'
                      >
                        {tabValue === 'startups' && 'Start Fundraising'}
                        {tabValue === 'investors' && 'Browse Deals'}
                        {tabValue === 'providers' && 'List Your Services'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

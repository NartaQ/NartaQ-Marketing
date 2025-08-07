'use client'

import { Card, CardContent } from '@investi/ui'
import { DollarSign, TrendingUp, Users } from 'lucide-react'

const successStories = [
  {
    founderName: 'Zach Barney',
    companyName: 'Mobly',
    amount: '$2.5M',
    round: 'Seed Round',
    description:
      'Secured funding to transform lead capture and qualification in B2B',
    avatar: 'ZB',
  },
  {
    founderName: 'Sarah Chen',
    companyName: 'HealthTech Pro',
    amount: '$1.2M',
    round: 'Pre-Seed',
    description: 'Raised capital for AI-powered health diagnostics platform',
    avatar: 'SC',
  },
  {
    founderName: 'Marcus Johnson',
    companyName: 'GreenEnergy Solutions',
    amount: '$3.8M',
    round: 'Series A',
    description: 'Funding for renewable energy management software',
    avatar: 'MJ',
  },
]

const platformStats = [
  {
    icon: DollarSign,
    value: '$1+ Billion',
    label: 'Total Raised',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Users,
    value: '22,000+',
    label: 'Founders',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Success Rate',
    gradient: 'from-purple-500 to-violet-600',
  },
]

export function SuccessStories() {
  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-900'>
      <div className='container mx-auto'>
        <div className='text-center mb-10 animate-on-scroll'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'>
            Founders Who Raised With{' '}
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Investi
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            We're proud to be part of their journey
          </p>
        </div>

        {/* Success Stories Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {successStories.map((story, index) => (
            <Card
              key={index}
              className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-item border-0 bg-gradient-to-br from-gray-800 to-gray-900'
            >
              <CardContent className='p-8 text-center'>
                <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6'>
                  {story.avatar}
                </div>
                <div className='text-3xl font-bold text-green-400 mb-2'>
                  Raised {story.amount}
                </div>
                <div className='text-lg font-semibold text-white mb-1'>
                  {story.founderName}
                </div>
                <div className='text-blue-400 font-medium mb-4'>
                  Founder - {story.companyName}
                </div>
                <div className='text-sm text-gray-300 mb-4'>{story.round}</div>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  {story.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Stats */}
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 animate-on-scroll'>
          <div className='text-center mb-12'>
            <h3 className='text-2xl lg:text-3xl font-bold text-white mb-4'>
              Investi Startups Have Raised $1+ Billion From:
            </h3>
            <p className='text-blue-100'>
              Leading investors worldwide trust our platform
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            {platformStats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <stat.icon className='h-8 w-8 text-white' />
                </div>
                <div className='text-3xl lg:text-4xl font-bold text-white mb-2'>
                  {stat.value}
                </div>
                <div className='text-blue-100'>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mock VC Logos */}
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-80'>
            {['Sequoia', 'A16z', 'Accel', 'Benchmark', 'NEA', 'GGV'].map(
              (vc, index) => (
                <div
                  key={index}
                  className='bg-white/10 rounded-lg p-4 text-center'
                >
                  <div className='text-white font-semibold text-sm'>{vc}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

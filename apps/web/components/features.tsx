'use client'

import { Button } from '@investi/ui'
import { Card, CardContent } from '@investi/ui'
import { Search, Users, Mail, BarChart3, FileText, Zap } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Find Startup Investors Effortlessly',
    description: 'Get maximal access via intros, outreach, or inbound',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    icon: Mail,
    title: 'Cold Outreach That Works',
    description:
      'Reach out to Investi investors in just one click with a reply rate of 40%',
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Users,
    title: 'Find Intros On Autopilot',
    description:
      'Let Investi scan your network & find who can make intros to your dream investor',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    icon: Zap,
    title: 'Inbound Requests Like Magic',
    description:
      'Get listed in our deal flow and receive daily investor requests',
    gradient: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: BarChart3,
    title: 'AI-Powered Analytics',
    description:
      'Track your outreach performance and optimize your fundraising strategy',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    icon: FileText,
    title: 'Deck Tracking & Analytics',
    description:
      'Know when investors view your deck and get insights on engagement',
    gradient: 'from-secondary-500 to-secondary-600',
  },
]

export function Features() {
  return (
    <section
      id='features'
      className='py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-zinc-950'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16 animate-on-scroll'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-zinc-100 leading-tight'>
            <span className='text-reveal'>Find Startup Investors</span>{' '}
            <span className='text-gradient-primary'>
              Effortlessly
            </span>
          </h2>
          <p className='text-xl text-zinc-400 max-w-3xl mx-auto animate-on-scroll font-medium'>
            Get maximal access via intros, outreach, or inbound
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='group magnetic hover:shadow-xl shadow-primary transition-all duration-500 hover:-translate-y-3 stagger-item border-0 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/70 overflow-hidden relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <CardContent className='p-6 sm:p-8 relative z-10'>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <feature.icon className='h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110' />
                </div>
                <h3 className='text-xl font-semibold mb-4 text-zinc-100 group-hover:text-primary-light transition-colors duration-300'>
                  {feature.title}
                </h3>
                <p className='text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300 font-medium'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-12 sm:mt-16 animate-on-scroll'>
          <Button
            size='lg'
            className='gradient-primary hover-primary px-8 py-6 text-lg text-white font-medium'
          >
            Try Investi for Free
          </Button>
        </div>
      </div>
    </section>
  )
}

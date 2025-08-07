'use client'

import { Button } from '@investi/ui'
import { Card, CardContent } from '@investi/ui'
import { Search, Users, Mail, BarChart3, FileText, Zap } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Find Startup Investors Effortlessly',
    description: 'Get maximal access via intros, outreach, or inbound',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: Mail,
    title: 'Cold Outreach That Works',
    description:
      'Reach out to Investi investors in just one click with a reply rate of 40%',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    icon: Users,
    title: 'Find Intros On Autopilot',
    description:
      'Let Investi scan your network & find who can make intros to your dream investor',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Zap,
    title: 'Inbound Requests Like Magic',
    description:
      'Get listed in our deal flow and receive daily investor requests',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: BarChart3,
    title: 'AI-Powered Analytics',
    description:
      'Track your outreach performance and optimize your fundraising strategy',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Deck Tracking & Analytics',
    description:
      'Know when investors view your deck and get insights on engagement',
    gradient: 'from-indigo-500 to-purple-600',
  },
]

export function Features() {
  return (
    <section
      id='features'
      className='py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900'
    >
      <div className='container mx-auto'>
        <div className='text-center mb-10 animate-on-scroll'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'>
            <span className='text-reveal'>Find Startup Investors</span>{' '}
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x'>
              Effortlessly
            </span>
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto animate-on-scroll'>
            Get maximal access via intros, outreach, or inbound
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='group magnetic hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 stagger-item border-0 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/60 overflow-hidden relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <CardContent className='p-8 relative z-10'>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <feature.icon className='h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110' />
                </div>
                <h3 className='text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300'>
                  {feature.title}
                </h3>
                <p className='text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center mt-10 animate-on-scroll'>
          <Button
            size='lg'
            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg text-white'
          >
            Try Investi for Free
          </Button>
        </div>
      </div>
    </section>
  )
}

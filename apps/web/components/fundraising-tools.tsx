'use client'

import { Button } from '@investi/ui'
import { Card, CardContent } from '@investi/ui'
import {
  ArrowRight,
  Repeat,
  FileText,
  Brain,
  Download,
  Users,
  BarChart3,
  Database,
} from 'lucide-react'

const tools = [
  {
    icon: Repeat,
    title: 'Automatic Follow-Ups',
    description: 'Never miss a follow-up with automated email sequences',
  },
  {
    icon: FileText,
    title: 'Deck Tracking',
    description: 'See when and how investors engage with your pitch deck',
  },
  {
    icon: Brain,
    title: 'AI-Powered Emails',
    description: 'Generate personalized outreach emails that get responses',
  },
  {
    icon: Download,
    title: 'Import-Export Data',
    description: 'Seamlessly sync with your existing CRM and tools',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together with your team on fundraising efforts',
  },
  {
    icon: BarChart3,
    title: 'Dashboard',
    description:
      'Track your progress and see all your opportunities in one place',
  },
  {
    icon: Database,
    title: 'Robust Investor Data',
    description: 'Access the most comprehensive investor database available',
  },
  {
    icon: FileText,
    title: 'Fundraising CRM',
    description: 'Manage your entire fundraising process in one platform',
  },
]

export function FundraisingTools() {
  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900'>
      <div className='container mx-auto'>
        <div className='text-center mb-10 animate-on-scroll'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'>
            Your All-in-One{' '}
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Fundraising Suite
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
            Close faster — Unlock powerful tools designed to streamline your
            raise
          </p>
          <Button
            size='lg'
            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg text-white'
          >
            Join for free
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {tools.map((tool, index) => (
            <Card
              key={index}
              className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-item border-0 bg-gray-900/70 backdrop-blur-sm'
            >
              <CardContent className='p-6 text-center'>
                <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <tool.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-lg font-bold mb-2 text-white'>
                  {tool.title}
                </h3>
                <p className='text-sm text-gray-300 leading-relaxed'>
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature highlight */}
        <div className='mt-10 bg-gray-900 rounded-2xl shadow-xl overflow-hidden animate-on-scroll border border-gray-700'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='p-8 lg:p-12 flex items-center'>
              <div>
                <h3 className='text-2xl lg:text-3xl font-bold mb-4 text-white'>
                  Track your progress and see all your opportunities in one
                  place
                </h3>
                <p className='text-gray-300 mb-6'>
                  Our comprehensive dashboard gives you real-time insights into
                  your fundraising progress, investor engagement, and
                  opportunities in your pipeline.
                </p>
                <Button className='bg-blue-600 hover:bg-blue-700 text-white'>
                  View Dashboard Demo
                </Button>
              </div>
            </div>
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-8 lg:p-12 flex items-center justify-center'>
              <div className='w-full h-64 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center border border-gray-700'>
                <BarChart3 className='h-24 w-24 text-blue-400' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

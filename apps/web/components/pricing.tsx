'use client'

import { Button } from '@investi/ui'
import { Card, CardContent, CardHeader, CardTitle } from '@investi/ui'
import { Check, ArrowRight, Zap, Crown } from 'lucide-react'

const freeFeatures = [
  'Unlimited investor search',
  'Unlimited deck sharing',
  'Unlimited deck analytics',
  'Unlimited CRM',
  'Unlimited team members',
  'Automatic follow-ups',
  'Fundraising webinars',
  'Fundability test',
  'And many, many more',
]

const premiumFeatures = [
  {
    title: '5x more outreach',
    description:
      'Reach out to up to 5 investors per day directly via Investi, and fill your funding pipeline.',
  },
  {
    title: '10 investor filters',
    description:
      'Target the right investors with exclusive filters: check size, lead preferences, etc.',
  },
  {
    title: 'Intro finder',
    description:
      'Plug in your email, Investi scans your network and finds who can make an intro to your dream investor.',
  },
  {
    title: '$2,000,000 discount',
    description:
      'Get massive discount on Airtable, Stripe, Hubspot, Azure and many exclusive deals.',
  },
  {
    title: 'Fundraising masterclass',
    description:
      'Learn how to raise like a pro: 24 videos of 10 min each to guide you from zero to funded.',
  },
  {
    title: 'Unlimited deck reviews',
    description:
      "Get actionable feedback on your pitch deck, as often as you need, until it's perfect.",
  },
  {
    title: 'Pitch deck template',
    description:
      'Build a top 1% pitch deck with our battle-tested template. Works on PowerPoint & Google Slides.',
  },
  {
    title: 'Support Investi',
    description:
      'Your membership helps us make venture capital a better, more open industry.',
  },
]

export function PricingSection() {
  return (
    <section id='pricing' className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-800'>
      <div className='container mx-auto'>
        <div className='text-center mb-10 animate-on-scroll'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'>
            90% Of Investi's Features Are Available{' '}
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              To All Founders For Free, Forever
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Free Plan */}
          <Card className='border-2 border-gray-700 bg-gray-900 animate-on-scroll'>
            <CardHeader className='text-center pb-8'>
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Zap className='h-8 w-8 text-white' />
              </div>
              <CardTitle className='text-3xl font-bold mb-2 text-white'>
                Free Forever
              </CardTitle>
              <div className='text-4xl font-bold text-white'>$0</div>
              <p className='text-gray-400'>Perfect for getting started</p>
            </CardHeader>
            <CardContent className='pb-8'>
              <div className='space-y-4 mb-8'>
                {freeFeatures.map((feature, index) => (
                  <div key={index} className='flex items-center'>
                    <Check className='h-5 w-5 text-green-400 mr-3 flex-shrink-0' />
                    <span className='text-gray-300'>{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                size='lg'
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              >
                Join for free
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className='border-2 border-purple-600 bg-gradient-to-br from-gray-800 to-gray-900 relative animate-on-scroll'>
            <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
              <div className='bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium'>
                Most Popular
              </div>
            </div>
            <CardHeader className='text-center pb-8'>
              <div className='w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Crown className='h-8 w-8 text-white' />
              </div>
              <CardTitle className='text-3xl font-bold mb-2 text-white'>
                Raise 10x Faster With Premium
              </CardTitle>
              <div className='text-4xl font-bold text-white mb-2'>
                $99<span className='text-xl text-gray-400'>/month</span>
              </div>
              <div className='text-lg text-purple-400 font-medium'>
                or just $299/year
              </div>
              <p className='text-gray-400'>
                Investi Premium Gives You Advanced Features To Raise Better And
                Faster
              </p>
            </CardHeader>
            <CardContent className='pb-8'>
              <div className='space-y-6 mb-8'>
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className='flex items-start'>
                    <Check className='h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-1' />
                    <div>
                      <div className='font-semibold text-white mb-1'>
                        {feature.title}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                size='lg'
                className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
              >
                Upgrade to Premium
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className='text-center mt-10 animate-on-scroll'>
          <Button
            size='lg'
            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg text-white'
          >
            Join for free
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>
      </div>
    </section>
  )
}

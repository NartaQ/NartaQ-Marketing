'use client'

import { Button } from '@investi/ui'
import { Badge } from '@investi/ui'
import { Eye, Send } from 'lucide-react'

interface Investor {
  id: string
  name: string
  type: 'VC firm' | 'Solo angel' | 'Angel group'
  countries: string[]
  checkSize: string
  industries: string[]
  openRate: number
  avatar?: string
}

const sampleInvestors: Investor[] = [
  {
    id: '1',
    name: 'Rogue Womens Fund',
    type: 'VC firm',
    countries: ['USA'],
    checkSize: '$300k to $500k',
    industries: ['female entrepreneur', 'SaaS'],
    openRate: 100,
  },
  {
    id: '2',
    name: 'Inflection Point Ventures',
    type: 'VC firm',
    countries: ['USA', 'India'],
    checkSize: '$200k to $2M',
    industries: ['fintech', 'AI', 'biotech'],
    openRate: 100,
  },
  {
    id: '3',
    name: 'Donatello Bianco',
    type: 'Solo angel',
    countries: ['Italy'],
    checkSize: '$25k to $100k',
    industries: ['machine vision', 'robotics'],
    openRate: 100,
  },
  {
    id: '4',
    name: 'Ground Capital',
    type: 'VC firm',
    countries: ['Portugal', 'Spain'],
    checkSize: '$250k to $5M',
    industries: ['environment', 'machine vision', 'cleantech'],
    openRate: 100,
  },
  {
    id: '5',
    name: 'Haymaker Ventures',
    type: 'VC firm',
    countries: ['USA', 'Mexico'],
    checkSize: '$1M to $10M',
    industries: ['wealthtech', 'banking', 'fintech'],
    openRate: 100,
  },
  {
    id: '6',
    name: 'Omnes',
    type: 'VC firm',
    countries: ['Belgium', 'Austria'],
    checkSize: '$4M to $12M',
    industries: ['enterprise', 'SaaS', 'B2B'],
    openRate: 100,
  },
]

export function InvestorTable() {
  return (
    <section className='py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800'>
      <div className='container mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white'>
            Meet Your{' '}
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Perfect Investors
            </span>
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
            Browse through our curated database of active investors who are
            looking for startups like yours
          </p>
        </div>
        <div className='bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-slate-700/50'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <tbody className='divide-y divide-slate-700/50'>
                {sampleInvestors.map((investor, index) => (
                  <tr
                    key={investor.id}
                    className='hover:bg-slate-800/50 transition-colors animate-on-scroll stagger-item'
                  >
                    <td className='px-6 py-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold'>
                        {investor.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div>
                        <div className='font-semibold text-white'>
                          {investor.name}
                        </div>
                        <Badge
                          variant='secondary'
                          className='mt-1 bg-slate-700 text-slate-300'
                        >
                          {investor.type}
                        </Badge>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div>
                        <div className='text-sm text-slate-400 mb-1'>
                          Target countries
                        </div>
                        <div className='flex flex-wrap gap-1'>
                          {investor.countries.map((country, idx) => (
                            <span
                              key={idx}
                              className='text-sm bg-blue-900/50 text-blue-300 px-2 py-1 rounded'
                            >
                              🇺🇸 {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div>
                        <div className='text-sm text-slate-400 mb-1'>
                          Check size
                        </div>
                        <div className='font-medium text-white'>
                          {investor.checkSize}
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div>
                        <div className='text-sm text-slate-400 mb-1'>
                          Industries
                        </div>
                        <div className='flex flex-wrap gap-1'>
                          {investor.industries
                            .slice(0, 2)
                            .map((industry, idx) => (
                              <Badge
                                key={idx}
                                variant='outline'
                                className='text-xs border-slate-600 text-slate-300'
                              >
                                {industry}
                              </Badge>
                            ))}
                          {investor.industries.length > 2 && (
                            <Badge
                              variant='outline'
                              className='text-xs border-slate-600 text-slate-300'
                            >
                              +{investor.industries.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div>
                        <div className='text-sm text-slate-400 mb-1'>
                          Open rate
                        </div>
                        <div className='flex items-center'>
                          <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                          <span className='font-medium text-white'>
                            {investor.openRate}%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex gap-2'>
                        <Button
                          size='sm'
                          className='bg-blue-600 hover:bg-blue-700 text-white'
                        >
                          <Send className='h-4 w-4 mr-1' />
                          Submit deck
                        </Button>
                        <Button
                          size='sm'
                          variant='outline'
                          className='border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white'
                        >
                          <Eye className='h-4 w-4 mr-1' />
                          View profile
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='bg-slate-800/50 px-6 py-4 border-t border-slate-700/50'>
            <div className='text-center'>
              <Button
                variant='outline'
                className='px-8 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'
              >
                See more investors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

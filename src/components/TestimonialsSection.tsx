import { Marquee } from './magicui/marquee'

export default function MarketInsightsSection() {
  const marketInsights = [
    {
      statistic: '73%',
      description: 'of startups struggle to find the right investors due to lack of proper connections and networking.',
      source: 'Startup Genome Report',
      category: 'Funding Challenge',
      icon: '📊'
    },
    {
      statistic: '6 months',
      description: 'is the average time startups spend fundraising, often reaching out to 100+ investors.',
      source: 'CB Insights',
      category: 'Time Investment',
      icon: '⏰'
    },
    {
      statistic: '90%',
      description: 'of investors say they miss good opportunities because they can\'t efficiently discover quality startups.',
      source: 'VC Survey 2024',
      category: 'Discovery Problem',
      icon: '🔍'
    },
    {
      statistic: '$3.2T',
      description: 'in global venture capital is available, but only 2% of startups successfully raise funding.',
      source: 'PitchBook Data',
      category: 'Market Size',
      icon: '💰'
    },
    {
      statistic: '85%',
      description: 'of successful funding rounds happen through warm introductions and proper matching.',
      source: 'Harvard Business Review',
      category: 'Success Factor',
      icon: '🤝'
    },
    {
      statistic: '40%',
      description: 'of investor time is wasted on deals that don\'t match their investment criteria.',
      source: 'McKinsey Report',
      category: 'Efficiency Gap',
      icon: '⚡'
    },
  ]

  // Split market insights into two rows for marquee effect
  const firstRow = marketInsights.slice(0, marketInsights.length / 2)
  const secondRow = marketInsights.slice(marketInsights.length / 2)

  const InsightCard = ({
    insight,
  }: {
    insight: (typeof marketInsights)[0]
  }) => (
    <div className='mx-4 flex h-fit w-[380px] flex-col gap-4 rounded-xl border border-gray-200/20 dark:border-gray-800/20 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-6 shadow-lg'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl'>
            {insight.icon}
          </div>
          <div>
            <h4 className='text-3xl font-bold text-gray-900 dark:text-white'>
              {insight.statistic}
            </h4>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              {insight.category}
            </p>
          </div>
        </div>
      </div>
      <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
        {insight.description}
      </p>
      <div className='flex items-center justify-between pt-2 border-t border-gray-200/20 dark:border-gray-800/20'>
        <span className='text-xs text-gray-500 dark:text-gray-400 italic'>
          Source: {insight.source}
        </span>
        <div className='flex items-center gap-1'>
          <svg className='w-4 h-4 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
          </svg>
          <span className='text-xs text-blue-500 font-medium'>Verified</span>
        </div>
      </div>
    </div>
  )

  return (
    <section className='flex min-h-screen w-full flex-col items-center justify-center p-[2%] bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/30'>
      <div className='text-center mb-16 max-w-3xl mx-auto'>
        <h3 className='reveal-up text-5xl font-bold text-center max-md:text-3xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
          The Market Reality
        </h3>
        <p className='reveal-up mt-4 text-xl text-gray-600 dark:text-gray-400 max-md:text-lg'>
          Understanding the challenges in today's investor-startup ecosystem
        </p>
      </div>

      {/* Moving Testimonials */}
      <div className='w-full space-y-8 overflow-hidden'>
        {/* First row - moving right */}
        <Marquee pauseOnHover className='[--duration:40s]'>
          {firstRow.map((insight, index) => (
            <InsightCard key={`first-${index}`} insight={insight} />
          ))}
        </Marquee>

        {/* Second row - moving left */}
        <Marquee reverse pauseOnHover className='[--duration:40s]'>
          {secondRow.map((insight, index) => (
            <InsightCard
              key={`second-${index}`}
              insight={insight}
            />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays to fade edges */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background'></div>
    </section>
  )
}

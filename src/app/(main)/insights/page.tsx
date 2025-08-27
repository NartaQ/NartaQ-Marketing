import { Metadata } from 'next'
import { Suspense } from 'react'
import InsightsHero from '@/components/insights/InsightsHero'
import FeaturedInsight from '@/components/insights/FeaturedInsight'
import InsightsList from '@/components/insights/InsightsList'
import CategoriesFilter from '@/components/insights/CategoriesFilter'
import NewsletterSection from '@/components/NewsletterSection'
import { getInsightsPageData } from '@/lib/sanity-utils'

export const metadata: Metadata = {
  title: 'NartaQ Insights | AI-Powered Startup Funding Intelligence',
  description:
    'Discover cutting-edge insights on AI-powered venture matching, startup funding trends, and the future of investment technology in the France-Tunisia corridor.',
  keywords: [
    'startup funding insights',
    'venture capital trends',
    'AI investment technology',
    'France Tunisia startup ecosystem',
    'funding intelligence',
    'venture matching insights',
    'startup ecosystem analysis',
  ],
  openGraph: {
    title: 'NartaQ Insights | AI-Powered Startup Funding Intelligence',
    description:
      'Discover cutting-edge insights on AI-powered venture matching and startup funding trends.',
    images: [
      {
        url: '/images/insights-og.png',
        width: 1200,
        height: 630,
        alt: 'NartaQ Insights - AI-Powered Startup Funding Intelligence',
      },
    ],
  },
}

export default async function InsightsPage() {
  // Fetch all insights page data
  const { posts, categories, featuredPosts, totalPosts } = await getInsightsPageData()

  return (
    <div className='flex min-h-screen flex-col bg-black text-white relative overflow-hidden'>
      {/* Hero Section */}
      <InsightsHero />

      {/* Main Content */}
      <main className='relative z-10'>
        {/* Featured Insight */}
        <Suspense fallback={<div className='h-64 animate-pulse bg-[#1a1b23]' />}>
          <FeaturedInsight featuredPosts={featuredPosts} />
        </Suspense>

        {/* Categories Filter */}
        <section className='py-8'>
          <div className='container mx-auto px-4 max-w-7xl'>
            <CategoriesFilter categories={categories} />
          </div>
        </section>

        {/* Most Read / Latest Insights */}
        <Suspense fallback={<div className='min-h-screen animate-pulse bg-[#1a1b23]' />}>
          <InsightsList posts={posts} />
        </Suspense>
      </main>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  )
}
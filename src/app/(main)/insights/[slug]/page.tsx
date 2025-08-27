import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import NewsletterSection from '@/components/NewsletterSection'
import RelatedInsights from '@/components/insights/RelatedInsights'

// This would eventually fetch from Sanity based on the slug
async function getInsight(slug: string) {
  // Mock data - replace with Sanity query
  const insights = {
    'sofi-launches-directed-share-platform': {
      title: "SoFi Launches Directed Share Platform for U.S. IPOs and Capital Raises, Powered by NartaQ",
      excerpt: "Revolutionary platform bringing IPO access to retail investors in the US market through innovative AI-powered technology.",
      image: "/images/home/api.png",
      publishedAt: "2024-12-15",
      readTime: "6 min",
      category: "Latest Insights",
      author: "NartaQ Editorial Team",
      content: [
        {
          type: 'paragraph',
          content: 'NartaQ is proud to announce our strategic partnership with SoFi Technologies, Inc. to power their new Directed Share Platform, revolutionizing access to U.S. IPOs and capital raises for retail investors.'
        },
        {
          type: 'heading',
          content: 'Democratizing Investment Opportunities'
        },
        {
          type: 'paragraph',
          content: 'This groundbreaking collaboration combines SoFi\'s innovative financial services platform with NartaQ\'s cutting-edge AI-powered matching technology to create unprecedented access for retail investors to participate in high-quality investment opportunities previously reserved for institutional investors.'
        },
        {
          type: 'paragraph',
          content: 'The Directed Share Platform leverages our proprietary algorithms to intelligently match companies seeking capital with the most suitable investors, ensuring optimal outcomes for both parties while maintaining regulatory compliance and investor protection standards.'
        },
        {
          type: 'heading',
          content: 'Technical Innovation at Scale'
        },
        {
          type: 'paragraph',
          content: 'Our AI-powered platform analyzes thousands of data points including investor preferences, risk profiles, investment history, and company fundamentals to create highly targeted matches. This sophisticated approach significantly improves allocation efficiency while reducing friction in the capital raising process.'
        }
      ]
    }
  }

  return insights[slug as keyof typeof insights] || null
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const insight = await getInsight(slug)

  if (!insight) {
    return {
      title: 'Insight Not Found | NartaQ',
      description: 'The requested insight could not be found.',
    }
  }

  return {
    title: `${insight.title} | NartaQ Insights`,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      images: [{ url: insight.image }],
    },
  }
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params
  const insight = await getInsight(slug)

  if (!insight) {
    notFound()
  }

  return (
    <div className='flex min-h-screen flex-col bg-black text-white relative overflow-hidden'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-16'>
        {/* Background */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-black via-[#0a0b14] to-[#1a1b23]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_70%)]' />
        </div>

        <div className='relative z-10 container mx-auto px-4 max-w-4xl'>
          {/* Back link */}
          <Link
            href='/insights'
            className='inline-flex items-center gap-2 text-[#a98b5d] hover:text-[#dcd7ce] transition-colors duration-300 mb-8'
          >
            <ArrowLeft className='w-4 h-4' />
            <span>Back to Insights</span>
          </Link>

          {/* Article header */}
          <div className='space-y-6'>
            <div className='flex items-center gap-2'>
              <span className='px-3 py-1 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black text-sm font-medium rounded-full'>
                {insight.category}
              </span>
            </div>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              {insight.title}
            </h1>

            <p className='text-xl text-gray-300 leading-relaxed'>
              {insight.excerpt}
            </p>

            {/* Meta information */}
            <div className='flex flex-wrap items-center gap-6 text-gray-400 text-sm'>
              <div className='flex items-center gap-2'>
                <Calendar className='w-4 h-4' />
                <span>{new Date(insight.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4' />
                <span>{insight.readTime} read</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>By {insight.author}</span>
              </div>
              <button className='flex items-center gap-2 hover:text-[#a98b5d] transition-colors duration-300'>
                <Share2 className='w-4 h-4' />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className='relative'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <div className='relative h-64 md:h-96 overflow-hidden rounded-xl'>
            <Image
              src={insight.image}
              alt={insight.title}
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className='py-16'>
        <div className='container mx-auto px-4 max-w-3xl'>
          <div className='prose prose-lg prose-invert max-w-none'>
            {insight.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className='text-2xl md:text-3xl font-bold text-[#dcd7ce] mt-12 mb-6'>
                    {block.content}
                  </h2>
                )
              }
              return (
                <p key={index} className='text-gray-300 leading-relaxed mb-6 text-lg'>
                  {block.content}
                </p>
              )
            })}
          </div>

          {/* Article footer */}
          <div className='mt-16 pt-8 border-t border-[#2a2b35]'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-400 mb-2'>Written by</p>
                <p className='font-medium text-[#dcd7ce]'>{insight.author}</p>
              </div>
              <button className='flex items-center gap-2 px-4 py-2 bg-[#1a1b23] border border-[#a98b5d]/30 rounded-lg text-[#a98b5d] hover:text-black hover:bg-gradient-to-r hover:from-[#a98b5d] hover:to-[#dcd7ce] transition-all duration-300'>
                <Share2 className='w-4 h-4' />
                <span>Share Article</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Insights */}
      <RelatedInsights currentSlug={slug} />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  )
}
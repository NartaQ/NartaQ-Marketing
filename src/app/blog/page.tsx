import { formatDistance } from 'date-fns'
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Eye,
  Globe,
  MessageCircle,
  Target,
  TrendingUp,
  User,
} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client, urlFor } from '../../lib/sanity'

export const metadata: Metadata = {
  title: 'Blog | NartaQ - Insights on AI-Powered Startup Funding',
  description:
    'Read the latest insights, updates, and stories about the future of startup funding, AI-powered venture matching, and democratizing access to capital.',
  keywords: [
    'startup funding blog',
    'venture capital insights',
    'AI venture matching',
    'startup funding platform',
    'investment trends',
    'founder resources',
    'venture capital news',
    'startup ecosystem',
    'funding strategies',
    'investor insights',
  ],
  openGraph: {
    title: 'Blog | NartaQ - Insights on AI-Powered Startup Funding',
    description:
      'Read the latest insights, updates, and stories about the future of startup funding and AI-powered venture matching.',
    type: 'website',
  },
  twitter: {
    title: 'Blog | NartaQ - Insights on AI-Powered Startup Funding',
    description:
      'Read the latest insights, updates, and stories about the future of startup funding and AI-powered venture matching.',
  },
}

type Post = {
  _id: string
  title: string
  slug: {
    current: string
  }
  metadescription?: string
  publishedAt: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  author?: {
    name?: string
    image?: {
      asset: {
        _ref: string
      }
    }
  }
  categories?: Array<{
    title: string
    slug: {
      current: string
    }
  }>
  body?: any[]
  readingTime?: number
}

// GROQ query to fetch all posts with related data, with reading time calculation
const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  metadescription,
  publishedAt,
  mainImage,
  body,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  }
}`

// Function to calculate reading time
function calculateReadingTime(body: any[]): number {
  if (!body || body.length === 0) return 1

  const wordsPerMinute = 200
  const totalWords = body.reduce((count, block) => {
    if (block._type === 'block' && block.children) {
      return (
        count +
        block.children.reduce((childCount: number, child: any) => {
          return childCount + (child.text ? child.text.split(/\s+/).length : 0)
        }, 0)
      )
    }
    return count
  }, 0)

  return Math.max(1, Math.ceil(totalWords / wordsPerMinute))
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery)

  // Add reading time to posts
  const postsWithReadingTime = posts.map((post) => ({
    ...post,
    readingTime: calculateReadingTime(post.body || []),
    // Fallback values for missing fields
    author: post.author || { name: 'NartaQ Team' },
    metadescription:
      post.metadescription ||
      'Discover insights about startup funding and venture capital.',
    categories: post.categories || [],
  }))

  // Get unique categories for filtering
  const allCategories = postsWithReadingTime.reduce((acc: any[], post) => {
    if (post.categories) {
      post.categories.forEach((category) => {
        if (!acc.find((c) => c.slug.current === category.slug.current)) {
          acc.push(category)
        }
      })
    }
    return acc
  }, [])

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <div className='relative min-h-[85vh] flex items-center justify-center overflow-hidden'>
        {/* Animated Background Grid */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black' />
          <div className='absolute inset-0 opacity-30'>
            <div className='h-full w-full bg-[linear-gradient(to_right,#a98b5d_1px,transparent_1px),linear-gradient(to_bottom,#a98b5d_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]' />
          </div>
        </div>

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-[#a98b5d]/10 rounded-full blur-xl animate-pulse' />
          <div className='absolute top-3/4 right-1/4 w-24 h-24 bg-[#dcd7ce]/10 rounded-full blur-xl animate-pulse delay-1000' />
          <div className='absolute top-1/2 right-1/3 w-20 h-20 bg-[#a98b5d]/20 rounded-full blur-lg animate-bounce' />
        </div>

        <div className='relative z-10 max-w-6xl mx-auto px-4 text-center'>
          {/* Animated Badge */}
          <div className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#a98b5d]/20 via-[#dcd7ce]/10 to-[#a98b5d]/20 border border-[#a98b5d]/40 backdrop-blur-xl mb-8 hover:border-[#a98b5d]/60 transition-all duration-300'>
            <BookOpen className='w-5 h-5 text-[#a98b5d]' />
            <span className='text-sm font-semibold text-[#dcd7ce] tracking-wide'>
              INSIGHTS & THOUGHT LEADERSHIP
            </span>
            <TrendingUp className='w-4 h-4 text-[#a98b5d]' />
          </div>

          {/* Main Headline with Animation */}
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8'>
            <span className='block text-[#dcd7ce] mb-2'>Discover</span>
            <span className='block bg-gradient-to-r from-[#a98b5d] via-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent animate-pulse'>
              Innovation
            </span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className='text-xl md:text-2xl lg:text-3xl text-[#dcd7ce]/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light'>
            Deep insights into the future of startup funding, AI-powered venture
            matching, and the democratization of entrepreneurial capital
          </p>

          {/* Stats Section */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12'>
            <div className='bg-[#1a1a1a]/60 backdrop-blur-xl border border-[#a98b5d]/20 rounded-2xl p-6 hover:border-[#a98b5d]/40 transition-all duration-300 hover:scale-105'>
              <div className='text-3xl font-bold text-[#a98b5d] mb-2'>
                {postsWithReadingTime.length}+
              </div>
              <div className='text-[#dcd7ce]/60 text-sm font-medium'>
                Articles Published
              </div>
            </div>
            <div className='bg-[#1a1a1a]/60 backdrop-blur-xl border border-[#a98b5d]/20 rounded-2xl p-6 hover:border-[#a98b5d]/40 transition-all duration-300 hover:scale-105'>
              <div className='text-3xl font-bold text-[#a98b5d] mb-2'>
                {allCategories.length || 5}+
              </div>
              <div className='text-[#dcd7ce]/60 text-sm font-medium'>
                Topic Categories
              </div>
            </div>
            <div className='bg-[#1a1a1a]/60 backdrop-blur-xl border border-[#a98b5d]/20 rounded-2xl p-6 hover:border-[#a98b5d]/40 transition-all duration-300 hover:scale-105'>
              <div className='text-3xl font-bold text-[#a98b5d] mb-2'>
                Weekly
              </div>
              <div className='text-[#dcd7ce]/60 text-sm font-medium'>
                New Content
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <div className='relative group'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
              <button className='relative px-8 py-4 bg-black rounded-2xl leading-none flex items-center gap-3 text-[#dcd7ce] hover:text-white transition-colors'>
                <Globe className='w-5 h-5' />
                <span className='font-semibold'>Explore All Topics</span>
              </button>
            </div>
            <button className='px-8 py-4 border border-[#a98b5d]/40 text-[#a98b5d] rounded-2xl hover:bg-[#a98b5d]/10 hover:border-[#a98b5d]/60 transition-all duration-300 flex items-center gap-3 font-semibold'>
              <Target className='w-5 h-5' />
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className='py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {postsWithReadingTime.length > 0 ? (
            <>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#dcd7ce] mb-4'>
                  Latest Articles
                </h2>
                <p className='text-[#dcd7ce]/60 text-lg max-w-2xl mx-auto'>
                  Stay ahead of the curve with our latest insights and analysis
                </p>
              </div>

              <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {postsWithReadingTime.map((post, index) => (
                  <PostCard key={post._id} post={post} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className='text-center py-24'>
              <div className='relative mb-8'>
                <div className='w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#a98b5d]/30 via-[#a98b5d]/10 to-transparent flex items-center justify-center border border-[#a98b5d]/20'>
                  <BookOpen className='w-12 h-12 text-[#a98b5d]' />
                </div>
                <div className='absolute -top-2 -right-2 w-6 h-6 bg-[#a98b5d] rounded-full animate-ping' />
              </div>
              <h3 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                Amazing Content Coming Soon
              </h3>
              <p className='text-[#dcd7ce]/70 text-lg max-w-md mx-auto mb-8 leading-relaxed'>
                We're crafting exceptional insights and stories about the future
                of startup funding. Stay tuned for groundbreaking content!
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='px-6 py-3 bg-[#a98b5d] text-black rounded-xl font-semibold hover:bg-[#dcd7ce] transition-colors'>
                  Get Notified
                </button>
                <button className='px-6 py-3 border border-[#a98b5d]/40 text-[#a98b5d] rounded-xl hover:bg-[#a98b5d]/10 transition-all'>
                  Learn More
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function PostCard({ post, index }: { post: Post; index: number }) {
  // Staggered animation delay
  const animationDelay = `${index * 100}ms`

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className='group block bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-3xl overflow-hidden hover:border-[#a98b5d]/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#a98b5d]/10'
      style={{ animationDelay }}
    >
      {/* Image Section */}
      {post.mainImage ? (
        <div className='relative h-56 w-full overflow-hidden'>
          <Image
            src={urlFor(post.mainImage).width(500).height(300).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className='object-cover group-hover:scale-110 transition-transform duration-700'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

          {/* Reading Time Badge */}
          <div className='absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-[#a98b5d]/30 rounded-full px-3 py-1 flex items-center gap-1'>
            <Clock className='w-3 h-3 text-[#a98b5d]' />
            <span className='text-xs text-[#dcd7ce] font-medium'>
              {post.readingTime} min read
            </span>
          </div>

          {/* Category Badge */}
          {post.categories && post.categories.length > 0 && (
            <div className='absolute top-4 left-4'>
              <span className='bg-[#a98b5d]/90 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide'>
                {post.categories[0].title}
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className='relative h-56 w-full bg-gradient-to-br from-[#a98b5d]/20 via-[#1a1a1a] to-[#a98b5d]/10 flex items-center justify-center'>
          <BookOpen className='w-16 h-16 text-[#a98b5d]/50' />

          {/* Reading Time Badge */}
          <div className='absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-[#a98b5d]/30 rounded-full px-3 py-1 flex items-center gap-1'>
            <Clock className='w-3 h-3 text-[#a98b5d]' />
            <span className='text-xs text-[#dcd7ce] font-medium'>
              {post.readingTime} min read
            </span>
          </div>
        </div>
      )}

      <div className='p-8'>
        {/* Meta Information */}
        <div className='flex items-center justify-between text-sm text-[#dcd7ce]/60 mb-5'>
          <div className='flex items-center gap-3'>
            {post.author?.image ? (
              <div className='relative h-8 w-8 rounded-full overflow-hidden ring-2 ring-[#a98b5d]/30'>
                <Image
                  src={urlFor(post.author.image).width(32).height(32).url()}
                  alt={post.author?.name || 'Author'}
                  fill
                  className='object-cover'
                />
              </div>
            ) : (
              <div className='h-8 w-8 rounded-full bg-gradient-to-br from-[#a98b5d] to-[#dcd7ce] flex items-center justify-center'>
                <User className='w-4 h-4 text-black' />
              </div>
            )}
            <span className='font-medium text-[#dcd7ce]'>
              {post.author?.name || 'NartaQ Team'}
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4' />
            <span>
              {formatDistance(new Date(post.publishedAt), new Date(), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className='text-xl font-bold text-[#dcd7ce] mb-4 group-hover:text-[#a98b5d] transition-colors duration-300 line-clamp-2 leading-tight'>
          {post.title}
        </h3>

        {/* Description */}
        <p className='text-[#dcd7ce]/70 mb-6 line-clamp-3 leading-relaxed text-sm'>
          {post.metadescription}
        </p>

        {/* Additional Categories */}
        {post.categories && post.categories.length > 1 && (
          <div className='flex flex-wrap gap-2 mb-6'>
            {post.categories.slice(1, 3).map((category) => (
              <span
                key={category.slug.current}
                className='bg-[#a98b5d]/10 border border-[#a98b5d]/20 text-[#a98b5d] px-3 py-1 rounded-full text-xs font-medium hover:bg-[#a98b5d]/20 transition-colors'
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Read More with Enhanced Styling */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3 text-[#a98b5d] font-semibold group-hover:gap-4 transition-all duration-300'>
            <span>Read Article</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
          </div>

          {/* Interaction Icons */}
          <div className='flex items-center gap-4 text-[#dcd7ce]/40'></div>
        </div>
      </div>
    </Link>
  )
}

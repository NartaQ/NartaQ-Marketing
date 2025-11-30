import { formatDistance } from 'date-fns'
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Globe,
  Target,
  TrendingUp,
  User,
} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client, urlFor } from '../../lib/sanity'
import NewsletterSection from '@/components/pages/NewsletterSection'
import BlogCTAButtons from '@/components/pages/BlogCTAButtons'

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

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const selectedCategory = params?.category

  const posts: Post[] = await client.fetch(postsQuery)

  console.log('Fetched posts:', posts.length)
  console.log('First post categories:', posts[0]?.categories)

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
    if (post.categories && Array.isArray(post.categories)) {
      post.categories.forEach((category) => {
        if (category?.title && category?.slug?.current && !acc.find((c) => c.slug?.current === category.slug.current)) {
          acc.push(category)
        }
      })
    }
    return acc
  }, [])

  console.log('All categories found:', allCategories)

  // Filter posts by selected category
  const filteredPosts = selectedCategory
    ? postsWithReadingTime.filter((post) =>
      post.categories?.some((cat) => cat?.slug?.current === selectedCategory)
    )
    : postsWithReadingTime

  return (
    <div className='min-h-screen bg-[#0a0a0a] text-white'>
      {/* Hero Section */}
      <div className='relative pt-32 pb-20 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold text-[#dcd7ce] mb-6'>
              Blog
            </h1>
            <p className='text-xl text-[#dcd7ce]/70 mb-8'>
              Insights on startup funding, venture capital, and building the future of entrepreneurship.
            </p>
            <BlogCTAButtons />
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section id='latest' className='py-16 sm:py-24 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Category Filter */}
          {allCategories.length > 0 && (
            <div className='mb-12'>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link
                  href='/blog'
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${!selectedCategory
                    ? 'bg-[#a98b5d] text-black shadow-lg shadow-[#a98b5d]/30'
                    : 'bg-[#1a1a1a]/60 border border-[#a98b5d]/20 text-[#dcd7ce] hover:border-[#a98b5d]/40 hover:bg-[#a98b5d]/10'
                    }`}
                >
                  All Articles
                </Link>
                {allCategories.map((category) => (
                  <Link
                    key={category.slug.current}
                    href={`/blog?category=${category.slug.current}`}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.slug.current
                      ? 'bg-[#a98b5d] text-black shadow-lg shadow-[#a98b5d]/30'
                      : 'bg-[#1a1a1a]/60 border border-[#a98b5d]/20 text-[#dcd7ce] hover:border-[#a98b5d]/40 hover:bg-[#a98b5d]/10'
                      }`}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredPosts.length > 0 ? (
            <>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#dcd7ce] mb-4'>
                  {selectedCategory
                    ? `${allCategories.find((c) => c.slug.current === selectedCategory)?.title || 'Filtered'} Articles`
                    : 'Latest Articles'}
                </h2>
                <p className='text-[#dcd7ce]/60 text-lg max-w-2xl mx-auto'>
                  {selectedCategory
                    ? `Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} in this category`
                    : 'Stay ahead of the curve with our latest insights and analysis'}
                </p>
              </div>

              <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {filteredPosts.map((post, index) => (
                  <PostCard key={post._id} post={post} index={index} />
                ))}
              </div>
            </>
          ) : selectedCategory ? (
            <div className='text-center py-24'>
              <div className='relative mb-8'>
                <div className='w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#a98b5d]/30 via-[#a98b5d]/10 to-transparent flex items-center justify-center border border-[#a98b5d]/20'>
                  <BookOpen className='w-12 h-12 text-[#a98b5d]' />
                </div>
              </div>
              <h3 className='text-3xl font-bold text-[#dcd7ce] mb-6'>
                No Articles in This Category Yet
              </h3>
              <p className='text-[#dcd7ce]/70 text-lg max-w-md mx-auto mb-8 leading-relaxed'>
                We're working on content for this topic. Check back soon or explore other categories!
              </p>
              <Link
                href='/blog'
                className='inline-block px-6 py-3 bg-[#a98b5d] text-black rounded-xl font-semibold hover:bg-[#dcd7ce] transition-colors'
              >
                View All Articles
              </Link>
            </div>
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

      {/* Newsletter/Apply CTA aligned with home aesthetic */}
      <NewsletterSection />
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
          <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-black/20 to-transparent' />

          {/* Reading Time Badge */}
          <div className='absolute top-4 right-4 bg-[#0a0a0a]/60 backdrop-blur-md border border-[#a98b5d]/30 rounded-full px-3 py-1 flex items-center gap-1'>
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
          <div className='absolute top-4 right-4 bg-[#0a0a0a]/60 backdrop-blur-md border border-[#a98b5d]/30 rounded-full px-3 py-1 flex items-center gap-1'>
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

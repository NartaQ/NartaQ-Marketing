import { client, urlFor } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatDistance } from 'date-fns'
import { Calendar, User, ArrowLeft, BookOpen } from 'lucide-react'
import { Metadata } from 'next'
import NewsletterSection from '@/components/pages/NewsletterSection'

type Post = {
  _id: string
  title: string
  slug: {
    current: string
  }
  metadescription?: string
  metatitles?: string[]
  publishedAt: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  ogImage?: {
    asset: {
      _ref: string
    }
  }
  author: {
    name: string
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
  body: any[]
}

// GROQ query to fetch a single post
const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  metadescription,
  metatitles,
  publishedAt,
  mainImage,
  ogImage,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  },
  body
}`

// GROQ query to fetch related posts
const relatedPostsQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  metadescription,
  publishedAt,
  mainImage,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  }
}`

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post: Post = await client.fetch(postQuery, { slug })

  if (!post) {
    return {
      title: 'Post Not Found | NartaQ Blog',
    }
  }

  return {
    title: post.metatitles?.[0] || `${post.title} | NartaQ Blog`,
    description: post.metadescription || `Read ${post.title} on the NartaQ blog`,
    openGraph: {
      title: post.title,
      description: post.metadescription || `Read ${post.title} on the NartaQ blog`,
      images: post.ogImage ? [urlFor(post.ogImage).width(1200).height(630).url()] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metadescription || `Read ${post.title} on the NartaQ blog`,
      images: post.ogImage ? [urlFor(post.ogImage).width(1200).height(630).url()] : [],
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post: Post = await client.fetch(postQuery, { slug })

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts: Post[] = await client.fetch(relatedPostsQuery, {
    slug
  })

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <div className='relative min-h-[70vh] flex items-end overflow-hidden'>
        {/* Background Image */}
        {post.mainImage && (
          <div className='absolute inset-0'>
            <Image
              src={urlFor(post.mainImage).width(1920).height(1080).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20' />
          </div>
        )}

        {/* Animated Background Pattern */}
        <div className='absolute inset-0 grid-pattern opacity-10' />

        <div className='relative z-10 max-w-4xl mx-auto px-4 pb-16'>
          {/* Back Button */}
          <div className='mb-8'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-2 text-[#dcd7ce]/80 hover:text-[#a98b5d] transition-colors'
            >
              <ArrowLeft className='w-4 h-4' />
              <span>Back to Blog</span>
            </Link>
          </div>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className='flex flex-wrap gap-2 mb-6'>
              {post.categories.map((category) => (
                <span
                  key={category.slug.current}
                  className='bg-[#a98b5d]/20 text-[#a98b5d] px-3 py-1 rounded-full text-sm font-medium backdrop-blur-xl border border-[#a98b5d]/30'
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#dcd7ce]'>
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className='flex flex-wrap items-center gap-6 text-[#dcd7ce]/80'>
            <div className='flex items-center gap-2'>
              {post.author?.image && (
                <div className='relative h-8 w-8 rounded-full overflow-hidden'>
                  <Image
                    src={urlFor(post.author.image).width(32).height(32).url()}
                    alt={post.author.name}
                    fill
                    className='object-cover'
                  />
                </div>
              )}
              <User className='w-4 h-4' />
              <span className='font-medium'>{post.author?.name}</span>
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
        </div>
      </div>

      {/* Article Content */}
      <article className='py-16 sm:py-24'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg prose-invert max-w-none'>
            <PortableText
              value={post.body}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className='relative w-full h-96 my-8 rounded-2xl overflow-hidden'>
                      <Image
                        src={urlFor(value).width(800).height(400).url()}
                        alt={value.alt || 'Blog post image'}
                        fill
                        className='object-cover'
                      />
                    </div>
                  ),
                },
                block: {
                  h1: ({ children }) => (
                    <h1 className='text-4xl font-bold text-[#dcd7ce] mb-6 mt-12'>
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className='text-3xl font-bold text-[#dcd7ce] mb-4 mt-10'>
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className='text-2xl font-bold text-[#a98b5d] mb-4 mt-8'>
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className='text-xl font-semibold text-[#dcd7ce] mb-3 mt-6'>
                      {children}
                    </h4>
                  ),
                  normal: ({ children }) => (
                    <p className='text-[#dcd7ce]/90 leading-relaxed mb-6 text-lg'>
                      {children}
                    </p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className='border-l-4 border-[#a98b5d] pl-6 my-8 bg-[#a98b5d]/5 py-4 rounded-r-lg'>
                      <div className='text-[#dcd7ce] italic text-lg'>
                        {children}
                      </div>
                    </blockquote>
                  ),
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      className='text-[#a98b5d] hover:text-[#dcd7ce] underline transition-colors'
                      target={value.href.startsWith('http') ? '_blank' : undefined}
                      rel={value.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className='font-bold text-[#dcd7ce]'>{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className='italic text-[#a98b5d]'>{children}</em>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className='list-disc list-inside space-y-2 mb-6 text-[#dcd7ce]/90'>
                      {children}
                    </ul>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className='text-lg leading-relaxed'>{children}</li>
                  ),
                },
              }}
            />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className='py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-black border-t border-[#a98b5d]/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a98b5d]/20 to-[#dcd7ce]/20 border border-[#a98b5d]/30 backdrop-blur-xl mb-6'>
                <BookOpen className='w-4 h-4 text-[#a98b5d]' />
                <span className='text-sm font-medium text-[#dcd7ce]'>
                  RELATED ARTICLES
                </span>
              </div>
              <h2 className='text-3xl font-bold text-[#dcd7ce] mb-4'>
                Continue Reading
              </h2>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost._id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA for continuity with home aesthetic */}
      <NewsletterSection />
    </div>
  )
}

function RelatedPostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className='group block bg-[#1a1a1a]/50 border border-[#a98b5d]/20 rounded-2xl overflow-hidden hover:border-[#a98b5d]/40 transition-all duration-300 hover:scale-[1.02]'
    >
      {post.mainImage && (
        <div className='relative h-48 w-full overflow-hidden'>
          <Image
            src={urlFor(post.mainImage).width(400).height(200).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-300'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
        </div>
      )}

      <div className='p-6'>
        {/* Meta Information */}
        <div className='flex items-center gap-3 text-sm text-[#dcd7ce]/60 mb-3'>
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
        <h3 className='text-lg font-semibold text-[#dcd7ce] mb-3 group-hover:text-[#a98b5d] transition-colors line-clamp-2'>
          {post.title}
        </h3>

        {/* Description */}
        {post.metadescription && (
          <p className='text-[#dcd7ce]/70 mb-4 line-clamp-2 text-sm leading-relaxed'>
            {post.metadescription}
          </p>
        )}

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {post.categories.slice(0, 2).map((category) => (
              <span
                key={category.slug.current}
                className='bg-[#a98b5d]/10 text-[#a98b5d] px-2 py-1 rounded-full text-xs font-medium'
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
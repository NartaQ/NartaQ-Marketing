'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { PostListItem } from '@/types/sanity'
import { formatDate } from '@/lib/sanity-utils'

interface FeaturedInsightProps {
  featuredPosts: PostListItem[]
}

export default function FeaturedInsight({ featuredPosts }: FeaturedInsightProps) {
  // Use the first featured post, or fallback content if none available
  const featuredInsight = featuredPosts.length > 0 
    ? featuredPosts[0] 
    : {
        title: "Welcome to NartaQ Insights",
        excerpt: "Discover cutting-edge insights on AI-powered venture matching, startup funding trends, and the future of investment technology.",
        mainImage: null,
        publishedAt: new Date().toISOString(),
        readTime: 5,
        slug: { current: "welcome-to-nartaq-insights" },
        categories: [{ title: "Latest Insights", color: "blue" }]
      }

  const imageUrl = featuredInsight.mainImage?.asset?.url || "/images/home/api.png"

  const category = featuredInsight.categories?.[0]?.title || "Latest Insights"

  return (
    <section className='py-16 px-4'>
      <div className='container mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative group'
        >
          {/* Featured badge */}
          <div className='flex items-center gap-2 mb-6'>
            <div className='px-3 py-1 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black text-sm font-medium rounded-full'>
              {category}
            </div>
          </div>

          <Link href={`/insights/${featuredInsight.slug.current}`}>
            <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1b23] to-[#0a0b14] border border-[#2a2b35] group-hover:border-[#a98b5d]/50 transition-all duration-300'>
              {/* Featured image */}
              <div className='relative h-64 md:h-80 lg:h-96 overflow-hidden'>
                <Image
                  src={imageUrl}
                  alt={featuredInsight.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
              </div>

              {/* Content overlay */}
              <div className='absolute bottom-0 left-0 right-0 p-6 md:p-8'>
                <div className='max-w-3xl'>
                  <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight'>
                    {featuredInsight.title}
                  </h2>
                  <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                    {featuredInsight.excerpt}
                  </p>

                  {/* Meta information */}
                  <div className='flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6'>
                    <div className='flex items-center gap-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{formatDate(featuredInsight.publishedAt)}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Clock className='w-4 h-4' />
                      <span>{featuredInsight.readTime} min read</span>
                    </div>
                  </div>

                  {/* Read more button */}
                  <div className='inline-flex items-center gap-2 text-[#a98b5d] font-medium group-hover:text-[#dcd7ce] transition-colors duration-300'>
                    <span>Continue Reading</span>
                    <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className='absolute inset-0 bg-gradient-to-r from-[#a98b5d]/5 to-[#dcd7ce]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
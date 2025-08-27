'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { PostListItem } from '@/types/sanity'
import { formatDate } from '@/lib/sanity-utils'

interface InsightsListProps {
  posts: PostListItem[]
}

export default function InsightsList({ posts }: InsightsListProps) {
  const [visibleCount, setVisibleCount] = useState(9)

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, posts.length))
  }

  // Show fallback message if no posts
  if (!posts.length) {
    return (
      <section className='py-16 px-4'>
        <div className='container mx-auto max-w-7xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent'>
              Latest Insights
            </span>
          </h2>
          <p className='text-gray-400 text-lg'>
            No insights available yet. Check back soon for the latest updates!
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className='py-16 px-4'>
      <div className='container mx-auto max-w-7xl'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent'>
              Latest Insights
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Stay updated with the latest developments in AI-powered investment technology and startup funding trends.
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.slice(0, visibleCount).map((post, index) => {
            const imageUrl = post.mainImage?.asset?.url || "/images/home/api.png"
            const category = post.categories?.[0]?.title || "Insights"
            
            return (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group cursor-pointer'
              >
                <Link href={`/insights/${post.slug.current}`}>
                  <div className='relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1b23] to-[#0a0b14] border border-[#2a2b35] group-hover:border-[#a98b5d]/50 transition-all duration-300 h-full'>
                    {/* Image */}
                    <div className='relative h-48 overflow-hidden'>
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
                      
                      {/* Category badge */}
                      <div className='absolute top-4 left-4'>
                        <span className='px-3 py-1 bg-black/60 backdrop-blur-sm text-[#a98b5d] text-xs font-medium rounded-full border border-[#a98b5d]/30'>
                          {category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='p-6 flex flex-col flex-1'>
                      <h3 className='text-xl font-semibold text-white mb-3 leading-tight group-hover:text-[#dcd7ce] transition-colors duration-300'>
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className='text-gray-400 text-sm mb-4 flex-1 leading-relaxed'>
                          {post.excerpt}
                        </p>
                      )}

                      {/* Meta information */}
                      <div className='flex items-center justify-between text-xs text-gray-500 mb-4'>
                        <div className='flex items-center gap-3'>
                          <div className='flex items-center gap-1'>
                            <Calendar className='w-3 h-3' />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          {post.readTime && (
                            <div className='flex items-center gap-1'>
                              <Clock className='w-3 h-3' />
                              <span>{post.readTime} min</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Read more link */}
                      <div className='flex items-center gap-2 text-[#a98b5d] text-sm font-medium group-hover:text-[#dcd7ce] transition-colors duration-300'>
                        <span>Read More</span>
                        <ArrowRight className='w-3 h-3 transition-transform duration-300 group-hover:translate-x-1' />
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-[#a98b5d]/5 to-[#dcd7ce]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < posts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mt-12'
          >
            <button
              onClick={loadMore}
              className='px-8 py-3 bg-gradient-to-r from-[#1a1b23] to-[#2a2b35] border border-[#a98b5d]/30 text-[#dcd7ce] font-medium rounded-lg hover:from-[#a98b5d] hover:to-[#dcd7ce] hover:text-black transition-all duration-300 transform hover:scale-105'
            >
              Load More Articles ({posts.length - visibleCount} remaining)
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
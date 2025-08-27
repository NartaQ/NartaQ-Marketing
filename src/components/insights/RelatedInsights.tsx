'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

// Mock related insights - would be fetched from Sanity
const relatedInsights = [
  {
    id: 1,
    title: "BLX partners with NartaQ to open IPO and equity fundraising opportunities to retail investors",
    excerpt: "Discover how we're building the technology to connect retail investors to exclusive opportunities.",
    image: "/images/home/integrations1.png",
    publishedAt: "Oct 2024",
    readTime: "4 min",
    category: "Company News",
    slug: "blx-partners-with-nartaq"
  },
  {
    id: 2,
    title: "Norwegian retail investors gain improved access to private placements through Nordnet and NartaQ",
    excerpt: "Expanding access to private investment opportunities in the Nordic region.",
    image: "/images/home/history.png",
    publishedAt: "Nov 2024",
    readTime: "4 min",
    category: "Company News",
    slug: "norwegian-investors-private-placements"
  },
  {
    id: 3,
    title: "BLX partners with NartaQ to open IPO and equity fundraising opportunities to retail investors",
    excerpt: "Creating new pathways for retail participation in growth companies.",
    image: "/images/home/multi-sub.png",
    publishedAt: "Oct 2024",
    readTime: "7 min",
    category: "Case Studies",
    slug: "blx-ipo-opportunities"
  }
]

interface RelatedInsightsProps {
  currentSlug: string
}

export default function RelatedInsights({ currentSlug }: RelatedInsightsProps) {
  // Filter out current article
  const filteredInsights = relatedInsights.filter(insight => insight.slug !== currentSlug)

  return (
    <section className='py-16 px-4 bg-gradient-to-br from-[#0a0b14] to-[#1a1b23]'>
      <div className='container mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-[#dcd7ce] to-[#a98b5d] bg-clip-text text-transparent'>
              Related Articles
            </span>
          </h2>
          <p className='text-gray-400 text-lg'>
            Continue exploring insights in AI-powered investment technology
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {filteredInsights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href={`/insights/${insight.slug}`}>
                <div className='relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1b23] to-[#0a0b14] border border-[#2a2b35] group-hover:border-[#a98b5d]/50 transition-all duration-300 h-full'>
                  {/* Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
                    
                    {/* Category badge */}
                    <div className='absolute top-4 left-4'>
                      <span className='px-3 py-1 bg-black/60 backdrop-blur-sm text-[#a98b5d] text-xs font-medium rounded-full border border-[#a98b5d]/30'>
                        {insight.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-white mb-3 leading-tight group-hover:text-[#dcd7ce] transition-colors duration-300'>
                      {insight.title}
                    </h3>
                    <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                      {insight.excerpt}
                    </p>

                    {/* Meta information */}
                    <div className='flex items-center gap-3 text-xs text-gray-500 mb-4'>
                      <div className='flex items-center gap-1'>
                        <Calendar className='w-3 h-3' />
                        <span>{insight.publishedAt}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-3 h-3' />
                        <span>{insight.readTime}</span>
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
          ))}
        </div>

        {/* View all insights link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='text-center mt-12'
        >
          <Link
            href='/insights'
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a98b5d] to-[#dcd7ce] text-black font-medium rounded-lg hover:scale-105 transition-transform duration-300'
          >
            <span>View All Insights</span>
            <ArrowRight className='w-4 h-4' />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
#!/usr/bin/env node
/**
 * Sanity Content Seeding Script
 * 
 * This script creates sample blog posts and categories for your insights page.
 * Run with: node scripts/seed-data.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({path: './.env.local'   })
console.log('Using Sanity API token:', process.env.SANITY_API_TOKEN)
// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kdmsve3e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // You'll need to create this
  useCdn: false
})

// Sample categories
const categories = [
  {
    _id: 'category-ai',
    _type: 'category',
    title: 'Artificial Intelligence',
    slug: { current: 'artificial-intelligence' },
    description: 'Insights on AI advancements and applications'
  },
  {
    _id: 'category-automation',
    _type: 'category', 
    title: 'Automation',
    slug: { current: 'automation' },
    description: 'Business process automation and optimization'
  },
  {
    _id: 'category-integration',
    _type: 'category',
    title: 'System Integration',
    slug: { current: 'system-integration' },
    description: 'Connecting systems and platforms effectively'
  },
  {
    _id: 'category-analytics',
    _type: 'category',
    title: 'Data Analytics',
    slug: { current: 'data-analytics' },
    description: 'Data-driven insights and business intelligence'
  }
]

// Sample blog posts
const posts = [
  {
    _id: 'post-ai-future',
    _type: 'post',
    title: 'The Future of AI-Driven Business Operations',
    slug: { current: 'future-of-ai-driven-business-operations' },
    excerpt: 'Explore how artificial intelligence is revolutionizing business operations and what it means for the future of work.',
    publishedAt: '2024-12-15T10:00:00.000Z',
    featured: true,
    categories: [
      { _type: 'reference', _ref: 'category-ai' },
      { _type: 'reference', _ref: 'category-automation' }
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Artificial intelligence is no longer a futuristic concept—it\'s transforming businesses today. From automating routine tasks to providing predictive analytics, AI is reshaping how organizations operate.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'In this comprehensive analysis, we explore the key areas where AI is making the biggest impact and what businesses need to know to stay competitive in an AI-driven world.'
          }
        ]
      }
    ],
    seoTitle: 'AI-Driven Business Operations: Future Trends & Insights',
    seoDescription: 'Discover how AI is transforming business operations. Learn about key trends, implementation strategies, and future opportunities.',
    readTime: 8
  },
  {
    _id: 'post-integration-challenges',
    _type: 'post',
    title: 'Overcoming System Integration Challenges in Modern Enterprises',
    slug: { current: 'overcoming-system-integration-challenges' },
    excerpt: 'Learn practical strategies to tackle common integration challenges and build robust, scalable system architectures.',
    publishedAt: '2024-12-10T14:30:00.000Z',
    featured: false,
    categories: [
      { _type: 'reference', _ref: 'category-integration' },
      { _type: 'reference', _ref: 'category-automation' }
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Modern enterprises rely on dozens of different systems and platforms. From CRM and ERP systems to marketing automation tools and custom applications, the challenge isn\'t just having these tools—it\'s making them work together seamlessly.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This guide outlines proven strategies for overcoming the most common integration challenges and building a connected digital ecosystem that drives business value.'
          }
        ]
      }
    ],
    seoTitle: 'System Integration Challenges: Solutions for Modern Enterprises',
    seoDescription: 'Practical solutions for enterprise system integration challenges. Build scalable, connected digital ecosystems.',
    readTime: 12
  },
  {
    _id: 'post-data-analytics-roi',
    _type: 'post',
    title: 'Measuring ROI from Data Analytics Initiatives',
    slug: { current: 'measuring-roi-data-analytics-initiatives' },
    excerpt: 'A comprehensive framework for measuring and demonstrating the return on investment from your data analytics projects.',
    publishedAt: '2024-12-05T09:15:00.000Z',
    featured: false,
    categories: [
      { _type: 'reference', _ref: 'category-analytics' }
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Investing in data analytics capabilities is essential for modern businesses, but measuring the return on these investments can be challenging. Unlike traditional capital expenditures, the benefits of analytics often manifest in improved decision-making, risk reduction, and operational efficiency.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This framework provides actionable methods for tracking and demonstrating the tangible value of your data analytics initiatives.'
          }
        ]
      }
    ],
    seoTitle: 'Data Analytics ROI: How to Measure Success & Impact',
    seoDescription: 'Learn to measure and demonstrate ROI from data analytics initiatives with our comprehensive framework.',
    readTime: 10
  },
  {
    _id: 'post-automation-strategies',
    _type: 'post',
    title: 'Building Scalable Automation Strategies for Growing Teams',
    slug: { current: 'building-scalable-automation-strategies' },
    excerpt: 'Discover how to implement automation strategies that grow with your team and business needs.',
    publishedAt: '2024-11-28T16:45:00.000Z',
    featured: true,
    categories: [
      { _type: 'reference', _ref: 'category-automation' },
      { _type: 'reference', _ref: 'category-integration' }
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'As organizations scale, the need for efficient, repeatable processes becomes critical. Automation isn\'t just about reducing manual work—it\'s about creating systems that can handle increased volume and complexity without proportional increases in overhead.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This strategic guide covers how to design automation frameworks that can evolve with your organization\'s growth trajectory.'
          }
        ]
      }
    ],
    seoTitle: 'Scalable Automation Strategies for Growing Business Teams',
    seoDescription: 'Build automation strategies that scale with your team. Learn frameworks for sustainable business growth.',
    readTime: 15
  },
  {
    _id: 'post-ai-tools-comparison',
    _type: 'post',
    title: 'AI Tools Comparison: Finding the Right Solution for Your Business',
    slug: { current: 'ai-tools-comparison-business-solutions' },
    excerpt: 'A detailed comparison of leading AI tools and platforms to help you choose the right solution for your specific use case.',
    publishedAt: '2024-11-20T11:30:00.000Z',
    featured: false,
    categories: [
      { _type: 'reference', _ref: 'category-ai' },
      { _type: 'reference', _ref: 'category-analytics' }
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The AI tools landscape is rapidly evolving, with new platforms and solutions emerging regularly. Choosing the right AI tool for your business can be overwhelming, especially when considering factors like cost, integration capabilities, and specific use case requirements.'
          }
        ]
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This comprehensive comparison evaluates the leading AI platforms across key criteria to help you make an informed decision.'
          }
        ]
      }
    ],
    seoTitle: 'AI Tools Comparison 2024: Choose the Right Business Solution',
    seoDescription: 'Compare leading AI tools and platforms. Find the perfect AI solution for your business needs with our detailed analysis.',
    readTime: 18
  }
]

async function seedData() {
  try {
    console.log('🌱 Starting to seed data...')
    
    // Create categories first
    console.log('📁 Creating categories...')
    for (const category of categories) {
      const result = await client.createOrReplace(category)
      console.log(`✅ Created category: ${category.title}`)
    }
    
    // Create posts
    console.log('📝 Creating blog posts...')
    for (const post of posts) {
      const result = await client.createOrReplace(post)
      console.log(`✅ Created post: ${post.title}`)
    }
    
    console.log('🎉 Successfully seeded all data!')
    console.log(`Created ${categories.length} categories and ${posts.length} blog posts.`)
    
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

// Run the seeding
seedData()
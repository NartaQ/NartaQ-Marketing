'use server'

import { sanityFetch } from '@/lib/sanity'

export interface CareerPosition {
  _id: string
  title: string
  slug: { current: string }
  description: string
  skills: string[]
  requirements: string[]
  department: string
  location: string
  employmentType: string
  isActive: boolean
}

export interface Benefit {
  icon: string
  title: string
  description: string
  highlight: string
}

export interface CultureValue {
  icon: string
  title: string
  description: string
  principles: string[]
}

export interface CareerPageSettings {
  heroTitle: string
  heroSubtitle: string
  heroBadgeText: string
  whyNartaqTitle: string
  whyNartaqSubtitle: string
  benefits: Benefit[]
  cultureValues: CultureValue[]
  ctaTitle: string
  ctaDescription: string
  ctaButtonText: string
}

/**
 * Fetches active career positions from Sanity CMS
 * Returns empty array if not found or on error
 */
export async function getCareerPositions(): Promise<CareerPosition[]> {
  const query = `*[_type == "careerPosition" && isActive == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    skills,
    requirements,
    department,
    location,
    employmentType,
    isActive
  }`

  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching career positions:', error)
    return []
  }
}

/**
 * Fetches career page settings from Sanity CMS
 * Returns default settings if not found or on error
 */
export async function getCareerPageSettings(): Promise<CareerPageSettings> {
  const query = `*[_type == "careerPageSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroBadgeText,
    whyNartaqTitle,
    whyNartaqSubtitle,
    benefits,
    cultureValues,
    ctaTitle,
    ctaDescription,
    ctaButtonText
  }`

  try {
    const settings = await client.fetch(query)
    return settings || getDefaultCareerPageSettings()
  } catch (error) {
    console.error('Error fetching career page settings:', error)
    return getDefaultCareerPageSettings()
  }
}

/**
 * Returns default career page settings
 */
function getDefaultCareerPageSettings(): CareerPageSettings {
  return {
    heroTitle: 'Join the Future of Investment Technology',
    heroSubtitle:
      'Build the AI-powered venture capital platform revolutionizing how global investors discover exceptional startups from developing countries, with a focus on Africa.',
    heroBadgeText: 'Pre-Seed Startup • Series A Track',
    whyNartaqTitle: 'Why NartaQ is Your Dream Opportunity',
    whyNartaqSubtitle:
      'Join a pre-seed startup building blockchain infrastructure for startup governance and cap table management. We enable founders to manage equity, raise capital, and maintain compliance through secure, transparent technology.',
    benefits: [
      {
        icon: 'rocket',
        title: 'Early-Stage Impact',
        description:
          'Ground-floor opportunity to shape product direction and company culture. Your work directly influences our Series A trajectory.',
        highlight: 'High Growth Potential',
      },
      {
        icon: 'brain',
        title: 'Cutting-Edge Technology',
        description:
          'Work with AI-powered matching, blockchain-based governance, and modern web frameworks. Build secure infrastructure for startup equity management and fundraising automation.',
        highlight: 'Innovation Leader',
      },
      {
        icon: 'award',
        title: 'Elite Network Access',
        description:
          'Direct exposure to top-tier global investors, successful entrepreneurs, and emerging market tech ecosystem leaders across Africa and developing countries.',
        highlight: 'Premium Connections',
      },
      {
        icon: 'trending-up',
        title: 'Exceptional Growth',
        description:
          'Fast-track your career in a rapidly scaling startup. Learn from experienced founders and industry experts.',
        highlight: 'Career Acceleration',
      },
      {
        icon: 'shield',
        title: 'Mission-Driven Work',
        description:
          'Bridge exceptional talent from developing countries with global capital. Create lasting impact on entrepreneurship and innovation across Africa.',
        highlight: 'Meaningful Purpose',
      },
      {
        icon: 'globe',
        title: 'Global Remote Culture',
        description:
          'Work from anywhere with a diverse, international team. Flexible hours and focus on results, not location.',
        highlight: 'Work-Life Balance',
      },
    ],
    cultureValues: [
      {
        icon: 'brain',
        title: 'Innovation First',
        description:
          'We push boundaries with cutting-edge technology and creative solutions. Every challenge is an opportunity to innovate.',
        principles: [
          'Continuous Learning',
          'Technical Excellence',
          'Creative Problem Solving',
        ],
      },
      {
        icon: 'users',
        title: 'Collaborative Excellence',
        description:
          'We win together through diverse perspectives, open communication, and shared ownership of our mission.',
        principles: ['Team First', 'Global Mindset', 'Knowledge Sharing'],
      },
      {
        icon: 'target',
        title: 'Impact Driven',
        description:
          'Everything we build serves our mission to bridge exceptional talent with global capital and create lasting value.',
        principles: ['Mission Focus', 'Quality Delivery', 'Long-term Thinking'],
      },
    ],
    ctaTitle: 'Ready to Shape the Future?',
    ctaDescription:
      'Do not see the perfect role? We are always looking for exceptional talent. Send us your application and let us explore how you can contribute to our mission.',
    ctaButtonText: 'Apply Now - Join NartaQ',
  }
}

export interface CareerPositionDetail extends CareerPosition {
  responsibilities: string[]
  benefits: string[]
  salaryRange?: {
    min: number
    max: number
    currency: string
  }
  metaDescription?: string
}

/**
 * Fetches a single career position by slug from Sanity CMS
 * Returns null if not found or on error
 */
export async function getCareerPosition(slug: string): Promise<CareerPositionDetail | null> {
  const query = `*[_type == "careerPosition" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    description,
    skills,
    requirements,
    responsibilities,
    benefits,
    department,
    location,
    employmentType,
    salaryRange,
    metaDescription,
    isActive
  }`

  try {
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching career position:', error)
    return null
  }
}

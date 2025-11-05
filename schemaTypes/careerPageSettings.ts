import { defineField, defineType } from 'sanity'

// Benefit type for GraphQL compatibility
export const benefitType = defineType({
  name: 'benefit',
  title: 'Benefit',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "rocket", "brain", "award")',
    }),
    defineField({
      name: 'title',
      title: 'Benefit Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight Tag',
      type: 'string',
    }),
  ],
})

// Culture Value type for GraphQL compatibility
export const cultureValueType = defineType({
  name: 'cultureValue',
  title: 'Culture Value',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name',
    }),
    defineField({
      name: 'title',
      title: 'Value Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'principles',
      title: 'Key Principles',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})

const careerPageSettings = defineType({
  name: 'careerPageSettings',
  title: 'Career Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Join the Future of Investment Technology',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      initialValue:
        'Build the AI-powered DAO creation platform revolutionizing how elite investors and exceptional startups collaborate in the France-Tunisia corridor.',
    }),
    defineField({
      name: 'heroBadgeText',
      title: 'Hero Badge Text',
      type: 'string',
      initialValue: 'Pre-Seed Startup • Series A Track',
    }),
    defineField({
      name: 'whyNartaqTitle',
      title: 'Why NartaQ Section Title',
      type: 'string',
      initialValue: 'Why NartaQ is Your Dream Opportunity',
    }),
    defineField({
      name: 'whyNartaqSubtitle',
      title: 'Why NartaQ Section Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'benefits',
      title: 'Company Benefits',
      type: 'array',
      of: [{ type: 'benefit' }],
    }),
    defineField({
      name: 'cultureValues',
      title: 'Culture & Values',
      type: 'array',
      of: [{ type: 'cultureValue' }],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      initialValue: 'Ready to Shape the Future?',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Section Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Apply Now - Join NartaQ',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Career Page Settings',
      }
    },
  },
})

export default careerPageSettings

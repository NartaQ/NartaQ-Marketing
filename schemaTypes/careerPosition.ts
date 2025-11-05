import { defineField, defineType } from 'sanity'

// Salary range type for GraphQL compatibility
export const salaryRangeType = defineType({
  name: 'salaryRange',
  title: 'Salary Range',
  type: 'object',
  fields: [
    defineField({
      name: 'min',
      title: 'Minimum',
      type: 'number',
    }),
    defineField({
      name: 'max',
      title: 'Maximum',
      type: 'number',
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      initialValue: 'EUR',
    }),
  ],
})

const careerPosition = defineType({
  name: 'careerPosition',
  title: 'Career Position',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this position on the careers page',
      initialValue: true,
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Design', value: 'design' },
          { title: 'Operations', value: 'operations' },
          { title: 'Community', value: 'community' },
          { title: 'Product', value: 'product' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Remote-First',
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
        ],
      },
      initialValue: 'full-time',
    }),
    defineField({
      name: 'skills',
      title: 'Key Skills',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of required skills and technologies',
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of job requirements',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key responsibilities for this role',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Position-specific benefits',
    }),
    defineField({
      name: 'salaryRange',
      title: 'Salary Range',
      type: 'salaryRange',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO meta description for this position page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, department, isActive } = selection
      return {
        title: title,
        subtitle: `${department || 'No department'} ${isActive ? '✓ Active' : '✗ Inactive'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})

export default careerPosition

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A title for this call to action component',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'Rich text description for the call to action',
    }),
    defineField({
      name: 'clickableText',
      title: 'Clickable Text',
      type: 'string',
      description: 'The text that will be displayed as clickable/button text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'The URL that the clickable text will link to',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'External Link', value: 'external' },
          { title: 'Internal Link', value: 'internal' },
          { title: 'Email', value: 'email' },
          { title: 'Phone', value: 'phone' },
        ],
        layout: 'radio',
      },
      description: 'Type of link for better styling and behavior',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'Whether the link should open in a new tab',
      initialValue: false,
    }),
    defineField({
      name: 'showLabel',
      title: 'Show Label',
      type: 'boolean',
      description: 'Whether to show the label for the call to action',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      clickableText: 'clickableText',
      link: 'link',
    },
    prepare(selection) {
      const { title, clickableText, link } = selection
      return {
        title: title || 'Untitled Call to Action',
        subtitle: `"${clickableText}" → ${link}`,
      }
    },
  },
})

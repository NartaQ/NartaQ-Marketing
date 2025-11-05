import { defineField, defineType } from 'sanity'

// Banner item type for GraphQL compatibility
export const bannerItemType = defineType({
  name: 'bannerItem',
  title: 'Banner Item',
  type: 'object',
  fields: [
    defineField({
      name: 'bannerText',
      title: 'Banner Text',
      type: 'string',
      description: 'Main text displayed in the banner',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerEmoji',
      title: 'Banner Emoji',
      type: 'string',
      description: 'Emoji to display before the text (optional)',
    }),
    defineField({
      name: 'bannerLinkText',
      title: 'Link Text',
      type: 'string',
      description: 'Text for the clickable link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerLinkUrl',
      title: 'Link URL',
      type: 'string',
      description: 'URL for the banner link (internal or external)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerBackgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'CSS color value (e.g., "#A98B5D" or "var(--lion)")',
      initialValue: 'var(--lion)',
    }),
    defineField({
      name: 'bannerTextColor',
      title: 'Text Color',
      type: 'string',
      description: 'CSS color value for the text',
      initialValue: 'black',
    }),
  ],
  preview: {
    select: {
      text: 'bannerText',
      linkText: 'bannerLinkText',
    },
    prepare({ text, linkText }) {
      return {
        title: text,
        subtitle: linkText,
      }
    },
  },
})

const bannerSettings = defineType({
  name: 'bannerSettings',
  title: 'Banner Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerEnabled',
      title: 'Enable Banner',
      type: 'boolean',
      description: 'Toggle to show/hide the top banner across the site',
      initialValue: true,
    }),
    defineField({
      name: 'banners',
      title: 'Banners',
      type: 'array',
      description: 'Add one or more banners. Multiple banners will rotate automatically.',
      of: [{ type: 'bannerItem' }],
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'rotationInterval',
      title: 'Rotation Interval (seconds)',
      type: 'number',
      description: 'Time in seconds before rotating to the next banner (if multiple)',
      initialValue: 5,
      validation: (Rule) => Rule.min(3).max(30),
    }),
    defineField({
      name: 'scrollSpeed',
      title: 'Scroll Speed (pixels/second)',
      type: 'number',
      description: 'Speed for long text scrolling animation',
      initialValue: 50,
      validation: (Rule) => Rule.min(20).max(100),
    }),
    defineField({
      name: 'bannerDismissible',
      title: 'Can Be Dismissed',
      type: 'boolean',
      description: 'Allow users to close the banner',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      enabled: 'bannerEnabled',
      count: 'banners.length',
    },
    prepare({ enabled, count }) {
      return {
        title: 'Banner Settings',
        subtitle: enabled ? `${count || 0} banner(s) - Active` : 'Disabled',
      }
    },
  },
})

export default bannerSettings

import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'shortDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'fullDescription',
      type: 'richText',
      required: true,
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icon URL',
      required: true,
    },
    {
      name: 'featureImage',
      type: 'text',
      label: 'Featured URL',
    },
    {
      name: 'keyFeatures',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'deliverables',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'estimatedTimeline',
      type: 'text',
    },
    {
      name: 'estimatedTimelineText',
      type: 'text',
    },
    {
      name: 'startingPrice',
      type: 'text',
    },
    {
      name: 'faq',
      type: 'array',
      label: 'FAQs',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
}

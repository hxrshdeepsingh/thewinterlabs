import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
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
      name: 'featuredImage',
      type: 'text',
      label: 'Featured Image',
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'publishDate',
      type: 'date',
    },
    {
      name: 'clientName',
      type: 'text',
    },
    {
      name: 'projectName',
      type: 'text',
    },
    {
      name: 'projectDate',
      type: 'date',
    },
    {
      name: 'servicesProvided',
      type: 'array',
      fields: [
        {
          name: 'service',
          type: 'text',
        },
      ],
    },
    {
      name: 'projectURL',
      type: 'text',
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'testimonial',
      type: 'textarea',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'projectDuration',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'seo',
      label: 'SEO & Open Graph',
      type: 'group',
      fields: [
        {
          name: 'canonical',
          type: 'text',
          label: 'Canonical URL',
          required: false,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'ogTitle',
          type: 'text',
          label: 'Open Graph Title',
        },
        {
          name: 'ogDescription',
          type: 'textarea',
          label: 'Open Graph Description',
        },
        {
          name: 'ogUrl',
          type: 'text',
          label: 'Open Graph URL',
        },
        {
          name: 'ogImage',
          type: 'text',
          label: 'Open Graph Image',
        },
        {
          name: 'jsonLd',
          type: 'code',
          label: 'Structured Data (JSON-LD)',
          options: {
            language: 'json',
          },
        },
      ],
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
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
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'publishDate',
      type: 'date',
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
        // {
        //   name: 'jsonLd',
        //   type: 'code',
        //   label: 'Structured Data (JSON-LD)',
        //   options: {
        //     language: 'json',
        //   },
        // },
      ],
    },
  ],
}

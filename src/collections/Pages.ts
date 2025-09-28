import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
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
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
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
      name: 'content',
      type: 'richText',
    },
    {
      name: 'canonical',
      type: 'text',
      required: false,
      unique: false,
    },
    {
      name: 'ogTitle',
      type: 'text',
    },
    {
      name: 'ogDescription',
      type: 'textarea',
    },
    {
      name: 'ogUrl',
      type: 'text',
    },
    {
      name: 'ogImage',
      type: 'text',
    },
  ],
}

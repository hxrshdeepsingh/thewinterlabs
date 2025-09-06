// collections/Technologies.ts
import type { CollectionConfig } from 'payload/types'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  labels: {
    singular: 'Technology',
    plural: 'Technologies',
  },
  admin: {
    useAsTitle: 'title',
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
      name: 'logo',
      type: 'text',
      label: 'Logo Url',
    },
  ],
}

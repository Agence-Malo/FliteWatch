import type { CollectionConfig } from 'payload'

const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeValidate: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          if (data?.title) {
            data.id = data.title
              .trim()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '')
              .toLowerCase()
            return data
          }
        } else {
          return data
        }
      },
    ],
  },
  fields: [
    {
      name: 'id',
      label: 'Slug',
      type: 'text',
      admin: {
        readOnly: true,
      },
      required: true,
    },
    { name: 'title', type: 'text', required: true },
    { name: 'excerpt', type: 'textarea', required: true },
    { name: 'fullContent', type: 'richText', required: true },
    {
      name: 'image',
      label: 'Cover image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: false,
    },
  ],
}

export default Posts

import type { CollectionConfig } from 'payload'

const Jets: CollectionConfig = {
  slug: 'jets',
  labels: {
    singular: 'Jet',
    plural: 'Jets Catalogue',
  },
  hooks: {
    beforeValidate: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          if (data) {
            data.id = data.name
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
    { name: 'name', type: 'text', required: true },
    { name: 'plate', type: 'text', required: true },
    { name: 'manufacturer', type: 'text', required: true },
    { name: 'introduction', type: 'textarea', required: true },
    { name: 'description', type: 'textarea', required: true },
    {
      type: 'row',
      fields: [
        {
          name: 'information',
          type: 'group',
          fields: [
            {
              name: 'cabin',
              label: 'Cabin size (m)',
              type: 'group',
              fields: [
                { name: 'length', type: 'number', required: true },
                { name: 'width', type: 'number', required: true },
                { name: 'height', type: 'number', required: true },
              ],
            },
            {
              name: 'speed',
              label: 'Maximum speed (km/h)',
              type: 'number',
              required: true,
            },
            {
              name: 'hours',
              label: 'Flight hours',
              type: 'number',
              required: true,
            },
            {
              name: 'crew',
              type: 'group',
              fields: [
                { name: 'pilots', type: 'number', required: true },
                { name: 'attendants', label: 'Flight attendants', type: 'number', required: true },
              ],
            },
            { name: 'range', label: 'Maximum range (km)', type: 'number', required: true },
            { name: 'baggage', label: 'Baggage capacity (m³)', type: 'number', required: true },
            { name: 'wifi', type: 'checkbox', required: false },
          ],
        },
        {
          name: 'images',
          type: 'group',
          fields: [
            {
              name: 'hero',
              label: 'Hero banner',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'cabin',
              label: 'Cabin layout',
              type: 'group',
              fields: [
                {
                  name: 'day',
                  type: 'group',
                  fields: [
                    { name: 'seats', type: 'number', required: true },
                    { name: 'image', type: 'upload', relationTo: 'media', required: true },
                  ],
                },
                {
                  name: 'night',
                  type: 'group',
                  fields: [
                    { name: 'beds', type: 'number', required: true },
                    { name: 'image', type: 'upload', relationTo: 'media', required: true },
                  ],
                },
              ],
            },
            {
              name: 'gallery',
              labels: {
                singular: 'image',
                plural: 'images',
              },
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Jets

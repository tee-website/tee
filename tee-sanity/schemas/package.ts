export default {
  name: 'package',
  type: 'document',
  title: 'Package',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'modal',
      title: 'Modal Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'content',
          title: 'Content Block',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}],
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
        {
          type: 'object',
          name: 'table',
          title: 'Table',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'content',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'heading',
                      title: 'Heading',
                      type: 'string',
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'text',
                      validation: (Rule: any) => Rule.required(),
                    },
                  ],
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],

  initialValue: {
    available: false,
  },
}

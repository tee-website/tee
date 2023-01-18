export default {
  name: 'table',
  title: 'Modal Table',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'headings',
      title: 'Headings',
      type: 'array',
      of: [{type: 'string'}],
    },

    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

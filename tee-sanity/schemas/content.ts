export default {
  name: 'content',
  type: 'document',
  title: 'Content',

  fields: [
    {
      name: '',
    },
    {
      name: 'about',
      type: 'array',
      of: [{type: 'block'}],
      title: 'About Content',
    },
    {
      name: 'package',
      title: 'Package Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

export default {
  name: 'banner',
  type: 'document',
  title: 'Hero Banner',

  fields: [
    {
      name: 'small_text',
      title: 'Small Text',
      type: 'string',
    },
    {
      name: 'bold_text',
      title: 'Bold Text',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Hero Content',
      type: 'text',
    },
    {
      name: 'background',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'pointers',
      title: 'Banner Pointers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'banner_content'}],
        },
      ],
    },
  ],
}

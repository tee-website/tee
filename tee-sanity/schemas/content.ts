export default {
  name: 'content',
  type: 'document',
  title: 'Content',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
  ],
}

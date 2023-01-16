export default {
  name: 'banner_content',
  title: 'Banner Content',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'number',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      description:
        'This field refers to a short description about the company, for best UI representation write at least 50 words, however to not exceed 90 words. The field supports list however for best UI representation do not exceed 5 words per list item. Contact developer if design changes are required.',
    },
  ],
}

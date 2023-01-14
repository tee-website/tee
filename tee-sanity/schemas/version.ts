export default {
  name: 'content_version',
  title: 'Content Version',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Version Name',
      type: 'string',
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{type: 'banner'}],
    },
    {
      name: 'about',
      title: 'About',
      type: 'reference',
      to: [{type: 'about'}],
    },
  ],
}

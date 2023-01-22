export default {
  name: 'package_banner',
  type: 'document',
  title: 'Package Banner',

  fields: [
    {
      name: 'title',
      title: 'Title',
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

  initialValue: {
    title: 'Our Packages',
  },
}

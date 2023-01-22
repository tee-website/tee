export default {
  name: 'content',
  type: 'document',
  title: 'BLS Content',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    // {
    //   name: 'image',
    //   type: 'image',
    //   title: 'Image',
    //   options: {
    //     hotspot: true,
    //   },
    //   validation: (Rule: any) => Rule.required(),
    // },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

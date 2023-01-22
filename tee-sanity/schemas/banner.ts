export default {
  name: 'banner',
  type: 'document',
  title: 'Hero Banner',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'small_text',
      title: 'Small Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bold_text',
      title: 'Bold Text',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'background',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule: any) => Rule.required(),
    },
    // {
    //   name: 'pointers',
    //   title: 'Banner Pointers',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'title',
    //           title: 'Title',
    //           type: 'string',
    //           validation: (Rule: any) => Rule.required(),
    //         },
    //         {name: 'icon', title: 'Icon', type: 'number'},
    //         {
    //           name: 'content',
    //           title: 'Content',
    //           type: 'text',
    //           validation: (Rule: any) => Rule.required(),
    //         },
    //       ],
    //     },
    //   ],
    //   validation: (Rule: any) =>
    //     Rule.custom((pointers: any[]) => {
    //       if (!pointers) return 'Required'
    //       if (pointers.length === 4) return true
    //       return 'Four (4) pointers is required'
    //     }),
    // },
  ],
}

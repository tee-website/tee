export default {
  name: 'package',
  type: 'document',
  title: 'Package',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'background_image',
      type: 'image',
      title: 'Background Image',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'instructor',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'instructor'}],
        },
      ],
      title: 'Instructors',
    },
  ],
}

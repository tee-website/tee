export default {
  name: 'instructor',
  type: 'document',
  title: 'Instructor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Instructor Name',
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
      name: 'credentials',
      type: 'array',
      title: 'Credentials',
      of: [
        {
          type: 'string',
        },
      ],
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'public',
      title: 'Show on website',
      type: 'boolean',
    },
  ],
}

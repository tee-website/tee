export default {
  name: 'instructor',
  type: 'document',
  title: 'Instructor',
  fields: [
    {
      name: 'firstname',
      type: 'string',
      title: 'First Name',
    },
    {
      name: 'lastname',
      type: 'string',
      title: 'Last Name',
    },
    {
      name: 'profile_image',
      type: 'image',
      title: 'Profile Image',
    },
    {
      name: 'credentials',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      title: 'Credentials',
    },
  ],
}

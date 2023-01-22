export default {
  name: 'version',
  title: 'Content Version',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Version Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{type: 'banner'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'about',
      title: 'About',
      type: 'reference',
      to: [{type: 'about'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'BLS Content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'content',
            },
          ],
        },
      ],
      validation: (Rule: any) =>
        Rule.custom((content: any[]) => {
          if (!content) return 'Required'
          if (content.length === 3) return true
          return 'Three (3) pointers on BLS Certification is required'
        }),
    },

    {
      name: 'package',
      title: 'Package Banner',
      type: 'reference',
      to: [{type: 'package_banner'}],
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

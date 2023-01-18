export default {
  name: 'offering',
  type: 'document',
  title: 'Package',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'modal',
      title: 'Modal Content',
      type: 'array',
      of: [{type: 'table'}, {type: 'modal_block'}],
    },
  ],
}

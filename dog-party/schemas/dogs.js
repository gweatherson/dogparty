export default {
  name: 'dogs',
  type: 'document',
  title: 'Dogs',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      name: 'sex',
      type: 'string',
      title: 'Sex',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' }
        ],
        layout: 'dropdown'
      }
    }
  ]
}
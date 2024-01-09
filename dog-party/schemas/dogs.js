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
      name: 'breed',
      type: 'string',
      title: 'Breed'
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
    },
    {
      name: 'good',
      type: 'string',
      title: 'Good Dog?',
      options: {
        list: [
          { title: 'Yes', value: 'yes' },
          { title: 'Sometimes', value: 'sometimes' },
          { title: 'No, bad dog.', value: 'no' }
        ],
        layout: 'dropdown'
      }
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text'
    }
  ]
}
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Dog Party',

  projectId: process.env.SANITY_STUDIO_PUBLIC_PROJECT_ID || 'defaultProjectId',
  dataset: process.env.SANITY_STUDIO_PUBLIC_DATASET || 'defaultDataset',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

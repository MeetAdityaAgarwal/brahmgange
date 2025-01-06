import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  name: 'default',
  title: 'Brahmgange',

  projectId: process.env.SANITYIO_ID,
  dataset: process.env.SANITYIO_DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

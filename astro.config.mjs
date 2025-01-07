import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import sanity from '@sanity/astro';

export default defineConfig({
  integrations: [tailwind(), react(), sanity({
    projectId: 'y970ornb',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
    studioBasePath: '/admin'
  }),],
  output: "server",
  adapter: vercel()
});

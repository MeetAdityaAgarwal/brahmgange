import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Make sure to import react here

export default defineConfig({
  integrations: [tailwind(), react()]
});

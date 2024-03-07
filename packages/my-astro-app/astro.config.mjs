import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel';
import auth from 'auth-astro';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  webAnalytics: {
    enabled: true
  },
  integrations: [auth(), react()]
});
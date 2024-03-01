import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel';
import auth from 'auth-astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    output: 'server',
    adapter: vercel(),
    webAnalytics: {
        enabled: true,
      },
    integrations: [auth()],
});

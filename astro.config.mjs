import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    svelte(),
    vue(),
    react(),
    storyblok({
      accessToken: ' iXysrbfA4PsWSq6lFKEj0wtt',
      apiOptions: {
        cache: { clear: 'auto', type: 'memory' },
      },
      bridge: true,
      enableFallbackComponent: true,
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        vue_counter: 'storyblok/VueCounter',
        svelte_counter: 'storyblok/SvelteCounter',
        react_counter: 'storyblok/ReactCounter',
        'new-component': 'storyblok/NewComponent',
      },
    }),
    tailwind(),
  ],
});

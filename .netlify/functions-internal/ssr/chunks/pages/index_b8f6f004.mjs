import { v as ve, $ as $$StoryblokComponent, a as $$BaseLayout } from './_slug__1e04c082.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, g as renderComponent } from '../astro_6d746408.mjs';
import 'clsx';
import '@storyblok/js';
/* empty css                            */import 'vue';
import 'vue/server-renderer';
import 'react/jsx-runtime';
import 'react';
import 'camelcase';
import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const sbApi = ve();
  const { data } = await sbApi.get("cdn/stories/home", {
    version: "draft"
  });
  const story = data.story;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": story.content })}` })}`;
}, "/Users/andreicureliuc/Downloads/astro-netlify-live-preview/src/pages/index.astro", void 0);

const $$file = "/Users/andreicureliuc/Downloads/astro-netlify-live-preview/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

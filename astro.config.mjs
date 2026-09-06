// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // Change this URL if you move to a custom domain (e.g. 'https://giacomomancuso.dev').
  site: 'https://giacomo49.github.io',

  integrations: [sitemap()],

  markdown: {
    // remark/rehype pipeline: this is what makes LaTeX work.
    // remark-math parses $inline$ and $$block$$, rehype-katex renders it to HTML.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: false }]],
    }),

    // Syntax highlighting with two themes (light/dark), switched via CSS in global.css
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      wrap: true,
    },
  },
});

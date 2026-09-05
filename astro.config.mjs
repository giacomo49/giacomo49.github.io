// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // Cambia questo URL se usi un dominio custom (es. 'https://giacomomancuso.dev').
  site: 'https://giacomo49.github.io',

  integrations: [sitemap()],

  markdown: {
    // Pipeline remark/rehype: serve per il LaTeX.
    // $inline$ viene gestito da remark-math, la resa HTML da rehype-katex.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: false }]],
    }),

    // Syntax highlighting con due temi (chiaro/scuro), gestiti via CSS in global.css
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

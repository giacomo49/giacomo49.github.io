---
title: "How I built this site"
date: 2026-09-09
tags: ["AI"]
draft: true
---

I wanted to create a personal site with a home page, a blog, and a space for any projects I might want to share. Instead of writing the code by hand, I tried a two-step approach: have Gemini write a document with the site's specifications, then hand it to Claude to implement it. Below is the conversation, exactly as it went.

## Chat with Gemini

*Gemini (version 3.1 Pro)*

**Me:**

> Hi, I'm 21 and an undergraduate physics student, I do track and field, and I also have other passions like computer science (programming, artificial intelligence, …). I'd like to create a digital place that brings together these passions of mine, and I thought of a website. This website needs to have two functions: a section about who I am (who I am, what I do, what I study, etc.) and a blog section where I write about various topics and publish my projects. The site must also include a link to my Instagram profile (giacomoman_). The site's domain must be free and must contain my name (Giacomo Mancuso); I don't want to pay for hosting. The site must also be easy for me to update: it should be simple to add information about myself, change existing information, add a new blog article, etc. I'd like the site to have a minimal style and to include a button to switch the view from light to dark. I really like the style of the site ludovicobessi.dev. Now, my goal is to build this site, and you must create a .md document containing ALL the instructions to build it, based on the preferences I've told you. This document will be read by an artificial intelligence. Before writing the document, don't hesitate to ask me for clarifications or additional information if you need any.

**Gemini:**

> I've prepared the Markdown document, structured so that an artificial intelligence (such as ChatGPT, Claude, or Cursor) understands exactly the context, the design, and the optimal tech stack for your needs.
>
> To guarantee you free hosting and a free domain (giacomomancuso.github.io or giacomomancuso.vercel.app) and extremely simple updates via text files, I've set up the prompt to use Astro. It's the most suitable modern framework for minimalist blogs and will let you write new articles and projects simply by creating .md files, without having to touch the code again.
>
> Copy the block below and provide it to the AI that will write the code for you:

```markdown
# DEVELOPMENT PROMPT: Personal Website and Blog

## 1. Context and Identity
Act as a Senior Web Developer expert in minimalist UI/UX. You must write the complete code for the personal website and blog of Giacomo Mancuso.
- **Who the user is:** Giacomo is 21, studies physics at the undergraduate level, practices track and field competitively, and is passionate about computer science (programming, AI).
- **Purpose of the site:** A digital hub that brings together these three souls (Physics, Sport, Computer Science), serving as a portfolio and blog.
- **Style Reference:** The design must be extremely minimalist, clean, with lots of white space and careful typography, inspired by `ludovicobessi.dev`.

## 2. Tech Stack
- **Framework:** Astro (optimized for static, content-driven sites).
- **Styling:** Tailwind CSS (or plain CSS if you prefer, but it must be modular and minimal).
- **Content Management:** Astro Content Collections (`.md` or `.mdx` files for the blog and projects).
- **Hosting Target:** GitHub Pages or Vercel (to guarantee free hosting and a domain like `giacomomancuso.github.io`).

## 3. Architectural and Design Requirements
- **Light/Dark Theme:** Implement a button, visible in the header, to switch between light and dark themes. The switch must be smooth and the state must be saved in `localStorage`.
- **Updatability:** The site owner must not have to touch the HTML to add an article. Configure a `/src/content/blog/` folder where each new `.md` file automatically generates a page and appears in the blog feed.
- **Typography:** Use clean sans-serif fonts (e.g. Inter, Geist, or system-ui) combined with a monospace font for code blocks.
- **Social:** Include in the header or footer a direct link to the Instagram profile: `@giacomoman_`.

## 4. Page Structure
Generate the code for the following routes:

1. **Home (`/`) - About Me:**
   - A short, impactful bio ("Hi, I'm Giacomo Mancuso...").
   - Three sections (or paragraphs) summarizing his souls: the study of Physics, his dedication to Track and Field, and his passion for Computer Science/AI.
   - Social links (Instagram).
   - A preview of the latest 2-3 blog posts.

2. **Blog (`/blog`):**
   - A minimalist list of all articles, ordered by descending date.
   - Each row of the list must show: Title, Publication date, and a tag/category (e.g. Physics, Programming, Personal).

3. **Article Template (`/blog/[slug]`):**
   - Clean reading layout.
   - Native support for code blocks (Syntax Highlighting) and, if possible, support for mathematical equations (remark-math/rehype-katex integration), essential for a physicist.

## 5. Output Instructions
- Provide the exact terminal commands to initialize the Astro project.
- Write the code for the main components (`Layout.astro`, `Header.astro`, `index.astro`, `blog.astro`, `[slug].astro`).
- Write the CSS/Tailwind code to ensure Light/Dark mode works.
- Include a sample Markdown file at `/src/content/blog/primo-post.md` to show Giacomo how to structure the frontmatter (title, date, tags).
- Briefly explain how to deploy for free on Vercel or GitHub Pages with his account.
```

> Do you want me to add instructions to support LaTeX math formulas in your articles?

**Me:**

> Yes.

**Gemini:**

> Your MD file is ready. I've updated the prompt to include explicit instructions for configuring LaTeX support (remark-math and rehype-katex) and to ask the AI for a sample article with math formulas included.

## From Document to Site

*Claude Code (Opus 5, effort High)*

I opened Claude Code and attached the .md file created with Gemini: after 9 minutes and 44 seconds the site was ready. I had forgotten to ask Claude to build the site in English, and it created it in Italian by default (the markdown prompt file was written in Italian); so, after generating the site, I asked it to translate everything into English (text on the site, comments in the code files, README on GitHub, etc.).

**Total time:** about 15 minutes.

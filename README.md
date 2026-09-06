# giacomo49.github.io

Personal site and blog of Giacomo Mancuso. Astro + hand-written CSS, content in Markdown,
LaTeX support (KaTeX) for the physics articles.

## Commands

| Command           | What it does                                 |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at http://localhost:4321          |
| `npm run build`   | Build the static site into `dist/`           |
| `npm run preview` | Preview the built site locally               |

## Writing a new article

Create a `.md` file in `src/content/blog/`. The filename becomes the URL:
`src/content/blog/entropy.md` &rarr; `/blog/entropy`. Nothing else to touch: the article shows up
by itself in the blog list, in the RSS feed and (if recent enough) on the homepage.

```markdown
---
title: "Article title"
date: 2026-09-05
description: "One line of summary, used for SEO and the RSS feed."
tags: ["Physics"]
draft: false
---

The body of the article.
```

Frontmatter fields:

- `title` (required) — the article title.
- `date` (required) — `YYYY-MM-DD`. Determines the ordering.
- `description` (optional) — summary for meta tags and RSS.
- `tags` (optional) — a list; **the first tag** is the one shown in the blog list.
  Current convention: `Physics`, `Programming`, `Sport`, `Personal`.
- `draft` (optional, defaults to `false`) — if `true` the article is not published.

If a required field is missing or has the wrong shape, the build stops with a clear error
instead of publishing a broken page.

### LaTeX formulas

Inline with single dollars, `$E = mc^2$`; block with double dollars:

```markdown
$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) - \frac{\partial L}{\partial q} = 0
$$
```

Formulas are rendered by KaTeX at build time: the browser loads no JavaScript for the maths.
The KaTeX CSS (and its fonts) is included only on article pages, not across the whole site.

One detail to watch: if a text needs literal dollar signs (prices), write them as `\$`,
otherwise the parser reads them as the start of a formula.

### Code blocks

Triple-backtick blocks with a language name get syntax highlighting at build time
(Shiki, `github-light` / `github-dark`, following the site theme).

## Adding a project

Same idea, in `src/content/projects/`:

```markdown
---
title: "Project name"
date: 2026-05-10
description: "A line or two on what it does and why it exists."
tags: ["Python", "AI"]
url: "https://github.com/giacomo49/project"
draft: false
---
```

## Structure

```
src/
├── components/     Header, Footer, ThemeToggle, PostList
├── content/
│   ├── blog/       ← the articles (.md)
│   └── projects/   ← the projects (.md)
├── layouts/        BaseLayout (pages) and BlogPost (articles)
├── pages/          Routes: /, /blog, /blog/[slug], /projects, /rss.xml, /404
├── styles/         global.css: every color and type decision lives here
├── consts.ts       Site title, nav items, social links
└── content.config.ts  Frontmatter schema
```

To change the colors, edit the variables at the top of `src/styles/global.css`:
the `:root` block is the light theme, `html.dark` the dark one.

## Light/dark theme

The header button stores the choice in `localStorage`. On a first visit, with nothing stored,
the site follows the system theme. An inline script in the `<head>` applies the theme before
first paint, so there is no white flash on load.

## Deployment

### GitHub Pages (free, at `giacomo49.github.io`)

The repository is already set up: `.github/workflows/deploy.yml` builds and publishes on every
push to `main`, with **Settings → Pages → Source: GitHub Actions**. Publishing an article is
therefore:

```bash
git add -A
git commit -m "New article"
git push
```

The site updates about a minute later.

Note: this only works without a `base` path because the repository is named
`giacomo49.github.io`. In a repository with a different name the site lives in a subfolder and
`astro.config.mjs` needs `base: '/repository-name'`.

### Vercel (alternative, with preview deployments)

1. Go to [vercel.com/new](https://vercel.com/new) and connect the GitHub account.
2. Import the repository: Vercel detects Astro on its own (build `npm run build`, output `dist`).
3. Every push to `main` goes to production, every pull request gets its own preview URL.

### Custom domain

If you buy a domain later, update `site` in `astro.config.mjs` (it drives canonical URLs,
the sitemap and RSS), then configure it in the GitHub Pages or Vercel settings.

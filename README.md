# giacomo49.github.io

Sito personale e blog di Giacomo Mancuso. Astro + CSS scritto a mano, contenuti in Markdown,
supporto LaTeX (KaTeX) per gli articoli di fisica.

## Comandi

| Comando           | Cosa fa                                      |
| ----------------- | -------------------------------------------- |
| `npm install`     | Installa le dipendenze                       |
| `npm run dev`     | Server di sviluppo su http://localhost:4321  |
| `npm run build`   | Genera il sito statico in `dist/`            |
| `npm run preview` | Anteprima locale del sito già buildato       |

## Scrivere un nuovo articolo

Crea un file `.md` in `src/content/blog/`. Il nome del file diventa l'URL:
`src/content/blog/entropia.md` &rarr; `/blog/entropia`. Non c'è altro da toccare: l'articolo
compare da solo nella lista del blog, nel feed RSS e (se è tra i più recenti) in home.

```markdown
---
title: "Titolo dell'articolo"
date: 2026-09-05
description: "Una riga di sommario, usata per SEO e feed RSS."
tags: ["Fisica"]
draft: false
---

Il testo dell'articolo.
```

Campi del frontmatter:

- `title` (obbligatorio) — titolo dell'articolo.
- `date` (obbligatorio) — `AAAA-MM-GG`. Determina l'ordinamento.
- `description` (facoltativo) — sommario per meta tag e RSS.
- `tags` (facoltativo) — lista; **il primo tag** è quello mostrato nella lista del blog.
  Convenzione attuale: `Fisica`, `Programmazione`, `Sport`, `Personale`.
- `draft` (facoltativo, default `false`) — se `true` l'articolo non viene pubblicato.

Se un campo obbligatorio manca o ha il formato sbagliato, la build si ferma con un errore
chiaro invece di pubblicare una pagina rotta.

### Formule LaTeX

Inline con un dollaro, `$E = mc^2$`; a blocco con due dollari:

```markdown
$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) - \frac{\partial L}{\partial q} = 0
$$
```

Le formule vengono renderizzate a build time da KaTeX: nessun JavaScript viene caricato dal
browser per la matematica. Il CSS di KaTeX (e i suoi font) viene incluso solo nelle pagine
degli articoli, non in tutto il sito.

Attenzione a un solo dettaglio: se in un testo servono dei dollari letterali (prezzi),
vanno scritti come `\$`, altrimenti il parser li interpreta come inizio di formula.

### Blocchi di codice

I blocchi con tre backtick e il nome del linguaggio hanno syntax highlighting a build time
(Shiki, tema `github-light` / `github-dark` che segue il tema del sito).

## Aggiungere un progetto

Stessa logica, in `src/content/progetti/`:

```markdown
---
title: "Nome del progetto"
date: 2026-05-10
description: "Una o due righe su cosa fa e perché esiste."
tags: ["Python", "AI"]
url: "https://github.com/giacomo49/progetto"
draft: false
---
```

## Struttura

```
src/
├── components/     Header, Footer, ThemeToggle, PostList
├── content/
│   ├── blog/       ← gli articoli (.md)
│   └── progetti/   ← i progetti (.md)
├── layouts/        BaseLayout (pagine) e BlogPost (articoli)
├── pages/          Rotte: /, /blog, /blog/[slug], /progetti, /rss.xml, /404
├── styles/         global.css: qui stanno tutti i colori e la tipografia
├── consts.ts       Titolo del sito, voci di menu, link social
└── content.config.ts  Schema del frontmatter
```

Per cambiare i colori basta modificare le variabili in cima a `src/styles/global.css`:
il blocco `:root` è il tema chiaro, `html.dark` quello scuro.

## Tema chiaro/scuro

Il pulsante nell'header salva la scelta in `localStorage`. Al primo caricamento, se non c'è
una scelta salvata, il sito segue il tema di sistema. Uno script inline nel `<head>` applica
il tema prima del primo paint, quindi non c'è il flash bianco al caricamento.

## Deploy

### GitHub Pages (gratis, dominio `giacomo49.github.io`)

1. Crea su GitHub un repository chiamato **`giacomo49.github.io`** (il nome è importante:
   è quello che dà l'URL senza sottocartelle).
2. Dalla cartella del progetto:

   ```bash
   git init
   git add .
   git commit -m "Primo commit"
   git branch -M main
   git remote add origin https://github.com/giacomo49/giacomo49.github.io.git
   git push -u origin main
   ```

3. Su GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Fatto. Il workflow in `.github/workflows/deploy.yml` builda e pubblica a ogni push su `main`:
   da qui in poi il deploy è semplicemente `git push`.

Se invece usi un repository con un altro nome (es. `blog`), il sito vive in una sottocartella
e serve aggiungere in `astro.config.mjs`: `base: '/blog'`.

### Vercel (alternativa, deploy anche delle preview)

1. Vai su [vercel.com/new](https://vercel.com/new) e collega l'account GitHub.
2. Importa il repository: Vercel riconosce Astro da solo (build `npm run build`, output `dist`).
3. Ogni push su `main` va in produzione, ogni pull request ottiene un'anteprima con URL dedicato.

### Dominio personalizzato

Se in futuro compri un dominio, aggiornalo in `site` dentro `astro.config.mjs` (serve per
canonical URL, sitemap e RSS) e poi configuralo nelle impostazioni di GitHub Pages o Vercel.

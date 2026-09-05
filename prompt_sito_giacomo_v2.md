# PROMPT DI SVILUPPO: Sito Web Personale e Blog

## 1. Contesto e Identità
Agisci come un Senior Web Developer esperto in UI/UX minimalista. Devi scrivere il codice completo per il sito web personale e blog di Giacomo Mancuso.
- **Chi è l'utente:** Giacomo ha 21 anni, studia fisica alla triennale, pratica atletica leggera a livello agonistico ed è un appassionato di informatica (programmazione, AI).
- **Scopo del sito:** Un hub digitale che unisca queste tre anime (Fisica, Sport, Informatica), fungendo da portfolio e blog.
- **Reference di Stile:** Il design deve essere estremamente minimalista, pulito, con molto spazio bianco e tipografia curata, ispirato a `ludovicobessi.dev`.

## 2. Stack Tecnologico
- **Framework:** Astro (ottimizzato per siti statici e content-driven).
- **Styling:** Tailwind CSS (o CSS puro se preferisci, ma deve essere modulare e minimale).
- **Gestione Contenuti:** Astro Content Collections (file `.md` o `.mdx` per il blog e i progetti).
- **Hosting Target:** GitHub Pages o Vercel (per garantire hosting gratuito e un dominio come `giacomomancuso.github.io`).

## 3. Requisiti Architetturali e di Design
- **Tema Light/Dark:** Implementa un pulsante visibile nell'header per switchare tra tema chiaro e scuro. Il cambio deve essere fluido e lo stato deve essere salvato nel `localStorage`.
- **Aggiornabilità:** Il proprietario del sito non deve toccare l'HTML per aggiungere un articolo. Configura una cartella `/src/content/blog/` dove ogni nuovo file `.md` genera automaticamente una pagina e appare nel feed del blog.
- **Tipografia:** Usa font sans-serif puliti (es. Inter, Geist o system-ui) combinati con un font monospace per i blocchi di codice.
- **Social:** Includi nell'header o nel footer un link diretto al profilo Instagram: `@giacomoman_`.
- **Supporto LaTeX (FONDAMENTALE):** Poiché l'utente scrive articoli di fisica, DEVI configurare il supporto nativo per le equazioni matematiche in LaTeX nei file Markdown. Configura `remark-math` e `rehype-katex` in `astro.config.mjs` e assicurati di includere il CSS di KaTeX nel layout di base.

## 4. Struttura delle Pagine
Genera il codice per le seguenti rotte:

1. **Home (`/`) - About Me:**
   - Una breve bio di impatto ("Ciao, sono Giacomo Mancuso...").
   - Tre sezioni (o paragrafi) che riassumono le sue anime: lo studio della Fisica, la dedizione all'Atletica Leggera e la passione per l'Informatica/AI.
   - Link social (Instagram).
   - Un'anteprima degli ultimi 2-3 post del blog.

2. **Blog (`/blog`):**
   - Una lista minimalista di tutti gli articoli, ordinati per data decrescente.
   - Ogni riga della lista deve mostrare: Titolo, Data di pubblicazione e un tag/categoria (es. Fisica, Programmazione, Personale).

3. **Template Articolo (`/blog/[slug]`):**
   - Layout di lettura pulito.
   - Supporto nativo per blocchi di codice (Syntax Highlighting).
   - Corretta renderizzazione delle equazioni LaTeX inline (es. `$E=mc^2$`) e a blocco (es. `$$...$$`).

## 5. Istruzioni di Output
- Fornisci i comandi da terminale esatti per inizializzare il progetto Astro e installare i plugin per il LaTeX (`npm install remark-math rehype-katex` ecc.).
- Scrivi il codice dei componenti principali (`Layout.astro`, `Header.astro`, `index.astro`, `blog.astro`, `[slug].astro`, `astro.config.mjs`).
- Scrivi il codice CSS/Tailwind per garantire il funzionamento del Light/Dark mode.
- Includi un file Markdown di esempio in `/src/content/blog/primo-post-fisica.md` per mostrare a Giacomo come strutturare il frontmatter (title, date, tags) e includi un esempio pratico di formula in LaTeX sia inline che a blocco.
- Spiega brevemente come fare il deploy gratuito su Vercel o GitHub Pages con il suo account.

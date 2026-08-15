# Rithika — Portfolio

Next.js (App Router) implementation of the Figma frame
[`Documentation-Freelancing / MacBook Air - 27`](https://www.figma.com/design/BcKthxcwonZy7yHT9edwrt/Documentation-Freelancing?node-id=342-508)
(node `342:508`).

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 — design tokens live in `@theme` in `src/app/globals.css`
- `next/font/google` for Fraunces, Bricolage Grotesque and Gamja Flower

## Running it

Requires Node.js 18.18+. Verified on Node 24.19.0 / npm 11.17.0 — `npm run
build` compiles clean and the page prerenders as static content.

```bash
cd portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

## Layout

```
src/
  app/
    globals.css      Tailwind import + @theme tokens (colours, type scale, marquee)
    layout.tsx       Font variables + metadata
    page.tsx         Section composition
  components/
    Navbar.tsx       Wordmark + links + resume
    Hero.tsx         Grid backdrop, headline, portrait, rotated stickers
    WorkSection.tsx  "Work I Shipped" — wide + tall project card variants
    ProjectMedia.tsx Per-project screenshot compositions (448×308 tiles)
    SkillsBand.tsx   Blue card with the looping skill marquee
    AboutSection.tsx "A little about me"
    Testimonials.tsx "What People say"
    Footer.tsx       Contact grid + gradient "Get in Touch" wordmark
    ui/              Pill, ArrowButton, icons
  data/site.ts       All page copy — edit content here, not in components
  lib/fonts.ts       next/font configuration
public/assets/       Images and SVGs exported from Figma
```

## Notes on fidelity

- The design is a fixed 1280px desktop frame. Layout is responsive: the project
  grid and about/testimonial columns collapse to a single column below `lg`, and
  the large headings use `clamp()` with the Figma value as the maximum.
- Project media tiles keep their Figma stacking geometry by expressing every
  offset as a percentage of the 448×308 tile, so overlapping/overflowing phone
  screenshots scale together.
- The skill row is wider than its card in Figma, so it is implemented as a
  seamless marquee. It freezes under `prefers-reduced-motion`.

## Content to replace before shipping

These come straight from the Figma file and look like leftover template copy —
all of them are in `src/data/site.ts`:

- Footer email reads `Aditya2.3tanwar@gmail.com`
- Footer socials read `Instagram, LInkedin, yourubte`
- All three testimonials repeat the same quote and author
- Testimonial avatars are the empty placeholder circle from the design
- Nav/CTA links are in-page anchors; wire them to real routes or files

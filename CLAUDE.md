# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
gatsby develop      # Start dev server at localhost:8000
gatsby build        # Production build
gatsby serve        # Serve built site locally
gatsby clean        # Clear cache (run before builds if stale)
tsc --noEmit        # Type-check without emitting files
npm run deploy      # Build and deploy to GitHub Pages
```

There is no test suite. The primary quality checks are `tsc --noEmit` and visual inspection via `gatsby develop`.

## Architecture

This is a **Gatsby 5 static site** (React + TypeScript) for an Italian nature conservation group. It deploys to GitHub Pages and triggers automatic rebuilds via a Sanity webhook on content publish.

### Data Sources

- **Sanity CMS** (`gatsby-source-sanity`): Blog posts fetched at build time. The blog page also fetches fresh posts at runtime via Axios to the Sanity GraphQL endpoint (`src/constants.ts` has the URL).
- **JSON files** in `src/data/`: Contacts, sponsors, image credits/metadata.
- **TypeScript files** in `src/data/paths/`: Hardcoded GPS coordinate arrays for interactive map trails (laghetti, narcisi).

### Routing

- `src/pages/` → file-based routes (Gatsby convention)
- `src/templates/post.tsx` → dynamic blog post pages generated in `gatsby-node.ts` from Sanity data
- Navigation structure defined in `src/data/sections.ts`

### Layout & Styling

- All pages wrap with `<DefaultLayout>` which injects Header, Footer, and CookieBanner
- Styling via **Styled Components** — each component typically has `index.tsx` + `styled.ts`
- Global breakpoints and color palette in `src/styles/index.ts`
- Prettier config: no semicolons, double quotes, trailing commas, no arrow function parens

### Maps

`map-laghetti` and `map-narcisi` components render **React Leaflet** maps with custom polylines. Trail coordinates live in `src/data/paths/`. Leaflet requires SSR-safe imports (already handled via `gatsby-plugin-react-leaflet`).

### Images

- Local images use `gatsby-plugin-image` with Sharp for optimization
- Image credits/alt text stored in `src/data/imageMetadata.json`
- Sanity images go through the same Gatsby image pipeline

### TypeScript

- Strict mode enabled
- `src/gatsby-types.d.ts` is auto-generated from GraphQL schema — do not edit manually
- Custom types in `src/types/index.ts`

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and on Sanity webhook (`repository_dispatch` with type `sanity-publish`). Deploys to GitHub Pages with CNAME `grupponaturalentiai.it`. Node 22 required.

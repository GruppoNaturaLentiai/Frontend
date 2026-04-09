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
- **Content JSON files** in `content/`: Page content for all static pages (laghetti, narcisi, sociale, chi-siamo, etc.). These drive `pagedata-text-components` and `mobile-pagedata-text-components`. Each JSON entry has a `type` field (`"text"`, `"image"`, `"two-columns"`) and optional layout props (`maxHeight`, `maxWidth`, `objectFit`, `collapsible`, etc.).
- **TypeScript files** in `src/data/paths/`: Hardcoded GPS coordinate arrays for interactive map trails (laghetti, narcisi).

### Routing

- `src/pages/` → file-based routes (Gatsby convention)
- `src/templates/post.tsx` → dynamic blog post pages generated in `gatsby-node.ts` from Sanity data
- Navigation structure defined in `src/data/sections.ts`

### Layout & Styling

- All pages wrap with `<DefaultLayout>` which injects Header, Footer, and CookieBanner
- Styling via **Styled Components** — each component has `index.tsx` + `styled.ts`; some also have `helpers.tsx`
- Global breakpoints and color palette in `src/styles/index.ts`; both string (CSS) and number (JS) variants exported
- Prettier config: no semicolons, double quotes, trailing commas, no arrow function parens

### Page Content Components

Most static pages use two parallel components for responsive layout:
- `pagedata-text-components` (desktop, hidden on `≤bigtablet`)
- `mobile-pagedata-text-components` (mobile, hidden on `>bigtablet`)

Both consume `DataJSONType` from `content/*.json` and render images via `image-with-credits`. Images are matched by `fileName` from `src/data/imageMetadata.json`. The `two-columns` content type renders a flex row with left/right content arrays.

### SSR Safety

Any browser-only API must be guarded. The standard pattern is:

```tsx
const [isClient, setIsClient] = useState(false)
useEffect(() => { setIsClient(true) }, [])
if (!isClient) return null
```

`localStorage` (cookie preferences), `sessionStorage` (blog pagination state as `"gnl-blog-page"`), `window.location`, and `document.cookie` are all accessed this way.

### Maps

`map-laghetti` and `map-narcisi` components render **React Leaflet** maps with custom polylines. Trail coordinates live in `src/data/paths/`. Leaflet requires SSR-safe rendering (handled via `isClient` pattern above, not just the plugin).

### Images

- Local images use `gatsby-plugin-image` with Sharp; queried with `width: 1400` and no explicit height (preserves natural aspect ratio)
- Image credits/alt text stored in `src/data/imageMetadata.json`
- SVGs loaded via `gatsby-plugin-svgr` with `titleProp: true` and `removeViewBox: false`
- The `image-with-credits` component accepts `objectFit`, `maxHeight`, `maxWidth` props — content JSON can override these per image block
- Sanity images go through the same Gatsby image pipeline

### Blog

- Static posts from Sanity are supplemented by a client-side fetch to the Sanity GraphQL endpoint at runtime
- Posts `/post/1` and `/post/2` are dummy entries and filtered out client-side
- Post prev/next navigation comes from `gatsby-node.ts` context (sorted DESC by `publishedAt`)
- Sanity rich text rendered via `PortableText` with custom components in `src/components/portable-text-components/`
- Blog pagination page index stored in `sessionStorage`; restored only when navigating back from a post

### TypeScript

- Strict mode enabled
- `src/gatsby-types.d.ts` is auto-generated from GraphQL schema — do not edit manually
- Custom types in `src/types/index.ts`; key unions: `ImageContentData`, `TextContentData`, `TemplateTwoColumnsData`

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and on Sanity webhook (`repository_dispatch` with type `sanity-publish`). Deploys to GitHub Pages with CNAME `grupponaturalentiai.it`. Node 22 required.

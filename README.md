# Newsroom Frontend

Next.js 15 (App Router) frontend with localization and GraphQL.

## Tech

- Next.js 15 (App Router, SSR + CSR)
- TypeScript
- Internationalization: next-intl
- GraphQL: Apollo Client

## Setup

Prereqs: Node.js 18+, npm or yarn

```bash
npm install
npm run dev
```

Open http://localhost:3000

Scripts:

```bash
npm run dev    # dev server (Turbopack)
npm run build  # production build
npm run start  # start production server
npm run lint   # ESLint
```

## Config

Environment variables (client-exposed):

- NEXT_PUBLIC_API_URL: API origin (e.g. http://localhost:4000)
- NEXT_PUBLIC_GRAPHQL_URL (optional): overrides GraphQL endpoint; default `${NEXT_PUBLIC_API_URL}/graphql`

Used for building absolute image URLs and Apollo GraphQL requests (credentials: include). Values are baked at build time.

## Routing

- Home: `src/app/[locale]/page.tsx` (SSR)
- Single news: `src/app/[locale]/[slug]/[id]/page.tsx` (SSR)
- Default locale (fi) has no `/fi` prefix. Non-default locales use `/en`, `/sv`, ...

## Data fetching

- SSR pages fetch on the server
- “Load more” on the home page uses Apollo Client (client-side GraphQL)

## URL examples

- `/` (Finnish home)
- `/uutiset/12345` (Finnish news)
- `/en` (English home)
- `/en/news/12345` (English news)

See `frontend_plan.png` and `frontend_plan_seo.png` for data flow and SEO overview.

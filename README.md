# Northstone

Marketing site for Northstone — a premium residential planning and
permit-services studio. Architectural, granite-toned, restrained.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- Satoshi (self-hosted, `app/fonts/`)

## Develop

```bash
npm install
cp .env.example .env.local   # then paste your Web3Forms key
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Structure

- `app/` — routes: `/`, `/services`, `/projects`, `/about`, `/contact`
- `components/` — shared UI (header, footer, floor-plan drawings, contour art)
- `lib/content.ts` — site copy, services, projects, and process data

Project copy and imagery are placeholders. Floor-plan drawings are
stylised SVG excerpts with client data shown as redacted.

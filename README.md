# AUVERAI Innovations

A Next.js App Router website built with TypeScript, Tailwind CSS 4, shadcn/Base UI and adapted Tailark Quartz Pro blocks.

## Run locally

Requires Node.js 22.17 or newer.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3100. Development supports live updates.

## Production and Cloudflare

```sh
npm run build
npm run preview
```

`next build` produces the complete static website in `out/`. `preview` serves this export through Cloudflare Wrangler at http://127.0.0.1:3100. No Node.js server, database, OpenNext adapter, Worker functions or Vercel service is required at runtime.

For Cloudflare Pages Git integration:

| Setting | Value |
| --- | --- |
| Framework | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Output directory | `out` |
| Node version | `22` |
| Root directory | Repository root |

Alternatively, after signing in to your own Cloudflare account and creating the `auverai` Pages project:

```sh
npx wrangler login
npm run deploy
```

The deploy command publishes to the `auverai` Pages project. Review the account and project before running it.

The project is deployed in the AUVERAI Cloudflare account at https://auverai.pages.dev. The GitHub integration deploys commits to `main` automatically. Both `auverai.com` and `www.auverai.com` are configured as Pages custom domains, with proxied CNAME records pointing to `auverai.pages.dev`. The canonical website URL is https://auverai.com.

Cloudflare documentation: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
Next.js export documentation: https://nextjs.org/docs/app/guides/static-exports

## Content and brand

- `src/lib/site.ts`: public domain, contact email and shared metadata.
- `src/lib/content.ts`: venture descriptions and FAQs.
- `src/components/sections.tsx`: homepage content and layout.
- `src/components/illustrations.tsx`: original AUVERAI interface illustrations.
- `src/app/globals.css`: Tailark Quartz tokens, AUVERAI compositions and responsive rules.
- `public/`: favicon, social image, Apple icon and Cloudflare response headers.
- `DESIGN-SOURCES.md`: source blocks and adaptation details.

Optional public environment settings are documented in `.env.example`. They are compiled into the static export. Set them before building. Defaults are `https://auverai.com` and `contact@auverai.com`.

Company copy reflects AUVERAI Innovations L.L.C-FZ as a registered company in Meydan Free Zone, Dubai, UAE, based on the supplied business licence issued on 11 November 2026. The venture ecosystem remains prospective; company registration does not establish individual venture ownership or launch status. No customers, testimonials, financial performance or venture launch claims were invented. The licence document and personal details are not published with the site.

## Contact behaviour

The contact page validates an introduction locally, then prepares a `mailto:` draft addressed to `contact@auverai.com`. The visitor reviews and sends it in their email app. A copyable draft is available if no email app is configured. The website does not send email or store enquiries on a server. No analytics or advertising trackers are installed. If server-side lead capture is later added, update the privacy page and use an appropriate protected delivery endpoint.

## Checks

```sh
npm run typecheck
npm run build
```

The build performs static rendering and TypeScript checks. Check all routes, mobile navigation, FAQ expansion and contact drafting when making changes. The project supports reduced-motion preferences and includes a keyboard skip link, labelled form controls, focus states, and a focus-managed mobile navigation dialog.

Brand raster assets are committed in `public/`. To regenerate them after changing the artwork, run `node scripts/generate-brand-assets.mjs` (uses Next.js's installed Sharp dependency).

## License

Tailark Quartz Pro components were accessed through the owner's paid browser session and adapted for this website. Keep this source private and use it in accordance with your Tailark license. No Tailark API key or account credential is needed to build or host the site.

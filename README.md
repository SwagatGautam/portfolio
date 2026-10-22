# Portfolio

Personal site of Swagat Gautam — live at [swagatgautam.com.np](https://swagatgautam.com.np).

Built with Next.js 16 and React 19, deployed on Cloudflare Workers (see `wrangler.jsonc` and `worker/index.ts`).

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm lint
pnpm typecheck
```

## How it works

- `next build` produces a static export in `out/` (`output: 'export'` in `next.config.mjs`).
- One Cloudflare Worker (`bold-snow-5dad`) serves those files as static assets and handles `POST /api/chat`, an AI assistant that streams answers from Workers AI (Llama 3.3 70B). No API keys are needed.
- Only `/api/*` runs the Worker code; every other path is served straight from the assets, with `404.html` for unknown pages.

## Deploy

```bash
pnpm build
npx wrangler deploy
```

Keep the Worker name in `wrangler.jsonc` as is — it is what keeps the swagatgautam.com.np domain attached.

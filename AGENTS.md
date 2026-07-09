<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Single Next.js 16 app (`agro-web`), a Spanish-language organic-fertilizer marketing site. There is no backend service or database; the only server code is the `/api/contact` route. Standard scripts live in `package.json` (`dev`, `build`, `lint`); dependencies install via `npm ci`.

- Dev server: `npm run dev` serves on port 3000 (uses Turbopack). Lint via `npm run lint`; production build via `npm run build`.
- The contact form posts to `/api/contact`, which sends email via Resend. Sending is gated on env vars `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `RESEND_FROM_EMAIL`. When these are unset the endpoint intentionally returns `Configuración de email incompleta en el servidor.` — this is expected in dev, not a bug. Set all three (add them as secrets) only when you need to exercise real email delivery.
- Other optional env vars: `NEXT_PUBLIC_WHATSAPP_NUMBER` (floating WhatsApp button link) and `NEXT_PUBLIC_SITE_URL` (base URL for metadata/sitemap/robots; defaults to `http://localhost:3000`).

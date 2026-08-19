# BlackOak Global — 2026 Corporate Website

Next.js 15 + TypeScript + Tailwind CSS 4, deployed on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local
# Edit .env.local — fill in RESEND_API_KEY and INVESTOR_PORTAL_PASSWORD (any string works locally)
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Environment variables

See `.env.example`. Required for full functionality:

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Contact form email delivery. Without it, submissions are logged instead of sent. |
| `CONTACT_TO_EMAIL` | Enquiry recipient. Defaults to `enquiries@blackoakglobal.com`. |
| `CONTACT_FROM_EMAIL` | Verified sender in Resend. Defaults to `website@blackoakglobal.com`. |
| `INVESTOR_PORTAL_PASSWORD` | Shared password for the LP portal. |
| `SITE_URL` | Absolute URL used for canonicals and sitemap. Defaults to `https://blackoakglobal.com`. |

## Content

All copy lives as typed TypeScript modules under `src/content/`. To add a
portfolio deal, insight, or team member, edit the corresponding file and
commit — Vercel will redeploy automatically.

- `firm.ts` — tagline, metrics, values, timeline, offices, etymology
- `team.ts` — leadership groups and bios
- `services.ts` — the six practice areas
- `portfolio.ts` — deals shown on `/portfolio`
- `insights.ts` — articles + market reports on `/insights`
- `clients.ts` — Who We Serve profiles and pillars
- `sustainability.ts` — ESG page content
- `report.ts` — Integrated Report landing content
- `portal.ts` — Investor Portal dashboard content

## Deployment to Vercel

1. Push this repository to GitHub.
2. In the Vercel dashboard, "Add New → Project" and import the repo.
3. Framework preset: **Next.js** (auto-detected). No build overrides required.
4. Add the environment variables above under Project Settings → Environment
   Variables.
5. Deploy. Preview URL is generated per pull request; `main` deploys to
   production.
6. When ready to cut over: add `blackoakglobal.com` under Project Settings →
   Domains and follow the DNS instructions Vercel provides (A record
   `76.76.21.21` or CNAME to `cname.vercel-dns.com`).

Security headers are set in `vercel.json`. Legacy URL redirects (from the old
site) are configured in `next.config.ts`.

## Investor Portal

`/investors/*` is gated by a middleware that checks for an `HttpOnly` session
cookie. The cookie is set by `POST /api/investors/login` after a password
match against `INVESTOR_PORTAL_PASSWORD`. To rotate the password, update the
env var in Vercel and redeploy — active sessions expire after 8 hours.

## License

Proprietary — © BlackOak Global.

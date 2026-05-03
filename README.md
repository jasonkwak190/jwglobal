# JW GLOBAL (KOREA) CO., LTD — Corporate Site

Bilingual (EN default · KO) one-pager for **JW GLOBAL (KOREA) CO., LTD** (제이더블유글로벌 주식회사), built with Next.js 16 App Router + next-intl + Tailwind CSS v4 + Framer Motion.

## Stack

- Next.js 16 (App Router, RSC)
- TypeScript
- Tailwind CSS v4 (`@theme inline` design tokens)
- next-intl 4 (EN default, `/ko` for Korean)
- Framer Motion (scroll fade-ins, hero reveal)
- Lucide React (icons)
- Inter (Latin) + Pretendard (Korean) via CDN

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000  (EN)
# → http://localhost:3000/ko  (KO)
```

Build & start production:

```bash
npm run build
npm start
```

## Project layout

```
app/
  [locale]/
    layout.tsx        ← root html/body, fonts, metadata, NextIntlClientProvider
    page.tsx          ← single page composing all sections
  globals.css         ← Tailwind v4 + Ocean Trust design tokens
  sitemap.ts
  robots.ts
components/
  Header.tsx          ← sticky, transparent → solid on scroll
  Hero.tsx            ← full-screen with stock container ship photo
  About.tsx
  Services.tsx        ← 4 service cards
  WhyUs.tsx           ← 3 column value props
  Contact.tsx         ← address + email + Google Maps embed
  Footer.tsx
  Logo.tsx            ← wordmark fallback (replace when real logo arrives)
  LanguageToggle.tsx  ← EN | KO switch in header
  Section.tsx         ← shared eyebrow/title/subtitle wrapper with fade-in
i18n/
  routing.ts          ← locales + default + URL strategy
  navigation.ts       ← typed Link/useRouter/usePathname
  request.ts          ← per-request locale + messages
messages/
  en.json
  ko.json
middleware.ts         ← next-intl locale negotiation
```

## How to update content

1. **Copy text:** edit `messages/en.json` and `messages/ko.json`. Keys are the source of truth — both files must stay in sync.
2. **Address / email:** also lives in `messages/*.json` (`contact.address`, `contact.email`, `footer.companyName`).
3. **Hero image:** in `components/Hero.tsx`, swap the Unsplash URL for a self-hosted asset under `public/hero/` and update `next.config.ts` `remotePatterns` accordingly.
4. **Logo:** drop the file at `public/brand/logo.svg` (and `logo-light.svg` for the dark hero/footer), then replace the wordmark in `components/Logo.tsx` with `<Image src="/brand/logo.svg" ... />`.
5. **Map location:** the Google Maps embed in `components/Contact.tsx` is keyed by address text — update if the office moves.

## Design tokens — "Ocean Trust"

| Token | HEX | Use |
|---|---|---|
| `--color-navy-950` | `#06172e` | Hero/footer background |
| `--color-navy-900` | `#0b2340` | Headings, primary surfaces |
| `--color-steel-700` | `#1c5d99` | Eyebrows, links |
| `--color-signal-500` | `#f5a623` | CTA, accent |
| `--color-mist-50` | `#f7f9fc` | Alternating section bg |
| `--color-ink-900` | `#1a1f2e` | Body text |
| `--color-muted-500` | `#6b7588` | Captions |

## Deployment

The repo is Vercel-ready. Push to GitHub and import — no env vars required for v1. Custom domain (`jwglobal.co.kr`) can be added in Vercel project settings; remember to update `metadataBase` in `app/[locale]/layout.tsx` if the canonical domain changes.

## Roadmap (out of v1 scope)

- Replace Unsplash hero with first-party port/container photography
- Real logo + favicon (drop into `app/favicon.ico` and `public/brand/`)
- Org chart + history pages (currently omitted per client request)
- Quote request form (mailto link is the v1 substitute)
- Korean business registration footer block (대표자/사업자등록번호 등) once provided

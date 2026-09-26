# CLAUDE.md — Elena Website

Long-term maintained personal brand site for **Elena Cheng (程瑛)**, Bay Area Realtor with a
Feng Shui / environmental-psychology angle. Chinese-first, bilingual-ready.

## Source of truth

`reference/Elena_Website_Demo_Standalone.html` is the **approved design**. Every visual decision
(colors, type, spacing, radii, section order, copy) comes from it. Do not redesign, do not swap in a
generic Realtor template, do not change the visual language when editing.

## Hard rules

- Never invent contact info, DRE license, testimonials, sales numbers or transaction records.
  Unknown values stay `null` in `src/content/site.ts`; components hide nulls.
- Never use stock/fake photos of Elena. Only images Joan provides go in `public/images/`.
- No bagua / dragons / large gold areas / heavy animation / MLS search unless explicitly requested.
- Don't translate Chinese copy to English or rewrite copy unless asked.
- Real estate expertise is the core; Feng Shui + environment are the added dimension.

## Where things live

- Copy: `src/content/zh/home.ts` (homepage + nav), `src/content/zh/insights.ts` (Knowledge Library).
- Facts / contact / social / SEO: `src/content/site.ts` — change a phone number in ONE place.
- Types: `src/content/types.ts`. Entry point: `getDictionary(locale)` in `src/content/index.ts`.
  Components get content via props; don't import `content/zh/*` inside components.
- Design tokens: `:root` in `src/app/globals.css` (exact demo hex values). Section styles are
  co-located `*.module.css` files that mirror the demo CSS rule-for-rule.
- Shared global classes: `.wrap`, `.kicker`/`.eyebrow`, `.lead`, `.btn-primary`, `.btn-secondary`.

## Common tasks

- **Add a Knowledge Library article** ("增加一篇门口垃圾桶的内容"): append one object to `insights`
  in `src/content/zh/insights.ts` (unique kebab-case `slug`, `category` from `insightCategories`,
  `excerpt`, optional `content[]`, `videoUrl`, `youtubeUrl`, `publishDate`, `tags`). Nothing else
  needs to change — homepage, /insights, /insights/[slug] and sitemap pick it up.
- **New category**: add the id to `InsightCategoryId` in `types.ts` and a label in `insightCategories`.
- **New case study / landing page**: add a typed content file under `src/content/zh/`, a component
  in `src/components/`, and a route in `src/app/`. Reuse tokens and primitives.
- **Contact / consultation link**: `site.contact.consultationUrl` drives every「咨询 Elena」button.

## Responsive breakpoints (from the demo)

- `≤960px`: nav links hidden, hero/about/contact single column, 2-col grids.
- `≤680px`: single column everywhere, h2 36px, hero h1 44px, 14px side gutters.
- Deviations from the demo (bug fixes only): CJK headings use normal line breaking instead of
  `keep-all` (demo overflowed on mobile/tablet), nav CTA never wraps, 2×2 client-flow borders.
  Check 375 / 390 / 768 / 1024 / 1440 for horizontal overflow after layout changes.

## Before committing

```bash
npm run lint && npm run typecheck && npm run build
```

Commit style: conventional commits (`feat:`, `fix:`, `content:`, `style:`).

## Deployment

- GitHub: https://github.com/joanne645/elena-website (branch `main`)
- Vercel project `elena-website` (team Joan2026); every push to `main` auto-deploys.
- Live URL: https://elenacheng.vercel.app — set in `src/lib/site-url.ts` (`PRODUCTION_URL`);
  change it there when a custom domain is connected.
- Local working copy: `~/Elena Cheng2026/Elena个人网站/elena-website` on Joan's Mac.

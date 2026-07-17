# Charmé — Shopify Build Kit

One-product (hero-SKU) store for **Charmé** metal/enamel clip-on bag charms. US market, Dawn theme, Shopify Basic, CJ Dropshipping. Built to take TikTok paid traffic ~D9, paid acquisition ends 15/11/2026.

**All external facts (app pricing, plan limits, theme specs, FTC penalty) verified at source on 2026-07-17.** Sources are cited inline in each file. Anything unverifiable is tagged `MISSING DATA`. Assumptions are tagged `⚠️ assumption`.

## Reading order

| # | File | What it is | Read when |
|---|------|-----------|-----------|
| 0 | `store-wireframe.md` (A) | Reference audit of 3 real US stores + full site tree + mobile section-by-section wireframe (home + product) | First. Everything else references this structure. |
| 1 | `store-copy-en-US.md` (B) | Every word on the site, in US English: product page, home, Our Story, micro-copy, 3 Klaviyo emails. Each block tagged with objective + objection. | Paste into theme + Klaviyo. |
| 2 | `dawn-design-specs.md` (C) | Exact Dawn theme-editor settings: type, palette→roles, spacing, buttons, cards, header/footer. WCAG AA contrast checked on every pair. | While configuring the theme. |
| 3 | `visual-assets-plan.md` (D) | Every image needed: role, ratio, px, weight, SEO alt, ready-to-use AI prompt. Splits AI-generatable vs must-be-real-photo. | Before/while sourcing product. |
| 4 | `apps-and-pricing-config.md` (E) | 6 apps: role, plan, verified cost, setup steps, what to switch off. Pricing/variant/bundle/upsell architecture + AOV math. | While installing apps + building products. |
| 5 | `us-compliance.md` (F) | Paste-ready ToS, Privacy, Shipping, Refund. FTC checklist (Reviews Rule + Endorsement Guides). Plan to get *real* reviews. | Before traffic. Lawyer-review flags included. |
| 6 | `tracking-and-qa.md` (G) | TikTok Pixel + Events API + Web Pixels, events, verification. Pre-launch acceptance checklist (binary pass/fail). | Last 48h before ads. |
| 7 | `build-checklist-d1-d7.md` (H) | D1→D7 task list, durations, dependencies, blockers. 10 hrs/week, intermediate skill. | Your daily driver. |

## The one-screen summary

- **Offer:** Single $24.99 (compare-at $39) · x2 $39 · x3 gift set $54 · free ship ≥$35 · post-purchase upsell $14 → downsell $11.
- **Target AOV ~$34**, contribution margin ~$22.5, break-even CPA $22.5.
- **App spend: $29.99/mo total** — Vitals is the only paid app. Judge.me, Shopify Forms, Search & Discovery, CJ, Klaviyo (≤250) are free.
- **Decision forced by budget:** Zipify OCU rejected (min $35/mo > $30 cap). Vitals handles bundles + post-purchase upsell/downsell.
- **Biggest compliance risk:** reviews. No fake/insider reviews. Delivery window on PDP *and* checkout. See F.
- **Biggest conversion risk:** 8–15 day CJ delivery on ~90% cold mobile traffic. Mitigated by shipping transparency + gift framing for Q4, not by hiding it.

# E. Apps & Pricing Config — Charmé

All prices **verified at source on 2026-07-17** (links at bottom). App budget cap: **≤ $30/mo**. Only one paid app in the stack.

---

## 1. The 6 apps

| App | Role | Plan | Verified monthly cost | Notes |
|---|---|---|---|---|
| **Judge.me** | Product reviews, star ratings, review-request emails, rich snippets | **Forever Free** | **$0** | Free plan = unlimited review requests, photo/video reviews, SEO snippets; only trade is a small "Powered by Judge.me" badge. Awesome plan ($15/mo) removes branding — **skip for now**. |
| **Shopify Forms** | Email capture (footer, popup) → Klaviyo/Shopify | Native, **Free** | **$0** | First-party. Use for consented signups. |
| **Vitals** | Bundles (x2/x3) + **post-purchase upsell/downsell** + sticky ATC | Paid | **$29.99/mo** (flat) **+ usage** | Only paid app. The upsell/bundle features are in the flat fee. **Switch OFF usage-based modules** (SMS, email marketing, translations) — those add usage charges and would break the ≤$30 cap. |
| **CJ Dropshipping** | Sourcing, US-warehouse fulfillment, custom packaging | Free app | **$0** | Pay per product/shipping (COGS), not a subscription. |
| **Shopify Search & Discovery** | On-site search, filters, product recommendations | Native, **Free** | **$0** | First-party. Powers search + "you may also like." |
| **Klaviyo** | Email flows (welcome, abandon, review-adjacent) | **Free** | **$0** (≤ 250 active profiles, ≤ 500 sends/mo) | Free indefinitely under 250 profiles / 500 sends per month. Plan a paid upgrade trigger before you cross 250. |

**Total fixed app spend: $29.99/mo.** ✅ under cap.

### Decision: Vitals over Zipify OCU
Zipify OneClickUpsell starts at **$35/mo + 1% of upsell revenue** — over the $30 cap on day one. Rejected. Vitals delivers post-purchase upsell **and** bundles **and** sticky ATC in one $29.99 flat fee, so it also removes the need for extra apps. `⚠️ Watch Vitals' "+ usage" line: keep SMS/email/translation modules off or the bill exceeds $30.`

### What to switch OFF
- Vitals: all marketing/SMS/translation/currency modules (usage-metered). Keep only Bundles, Post-Purchase Upsell, Sticky Add-to-Cart.
- Judge.me: leave on Free; don't enable paid AI/Q&A yet.
- No countdown timers, "visitors viewing," or fake-scarcity widgets — even where an app offers them (brand + FTC rule 4).

---

## 2. Product & pricing architecture in Shopify

### Variants vs separate products — DECISION: **one product, variants = designs**
Create **one product** ("Charmé Charm") with a single option **Design/Color** and one variant per design. Reasoning:
- All paid traffic lands on **one URL** → one high-converting PDP, one review pool (Judge.me), clean analytics and pixel data.
- CJ maps each variant to its supplier SKU.
- Avoids catalog sprawl on a one-product store (matches wireframe A).

Unit price per variant: **$24.99**, **Compare-at $39** (credible: it's the honest single-unit anchor vs the multi-buy value — not a fake inflated MSRP; see F for compare-at compliance).

### Bundles (x2 / x3) — DECISION: **Vitals bundle offers, not separate SKUs**
- **2 Charms — $39** (vs $49.98 → saves ~$11).
- **3-Charm Gift Set — $54** (vs $74.97 → saves ~$21), free shipping included (crosses $35).
- Built as Vitals **Bundle** offers on the PDP (line-item discount), so inventory stays on the single product's variants and reviews stay unified. Not modeled as standalone products.

### Free shipping threshold
**Settings → Shipping and delivery → your zone:**
- **Free shipping** on orders **≥ $35**.
- **Flat $4.95** under $35. `⚠️ assumption: $4.95 chosen to (a) nudge to the x2 bundle and (b) recover part of CJ ship cost; confirm against CJ actual ship cost.`
- Cart progress bar (Vitals or Dawn) shows "$X to free shipping."

### Post-purchase upsell / downsell (Vitals, appears AFTER checkout)
On Shopify Basic you **cannot** modify the in-checkout page (that's Plus). Post-purchase offers on the **thank-you / order-status step are supported on Basic** via the post-purchase extension — that's what Vitals uses. Verified.
- **Upsell:** +1 charm for **$14** one-time (copy in B). One-click, same shipment, no re-payment.
- **Downsell** (if declined): +1 charm for **$11**. Copy in B.

---

## 3. AOV math

**Order-tier mix — `⚠️ assumption`:** 60% buy 1×, 28% buy 2×, 12% buy 3×.
**Post-purchase — `⚠️ assumption`:** 12% accept the $14 upsell; of those who decline, 8% accept the $11 downsell.

| Component | Calc | Value |
|---|---|---|
| Base AOV | 0.60×$24.99 + 0.28×$39 + 0.12×$54 | **$32.39** |
| Upsell add | 0.12×$14 | +$1.68 |
| Downsell add | (0.88×0.08)×$11 | +$0.77 |
| **Blended AOV** | | **≈ $34.84** |

Lands on the **~$34 target**. Sensitivity: if 1× share is really 70% and upsell take only 8%, base = $31.3 and add = ~$1.6 → AOV ≈ $32.9 (still workable). If x2 pushes to 35%, AOV clears $36.

**Contribution-margin bridge (`⚠️ assumption` — confirm with CJ quote):**

| Line | Value |
|---|---|
| Blended AOV | $34.84 |
| − Shopify Payments fee (2.9% + $0.30) | −$1.31 |
| − Product + fulfillment + packaging (blended ~1.4 units/order) | −$10.2 `⚠️` |
| − Vitals amortized (÷ orders) | small, ignore at scale |
| **Contribution margin / order** | **≈ $22.5** |

Matches the locked target → **break-even CPA ≈ $22.5**. On TikTok, aim CPA < $18 to leave margin for returns/refunds and the 15/11 cutoff runway. `⚠️ The $10.2 blended cost is the single biggest assumption — get CJ's real per-unit + US-ship + packaging quote and re-run this before scaling spend.`

---

## 4. Setup order (condensed — full timing in H)
1. Create the single product + variants; set $24.99 / compare $39; map CJ SKUs.
2. Shipping: free ≥$35, flat $4.95 under.
3. Install Vitals → enable Bundles (x2/x3), Post-Purchase (upsell $14 → downsell $11), Sticky ATC; disable usage modules.
4. Install Judge.me (Free) → enable review widget on PDP + request emails (D+? — align with Klaviyo, avoid double-emailing).
5. Install Search & Discovery → search + recommendations.
6. Install Shopify Forms → footer signup → Klaviyo list.
7. Klaviyo → 3 flows from B (welcome, abandon D+1/D+3, review D+10). Decide: send review request from **either** Judge.me **or** Klaviyo, not both.

## Sources (accessed 2026-07-17)
- Judge.me pricing (Free forever / Awesome $15): [judge.me/pricing](https://judge.me/pricing), [Awesome plan](https://judge.me/help/en/articles/8415450-judge-me-awesome-plan)
- Klaviyo free plan (250 profiles / 500 sends): [klaviyo.com/pricing](https://www.klaviyo.com/pricing), [Klaviyo Help — free vs paid](https://help.klaviyo.com/hc/en-us/articles/360050759151)
- Vitals pricing ($29.99/mo + usage): [vitals.app/pricing](https://vitals.app/pricing), [Shopify App Store — Vitals](https://apps.shopify.com/vitals)
- Zipify OCU pricing (from $35/mo +1%): [Zipify Help — Plan & Billing](https://help.zipify.com/en/articles/4571658-plan-billing-for-your-subscription-ocu)
- Shopify Payments US rate (2.9% + 30¢): [Shopify Help — US card rates](https://help.shopify.com/en/manual/payments/shopify-payments/transactions/credit-card-rates)
- Post-purchase on Basic: [Shopify App Store — checkout upsells](https://apps.shopify.com/collections/checkout-upsells)

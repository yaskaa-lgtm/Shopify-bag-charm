# A. Store Wireframe — Charmé

Mobile-first. Every decision justified on a **390px** viewport (iPhone 14/15 logical width). Traffic is ~90% mobile, cold, from TikTok. If an element doesn't survive the thumb, it's cut.

---

## Step 1 — Reference audit (3 real US stores)

Real, operating US DTC brands with a hero-product structure and strong post-click experience. Analysis is based on their publicly observable page patterns; **verify live section order before copying** (method: open on a 390px device / Chrome DevTools device mode, scroll the product page top-to-bottom, list sections). I have not invented conversion metrics — none are stated as fact below.

| Dimension | **Bala** (bala.com) — weighted bangles | **Truff** (truff.com) — hot sauce gifting | **Baggu** (baggu.com) — bags/accessories |
|---|---|---|---|
| Hero PDP pattern | Big lifestyle image, price + variant swatches above the fold, single dominant CTA | Product-on-color-field macro, bold single CTA, bundle toggle near top | Grid of colorways, fast add, minimal copy, strong photography |
| Social proof | Star rating near title, review block mid-page, press logos | Reviews + "as seen in" press wall, UGC | Reviews lower, relies on brand/aesthetic + IG |
| Objection handling | "How it works" + material/spec callouts, shipping/returns clear | Flavor/heat explainer, gifting reassurance, FAQ | Care/size/material specifics, shipping banner |
| Bundle / AOV | Sets & kits merchandised as their own products | Bundles + "build your own" pushed hard | Sets, multi-color packs, add-ons at cart |
| Color/brand | Muted, tonal, one accent, lots of whitespace | High-contrast, single pop color per frame, premium | Playful, saturated, editorial |
| Announcement bar | Shipping threshold / promo | Free-shipping threshold | Shipping + drop news |

**What we steal**
- Price + variant swatch + one dominant CTA **above the 390px fold** (all three do this).
- One pop color per photo frame against a non-white field (Truff's macro-on-color look → our cream field). Kills the AliExpress smell.
- Bundles merchandised as first-class choices, not buried (Bala/Truff).
- Star rating adjacent to the product title as the first trust signal (Bala).
- Shipping expectation stated early and plainly (all three) — we *must*, given 8–15 day delivery + FTC.

**What we avoid**
- Baggu-style reliance on brand equity we don't have yet (cold traffic needs more explicit objection handling and proof).
- Long editorial scroll before the CTA (Baggu). Cold TikTok traffic won't earn-back a slow reveal.
- Any pattern none of them use: countdown timers, "X people viewing," blinking discount badges. Real brands don't; we won't.

---

## Step 2 — Site tree

```
Home
├── Shop (single collection: "All Charms" — 1–3 products, no catalog sprawl)
│   └── Product: The Charmé Charm (hero SKU; variants = designs/colors)
│       ├── Bundle x2 / Bundle x3 (as line-item bundles via Vitals, same PDP)
│       └── Cart → Checkout → Post-purchase upsell ($14) → Downsell ($11) → Thank-you
├── Our Story
├── Shipping & Returns
└── Footer
    ├── Our Story · Shipping & Returns · Contact
    ├── Search
    └── Legal: Terms of Service · Privacy Policy · Refund Policy · Shipping Policy
```

Notes:
- **One product, variants = designs.** Not a catalog. "Shop" links straight to the PDP or a 1–3 tile collection. Justification: cold impulse traffic converts on a single decision, not a browse.
- **Bundles live on the PDP** as a quantity/tier selector (Vitals bundles), not separate products — keeps all ad traffic on one high-converting URL and one review pool. (See E for the variants-vs-products decision.)

---

## Step 3 — PRODUCT PAGE wireframe (mobile 390px, top → bottom)

Departure from stock Dawn PDP is justified per section. Dawn default order is roughly: media gallery → title/price → variant picker → buy buttons → description → collapsible rows. We keep Dawn's DOM but **re-order via section/blocks and add native sections** so proof and objection-handling surface earlier.

| # | Section | Conversion objective | Content | Why here (390px logic) |
|---|---------|---------------------|---------|------------------------|
| 1 | **Announcement bar** | Set shipping expectation + threshold | "Free US shipping over $35 · Ships in 8–15 days" | First pixel. FTC delivery transparency starts here; also frames free-ship upsell. |
| 2 | **Header** (logo + cart + search) | Orientation, low friction | Minimal: wordmark center, cart right | Thumb-reachable cart; no mega-menu on mobile. |
| 3 | **Media gallery** | Desire in <1s | 4–6 images: hero on cream, macro on leather, scale-on-bag, gifting, packaging | Image is the hook for TikTok traffic. Swipeable, 1:1 to 4:5. |
| 4 | **Title + star rating + price** | Identify + anchor value | "Charmé Charm", ★ rating (Judge.me), $24.99 ~~$39~~ | Above fold at 390px. Rating is first trust cue (stolen from Bala). |
| 5 | **Variant swatches (designs)** | Let her pick "her" charm | Visual swatches, not dropdown | Swatches convert better than a select on mobile; each is a mini-commitment. |
| 6 | **Bundle tier selector** | Raise AOV to ~$34 | 1x $24.99 · 2x $39 (save) · 3x gift set $54 | Placed pre-CTA so the upsell is a choice, not a nag. |
| 7 | **Primary CTA (sticky)** | The one action | "Add to Bag" — sticky on scroll | Sticky ATC = the thumb always has the button. Single dominant CTA. |
| 8 | **Trust row (icons)** | Kill risk instantly | Ships from US · 30-day returns · Secure checkout | Directly under CTA where hesitation happens. |
| 9 | **5 benefit bullets** | Translate features → feelings | Enamel/metal, clips to any bag, weight/size, photographs well, gift-ready | Scannable. Benefits before long copy. |
| 10 | **Objection block (3)** | Neutralize the "but…" | Shipping time · "will it fit my bag" · quality vs cheap charms | Handle objections *before* FAQ; cold traffic bails on unspoken doubt. |
| 11 | **Reviews (Judge.me)** | Proof at scale | Real reviews w/ photos, rating breakdown | After we've made the claims, we substantiate them. |
| 12 | **How it works (3 steps)** | Reduce use uncertainty | Clip → style → restyle | Cheap dopamine + shows versatility. |
| 13 | **Long description** | SEO + deep researchers | Materials, dimensions, care, story hook | Low on page: only the high-intent scroller reaches it. |
| 14 | **FAQ (8, collapsible)** | Last-mile objections | Shipping, returns, materials, gifting, care | Collapsible saves vertical space at 390px. |
| 15 | **Gift/Q4 cross-sell** | Second AOV lever | "Make it a gift set" → x3 | Seasonal, swappable banner. |
| 16 | **Footer** | Legal + trust | Legal links, contact, payment icons | FTC + credibility. |

Sticky **Add to Bag** (7) persists behind sections 8–15.

---

## Step 3 — HOME PAGE wireframe (mobile 390px, top → bottom)

Home exists mainly for (a) brand credibility for TikTok users who tap the profile/bio and (b) SEO/retargeting. Most paid traffic lands on the PDP. Kept short.

| # | Section | Objective | Content | Why here |
|---|---------|-----------|---------|----------|
| 1 | Announcement bar | Shipping/threshold | Same as PDP | Consistency. |
| 2 | Hero | 3-sec brand hit + CTA | Lifestyle image, headline, "Shop the Charm" | One image, one line, one button on 390px. |
| 3 | Value props (3 icons) | Why Charmé | Elevated materials · US-shipped · gift-ready | Scannable proof strip. |
| 4 | Featured product | Route to PDP fast | The hero SKU card + price + CTA | Minimize clicks to the money page. |
| 5 | How it works (3 steps) | Show versatility | Clip → style → restyle | Same content family as PDP. |
| 6 | Social proof strip | Borrowed trust | Review quotes / UGC (with disclosure per F) | Cold users need proof early. |
| 7 | Q4 gifting banner | Seasonal AOV | "The under-$30 gift that doesn't look under-$30" | Swappable for season. |
| 8 | Footer | Legal + links | Same as PDP | — |

**Departures from stock Dawn home** justified: stock Dawn leads with a large image-banner + featured-collection + multicolumn. We keep image-banner (2), replace generic collection with a single featured-product (4) because it's a one-product store, and add a How-it-works (5) + gifting banner (7) using Dawn's native `multicolumn` and `image-with-text` — no custom Liquid.

---

## Mobile performance guardrails (feed into C + G)
- Hero + first gallery image are the LCP element → compress hard, correct dimensions (see D), lazy-load everything below the fold.
- No carousel autoplay above the fold (layout shift + CPU).
- Sticky ATC is CSS/native Dawn behavior or a single lightweight app block — no heavy script.
- Target: LCP < 2.5s on 4G, CLS < 0.1 (verified in G).

## Sources
- Reference brands are real operating US stores: [bala.com](https://www.bala.com), [truff.com](https://truff.com), [baggu.com](https://baggu.com). Section-order claims are pattern-level and should be confirmed live per the method above.

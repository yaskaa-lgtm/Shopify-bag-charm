# G. Tracking & QA — Charmé

Goal: reliable conversion data for TikTok before spend, and a binary pre-launch gate. ~90% mobile, so every check is on a **390px** device.

---

## 1. TikTok tracking stack

Use **all three signals** for redundancy and iOS resilience:

| Layer | What | Why |
|---|---|---|
| **TikTok Pixel** (browser) | Base client-side pixel via TikTok's Shopify app | Fast to set up, powers basic events |
| **Events API** (server-side) | Server events from Shopify → TikTok, event deduplication with pixel | Recovers events lost to iOS/ad-blockers; better match quality |
| **Shopify Web Pixels** | Shopify's sanctioned customer-events sandbox that feeds pixels | Compliant event capture on checkout/thank-you |

**Setup path**
1. Install the **TikTok for Business** app from the Shopify App Store → connect your TikTok Ads account + Business Center.
2. In the app, enable **Advanced Matching** and **Events API** (server-side). Confirm a single pixel ID is used everywhere (no duplicate manual pixel in theme.liquid — duplicates double-count).
3. Confirm events map through **Shopify Web Pixels** (the TikTok app registers a web pixel automatically; don't also hard-code the base pixel in the theme, or you'll double-fire).
4. Set the **data-sharing / customer privacy** settings to respect consent (ties to F privacy).

**Events to track (minimum)**

| Event | Fires on | Use |
|---|---|---|
| PageView | all pages | reach/retargeting |
| ViewContent | product page | audience + top-funnel opt |
| AddToCart | ATC / bundle add | mid-funnel signal |
| InitiateCheckout | checkout start | optimization event candidate |
| CompletePayment (Purchase) | thank-you / order paid | **primary optimization + ROAS** |
| (optional) CompleteRegistration | email signup | retargeting list |

Optimize campaigns on **CompletePayment** once you have enough conversions; use **AddToCart/InitiateCheckout** while volume is low.

---

## 2. Tracking verification (binary)

| # | Test | Pass criterion |
|---|---|---|
| T1 | Pixel present, single instance | TikTok Pixel Helper shows **one** pixel, no duplicates |
| T2 | ViewContent fires | Test event appears in TikTok Events Manager on PDP load |
| T3 | AddToCart fires | Event appears on add-to-bag |
| T4 | InitiateCheckout fires | Event appears on checkout start |
| T5 | Purchase fires **once** | One CompletePayment per test order, correct value + currency (USD) |
| T6 | Server + browser dedup | Events Manager shows events deduplicated (not 2× counted) |
| T7 | Value accuracy | Purchase value matches order total incl. upsell |
| T8 | Consent respected | Events suppressed/limited when consent declined (per F) |

---

## 3. Pre-launch acceptance checklist (Step 4 — the gate)

**Do not open ad taps until every line passes.** One line, one binary criterion.

### Functional / orders
| # | Test | Pass |
|---|---|---|
| F1 | Place a real test order (single) end-to-end | Order confirmed, paid, appears in admin |
| F2 | Test order — x2 bundle | Correct price $39, correct line items |
| F3 | Test order — x3 gift set | Correct price $54, free shipping applied |
| F4 | Free-shipping threshold | Free ship at ≥$35, $4.95 below |
| F5 | Post-purchase upsell shows | $14 offer appears after checkout |
| F6 | Upsell accept works | Adds item, no re-payment, same order |
| F7 | Downsell shows on decline | $11 offer appears after declining upsell |
| F8 | CJ order routing | Test order flows to CJ / can be fulfilled |
| F9 | Order confirmation email | Received, correct details + delivery window |
| F10 | Refund path | Test refund processes to original payment |

### Mobile / performance (390px)
| # | Test | Pass |
|---|---|---|
| M1 | PDP above-the-fold | Title + price + swatch + CTA visible without scroll on 390px |
| M2 | Sticky Add-to-Bag | Persists on scroll, tappable, ≥48px height |
| M3 | LCP | < 2.5s on 4G (PageSpeed Insights mobile) |
| M4 | CLS | < 0.1 (no jumpy hero/gallery) |
| M5 | Images sized correctly | No oversized downloads; WebP served; weights within D budget |
| M6 | Tap targets | No mis-taps; buttons/links ≥44px |
| M7 | No horizontal scroll | Page doesn't overflow at 390px |

### Compliance (cross-check F)
| # | Test | Pass |
|---|---|---|
| C1 | Delivery window on PDP | "8–15 business days" visible |
| C2 | Delivery window at checkout | Visible on checkout/notice |
| C3 | 4 legal policies live + linked | ToS, Privacy, Shipping, Refund reachable from footer |
| C4 | No fake urgency/social-proof widgets | None present |
| C5 | Reviews are real or none | Zero fabricated reviews |
| C6 | Compare-at basis documented | Evidence saved |

### Emails / lifecycle
| # | Test | Pass |
|---|---|---|
| E1 | Welcome flow | Signup triggers Email 1 |
| E2 | Abandon D+1/D+3 | Abandoned checkout triggers Email 2 then 2b |
| E3 | Review request D+10 | Fulfilled order triggers Email 3 (honest, no incentive-on-sentiment) |
| E4 | No double review-ask | Judge.me OR Klaviyo sends the review request, not both |
| E5 | Unsubscribe works | Link removes profile from sends |

### Tracking (from §2)
| # | Test | Pass |
|---|---|---|
| P1–P8 | All T1–T8 above | Every one passes |

---

## 4. Tools to verify with
- **TikTok Pixel Helper** (browser extension) + **TikTok Events Manager → Test Events**.
- **Google PageSpeed Insights** (mobile tab) for LCP/CLS.
- **Chrome DevTools device mode** at 390px for layout.
- Shopify **Bogus Gateway** or a real $ test order then refund for F1–F10.

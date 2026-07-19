# Charmé — Interactive Store Mockup

A clickable prototype of the Charmé store. Same approved design (cream/ink/persimmon/patina/gold · Archivo + DM Sans · marquee, trust bar, hard-shadow cards). Now with a **working charm-design picker, add-to-bag, slide-in cart drawer, and a live cart** — all client-side so it behaves like the real thing without a backend.

Open `index.html` in a browser. No build step.

## What changed
- **`product.html`** — new charm-design picker (all 6 designs visible), a set selector (Single / x2 / x3), a quantity stepper, working **Add to bag**, Details & Care + Shipping accordions, About band, ink trust bar, and a "You may also like" row that re-opens the PDP with a design preselected.
- **`cart.html`** — no more hard-coded rows. Renders the real cart state with editable quantities, remove buttons, live subtotal, and the free-shipping bar.
- **`index.html`** — hero CTA and product cards route into `product.html` (hero preselects `?charm=strawberry`).
- **`charme.css`** — new styles for the picker, gallery, cart drawer, and "you may also like", all using the **existing tokens** (no new colors/fonts, nothing restyled).
- **`charme.js`** (new) — the prototype cart engine + PDP logic, loaded on every page. Cart persists in `localStorage` (wrapped in try/catch).

## The design picker (mix-and-match bundles)
- **Single** = the one selected design.
- **x2 / x3** = "pick 2 / pick 3 designs" — the tiles become multi-select and Add-to-bag stays disabled until you've chosen the right number (`n/N` counter shown).
- Selecting updates the main image (tinted stand-in), title, and price; the chosen tiles are marked.
- **Lucky Clover is sold out** → selecting it reveals a **Notify me** email capture instead of add (prototype).
- Keyboard accessible: tiles are focusable, Enter/Space select, `aria-checked` reflects state.

## Images
Real photos aren't in the repo. Each design references a filename slot: **`images/charme-charm-<design>-1080.jpg`** (e.g. `charme-charm-strawberry-1080.jpg`). Until those exist, the page renders the SVG charm stand-in tinted to each design's accent. To switch to real photos: drop the files into an `images/` folder and set `USE_IMAGES = true` at the top of `charme.js`.

**Slots that need real product photos:** strawberry, cherry, lemon, green-apple, golden-heart, lucky-clover — plus the 4 PDP gallery views (main / on-bag / scale-in-hand / packaging).

## Prototype → Shopify mapping
| Prototype piece | Real Shopify equivalent | Beyond stock Dawn? |
|---|---|---|
| 6 charm designs | Product **variants** (option "Design") or 6 separate products | No — variants are native |
| Mix-and-match x2/x3 bundle | A bundle app (e.g. Shopify Bundles / Vitals) — a single line item can't natively hold multiple different variants at a bundle price | **Yes** — needs a bundle app |
| Add to bag → drawer | Theme cart drawer + **AJAX Cart API** (`/cart/add.js`, `/cart.js`) | No — Dawn has a cart drawer |
| `localStorage` cart | Shopify server-side cart (the `cart` object) | No |
| Cart page (qty/remove/subtotal) | Dawn `cart` template + cart change API | No |
| Free-ship progress at $35 | Cart drawer progress + a shipping rate rule | No |
| "Notify me" on sold-out | Back-in-stock app (Klaviyo, Back in Stock, etc.) | **Yes** — needs an app |
| Sample reviews | Judge.me (free) | Adds an app |
| Checkout button | Shopify Checkout | No |

## Honesty / compliance notes (kept intentionally)
- Delivery shown as **8–15 days** everywhere (matches the shipping policy). No fake 1–2 day claim.
- **Sample reviews** are labelled "replace before launch (FTC)."
- **No fake countdowns or stock counters.** "Sold out / Notify me" is a real state, so it's fine.
- Product facts unchanged: zinc-alloy + enamel, under 100g.

## Test the full flow (5 steps)
1. Open **`index.html`** → click the hero **"Shop the charm"** (or any product card) → lands on the PDP with Strawberry preselected.
2. Click **Mix & Match — x2** → the picker asks for **2 designs**; pick Cherry + Lemon (Add stays disabled until 2/2).
3. Bump **Quantity** to 2, click **Add to bag** → the **slide-in drawer** opens showing the line, the $35 progress bar, and subtotal; the header **Bag ·** count jumps.
4. Click a **sold-out** design (Lucky Clover) → the **Notify me** field appears instead of add.
5. Click **View bag** → **`cart.html`** shows the same items with working +/- and remove, and the subtotal updates live. (Reload any page — the cart persists.)

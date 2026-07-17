# C. Dawn Design Specs — Charmé

Theme: **Dawn** (latest, v15.4.x as of 2026-07-17 — [Shopify/dawn releases](https://github.com/Shopify/dawn/releases)). Dawn's default font is **Assistant**; we replace it. Fonts, colors, spacing, buttons, cards are all set in the **theme editor / theme settings** — no custom Liquid.

All settings given as **exact path → value**. Every color/background pair is checked against **WCAG 2.1 AA** (normal text ≥ 4.5:1, large/bold text ≥ 3:1, UI/graphics ≥ 3:1).

---

## 1. Typography

Both **Fraunces** and **DM Sans** are in Shopify's free font library ([shopify.dev fonts](https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts)), so no upload/custom code.

**Path:** Online Store → Themes → Dawn → Customize → **Theme settings → Typography**

| Setting | Path → value |
|---|---|
| Headings font | Typography → Headings → Change → **Fraunces** (choose a weight ~600 Semibold as the family default) |
| Body font | Typography → Body → Change → **DM Sans** (Regular 400) |
| Heading scale | Typography → Heading scale → **110%** (Fraunces runs small; boosts hero presence) |
| Body scale | Typography → Body scale → **100%** (base 16px — never below for mobile legibility) |

**Resulting type ramp** (Dawn scales from these; values approximate the rendered sizes):

| Token | Desktop | Mobile (390px) | Weight | Line-height |
|---|---|---|---|---|
| H1 / hero | 44–52px | **32–36px** | Fraunces 600 | 1.1 |
| H2 section | 32px | **26px** | Fraunces 600 | 1.15 |
| H3 | 24px | **20px** | Fraunces 600 | 1.2 |
| Body | 16px | **16px** | DM Sans 400 | 1.6 |
| Small / legal | 14px | **14px** | DM Sans 400 | 1.5 |
| Button label | 16px | **16px** | DM Sans 500–600 | 1 |

> Mobile rule: body never < 16px (prevents iOS zoom-on-focus and keeps 390px readable). Hero H1 capped at 36px mobile so a 3-word headline doesn't wrap to 4 lines.

---

## 2. Palette → roles + WCAG AA audit

Brand palette: cream `#F6F1E7` · ink `#1C1B19` · patina `#4E7C82` · persimmon `#E4572E` · soft gold `#C9A227`.

**Contrast ratios (computed):**

| Foreground | Background | Ratio | Normal text | Large/bold | UI/graphic | Verdict |
|---|---|---|---|---|---|---|
| ink `#1C1B19` | cream `#F6F1E7` | **15.3:1** | ✅ | ✅ | ✅ | Primary text pair (AAA) |
| ink | soft gold `#C9A227` | **7.1:1** | ✅ | ✅ | ✅ | Gold fills use ink text |
| ink | persimmon `#E4572E` | **4.67:1** | ✅ | ✅ | ✅ | **CTA = ink on persimmon** |
| white `#FFFFFF` | persimmon | **3.68:1** | ❌ | ✅ | ✅ | **Do NOT use white text on persimmon buttons** |
| white | patina `#4E7C82` | **4.65:1** | ✅ | ✅ | ✅ | Patina fills use white text |
| ink | patina | 3.70:1 | ❌ | ✅ | ✅ | Ink on patina only for large/bold |
| patina text | cream | 4.13:1 | ❌ | ✅ | ✅ | Patina headings OK; not body/small |
| persimmon text | cream | 3.27:1 | ❌ | ✅ | — | Persimmon as small link text FAILS |
| soft gold text | cream | **2.15:1** | ❌ | ❌ | ❌ | **Gold is never text on cream** — fills/borders only |

**Fixes applied (so nothing ships failing):**
- **CTA buttons:** persimmon `#E4572E` background + **ink `#1C1B19` label** (4.67:1 ✅). Never white label.
- **Small text links / accents on cream:** use ink, or the darkened **persimmon-dark `#B23C1B`** (5.25:1 vs cream ✅) when you want a warm link color. `persimmon-dark` is an approved addition for text only.
- **Soft gold:** decorative only — icon fills, thin dividers, badge backgrounds (with ink text). Never as text on cream.
- **Patina:** section background with white text, or large headings on cream. Not body text on cream.

**Dawn color schemes — map like this**

**Path:** Theme settings → **Colors** (edit each scheme's Background / Text / Solid button / Solid button label / Outline button / Links)

| Scheme | Use for | Background | Text | Button bg | Button label |
|---|---|---|---|---|---|
| **Scheme 1** (default/body) | Most sections | cream `#F6F1E7` | ink `#1C1B19` | persimmon `#E4572E` | ink `#1C1B19` |
| **Scheme 2** (inverse) | Footer, testimonial band | ink `#1C1B19` | cream `#F6F1E7` | persimmon | ink |
| **Scheme 3** (accent) | Announcement bar, Q4 banner | patina `#4E7C82` | white `#FFFFFF` | soft gold `#C9A227` | ink |
| **Scheme 4** (highlight) | Sale badge / "save" pills | soft gold `#C9A227` | ink `#1C1B19` | ink | cream |
| **Scheme 5** (optional) | Reviews section | cream | ink | persimmon | ink |

> Set **Solid button label = ink** everywhere the button is persimmon or gold; set it to **white only where the button is patina**.

---

## 3. Layout & spacing

**Path:** Theme settings → **Layout**

| Setting | Value | Why |
|---|---|---|
| Page width | **1200px** | Dawn default; fine for a mostly-mobile store |
| Section vertical spacing | **rely on per-section padding** (below) | avoid double gaps |
| Grid horizontal spacing | 8–12px | tight product grid at 390px |
| Grid vertical spacing | 12px | — |

**Per-section padding (set on each section → Section padding):**
- Hero: top 0, bottom 24px (mobile) — get the CTA up.
- Standard content sections: top 40px, bottom 40px desktop / **28px mobile**.
- Between CTA and trust row: minimal (12–16px) so they read as one unit.

---

## 4. Buttons

**Path:** Theme settings → **Buttons**

| Setting | Value | Why |
|---|---|---|
| Border thickness | 0 (solid) | clean, non-catalog |
| Corner radius | **8px** | soft, modern; not pill (pill reads toy), not sharp |
| Shadow | Off (opacity 0) | flat, premium |
| Primary button style | Solid, **persimmon bg + ink label** | AA-compliant CTA |
| Secondary button | Outline, ink border + ink label on cream | for "Learn more" etc. |

**Sticky Add-to-Bag:** enable via Dawn's product section (or a single lightweight app block) — persimmon, full-width on mobile, min height **48px** (thumb target), label = CTA copy from B.

---

## 5. Cards (product & collection)

**Path:** Theme settings → **Product cards** / **Collection cards**

| Setting | Value | Why |
|---|---|---|
| Card style | **Standard** (not "Card"/boxed) | image-forward, less boxy |
| Image ratio | **Square (1:1)** primary; 4:5 on PDP gallery | consistent, no white letterboxing |
| Image padding | 0 | full-bleed product on cream |
| Text alignment | Left | scannable |
| Border thickness | 0 | no AliExpress box |
| Corner radius | 8px | matches buttons |
| Shadow | Off | flat/premium |
| Show vendor | Off | one-brand store |
| Show 2nd image on hover | On (desktop) | show scale/lifestyle |

---

## 6. Header

**Path:** Customize → **Header** section

| Setting | Value | Why |
|---|---|---|
| Layout | **Logo centered**, menu below (desktop) / hamburger (mobile) | wordmark-forward brand |
| Logo | Charmé wordmark (Fraunces), max height **40px mobile / 56px desktop** | legible, not bulky |
| Color scheme | Scheme 1 (cream/ink) | consistent |
| Sticky header | **On (scroll up)** | cart always reachable |
| Show cart icon | On, bubble count | — |
| Menu (mobile) | Shop · Our Story · Shipping & Returns · Contact | 4 items max |

---

## 7. Footer

**Path:** Customize → **Footer** section, Color scheme **2** (ink bg / cream text)

- **Block 1 — menu:** Our Story · Shipping & Returns · Contact · Search
- **Block 2 — legal menu:** Terms of Service · Privacy Policy · Refund Policy · Shipping Policy
- **Block 3 — email signup** (Shopify Forms / Klaviyo): "Get early access to new designs." (Consent language per F.)
- **Payment icons:** On (Shopify Payments set).
- **Tagline:** brand line from B.
- Contrast check: cream on ink = 15.3:1 ✅ (footer text fully AA/AAA).

---

## 8. Favicon & misc
- Favicon: gold `#C9A227` "C" mark on cream, 32×32 (Theme settings → Favicon).
- Focus states: ensure visible focus ring (Dawn ships accessible focus; do not disable). Ring color ink or patina — both ≥3:1 on cream ✅.
- Reduce motion: keep Dawn's reveal-on-scroll subtle; disable parallax/heavy animation for CLS + accessibility.

## Sources
- Dawn/theme fonts & typography: [shopify.dev — Fonts](https://shopify.dev/docs/storefronts/themes/architecture/settings/fonts), [Shopify Help — theme settings](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/theme-editor/theme-settings), [Shopify/dawn releases](https://github.com/Shopify/dawn/releases). Accessed 2026-07-17.
- Contrast ratios computed from the locked hex values using the WCAG 2.1 relative-luminance formula.

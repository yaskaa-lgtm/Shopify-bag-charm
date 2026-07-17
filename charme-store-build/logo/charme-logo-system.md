# Charmé — Logo System

All marks are **custom-drawn geometric letterforms** (no typeface → no font license, no `font-family` dependency; satisfies constraints 1 & 3). Every path is hand-authored, straight-polygon SVG with counters formed by winding (no `fill-rule` tricks needed), so it renders identically in browsers, Shopify, and one-color print RIPs. Each SVG below was rasterized and eyeballed before shipping.

---

## Step 1 — Strategy (5 lines)
1. **Communicate:** confident, premium, "I have taste" — a heavy uppercase wordmark that reads as a brand, not a product listing.
2. **Avoid:** anything soft, rounded-cute, plush, or toy-like; must never look like a kids' sticker at 40px.
3. **The bet:** the **é accent becomes a lobster-clasp** — an angled bar with an eyelet loop. It reads as an acute accent *and* as the physical charm clasp. That one shape is the identity.
4. **Why it wins:** the clasp-accent detaches from the word and works alone as monogram/favicon/sticker (job 5) while anchoring the wordmark (jobs 1–3).
5. Not "just nice type": the ownable idea is *the diacritic is the product.*

## Step 2 — Type decision
**Custom-drawn, not a licensed face.** (a) zero licensing risk; (b) strokes cut heavy enough to survive the 40px profile-circle and 30mm one-color kraft (jobs 1–2), where retail fonts get spindly; (c) the **É** needs a bespoke clasp accent no font ships. A bold geometric sans with squared C/E/H, a triangular A, and straight-legged M/R. `MISSING DATA — none: no third-party font used.`

---

## A. Primary wordmark (horizontal)
Ink letters + soft-gold clasp accent on cream. **Optical corrections:** squared C/R keep counters open at small size (curved counters fill in on kraft); A apex is solid (heavy-display convention, avoids a fragile point); accent overhangs the É only, not the whole word.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 150" role="img" aria-label="Charmé">
  <g fill="#1C1B19">
    <path d="M6 30 L96 30 L96 56 L32 56 L32 104 L96 104 L96 130 L6 130 Z"/>
    <path d="M118 30 L144 30 L144 130 L118 130 Z M176 30 L202 30 L202 130 L176 130 Z M144 67 L176 67 L176 93 L144 93 Z"/>
    <path d="M256 30 L268 30 L312 130 L286 130 L277 104 L247 104 L238 130 L212 130 Z"/>
    <path d="M322 30 L384 30 L398 44 L398 66 L384 80 L348 80 L398 130 L370 130 L348 88 L348 130 L322 130 Z M348 46 L348 64 L374 64 L374 46 Z"/>
    <path d="M420 30 L446 30 L446 130 L420 130 Z M498 30 L524 30 L524 130 L498 130 Z M446 30 L464 30 L474 100 L456 100 Z M480 30 L498 30 L492 100 L474 100 Z"/>
    <path d="M538 30 L564 30 L564 130 L538 130 Z M564 30 L616 30 L616 56 L564 56 Z M564 66 L606 66 L606 90 L564 90 Z M564 104 L616 104 L616 130 L564 130 Z"/>
  </g>
  <g fill="#C9A227">
    <path d="M580 25 L597 8 L603 14 L586 31 Z"/>
    <path d="M594 11 A6 6 0 1 1 606 11 A6 6 0 1 1 594 11 Z M597.5 11 A2.5 2.5 0 1 0 602.5 11 A2.5 2.5 0 1 0 597.5 11 Z"/>
  </g>
</svg>
```

## B. Stacked / compact wordmark
`CHAR` over `MÉ`, for square crops and narrow mobile headers.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 310" role="img" aria-label="Charmé">
  <g fill="#1C1B19">
    <path d="M6 15 L96 15 L96 41 L32 41 L32 104 L96 104 L96 130 L6 130 Z"/>
    <path d="M118 15 L144 15 L144 130 L118 130 Z M176 15 L202 15 L202 130 L176 130 Z M144 60 L176 60 L176 85 L144 85 Z"/>
    <path d="M256 15 L268 15 L312 130 L286 130 L277 103 L247 103 L238 130 L212 130 Z"/>
    <path d="M322 15 L384 15 L398 30 L398 53 L384 68 L348 68 L398 130 L370 130 L348 76 L348 130 L322 130 Z M348 32 L348 52 L374 52 L374 32 Z"/>
    <g transform="translate(100,165)">
      <path d="M0 15 L26 15 L26 130 L0 130 Z M78 15 L104 15 L104 130 L78 130 Z M26 15 L44 15 L54 100 L36 100 Z M60 15 L78 15 L72 100 L54 100 Z"/>
      <path d="M124 15 L150 15 L150 130 L124 130 Z M150 15 L202 15 L202 41 L150 41 Z M150 51 L192 51 L192 75 L150 75 Z M150 104 L202 104 L202 130 L150 130 Z"/>
      <g fill="#C9A227">
        <path d="M166 9 L183 -8 L189 -2 L172 15 Z"/>
        <path d="M180 -4 A6 6 0 1 1 192 -4 A6 6 0 1 1 180 -4 Z M183.5 -4 A2.5 2.5 0 1 0 188.5 -4 A2.5 2.5 0 1 0 183.5 -4 Z"/>
      </g>
    </g>
  </g>
</svg>
```

## C. Monogram (the É + clasp) — favicon / sticker / profile circle
The whole identity in one glyph. Reads at 32px: the E is pure blocks, the clasp is one bold shape.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 135" role="img" aria-label="Charmé monogram">
  <g fill="#1C1B19">
    <path d="M0 30 L26 30 L26 130 L0 130 Z M26 30 L78 30 L78 56 L26 56 Z M26 66 L68 66 L68 90 L26 90 Z M26 104 L78 104 L78 130 L26 130 Z"/>
    <path d="M42 24 L59 7 L65 13 L48 30 Z"/>
    <path d="M56 11 A6 6 0 1 1 68 11 A6 6 0 1 1 56 11 Z M59.5 11 A2.5 2.5 0 1 0 64.5 11 A2.5 2.5 0 1 0 59.5 11 Z"/>
  </g>
</svg>
```

**Circle-cropped avatar (TikTok/IG), ink clasp for small-size contrast:**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Charmé avatar">
  <circle cx="60" cy="60" r="60" fill="#F6F1E7"/>
  <g transform="translate(38,28) scale(0.52)" fill="#1C1B19">
    <path d="M0 30 L26 30 L26 130 L0 130 Z M26 30 L78 30 L78 56 L26 56 Z M26 66 L68 66 L68 90 L26 90 Z M26 104 L78 104 L78 130 L26 130 Z"/>
    <path d="M42 24 L59 7 L65 13 L48 30 Z"/>
    <path d="M56 11 A6 6 0 1 1 68 11 A6 6 0 1 1 56 11 Z M59.5 11 A2.5 2.5 0 1 0 64.5 11 A2.5 2.5 0 1 0 59.5 11 Z"/>
  </g>
</svg>
```

## D. One-color & reversed

**One-color proof — all ink, no gold, no gradient (the gate):**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 150" role="img" aria-label="Charmé one-color">
  <g fill="#1C1B19">
    <path d="M6 30 L96 30 L96 56 L32 56 L32 104 L96 104 L96 130 L6 130 Z"/>
    <path d="M118 30 L144 30 L144 130 L118 130 Z M176 30 L202 30 L202 130 L176 130 Z M144 67 L176 67 L176 93 L144 93 Z"/>
    <path d="M256 30 L268 30 L312 130 L286 130 L277 104 L247 104 L238 130 L212 130 Z"/>
    <path d="M322 30 L384 30 L398 44 L398 66 L384 80 L348 80 L398 130 L370 130 L348 88 L348 130 L322 130 Z M348 46 L348 64 L374 64 L374 46 Z"/>
    <path d="M420 30 L446 30 L446 130 L420 130 Z M498 30 L524 30 L524 130 L498 130 Z M446 30 L464 30 L474 100 L456 100 Z M480 30 L498 30 L492 100 L474 100 Z"/>
    <path d="M538 30 L564 30 L564 130 L538 130 Z M564 30 L616 30 L616 56 L564 56 Z M564 66 L606 66 L606 90 L564 90 Z M564 104 L616 104 L616 130 L564 130 Z"/>
    <path d="M580 25 L597 8 L603 14 L586 31 Z"/>
    <path d="M594 11 A6 6 0 1 1 606 11 A6 6 0 1 1 594 11 Z M597.5 11 A2.5 2.5 0 1 0 602.5 11 A2.5 2.5 0 1 0 597.5 11 Z"/>
  </g>
</svg>
```

**Reversed — cream on ink (accent stays gold):**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 190" role="img" aria-label="Charmé reversed">
  <rect width="680" height="190" fill="#1C1B19"/>
  <g transform="translate(20,20)" fill="#F6F1E7">
    <path d="M6 30 L96 30 L96 56 L32 56 L32 104 L96 104 L96 130 L6 130 Z"/>
    <path d="M118 30 L144 30 L144 130 L118 130 Z M176 30 L202 30 L202 130 L176 130 Z M144 67 L176 67 L176 93 L144 93 Z"/>
    <path d="M256 30 L268 30 L312 130 L286 130 L277 104 L247 104 L238 130 L212 130 Z"/>
    <path d="M322 30 L384 30 L398 44 L398 66 L384 80 L348 80 L398 130 L370 130 L348 88 L348 130 L322 130 Z M348 46 L348 64 L374 64 L374 46 Z"/>
    <path d="M420 30 L446 30 L446 130 L420 130 Z M498 30 L524 30 L524 130 L498 130 Z M446 30 L464 30 L474 100 L456 100 Z M480 30 L498 30 L492 100 L474 100 Z"/>
    <path d="M538 30 L564 30 L564 130 L538 130 Z M564 30 L616 30 L616 56 L564 56 Z M564 66 L606 66 L606 90 L564 90 Z M564 104 L616 104 L616 130 L564 130 Z"/>
  </g>
  <g transform="translate(20,20)" fill="#C9A227">
    <path d="M580 25 L597 8 L603 14 L586 31 Z"/>
    <path d="M594 11 A6 6 0 1 1 606 11 A6 6 0 1 1 594 11 Z M597.5 11 A2.5 2.5 0 1 0 602.5 11 A2.5 2.5 0 1 0 597.5 11 Z"/>
  </g>
</svg>
```
For **cream-on-persimmon** / **cream-on-patina** blocks: reuse the reverse structure, swap the `rect` fill to `#E4572E` or `#4E7C82` and keep letters `#F6F1E7`. For **ink-on-gold**: rect `#C9A227`, letters `#1C1B19`.

## E. Color usage rules (WCAG 2.1, computed)
| Wordmark | Ground | Ratio | Verdict |
|---|---|---|---|
| Ink | Cream | 15.3:1 | ✅ primary |
| Cream | Ink | 15.3:1 | ✅ reverse |
| Ink | Soft gold | 7.1:1 | ✅ |
| Cream | Patina | 4.65:1 | ✅ |
| Cream | Persimmon | 3.27:1 | ✅ large only (never small text) |
| Ink | Persimmon | 4.67:1 | ✅ |
| Ink | Patina | 3.70:1 | ⚠️ large only |
| Gold clasp | Cream | 2.15:1 | ❌ **banned** — use **ink clasp** ≤48px |
| Gold | White | 2.42:1 | ❌ banned |

**Approved:** ink/cream/ink-gold/cream-patina; cream-or-ink on persimmon (large). **Banned:** gold-on-cream, any tint-on-cream, ink-on-patina small. **Rule:** the gold clasp is a large-format flourish; at ≤48px (favicon/avatar/sticker) the clasp is **ink**.

## F. Clear space + minimum sizes
- **Clear space** = the height of the **É** on all four sides (use the monogram bounding box as the unit). Nothing enters that margin.
- **Minimums:** wordmark **120px** wide screen / **24mm** print; monogram **32px** screen / **12mm** sticker; favicon **32px** (monogram, ink clasp). Below these → drop to the monogram.

## G. Don'ts (illustration only — uses live font on purpose)
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 120" font-family="sans-serif">
  <g fill="#1C1B19">
    <text x="10" y="42" font-size="22" font-weight="900" transform="scale(1.6,1)">CHARMÉ</text>
    <text x="10" y="70" font-size="12">1. Don't stretch / condense</text>
    <text x="320" y="42" font-size="22" font-weight="900" fill="#ff69b4">CHARMÉ</text>
    <text x="320" y="70" font-size="12">2. Don't recolor to off-brand hues</text>
    <text x="630" y="42" font-size="22" font-weight="900" style="filter:drop-shadow(3px 3px 0 #999)">CHARMÉ</text>
    <text x="630" y="70" font-size="12">3. Don't add shadow/effects</text>
    <text x="10" y="105" font-size="22" font-weight="900">CHARME</text>
    <text x="130" y="105" font-size="12">4. Don't drop the accent</text>
    <text x="320" y="105" font-size="22" font-weight="900" fill="#F6F1E7" stroke="#1C1B19">CHARMÉ</text>
    <text x="440" y="105" font-size="12">5. Don't outline</text>
    <text x="630" y="105" font-size="12">6. Don't set on a busy photo (use a solid chip)</text>
  </g>
</svg>
```

## H. Marquee tile (footer strip)
Repeat unit = wordmark + a gold diamond separator with equal padding, so it tiles with no awkward gap.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1520 150" role="img" aria-label="Charmé marquee">
  <defs>
    <g id="cw" fill="#1C1B19">
      <path d="M6 30 L96 30 L96 56 L32 56 L32 104 L96 104 L96 130 L6 130 Z"/>
      <path d="M118 30 L144 30 L144 130 L118 130 Z M176 30 L202 30 L202 130 L176 130 Z M144 67 L176 67 L176 93 L144 93 Z"/>
      <path d="M256 30 L268 30 L312 130 L286 130 L277 104 L247 104 L238 130 L212 130 Z"/>
      <path d="M322 30 L384 30 L398 44 L398 66 L384 80 L348 80 L398 130 L370 130 L348 88 L348 130 L322 130 Z M348 46 L348 64 L374 64 L374 46 Z"/>
      <path d="M420 30 L446 30 L446 130 L420 130 Z M498 30 L524 30 L524 130 L498 130 Z M446 30 L464 30 L474 100 L456 100 Z M480 30 L498 30 L492 100 L474 100 Z"/>
      <path d="M538 30 L564 30 L564 130 L538 130 Z M564 30 L616 30 L616 56 L564 56 Z M564 66 L606 66 L606 90 L564 90 Z M564 104 L616 104 L616 130 L564 130 Z"/>
    </g>
  </defs>
  <use href="#cw" x="40"/>
  <use href="#cw" x="800"/>
  <g fill="#C9A227">
    <path d="M714 80 l14 -14 l14 14 l-14 14 Z"/>
    <path d="M1474 80 l14 -14 l14 14 l-14 14 Z"/>
  </g>
</svg>
```
> Repeat unit = **760px** (wordmark 656 + padding + diamond). Tile with `background-repeat:repeat-x` at 760px so the diamond always lands mid-gap.

---

## Step 4 — Stress test (5 jobs)
| Job | Result | Fix applied |
|---|---|---|
| **1. 40px profile circle** | Full wordmark too wide → **use monogram** | Circle-crop variant (C); clasp forced ink |
| **2. 30mm one-color kraft** | Passes — squared blocks + single clasp; open counters don't fill | One-color proof; clasp ink |
| **3. Shopify header 120px** | Reads on cream, 15.3:1 | Min width 120px |
| **4. Footer marquee** | Tiles cleanly at 760px with gold diamond | Separator at exact half-gap |
| **5. Favicon 32px** | Monogram carries; verified legible at 48px render | Ink clasp for contrast |

**Key fix from testing:** the gold clasp fails contrast on cream at small size (2.15:1), so every ≤48px asset uses an **ink** clasp; gold is reserved for the large wordmark. Also: original curved C/R used arcs + `evenodd`, which some print/raster engines mishandle — **rebuilt as squared forms with winding counters** so the mark renders identically everywhere.

## Step 5 — Rejects
1. **C-inside-a-clasp-ring:** read as a generic circle logo; indistinct blob at 40px.
2. **Lowercase script "charmé":** elegant but illegible at thumbnail and fragile on kraft — fails jobs 1–2.
3. **Heart-dot on the é:** instantly clip-art / kids-brand and cute-adjacent — violates the banned-visual rule.

## I. File manifest
| Filename | Format | Usage | Dimensions / notes |
|---|---|---|---|
| `charme-wordmark-ink.svg` | SVG | Primary logo (ink + gold clasp) on light | vector |
| `charme-wordmark-reverse.svg` | SVG | Logo on dark | vector |
| `charme-wordmark-oneink.svg` | SVG | One-color (all ink) — print/kraft | vector |
| `charme-wordmark-persimmon.svg` | SVG | Cream wordmark on persimmon block | swap fills per E |
| `charme-wordmark-patina.svg` | SVG | Cream wordmark on patina block | swap fills per E |
| `charme-stack-ink.svg` | SVG | Stacked/compact (square, narrow header) | vector |
| `charme-monogram-ink.svg` | SVG | Monogram É — sticker, badge | clasp ink ≤48px |
| `charme-avatar-1080.png` | PNG | TikTok/IG avatar | 1080×1080 from circle variant |
| `favicon-32.png` / `favicon.ico` | PNG/ICO | Browser tab | 32px + 16/32/48; monogram, ink clasp |
| `sticker-30mm.svg` | SVG | Packaging sticker | 30mm one-color |
| `marquee-strip.svg` | SVG | Footer marquee | 760px repeat, tiles horizontally |

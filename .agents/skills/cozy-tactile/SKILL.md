---
name: cozy-tactile
description: "Design, polish, and audit UI components following the Cozy Forest Terminal design system. Governs neomorphic tactile depth, muted contrast, Sora/Manrope typography, and evergreen copywriting. Prevents generic AI-slop layouts."
---

# Cozy Tactile Skill: The Cozy Forest Terminal Design Engine

As an AI agent with this skill loaded, your mission is to protect, cultivate, and expand the **Cozy Forest Terminal** design system. You must ensure that every button, container, layout, and paragraph of text feels tactile, authentic, warm, and distinctly handcrafted—avoiding standard SaaS clichés or clinical AI-generated aesthetics.

---

## 1. The Design System (Midnight Cozy Forest)

Every code change must adhere to the core color, spacing, and elevation tokens defined in the system.

### Color Tokens (committed dark theme)
- **Neutral Background**: `var(--color-midnight-pine)` (`#191A19`) - The main deep, quiet background color.
- **Card Background**: `var(--color-forest-sage)` (`#1E5128`) - The warm, deep pine base for interactive elements.
- **Accent Glow**: `var(--color-lime-bud)` (`#D8E9A8`) - The electric, glowing leaf-green accent. Reserved for focus, active links, and glowing text readouts.
- **Tactile Shadows**:
  - Dark: `var(--color-shadow-dark)` (`#1a4522`)
  - Light: `var(--color-shadow-light)` (`#235d2e`)

### Spacing & Grid Scale
- Spacing must feel deliberate and rhythmic: `mt-2`, `mt-4`, `mt-6`, `mt-8`, `gap-8`. Avoid random gaps (no `mt-[13px]`).
- Spacing adjusts fluidly for screen sizes (larger card gaps in desktop, dense layouts in mobile).

---

## 2. Typography Rules (Sora & Manrope Stack)

Visual hierarchy is maintained through high contrast in font families, weights, and letter casing.

- **Display & Headings (Titles, Cards, Labels)**:
  - **Font Family**: Sora (`font-family: var(--font-sora)`)
  - **Aesthetic**: Bold, rounded, and extremely friendly. Use `font-extrabold` or `font-black` for headers.
- **Body & Prose (Paragraf, Description)**:
  - **Font Family**: Manrope (`font-family: var(--font-manrope)`)
  - **Aesthetic**: Crisp, highly readable, and professional. 
  - **Sizing Sweet Spot**: `text-[13px]` or `text-sm` with `font-medium` (500) and `text-white/70` opacity ensures perfect text contrast under WCAG AA rules while feeling warm and cozy.
- **Telemetry & Metadata (System, Uptime, Stats)**:
  - **Font Family**: Monospace (`font-mono`)
  - **Aesthetic**: Quiet, precise, lowercase. Use `text-[11px]` with `text-white/40` and let dynamic values glow in `text-lime-bud font-semibold`.

---

## 3. Elevation & The Tactile Block Rule

We reject soft, modern blur shadows. The interface is built on physical, chunky, blocky depth.

- **Double Neumorphic Shadow**: 
  All cards must utilize the strict neomorphic offset:
  `box-shadow: 7px -7px 2px var(--color-shadow-dark), -7px 7px 2px var(--color-shadow-light)` (represented by `shadow-tactile-double` class).
- **Extreme Rounding**:
  All major cards must have extreme corners (`rounded-[28px]` or `rounded-[50px]`) to maintain the "empuk" (tactile soft block) physical feel.
- **Click Interaction (Active State)**:
  Interactive targets drop shadow offsets on active click to mimic a tactile mechanical button going down.

---

## 4. Copywriting (Evergreen & Human Voice)

- **Strictly No Corporate Slop**: Avoid buzzwords like "delivering innovative state-of-the-art experiences." Write in a warm, relaxed, Indonesian-native developer tone.
- **Flexible & Evergreen**: Never lock personal descriptions to temporary stacks or platforms (avoid "Saya seorang Flutter developer" in main bios). Focus on the core curiosity: "Senang mengulik baris kode, mengeksplorasi berbagai teknologi baru."

---

## 5. Absolute Bans (Anti-AI Slop Checklist)

Match-and-refuse any of these patterns:
- **[NO] Gradient Text**: Text must remain clean and solid. Bold headings are styled with crisp solid color (`text-lime-bud` or `text-white`).
- **[NO] Side-stripe Borders**: Never use colored left/right thick borders on cards or lists. Use full card boundaries, background highlights, or nothing.
- **[NO] Glassmorphism Defaults**: No random card blurs. Cards rely on solid neomorphic blocks, not glassy transparencies.
- **[NO] Purple Gradients**: Avoid the default "AI purple-on-black" color palette. Keep strictly to the deep pine forest color strategy.
- **[NO] Hardcoded Raw Colors**: Colors must always use design tokens. Never introduce raw hex codes in Astro styles.

---

## 6. How to Shape & Craft Features

Follow this systematic 2-step loop before making any new component:

1. **Step 1: SHAPE**
   Present a concept layout, visual margins, copy text, and accessibility score. Explain how it fits the Cozy Forest Terminal theme. Get the user's explicit approval first.
2. **Step 2: CRAFT**
   Implement with zero layout thrashing, verify a11y contrast (AAA for glowing text, AA for body), check image aspect ratios to prevent CLS, and run a production build test to confirm zero console warnings.

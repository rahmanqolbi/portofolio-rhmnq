---
name: frontend-design
description: "Anthropic's official flagship guidance for creating distinctive, production-grade frontend interfaces. Guides choices in typography, committed color systems, motion, and tactile depth while strictly banning generic 'AI slop' aesthetics."
---

# Flagship Frontend Design Skill (Official Blueprint)

This skill guides the creation of distinctive, production-grade web interfaces that completely avoid the generic, boring, and sterile "AI slop" aesthetics. When writing frontend code, adhere to these deep visual design principles.

---

## 1. Typography (The Character of UI)
- **Avoid Defaults**: Never use generic default sans-serifs (like Arial, Helvetica, system-ui, or Inter) unless explicitly matching an existing corporate brand.
- **Select Distinctive Fonts**: Seek high-quality Google Fonts (e.g., Sora, Outfit, Manrope, Space Grotesk, Cabinet Grotesk) to give the project a distinct editorial character.
- **Pairing Harmony**: Match a strong, personality-filled Display font for headings with a crisp, highly readable Sans/Mono font for body copy and UI elements.

---

## 2. Committed Colors & Palette Control
- **Avoid Timid Palettes**: Do not use evenly distributed, pastel-heavy, or standard "purple gradient on dark gray" SaaS landing page themes.
- **The 60-30-10 Rule**:
  - **60% Dominant (Neutral background/ambient)**: Pure solid base, dark pine, midnight slate, or clean paper-cream.
  - **30% Secondary (Cards, layouts, borders)**: Soft contrast layer supporting the visual structure.
  - **10% Accent Glow (Buttons, focus, key readouts)**: A high-saturation, punchy accent color that draws immediate focus.
- **Accessible Opacity over Gray**: To style secondary/tertiary text, use transparent opacity levels of the main text color (e.g., `text-white/70`, `text-white/45`) rather than hardcoded gray HEX codes. This keeps the text warm and tinted by the background color.

---

## 3. Depth & Atmospheric Backgrounds
- **Ditch Flat Colors**: Avoid solid `#1a1a1a` or pure white background boxes.
- **Layering & Geometry**: Build rich atmosphere by layering subtle radial CSS gradients, geometric dot patterns, thin grid dividers, and neumorphic tactile depth.
- **Shadow Weight**: Use blocky, deliberate, offset box-shadows rather than generic, diffuse, blur-heavy drop shadows.

---

## 4. Motion & High-Impact Page Transitions
- **CSS-Only First**: Prioritize clean, performant CSS-only transitions and animations for state updates.
- **Staggered Entry**: Animate components on page load using staggered timing delays (`animation-delay`) to create an elegant, orchestrated arrival.
- **Deceleration Easing**: Avoid linear or bouncing transitions. Always use natural, organic deceleration functions (e.g., `ease-out`, `cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 5. Absolute Anti-AI Slop Checklist
Refuse and remove these tropes during every layout creation:
- **[NO] Purple-to-Pink Neon Gradients**: The overused default "cyberpunk SaaS landing page" palette.
- **[NO] Left-Accent Colored Borders**: Plentiful thick accent stripes on the left of cards. Use clean spacing instead.
- **[NO] Glassmorphism Abuse**: Clunky cards with intense backdrop-filter blurs. Opt for clean, solid, tactile panels.
- **[NO] Empty Visual Decoration**: Random decorative dots, geometric lines, or code braces that serve no functional purpose.

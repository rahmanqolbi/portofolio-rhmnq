---
name: create-design-system
description: "Anthropic's official blueprint for building cohesive design systems and UI kits. Directs AI to define clear theme tokens, spacing scales, typography scales, buttons, forms, and layout grids."
---

# Design System Creator Skill (Official Blueprint)

This skill guides the formal creation and documentation of cohesive design systems, style guides, and UI kits. Use this skill when laying the foundation for a new visual identity or refactoring a design structure.

---

## 1. Defining Core Tokens
- **Theme Variables**: Declare all key color variables, border-radius constants, font families, and shadows using standard CSS custom properties or Tailwind v4 `@theme` directives.
- **Hierarchical Naming**: Use logical, functional token names (e.g., `--color-brand-primary`, `--color-neutral-bg`, `--color-shadow-light`) rather than raw values.

---

## 2. Typography Grid & Sizing Scales
- **Typography Scale**: Define a strict typography hierarchy with specific sizes, line heights, and weights for:
  - Display Titles (extra bold, generous margins)
  - Card Headings (bold, compact)
  - Subtitles (uppercase, wide tracking)
  - Body copy (highly readable, medium spacing)
- **Spacing Rhythm**: Establish a consistent spacing multiplier (e.g., 4px, 8px, 12px, 16px, 24px, 32px) and strictly adhere to it for paddings, margins, and gaps.

---

## 3. UI Component Kits
A production-grade design system must define standard visual styles for core elements:
- **Button Families**: Primary (bold focus background), Secondary (hollow or muted contrast), Tertiary (text link).
- **Form Inputs**: Rest state, hover border, focus outline shadow, disabled gray, and error borders.
- **Card Containers**: Standard radius, tactile shadow layers, and interior spacing rules.

---

## 4. Documentation & Maintenance
- **DRY Compliance**: Ensure there is absolutely zero duplication of style declarations across CSS files.
- **DRY HTML/Templates**: Keep components reusable and fully modular. Use layout props or Astro components to inject content dynamically rather than copy-pasting visual blocks.

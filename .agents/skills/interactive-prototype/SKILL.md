---
name: interactive-prototype
description: "Anthropic's official blueprint for building interactive web prototypes. Instructs AI agents to implement rich client-side interactivity, state preservation, tab controls, dynamic charts, and smooth animations."
---

# Interactive Prototype Skill (Official Blueprint)

This skill guides the construction of fully functional, interactive web prototypes and mock apps. When building prototypes, follow these core development standards to ensure they feel alive, responsive, and robust.

---

## 1. Interaction Fidelity
- **Interactive Targets**: Every button, tab, card, and icon must have immediate interactive states (`hover`, `focus`, `active`, and `disabled`).
- **Feedback Loops**: When a user clicks or toggles an action, provide immediate visual feedback (e.g., loading spinners, success checks, color highlights, or smooth content slides).
- **Tabbed Layouts**: Use client-side JavaScript or reactive state to switch active views cleanly without page reloads.

---

## 2. Dynamic Mock Data
- **Realism**: Avoid using simple placeholders like `"Lorem Ipsum"` or empty lists. Populate lists, graphs, and settings with realistic developer, SRE, or creative profile data.
- **Dynamic Calculation**: If the prototype contains counters, stats, or metrics (such as uptime, memory, or score counters), write client-side logic to tick, animate, or update them in real-time.

---

## 3. Transition & State Smoothness
- **Animate State Changes**: When items are added, deleted, or toggled, use CSS transitions to slide, fade, or expand them smoothly instead of letting them pop abruptly.
- **Aspect-Ratios**: Ensure all container elements have locked aspect ratios or smart layouts to prevent layout shift (CLS) during state transitions.

---

## 4. Code Architecture for Prototypes
- **Self-Contained Logic**: Keep scripts cleanly bounded. If using vanilla Astro/HTML, pack page scripts within `<script>` tags so they execute instantly on the client side.
- **State Preservation**: Use local storage (`localStorage`) or global session parameters to persist lightweight states (like theme toggles or user settings) across page reloads.

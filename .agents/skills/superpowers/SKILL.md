---
name: superpowers
description: "Enables the elite Superpowers Agentic Skills framework. Enforces a structured, multi-phase engineering workflow: Socratic Brainstorming, TDD (Test-Driven Development), Step-by-Step Planning, and meticulous Code Review."
---

# Superpowers: The Elite Agentic Skills Framework

As an AI agent with the **Superpowers** skill loaded, you operate under a highly disciplined, multi-phase engineering workflow. You do not rush to write code immediately; instead, you approach every request with the rigor of a senior systems engineer.

---

## 1. Core Workflow Pipeline

You must strictly execute tasks through the following structured phases:

```mermaid
graph TD
    A[1. Socratic Brainstorming] --> B[2. Step-by-Step Planning]
    B --> C[3. Test-Driven Development]
    C --> D[4. Implementation & Crafting]
    D --> E[5. Verification & Testing]
    E --> F[6. Meticulous Code Review]
```

### Phase 1: Socratic Brainstorming (Refleksi & Analisis)
*   **Aesthetic & Technical Design**: Question the architecture. What are the edge cases? Where will performance bottleneck?
*   **No Placeholders**: Prepare real content, formulas, and asset plans instead of using generic placeholder values or UI layouts.
*   **Discussion with User**: Engage in deep reasoning, clarifying assumptions before starting.

### Phase 2: Step-by-Step Planning (Rencana Aksi)
*   Create or update an `implementation_plan.md` in the artifacts directory.
*   Present a structured task list (`task.md`) tracking progress using `[ ]`, `[/]`, and `[x]`.
*   Obtain explicit user approval before executing any complex code edits.

### Phase 3: Test-Driven Development (TDD)
*   Always write unit, integration, or E2E tests **before** implementing the corresponding logic.
*   Run the test suite to observe the test fail.
*   Implement the minimum necessary code to make the test pass.
*   Refactor and polish the code while ensuring the test suite remains green.

### Phase 4: Subagent & Parallel Execution
*   When faced with complex, multi-layered tasks, delegate components to specialized browser or code subagents.
*   Isolate tasks to avoid conflicts and maintain focus.

### Phase 5: Verification & Testing
*   Verify code behavior across different environments.
*   Perform visual audits in the browser or check terminal outputs.
*   Ensure zero linting, formatting, or compiler errors.

### Phase 6: Meticulous Code Review
*   Perform a rigorous self-audit of all modified files.
*   Evaluate code readability, security (IPC isolation, secure protocols), and state management patterns.
*   Provide a final walkthrough (`walkthrough.md`) summarizing what was done.

---

## 2. Priority Hierarchy of Instructions

To resolve any conflicting instructions, follow this absolute hierarchy:

1.  **User's Explicit Commands** (e.g., `CLAUDE.md`, direct requests in the chat) — *Highest Priority*
2.  **Superpowers Skill Workflow** (TDD, Planning, Brainstorming)
3.  **Local Workspace Rules & Custom Skills** (e.g., `cozy-tactile` or `impeccable`)
4.  **Default System Prompts** — *Lowest Priority*

---

## 3. Absolute Rules of Engagement

*   **1% Rule**: If there is even a 1% chance a Superpowers stage is beneficial (e.g., creating a plan or running tests), you **must** apply it. No cutting corners.
*   **Zero Regression**: Always run the test command (`pnpm run test:run` or equivalent) and linting (`pnpm run lint`) before declaring a task finished.
*   **No Silent Failures**: If a test, build, or format step fails, investigate immediately. Do not hide errors from the user.

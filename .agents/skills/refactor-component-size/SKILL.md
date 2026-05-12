---
name: refactor-component-size
description: >-
  Enforce file size limits and one-component-per-file rules for React/TypeScript
  projects. Use this skill whenever you are editing, creating, or refactoring
  .tsx or .ts files — especially when files exceed 150 lines (.tsx) or 250
  lines (.ts), when splitting large components, when extracting sub-components,
  or when the user mentions "refactor", "split", "extract", "too long", "too
  big", "component size", "file size", or "clean up". Also trigger when
  reviewing code that violates the one-component-per-file rule.
user-invocable: true
---

# Refactor Component Size

## Purpose

Keep components focused, readable, and maintainable by enforcing size limits
and one-component-per-file. Large files hide bugs, slow review, and encourage
tangled responsibilities. This skill gives you a consistent process for
splitting them.

---

## Rules

### Size limits

| File type | Target    | Hard limit |
| --------- | --------- | ---------- |
| `.tsx`    | 150 lines | 200 lines  |
| `.ts`     | 250 lines | 300 lines  |

- **Target** = the line count to aim for. When a file exceeds the target,
  suggest splitting but don't block work.
- **Hard limit** = never exceed this. When a file exceeds the hard limit,
  you must split it before continuing.

### One component per file (`.tsx` only)

Every `.tsx` file exports exactly **one React component** as the default or
named export. Auxiliary items (types, constants, small helper functions) that
support that component may stay in the same file as long as the total stays
within limits.

**Exception — composite components:** A parent + child pair may share a file
when the child is meaningless without the parent AND the total stays within
the hard limit. Example: `List` + `ListItem` where `ListItem` has no
independent use. Document the exception with a comment:

```tsx
// composite: ListItem only used inside List — stays co-located
```

---

## Exclusions (do not check)

These paths are exempt from size and component-count rules:

- `src/components/ui/**` — shadcn/ui generated wrappers
- `src/generated/**` — auto-generated types and requests
- `*.test.tsx`, `*.spec.tsx`, `*.test.ts`, `*.spec.ts` — test files

---

## Extraction strategy

### Where to put extracted components

| Extracted count | Location                                             |
| --------------- | ---------------------------------------------------- |
| 1–2 components  | Same folder as the parent, in their own files        |
| 3+ components   | `components/` subfolder inside the feature directory |

**Never create `components/` for only 1–2 extractions.** The subfolder is a
grouping mechanism — pointless when there's barely anything to group. Only
reach for `components/` once you have 3 or more distinct sub-components to
organize. Exceptions: the parent folder already has 5+ files (clutter
mitigation), or all extractions are trivial helper wrappers (<15 lines each).

### Naming

Name files after **what the component IS**, using `kebab-case.tsx`. The name
should tell a new developer the component's purpose without opening the file.

```
✅  dados-cliente-card.tsx         (this IS a card showing customer data)
✅  endereco-section.tsx           (this IS a section showing an address)
✅  suspensao-actions.tsx          (this IS action buttons for suspensions)
✅  servico-contratado-item.tsx    (this IS a service contract line item)
```

Generic names that only describe the **shape** are forbidden — they hide intent:

```
❌  card.tsx          → what card?   ✅ dados-cliente-card.tsx
❌  section.tsx       → what section? ✅ endereco-section.tsx
❌  item.tsx          → what item?   ✅ servico-contratado-item.tsx
❌  info.tsx          → what info?   ✅ informacoes-contato.tsx
❌  list.tsx          → what list?   ✅ negociacoes-list.tsx
❌  header.tsx        → what header? ✅ agenda-header.tsx
❌  section1.tsx      → meaningless
❌  index.tsx         → only for barrel exports
```

**Domain prefix rule:** Extracted components from a feature should carry a
domain hint in their name — either a prefix (`AgendaHeader`, not just `Header`)
or a qualifier that ties them to their context (`DadosClienteCard`, not just
`Card`). This prevents collision with generic UI components and makes imports
self-explanatory.

### What to extract

When a file exceeds limits, extract in this priority order:

1. **Sub-components** — distinct UI sections (cards, sections, panels)
2. **Complex render logic** — large JSX blocks → dedicated components with
   descriptive props
3. **Custom hooks** — `useEffect` + state clusters → separate `.ts` hook file
4. **Utility functions** — pure logic → separate `.ts` util file
5. **Type definitions** — shared types → separate `.ts` types file

---

## Barrel exports (`index.ts`)

### When to create

Create `index.ts` only when a directory exports **2 or more items** used
outside the directory.

### When NOT to create

Do NOT create `index.ts` when:

- Only **1 item** is imported outside the folder
- The components are **sub-components** (internal implementation details)
- Hooks/utils are used **only internally** within the directory

---

## Common pitfalls (avoid these)

### ❌ Moving 1–2 extractions into `components/` subfolder

```tsx
// WRONG — only 2 sub-components, no subfolder needed
dashboard/
├── dashboard.tsx
└── components/
    ├── summary-cards.tsx
    └── chart.tsx

// CORRECT — co-locate when 1–2
dashboard/
├── dashboard.tsx
├── dashboard-summary-cards.tsx
└── dashboard-chart.tsx
```

### ❌ Keeping extracted components with generic names

```tsx
// WRONG — "Card" doesn't say WHAT it is
export function Card({ cliente }: Props) { ... }

// CORRECT — name describes purpose
export function DadosClienteCard({ cliente }: Props) { ... }
```

### ❌ Creating barrel exports for single-item or internal-only folders

```tsx
// WRONG — index.ts re-exporting 1 component (or only internal ones)
export { ResumoMensal } from "./resumo-mensal";

// CORRECT — no barrel; consumers import directly
import { ResumoMensal } from "#/features/relatorios/resumo-mensal";
```

### ❌ Forgetting to extract types before extraction is complete

Types should move to a `.ts` file **during** extraction, not as an afterthought.
If types are still inline when you're done splitting components, the refactoring
is incomplete.

---

## Checklist (run after every refactoring)

Before marking refactoring as complete, verify every item:

- [ ] Extracted component works independently (no implicit dependency on
      parent's internal state — data comes through props)
- [ ] Shared types moved to a separate `.ts` file (not redefined in each
      consumer)
- [ ] All imports updated in every consumer file
- [ ] Original file is within the target line count
- [ ] `index.ts` created **only if** 2+ items are exported and used outside
- [ ] No unnecessary `index.ts` (1-item exports, internal-only hooks/utils,
      sub-components stay as direct imports)
- [ ] Each extracted file follows the one-component-per-file rule
- [ ] Naming follows kebab-case and describes what the component IS

---

## Verification

After refactoring, count lines in every affected file and confirm:

```
✅  file.tsx  → 148 lines (within target)
✅  hook.ts   → 85 lines  (within target)
❌  file.tsx  → 215 lines (EXCEEDS hard limit — must split further)
```

If any `.tsx` file still exceeds 200 lines or any `.ts` file exceeds 300
lines, the refactoring is incomplete. Continue splitting.

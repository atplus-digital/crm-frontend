---
name: refactor-component-size
description: >-
  Enforce file size limits, one-component-per-file rules, and detect repeated
  JSX patterns for React/TypeScript projects. Use this skill whenever you are
  editing, creating, or refactoring .tsx or .ts files — especially when files
  exceed 150 lines (.tsx) or 250 lines (.ts), when splitting large components,
  when extracting sub-components, when you spot duplicated JSX blocks, when
  replacing raw HTML inputs/labels with shadcn/ui primitives, or when the user
  mentions "refactor", "split", "extract", "duplicate", "repeated code", "DRY",
  "too long", "too big", "component size", "file size", "clean up", "form
  field", or "shadcn form". Also trigger when reviewing code that violates the
  one-component-per-file rule or uses bare label+input in forms instead of the
  shadcn Field+Input pattern.
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
2. **Repeated JSX blocks** — 3+ near-identical JSX structures within a component → extract into a reusable sub-component with variant props. Apply this even when under the line limit — repetition is a separate code smell from file size. See the [Repeated JSX patterns](#repeated-jsx-patterns) section below.
3. **Complex render logic** — large JSX blocks → dedicated components with
   descriptive props
4. **Custom hooks** — `useEffect` + state clusters → separate `.ts` hook file
5. **Utility functions** — pure logic → separate `.ts` util file
6. **Type definitions** — shared types → separate `.ts` types file

### Repeated JSX patterns

When a component repeats the same JSX structure with only label/id/name/placeholder
changing, extract the repeated structure into a reusable sub-component. This is
different from size-based extraction — duplication is a code smell regardless
of file length.

**Recognition signals (triggers for extraction):**

- 3+ blocks of `<div className="space-y-1.5"><label>...</label><input ...>{errors.x && <p>...</p>}</div>`
- 3+ blocks of identical JSX layout with only text/name/id varying
- Any JSX pattern repeated near-verbatim within a single component

**How to extract:**

1. Identify the **invariant** structure (layout classes, conditionals, error display)
2. Identify the **variant** parts (label text, field name, placeholder, `required` marker, `maxLength`)
3. Create a sub-component that receives variants as **typed props**
4. Replace all occurrences with the sub-component, passing variant values

**Example — form field repetition:**

```
Before (10 repeated blocks):
  <div className="space-y-1.5">
    <label htmlFor="f_cep" className="text-sm font-medium">
      CEP <span className="text-destructive">*</span>
    </label>
    <input id="f_cep" className="flex h-9 w-full rounded-md border..." {...register("f_cep")} />
    {errors.f_cep && <p className="text-xs text-destructive">{errors.f_cep.message}</p>}
  </div>
  <!-- ... 9 more identical blocks, only label/id/name differ ... -->

After (extracted component):
  // form-field.tsx
  export function FormField({ id, label, required, placeholder, register, error }: Props) {
    return (
      <div className="space-y-1.5">
        <label htmlFor={id} className="text-sm font-medium">
          {label} {required && <span className="text-destructive">*</span>}
        </label>
        <input id={id} className="flex h-9 w-full rounded-md border..." placeholder={placeholder} {...register(id)} />
        {error?.message && <p className="text-xs text-destructive">{error.message}</p>}
      </div>
    );
  }
```

**Important:** This intermediate extraction is a first step. Always also check
whether the extracted component should use existing UI primitives — see next
section.

---

### UI primitives first

Before writing any form field, label, input, button, or layout wrapper, check
`src/components/ui/` for existing primitives. The shadcn/ui primitives handle
accessibility (`aria-*`, `htmlFor`, `role`), error states, focus rings, dark
mode, and consistent styling automatically — raw HTML elements replicate none
of this.

**Priority for form elements:**

1. `<Form>` + `<Field>` + `<FieldLabel>` + `<FieldControl>` + `<Input>` (or `<Textarea>`) + `<FieldError>`
   — from `#/components/ui/form` and `#/components/ui/input`
2. `<Label>` + `<Input>` — from `#/components/ui/label` and `#/components/ui/input` (for non-`<Form>`
   contexts)
3. Raw `<label>` + `<input>` — only when UI primitives genuinely don't fit (extremely rare)

**Priority for other elements:**

| Instead of raw HTML    | Use shadcn primitive                                                           |
| ---------------------- | ------------------------------------------------------------------------------ |
| `<button>`             | `<Button>` from `#/components/ui/button`                                       |
| `<select>`             | `<Select>` from `#/components/ui/select`                                       |
| Modal/popup containers | `<Dialog>` / `<Sheet>` from `#/components/ui/dialog` / `#/components/ui/sheet` |
| Tab containers         | `<Tabs>` from `#/components/ui/tabs`                                           |

---

### Form field pattern (react-hook-form + shadcn)

When refactoring forms, migrate from bare `<label>` + `<input>` + manual error
blocks to the canonical react-hook-form + shadcn pattern. This is the
project-wide standard (see `src/AGENTS.md` > Forms and `src/components/ui/AGENTS.md`).

**Before (legacy — manual duplication):**

```tsx
<div className="space-y-1.5">
  <label htmlFor="f_cep" className="text-sm font-medium">
    CEP <span className="text-destructive">*</span>
  </label>
  <input
    id="f_cep"
    placeholder="Somente números"
    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
    {...register("f_cep")}
  />
  {errors.f_cep && (
    <p className="text-xs text-destructive">{errors.f_cep.message}</p>
  )}
</div>
```

**After (canonical shadcn pattern):**

```tsx
<Field name="f_cep">
  <FieldLabel>
    CEP <span className="text-destructive">*</span>
  </FieldLabel>
  <FieldControl>
    <Input placeholder="Somente números" {...form.register("f_cep")} />
  </FieldControl>
  <FieldError />
</Field>
```

**Imports required:**

```tsx
import {
  Form,
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from "#/components/ui/form";
import { Input } from "#/components/ui/input";
```

**When to combine both refactorings:**
When 3+ form fields share the same structure, extract a reusable sub-component
that uses the shadcn primitives internally. The sub-component takes `name`,
`label`, `required`, and `placeholder` as props — avoiding both JSX duplication
and raw HTML. See [Repeated JSX patterns](#repeated-jsx-patterns) for the
general approach, then apply the shadcn primitives inside the sub-component.

> **Note:** `<Field>` requires a `<Form>` (RHF Provider) ancestor. If the
> component receives `register` / `errors` as props (not via `useForm` context),
> you must either lift `useForm` into the component or wrap the tree in
> `<FormProvider>`. The canonical pattern is to keep `useForm` at the form
> root and use `<Form>` + `<Field>` throughout.

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

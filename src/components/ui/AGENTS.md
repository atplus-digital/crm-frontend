<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-17 -->

# AGENTS.md — components/ui

<!-- AGENTS-GENERATED:START overview -->

## Overview

shadcn/ui primitives and styled base components — radix-nova style, fully typed, used by all feature components and pages.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                | Purpose                               |
| ------------------- | ------------------------------------- |
| `accordion.tsx`     | Accordion primitive (radix)           |
| `alert-dialog.tsx`  | Destructive action confirmations      |
| `avatar.tsx`        | User avatar with fallback             |
| `button.tsx`        | Base button with variants             |
| `card.tsx`          | Card container primitives             |
| `checkbox.tsx`      | Checkbox primitive                    |
| `combobox.tsx`      | Searchable dropdown                   |
| `command.tsx`       | Command palette (cmd+k)               |
| `dialog.tsx`        | Modal dialog primitive                |
| `dropdown-menu.tsx` | Context menu / actions menu           |
| `field.tsx`         | Form field wrapper with label + error |
| `input.tsx`         | Text input primitive                  |
| `label.tsx`         | Form label primitive                  |
| `popover.tsx`       | Popover primitive                     |
| `radio-group.tsx`   | Radio group primitive                 |
| `select.tsx`        | Select primitive                      |
| `separator.tsx`     | Visual divider                        |
| `sheet.tsx`         | Side drawer (mobile)                  |
| `sidebar.tsx`       | App sidebar with cookie persistence   |
| `skeleton.tsx`      | Loading placeholder                   |
| `switch.tsx`        | Toggle switch primitive               |
| `table.tsx`         | Table primitives                      |
| `tabs.tsx`          | Tab container primitive               |
| `textarea.tsx`      | Textarea primitive                    |
| `toast.tsx`         | Toast notification (sonner)           |
| `tooltip.tsx`       | Tooltip primitive                     |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- All components are **primitives** — no business logic, only UI behavior.
- Import from `#/components/ui` when using in features; avoid deep imports.
- Use `field.tsx` wrapper for all form inputs (provides consistent label + error layout).
- `sidebar.tsx` uses cookie persistence (`sidebar:state`) — do not duplicate this logic.
- `toast.tsx` wraps **sonner** — use `toast.success()`, `toast.error()`, etc.
- All components use **CSS variables** from `src/styles.css` — no hardcoded colors.
- **Tabs, double quotes** (Biome format) — do not reformat manually.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                   | Reference file                                |
| ------------------------- | --------------------------------------------- |
| Form field composition    | `src/components/ui/field.tsx`                 |
| Button variants           | `src/components/ui/button.tsx`                |
| Sidebar with cookie state | `src/components/ui/sidebar.tsx`               |
| Dialog + form pattern     | `src/features/auth/components/login-form.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START customization -->

## Customization

### Adding New shadcn Components

```bash
pnpm dlx shadcn@latest add <component-name> --style radix-nova
```

**Post-add checklist:**

1. Run `pnpm biome:fix` (auto-formats new file)
2. Verify no new dependencies added (shadcn copies code, no npm installs)
3. Add to this AGENTS.md filemap if significant

### Theming

All colors use CSS variables from `src/styles.css`:

```css
/* Light mode */
--background: oklch(1 0 0);
--foreground: oklch(0.145 0 0);
--primary: oklch(0.205 0 0);
/* ... */

/* Dark mode */
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}
```

**Never** hardcode colors in components — use `bg-background`, `text-foreground`, etc.

<!-- AGENTS-GENERATED:END customization -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                                 | ✅ Use                                           |
| -------------------------------------------------------- | ------------------------------------------------ |
| `<div className="flex gap-2"><Button>...</Button></div>` | `<Button variant="...">` (use built-in variants) |
| Manual error state in inputs                             | `<Field error="message"><Input /></Field>`       |
| `toast({ title: "..." })`                                | `toast.success("...")` / `toast.error("...")`    |
| Hardcoded colors (`bg-gray-500`)                         | Semantic classes (`bg-muted`)                    |
| Custom modal logic                                       | `<Dialog>` + `<DialogContent>` from ui/          |

<!-- AGENTS-GENERATED:END anti-patterns -->

## When instructions conflict

The nearest `AGENTS.md` wins. For shadcn-specific patterns, refer to `components.json` (style: radix-nova).

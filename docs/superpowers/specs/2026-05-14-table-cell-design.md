# TableCell Component Design

**Date:** 2026-05-14
**Status:** Approved

## Summary

Reusable `TableCell` primitive that unifies alignment, truncation, and overflow tooltip for both DataTable columns and detail-table presets.

## Motivation

- Alignment is handled via ad-hoc Tailwind classes (`text-right`, `text-left`) across column definitions and `detail-table-presets.tsx`
- Truncation pattern (`block truncate max-w-*`) is repeated in every feature column file
- Overflow tooltip (`OverflowTooltipCell`) requires manual conditional wrapping in `data-table.tsx`
- `detail-table-presets.tsx` has its own `DetailAlign` type limited to `"left" | "right"`, missing `"center"`

## Component API

**File:** `src/components/table/cells/table-cell.tsx`

```tsx
interface TableCellProps {
  position?: "left" | "center" | "right"; // default: "left"
  truncate?: boolean; // default: false
  maxWidth?: string; // Tailwind class, e.g. "max-w-80"
  children: ReactNode;
  className?: string; // merged via cn()
}
```

### Behavior

| `truncate`        | Output                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `false` (default) | `<div className="text-{position}">{children}</div>`                                                                      |
| `true`            | `<OverflowTooltipCell><div className="text-{position} block truncate {maxWidth}">{children}</div></OverflowTooltipCell>` |

### Usage Examples

```tsx
// Alignment only
<TableCell position="right">
  {formatCurrency(valor)}
</TableCell>

// Truncation + overflow tooltip
<TableCell position="left" truncate maxWidth="max-w-80">
  {cliente.nome}
</TableCell>

// Defaults (left, no truncation)
<TableCell>{texto}</TableCell>
```

## Integration

1. **New file:** `src/components/table/cells/table-cell.tsx`
2. **Refactor:** `detail-table-presets.tsx` uses `<TableCell>` internally instead of manual alignment classes
3. **Export:** Add to barrel export in `src/components/table/`
4. **Adoption:** Gradual — existing column defs work unchanged, new ones use `<TableCell>`

## Out of Scope (YAGNI)

- `nowrap` prop — use `className` directly
- Tooltip without truncation — can become a separate `tooltip` prop later
- Icon/badge support — `children` composition handles this
- `DetailAlign` type removal — keep for backwards compatibility during gradual migration

## Files Affected

| File                                            | Change                                  |
| ----------------------------------------------- | --------------------------------------- |
| `src/components/table/cells/table-cell.tsx`     | New component                           |
| `src/components/table/detail-table-presets.tsx` | Refactor internals to use `<TableCell>` |
| `src/components/table/index.ts`                 | Export `TableCell`                      |
| `src/components/table/AGENTS.md`                | Document new component                  |

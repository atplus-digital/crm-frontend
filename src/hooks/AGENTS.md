<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — hooks

<!-- AGENTS-GENERATED:START overview -->

## Overview

Shared cross-feature hooks for responsive behavior and standardized pagination state management.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START state-patterns -->

## State Patterns

### Current Hook Inventory

| Hook          | Type        | Returns   | Dependencies  | Used By                           |
| ------------- | ----------- | --------- | ------------- | --------------------------------- |
| `useIsMobile` | Media query | `boolean` | `usehooks-ts` | Layout/components with responsive |

### State Management Integration

- Global auth/permissions state lives in feature modules (`src/features/auth`, `src/features/permissions`), not in this folder.

### When to Add Hooks Here

Add hooks here when they are generic and reused across modules. Keep domain-specific hooks in their owning feature folder.

<!-- AGENTS-GENERATED:END state-patterns -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File            | Purpose                                                          |
| --------------- | ---------------------------------------------------------------- |
| `use-mobile.ts` | `useIsMobile()` helper with a fixed mobile breakpoint (`<768px`) |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START naming-conventions -->

## Naming Conventions

- Hooks must start with `use` and be exported as named exports.
- File name should match the main hook (`use-*.ts` → `use*` function).
- Boolean hooks should prefer `useIs*`/`useCan*` naming when applicable.

<!-- AGENTS-GENERATED:END naming-conventions -->

<!-- AGENTS-GENERATED:START usage-patterns -->

## Usage Patterns

### Media query hook

```typescript
import { useIsMobile } from "#/hooks/use-mobile";

const isMobile = useIsMobile();
```

<!-- AGENTS-GENERATED:END usage-patterns -->

<!-- AGENTS-GENERATED:START best-practices -->

## Best Practices

- Keep hooks focused and framework-level; no business rules from specific domains.
- Return strongly typed values and avoid `any`.
- Avoid side effects unless the hook contract requires them.
- Prefer composition of existing hooks/utilities instead of duplicating state logic.

<!-- AGENTS-GENERATED:END best-practices -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern         | Reference file            |
| --------------- | ------------------------- |
| Responsive hook | `src/hooks/use-mobile.ts` |

<!-- AGENTS-GENERATED:END golden-samples -->

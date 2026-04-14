<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-14 -->

# AGENTS.md — hooks

<!-- AGENTS-GENERATED:START overview -->
## Overview
Reusable frontend hooks shared across routes and components. Currently implements responsive design patterns with media query hooks.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START state-patterns -->
## State Patterns

### Current Hook Inventory

| Hook | Type | Returns | Dependencies | Used By |
|------|------|---------|--------------|---------|
| `useIsMobile` | Media query | `boolean` | `usehooks-ts` | Layout components, responsive UI |

### State Management Integration

Hooks in this folder integrate with:

- **TanStack Store**: Permission and auth state (see `src/modules/permissions/hooks.ts`, `src/modules/auth/`)
- **TanStack Query**: Server state and data fetching (see `src/integrations/tanstack/query/`)
- **usehooks-ts**: Common patterns like media queries, debounce, localStorage

### When to Add Hooks Here

Add a hook to this folder when:
- Logic is reused across 2+ components or modules
- Hook is generic (not tied to specific business logic)
- Hook wraps external libraries (e.g., `usehooks-ts`)
- Hook provides cross-cutting concerns (responsive, theme, etc.)

Keep hooks in modules when:
- Tightly coupled to module state (auth, permissions)
- Business logic specific to one domain
- Used only within one module's components
<!-- AGENTS-GENERATED:END state-patterns -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `use-mobile.ts` | `useIsMobile()` — media query hook for responsive UI (mobile breakpoint at 768px) |
| `use-pagination.ts` | `usePagination()` — standardized pagination state management for TanStack Table with server-side support |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START naming-conventions -->
## Naming Conventions
| Pattern | Example | When to Use |
| ------- | ------- | ----------- |
| `use` prefix | `useCan`, `useTheme` | All custom hooks must start with `use` |
| PascalCase after prefix | `useHasSnippet`, `useIsAdmin` | Descriptive name following React conventions |
| Action-oriented | `useCan`, `useCanEdit` | Hooks that check permissions or capabilities |
| State-oriented | `useRoleNames` | Hooks that expose state or data |
| Boolean returns | `useIsAdmin`, `useCan` | Hooks returning boolean should use `is` or `can` prefix |

**Rules:**
- Always export hooks with `export function` or `export const` for tree-shaking
- Never use default exports for hooks
- Hook file names should match the primary hook: `useCan.ts` for `useCan` hook
<!-- AGENTS-GENERATED:END naming-conventions -->

<!-- AGENTS-GENERATED:START usage-patterns -->
## Usage Patterns

### Store-based hooks (TanStack Store)
Use `useStore` for reactive state that changes frequently:

```typescript
import { useStore } from "@tanstack/react-store";
import { permissionsStore } from "./store";

export function useCan(action: string): boolean {
  const effectiveActions = useStore(
    permissionsStore,
    (state) => state.effectiveActions,
  );
  return effectiveActions.includes(action);
}
```

**When to use:**
- Reading from TanStack Store instances
- State needs fine-grained reactivity
- Avoiding unnecessary re-renders

### Context-based hooks
Use `useContext` with proper error handling:

```typescript
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
```

**When to use:**
- Provider-consumer patterns
- Theme, auth, or configuration context
- Always validate context exists

### Permission hooks pattern
Follow the established permission hook structure:

```typescript
// Check action permission with :own variant support
export function useCan(action: string): boolean;

// Check snippet permission with wildcard support
export function useCanEdit(action?: string): boolean;

// Expose user role information
export function useRoleNames(): string[];

// Check admin/configuration access
export function useIsAdmin(): boolean;
```

### Media query hooks
Use `usehooks-ts` for responsive breakpoints:

```typescript
import { useMediaQuery } from "usehooks-ts";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(): boolean {
	return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
}
```

**When to use:**
- Responsive UI that adapts to screen size
- Mobile-first design patterns
- Conditional rendering based on viewport

### Pagination hooks
Use `use-pagination.ts` for standardized pagination state with TanStack Table:

```typescript
import { usePagination } from "#/hooks/use-pagination";

export function MyTable({ onPageChange, onPageSizeChange }) {
  const { pagination, onPaginationChange } = usePagination({
    initialPage: 1,
    initialPageSize: 20,
    onPageChange,
    onPageSizeChange,
  });

  const table = useDataTable({
    columns,
    data,
    pagination,
    onPaginationChange: onPaginationChange,
  });

  return <DataTable table={table} />;
}
```

**When to use:**
- Any table with pagination (client or server-side)
- Standardize pagination behavior across components
- Avoid duplicating pagination state logic
<!-- AGENTS-GENERATED:END usage-patterns -->

<!-- AGENTS-GENERATED:START best-practices -->
## Best Practices

### Do
- ✅ Keep hooks focused on single responsibility
- ✅ Return typed values (TypeScript interfaces/types)
- ✅ Use selectors with `useStore` to avoid unnecessary re-renders
- ✅ Add JSDoc comments explaining hook behavior and edge cases
- ✅ Handle `:own` suffix variants in permission hooks
- ✅ Support wildcard matching for snippet permissions
- ✅ Throw descriptive errors when context is missing
- ✅ Use `usehooks-ts` library for common patterns (media queries, debounce, localStorage)
- ✅ Clean up effects and subscriptions on unmount

### Don't
- ❌ Mix UI logic with business logic in hooks
- ❌ Call hooks conditionally or in loops
- ❌ Create hooks for one-time use — keep logic in components
- ❌ Return `any` or `unknown` without proper type guards
- ❌ Access stores directly — always use `useStore` for reactivity
- ❌ Forget to handle denial prefixes (`!`) in permission checks
- ❌ Use `useEffect` for derived state — compute during render instead
- ❌ Create custom hooks when `usehooks-ts` already provides the pattern

### Performance
- Use selector functions with `useStore` to subscribe to minimal state
- Memoize expensive computations inside hooks with `useMemo`
- Avoid creating new objects/arrays in hook return values
- React 19 compiler handles automatic memoization — don't over-optimize prematurely

### Testing
- Mock store state when testing store-based hooks
- Test edge cases: empty state, denied permissions, wildcard matches
- Verify context error messages are descriptive
- Test responsive hooks at different viewport sizes using matchMedia mocks

### React 19 Patterns
- Leverage automatic memoization from React 19 compiler
- Use `useActionState` for form submission state instead of manual `useState`
- Use `useOptimistic` for optimistic UI updates when appropriate
- Focus on pure component logic — let compiler handle optimizations
<!-- AGENTS-GENERATED:END best-practices -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern              | Reference file                                      |
| -------------------- | --------------------------------------------------- |
| Media query hook     | `src/hooks/use-mobile.ts`                           |
| Auth bootstrap usage | `src/routes/__root.tsx`                             |
| Shared query context | `src/integrations/tanstack/query/root-provider.tsx` |
| Permission hooks     | `src/modules/permissions/hooks.ts`                  |
| Theme hook           | `src/components/theme-provider.tsx`                 |
<!-- AGENTS-GENERATED:END golden-samples -->
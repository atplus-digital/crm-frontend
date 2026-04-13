<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

# AGENTS.md — hooks

<!-- AGENTS-GENERATED:START overview -->
## Overview
Reusable frontend hooks shared across routes and components.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File        | Purpose                             |
| ----------- | ----------------------------------- |
| `AGENTS.md` | Scoped instructions for this folder |
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
export function useHasSnippet(snippet: string): boolean;

// Convenience wrapper for edit permissions
export function useCanEdit(action?: string): boolean;

// Expose user role information
export function useRoleNames(): string[];

// Check admin/configuration access
export function useIsAdmin(): boolean;
```
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

### Don't
- ❌ Mix UI logic with business logic in hooks
- ❌ Call hooks conditionally or in loops
- ❌ Create hooks for one-time use — keep logic in components
- ❌ Return `any` or `unknown` without proper type guards
- ❌ Access stores directly — always use `useStore` for reactivity
- ❌ Forget to handle denial prefixes (`!`) in permission checks

### Performance
- Use selector functions with `useStore` to subscribe to minimal state
- Memoize expensive computations inside hooks with `useMemo`
- Avoid creating new objects/arrays in hook return values

### Testing
- Mock store state when testing store-based hooks
- Test edge cases: empty state, denied permissions, wildcard matches
- Verify context error messages are descriptive
<!-- AGENTS-GENERATED:END best-practices -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern              | Reference file                                      |
| -------------------- | --------------------------------------------------- |
| Auth bootstrap usage | `src/routes/__root.tsx`                             |
| Shared query context | `src/integrations/tanstack/query/root-provider.tsx` |
| Permission hooks     | `src/modules/permissions/hooks.ts`                  |
| Theme hook           | `src/components/theme-provider.tsx`                 |
<!-- AGENTS-GENERATED:END golden-samples -->
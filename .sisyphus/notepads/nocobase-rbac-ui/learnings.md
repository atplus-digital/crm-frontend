# nocobase-rbac-ui learnings

## Permissions module

### `mergeActions` logic
- Deduplicates action strings across role arrays
- For any action with `:own` suffix (e.g. `update:own`), also includes the base action (`update`)
- The base action is inserted right after the suffixed action to preserve intent order

### `mergeSnippets` logic
- Union all snippets first (including denials like `!X` and `!X.*`)
- Collect exact denials: strings starting with `!` that are not wildcards (e.g. `!pm` → deny `pm`)
- Collect wildcard denials: strings starting with `!` and ending with `.*` (e.g. `!ui.*` → deny `ui` and `ui.*`)
- Build result by including only granted snippets that are not denied
- Denial wins over grant: if both `app` and `!app` exist, result is `[]`
- `!pm` denies exact `pm` but NOT wildcard `pm.*` (different strings)

### `createStore<PermissionState>()` pattern
- Follows `authStore` pattern exactly from `src/modules/auth/store.ts`
- Store holds merged state; separate exported functions call `store.setState()`
- Actions: `setPermissionsFromRoles`, `resetPermissions`

### `useStore(store, selector)` pattern (hooks.ts)
- Import `useStore` from `@tanstack/react-store` — NOT from `@tanstack/react`
- Use like: `useStore(permissionsStore, (state) => state.effectiveActions)`
- `useCan(action)`: checks exact match OR `:own` suffix base (if `"update:own"` in list, `useCan("update")` → true)
- `useHasSnippet(snippet)`: exact match OR wildcard prefix (e.g. `"ui"` matches `"ui.menu"`)
- Denial strings (`!X`, `!X.*`) never appear in `effectiveSnippets` — mergeSnippets already removes them

### Route guards pattern (guards.ts)
- Guards are plain functions, NOT React hooks — read from `permissionsStore.state` directly
- Do NOT use `useStore` inside guards (not a React component)
- Always guard with `if (typeof window === "undefined") return` for SSR safety
- Import `redirect` from `@tanstack/react-router` and `throw redirect({ to: "/forbidden" })`
- `requireSnippet`: handles exact match + wildcard (`X` matches `X.anything`)
- `requireAction`: handles exact match + `:own` suffix base resolution

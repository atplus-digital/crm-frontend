<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-10 -->

# AGENTS.md — auth

<!-- AGENTS-GENERATED:START overview -->
## Overview
Authentication module — NocoBase client, auth state, service methods, and route guards.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `index.ts` | Barrel export for auth APIs consumed outside this folder |
| `client.ts` | Configures the shared NocoBase SDK client with env-driven storage |
| `guard.ts` | Route guards and bootstrap token validation for TanStack Router |
| `service.ts` | Auth operations for sign-in, sign-out, token check, and password reset |
| `store.ts` | Central auth store plus persistence helpers and state actions |
| `types.ts` | Shared auth request/response/state types |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Import auth APIs from `#/modules/auth`; external code should not reach into sub-files directly.
- `service.ts` is the only place that talks to the NocoBase client directly.
- Guards must derive auth state from `authStore`, then redirect through TanStack Router helpers.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Barrel import usage | `src/components/auth/login-form.tsx` |
| Route guard wiring | `src/routes/index.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-10 -->

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

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Add a hook here only when it is reused by more than one component or route.
- Prefer returning typed domain data and TanStack primitives instead of wrapping UI concerns.
- Delete abandoned hooks instead of keeping placeholders without call sites.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern              | Reference file                                      |
| -------------------- | --------------------------------------------------- |
| Auth bootstrap usage | `src/routes/__root.tsx`                             |
| Shared query context | `src/integrations/tanstack/query/root-provider.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

# AGENTS.md — layout

<!-- AGENTS-GENERATED:START overview -->
## Overview
Layout components for authenticated pages: shared app shell/header and responsive top navigation behavior.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `dashboard-layout.tsx` | Authenticated page shell: wraps content with full-height container, shared header, and main content region |
| `main-header.tsx` | Sticky top header with branding, navigation, user menu, theme toggle, and logout action |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- `dashboard-layout.tsx` owns page shell structure only; header behavior must live in `main-header.tsx`.
- Keep auth-specific user actions (profile/logout) inside header-level controls, not in route pages.
- Header navigation should stay responsive with desktop links and mobile menu in the same component.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Authenticated shell composition | `src/components/layout/dashboard-layout.tsx` |
| Responsive header with user menu | `src/components/layout/main-header.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->

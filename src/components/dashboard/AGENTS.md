<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-11 -->

# AGENTS.md — dashboard components

<!-- AGENTS-GENERATED:START overview -->
## Overview
Dashboard UI components — user profile view, navigation, and main dashboard layout.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `user-dashboard.tsx` | Main dashboard entry point with loading states and layout |
| `profile-details.tsx` | Presentational component for user information display |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Components should be modular and focused on single responsibilities
- Profile details are separated into their own component for reusability
- Loading states should be handled gracefully with appropriate UI feedback
- Use shadcn/ui components for consistent styling
- Display user information with appropriate fallbacks for missing data
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Separation of presentational logic | `src/components/dashboard/profile-details.tsx` |
| Loading state handling | `src/components/dashboard/user-dashboard.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START checklist -->
## PR/commit checklist
- [ ] New dashboard features have appropriate fallbacks for missing user data
- [ ] Components use consistent styling with shadcn/ui
- [ ] Loading states are handled properly
- [ ] User privacy considerations are addressed
<!-- AGENTS-GENERATED:END checklist -->
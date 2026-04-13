<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

# AGENTS.md — layout

<!-- AGENTS-GENERATED:START overview -->
## Overview
Layout components for authenticated pages: sidebar navigation, simplified header, and page shell composition using shadcn/ui Sidebar primitives.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `dashboard-layout.tsx` | Authenticated page shell: SidebarProvider + AppSidebar + SidebarInset with header and main content |
| `app-sidebar.tsx` | Collapsible sidebar with navigation menu, branding, user menu (with theme toggle), and rail |
| `app-header.tsx` | Simplified top header with sidebar trigger and separator |
| `main-header.tsx` | Legacy sticky top header (pre-sidebar) — kept for reference but no longer used in layout |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- `dashboard-layout.tsx` owns page shell structure: `SidebarProvider` → `AppSidebar` + `SidebarInset`; it must NOT contain navigation or user menu logic.
- Navigation items live in `app-sidebar.tsx` as a top-level `navigation` array; add new routes there.
- User menu (profile, theme toggle, logout) lives in `app-sidebar.tsx` as the `UserMenu` inner component inside `SidebarFooter`.
- Theme toggle is integrated into the user dropdown menu, NOT as a standalone button.
- `app-header.tsx` is minimal: only `SidebarTrigger` + `SidebarSeparator`. Page-specific breadcrumbs or titles go in route components, not the header.
- `main-header.tsx` is legacy and should not be imported in new code.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Sidebar with nav + user menu + theme toggle | `src/components/layout/app-sidebar.tsx` |
| Sidebar layout shell composition | `src/components/layout/dashboard-layout.tsx` |
| Minimal header with sidebar trigger | `src/components/layout/app-header.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->
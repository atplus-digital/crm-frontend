<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-11 -->

# AGENTS.md — document components

<!-- AGENTS-GENERATED:START overview -->
## Overview
Document-level UI components — Root document shell, error pages, and global layout components.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `root-document.tsx` | Global document shell with html/head/body structure and error boundary |
| `not-found-page.tsx` | 404 page with user-friendly messaging and navigation options |
| `error-boundary.tsx` | Application-level error boundary with graceful error handling |
| `theme-script.tsx` | Client-side theme management script |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- RootDocument wraps the entire application with error boundaries
- Error boundaries provide user-friendly error messages and recovery options
- Global styling and metadata are managed at the document level
- Error boundaries distinguish between development and production behavior
- Always provide clear user options to recover from errors (reload, return)
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Error boundary implementation | `src/components/error-boundary.tsx` |
| Root document structure | `src/components/document/root-document.tsx` |
| Not found page structure | `src/components/document/not-found-page.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START checklist -->
## PR/commit checklist
- [ ] Error boundaries provide appropriate fallback UI in production
- [ ] Development error information is only shown in development mode
- [ ] Document components are wrapped with necessary providers
- [ ] Global styling and metadata are properly applied
<!-- AGENTS-GENERATED:END checklist -->
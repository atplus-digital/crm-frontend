# Decisions — Auth NocoBase

## [2026-04-10] Architecture Decisions
- SDK: @nocobase/sdk (official, recommended by project docs)
- Token storage: localStorage + in-memory state
- Route protection: beforeLoad hooks (TanStack Router pattern)
- Auth state: TanStack Store (not React Context)
- No server functions for auth — client-side JWT flow
- No token refresh — redirect to login on expiry
- UI: pt-BR, shadcn/ui components, no form libraries
- Tests: Tests after with Vitest

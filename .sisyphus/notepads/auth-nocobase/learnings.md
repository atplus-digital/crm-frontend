# Learnings — Auth NocoBase

## [2026-04-10] Session Start
- NocoBase endpoints: POST /auth:signIn, POST /auth:signOut, GET /auth:check
- Auth body format: {"email": "...", "password": "..."} → { "data": { "token": "...", "user": {...} } }
- CRM_NOCOBASE_URL is server-only — need VITE_CRM_NOCOBASE_URL for client
- UsersBase type has password/resetToken — must exclude from AuthUser
- TanStack Store pattern: import { store } from "@tanstack/react-store"
- localStorage key convention: ${VITE_LOCAL_STORAGE_BASE_KEY}:auth-token
- @nocobase/sdk NOT installed yet — Task 1 installs it
- import alias: prefer #/ over @/ per AGENTS.md

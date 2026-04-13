<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-10 -->

# AGENTS.md — src

<!-- AGENTS-GENERATED:START overview -->
## Overview
Frontend application (TypeScript/React/Vue)
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File                                    | Purpose                                                                     |
| --------------------------------------- | --------------------------------------------------------------------------- |
| `src/router.tsx`                        | React Router v7 config (`createBrowserRouter`) com lazy routes              |
| `src/app.tsx`                           | Root layout: ThemeProvider + QueryClientProvider + ErrorBoundary + Outlet   |
| `src/index.tsx`                         | SPA entry point (React mount)                                               |
| `src/routes/index.tsx`                  | Rota protegida `/` — `loader` com `requireAuth()`                           |
| `src/routes/login.tsx`                  | Rota pública `/login` — `loader` com `requireGuest()`                       |
| `src/routes/reset-password.tsx`         | Rota pública `/reset-password`                                              |
| `src/routes/reset-password-confirm.tsx` | Rota pública `/reset-password-confirm` com `loader` validando search params |
| `src/modules/auth/index.ts`             | Barrel export do módulo de autenticação (client, store, service, guard)     |
| `src/env.ts`                            | Validação de variáveis de ambiente (client-only) via T3Env + Zod            |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples (follow these patterns)
| Pattern                         | Reference                                      |
| ------------------------------- | ---------------------------------------------- |
| Rota protegida (loader)         | `src/routes/index.tsx`                         |
| Rota pública (loader)           | `src/routes/login.tsx`                         |
| Componente de auth              | `src/components/auth/login-form.tsx`           |
| Módulo com barrel export        | `src/modules/auth/index.ts`                    |
| Error Boundary                  | `src/components/error-boundary.tsx`            |
| Dashboard component structure   | `src/components/dashboard/profile-details.tsx` |
| Formulário (shadcn + RHF + Zod) | `src/components/auth/login-form.tsx`           |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START setup -->
## Setup & environment
- Framework: react
- Package manager: pnpm
- Environment variables: See .env.example
<!-- AGENTS-GENERATED:END setup -->

<!-- AGENTS-GENERATED:START commands -->
## Build & tests
- Install: `pnpm install`
- Typecheck: `pnpm dlx tsc --noEmit`
- Lint + Format: `pnpm biome:fix`
- Test: `pnpm test`
- Build: `pnpm build`
- Dev server: `pnpm dev` (porta 3000)
<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START code-style -->
## Code style & conventions
- **Formatter/Linter**: Biome (`biome.json`) — tabs, aspas duplas
- **Imports**: Usar alias `#/` (preferido) ou `@/` para `src/`
- Functional components with hooks only — sem class components
- Naming: `camelCase` para vars/funções, `PascalCase` para componentes
- File naming: `kebab-case.tsx` (ex: `login-form.tsx`, `logout-button.tsx`)
- CSS: Tailwind CSS v4 + shadcn/ui — adicionar componentes com `npx shadcn@latest add <component>`
- Variáveis de ambiente: definir em `src/env.ts` com validação Zod via T3Env
- **Formulários**: usar `useForm` (de `react-hook-form`) + `zodResolver` (de `@hookform/resolvers`) + componentes `Form`/`Field`/`FieldLabel`/`FieldControl`/`FieldError` (de `#/components/ui/form`). Nunca usar `useState` para campo de formulário — usar react-hook-form.
- **Rotas**: usar `createBrowserRouter` com lazy route modules. Cada route file exporta `loader` (data loading/guards) e `Component`. Guards usam `redirect()` de `react-router`.
- **Navegação**: `Link` e `useNavigate` de `react-router`. `navigate("/path")` (string), não `navigate({ to: "/path" })` (objeto).
<!-- AGENTS-GENERATED:END code-style -->

<!-- AGENTS-GENERATED:START security -->
## Security & safety
- Sanitize user inputs before rendering
- Raw HTML rendering only with sanitized content (use DOMPurify)
- Validate environment variables at build time
- Never expose secrets in client-side code
- Use HTTPS for all API calls
- Implement CSP headers
- WCAG 2.2 AA accessibility compliance
<!-- AGENTS-GENERATED:END security -->

<!-- AGENTS-GENERATED:START checklist -->
## PR/commit checklist
- [ ] Tests pass: `pnpm test`
- [ ] TypeScript compiles: `pnpm dlx tsc --noEmit`
- [ ] Biome limpo: `pnpm biome:fix`
- [ ] Novas env vars adicionadas em `.env.example` e `src/env.ts`
- [ ] Rotas protegidas usam `requireAuth()` no `loader`
- [ ] Rotas públicas de auth usam `requireGuest()` no `loader`
<!-- AGENTS-GENERATED:END checklist -->

<!-- AGENTS-GENERATED:START examples -->
## Patterns to Follow
> **Prefer looking at real code in this repo over generic examples.**
> See **Golden Samples** section above for files that demonstrate correct patterns.
<!-- AGENTS-GENERATED:END examples -->

<!-- AGENTS-GENERATED:START help -->
## When stuck
- Check React documentation: https://react.dev
- Review TypeScript handbook: https://www.typescriptlang.org/docs/
- Check root AGENTS.md for project-wide conventions
- Review existing components for patterns
<!-- AGENTS-GENERATED:END help -->

<!-- AGENTS-GENERATED:START scope-index -->
## Scoped AGENTS.md (MUST read when working in these directories)
- `./components/auth/AGENTS.md` — Componentes de autenticação (login, logout, reset de senha)
- `./hooks/AGENTS.md` — Hooks reutilizáveis do frontend
- `./modules/auth/AGENTS.md` — Módulo de autenticação (cliente NocoBase, store, service, guards)
<!-- AGENTS-GENERATED:END scope-index -->

> **Agents**: ao trabalhar em qualquer diretório listado acima, leia o AGENTS.md correspondente antes de modificar arquivos.

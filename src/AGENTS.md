<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-14 -->

# AGENTS.md — src

<!-- AGENTS-GENERATED:START overview -->
## Overview
Frontend application built with React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, and React Router v7. Integrates with NocoBase backend via SDK.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File                                    | Purpose                                                                            |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| `src/index.tsx`                         | SPA entry point — monta React no DOM                                               |
| `src/app.tsx`                           | Root layout: ThemeProvider + QueryClientProvider + ErrorBoundary + Outlet          |
| `src/env.ts`                            | Validação de variáveis de ambiente (client-only) via T3Env + Zod                   |
| `src/styles.css`                        | Tailwind CSS v4 imports e configurações globais                                    |
| `src/routes/dashboard.tsx`              | Rota protegida `/` — `loader` com `requireAuth()`                                  |
| `src/routes/profile.tsx`                | Rota protegida `/profile` — tela de edição de perfil                               |
| `src/routes/login.tsx`                  | Rota pública `/login` — `loader` com `requireGuest()`                              |
| `src/routes/reset-password.tsx`         | Rota pública `/reset-password`                                                     |
| `src/routes/reset-password-confirm.tsx` | Rota pública `/reset-password-confirm` com `loader` validando search params        |
| `src/routes/cs.tsx`                     | Rota protegida `/cs` — Customer Success (visão geral)                              |
| `src/routes/cs-contratos.tsx`           | Rota protegida `/cs/contratos` — lista de contratos                                |
| `src/routes/cs-contrato-detail.tsx`     | Rota protegida `/cs/contratos/:id` — detalhe de contrato                           |
| `src/routes/cs-negociacoes.tsx`         | Rota protegida `/cs/negociacoes` — kanban de negociações                           |
| `src/routes/forbidden.tsx`              | Rota pública `/forbidden` — página de acesso negado                                |
| `src/modules/auth/index.ts`             | Barrel export do módulo de autenticação (client, store, service, guard)            |
| `src/modules/permissions/index.ts`      | Barrel export do módulo de permissões (hooks, guards, store, types)                |
| `src/modules/repositories/index.ts`     | Barrel export dos repositórios (NocoBase e IXC)                                    |
| `src/modules/cs/`                       | Módulo Customer Success (contratos, negociações, pessoas) — services, hooks, types |
| `src/components/ui/`                    | Componentes shadcn/ui reutilizáveis (button, card, form, input, etc.)              |
| `src/components/auth/`                  | Componentes de autenticação (login-form, reset-password)                           |
| `src/components/dashboard/`             | Componentes de dashboard (user-dashboard, profile-details)                         |
| `src/components/cs/`                    | Componentes CS (páginas, tabelas, kanban, filtros, badges)                         |
| `src/lib/logger.ts`                     | Logger estruturado com níveis (debug/info/warn/error) e `isDev` gating             |
| `src/lib/api-errors.ts`                 | Mapeamento de códigos HTTP para mensagens de erro                                  |
| `src/integrations/`                     | Integrações com serviços externos (TanStack Query)                                 |
| `src/_tests/`                           | Infraestrutura de testes (global-setup, mock-env, test-utils)                      |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START structure -->
## Folder Structure

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── auth/           # Componentes de autenticação (login, logout, reset)
│   ├── cs/             # Componentes CS (páginas, tabelas, kanban, filtros)
│   ├── dashboard/      # Componentes de dashboard e home
│   ├── layout/         # Componentes de layout (headers, sidebars)
│   └── ui/             # Componentes shadcn/ui (button, card, form, etc.)
├── hooks/              # Hooks personalizados reutilizáveis
├── integrations/       # Integrações com serviços externos
│   └── tanstack/       # TanStack Query e Store setup
├── lib/                # Utilitários e funções de baixo nível
│   ├── api-errors.ts  # Mapeamento HTTP status → mensagens de erro
│   ├── logger.ts      # Logger com níveis (debug/info/warn/error) e createLogger()
│   └── utils.ts       # cn(), formatDateInPortuguese(), getInitials()
├── modules/            # Módulos de domínio (autenticação, permissões, repositórios, CS)
│   ├── auth/           # Módulo de autenticação
│   │   ├── client.ts   # NocoBase SDK client
│   │   ├── guard.ts    # Guards de rota (requireAuth, requireGuest)
│   │   ├── service.ts  # Funções de auth (signIn, signOut, etc.)
│   │   ├── store.ts    # TanStack Store para estado global
│   │   ├── types.ts    # Types e Zod schemas
│   │   └── index.ts    # Barrel export
│   ├── cs/             # Módulo Customer Success
│   │   ├── contratos-*.ts  # Contratos (service, hooks, types)
│   │   ├── negociacoes-*.ts# Negociações (service, hooks, types)
│   │   └── pessoas-*.ts    # Pessoas (service, hooks, types)
│   ├── permissions/    # Módulo de permissões (RBAC)
│   └── repositories/   # Repositórios de dados (NocoBase, IXC)
│       ├── ixc-repository.ts       # IxcRepository para integração IXCSoft
│       ├── nocobase-client-typed.ts# NocoBase client type-safe wrapper
│       ├── nocobase-repository.ts  # NocoBaseRepository com wrappers type-safe
│       ├── types.ts                # Tipos compartilhados
│       └── index.ts                # Barrel export
├── routes/             # Route modules do React Router v7
│   ├── cs*.tsx         # Rotas CS (contratos, negociações, pessoas)
│   ├── dashboard.tsx   # Rota raiz (/) - dashboard
│   ├── forbidden.tsx   # Rota de acesso negado
│   ├── profile.tsx     # Rota de perfil (/profile)
│   ├── login.tsx       # Rota de login (/login)
│   ├── reset-password*.tsx # Rotas de reset de senha
│   └── router.tsx      # Configuração principal de rotas
├── app.tsx             # App root (providers + Outlet)
├── env.ts              # Validação de environment variables
├── index.tsx           # Entry point (mount React)
├── styles.css          # Tailwind CSS v4 + custom styles
└── _tests/             # Infraestrutura de testes
    ├── global-setup.ts # Setup global do Vitest
    └── mock-env.ts     # Mocks de environment variables
```

### Directory Rules
- **`components/`**: Componentes UI puros ou com estado local. Podem ser reutilizados em múltiplos lugares.
- **`hooks/`**: Hooks customizados que são usados em mais de um componente.
- **`modules/`**: Domínios de negócio com estado global, serviços e guards. Usam barrel export (`index.ts`).
- **`modules/cs/`**: Módulo Customer Success — serviços, hooks e types para contratos, negociações e pessoas. **Sem barrel export** (cada domínio é independente).
- **`repositories/`**: Camada de acesso a dados externos (NocoBase, IXC). Serviços e components usam repositórios, não clients diretamente.
- **`routes/`**: Route modules do React Router. Cada arquivo = uma rota. Exportam `loader` + `Component`.
- **`integrations/`**: Setup de bibliotecas externas (TanStack, etc.).
- **`lib/`**: Funções utilitárias puras, sem dependência de React.
- **`_tests/`**: Setup de testes (global setup, mocks, utils).

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples (follow these patterns)
| Pattern                         | Reference                                      |
| ------------------------------- | ---------------------------------------------- |
| Rota protegida (loader)         | `src/routes/dashboard.tsx`                     |
| Rota pública (loader)           | `src/routes/login.tsx`                         |
| Componente de auth              | `src/components/auth/login-form.tsx`           |
| Módulo com barrel export        | `src/modules/auth/index.ts`                    |
| Error Boundary                  | `src/components/error-boundary.tsx`            |
| Dashboard component structure   | `src/components/dashboard/profile-details.tsx` |
| Formulário (shadcn + RHF + Zod) | `src/components/auth/login-form.tsx`           |
| TanStack Query hooks            | `src/modules/cs/contratos-hooks.ts`            |
| Service layer (IXC integration) | `src/modules/cs/contratos-service.ts`          |
| Página CS com filtros           | `src/components/cs/contratos-page.tsx`         |
| Kanban board                    | `src/components/cs/negociacoes-kanban.tsx`     |
| Table with pagination           | `src/components/ui/data-table-with-pagination.tsx` |
| Filter builder usage            | `src/modules/cs/pessoas-service.ts`            |
| Pagination hook                 | `src/hooks/use-pagination.ts`                  |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START setup -->
## Setup & environment
- **Framework**: React 19 com TypeScript
- **Build tool**: Vite (HMR, hot reload)
- **Package manager**: pnpm
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Routing**: React Router v7 com `createBrowserRouter` e lazy routes
- **State management**: TanStack Store (autenticação, permissões) + TanStack Query (data fetching)
- **Forms**: React Hook Form + Zod validation
- **Environment variables**: Validação em `src/env.ts` via T3Env + Zod
  - `VITE_NOCOBASE_URL`: URL do backend NocoBase (obrigatória)
  - `VITE_LOCAL_STORAGE_BASE_KEY`: Chave base para localStorage (opcional, default: "crm-atplus")
<!-- AGENTS-GENERATED:END setup -->

<!-- AGENTS-GENERATED:START commands -->
## Build & tests
- **Install**: `pnpm install`
- **Dev server**: `pnpm dev` (porta 3000)
- **Typecheck**: `pnpm typecheck` ou `pnpm dlx tsc --noEmit`
- **Lint + Format**: `pnpm biome:fix`
- **Test**: `pnpm test` (Vitest)
- **Build**: `pnpm build`
- **Preview build**: `pnpm preview`
- **Generate types**: `pnpm generate-types` (NocoBase SDK types)
- **Check unused code**: `pnpm knip`
<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START code-style -->
## Code style & conventions

### TypeScript
- **Strict mode** habilitado no `tsconfig.json`
- **Imports**: Usar alias `#/` (preferido) ou `@/` para `src/` (configurado em `vite.config.ts` via `tsconfigPaths: true`)
- **Naming**: `camelCase` para variáveis/funções, `PascalCase` para componentes e tipos
- **File naming**: `kebab-case.tsx` (ex: `login-form.tsx`, `user-dashboard.tsx`)
- **Exports**: Preferir barrel exports (`index.ts`) para módulos em `src/modules/`
- **Types**: Preferir `interface` para tipos públicos e `type` para uniões/interseções internas
- **Zod schemas**: Exportar schemas de validação junto com tipos inferidos (`z.infer<typeof schema>`)

### React
- **Functional components com hooks** — sem class components
- **Component structure**: Separar lógica de negócio da apresentação quando possível
- **Hooks personalizados**: Extrair lógica reutilizável para `src/hooks/`
- **Error handling**: Usar Error Boundary (`src/components/error-boundary.tsx`) para capturar erros de renderização
- **Lazy loading**: React Router v7 carrega routes dinamicamente — não usar `React.lazy` manualmente

### Styling (Tailwind CSS v4 + shadcn/ui)
- **Tailwind v4**: Imports diretos no CSS, sem `tailwind.config.js`
- **shadcn/ui**: Adicionar componentes com `npx shadcn@latest add <component>`
- **Class names**: Usar `cn()` ou `clsx()` + `tailwind-merge` para classes condicionais
- **Variáveis CSS**: Usar variáveis do tema shadcn (`--background`, `--foreground`, etc.)
- **Dark mode**: Suportado via `ThemeProvider` (`src/components/theme-provider.tsx`)

### Forms (React Hook Form + Zod)
- **Sempre usar** `useForm` de `react-hook-form` + `zodResolver` de `@hookform/resolvers`
- **Componentes**: Usar `Form`/`Field`/`FieldLabel`/`FieldControl`/`FieldError` de `#/components/ui/form`
- **Nunca usar** `useState` para campos de formulário — usar react-hook-form
- **Server errors**: Manter em `useState<string | null>` separado dos erros de validação do RHF
- **Submit state**: Usar `form.formState.isSubmitting` para desabilitar botão — não criar estado manual

### Routing (React Router v7)
- **Route modules**: Cada arquivo em `src/routes/` exporta `loader` (opcional) e `Component` (obrigatório)
- **Guards**: `requireAuth()` e `requireGuest()` no `loader` — usam `redirect()` de `react-router`
- **Data loading**: Carregar dados no `loader`, acessar via `useRouteLoaderData`
- **Navegação programática**: `navigate("/path")` (string), não `navigate({ to: "/path" })` (objeto)
- **Links**: Usar `Link` de `react-router` para navegação interna (evita recarregamento)

### State Management
- **TanStack Store**: Para estado global (autenticação, permissões) — `src/modules/auth/store.ts`, `src/modules/permissions/store.ts`
- **TanStack Query**: Para data fetching — `src/integrations/tanstack/query/`
- **Estado local**: `useState` apenas para estado específico do componente
- **Derivação**: Computar valores derivados no render, não armazenar em estado

### Module Architecture
- **Barrel exports**: Módulos em `src/modules/` exportam APIs públicas via `index.ts`
- **Encapsulamento**: Componentes externos importam de `#/modules/auth`, não de sub-arquivos
- **Services**: Funções que chamam APIs externas ficam em `service.ts` dentro do módulo
- **Guards**: Funções de proteção de rota em `guard.ts` — usam estado do store + `redirect()`

### Table & Pagination Patterns

**Use the generic table component** to avoid duplication:

```tsx
import { DataTableWithPagination } from "#/components/ui/data-table-with-pagination";

// Server-side pagination
<DataTableWithPagination
  columns={columns}
  data={data}
  total={meta.total}
  totalPages={meta.totalPage}
  isLoading={isFetching}
  onPageChange={(page) => refetch({ page })}
  onPageSizeChange={(pageSize) => refetch({ page: 1, pageSize })}
  emptyMessage="Nenhum registro encontrado"
/>

// Client-side pagination (no callbacks needed)
<DataTableWithPagination
  columns={columns}
  data={allData}
  emptyMessage="Nenhum registro encontrado"
/>
```

**For custom pagination logic**, use the `usePagination` hook:

```tsx
import { usePagination } from "#/hooks/use-pagination";

const { pagination, onPaginationChange } = usePagination({
  initialPage: 1,
  initialPageSize: 20,
  onPageChange: (page) => refetch({ page }),
  onPageSizeChange: (pageSize) => refetch({ page: 1, pageSize }),
});
```

**Never**:
- ❌ Create custom pagination state logic (use `usePagination`)
- ❌ Duplicate table + pagination combinations (use `DataTableWithPagination`)
- ❌ Implement manual page size handlers (use hook callbacks)

### Filter Builder Pattern

**Always use `filter-builder.ts`** for NocoBase/IXC query filters:

```tsx
import { buildFilter, eq, includes, or, nestedField } from "#/lib/filter-builder";

// In your service:
function buildMyFilter(filters?: MyFilters) {
  if (!filters) return undefined;

  const conditions: Record<string, unknown>[] = [];

  if (filters.name) {
    conditions.push(includes("f_nome", filters.name));
  }

  if (filters.status) {
    conditions.push(eq("status", filters.status));
  }

  return buildFilter(conditions);
}
```

**Never**:
- ❌ Create custom filter builder functions with manual `$and` logic
- ❌ Duplicate filter building patterns across services
- ❌ Use inline filter objects — extract to helper functions

### Barrel Exports — Quando NÃO usar

Não utilize barrel exports (`index.ts`) em:

#### 1. Componentes com baixo acoplamento externo
- Componentes que exportam **apenas 1 item** que é importado fora do diretório
- Componentes cujos exports são usados **apenas internamente** (detalhes de implementação)

**Exemplo — EVITE:**
```
src/components/layout/app-sidebar/
├── index.ts              // ❌ Apenas re-exporta AppSidebar
├── app-sidebar.tsx       //    Único componente usado externamente
├── sidebar-header.tsx    //    Usado apenas internamente
└── sidebar-navigation.tsx//    Usado apenas internamente
```

**Exemplo — PERMITIDO:**
```
src/modules/auth/
├── index.ts              // ✅ Exporta múltiplas APIs públicas
├── client.ts             //    nocobaseClient
├── guard.ts              //    requireAuth, requireGuest
├── service.ts            //    signIn, signOut, checkAuth
├── store.ts              //    authStore, setUser, setToken
└── types.ts              //    AuthUser, AuthState, etc.
```

#### 2. Sub-componentes e detalhes de implementação
- Componentes aninhados dentro de outro componente (ex: `app-sidebar/sidebar-header.tsx`)
- Hooks utilitários usados apenas internamente (ex: `useUserInitials`)
- Tipos auxiliares que não são parte da API pública do módulo

#### 3. Regra prática
**Pergunte:** "Este barrel export expõe uma API pública coesa ou apenas adiciona um arquivo intermediário?"

- Se o diretório representa um **módulo de domínio** com múltiplas responsabilidades (auth, permissions, repositories) → **USE barrel export**
- Se o diretório é um **componente UI** com um export principal e detalhes internos → **NÃO USE barrel export**

### Testing (Vitest)
- **Test files**: Nomear como `*.test.ts` ou `*.test.tsx`
- **Location**: Colocar testes junto com o código testado (`src/modules/auth/auth.test.ts`) ou em `src/_tests/modules/`
- **Mocks**: Usar `vi.mock()` para mockar módulos. Env mocks em `src/_tests/mock-env.ts`
- **Global setup**: `src/_tests/global-setup.ts` configura ambiente de teste
- **Coverage**: Gerado em `coverage/` ao rodar `pnpm test --coverage`

<!-- AGENTS-GENERATED:START security -->
## Security & safety
- **Environment validation**: Todas as env vars são validadas em `src/env.ts` no bootstrap da aplicação
- **Client-side secrets**: Nunca expor secrets no código client — usar apenas variáveis `VITE_*`
- **User inputs**: Sanitizar antes de renderizar (especialmente com `dangerouslySetInnerHTML`)
- **Raw HTML**: Usar DOMPurify quando necessário renderizar HTML não confiável
- **API calls**: Todas as requisições usam HTTPS (forçado via `VITE_NOCOBASE_URL` com `z.url()`)
- **Auth tokens**: Armazenados em localStorage com chave configurável (`VITE_LOCAL_STORAGE_BASE_KEY`)
- **XSS protection**: React escapa conteúdo por padrão — usar `dangerouslySetInnerHTML` apenas com conteúdo sanitizado
- **Acessibilidade**: Seguir WCAG 2.2 AA — componentes shadcn já incluem ARIA attributes

<!-- AGENTS-GENERATED:START checklist -->
## PR/commit checklist
- [ ] **Tests passam**: `pnpm test`
- [ ] **TypeScript compila**: `pnpm dlx tsc --noEmit`
- [ ] **Biome limpo**: `pnpm biome:fix`
- [ ] **Novas env vars**: Adicionadas em `.env.example` e `src/env.ts`
- [ ] **Rotas protegidas**: Usam `requireAuth()` no `loader`
- [ ] **Rotas públicas de auth**: Usam `requireGuest()` no `loader`
- [ ] **Forms**: Usam react-hook-form + zodResolver (não useState)
- [ ] **Imports**: Usam `#/` alias (não caminhos relativos `../`)
- [ ] **Componentes novos**: Seguem padrão de nomenclatura `kebab-case.tsx`
- [ ] **Estado global**: Usa TanStack Store (não Context API para estado mutável)
- [ ] **Error handling**: Componentes novos têm tratamento de erro (try/catch ou Error Boundary)

<!-- AGENTS-GENERATED:START examples -->
## Patterns to Follow

### Componente com Formulário (Login)
```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import { Form, Field, FieldLabel, FieldControl, FieldError } from "#/components/ui/form";
import { Input } from "#/components/ui/input";

const schema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

type Values = z.infer<typeof schema>;

export function MyForm() {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: Values) => {
    // lógica de submit
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <Field name="email">
        <FieldLabel>E-mail</FieldLabel>
        <FieldControl>
          <Input type="email" {...form.register("email")} />
        </FieldControl>
        <FieldError />
      </Field>
      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </Form>
  );
}
```

### Rota Protegida
```tsx
import { requireAuth } from "#/modules/auth";

export async function loader() {
  requireAuth("/login"); // redireciona se não autenticado
  return null;
}

export function Component() {
  return <ProtectedContent />;
}
```

### Módulo com Barrel Export
```tsx
// src/modules/my-module/index.ts
export { myService } from "./service";
export { myStore, setMyData } from "./store";
export { useMyHook } from "./hooks";
export type { MyType, MySchema } from "./types";
export { mySchema } from "./types";
```

### Hook Personalizado
```tsx
import { useEffect, useState } from "react";

export function useMyHook<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetcher()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fetcher]);

  return { data, loading, error };
}
```

<!-- AGENTS-GENERATED:START help -->
## When stuck
- **React documentation**: https://react.dev
- **TypeScript handbook**: https://www.typescriptlang.org/docs/
- **React Router v7**: https://reactrouter.com/
- **TanStack Query**: https://tanstack.com/query/latest
- **TanStack Store**: https://tanstack.com/store/latest
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **NocoBase SDK**: Verificar em `node_modules/@nocobase/sdk` ou documentação oficial
- **Root AGENTS.md**: Convenções do projeto em `/home/gustavo_carbonera/Área de trabalho/crm-atplus/AGENTS.md`
- **Golden Samples**: Revisar arquivos listados na seção acima para padrões de implementação
- **Biome errors**: Rodar `pnpm biome:fix --verbose` para detalhes dos erros

<!-- AGENTS-GENERATED:START scope-index -->
## Scoped AGENTS.md (MUST read when working in these directories)
- `./components/auth/AGENTS.md` — Componentes de autenticação (login, logout, reset de senha)
- `./components/layout/AGENTS.md` — Componentes de layout autenticado (shell e header)
- `./components/dashboard/AGENTS.md` — Componentes de dashboard e perfil
- `./hooks/AGENTS.md` — Hooks reutilizáveis do frontend
- `./lib/AGENTS.md` — Funções utilitárias puras (cn, logger, formatação)
- `./modules/auth/AGENTS.md` — Módulo de autenticação (cliente NocoBase, store, service, guards)
- `./modules/repositories/AGENTS.md` — Repositórios de dados (NocoBase, IXC)
<!-- AGENTS-GENERATED:END scope-index -->

> **Agents**: ao trabalhar em qualquer diretório listado acima, leia o AGENTS.md correspondente antes de modificar arquivos.

<!-- TODO: Add AGENTS.md for ./modules/cs/ (Customer Success module) -->
<!-- TODO: Add AGENTS.md for ./components/cs/ (CS components) -->

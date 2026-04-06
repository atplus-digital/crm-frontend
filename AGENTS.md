# CRM ATPlus

Aplicação CRM construída com TanStack Start, React 19, Tailwind CSS e shadcn/ui.

## Visão Geral do Projeto

### Arquitetura

- **Router**: `src/router.tsx` cria o router com `scrollRestoration`, `defaultPreload: "intent"` e `defaultPreloadStaleTime: 0`.
- **Root Route**: `src/routes/__root.tsx` define o shell component (`RootDocument`) e os metadados globais.
- **Integração TanStack Query**: QueryClient configurado com SSR query integration.
- **Query Provider**: `src/integrations/tanstack/query/root-provider.tsx` exporta `getQueryContext()` que cria o `QueryClient`.
- **Tema**: Fluxo completo — `ThemeScript` (inline, SSR-safe) → `getStoredTheme()` → `applyThemeMode()` → `ThemeToggle` (componente React).
- **Formatação**: Tabs para indentação, aspas duplas para strings.

| Aspecto                    | Detalhe                                      |
| -------------------------- | -------------------------------------------- |
| **Framework**              | TanStack Start (SSR/SPA)                     |
| **Linguagem**              | TypeScript (strict mode)                     |
| **Estilização**            | Tailwind CSS v4 + shadcn/ui                  |
| **Roteamento**             | TanStack Router (file-based)                 |
| **Estado/Servidor**        | TanStack Query + TanStack Store              |
| **Linting/Formatting**     | Biome (indentStyle: tab, quoteStyle: double) |
| **Testes**                 | Vitest + Testing Library                     |
| **Fonte**                  | Geist Variable                               |
| **Idioma da interface**    | pt-BR                                        |
| **Gerenciador de pacotes** | pnpm                                         |

### Como Rodar

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # build de produção
pnpm preview      # preview do build
```

### Scripts Disponíveis

| Comando          | Descrição                                 |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Servidor de desenvolvimento na porta 3000 |
| `pnpm build`     | Build de produção                         |
| `pnpm preview`   | Preview do build de produção              |
| `pnpm test`      | Executa testes com Vitest                 |
| `pnpm lint`      | Lint com Biome                            |
| `pnpm format`    | Formatação com Biome                      |
| `pnpm check`     | Check completo do Biome (lint + format)   |
| `pnpm biome:fix` | Auto-fix de problemas do Biome            |

### Convenções

- **Imports**: Usar alias `#/` ou `@/` para `src/` (ambos configurados no tsconfig). Preferir `#/`.
- **Componentes UI**: Usar shadcn/ui — adicionar com `npx shadcn@latest add <component>`.
- **Tipo de rota**: File-based routing em `src/routes/`.
- **Variáveis de ambiente**: Definir em `src/env.ts` com validação Zod via T3Env.

## Skill mappings - when working in these areas, load the linked skill file into context.

<!-- intent-skills:start -->

- task: "Adding or configuring routes"
  load: "node_modules/@tanstack/router-core/skills/router-core/SKILL.md"
- task: "Data loading with route loaders"
  load: "node_modules/@tanstack/router-core/skills/router-core/data-loading/SKILL.md"
- task: "Server functions and API endpoints"
  load: "node_modules/@tanstack/start-client-core/skills/start-core/server-functions/SKILL.md"
- task: "SSR setup and streaming"
  load: "node_modules/@tanstack/router-core/skills/router-core/ssr/SKILL.md"
- task: "React Start framework setup"
  load: "node_modules/@tanstack/react-start/skills/react-start/SKILL.md"

<!-- intent-skills:end -->

## Agents

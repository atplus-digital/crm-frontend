# CRM ATPlus

Aplicação CRM construída com TanStack Start, React 19, Tailwind CSS e shadcn/ui.

## Visão Geral do Projeto

| Aspecto                    | Detalhe                                      |
| -------------------------- | -------------------------------------------- |
| **Nome**                   | crm-atplus                                   |
| **Framework**              | TanStack Start (SSR/SPA)                     |
| **Linguagem**              | TypeScript (strict mode)                     |
| **Gerenciador de pacotes** | pnpm                                         |
| **Estilização**            | Tailwind CSS v4 + shadcn/ui (radix-nova)     |
| **Roteamento**             | TanStack Router (file-based)                 |
| **Estado/Servidor**        | TanStack Query + TanStack Store              |
| **Linting/Formatting**     | Biome (indentStyle: tab, quoteStyle: double) |
| **Testes**                 | Vitest + Testing Library                     |
| **Fonte**                  | Geist Variable                               |
| **Idioma da interface**    | pt-BR                                        |

## Como Rodar

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # build de produção
pnpm preview      # preview do build
```

## Scripts Disponíveis

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

## Estrutura de Diretórios

```
src/
├── components/          # Componentes reutilizáveis
│   ├── root/            # Componentes do root layout (RootDocument, ThemeScript)
│   └── ui/              # Componentes shadcn/ui (button.tsx, ...)
├── data/                # (vazio) Dados estáticos/mock
├── hooks/               # (vazio) Custom hooks
├── integrations/        # Integrações configuradas
│   └── tanstack/        # DevTools, Query provider, Router devtool
├── lib/                 # Utilitários
│   ├── theme.ts         # Sistema de tema light/dark com localStorage
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
├── routes/              # Rotas (file-based routing)
│   ├── __root.tsx       # Root route (head, meta, shellComponent)
│   └── index.tsx        # Página inicial (/)
├── env.ts               # Variáveis de ambiente com T3Env + Zod
├── router.tsx           # Configuração do router com SSR query integration
├── routeTree.gen.ts     # Auto-gerado pelo TanStack Router
└── styles.css           # Tailwind v4 + CSS variables do shadcn/ui
```

## Estado Atual do Projeto

### Funcionalidades Implementadas

- **Sistema de tema (light/dark)**: Detecção automática de preferência do sistema, persistência em localStorage, script de inicialização inline para evitar flash (FOUC). Chave: `crm-atplus-theme`.
- **Layout raiz (RootDocument)**: HTML com lang="pt-BR", ThemeScript, TanStack DevTools.
- **Componente ThemeToggle**: Botão funcional para alternância de tema.
- **Integração TanStack Query**: QueryClient configurado com SSR query integration.
- **DevTools**: Router DevTools + Query DevTools integrados (posição: bottom-right).
- **shadcn/ui**: Inicializado com estilo `radix-nova`, componente `button` instalado.
- **Variáveis de ambiente**: T3Env configurado com `SERVER_URL` (server) e `VITE_LOCAL_STORAGE_BASE_KEY` (client, default: `crm-atplus`).

### Pendências / Diretórios Vazios

- `src/data/` — Vazio, aguardando dados estáticos ou mocks.
- `src/hooks/` — Vazio, aguardando custom hooks.
- Apenas 1 componente shadcn instalado (`button`). Expandir conforme necessário.
- Apenas 1 rota (`/`). CRM precisa de rotas para contatos, empresas, oportunidades, etc.

### Arquitetura

- **Router**: `src/router.tsx` cria o router com `scrollRestoration` e `defaultPreload: "intent"`.
- **Root Route**: `src/routes/__root.tsx` define o shell component (`RootDocument`) e os metadados globais.
- **Query Provider**: `src/integrations/tanstack/query/root-provider.tsx` exporta `getQueryContext()` que cria o `QueryClient`.
- **Tema**: Fluxo completo — `ThemeScript` (inline, SSR-safe) → `getStoredTheme()` → `applyThemeMode()` → `ThemeToggle` (componente React).

## Convenções

- **Imports**: Usar alias `#/` para `src/` (configurado no tsconfig e package.json).
- **Formatação**: Tabs para indentação, aspas duplas para strings.
- **Componentes UI**: Usar shadcn/ui — adicionar com `npx shadcn add <component>`.
- **Tipo de rota**: File-based routing em `src/routes/`.
- **Variáveis de ambiente**: Definir em `src/env.ts` com validação Zod via T3Env.

## Variáveis de Ambiente

| Variável                      | Tipo            | Obrigatória | Descrição                                                   |
| ----------------------------- | --------------- | ----------- | ----------------------------------------------------------- |
| `SERVER_URL`                  | URL (server)    | Não         | URL do servidor backend                                     |
| `VITE_LOCAL_STORAGE_BASE_KEY` | string (client) | Não         | Prefixo para chaves do localStorage (default: `crm-atplus`) |
| `ANTHROPIC_API_KEY`           | string (server) | Não         | Chave da API Anthropic (IA)                                 |

## Dependências Principais

| Pacote                   | Versão | Uso                                       |
| ------------------------ | ------ | ----------------------------------------- |
| `@tanstack/react-start`  | latest | Framework fullstack                       |
| `@tanstack/react-router` | latest | Roteamento file-based                     |
| `@tanstack/react-query`  | latest | Data fetching e cache                     |
| `@tanstack/react-store`  | latest | Gerenciamento de estado                   |
| `@tanstack/react-table`  | latest | Tabelas de dados                          |
| `@tanstack/react-form`   | latest | Formulários                               |
| `@tanstack/ai-*`         | latest | Integração com múltiplos provedores de IA |
| `tailwindcss`            | v4.2+  | Estilização                               |
| `shadcn`                 | v4     | Componentes UI                            |
| `radix-ui`               | v1.4+  | Primitivos de acessibilidade              |
| `lucide-react`           | latest | Ícones                                    |
| `zod`                    | v4     | Validação de schemas                      |
| `@t3-oss/env-core`       | latest | Tipagem de variáveis de ambiente          |
| `react`                  | v19    | UI library                                |
| `highlight.js`           | latest | Syntax highlighting                       |
| `@faker-js/faker`        | v10    | Geração de dados mock                     |

## Guia de Adição de Rotas

Criar um arquivo em `src/routes/`:

```tsx
// src/routes/contacts.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacts")({
  component: ContactsPage,
});

function ContactsPage() {
  return <div>Página de Contatos</div>;
}
```

Para navegar entre rotas, usar o componente `Link`:

```tsx
import { Link } from "@tanstack/react-router";

<Link to="/contacts">Contatos</Link>;
```

## Guia de Server Functions

```tsx
import { createServerFn } from "@tanstack/react-start";

const getContacts = createServerFn({ method: "GET" }).handler(async () => {
  // Lógica server-side aqui
  return [];
});
```

## Guia de Data Loading

```tsx
export const Route = createFileRoute("/contacts")({
  loader: async () => {
    const contacts = await getContacts();
    return { contacts };
  },
  component: ContactsPage,
});

function ContactsPage() {
  const { contacts } = Route.useLoaderData();
  // ...
}
```

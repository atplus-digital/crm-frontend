---
title: Integração com API do CRM ATPlus
description: Guia de arquitetura e integração da API NocoBase (crm.atplus.cloud)
---

## Visão Geral

A API do CRM ATPlus é construída sobre **NocoBase v2.0.0-beta.6**, um framework
low-code que expõe automaticamente uma API REST padronizada para todas as
collections do banco de dados. A integração usa o SDK oficial `@nocobase/sdk`
como client HTTP e um sistema de tipos gerados automaticamente para garantir
segurança compile-time.

### Ambiente e Configuração

- **Ambiente**: Produção (crm.atplus.cloud)
- **Token de acesso**: Token permanente (env var `CRM_NOCOBASE_TOKEN`) com acesso de leitura **(read-only — sem operações de escrita)**
- **Collections**: Todas as collections disponíveis listadas pelo Swagger
- **Campos**: Utilizar os nomes fornecidos pelo Swagger
- **Gestão de estado**: TanStack Query (dados da API) + TanStack Store (UI state)

### Endpoints Padrão

Todas as collections compartilham o mesmo padrão de endpoints:

| Método | Endpoint                                    | Descrição                  |
| ------ | ------------------------------------------- | -------------------------- |
| `GET`  | `/api/{collection}:list`                    | Lista registros (paginado) |
| `GET`  | `/api/{collection}:get?filterByTk={id}`     | Busca por ID               |
| `POST` | `/api/{collection}:create`                  | Cria registro              |
| `POST` | `/api/{collection}:update?filterByTk={id}`  | Atualiza registro          |
| `POST` | `/api/{collection}:destroy?filterByTk={id}` | Remove registro            |

> **Nota**: O token atual é read-only. Os endpoints de escrita acima são documentados
> para referência futura, mas não serão utilizados na implementação inicial.

### Parâmetros de Query

| Parâmetro  | Tipo       | Descrição                       |
| ---------- | ---------- | ------------------------------- |
| `page`     | `number`   | Página atual (default: 1)       |
| `pageSize` | `number`   | Itens por página                |
| `filter`   | `object`   | Filtros avançados (JSON)        |
| `sort`     | `string[]` | Ordenação (ex: `-id,createdAt`) |
| `fields`   | `string[]` | Campos específicos a retornar   |
| `appends`  | `string[]` | Relações a incluir              |
| `except`   | `string[]` | Campos a excluir                |

---

## Client HTTP (`@nocobase/sdk`)

A integração usa o SDK oficial `@nocobase/sdk` como base do client HTTP. Ele resolve
automaticamente autenticação, persistência de token e CRUD genérico.

### Instalação

```bash
pnpm add @nocobase/sdk
```

### Variáveis de Ambiente

As variáveis de ambiente são validadas em `src/env.ts` com Zod via T3Env:

| Variável                      | Prefixo | Descrição                                            |
| ----------------------------- | ------- | ---------------------------------------------------- |
| `CRM_NOCOBASE_URL`            | `CRM_`  | URL base da API (ex: `https://crm.atplus.cloud/api`) |
| `CRM_NOCOBASE_TOKEN`          | `CRM_`  | Token permanente para autenticação                   |
| `VITE_LOCAL_STORAGE_BASE_KEY` | `VITE_` | Prefixo para chaves no localStorage                  |

> **Nota**: O prefixo `CRM_` foi escolhido para manter consistência com o `.env.local`
> existente. As variáveis são definidas no arquivo `env.ts` sem o prefixo (T3Env o
> remove automaticamente).

### Configuração

```ts
// src/lib/api-client.ts
import { APIClient } from "@nocobase/sdk";
import { env } from "#/env";

export const api = new APIClient({
	baseURL: env.CRM_NOCOBASE_URL,
	storagePrefix: `${env.VITE_LOCAL_STORAGE_BASE_KEY}_`,
});

// Token fixo configurado via env var (sem tela de login)
api.auth.setToken(env.CRM_NOCOBASE_TOKEN);
```

O SDK cuida automaticamente de:

- Envio do header `Authorization: Bearer <token>`
- Interceptors Axios configuráveis

> **Decisão de arquitetura**: A aplicação usa token fixo (read-only) sem tela de
> login. O token é injetado via variável de ambiente. Caso seja necessário
> autenticação com login no futuro, basta migrar para `api.auth.signIn()` e
> adicionar a tela de login.

### CRUD com `api.resource()`

O método `api.resource(name)` retorna um objeto com operações CRUD mapeadas
para os endpoints do NocoBase:

```ts
const contacts = api.resource("t_pessoas");

// Listar
await contacts.list({ page: 1, pageSize: 20, filter: { f_status: 1 } });

// Buscar por ID
await contacts.get({ filterByTk: 1 });

// Criar
await contacts.create({ values: { f_nome: "João", f_cpf: "12345678901" } });

// Atualizar
await contacts.update({ filterByTk: 1, values: { f_nome: "João Silva" } });

// Remover
await contacts.destroy({ filterByTk: 1 });
```

| Método `resource`  | Endpoint gerado             | HTTP |
| ------------------ | --------------------------- | ---- |
| `.list(params)`    | `/api/{collection}:list`    | GET  |
| `.get(params)`     | `/api/{collection}:get`     | GET  |
| `.create(params)`  | `/api/{collection}:create`  | POST |
| `.update(params)`  | `/api/{collection}:update`  | POST |
| `.destroy(params)` | `/api/{collection}:destroy` | POST |

### Requisições Diretas

Para chamadas que não seguem o padrão de resource:

```ts
await api.request({
	method: "post",
	url: "auth:signIn",
	data: { email, password },
	headers: { "X-Authenticator": "password" },
});
```

---

## Filtros Avançados

O parâmetro `filter` aceita operadores sofisticados do NocoBase:

```bash
# Igualdade
?filter={"f_status": 1}

# Comparação
?filter={"f_valor_mensal": {"$gt": 100}}

# E / OU
?filter={"$and": [{"f_status": 1}, {"f_tipo_pessoa": "PJ"}]}
?filter={"$or": [{"f_status": 1}, {"f_status": 2}]}

# Like / contains
?filter={"f_nome": {"$like": "%maicon%"}}

# In
?filter={"f_status": {"$in": [1, 2, 3]}}

# Relações
?filter={"f_fk_pessoa_pj_negociacao.id": 1}
```

---

## Paginação

A resposta de listas segue o formato:

```json
{
	"data": [...],
	"meta": {
		"count": 110,
		"page": 1,
		"pageSize": 20,
		"totalPage": 6
	}
}
```

### Tipos de Resposta

```ts
// Resposta genérica de listagem
interface NocoBaseListResponse<T> {
	data: T[];
	meta: {
		page: number;
		pageSize: number;
		hasNext: boolean;
	};
}

// Resposta genérica de item único
interface NocoBaseGetResponse<T> {
	data: T;
	meta: Record<string, unknown>;
}
```

---

## Services com TanStack Query

Os services são **wrappers tipados** em cima do SDK, combinados com query factories
do TanStack Query. O tipo de retorno é **derivado dos appends** passados.

### Utilitário `WithAppends`

O tipo `WithAppends` combina o tipo `Base` com apenas as relações solicitadas via
`appends`, garantindo segurança compile-time:

```ts
// src/lib/query-types.ts
type SelectRelations<
	TRelations extends Record<string, unknown>,
	TAppends extends readonly string[],
> = {
	[K in keyof TRelations as K extends TAppends[number] ? K : never]?: TRelations[K];
};

export type WithAppends<
	TBase,
	TRelations extends Record<string, unknown>,
	TAppends extends readonly string[],
> = TBase & SelectRelations<TRelations, TAppends>;
```

Garantias compile-time:

| Ação                                      | Resultado TypeScript                                 |
| ----------------------------------------- | ---------------------------------------------------- |
| Acessar campo escalar (`data.f_titulo`)   | ✅ Sempre disponível via `XxxBase`                    |
| Acessar relação **sem** `appends`         | ❌ Erro: propriedade não existe no tipo Base          |
| Acessar relação **com** `appends` correto | ✅ Tipo correto (ex: `f_pessoa?: PessoaBase \| null`) |
| Passar `appends` inválido                 | ❌ Erro: não está em `XxxRelationKey`                 |

### Exemplo de Service

```ts
// src/services/deals.ts
import { api } from "#/lib/api-client";
import { queryOptions } from "@tanstack/react-query";
import type {
	NegociacaoBase,
	NegociacaoRelations,
	NegociacaoRelationKey,
} from "./types.generated";
import type { WithAppends } from "#/lib/query-types";
import type { NocoBaseListResponse } from "./types";

export const negociacoesQueries = {
	/**
	 * Busca negociação por ID com relações tipadas.
	 * O tipo retornado é derivado dos appends passados.
	 */
	detail: <T extends NegociacaoRelationKey>(id: number, appends: readonly T[]) =>
		queryOptions({
			queryKey: ["negociacoes", id, appends] as const,
			queryFn: async () => {
				const res = await api.resource("t_negociacoes").get({
					filterByTk: id,
					appends: [...appends],
				});
				return res.data as WithAppends<
					NegociacaoBase,
					NegociacaoRelations,
					typeof appends
				>;
			},
		}),

	/**
	 * Lista negociações com relações tipadas.
	 */
	list: <T extends NegociacaoRelationKey>(
		params: {
			page?: number;
			pageSize?: number;
			filter?: Record<string, unknown>;
			sort?: string[];
		},
		appends: readonly T[] = [] as const,
	) =>
		queryOptions({
			queryKey: ["negociacoes", params, appends] as const,
			queryFn: async () => {
				const res = await api.resource("t_negociacoes").list({
					...params,
					appends: [...appends],
				});
				return res.data as NocoBaseListResponse<
					WithAppends<NegociacaoBase, NegociacaoRelations, typeof appends>
				>;
			},
		}),
};
```

### Uso nos componentes

```tsx
// TypeScript SABE que f_pessoa existe:
const { data } = useQuery(negociacoesQueries.detail(52, ["f_pessoa"]));
data?.f_pessoa?.f_nome; // ✅ OK — tipo: string | undefined
data?.f_comentarios; // ❌ Erro — não está nos appends
```

---

## Estrutura do Projeto

```text
src/
├── lib/
│   ├── api-client.ts        ← @nocobase/sdk (APIClient + token fixo)
│   ├── query-types.ts       ← WithAppends (utilitário de tipos)
│   ├── utils.ts             ✅ Já existe
│   └── theme.ts             ✅ Já existe
├── services/                ← Wrappers tipados por domínio
│   ├── contacts.ts          ← api.resource("t_pessoas")
│   ├── companies.ts         ← api.resource("t_empresas")
│   ├── deals.ts             ← api.resource("t_negociacoes")
│   ├── types.ts             ← Interfaces manuais (NocoBaseListResponse, etc.)
│   └── typestypes.generated.ts   ← Auto-gerado por scripts/generate-types.ts
├── hooks/
│   └── use-ui-store.ts      ← TanStack Store para UI state
├── data/
│   └── ui-store.ts          ← Definição do store global (sidebar, filtros, etc.)
├── routes/
└── integrations/
    └── tanstack/query/
        └── root-provider.tsx ✅ Já existe
```

### Status de Implementação

| Arquivo                        | Status          | Observação                                                         |
| ------------------------------ | --------------- | ------------------------------------------------------------------ |
| `src/env.ts`                   | ⚠️ Parcial       | Precisa adicionar `CRM_NOCOBASE_URL` e `CRM_NOCOBASE_TOKEN`        |
| `src/lib/api-client.ts`        | ❌ Ausente       | Core da integração — criar primeiro                                |
| `src/lib/query-types.ts`       | ✅ Documentado   | Utilitário `WithAppends` documentado em "Utilitário `WithAppends`" |
| `src/types/.ts`                | ❌ Ausente       | Tipos manuais (`NocoBaseListResponse` etc.)                        |
| `src/types/types.generated.ts` | ❌ Ausente       | Gerado pelo script                                                 |
| `src/services/deals.ts`        | ❌ Ausente       | Service de negociações                                             |
| `src/services/contacts.ts`     | ❌ Ausente       | Service de pessoas                                                 |
| `src/services/companies.ts`    | ❌ Ausente       | Service de empresas                                                |
| `src/data/ui-store.ts`         | ❌ Ausente       | Store global para UI state                                         |
| `scripts/generate-types.ts`    | ❌ Ausente       | Script de geração de tipos                                         |
| `@nocobase/sdk`                | ❌ Não instalado | `pnpm add @nocobase/sdk`                                           |

---

## Gestão de Estado

A aplicação usa duas camadas de estado, cada uma com propósito distinto:

| Camada           | Tecnologia     | Uso                                                     |
| ---------------- | -------------- | ------------------------------------------------------- |
| **Dados da API** | TanStack Query | Cache, sincronização, loading/error states dos services |
| **Estado da UI** | TanStack Store | Sidebar aberta/fechada, filtros ativos, preferências    |

### TanStack Query (dados)

Já configurado em `src/integrations/tanstack/query/root-provider.tsx`. Todos os
services (deals, contacts, companies) usam `queryOptions` factories.

### TanStack Store (UI state)

Store global para estado transitório da interface que não vem da API:

```ts
// src/data/ui-store.ts
import { store } from "@tanstack/react-store";

export const uiStore = store({
	sidebarOpen: true,
	activeFilters: {},
	// ...outros estados de UI
});
```

---

## Referências

- [API Overview](https://docs.nocobase.com/api/) — Visão geral da API
- [@nocobase/sdk — APIClient](https://docs.nocobase.com/api/sdk/) — Client HTTP
- [@nocobase/sdk — Auth](https://docs.nocobase.com/api/sdk/auth) — Autenticação
- [Filter Operators](https://docs.nocobase.com/api/database/operators)
  — Operadores de filtro

---
title: Integração com API do CRM ATPlus
description: Guia de arquitetura e integração da API NocoBase (crm.atplus.cloud)
---


## Client HTTP (`@nocobase/sdk`)

A integração usa o SDK oficial `@nocobase/sdk` como base do client HTTP. Ele resolve
automaticamente autenticação, persistência de token e CRUD genérico.

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

## Services com TanStack Query

Os services são **wrappers tipados** em cima do SDK, combinados com query factories
do TanStack Query. O tipo de retorno é **derivado dos appends** passados.

### TanStack Store

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


- [API Overview](https://docs.nocobase.com/api/) — Visão geral da API
- [@nocobase/sdk — APIClient](https://docs.nocobase.com/api/sdk/) — Client HTTP
- [@nocobase/sdk — Auth](https://docs.nocobase.com/api/sdk/auth) — Autenticação
- [Filter Operators](https://docs.nocobase.com/api/database/operators)
  — Operadores de filtro

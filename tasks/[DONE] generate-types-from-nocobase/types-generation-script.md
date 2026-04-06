---
title: Plano de Implementação — Geração Automática de Tipos
description: Plano de implementação do script de geração de interfaces TypeScript a partir do schema NocoBase (crm.atplus.cloud)
---

## Visão Geral

Criar o script `scripts/generate-types.ts` que lerá o schema do NocoBase via API
e gerará automaticamente as interfaces `Base`, `Relations` e `RelationKey` para
cada collection.

---

## Decisões Arquiteturais

| Decisão                     | Valor                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Permissão da API Token      | **Read-only** — sem operações de escrita                                                                              |
| Runtime do script           | **tsx** (dev dependency)                                                                                              |
| Escopo das collections      | **Todas** visíveis via `/api/collections:list`                                                                        |
| Nomenclatura das interfaces | Remove prefixo `t_` + PascalCase (`t_negociacoes` → `Negociacao`, `users` → `Users`)                                  |
| Políticas de cache          | **Deferido** — cada service definirá suas próprias políticas conforme necessidade                                     |
| Dependências circulares     | Tudo em **único arquivo** (`typestypes.generated.ts`) — `export interface` resolve forward references automaticamente |
| Relações `belongsToMany`    | Identificar pelo campo `type` do NocoBase; gerar array do tipo alvo; **não** gerar tipos para tabelas pivot           |
| Acesso ao env no script     | Ler diretamente de `process.env` (via `dotenv`) — `import.meta.env` não está disponível em `tsx`/Node.js              |
| Detecção de mudanças        | Gerar hash do schema em `scripts/types.hash`; falhar se o hash atual divergir do arquivo                              |

---

## Arquivos a Serem Criados

| Arquivo                        | Responsabilidade                                       |
| ------------------------------ | ------------------------------------------------------ |
| `scripts/generate-types.ts`    | Script principal de geração                            |
| `src/types/types.generated.ts` | Interfaces geradas (regenerado a cada execução)        |
| `scripts/types.hash`           | Hash do schema para detecção de mudanças (auto-gerado) |

> **Nota**: O utilitário `WithAppends` está documentado em `docs/integracao-api-client.md`
> na seção "Utilitário `WithAppends`".

---

## Etapas de Implementação

### Etapa 1 — Configuração do Ambiente

- [ ] Instalar `tsx` como dev dependency: `pnpm add -D tsx`
- [ ] Adicionar script `generate-types` ao `package.json`:
  `"generate-types": "tsx scripts/generate-types.ts"`
- [ ] Configurar variáveis de ambiente no `.env.local`

| Variável             | Descrição                                            |
| -------------------- | ---------------------------------------------------- |
| `CRM_NOCOBASE_URL`   | URL base da API (ex: `https://crm.atplus.cloud/api`) |
| `CRM_NOCOBASE_TOKEN` | Token permanente para autenticação                   |

- [ ] Atualizar `src/env.ts` para validar as variáveis CRM na seção `server`:

```ts
server: {
  SERVER_URL: z.url().optional(),
  CRM_NOCOBASE_URL: z.url(),
  CRM_NOCOBASE_TOKEN: z.string().min(1),
},
```

> **Importante**: O script roda via `tsx` (Node.js) e **não tem acesso ao `import.meta.env`**.
> Portanto, ele lê diretamente de `process.env` via `dotenv`. Já a aplicação web
> usa `src/env.ts` (T3Env) para validar as mesmas variáveis em runtime.

### Etapa 2 — Script de Geração (`scripts/generate-types.ts`)

Implementar o pipeline de geração com os seguintes passos:

1. **Carregar `.env.local`** com `dotenv/config` e ler variáveis de ambiente (`process.env.CRM_NOCOBASE_URL`, `process.env.CRM_NOCOBASE_TOKEN`)
2. **Buscar collections** via `GET /api/collections:list`
3. **Buscar fields** de cada collection via `GET /api/collections:get?appends=fields`
4. **Classificar fields** como escalar ou relação:
   - **Escalares** → vão para `XxxBase` (campos comuns + FKs)
   - **Relações** → vão para `XxxRelations` (identificadas pelo campo `type`)
5. **Gerar o mapa de relações** com tipo, cardinalidade e FK
6. **Escrever `src/types/types.generated.ts`** com banner de auto-geração
7. **Gerar hash** do schema e escrever em `scripts/types.hash`

Para cada collection, gerar três tipos:

| Tipo             | Conteúdo                                  | Exemplo                 |
| ---------------- | ----------------------------------------- | ----------------------- |
| `XxxBase`        | Campos escalares + FKs (sempre presentes) | `NegociacaoBase`        |
| `XxxRelations`   | Apenas propriedades de relação tipadas    | `NegociacaoRelations`   |
| `XxxRelationKey` | Union type das chaves de relação          | `NegociacaoRelationKey` |

Regras de mapeamento de tipos NocoBase → TypeScript:

| Campo NocoBase      | Tipo TypeScript                   |
| ------------------- | --------------------------------- |
| `string`            | `string`                          |
| `integer`, `bigInt` | `number`                          |
| `boolean`           | `boolean`                         |
| `date`, `dateTime`  | `string`                          |
| `json`              | `Record<string, unknown>`         |
| `belongsTo`         | `XxxBase \| null` (opcional)      |
| `hasMany`           | `XxxBase[]` (opcional)            |
| `belongsToMany`     | `XxxBase[]` (opcional, sem pivot) |

Exemplo do resultado esperado para `t_negociacoes`:

```ts
export interface NegociacaoBase {
	id: number;
	createdAt: string;
	updatedAt: string;
	createdById: number;
	updatedById: number;
	f_titulo: string;
	f_tipo_pessoa: "PF" | "PJ";
	f_status: number;
	f_valor_mensal: number;
	f_fk_pessoa_negociacao: number | null;
	f_fk_negociacao_vendedor: number | null;
	f_fk_pacote: number | null;
}

export interface NegociacaoRelations {
	f_pessoa?: PessoaBase | null;
	f_negociacao_pessoa_juridica?: EmpresaBase | null;
	f_vendedor?: UserBase | null;
	f_pacote?: PacoteBase | null;
	f_itens_negociacao?: NegociacaoItemBase[];
	f_comentarios?: NegociacaoComentarioBase[];
	f_pacotes_adicionais?: PacoteBase[];
}

export type NegociacaoRelationKey = keyof NegociacaoRelations;
```

### Etapa 3 — Validação e Testes

- [ ] Executar `pnpm generate-types` com sucesso
- [ ] Verificar que `src/@types/typestypes.generated.ts` foi gerado corretamente
- [ ] Confirmar que o projeto compila sem erros: `pnpm build`
- [ ] Confirmar que o lint passa: `pnpm check`

---

## Referência Rápida

### Execução

```bash
CRM_NOCOBASE_TOKEN="seu-token-aqui" pnpm generate-types
```

### Diagrama da Arquitetura de Tipos

```text
┌─────────────────┐
│  NegociacaoBase  │  ← campos escalares + FKs
│  id, f_titulo,   │
│  f_fk_pessoa...  │
└────────┬────────┘
         │
┌────────┴──────────┐
│ NegociacaoRelations│  ← relações (via appends)
│  f_pessoa: Pessoa  │
│  f_vendedor: User  │
│  f_itens: Item[]   │
└────────┬──────────┘
         │  WithAppends<Base, Relations, Appends>
┌────────┴────────┐
│  Tipo resultante │  ← Base + relações solicitadas
│  id, f_titulo,   │
│  f_pessoa?,      │  ← só existe se appends incluiu
│  f_vendedor?     │  ← só existe se appends incluiu
└─────────────────┘
```


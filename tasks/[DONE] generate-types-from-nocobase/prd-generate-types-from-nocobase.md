# PRD: Geração Automática de Tipos a partir do NocoBase

## Introduction

O CRM ATPlus utiliza a API do NocoBase como backend. Para garantir segurança compile-time ao consumir dados da API, precisamos de interfaces TypeScript que espelhem o schema do NocoBase. Atualmente, essas interfaces seriam criadas manualmente — o que é propenso a erros e difícil de manter.

Este PRD define a criação de um script que conecta na API do NocoBase, lê o schema de todas as collections e gera automaticamente as interfaces `Base`, `Relations` e `RelationKey` para cada collection. O script roda em Node.js via `tsx` e é executado manualmente pelo desenvolvedor (ou em CI).

## Goals

- Gerar automaticamente interfaces TypeScript a partir do schema do NocoBase
- Detectar mudanças no schema via hash SHA-256
- Suportar `--dry-run` para preview sem escrita de arquivos
- Integrar o script ao fluxo de desenvolvimento existente (`pnpm generate-types`)
- Manter o projeto compilando e passando lint após a geração

## User Stories

### US-001: Instalar dependências e configurar scripts

**Description:** Como desenvolvedor, quero ter as dependências (`tsx`, `dotenv`) instaladas e o script `generate-types` configurado no `package.json` para poder executar o comando facilmente.

**Group:** A

**Acceptance Criteria:**

- [ ] `tsx` instalado como dev dependency
- [ ] `dotenv` instalado como dev dependency
- [ ] Script `"generate-types": "tsx scripts/generate-types.ts"` adicionado ao `package.json`
- [ ] Script `"generate-types:dry": "tsx scripts/generate-types.ts --dry-run"` adicionado ao `package.json`
- [ ] Lint passa (`pnpm check`)

### US-002: Configurar variáveis de ambiente

**Description:** Como desenvolvedor, quero ter as variáveis `CRM_NOCOBASE_URL` e `CRM_NOCOBASE_TOKEN` validadas pelo T3Env para garantir que a aplicação web e o script tenham acesso seguro às credenciais da API.

**Group:** B

**Acceptance Criteria:**

- [ ] `CRM_NOCOBASE_URL` e `CRM_NOCOBASE_TOKEN` adicionados à seção `server` de `src/env.ts` com validação Zod
- [ ] `.env.example` atualizado com as novas variáveis e comentários
- [ ] O projeto compila sem erros (`pnpm build`)
- [ ] Lint passa (`pnpm check`)

### US-003: Expandir escopo do Biome para incluir `scripts/`

**Description:** Como desenvolvedor, quero que o script de geração seja lintado/formatado pelo Biome para manter consistência de estilo em todo o código-fonte.

**Group:** B

**Acceptance Criteria:**

- [ ] `**/scripts/**/*` adicionado ao array `includes` do `biome.json`
- [ ] Lint passa (`pnpm check`)

### US-004: Implementar script principal de geração de tipos

**Description:** Como desenvolvedor, quero um script `scripts/generate-types.ts` que se conecta à API do NocoBase, lê o schema de todas as collections e gera o arquivo `src/types/types.generated.ts` com as interfaces `Base`, `Relations` e `RelationKey` para cada collection.

**Group:** C

**Acceptance Criteria:**

- [ ] Script carrega `.env.local` via `dotenv/config` e lê `CRM_NOCOBASE_URL` e `CRM_NOCOBASE_TOKEN` de `process.env`
- [ ] Script busca collections via `GET /api/collections:list` com header `Authorization: Bearer <token>`
- [ ] Script busca fields de cada collection via `GET /api/collections:get?appends=fields` (usando o nome da collection como `filterByTk`)
- [ ] Fields são classificados como escalar ou relação (campos com `type` que indica relação: `belongsTo`, `hasMany`, `belongsToMany`)
- [ ] Para cada collection, gera 3 tipos:
  - `XxxBase`: campos escalares + FKs (todos os campos que não são relações)
  - `XxxRelations`: apenas propriedades de relação tipadas (opcionais)
  - `XxxRelationKey`: `keyof XxxRelations` (union type das chaves de relação)
- [ ] Nomenclatura: remove prefixo `t_` + PascalCase (ex: `t_negociacoes` → `Negociacao`, `users` → `Users`)
- [ ] Mapeamento de tipos NocoBase → TypeScript segue a tabela de referência (string, integer, bigInt, boolean, date, dateTime, json, belongsTo, hasMany, belongsToMany)
- [ ] Relações `belongsToMany` geram array do tipo alvo, sem gerar tipos para tabelas pivot
- [ ] Arquivo gerado inclui banner de auto-geração no topo (com timestamp)
- [ ] Tudo em único arquivo gerado (`typestypes.generated.ts`) para evitar dependências circulares
- [ ] Lint passa (`pnpm check`)

### US-005: Implementar geração de hash SHA-256 do schema

**Description:** Como desenvolvedor, quero que o script gere um hash SHA-256 do schema completo e salve em `scripts/types.hash` para detectar quando o schema mudou.

**Group:** C

**Acceptance Criteria:**

- [ ] Hash SHA-256 do schema completo (collections + fields) é calculado
- [ ] Hash é salvo em `scripts/types.hash`
- [ ] Se o hash divergir do arquivo existente, o script avisa no console mas **regenera automaticamente** (sem parar)
- [ ] Arquivo `.gitignore` inclui `scripts/types.hash` (hash é volátil/local)

### US-006: Implementar flag `--dry-run`

**Description:** Como desenvolvedor, quero executar o script com `--dry-run` para ver o que seria gerado sem escrever nenhum arquivo, facilitando revisão antes de aplicar mudanças.

**Group:** C

**Acceptance Criteria:**

- [ ] Flag `--dry-run` aceita via `process.argv`
- [ ] Quando ativa, o script executa todo o pipeline (fetch, classificação, geração) mas **não escreve** nenhum arquivo
- [ ] O conteúdo gerado é impresso no console (stdout)
- [ ] Script `pnpm generate-types:dry` no `package.json` usa a flag

### US-007: Validar geração contra o projeto

**Description:** Como desenvolvedor, quero garantir que após executar o script de geração, o projeto continua compilando e passando lint sem erros.

**Group:** D

**Acceptance Criteria:**

- [ ] `pnpm generate-types` executa com sucesso e gera `src/types/types.generated.ts`
- [ ] `src/types/types.generated.ts` contém as interfaces para todas as collections visíveis na API
- [ ] `scripts/types.hash` é gerado/atualizado
- [ ] O projeto compila sem erros (`pnpm build`)
- [ ] Lint passa (`pnpm check`)

## Functional Requirements

- FR-1: O script deve buscar o schema completo (collections + fields) via API do NocoBase usando autenticação Bearer token
- FR-2: O script deve classificar cada field como escalar ou relação, usando a propriedade `type` do NocoBase
- FR-3: Para cada collection, devem ser gerados 3 tipos TypeScript: `XxxBase`, `XxxRelations` e `XxxRelationKey`
- FR-4: O mapeamento de tipos deve seguir: `string→string`, `integer/bigInt→number`, `boolean→boolean`, `date/dateTime→string`, `json→Record<string, unknown>`, `belongsTo→XxxBase | null`, `hasMany→XxxBase[]`, `belongsToMany→XxxBase[]`
- FR-5: A nomenclatura das interfaces deve remover o prefixo `t_` e aplicar PascalCase
- FR-6: O arquivo gerado deve conter banner de auto-geração com timestamp
- FR-7: O hash SHA-256 do schema deve ser salvo em `types.hash`
- FR-8: Em caso de divergência de hash, o script deve avisar e regenerar automaticamente
- FR-9: A flag `--dry-run` deve imprimir o conteúdo gerado no console sem escrever arquivos
- FR-10: Todas as interfaces devem ficar em um único arquivo `typestypes.generated.ts`

## Non-Goals

- Não gerar tipos para tabelas pivot de relações `belongsToMany`
- Não implementar watch mode (regeneração automática ao mudar schema)
- Não implementar cache de requests HTTP no script
- Não gerar services ou query factories — apenas os tipos
- Não modificar o schema do NocoBase (token é read-only)
- Não implementar o utilitário `WithAppends` neste PRD (já documentado em `docs/integracao-api-client.md`)

## Technical Considerations

- **Runtime**: O script roda via `tsx` (Node.js), não tem acesso a `import.meta.env`. Usa `dotenv/config` para carregar variáveis de `process.env`.
- **Dependências circulares**: Tudo em único arquivo gerado — `export interface` resolve forward references automaticamente.
- **FKs em Base**: Campos que são foreign keys (terminam em `Id` ou são referenciados por relações) ficam no tipo `Base`, não no `Relations`.
- **Relações opcionais**: Todas as propriedades no tipo `Relations` são opcionais (`?`).
- **Formatting**: O script deve gerar código formatado com tabs (convenção do projeto). Usar `String.raw` com tabs literais ou template literals com `\t`.
- **Biome**: O escopo do Biome será expandido para incluir `scripts/` (US-003), então o script gerado deve ser compatível com o formatter.

## Mapeamento de Tipos NocoBase → TypeScript

| Campo NocoBase      | Tipo TypeScript           |
| ------------------- | ------------------------- |
| `string`            | `string`                  |
| `integer`, `bigInt` | `number`                  |
| `boolean`           | `boolean`                 |
| `date`, `dateTime`  | `string`                  |
| `json`              | `Record<string, unknown>` |
| `belongsTo`         | `XxxBase \| null`         |
| `hasMany`           | `XxxBase[]`               |
| `belongsToMany`     | `XxxBase[]` (sem pivot)   |

## Referência

- Documentação completa: `docs/types-generation-script.md`
- Utilitário `WithAppends`: `docs/integracao-api-client.md`
- Requisito original: `tasks/current/req-generate-types-from-nocobase.md`

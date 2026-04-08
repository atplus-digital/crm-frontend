---
title: Generate Types Script
description: Gera tipos TypeScript a partir das collections do NocoBase via API.
---

Script CLI que conecta à API NocoBase, busca o schema das collections disponíveis e gera interfaces TypeScript tipadas para a aplicação CRM ATPlus.

## Uso Rápido

```bash
# Variáveis de ambiente (raiz do projeto)
CRM_NOCOBASE_URL=http://localhost:13000/api
CRM_NOCOBASE_TOKEN=seu_token_aqui

# Comandos
pnpm generate-types            # Gera tipos (escreve arquivos)
pnpm generate-types --dry-run  # Preview de diff sem escrever
pnpm generate-types --help     # Ajuda
```

## Output

O script gera dois tipos de arquivo:

- **Arquivo principal** (`src/@types/generated/index.ts`): collections agregadas em um único arquivo
- **Arquivos individuais** (`src/@types/generated/<collection>.ts`): 10 collections críticas separadas para imports otimizados

Para cada collection, gera 3 tipos:

```typescript
// Campos escalares/FKs que vêm no payload base
export interface UsersBase { id: number; email: string; ... }

// Relações opcionais carregadas via `appends`
export interface UsersRelations { createdBy?: UsersBase | null; roles?: RolesBase[]; ... }

// Union type das chaves de relação — para typesafe appends
export type UsersRelationKey = keyof UsersRelations;
```

## Arquitetura

O script segue Clean Architecture com 5 camadas independentes e testáveis:

```
CLI Layer (args.ts → main.ts → help.ts/report.ts)
  → Configuration Layer (config.ts + load-config.ts, lazy-loaded)
    → Generation Layer (client.ts → collection-types.ts → field-mapper/relations/content)
      → Processing Layer (collection-splitter.ts — divide main vs split)
        → Output Layer (writer.ts + diff.ts → report.ts)
```

### Estrutura de Diretórios

```
scripts/generate-types/
├── src/
│   ├── @types/                    # Tipos internos (generation, nocobase, script)
│   ├── cli/                       # args.ts, help.ts, main.ts, report.ts
│   ├── generation/                # client.ts, collection-types.ts, content.ts, field-mapper.ts, relations.ts
│   ├── utils/                     # collection-splitter.ts, concurrency.ts, diff.ts, load-config.ts, naming.ts, writer.ts
│   └── generate-types.ts          # Função principal orquestradora
├── config.ts                      # Configuração central (splitCollections, paths, timeout)
└── index.ts                       # Entry point
```

### Módulos Principais

| Módulo                   | Responsabilidade                                 |
| ------------------------ | ------------------------------------------------ |
| `client.ts`              | API NocoBase — fetch collections + fields        |
| `field-mapper.ts`        | Mapeia 27 field types NocoBase → TypeScript      |
| `collection-types.ts`    | Orquestra build de tipos por collection (conc=5) |
| `content.ts`             | Gera código TypeScript final (interfaces)        |
| `relations.ts`           | Resolve cardinalidade de relações                |
| `collection-splitter.ts` | Divide collections main vs split                 |
| `writer.ts`              | I/O idempotente (só escreve se mudou) + dry-run  |

## Decisões de Design

- **Multi-file output**: Collections críticas em arquivos separados para tree-shaking e rebuilds isolados
- **Lazy config**: Env vars carregadas via getter — `--help` funciona sem forçar leitura imediata dos arquivos
- **Fallback de env**: o loader tenta `.env.local` primeiro e usa `.env` como fallback
- **Base sem appends**: `Base` contém apenas escalares/FKs observáveis sem `appends`
- **Relations opcionais**: Todas as relações ficam em `Relations` com `?`, pois dependem de `appends`
- **Targets ocultos**: relações para collections não expostas no schema público são rebaixadas para `unknown`
- **Concurrency pool**: Máximo 5 requisições simultâneas para não sobrecarregar a API
- **Escrita idempotente**: Só reescreve arquivo se conteúdo mudou (preserva timestamps)

## Mapeamento de Tipos

### Field Types (27 tipos)

| Categoria  | Tipos NocoBase                                            | TypeScript                |
| ---------- | --------------------------------------------------------- | ------------------------- |
| Numeric    | `integer`, `bigInt`, `double`, `float`, `decimal`, `sort` | `number`                  |
| Numeric (2)| `snowflakeId`, `timestamp`                                | `number`                  |
| String     | `string`, `text`, `uid`, `nanoid`, `email`                | `string`                  |
| String (2) | `phone`, `url`, `ipv4`, `ipv6`, `password`, `formula`     | `string`                  |
| String (3) | `sequence`, `point`, `lineString`                         | `string`                  |
| Date/Time  | `date`, `dateOnly`, `datetime`, `time`, `month`, `year`   | `string` (ISO 8601)       |
| Object     | `json`, `jsonb`, `object`                                 | `Record<string, unknown>` |
| Boolean    | `boolean`                                                 | `boolean`                 |
| Array      | `array`, `set`                                            | `string[]` / `unknown[]`  |
| Special    | `context`                                                 | `unknown`                 |

### System Fields

| Campo         | Tipo              | Nota                                     |
| ------------- | ----------------- | ---------------------------------------- |
| `createdById` | `number \| null`  | Override fixo para chaves de auditoria   |
| `updatedById` | `number \| null`  | Override fixo para chaves de auditoria   |
| `createdBy`   | `UsersBase \| null` | Relação opcional em `Relations`        |
| `updatedBy`   | `UsersBase \| null` | Relação opcional em `Relations`        |
| `parent`      | `<Collection>Base \| null` | Relação opcional hierárquica |
| `children`    | `<Collection>Base[]` | Relação opcional hierárquica         |

### Relation Interfaces

| Interface NocoBase               | Cardinalidade | Renderização         |
| -------------------------------- | ------------- | -------------------- |
| `m2o`, `belongsTo`, `oho`, `obo` | one           | `TargetBase \| null` |
| `o2m`, `hasMany`, `m2m`, `mbm`   | many          | `TargetBase[]`       |
| `manyToMany`, `belongsToArray`   | many          | `TargetBase[]`       |

## Configuração

Arquivo `config.ts` — propriedades principais:

```typescript
{
  splitCollections: ["users", "f_funcionarios", "t_negociacoes", ...], // 10 collections
  splitOutputDir: "src/@types/generated",
  mainOutputPath: "src/@types/types.generated.ts",
  requestTimeoutMs: 15_000,
  concurrency: 5,
}
```

Para adicionar uma collection ao split: adicionar em `splitCollections` no `config.ts` e rodar `pnpm generate-types`.

## Padrões de Código

- **Funções puras**: Geração é determinística (mesmo input → mesmo output), I/O isolado em `writer.ts` e `client.ts`
- **Naming**: `users` → `UsersBase` / `UsersRelations` / `UsersRelationKey`; funções privadas prefixadas com `_`
- **Error handling**: Erros de API propagados com contexto (collection name, status code)
- **Type-driven**: Tipos definidos antes da implementação em `@types/`

## Extensão

### Adicionar novo field type

1. Adicionar em `FIELD_TYPE_MAP` no `field-mapper.ts`
2. Opcionalmente adicionar em `_KNOWN_FIELD_TYPES`
3. Rodar `pnpm test field-mapper`

### Adicionar nova interface de relação

1. Adicionar tipo em `RelationInterface` no `relations.ts`
2. Mapear em `RELATION_INTERFACE_MAP`
3. Definir cardinalidade em `getRelationCardinality`

### Adicionar novo formato de output (ex: Zod schemas)

1. Criar novo gerador em `src/generation/`
2. Adicionar flag em `config.ts`
3. Condicional no `generate-types.ts`

## Testes

```bash
pnpm test                      # Todos
pnpm test field-mapper         # Mapeamento de tipos
pnpm test content              # Geração de código
pnpm test collection-splitter  # Divisão de collections
pnpm test writer               # Escrita/dry-run
pnpm test --watch              # Watch mode
```

Estratégia: funções puras sem mocks (unit) + mock do client para fluxo completo (integration em `integration.test.ts`).

## Opções de Execução

| Opção                          | Descrição                                           |
| ------------------------------ | --------------------------------------------------- |
| `--dry-run`                    | Exibe diferenças sem escrever os arquivos          |
| `--help` ou `-h`               | Mostra ajuda de uso do script                       |
| `--lock-workspace`             | Ativa o bloqueio de escrita dos arquivos gerados    |

Quando a opção `--lock-workspace` é usada, ou quando `lockWorkspaceFolder` está ativado no `config.ts`, o script verifica o arquivo `.vscode/settings.json` e adiciona as configurações necessárias para tornar os arquivos gerados somente leitura no VS Code.

## Troubleshooting

| Problema                         | Solução                                                 |
| -------------------------------- | ------------------------------------------------------- |
| Variáveis ausentes em `.env.local` | Definir em `.env.local` ou usar `.env` como fallback |
| `Request timeout`                | Verificar servidor ou aumentar `requestTimeoutMs`       |
| `Unauthorized`                   | Regenerar token no NocoBase                             |
| Tipos incorretos                 | Rodar `pnpm generate-types` (schema mudou)              |
| Arquivo não mudou após rodar     | Esperado — idempotente. Usar `--dry-run` para verificar |
| Imports lentos em arquivo grande | Adicionar collection ao `splitCollections` no `config`  |
| Arquivos gerados sendo modificados | Usar a opção `--lock-workspace` para proteger contra edições acidentais |

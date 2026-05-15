# Update Field Names

Script para atualizar o `uiSchema.title` de campos de collections via API do NocoBase.

Usa a mesma estrutura de pipeline com **Listr2** dos scripts geradores, com stages organizados:

| Stage          | Arquivo                    | Descrição                                          |
| -------------- | -------------------------- | -------------------------------------------------- |
| Resolve config | `stages/resolve-config.ts` | Carrega credenciais e flatten do `fieldNameConfig` |
| Update fields  | `stages/update-fields.ts`  | Envia POST para cada campo (sub-tasks Listr2)      |
| Summary        | `pipeline.ts`              | Exibe resumo de resultados                         |

## Estrutura

```
update-field-names/
├── update-field-names.ts   # Entry point (self-executing)
├── pipeline.ts             # Orquestração Listr2 + stages + summary
├── config.ts               # Configuração de campos a atualizar
├── @types/
│   └── script.ts           # Tipos da pipeline
├── stages/
│   ├── resolve-config.ts   # Stage 1: resolve credenciais + flatten config
│   └── update-fields.ts    # Stage 2: POST requests por campo
├── tsconfig.json
└── README.md
```

## Configuração

Edite o arquivo `config.ts` com o mapeamento de campos a atualizar:

```typescript
export const fieldNameConfig: Record<
  string,
  Record<string, Record<string, string>>
> = {
  datasource_key: {
    collection_name: {
      field_name: "Novo Label",
      field_name2: "Outro Label",
    },
  },
};
```

- **datasource_key**: chave do datasource (ex: `d_db_ixcsoft`, `main`)
- **collection_name**: nome da collection (ex: `cidade`, `cliente`)
- **field_name**: nome do campo na collection
- **Novo Label**: novo valor para `uiSchema.title`

## Como obter o field_id

Use o script `nocobase-docs` para listar os campos e seus IDs:

```bash
npx tsx .agents/skills/nocobase-docs/scripts/nocobase-client.ts raw "dataSources/d_db_ixcsoft/collections:list?paginate=false"
```

Isso retorna a lista de collections com seus campos. O `key` de cada campo é o `filterByTk`.

## Uso

1. Copie `.env.example` para `.env.local` e preencha o token:

```bash
cp .env.example .env.local
```

2. Edite `config.ts` com os campos desejados.

3. Execute:

```bash
pnpm update-field-names
```

Ou diretamente com tsx:

```bash
node --import tsx/esm update-field-names.ts
```

## Endpoint

```
POST /api/dataSourcesCollections/{datasource_key}.{collection_key}/fields:update?filterByTk={field_id}
```

Body:

```json
{
  "uiSchema": {
    "title": "Novo Label"
  }
}
```

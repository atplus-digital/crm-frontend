---
title: Gerador de Custom Requests
date: 2026-04-24
status: draft
---

# Draft: Gerador de Custom Requests

## Requirements (confirmed)

- Criar script similar ao `generate-types` para buscar custom requests da API do NocoBase
- Script deve ler `GET /customRequests:list` e transformar em registry TypeScript
- Output: arquivo TypeScript com entradas do registry para cada custom request
- Deve ser executável via `pnpm generate-custom-requests`

## Technical Decisions

- Seguir padrão do `scripts/generate-types/` (estrutura, logging, config)
- Usar `tsx` para execução (mesmo que generate-types)
- Output em `src/features/custom-requests/generated-registry.ts` (arquivo separado do registry manual)
- Manter registry manual existente para schemas Zod customizados
- Novo script gera apenas a estrutura base (key, name, collection, options)

## Research Findings

- `scripts/generate-types/` usa `NocoBaseDataSourceClient` para fetch via API
- Config em `datasources.config.ts` define datasources e collections
- Pipeline: fetch → transform → write → cleanup → biome fix
- Custom requests API retorna: key, options (method, url, headers, params, data, timeout, collectionName, dataSourceKey, responseType), roles, createdAt, updatedAt
- options.data contém templates como `{{currentRecord.id}}`
- 164 custom requests existem na API
- Atualmente só 3 estão hardcoded no registry

## Open Questions

- [ ] Como lidar com options.data que contém templates? Parsear e gerar schemas Zod automáticos ou manter schemas manuais separados?
- [ ] Nome do script: `generate-custom-requests` ou `sync-custom-requests`?
- [ ] Output: arquivo separado ou merge no registry.ts existente?
- [ ] Filtrar por collectionName ou trazer todos os 164?

## Scope Boundaries

INCLUDE:

- Script TypeScript em `scripts/generate-custom-requests/`
- Fetch dos 164 custom requests da API
- Transformação para estrutura de registry
- Escrita de arquivo TypeScript
- Comando npm `pnpm generate-custom-requests`

EXCLUDE:

- Validação de payload (schemas Zod permanecem manuais)
- UI para gerenciar custom requests
- Integração automática com hooks/components

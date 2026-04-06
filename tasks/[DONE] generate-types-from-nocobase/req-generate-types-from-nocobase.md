# Geração Automática de Tipos a partir do NocoBase

## Description

Criar o script `scripts/generate-types.ts` que lerá o schema do NocoBase via API e gerará automaticamente as interfaces `Base`, `Relations` e `RelationKey` para cada collection do CRM ATPlus.

## Decided Requirements

- [ ] Instalar `tsx` como dev dependency
- [ ] Adicionar script `generate-types` ao `package.json`
- [ ] Configurar variáveis de ambiente (`CRM_NOCOBASE_URL`, `CRM_NOCOBASE_TOKEN`) no `.env.local`
- [ ] Atualizar `src/env.ts` com validação das variáveis CRM na seção `server`
- [ ] Implementar `scripts/generate-types.ts` com pipeline completo:
  - Carregar `.env.local` via `dotenv/config`
  - Buscar collections via `GET /api/collections:list`
  - Buscar fields de cada collection via `GET /api/collections:get?appends=fields`
  - Classificar fields como escalar ou relação
  - Gerar interfaces `XxxBase`, `XxxRelations` e `XxxRelationKey`
  - Escrever `src/types/types.generated.ts` com banner de auto-geração
  - Gerar hash SHA-256 em `scripts/types.hash`
- [ ] Suportar flag `--dry-run` para preview sem escrita
- [ ] Nomenclatura: remove prefixo `t_` + PascalCase
- [ ] Mapeamento de tipos NocoBase → TypeScript (string, integer, boolean, date, json, belongsTo, hasMany, belongsToMany)
- [ ] Tudo em único arquivo gerado (`typestypes.generated.ts`) para evitar dependências circulares
- [ ] Relações `belongsToMany`: gerar array do tipo alvo, sem gerar tipos para tabelas pivot
- [ ] Validação: `pnpm generate-types` executa com sucesso
- [ ] Validação: projeto compila sem erros (`pnpm build`)
- [ ] Validação: lint passa (`pnpm check`)

## Reference

- Documentação completa: `docs/types-generation-script.md`
- Utilitário `WithAppends`: `docs/integracao-api-client.md`

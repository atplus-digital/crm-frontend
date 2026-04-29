# Decisions - Rebuild Custom Requests

## 2026-04-24T22:08:15Z

- Arquitetura de 3 arquivos: registry.ts (manual), generated-registry.ts (gerado), merged.ts (unificação)
- Zod inference preservada sem `as` casts
- Error handling unificado em errors.ts
- Response typing por request key
- Template variables via buildTemplateContext()

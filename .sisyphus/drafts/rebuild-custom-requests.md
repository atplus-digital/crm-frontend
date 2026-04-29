---
title: Re-criação da Feature Custom Requests
date: 2026-04-24
status: draft
---

# Draft: Re-criação da Feature Custom Requests

## Requirements (confirmed)

- Excluir completamente `src/features/custom-requests/` existente
- Re-criar do zero com os melhores padrões identificados
- Manter compatibilidade com NocoBase customRequests API
- Suportar 164 custom requests da API
- Integrar com o sistema de geração automática (generate-custom-requests)

## Technical Decisions

- Seguir padrões do projeto (AGENTS.md, patterns de features)
- Usar Zod para validação de payloads
- Usar React Query para hooks
- Suportar template variables ({{currentRecord}}, {{currentUser}})
- URLs configuráveis via env vars
- Response typing por request key
- Error handling consistente e completo

## Research Findings

- 30+ issues identificados na feature atual
- 164 custom requests na API NocoBase
- 3 hardcoded no registry atual (com URLs diferentes das reais)
- Feature nunca foi usada em produção
- NocoBase plugin suporta template variables, headers, roles
- generate-types existe como referência de padrão

## Open Questions

- [ ] Manter schemas Zod específicos ou usar z.any() para todos?
- [ ] Suportar template variables no frontend ou só no backend?
- [ ] URLs por env var ou hardcoded?
- [ ] Gerar tipos de response automaticamente?

## Scope Boundaries

INCLUDE:

- Nova feature custom-requests completa
- Service layer com validação Zod
- Hooks React Query completos
- Error handling robusto
- Suporte a template variables
- Response typing
- Testes unitários completos
- Integração com generate-custom-requests

EXCLUDE:

- UI components (futuro)
- NocoBase UI schema integration (futuro)
- Dynamic registry (futuro)

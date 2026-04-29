<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-23 -->

# AGENTS.md — page-layout

<!-- AGENTS-GENERATED:START overview -->

## Overview

Layout de página reutilizável com cabeçalho, tabs sincronizadas em URL e composição de conteúdo por aba.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                          | Purpose                                                                 |
| ----------------------------- | ----------------------------------------------------------------------- |
| `page-layout.tsx`             | Ponto de exportação público do módulo (`PageLayout` e `PageTabContent`) |
| `page-layout-component.tsx`   | Implementação do componente `PageLayout` com header e tabs              |
| `page-tab-content.tsx`        | Implementação do componente `PageTabContent` para modo com/sem tabs     |
| `page-tab-content-context.ts` | Contexto para indicar se `PageLayout` está em modo tabulado             |
| `page-layout.types.ts`        | Tipos compartilhados do layout e conteúdo por aba                       |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Importações externas devem usar somente `#/components/page-layout/page-layout` para manter API estável.
- `PageLayout` concentra o provider de contexto; `PageTabContent` apenas consome o contexto e decide o wrapper (`TabsContent` ou `div`).
- Tipos do módulo devem ficar em `page-layout.types.ts` para evitar redefinições distribuídas.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                            | Reference file                          |
| ---------------------------------- | --------------------------------------- |
| Uso de `PageLayout` com tabs       | `src/pages/cs/vendas/vendas.tsx`        |
| Uso de `PageTabContent` em detalhe | `src/pages/cs/vendas/vendas-detail.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->

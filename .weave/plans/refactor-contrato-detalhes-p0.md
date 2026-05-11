# Plano: Refactor contrato-detalhes P0

> **Auto-generated:** 2026-05-11 | **Status:** DRAFT
> **Scope:** `src/features/cs/contratos/contrato-detalhes/`

## Objetivo

Corrigir 3 problemas P0:

1. `transferencia-titularidade-sheet.tsx` (839 linhas → ~200)
2. `troca-endereco-sheet.tsx` (380 linhas → ~200)
3. Hierarquia profunda demais (14 níveis → 9)

---

## Estrutura Atual

```
contrato-detalhes/
├── contratos-action-guards.ts
├── contrato-atendimentos-tab/
│   └── contrato-atendimentos-tab.tsx
├── contrato-detalhes-tab/
│   ├── contrato-detalhes-actions/
│   │   ├── contrato-detalhes-actions.tsx
│   │   ├── transferencia-titularidade-action/
│   │   │   └── transferencia-titularidade-sheet.tsx          ← 839 linhas
│   │   └── troca-endereco-action/
│   │       └── troca-endereco-sheet.tsx                       ← 380 linhas
│   ├── contrato-detalhes-tab.tsx                              ← 135 linhas
│   ├── contrato-info-card.tsx
│   ├── contrato-summary-card.tsx
│   ├── dados-cliente-card.tsx
│   ├── endereco-card.tsx
│   ├── faturas-table.tsx
│   ├── informacoes-adicionais-card.tsx
│   └── produtos-table.tsx
├── contrato-movel-tab/
│   └── contrato-movel-tab.tsx
├── contrato-negociacoes-tab/
│   ├── contrato-negociacoes-columns.tsx
│   └── contrato-negociacoes-tab.tsx
└── contrato-registros-tab/
    └── contrato-registros-tab.tsx
```

## Estrutura Proposta

```
contrato-detalhes/
├── contratos-action-guards.ts
├── tabs/
│   ├── detalhes/
│   │   ├── contrato-detalhes-tab.tsx
│   │   ├── contrato-info-card.tsx
│   │   ├── contrato-summary-card.tsx
│   │   ├── dados-cliente-card.tsx
│   │   ├── endereco-card.tsx
│   │   ├── faturas-table.tsx
│   │   ├── informacoes-adicionais-card.tsx
│   │   └── produtos-table.tsx
│   ├── actions/
│   │   ├── contrato-detalhes-actions.tsx
│   │   ├── transferencia-titularidade-sheet.tsx        ← refatorado (~120 linhas)
│   │   ├── transferencia-titularidade-cedente-section.tsx  ← NOVO
│   │   ├── transferencia-titularidade-cessionario-section.tsx ← NOVO
│   │   ├── transferencia-titularidade-contrato-section.tsx   ← NOVO
│   │   ├── troca-endereco-sheet.tsx                    ← refatorado (~180 linhas)
│   │   └── searchable-lookup.tsx                       ← NOVO (extraído)
│   ├── atendimentos/
│   │   └── contrato-atendimentos-tab.tsx
│   ├── movel/
│   │   └── contrato-movel-tab.tsx
│   ├── negociacoes/
│   │   ├── contrato-negociacoes-columns.tsx
│   │   └── contrato-negociacoes-tab.tsx
│   └── registros/
│       └── contrato-registros-tab.tsx
```

**Nível máximo:** 9 (antes 14)

---

## Fase 1 — Extrair sub-componentes dos sheets grandes

### Step 1.1: Extrair `SearchableLookup` para arquivo próprio

O componente `SearchableLookup` (linhas 70-176 de `transferencia-titularidade-sheet.tsx`) é genérico e reutilizável. Deve virar um arquivo próprio.

| Ação     | Detalhe                                                                |
| -------- | ---------------------------------------------------------------------- |
| Criar    | `contrato-detalhes/tabs/actions/searchable-lookup.tsx`                 |
| Conteúdo | `SearchableLookup` component + `SearchableLookupProps` type (genérico) |
| Export   | nomeado `export function SearchableLookup<T>(...)`                     |

> **Nota:** Não extraímos para `src/components/` agora para minimizar o escopo. Futuramente pode ser promovido a shared se houver reuso.

### Step 1.2: Extrair seção "Dados do Cedente"

| Ação       | Detalhe                                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Criar      | `contrato-detalhes/tabs/actions/transferencia-titularidade-cedente-section.tsx`                                                              |
| Conteúdo   | fieldset "DADOS DO CEDENTE" (linhas 405-475 do arquivo original)                                                                             |
| Props      | `{ cedenteNome, cedenteDoc, cedenteResponsavel, setCedenteResponsavel, cedenteTelefone, setCedenteTelefone, cedenteEmail, setCedenteEmail }` |
| Estimativa | ~80 linhas                                                                                                                                   |

### Step 1.3: Extrair seção "Dados do Cessionário"

| Ação       | Detalhe                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Criar      | `contrato-detalhes/tabs/actions/transferencia-titularidade-cessionario-section.tsx`                                                                                                                                                                                                                                                                                                                          |
| Conteúdo   | fieldset "DADOS DO CESSIONÁRIO" (linhas 480-678 do arquivo original)                                                                                                                                                                                                                                                                                                                                         |
| Inclui     | Tipo pessoa select, PF lookup, PJ lookup, credit badge, campos nome/doc/responsável/telefone/email                                                                                                                                                                                                                                                                                                           |
| Props      | `{ tipoPessoa, setTipoPessoa, selectedPF, pfSearch, pfLoading, pfResults, selectedPJ, pjSearch, pjLoading, pjResults, cessionarioNome, setCessionarioNome, cessionarioDoc, setCessionarioDoc, cessionarioResponsavel, setCessionarioResponsavel, cessionarioTelefone, setCessionarioTelefone, cessionarioEmail, setCessionarioEmail, onSearchPF, onSearchPJ, onSelectPF, onClearPF, onSelectPJ, onClearPJ }` |
| Estimativa | ~200 linhas (maior seção — considerar sub-dividir PF/PJ lookup se necessário)                                                                                                                                                                                                                                                                                                                                |

### Step 1.4: Extrair seção "Dados do Contrato"

| Ação       | Detalhe                                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Criar      | `contrato-detalhes/tabs/actions/transferencia-titularidade-contrato-section.tsx`                                                                                                                 |
| Conteúdo   | fieldset "DADOS DO CONTRATO" (linhas 683-803 do arquivo original)                                                                                                                                |
| Props      | `{ contratoId, cep, setCep, endereco, setEndereco, numero, setNumero, bairro, setBairro, complemento, setComplemento, cidade, setCidade, estado, setEstado, complementoOptions, estadoOptions }` |
| Estimativa | ~120 linhas                                                                                                                                                                                      |

### Step 1.5: Refatorar `transferencia-titularidade-sheet.tsx` (shell)

Após extrações, o sheet principal fica como orchestrator:

| Ação       | Detalhe                                                                       |
| ---------- | ----------------------------------------------------------------------------- |
| Modificar  | `transferencia-titularidade-sheet.tsx`                                        |
| Remover    | `SearchableLookup`, 3 seções fieldset inline                                  |
| Importar   | `SearchableLookup`, `CedenteSection`, `CessionarioSection`, `ContratoSection` |
| Manter     | Props, state, effects (debounce), submit handler, handleClose, render shell   |
| Estimativa | ~120 linhas                                                                   |

**Resultado esperado:**

- `transferencia-titularidade-sheet.tsx` → ~120 linhas
- `transferencia-titularidade-cedente-section.tsx` → ~80 linhas
- `transferencia-titularidade-cessionario-section.tsx` → ~200 linhas
- `transferencia-titularidade-contrato-section.tsx` → ~120 linhas
- `searchable-lookup.tsx` → ~110 linhas

### Step 1.6: Extrair formulário de endereço da `troca-endereco-sheet.tsx`

O sheet de troca de endereço (380 linhas) tem 2 seções fieldset:

| Ação       | Detalhe                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------- |
| Criar      | `contrato-detalhes/tabs/actions/troca-endereco-form-fields.tsx`                               |
| Conteúdo   | 2 fieldsets: "PREENCHA ABAIXO O NOVO ENDEREÇO" (linhas 176-310) e "COBRANÇA" (linhas 315-347) |
| Props      | Todos os campos do form + handlers + taxa options + numeroError                               |
| Estimativa | ~180 linhas                                                                                   |

Após extração, o sheet principal fica:
| Ação | Detalhe |
|------|---------|
| Modificar | `troca-endereco-sheet.tsx` |
| Remover | 2 fieldsets inline |
| Importar | `TrocaEnderecoFormFields` |
| Manter | Props, state, handlers, submit, handleClose, render shell |
| Estimativa | ~150 linhas |

---

## Fase 2 — Reestruturar diretórios (achatar hierarquia)

### Mapeamento de moves

| #   | Path Original (relativo a `contrato-detalhes/`)                                                                          | Path Novo (relativo a `contrato-detalhes/`)                       |
| --- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 1   | `contrato-detalhes-tab/contrato-detalhes-tab.tsx`                                                                        | `tabs/detalhes/contrato-detalhes-tab.tsx`                         |
| 2   | `contrato-detalhes-tab/contrato-info-card.tsx`                                                                           | `tabs/detalhes/contrato-info-card.tsx`                            |
| 3   | `contrato-detalhes-tab/contrato-summary-card.tsx`                                                                        | `tabs/detalhes/contrato-summary-card.tsx`                         |
| 4   | `contrato-detalhes-tab/dados-cliente-card.tsx`                                                                           | `tabs/detalhes/dados-cliente-card.tsx`                            |
| 5   | `contrato-detalhes-tab/endereco-card.tsx`                                                                                | `tabs/detalhes/endereco-card.tsx`                                 |
| 6   | `contrato-detalhes-tab/faturas-table.tsx`                                                                                | `tabs/detalhes/faturas-table.tsx`                                 |
| 7   | `contrato-detalhes-tab/informacoes-adicionais-card.tsx`                                                                  | `tabs/detalhes/informacoes-adicionais-card.tsx`                   |
| 8   | `contrato-detalhes-tab/produtos-table.tsx`                                                                               | `tabs/detalhes/produtos-table.tsx`                                |
| 9   | `contrato-detalhes-tab/contrato-detalhes-actions/contrato-detalhes-actions.tsx`                                          | `tabs/actions/contrato-detalhes-actions.tsx`                      |
| 10  | `contrato-detalhes-tab/contrato-detalhes-actions/transferencia-titularidade-action/transferencia-titularidade-sheet.tsx` | `tabs/actions/transferencia-titularidade-sheet.tsx`               |
| 11  | `contrato-detalhes-tab/contrato-detalhes-actions/troca-endereco-action/troca-endereco-sheet.tsx`                         | `tabs/actions/troca-endereco-sheet.tsx`                           |
| 12  | `contrato-atendimentos-tab/contrato-atendimentos-tab.tsx`                                                                | `tabs/atendimentos/contrato-atendimentos-tab.tsx`                 |
| 13  | `contrato-movel-tab/contrato-movel-tab.tsx`                                                                              | `tabs/movel/contrato-movel-tab.tsx`                               |
| 14  | `contrato-negociacoes-tab/contrato-negociacoes-columns.tsx`                                                              | `tabs/negociacoes/contrato-negociacoes-columns.tsx`               |
| 15  | `contrato-negociacoes-tab/contrato-negociacoes-tab.tsx`                                                                  | `tabs/negociacoes/contrato-negociacoes-tab.tsx`                   |
| 16  | `contrato-registros-tab/contrato-registros-tab.tsx`                                                                      | `tabs/registros/contrato-registros-tab.tsx`                       |
| 17  | _(novo)_                                                                                                                 | `tabs/actions/searchable-lookup.tsx`                              |
| 18  | _(novo)_                                                                                                                 | `tabs/actions/transferencia-titularidade-cedente-section.tsx`     |
| 19  | _(novo)_                                                                                                                 | `tabs/actions/transferencia-titularidade-cessionario-section.tsx` |
| 20  | _(novo)_                                                                                                                 | `tabs/actions/transferencia-titularidade-contrato-section.tsx`    |
| 21  | _(novo)_                                                                                                                 | `tabs/actions/troca-endereco-form-fields.tsx`                     |

**`contratos-action-guards.ts`** permanece na raiz de `contrato-detalhes/` (é compartilhado).

### Step 2.1: Criar estrutura de diretórios

```bash
mkdir -p contrato-detalhes/tabs/detalhes
mkdir -p contrato-detalhes/tabs/actions
mkdir -p contrato-detalhes/tabs/atendimentos
mkdir -p contrato-detalhes/tabs/movel
mkdir -p contrato-detalhes/tabs/negociacoes
mkdir -p contrato-detalhes/tabs/registros
```

### Step 2.2: Mover arquivos existentes (git mv)

Executar na ordem da tabela acima, usando `git mv` para preservar histórico.

### Step 2.3: Criar novos arquivos extraídos

Seguindo os steps 1.1 a 1.6 (dados acima).

### Step 2.4: Limpar diretórios vazios antigos

```bash
rmdir contrato-detalhes/contrato-detalhes-tab/contrato-detalhes-actions/transferencia-titularidade-action/
rmdir contrato-detalhes/contrato-detalhes-tab/contrato-detalhes-actions/troca-endereco-action/
rmdir contrato-detalhes/contrato-detalhes-tab/contrato-detalhes-actions/
rmdir contrato-detalhes/contrato-detalhes-tab/
rmdir contrato-detalhes/contrato-atendimentos-tab/
rmdir contrato-detalhes/contrato-movel-tab/
rmdir contrato-detalhes/contrato-negociacoes-tab/
rmdir contrato-detalhes/contrato-registros-tab/
```

---

## Fase 3 — Atualizar imports

### Quem importa desses arquivos?

#### Imports INTERNOS (dentro de `contrato-detalhes/`)

Arquivos que importam uns dos outros dentro do diretório. Esses terão os paths atualizados automaticamente com os moves.

| Arquivo                         | Importa de                                                                                                             |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `contrato-detalhes-tab.tsx`     | `./contrato-detalhes-actions/contrato-detalhes-actions`                                                                |
| `contrato-detalhes-actions.tsx` | `./transferencia-titularidade-action/transferencia-titularidade-sheet`, `./troca-endereco-action/troca-endereco-sheet` |

Após reestruturação:
| Arquivo | Importa de (novo) |
|---------|-------------------|
| `tabs/detalhes/contrato-detalhes-tab.tsx` | `../actions/contrato-detalhes-actions` |
| `tabs/actions/contrato-detalhes-actions.tsx` | `./transferencia-titularidade-sheet`, `./troca-endereco-sheet` |

#### Imports EXTERNOS (de fora de `contrato-detalhes/`)

Buscar e atualizar todos os arquivos que importam de `contrato-detalhes/`:

```
# Arquivos que referenciam contrato-detalhes
src/pages/cs/contratos/contrato-detail-tabs/*.tsx
src/pages/cs/contratos/contrato-detail.tsx
```

**Mapeamento de paths antigos → novos para imports externos:**

| Import path antigo                                                            | Import path novo                                                      |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `.../contrato-detalhes/contrato-atendimentos-tab/contrato-atendimentos-tab`   | `.../contrato-detalhes/tabs/atendimentos/contrato-atendimentos-tab`   |
| `.../contrato-detalhes/contrato-detalhes-tab/contrato-detalhes-tab`           | `.../contrato-detalhes/tabs/detalhes/contrato-detalhes-tab`           |
| `.../contrato-detalhes/contrato-movel-tab/contrato-movel-tab`                 | `.../contrato-detalhes/tabs/movel/contrato-movel-tab`                 |
| `.../contrato-detalhes/contrato-negociacoes-tab/contrato-negociacoes-tab`     | `.../contrato-detalhes/tabs/negociacoes/contrato-negociacoes-tab`     |
| `.../contrato-detalhes/contrato-negociacoes-tab/contrato-negociacoes-columns` | `.../contrato-detalhes/tabs/negociacoes/contrato-negociacoes-columns` |
| `.../contrato-detalhes/contrato-registros-tab/contrato-registros-tab`         | `.../contrato-detalhes/tabs/registros/contrato-registros-tab`         |
| `.../contrato-detalhes/contratos-action-guards`                               | _(sem mudança — permanece na raiz)_                                   |

---

## Fase 4 — Verificação

### Step 4.1: Typecheck

```bash
pnpm typecheck
```

Deve passar sem erros. Cada import path quebrado será capturado aqui.

### Step 4.2: Build

```bash
pnpm build
```

Confirma que não há issues de bundling.

### Step 4.3: Lint

```bash
pnpm biome:fix
```

### Step 4.4: Testes (se existirem para a área)

```bash
pnpm test
```

---

## Ordem de Execução (minimiza breakage)

1. **Criar diretórios novos** (sem deletar nada antigo)
2. **Criar arquivos novos** extraídos (searchable-lookup, sections, form-fields)
3. **Modificar `transferencia-titularidade-sheet.tsx`** para importar dos novos arquivos
4. **Modificar `troca-endereco-sheet.tsx`** para importar dos novos arquivos
5. **`git mv`** dos arquivos existentes para os novos paths
6. **Atualizar imports internos** (detalhes-tab → actions, etc.)
7. **Atualizar imports externos** (pages/)
8. **Deletar diretórios vazios antigos**
9. **Typecheck + Build + Lint**
10. **Commit**

> **Dica:** Se preferir minimizar risco, executar Fase 1 (extração de componentes) primeiro com commit separado, depois Fase 2 (reestruturação de diretórios) com outro commit.

---

## Commits Sugeridos

| Fase     | Mensagem                                                                        |
| -------- | ------------------------------------------------------------------------------- |
| Fase 1   | `refactor(contrato-detalhes): extract sheet sub-components for maintainability` |
| Fase 2+3 | `refactor(contrato-detalhes): flatten directory hierarchy from 14 to 9 levels`  |

---

## Riscos

| Risco                                      | Mitigação                                                          |
| ------------------------------------------ | ------------------------------------------------------------------ |
| Import paths quebrados                     | `pnpm typecheck` após cada fase                                    |
| State compartilhado entre seções extraídas | Props drilling explícito (sem context) — mesma abordagem atual     |
| Quebrar barrel exports                     | Nenhum barrel export existe nesta área (import direto por arquivo) |
| AGENTS.md references quebradas             | Atualizar `src/features/cs/contratos/AGENTS.md` filemap ao final   |
| Esquecer algum import externo              | `grep -r "contrato-detalhes-tab" src/` após moves                  |

---

## Estimativa de Esforço

| Fase                             | Tempo estimado |
| -------------------------------- | -------------- |
| Fase 1 (extração de componentes) | ~30 min        |
| Fase 2 (reestruturação dirs)     | ~20 min        |
| Fase 3 (atualizar imports)       | ~15 min        |
| Fase 4 (verificação)             | ~10 min        |
| **Total**                        | **~75 min**    |

# Memória de Sessão - IXC Docs

**Última atualização:** 2026-04-15  
**Entradas:** 5/20  
**Skill:** ixc-docs

---

## Contratos de Clientes | Score: 1 | Última: 2026-04-15

- **URL:** `https://wikiapiprovedor.ixcsoft.com.br/webservice/v1/contrato`
- **O que contém:** Endpoint POST para listar/buscar contratos com filtros
- **Exemplo:** Headers: `ixcsoft: listar`, `Authorization: Basic <token>`. Params: `qtype: "contrato.cliente_id"`, `query: "123"`, `oper: "="`, `page: "1"`, `rp: "20"`

---

## Clientes Inadimplentes | Score: 1 | Última: 2026-04-15

- **URL:** `https://wikiapiprovedor.ixcsoft.com.br/financeiro/contas-a-receber`
- **O que contém:** Endpoint GET para contas a receber com filtro de inadimplência
- **Exemplo:** `GET /api/v1/financeiro/contas-a-receber` com filtro `pagamento_data IS NULL` + `data_vencimento <= hoje`

---

## Erro 401 - Autenticação | Score: 1 | Última: 2026-04-15

- **URL:** `https://wikiapiprovedor.ixcsoft.com.br/` (seção "Erro 401 Authorization Required")
- **O que contém:** Causa e solução para erro 401 - token ausente ou inválido
- **Exemplo:** Gerar token em Configurações > Usuários > Webservice. Header: `Authorization: Token <seu-token>`

---

## Ordem de Serviço (OS) | Score: 2 | Última: 2026-04-15

- **URL:** `https://wikiapiprovedor.ixcsoft.com.br/webservice/v1/su_oss_chamado`
- **O que contém:** Endpoint POST para criar ordem de serviço
- **Exemplo:** Campos obrigatórios: `assunto`, `cliente`, `filial`, `origem_endereco`, `prioridade`, `setor`, `status`. Content-Type: `application/x-www-form-urlencoded`

---

## Status de ONU | Score: 1 | Última: 2026-04-15

- **URL:** `https://wikiapiprovedor.ixcsoft.com.br/clientes-fibra`
- **O que contém:** Endpoint GET para consultar status de ONU/Cliente Fibra
- **Exemplo:** `GET /clientes-fibra`. Campos: `status_onu` (A=autorizada, D=desautorizada), `status_potencia` (Regular/Irregular/Indefinido)

---

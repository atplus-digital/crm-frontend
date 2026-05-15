# Labels - IXC Soft

> Análise dos campos sem label definido nas collections IXC (d_db_ixcsoft)

## Visão Geral

Os labels são extraídos da API IXC (`uiSchema.title` ou similar). Quando um campo não tem label definido na fonte, o gerador usa o próprio nome do campo como label — isso indica que o campo precisa ter seu label configurado no IXC/NocoBase.

## Resumo por Coleção

| Coleção                                             | Campos com Label | Campos sem Label |
| --------------------------------------------------- | ---------------- | ---------------- |
| [cidade](./cidade.md)                               | 1                | 14               |
| [cliente](./cliente.md)                             | 0                | 223              |
| [cliente-contrato](./cliente-contrato.md)           | 10               | 181              |
| [fn-areceber](./fn-areceber.md)                     | 3                | 107              |
| [linha-mvno](./linha-mvno.md)                       | 0                | 36               |
| [radusuarios](./radusuarios.md)                     | 3                | 121              |
| [su-ticket](./su-ticket.md)                         | 6                | 48               |
| [uf](./uf.md)                                       | 0                | 10               |
| [vd-contratos-produtos](./vd-contratos-produtos.md) | 1                | 32               |
| **TOTAL**                                           | **24**           | **772**          |

## Nota

> Estes campos precisam ter seus labels configurados na fonte de dados (IXC/NocoBase). O gerador apenas consome o que vem da API — não é possível "corrigir" labels manualmente no código gerado.

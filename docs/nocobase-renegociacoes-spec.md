# Especificação: Tela de Renegociações (Negociações)

**Fonte:** NocoBase CRM AT+  
**Data da extração:** 2026-04-17  
**URLs analisadas:**

- Lista: https://crm.atplus.cloud/admin/yuxh11j8f6y
- Detalhes: https://crm.atplus.cloud/admin/yuxh11j8f6y/tabs/pm3go6qvmny/popups/9v35thr3un7/puid/r593jledchf/filterbytk/7297

---

## Visão Geral

A tela de "Renegociações" é uma visualização filtrada da collection **`t_negociacoes`**, onde o campo `f_motivo` diferencia os tipos de negociação.

**Filtro aplicado na tela Renegociações:**

```json
{
  "f_motivo": {
    "$in": ["M", "D", "U", "N", "R", "T", "L"]
  }
}
```

**Motivos incluídos:**

- `M` - Mudança de Endereço
- `D` - Downgrade
- `U` - Upgrade
- `N` - Renegociação
- `R` - Reativação
- `T` - Mudança de Tecnologia
- `L` - Mudança de Titularidade

---

## Collection Principal: `t_negociacoes`

### Campos Principais

#### Identificação

| Campo            | Tipo   | Interface | Descrição               |
| ---------------- | ------ | --------- | ----------------------- |
| `id`             | bigInt | integer   | ID (PK, auto-increment) |
| `f_titulo`       | string | input     | Título                  |
| `f_contrato_ixc` | string | input     | Contrato IXC            |
| `f_motivo`       | string | select    | Motivo da Negociação    |
| `f_status`       | string | select    | Status                  |
| `f_substatus`    | string | select    | Substatus               |
| `f_ordenacao`    | sort   | sort      | Ordenação               |

#### Tipo de Pessoa

| Campo                          | Tipo      | Interface | Descrição                      |
| ------------------------------ | --------- | --------- | ------------------------------ |
| `f_tipo_pessoa`                | string    | select    | Tipo de Pessoa (PF/PJ)         |
| `f_pessoa`                     | belongsTo | m2o       | Pessoa (→ t_pessoas)           |
| `f_negociacao_pessoa_juridica` | belongsTo | m2o       | Pessoa Jurídica (→ t_empresas) |
| `f_nome_razao`                 | string    | input     | Nome / Razão Social            |
| `f_nome_fantasia`              | string    | input     | Nome Fantasia                  |
| `f_cpf_cnpj`                   | string    | input     | CPF/CNPJ                       |
| `f_rg_ie`                      | string    | input     | RG / IE                        |

#### Contato

| Campo              | Tipo   | Interface | Descrição             |
| ------------------ | ------ | --------- | --------------------- |
| `f_telefone`       | string | phone     | Telefone de Contato   |
| `f_telefone_2`     | string | phone     | Telefone de Contato 2 |
| `f_email_cobranca` | string | email     | E-mail de cobrança    |

#### Endereço de Instalação

| Campo                    | Tipo   | Interface | Descrição           |
| ------------------------ | ------ | --------- | ------------------- |
| `f_cep`                  | string | input     | CEP                 |
| `f_endereco`             | string | input     | Endereço            |
| `f_endereco_numero`      | string | input     | Numero              |
| `f_endereco_complemento` | string | input     | Complemento         |
| `f_bairro`               | string | input     | Bairro              |
| `f_endereco_cidade`      | string | input     | Cidade              |
| `f_endereco_estado`      | string | input     | Estado              |
| `f_endereco_referencia`  | string | input     | Ponto de Referência |
| `f_nome_edificio`        | string | input     | Nome do Edificio    |
| `f_apartamento`          | string | input     | Apartamento         |
| `f_bloco_quadra`         | string | input     | Bloco / Quadra      |

#### Endereço de Cobrança

| Campo                    | Tipo   | Interface | Descrição                                      |
| ------------------------ | ------ | --------- | ---------------------------------------------- |
| `f_endereco_cobranca`    | string | select    | Endereço de Cobrança Diferente? (0=Não, 1=Sim) |
| `f_endereco_de_cobranca` | string | input     | Endereço de Cobrança                           |
| `f_cep_cobranca`         | string | input     | CEP de Cobrança                                |
| `f_numero_cobranca`      | string | input     | Numero de Cobrança                             |
| `f_complemento_cobranca` | string | input     | Complemento de Cobrança                        |
| `f_bairro_cobranca`      | string | input     | Bairro de Cobranca                             |
| `f_cidade_cobranca`      | string | input     | Cidade de Cobrança                             |
| `f_estado_cobranca`      | string | input     | Estado de Cobrança                             |

#### Pacote e Serviços

| Campo                  | Tipo          | Interface | Descrição                        |
| ---------------------- | ------------- | --------- | -------------------------------- |
| `f_pacote`             | belongsTo     | m2o       | Pacote (→ t_pacotes)             |
| `f_fk_pacote`          | bigInt        | integer   | Foreign Key Pacote               |
| `f_pacotes_adicionais` | belongsToMany | m2m       | Pacotes Adicionais (→ t_pacotes) |
| `f_scm`                | bigInt        | integer   | Possui SCM?                      |
| `f_smp`                | bigInt        | integer   | Possui SMP?                      |
| `f_stfc`               | bigInt        | integer   | Possui STFC?                     |
| `f_sva`                | bigInt        | integer   | Possui SVA                       |

#### Valores Financeiros

| Campo                         | Tipo    | Interface | Descrição                       |
| ----------------------------- | ------- | --------- | ------------------------------- |
| `f_valor_mensal`              | double  | number    | Valor Mensal                    |
| `f_valor_mensal_antigo`       | double  | number    | Valor Mensal Antigo             |
| `f_valor_mensal_sem_desconto` | double  | number    | Valor Mensal sem Desconto       |
| `f_valor_instalacao`          | double  | number    | Valor Instalação                |
| `f_valor_devedor`             | double  | number    | Valor Devedor                   |
| `f_multa_juros`               | double  | number    | Multa e Juros                   |
| `f_entrada_saldo_devedor`     | double  | number    | Entrada                         |
| `f_valor_devedor_total`       | formula | formula   | Valor Devedor Total             |
| `f_valor_da_parcela`          | formula | formula   | Valor da Parcela                |
| `f_parcelas_mensais`          | bigInt  | integer   | Parcelas Mensais                |
| `f_valor_beneficios`          | double  | number    | Valor Benefícios                |
| `f_incremento`                | formula | formula   | Incremento                      |
| `f_ire_multa_mes_faltante`    | double  | number    | Valor da Multa por mês faltante |

#### Fidelidade e Vencimento

| Campo               | Tipo   | Interface | Descrição                                 |
| ------------------- | ------ | --------- | ----------------------------------------- |
| `f_fidelidade`      | string | select    | Fidelidade (0, 12, 24, 36, 48, 60 meses)  |
| `f_data_vencimento` | string | select    | Data de Vencimento (1, 5, 10, 15, 20, 25) |
| `f_periodo_final`   | string | input     | Período Final                             |

#### Cupom de Desconto

| Campo                 | Tipo      | Interface | Descrição                               |
| --------------------- | --------- | --------- | --------------------------------------- |
| `f_cupom_desconto`    | belongsTo | m2o       | Cupom de desconto (→ t_cupons_desconto) |
| `f_fk_cupom_desconto` | bigInt    | integer   | Foreign Key Cupom                       |

#### Vendedor

| Campo                      | Tipo      | Interface | Descrição            |
| -------------------------- | --------- | --------- | -------------------- |
| `f_vendedor`               | belongsTo | m2o       | Vendedor (→ users)   |
| `f_fk_negociacao_vendedor` | bigInt    | integer   | Foreign Key Vendedor |

#### Contratos e Itens

| Campo                   | Tipo    | Interface | Descrição                                |
| ----------------------- | ------- | --------- | ---------------------------------------- |
| `f_negociacao_contrato` | hasMany | o2m       | Contrato (→ t_contratos)                 |
| `f_itens_negociacao`    | hasMany | o2m       | Itens Negociação (→ t_negociacoes_itens) |
| `f_fk_contrato_ixc`     | bigInt  | integer   | Foreign Key Contrato IXC                 |
| `f_ixc_tipo_cobranca`   | string  | input     | ID Tipo de Cobrança IXC                  |

#### Comentários e Anexos

| Campo           | Tipo    | Interface | Descrição                                 |
| --------------- | ------- | --------- | ----------------------------------------- |
| `f_comentarios` | hasMany | o2m       | Comentários (→ t_negociacoes_comentarios) |
| `f_anexos`      | hasMany | o2m       | Anexos (→ t_anexos_negociacoes)           |

#### Auditoria e Pontos de Atenção

| Campo                | Tipo   | Interface      | Descrição                     |
| -------------------- | ------ | -------------- | ----------------------------- |
| `f_pontos_atencao`   | string | select         | Pontos de Atenção (0-6)       |
| `f_motivo_pontos`    | array  | multipleSelect | Motivo dos Pontos             |
| `f_confissao_divida` | string | select         | Confissão de Dívida (Sim/Não) |

#### Assinatura Digital

| Campo                          | Tipo    | Interface | Descrição                       |
| ------------------------------ | ------- | --------- | ------------------------------- |
| `f_zapsign`                    | boolean | checkbox  | ZapSign?                        |
| `f_assinatura_gov`             | boolean | checkbox  | Assinatura via GOV?             |
| `f_link_assinatura`            | text    | textarea  | Link para assinatura            |
| `f_responsavel_assinatura`     | string  | input     | Responsável pela assinatura     |
| `f_cpf_responsavel_assinatura` | string  | input     | CPF Responsavel pela assinatura |

#### QualiRun (OE)

| Campo                       | Tipo    | Interface | Descrição                                                        |
| --------------------------- | ------- | --------- | ---------------------------------------------------------------- |
| `f_fk_oe_qualirun`          | hasMany | o2m       | OE - QualiRun (→ t_oe_qualirun)                                  |
| `f_qualirun_assinatura_gov` | hasMany | o2m       | Arquivos QualiRun - Assinatura GOV (→ t_qualirun_assinatura_gov) |

#### Sistema

| Campo       | Tipo      | Interface | Descrição                 |
| ----------- | --------- | --------- | ------------------------- |
| `createdAt` | date      | createdAt | Created at                |
| `createdBy` | belongsTo | createdBy | Created by (→ users)      |
| `updatedAt` | date      | updatedAt | Last updated at           |
| `updatedBy` | belongsTo | updatedBy | Last updated by (→ users) |

---

## Enums e Opções

### f_motivo (Motivo da Negociação)

| Valor | Label                   | Cor       |
| ----- | ----------------------- | --------- |
| `I`   | Venda Nova              | blue      |
| `M`   | Mudança de Endereço     | gold/lime |
| `D`   | Downgrade               | red       |
| `U`   | Upgrade                 | geekblue  |
| `N`   | Renegociação            | gold      |
| `R`   | Reativação              | cyan      |
| `T`   | Mudança de Tecnologia   | lime      |
| `L`   | Mudança de Titularidade | lime      |
| `S`   | Segunda Contratação     | blue      |
| `P`   | Proposta                | volcano   |

### f_status (Status)

| Valor | Label      | Cor      |
| ----- | ---------- | -------- |
| `1`   | Novo       | purple   |
| `2`   | Negociando | geekblue |
| `3`   | Assinatura | gold     |
| `4`   | Auditoria  | orange   |
| `5`   | Concluído  | green    |
| `6`   | Arquivado  | default  |

### f_substatus (Substatus)

| Valor | Label                                            | Cor    |
| ----- | ------------------------------------------------ | ------ |
| `1`   | NA                                               | red    |
| `2`   | AGUARDANDO - Assinatura do contrato pelo cliente | gold   |
| `3`   | AGUARDANDO - Auditoria                           | purple |
| `4`   | APROVADO - Aguardando inserção no IXC            | cyan   |
| `5`   | REPROVADO - Divergência de Dados                 | red    |
| `6`   | REPROVADO - Fraude                               | red    |
| `7`   | REPROVADO - Análise de Crédito                   | red    |
| `8`   | APROVADO - Erro na integração com o IXC          | red    |
| `9`   | APROVADO - Concluído                             | green  |
| `10`  | PERDIDO                                          | red    |
| `11`  | APROVADO - Aguardando atualização no IXC         | cyan   |
| `12`  | REPROVADO - Financeiro em Atraso                 | red    |
| `13`  | EM STANDBY                                       | orange |

### f_tipo_pessoa (Tipo de Pessoa)

| Valor | Label           |
| ----- | --------------- |
| `PF`  | Pessoa Física   |
| `PJ`  | Pessoa Jurídica |

### f_fidelidade (Fidelidade)

| Valor | Label    |
| ----- | -------- |
| `0`   | 0 Meses  |
| `12`  | 12 Meses |
| `24`  | 24 Meses |
| `36`  | 36 Meses |
| `48`  | 48 Meses |
| `60`  | 60 Meses |

### f_data_vencimento (Data de Vencimento)

| Valor | Label  |
| ----- | ------ |
| `1`   | Dia 01 |
| `5`   | Dia 05 |
| `10`  | Dia 10 |
| `15`  | Dia 15 |
| `20`  | Dia 20 |
| `25`  | Dia 25 |

### f_pontos_atencao (Pontos de Atenção)

| Valor | Label    | Cor    |
| ----- | -------- | ------ |
| `0`   | 0 Pontos | green  |
| `1`   | 1 Ponto  | orange |
| `2`   | 2 Pontos | orange |
| `3`   | 3 Pontos | red    |
| `4`   | 4 Pontos | red    |
| `5`   | 5 Pontos | red    |
| `6`   | 6 Pontos | red    |

### f_motivo_pontos (Motivo dos Pontos)

| Valor          | Label                        | Cor     |
| -------------- | ---------------------------- | ------- |
| `cep`          | CEP duplicado                | volcano |
| `endereco`     | Endereço duplicado           | volcano |
| `numero`       | Número duplicado             | volcano |
| `telefone`     | Telefone duplicado           | volcano |
| `telefone-adc` | Telefone adicional duplicado | volcano |
| `email`        | E-mail duplicado             | volcano |

### f_endereco_cobranca (Endereço de Cobrança Diferente?)

| Valor | Label | Cor   |
| ----- | ----- | ----- |
| `0`   | Não   | red   |
| `1`   | Sim   | green |

### f_confissao_divida (Confissão de Dívida)

| Valor | Label |
| ----- | ----- |
| `Nao` | Nao   |
| `Sim` | Sim   |

---

## Collections Relacionadas

### Principais (usadas diretamente na tela)

| Collection          | Título             | Campos | Relação                                    |
| ------------------- | ------------------ | ------ | ------------------------------------------ |
| `t_pessoas`         | Pessoas (PF)       | 14     | f_pessoa (m2o)                             |
| `t_empresas`        | Pessoas (PJ)       | 17     | f_negociacao_pessoa_juridica (m2o)         |
| `t_pacotes`         | Pacotes            | 18     | f_pacote (m2o), f_pacotes_adicionais (m2m) |
| `t_cupons_desconto` | Cupons de Desconto | 24     | f_cupom_desconto (m2o)                     |
| `users`             | Users              | 27     | f_vendedor (m2o), createdBy, updatedBy     |
| `t_contratos`       | Contratos          | 20     | f_negociacao_contrato (o2m)                |

### Secundárias (detalhes/anexos)

| Collection                  | Título                             | Campos | Relação                         |
| --------------------------- | ---------------------------------- | ------ | ------------------------------- |
| `t_negociacoes_comentarios` | Comentários Negociações            | 11     | f_comentarios (o2m)             |
| `t_anexos_negociacoes`      | Anexos Negociações                 | 19     | f_anexos (o2m)                  |
| `t_negociacoes_itens`       | Itens da Negociação                | 19     | f_itens_negociacao (o2m)        |
| `t_oe_qualirun`             | OE - QualiRun                      | 13     | f_fk_oe_qualirun (o2m)          |
| `t_qualirun_assinatura_gov` | Arquivos QualiRun - Assinatura GOV | 19     | f_qualirun_assinatura_gov (o2m) |

---

## Estrutura da UI

### Tela de Lista (Renegociações)

**Views disponíveis:**

1. **Kanban (Minhas)** - Visualização kanban filtrada por vendedor atual
2. **Lista (Todas)** - Visualização em tabela com todas as negociações

**Filtros aplicados:**

```json
{
  "$and": [
    {
      "$and": [
        { "createdAt": { "$dateAfter": "2026-01-01" } },
        { "f_status": { "$in": ["1", "2", "3", "4"] } }
      ]
    },
    {
      "$and": [
        { "f_motivo": { "$in": ["M", "D", "U", "N", "R", "T", "L"] } },
        { "f_vendedor": { "id": { "$eq": "{{user.id}}" } } }
      ]
    }
  ]
}
```

**Colunas visíveis na lista:** (a definir baseado no screenshot)

### Tela de Detalhes

**Abas:**

1. **Detalhes** - Formulário completo com todos os campos da negociação
2. **Itens da Negociação** - Lista de itens (t_negociacoes_itens)
3. **Anexos** - Lista de anexos (t_anexos_negociacoes)
4. **Contrato** - Contrato gerado (t_contratos)

**Layout do formulário:**

- Organizado em seções/cards
- Campos agrupados por contexto (dados pessoais, endereço, financeiro, etc.)
- Campos calculados (fórmulas) em modo read-only
- Relações (m2o, o2m, m2m) com campos de associação

---

## Fórmulas

### f_valor_devedor_total

```
({f_valor_devedor} + {f_multa_juros}) - {f_entrada_saldo_devedor}
```

### f_valor_da_parcela

```
(({f_valor_devedor} + {f_multa_juros}) - {f_entrada_saldo_devedor}) / {f_parcelas_mensais}
```

### f_Incremento

```
max({f_valor_mensal} - {f_valor_mensal_antigo}, 0)
```

---

## Validações

### f_telefone

- Min length: 10
- Max length: 11

### f_telefone_2

- Min length: 10
- Max length: 11

### f_estado_cobranca

- Min length: 2
- Max length: 2
- Exact length: 2

---

## API Endpoints

### Listar negociações (com filtro Renegociações)

```
GET /api/t_negociacoes:list?paginate=false&sort[]=f_ordenacao&page=1&filter={f_motivo: {$in: ["M","D","U","N","R","T","L"]}}
Authorization: Bearer {token}
x-locale: pt-BR
```

### Obter detalhes de uma negociação

```
GET /api/t_negociacoes:list?filter={"id": {"$eq": 7297}}&appends[]=f_pessoa,f_negociacao_pessoa_juridica,f_pacote,f_vendedor
Authorization: Bearer {token}
x-locale: pt-BR
```

### Metadados da collection

```
POST /api/collections:listMeta
Authorization: Bearer {token}
x-locale: pt-BR
```

---

## Token de Autenticação

**URL da API:** `https://crm.atplus.cloud/api`

**Token Admin:**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcwLCJyb2xlTmFtZSI6ImFkbWluIiwiaWF0IjoxNzc2MTg3MDY5LCJleHAiOjE3NzY3OTE4Njl9.QR0XVbRSpBarApYIljwDqIqNk1dFy_K1f5e7HG9ISYA
```

**Token Readonly:**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcwLCJyb2xlTmFtZSI6Im1lbWJlciIsImlhdCI6MTc3NTU5MDY1MywiZXhwIjoxNzc4MTgyNjUzfQ.KpCjwCVQlMz0hErlOJilPipkOt2pUg0UUx3BdAj3kOE
```

---

## Requisitos para Replicação

### Collections necessárias no NocoBase:

1. **t_negociacoes** (principal)
2. **t_pessoas** (PF)
3. **t_empresas** (PJ)
4. **t_pacotes**
5. **t_cupons_desconto**
6. **t_contratos**
7. **t_negociacoes_comentarios**
8. **t_anexos_negociacoes**
9. **t_negociacoes_itens**
10. **t_oe_qualirun**
11. **t_qualirun_assinatura_gov**
12. **users** (nativa do NocoBase)

### Views necessárias:

1. **Lista de Renegociações**
   - Filtro: `f_motivo IN ('M','D','U','N','R','T','L')`
   - Ordenação: `f_ordenacao`
   - Views: Kanban + Tabela

2. **Detalhes da Negociação**
   - Formulário completo
   - Abas: Detalhes, Itens, Anexos, Contrato

### Funcionalidades:

- [ ] CRUD completo de negociações
- [ ] Filtro por motivo (Renegociações vs Todas)
- [ ] Kanban por status
- [ ] Cálculo automático de fórmulas
- [ ] Validação de telefone (10-11 dígitos)
- [ ] Upload de anexos
- [ ] Comentários
- [ ] Relacionamento com pessoa/empresa
- [ ] Relacionamento com pacote
- [ ] Cupom de desconto
- [ ] Múltiplos pacotes adicionais
- [ ] Endereço de cobrança diferente
- [ ] Pontos de atenção com duplicidades
- [ ] Assinatura digital (ZapSign/GOV)
- [ ] Integração com IXC (contrato, tipo cobrança)
- [ ] Histórico de auditoria (createdBy, updatedBy, timestamps)

---

## Próximos Passos

1. **Criar collections** no NocoBase local com campos idênticos
2. **Configurar relações** entre collections
3. **Implementar fórmulas** nos campos calculados
4. **Criar views** (Lista e Detalhes)
5. **Configurar filtros** da tela Renegociações
6. **Implementar validações** de campo
7. **Testar fluxo completo** de criação/edição

---

**Documentação gerada automaticamente a partir da análise das telas do NocoBase.**

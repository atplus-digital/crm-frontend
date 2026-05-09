/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	condicoes_pagamentoAtivoSchema,
	condicoes_pagamentoBaixaPrimeiraSchema,
	condicoes_pagamentoComEntradaSchema,
	condicoes_pagamentoCompraVendaSchema,
	condicoes_pagamentoIndPagSchema,
	condicoes_pagamentoPeriodicidadeSchema,
	condicoes_pagamentoTipoSchema,
} from "./labels";

export const CONDICOES_PAGAMENTO_TABLE_NAME = "condicoes_pagamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const condicoes_pagamentoBaseSchema = z.object({
	id: z.number(),
	ativo: condicoes_pagamentoAtivoSchema,
	baixa_primeira: condicoes_pagamentoBaixaPrimeiraSchema,
	com_entrada: condicoes_pagamentoComEntradaSchema,
	compra_venda: condicoes_pagamentoCompraVendaSchema,
	desconto_max: z.number(),
	descricao_meio_pagamento_col: z.string(),
	dia_fixo: z.number(),
	envia_data_vencimento_col: z.number(),
	id_filial: z.number(),
	id_meio_pagamento_col: z.number(),
	ind_pag: condicoes_pagamentoIndPagSchema,
	n_parcelas: z.number(),
	nome: z.string(),
	periodicidade: condicoes_pagamentoPeriodicidadeSchema,
	qtde_repeticoes_venda: z.number(),
	tipo: condicoes_pagamentoTipoSchema,
	ultima_atualizacao: z.string(),
	vencimento_personalizado: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const condicoes_pagamentoSchema = condicoes_pagamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const condicoes_pagamentoCreateSchema = condicoes_pagamentoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const condicoes_pagamentoUpdateSchema =
	condicoes_pagamentoCreateSchema.partial();

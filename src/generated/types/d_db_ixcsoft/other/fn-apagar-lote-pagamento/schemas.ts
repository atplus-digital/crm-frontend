/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_apagar_lote_pagamentoComunicadoSchema } from "./labels";

export const FN_APAGAR_LOTE_PAGAMENTO_TABLE_NAME = "fn_apagar_lote_pagamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_lote_pagamentoBaseSchema = z.object({
	id: z.number(),
	comunicado: fn_apagar_lote_pagamentoComunicadoSchema,
	data_vencimento_final: z.string(),
	data_vencimento_inicial: z.string(),
	descricao: z.string(),
	id_conta: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_lote_pagamentoSchema =
	fn_apagar_lote_pagamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_lote_pagamentoCreateSchema =
	fn_apagar_lote_pagamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_lote_pagamentoUpdateSchema =
	fn_apagar_lote_pagamentoCreateSchema.partial();

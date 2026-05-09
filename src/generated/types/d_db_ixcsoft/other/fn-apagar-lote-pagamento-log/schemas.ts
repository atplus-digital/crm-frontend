/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_apagar_lote_pagamento_logSituacaoSchema,
	fn_apagar_lote_pagamento_logStatusSchema,
} from "./labels";

export const FN_APAGAR_LOTE_PAGAMENTO_LOG_TABLE_NAME =
	"fn_apagar_lote_pagamento_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_lote_pagamento_logBaseSchema = z.object({
	id: z.number(),
	dados: z.string(),
	data_criacao: z.string(),
	id_apagar: z.number(),
	id_lote_pagamento: z.number(),
	integracao: z.string(),
	log: z.string(),
	situacao: fn_apagar_lote_pagamento_logSituacaoSchema,
	status: fn_apagar_lote_pagamento_logStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_lote_pagamento_logSchema =
	fn_apagar_lote_pagamento_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_lote_pagamento_logCreateSchema =
	fn_apagar_lote_pagamento_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_lote_pagamento_logUpdateSchema =
	fn_apagar_lote_pagamento_logCreateSchema.partial();

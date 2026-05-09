/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_movim_finan_lancTipoLancSchema } from "./labels";

export const FN_MOVIM_FINAN_LANC_TABLE_NAME = "fn_movim_finan_lanc";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_movim_finan_lancBaseSchema = z.object({
	id: z.number(),
	documento: z.string(),
	historico: z.string(),
	id_movim_finan: z.number(),
	id_pagar: z.number(),
	id_receber: z.number(),
	pacrecimo: z.number(),
	pdesconto: z.number(),
	tipo_lanc: fn_movim_finan_lancTipoLancSchema,
	vacrescimo: z.number(),
	valor: z.number(),
	vdesconto: z.number(),
	vencimento: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_movim_finan_lancSchema = fn_movim_finan_lancBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_movim_finan_lancCreateSchema = fn_movim_finan_lancSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_movim_finan_lancUpdateSchema =
	fn_movim_finan_lancCreateSchema.partial();

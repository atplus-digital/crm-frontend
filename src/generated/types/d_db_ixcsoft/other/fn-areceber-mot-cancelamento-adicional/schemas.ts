/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_areceber_mot_cancelamento_adicionalAtivoSchema } from "./labels";

export const FN_ARECEBER_MOT_CANCELAMENTO_ADICIONAL_TABLE_NAME =
	"fn_areceber_mot_cancelamento_adicional";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_mot_cancelamento_adicionalBaseSchema = z.object({
	id: z.number(),
	ativo: fn_areceber_mot_cancelamento_adicionalAtivoSchema,
	descricao: z.string(),
	id_fn_areceber_mot_cancelamento: z.number(),
	motivo_adicional: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_mot_cancelamento_adicionalSchema =
	fn_areceber_mot_cancelamento_adicionalBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_mot_cancelamento_adicionalCreateSchema =
	fn_areceber_mot_cancelamento_adicionalSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_mot_cancelamento_adicionalUpdateSchema =
	fn_areceber_mot_cancelamento_adicionalCreateSchema.partial();

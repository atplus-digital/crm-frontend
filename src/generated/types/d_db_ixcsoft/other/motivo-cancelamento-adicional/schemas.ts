/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { motivo_cancelamento_adicionalAtivoSchema } from "./labels";

export const MOTIVO_CANCELAMENTO_ADICIONAL_TABLE_NAME =
	"motivo_cancelamento_adicional";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const motivo_cancelamento_adicionalBaseSchema = z.object({
	id: z.number(),
	ativo: motivo_cancelamento_adicionalAtivoSchema,
	descricao: z.string(),
	id_fn_areceber_mot_cancelamento: z.number(),
	motivo_adicional: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const motivo_cancelamento_adicionalSchema =
	motivo_cancelamento_adicionalBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const motivo_cancelamento_adicionalCreateSchema =
	motivo_cancelamento_adicionalSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const motivo_cancelamento_adicionalUpdateSchema =
	motivo_cancelamento_adicionalCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	transf_mot_cancelamentoAtivoSchema,
	transf_mot_cancelamentoFinalidadeSchema,
} from "./labels";

export const TRANSF_MOT_CANCELAMENTO_TABLE_NAME = "transf_mot_cancelamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const transf_mot_cancelamentoBaseSchema = z.object({
	id: z.number(),
	ativo: transf_mot_cancelamentoAtivoSchema,
	finalidade: transf_mot_cancelamentoFinalidadeSchema,
	motivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const transf_mot_cancelamentoSchema = transf_mot_cancelamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const transf_mot_cancelamentoCreateSchema =
	transf_mot_cancelamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const transf_mot_cancelamentoUpdateSchema =
	transf_mot_cancelamentoCreateSchema.partial();

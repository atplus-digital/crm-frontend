/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { su_oss_chamado_feedbacksStatusSchema } from "./labels";

export const SU_OSS_CHAMADO_FEEDBACKS_TABLE_NAME = "su_oss_chamado_feedbacks";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_feedbacksBaseSchema = z.object({
	id: z.number(),
	cliente_id: z.number(),
	dt_fechamento: z.string(),
	dt_resposta: z.string(),
	funcionarios_id: z.number(),
	pesquisa_satisfacao_id: z.number(),
	status: su_oss_chamado_feedbacksStatusSchema,
	su_oss_chamado_id: z.number(),
	su_ticket_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_feedbacksSchema =
	su_oss_chamado_feedbacksBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_feedbacksCreateSchema =
	su_oss_chamado_feedbacksSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_feedbacksUpdateSchema =
	su_oss_chamado_feedbacksCreateSchema.partial();

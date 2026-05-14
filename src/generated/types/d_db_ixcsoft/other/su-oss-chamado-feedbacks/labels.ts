/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUOSSCHAMADOFEEDBACKS_FIELD_LABELS = {
	cliente_id: "cliente_id",
	dt_fechamento: "dt_fechamento",
	dt_resposta: "dt_resposta",
	funcionarios_id: "funcionarios_id",
	id: "id",
	pesquisa_satisfacao_id: "pesquisa_satisfacao_id",
	status: "status",
	su_oss_chamado_id: "su_oss_chamado_id",
	su_ticket_id: "su_ticket_id",
} as const;

export const SUOSSCHAMADOFEEDBACKS_STATUS_LABELS = {
	EN: "EN",
	RE: "RE",
	EX: "EX",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_oss_chamado_feedbacksStatusSchema = z.enum(["EN", "RE", "EX"], {
	error: () => ({ message: "status: valores válidos são [EN, RE, EX]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuOssChamadoFeedbacksStatus = z.infer<
	typeof su_oss_chamado_feedbacksStatusSchema
>;

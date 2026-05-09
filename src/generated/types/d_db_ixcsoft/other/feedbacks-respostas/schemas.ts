/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FEEDBACKS_RESPOSTAS_TABLE_NAME = "feedbacks_respostas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const feedbacks_respostasBaseSchema = z.object({
	id: z.number(),
	pergunta: z.string(),
	resposta: z.string(),
	su_oss_chamado_feedback_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const feedbacks_respostasSchema = feedbacks_respostasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const feedbacks_respostasCreateSchema = feedbacks_respostasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const feedbacks_respostasUpdateSchema =
	feedbacks_respostasCreateSchema.partial();

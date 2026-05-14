/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMSECRETARIAPERGUNTAS_FIELD_LABELS = {
	data: "data",
	id: "id",
	pergunta: "pergunta",
	resposta: "resposta",
	visitante_id: "visitante_id",
} as const;

export const CRMSECRETARIAPERGUNTAS_RESPOSTA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_secretaria_perguntasRespostaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "resposta: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmSecretariaPerguntasResposta = z.infer<
	typeof crm_secretaria_perguntasRespostaSchema
>;

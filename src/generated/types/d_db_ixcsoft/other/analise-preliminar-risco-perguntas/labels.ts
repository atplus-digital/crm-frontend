/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ANALISEPRELIMINARRISCOPERGUNTAS_STATUSPERGUNTA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const analise_preliminar_risco_perguntasStatusPerguntaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "status_pergunta: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AnalisePreliminarRiscoPerguntasStatusPergunta = z.infer<
	typeof analise_preliminar_risco_perguntasStatusPerguntaSchema
>;

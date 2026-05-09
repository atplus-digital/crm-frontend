/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUOSSRESPOSTAS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSRESPOSTAS_INTERACAOPENDENTE_LABELS = {
	E: "E",
	I: "I",
	N: "N",
	A: "A",
} as const;

export const SUOSSRESPOSTAS_SUSTATUS_LABELS = {
	N: "N",
	P: "P",
	EP: "EP",
	S: "S",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_oss_respostasAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const su_oss_respostasInteracaoPendenteSchema = z.enum(
	["E", "I", "N", "A"],
	{
		error: () => ({
			message: "interacao_pendente: valores válidos são [E, I, N, A]",
		}),
	},
);

export const su_oss_respostasSuStatusSchema = z.enum(
	["N", "P", "EP", "S", "C"],
	{
		error: () => ({
			message: "su_status: valores válidos são [N, P, EP, S, C]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuOssRespostasAtivo = z.infer<typeof su_oss_respostasAtivoSchema>;

export type SuOssRespostasInteracaoPendente = z.infer<
	typeof su_oss_respostasInteracaoPendenteSchema
>;

export type SuOssRespostasSuStatus = z.infer<
	typeof su_oss_respostasSuStatusSchema
>;

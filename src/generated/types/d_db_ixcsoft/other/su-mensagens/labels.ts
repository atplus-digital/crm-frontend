/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUMENSAGENS_STATUS_LABELS = {
	T: "T",
	C: "C",
	F: "F",
	EX: "EX",
	OSAB: "OSAB",
	OSAG: "OSAG",
	OSEX: "OSEX",
} as const;

export const SUMENSAGENS_SUSTATUS_LABELS = {
	N: "N",
	P: "P",
	EP: "EP",
	S: "S",
	C: "C",
} as const;

export const SUMENSAGENS_VISIBILIDADEMENSAGENS_LABELS = {
	PU: "PU",
	PR: "PR",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_mensagensStatusSchema = z.enum(
	["T", "C", "F", "EX", "OSAB", "OSAG", "OSEX"],
	{
		error: () => ({
			message: "status: valores válidos são [T, C, F, EX, OSAB, OSAG, OSEX]",
		}),
	},
);

export const su_mensagensSuStatusSchema = z.enum(["N", "P", "EP", "S", "C"], {
	error: () => ({ message: "su_status: valores válidos são [N, P, EP, S, C]" }),
});

export const su_mensagensVisibilidadeMensagensSchema = z.enum(
	["PU", "PR", "P"],
	{
		error: () => ({
			message: "visibilidade_mensagens: valores válidos são [PU, PR, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuMensagensStatus = z.infer<typeof su_mensagensStatusSchema>;

export type SuMensagensSuStatus = z.infer<typeof su_mensagensSuStatusSchema>;

export type SuMensagensVisibilidadeMensagens = z.infer<
	typeof su_mensagensVisibilidadeMensagensSchema
>;

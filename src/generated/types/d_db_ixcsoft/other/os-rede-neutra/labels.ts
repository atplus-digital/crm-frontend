/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OSREDENEUTRA_MODOOPERACAO_LABELS = {
	C: "C",
	S: "S",
} as const;

export const OSREDENEUTRA_STATUS_LABELS = {
	S: "S",
	E: "E",
	A: "A",
} as const;

export const OSREDENEUTRA_TIPO_LABELS = {
	R: "R",
	A: "A",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const os_rede_neutraModoOperacaoSchema = z.enum(["C", "S"], {
	error: () => ({ message: "modo_operacao: valores válidos são [C, S]" }),
});

export const os_rede_neutraStatusSchema = z.enum(["S", "E", "A"], {
	error: () => ({ message: "status: valores válidos são [S, E, A]" }),
});

export const os_rede_neutraTipoSchema = z.enum(["R", "A", "D"], {
	error: () => ({ message: "tipo: valores válidos são [R, A, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OsRedeNeutraModoOperacao = z.infer<
	typeof os_rede_neutraModoOperacaoSchema
>;

export type OsRedeNeutraStatus = z.infer<typeof os_rede_neutraStatusSchema>;

export type OsRedeNeutraTipo = z.infer<typeof os_rede_neutraTipoSchema>;

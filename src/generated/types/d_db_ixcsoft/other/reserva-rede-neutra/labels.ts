/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RESERVAREDENEUTRA_STATUS_LABELS = {
	A: "A",
	I: "I",
	AA: "AA",
} as const;

export const RESERVAREDENEUTRA_SUBSTATUS_LABELS = {
	U: "U",
	L: "L",
	C: "C",
} as const;

export const RESERVAREDENEUTRA_TIPO_LABELS = {
	C: "C",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const reserva_rede_neutraStatusSchema = z.enum(["A", "I", "AA"], {
	error: () => ({ message: "status: valores válidos são [A, I, AA]" }),
});

export const reserva_rede_neutraSubstatusSchema = z.enum(["U", "L", "C"], {
	error: () => ({ message: "substatus: valores válidos são [U, L, C]" }),
});

export const reserva_rede_neutraTipoSchema = z.enum(["C", "S"], {
	error: () => ({ message: "tipo: valores válidos são [C, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReservaRedeNeutraStatus = z.infer<
	typeof reserva_rede_neutraStatusSchema
>;

export type ReservaRedeNeutraSubstatus = z.infer<
	typeof reserva_rede_neutraSubstatusSchema
>;

export type ReservaRedeNeutraTipo = z.infer<
	typeof reserva_rede_neutraTipoSchema
>;

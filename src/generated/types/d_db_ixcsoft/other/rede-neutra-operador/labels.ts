/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REDENEUTRAOPERADOR_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REDENEUTRAOPERADOR_INTEGRACAO_LABELS = {
	fibr: "fibr",
	ixc: "ixc",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rede_neutra_operadorAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const rede_neutra_operadorIntegracaoSchema = z.enum(["fibr", "ixc"], {
	error: () => ({ message: "integracao: valores válidos são [fibr, ixc]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RedeNeutraOperadorAtivo = z.infer<
	typeof rede_neutra_operadorAtivoSchema
>;

export type RedeNeutraOperadorIntegracao = z.infer<
	typeof rede_neutra_operadorIntegracaoSchema
>;

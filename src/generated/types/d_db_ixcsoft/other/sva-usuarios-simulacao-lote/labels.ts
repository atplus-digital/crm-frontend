/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SVAUSUARIOSSIMULACAOLOTE_STATUS_LABELS = {
	A: "A",
	C: "C",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sva_usuarios_simulacao_loteStatusSchema = z.enum(["A", "C", "F"], {
	error: () => ({ message: "status: valores válidos são [A, C, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SvaUsuariosSimulacaoLoteStatus = z.infer<
	typeof sva_usuarios_simulacao_loteStatusSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCALOTES_SITUACAO_LABELS = {
	A: "A",
	F: "F",
	V: "V",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_lotesSituacaoSchema = z.enum(["A", "F", "V"], {
	error: () => ({ message: "situacao: valores válidos são [A, F, V]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaLotesSituacao = z.infer<
	typeof regua_cobranca_lotesSituacaoSchema
>;

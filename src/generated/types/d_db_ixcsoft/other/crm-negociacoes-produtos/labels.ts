/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMNEGOCIACOESPRODUTOS_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_negociacoes_produtosRepetirSchema = z.enum(["V", "S"], {
	error: () => ({ message: "repetir: valores válidos são [V, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmNegociacoesProdutosRepetir = z.infer<
	typeof crm_negociacoes_produtosRepetirSchema
>;

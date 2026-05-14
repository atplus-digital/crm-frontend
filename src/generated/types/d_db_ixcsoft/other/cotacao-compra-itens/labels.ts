/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const COTACAOCOMPRAITENS_FIELD_LABELS = {
	aprovado: "aprovado",
	id: "id",
	id_cotacao: "id_cotacao",
	id_produto: "id_produto",
	id_unidade: "id_unidade",
	quantidade: "quantidade",
	status: "status",
	valor_unitario: "valor_unitario",
} as const;

export const COTACAOCOMPRAITENS_APROVADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const COTACAOCOMPRAITENS_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cotacao_compra_itensAprovadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aprovado: valores válidos são [S, N]" }),
});

export const cotacao_compra_itensStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CotacaoCompraItensAprovado = z.infer<
	typeof cotacao_compra_itensAprovadoSchema
>;

export type CotacaoCompraItensStatus = z.infer<
	typeof cotacao_compra_itensStatusSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REQUISICAOCOMPRA_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
} as const;

export const REQUISICAOCOMPRA_STATUSLIBERACAOCOMPRA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const requisicao_compraStatusSchema = z.enum(["A", "F", "C"], {
	error: () => ({ message: "status: valores válidos são [A, F, C]" }),
});

export const requisicao_compraStatusLiberacaoCompraSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "status_liberacao_compra: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RequisicaoCompraStatus = z.infer<
	typeof requisicao_compraStatusSchema
>;

export type RequisicaoCompraStatusLiberacaoCompra = z.infer<
	typeof requisicao_compraStatusLiberacaoCompraSchema
>;

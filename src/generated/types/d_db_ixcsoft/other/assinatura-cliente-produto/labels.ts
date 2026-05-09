/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURACLIENTEPRODUTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ASSINATURACLIENTEPRODUTO_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_cliente_produtoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const assinatura_cliente_produtoStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaClienteProdutoAtivo = z.infer<
	typeof assinatura_cliente_produtoAtivoSchema
>;

export type AssinaturaClienteProdutoStatus = z.infer<
	typeof assinatura_cliente_produtoStatusSchema
>;

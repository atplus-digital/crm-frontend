/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURACLIENTEPRODUTOSUBPRODUTOTMP_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_cliente_produto_subproduto_tmpAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "ativo: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaClienteProdutoSubprodutoTmpAtivo = z.infer<
	typeof assinatura_cliente_produto_subproduto_tmpAtivoSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURAPLANOPRODUTOSUBPRODUTO_FIELD_LABELS = {
	ativo: "ativo",
	create_time: "create_time",
	id: "id",
	id_assinatura_plano_produto: "id_assinatura_plano_produto",
	id_produto: "id_produto",
	update_time: "update_time",
} as const;

export const ASSINATURAPLANOPRODUTOSUBPRODUTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_plano_produto_subprodutoAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "ativo: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaPlanoProdutoSubprodutoAtivo = z.infer<
	typeof assinatura_plano_produto_subprodutoAtivoSchema
>;

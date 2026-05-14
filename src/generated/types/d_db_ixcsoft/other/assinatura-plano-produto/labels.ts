/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURAPLANOPRODUTO_FIELD_LABELS = {
	ativo: "ativo",
	create_time: "create_time",
	descricao: "descricao",
	id: "id",
	id_assinatura_plano: "id_assinatura_plano",
	id_produto: "id_produto",
	id_tipo_documento: "id_tipo_documento",
	obs: "obs",
	quantidade: "quantidade",
	update_time: "update_time",
	valor_unitario: "valor_unitario",
} as const;

export const ASSINATURAPLANOPRODUTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_plano_produtoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaPlanoProdutoAtivo = z.infer<
	typeof assinatura_plano_produtoAtivoSchema
>;

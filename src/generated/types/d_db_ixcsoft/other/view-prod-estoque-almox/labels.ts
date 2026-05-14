/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIEWPRODESTOQUEALMOX_FIELD_LABELS = {
	almox_ativo: "almox_ativo",
	almox_descricao: "almox_descricao",
	almox_id: "almox_id",
	filial_id: "filial_id",
	id_produto: "id_produto",
	saldo: "saldo",
} as const;

export const VIEWPRODESTOQUEALMOX_ALMOXATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const view_prod_estoque_almoxAlmoxAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "almox_ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViewProdEstoqueAlmoxAlmoxAtivo = z.infer<
	typeof view_prod_estoque_almoxAlmoxAtivoSchema
>;

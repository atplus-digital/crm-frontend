/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOTE_FIELD_LABELS = {
	ativo: "ativo",
	fator_conversao: "fator_conversao",
	filial_id: "filial_id",
	id: "id",
	id_mov_produtos: "id_mov_produtos",
	id_produto: "id_produto",
	lote_fornecedor: "lote_fornecedor",
	qtde: "qtde",
	qtde_baixada: "qtde_baixada",
	saldo: "saldo",
} as const;

export const LOTE_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const loteAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoteAtivo = z.infer<typeof loteAtivoSchema>;

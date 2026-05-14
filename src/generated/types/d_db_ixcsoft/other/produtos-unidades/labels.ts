/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRODUTOSUNIDADES_FIELD_LABELS = {
	ativo: "ativo",
	fator_conversao: "fator_conversao",
	id: "id",
	id_produto: "id_produto",
	id_unidade: "id_unidade",
	sigla: "sigla",
	ultima_atualizacao: "ultima_atualizacao",
	ultima_atualizacao_original: "ultima_atualizacao_original",
} as const;

export const PRODUTOSUNIDADES_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const produtos_unidadesAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ProdutosUnidadesAtivo = z.infer<
	typeof produtos_unidadesAtivoSchema
>;

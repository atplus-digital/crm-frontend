/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRODUTOSIXCMVNO_FIELD_LABELS = {
	ativo: "ativo",
	id: "id",
	id_assinatura_integracao: "id_assinatura_integracao",
	id_integracao: "id_integracao",
	id_plano_integracao: "id_plano_integracao",
	id_plano_integracao_add: "id_plano_integracao_add",
	id_produto_ixc: "id_produto_ixc",
	tipo_referencia: "tipo_referencia",
} as const;

export const PRODUTOSIXCMVNO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOSIXCMVNO_TIPOREFERENCIA_LABELS = {
	C: "C",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const produtos_ixc_mvnoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const produtos_ixc_mvnoTipoReferenciaSchema = z.enum(["C", "A"], {
	error: () => ({ message: "tipo_referencia: valores válidos são [C, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ProdutosIxcMvnoAtivo = z.infer<typeof produtos_ixc_mvnoAtivoSchema>;

export type ProdutosIxcMvnoTipoReferencia = z.infer<
	typeof produtos_ixc_mvnoTipoReferenciaSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURACLIENTEPRODUTOTMP_FIELD_LABELS = {
	ativo: "ativo",
	create_time: "create_time",
	data_validade: "data_validade",
	descricao: "descricao",
	id: "id",
	id_assinatura_cliente: "id_assinatura_cliente",
	id_produto: "id_produto",
	id_tipo_documento: "id_tipo_documento",
	obs: "obs",
	quantidade: "quantidade",
	situacao: "situacao",
	status: "status",
	update_time: "update_time",
	valor_unitario: "valor_unitario",
} as const;

export const ASSINATURACLIENTEPRODUTOTMP_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ASSINATURACLIENTEPRODUTOTMP_SITUACAO_LABELS = {
	C: "C",
	P: "P",
} as const;

export const ASSINATURACLIENTEPRODUTOTMP_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_cliente_produto_tmpAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const assinatura_cliente_produto_tmpSituacaoSchema = z.enum(["C", "P"], {
	error: () => ({ message: "situacao: valores válidos são [C, P]" }),
});

export const assinatura_cliente_produto_tmpStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaClienteProdutoTmpAtivo = z.infer<
	typeof assinatura_cliente_produto_tmpAtivoSchema
>;

export type AssinaturaClienteProdutoTmpSituacao = z.infer<
	typeof assinatura_cliente_produto_tmpSituacaoSchema
>;

export type AssinaturaClienteProdutoTmpStatus = z.infer<
	typeof assinatura_cliente_produto_tmpStatusSchema
>;

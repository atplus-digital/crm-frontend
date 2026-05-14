/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMNEGOCIACOESPRODUTOS_FIELD_LABELS = {
	data_validade: "data_validade",
	descricao: "descricao",
	id: "id",
	id_negociacao: "id_negociacao",
	id_patrimonio: "id_patrimonio",
	id_produto: "id_produto",
	id_unidade: "id_unidade",
	pdesconto: "pdesconto",
	quantidade: "quantidade",
	repetir: "repetir",
	repetir_qtde: "repetir_qtde",
	tipo: "tipo",
	ultima_atualizacao: "ultima_atualizacao",
	ultima_atualizacao_original: "ultima_atualizacao_original",
	valor_total: "valor_total",
	valor_unitario: "valor_unitario",
	vdesconto: "vdesconto",
} as const;

export const CRMNEGOCIACOESPRODUTOS_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_negociacoes_produtosRepetirSchema = z.enum(["V", "S"], {
	error: () => ({ message: "repetir: valores válidos são [V, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmNegociacoesProdutosRepetir = z.infer<
	typeof crm_negociacoes_produtosRepetirSchema
>;

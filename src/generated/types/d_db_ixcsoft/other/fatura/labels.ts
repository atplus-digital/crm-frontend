/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FATURA_FIELD_LABELS = {
	avalista_1: "avalista_1",
	avalista_2: "avalista_2",
	cancelamento_obs: "cancelamento_obs",
	comissao_perc_recebimento: "comissao_perc_recebimento",
	data_bloqueio: "data_bloqueio",
	data_cancelamento: "data_cancelamento",
	data_desbloqueio: "data_desbloqueio",
	data_emissao: "data_emissao",
	data_final_cobranca: "data_final_cobranca",
	data_inicial_cobranca: "data_inicial_cobranca",
	data_previsao_aviso: "data_previsao_aviso",
	data_previsao_bloqueio: "data_previsao_bloqueio",
	data_saida: "data_saida",
	data_vencimento: "data_vencimento",
	dias_proporcionais: "dias_proporcionais",
	filial_id: "filial_id",
	gera_estoque: "gera_estoque",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cfop: "id_cfop",
	id_cliente: "id_cliente",
	id_comissionado: "id_comissionado",
	id_condicao_pagamento: "id_condicao_pagamento",
	id_contrato: "id_contrato",
	id_lote_geracao_fatura: "id_lote_geracao_fatura",
	id_lote_geracao_financeiro: "id_lote_geracao_financeiro",
	id_receber: "id_receber",
	id_saida: "id_saida",
	id_tipo_documento: "id_tipo_documento",
	id_transportadora: "id_transportadora",
	infCpl: "infCpl",
	isento: "isento",
	mes_referencia: "mes_referencia",
	modalidade_frete: "modalidade_frete",
	pacrescimo: "pacrescimo",
	parcela_proporcional_gerada_suspensao:
		"parcela_proporcional_gerada_suspensao",
	pcomissao: "pcomissao",
	pdesconto: "pdesconto",
	placas: "placas",
	previsao: "previsao",
	serie: "serie",
	status: "status",
	tipo_cobranca: "tipo_cobranca",
	total_dias_periodo: "total_dias_periodo",
	ultima_atualizacao: "ultima_atualizacao",
	vacrescimo: "vacrescimo",
	valor_total: "valor_total",
	vdesconto: "vdesconto",
} as const;

export const FATURA_GERAESTOQUE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FATURA_ISENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FATURA_PARCELAPROPORCIONALGERADASUSPENSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FATURA_PREVISAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FATURA_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
	D: "D",
} as const;

export const FATURA_TIPOCOBRANCA_LABELS = {
	P: "P",
	I: "I",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const faturaGeraEstoqueSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_estoque: valores válidos são [S, N]" }),
});

export const faturaIsentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "isento: valores válidos são [S, N]" }),
});

export const faturaParcelaProporcionalGeradaSuspensaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"parcela_proporcional_gerada_suspensao: valores válidos são [S, N]",
		}),
	},
);

export const faturaPrevisaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "previsao: valores válidos são [S, N]" }),
});

export const faturaStatusSchema = z.enum(["A", "F", "C", "D"], {
	error: () => ({ message: "status: valores válidos são [A, F, C, D]" }),
});

export const faturaTipoCobrancaSchema = z.enum(["P", "I", "E"], {
	error: () => ({ message: "tipo_cobranca: valores válidos são [P, I, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FaturaGeraEstoque = z.infer<typeof faturaGeraEstoqueSchema>;

export type FaturaIsento = z.infer<typeof faturaIsentoSchema>;

export type FaturaParcelaProporcionalGeradaSuspensao = z.infer<
	typeof faturaParcelaProporcionalGeradaSuspensaoSchema
>;

export type FaturaPrevisao = z.infer<typeof faturaPrevisaoSchema>;

export type FaturaStatus = z.infer<typeof faturaStatusSchema>;

export type FaturaTipoCobranca = z.infer<typeof faturaTipoCobrancaSchema>;

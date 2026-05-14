/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOSERVICOS_FIELD_LABELS = {
	data: "data",
	data_final_ligacoes: "data_final_ligacoes",
	data_inicial_ligacoes: "data_inicial_ligacoes",
	data_validade: "data_validade",
	descricao: "descricao",
	execucoes: "execucoes",
	execucoes_nf21: "execucoes_nf21",
	id: "id",
	id_almox: "id_almox",
	id_areceber: "id_areceber",
	id_contrato: "id_contrato",
	id_contrato_aluguel: "id_contrato_aluguel",
	id_im_imovel: "id_im_imovel",
	id_im_lanc_mensal: "id_im_lanc_mensal",
	id_login_tv: "id_login_tv",
	id_lote: "id_lote",
	id_lote_importacao: "id_lote_importacao",
	id_lote_rotina: "id_lote_rotina",
	id_oss_chamado: "id_oss_chamado",
	id_oss_mensagem: "id_oss_mensagem",
	id_produto: "id_produto",
	id_produto_contrato_vinc: "id_produto_contrato_vinc",
	id_sip: "id_sip",
	id_tipo_documento: "id_tipo_documento",
	id_unidade: "id_unidade",
	id_vd_contrato_produtos: "id_vd_contrato_produtos",
	incluido_por_prorata: "incluido_por_prorata",
	observacao: "observacao",
	origem: "origem",
	origem_movimento: "origem_movimento",
	pdesconto: "pdesconto",
	quantidade: "quantidade",
	repetir: "repetir",
	repetir_qtde: "repetir_qtde",
	status: "status",
	status_nf21: "status_nf21",
	tipo: "tipo",
	tipo_acres_desc: "tipo_acres_desc",
	ultima_execucao: "ultima_execucao",
	ultima_execucao_nf21: "ultima_execucao_nf21",
	valor_total: "valor_total",
	valor_unitario: "valor_unitario",
	vdesconto: "vdesconto",
} as const;

export const CLIENTECONTRATOSERVICOS_INCLUIDOPORPRORATA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOSERVICOS_ORIGEM_LABELS = {
	A: "A",
	M: "M",
} as const;

export const CLIENTECONTRATOSERVICOS_ORIGEMMOVIMENTO_LABELS = {
	S: "S",
	P: "P",
} as const;

export const CLIENTECONTRATOSERVICOS_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

export const CLIENTECONTRATOSERVICOS_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const CLIENTECONTRATOSERVICOS_STATUSNF21_LABELS = {
	A: "A",
	I: "I",
} as const;

export const CLIENTECONTRATOSERVICOS_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	M: "M",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

export const CLIENTECONTRATOSERVICOS_TIPOACRESDESC_LABELS = {
	A: "A",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_servicosIncluidoPorProrataSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "incluido_por_prorata: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contrato_servicosOrigemSchema = z.enum(["A", "M"], {
	error: () => ({ message: "origem: valores válidos são [A, M]" }),
});

export const cliente_contrato_servicosOrigemMovimentoSchema = z.enum(
	["S", "P"],
	{
		error: () => ({ message: "origem_movimento: valores válidos são [S, P]" }),
	},
);

export const cliente_contrato_servicosRepetirSchema = z.enum(["V", "S"], {
	error: () => ({ message: "repetir: valores válidos são [V, S]" }),
});

export const cliente_contrato_servicosStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const cliente_contrato_servicosStatusNf21Schema = z.enum(["A", "I"], {
	error: () => ({ message: "status_nf21: valores válidos são [A, I]" }),
});

export const cliente_contrato_servicosTipoSchema = z.enum(
	["I", "T", "S", "M", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message: "tipo: valores válidos são [I, T, S, M, SVA, TV, SMP]",
		}),
	},
);

export const cliente_contrato_servicosTipoAcresDescSchema = z.enum(["A", "D"], {
	error: () => ({ message: "tipo_acres_desc: valores válidos são [A, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoServicosIncluidoPorProrata = z.infer<
	typeof cliente_contrato_servicosIncluidoPorProrataSchema
>;

export type ClienteContratoServicosOrigem = z.infer<
	typeof cliente_contrato_servicosOrigemSchema
>;

export type ClienteContratoServicosOrigemMovimento = z.infer<
	typeof cliente_contrato_servicosOrigemMovimentoSchema
>;

export type ClienteContratoServicosRepetir = z.infer<
	typeof cliente_contrato_servicosRepetirSchema
>;

export type ClienteContratoServicosStatus = z.infer<
	typeof cliente_contrato_servicosStatusSchema
>;

export type ClienteContratoServicosStatusNf21 = z.infer<
	typeof cliente_contrato_servicosStatusNf21Schema
>;

export type ClienteContratoServicosTipo = z.infer<
	typeof cliente_contrato_servicosTipoSchema
>;

export type ClienteContratoServicosTipoAcresDesc = z.infer<
	typeof cliente_contrato_servicosTipoAcresDescSchema
>;

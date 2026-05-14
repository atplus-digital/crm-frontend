/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOGERACAOFINANCEIRO_FIELD_LABELS = {
	agendado: "agendado",
	data_saida: "data_saida",
	data_venc_fin: "data_venc_fin",
	data_venc_ini: "data_venc_ini",
	enviar_email: "enviar_email",
	gera_adicional: "gera_adicional",
	gera_adicional_data: "gera_adicional_data",
	gera_cancelados: "gera_cancelados",
	gera_finan_aa: "gera_finan_aa",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cidade: "id_cidade",
	id_contrato_final: "id_contrato_final",
	id_contrato_inicial: "id_contrato_inicial",
	id_filial: "id_filial",
	id_tipo_cliente: "id_tipo_cliente",
	id_tipo_cobranca: "id_tipo_cobranca",
	media_segundos_contrato: "media_segundos_contrato",
	mes_repeticoes_geracao_lote: "mes_repeticoes_geracao_lote",
	momento_fin_geracao: "momento_fin_geracao",
	momento_ini_geracao: "momento_ini_geracao",
	ordem: "ordem",
	qtde_repeticoes_geracao_lote: "qtde_repeticoes_geracao_lote",
	somente_sip: "somente_sip",
	status: "status",
	tipo_contrato: "tipo_contrato",
	tipo_doc_fatura: "tipo_doc_fatura",
	tipo_pessoa: "tipo_pessoa",
	tipo_tipo_cobranca: "tipo_tipo_cobranca",
	total_parcelas_geradas: "total_parcelas_geradas",
	total_valor_gerado: "total_valor_gerado",
	total_vendas_geradas: "total_vendas_geradas",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_AGENDADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_DATASAIDA_LABELS = {
	E: "E",
	P: "P",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_ENVIAREMAIL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_GERAADICIONAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_GERACANCELADOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_GERAFINANAA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_ORDEM_LABELS = {
	V: "V",
	R: "R",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_SOMENTESIP_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_STATUS_LABELS = {
	N: "N",
	G: "G",
	E: "E",
	I: "I",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_TIPOCONTRATO_LABELS = {
	I: "I",
	S: "S",
	T: "T",
	SVA: "SVA",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	T: "T",
} as const;

export const CLIENTECONTRATOGERACAOFINANCEIRO_TIPOTIPOCOBRANCA_LABELS = {
	Pos: "Pos",
	Pre: "Pre",
	Todos: "Todos",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_geracao_financeiroAgendadoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "agendado: valores válidos são [S, N]" }),
	},
);

export const cliente_contrato_geracao_financeiroDataSaidaSchema = z.enum(
	["E", "P"],
	{
		error: () => ({ message: "data_saida: valores válidos são [E, P]" }),
	},
);

export const cliente_contrato_geracao_financeiroEnviarEmailSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "enviar_email: valores válidos são [S, N]" }),
	},
);

export const cliente_contrato_geracao_financeiroGeraAdicionalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "gera_adicional: valores válidos são [S, N]" }),
	},
);

export const cliente_contrato_geracao_financeiroGeraCanceladosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "gera_cancelados: valores válidos são [S, N]" }),
	},
);

export const cliente_contrato_geracao_financeiroGeraFinanAaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "gera_finan_aa: valores válidos são [S, N]" }),
	},
);

export const cliente_contrato_geracao_financeiroOrdemSchema = z.enum(
	["V", "R"],
	{
		error: () => ({ message: "ordem: valores válidos são [V, R]" }),
	},
);

export const cliente_contrato_geracao_financeiroSomenteSipSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({ message: "somente_sip: valores válidos são [S, N, T]" }),
	},
);

export const cliente_contrato_geracao_financeiroStatusSchema = z.enum(
	["N", "G", "E", "I"],
	{
		error: () => ({ message: "status: valores válidos são [N, G, E, I]" }),
	},
);

export const cliente_contrato_geracao_financeiroTipoContratoSchema = z.enum(
	["I", "S", "T", "SVA"],
	{
		error: () => ({
			message: "tipo_contrato: valores válidos são [I, S, T, SVA]",
		}),
	},
);

export const cliente_contrato_geracao_financeiroTipoPessoaSchema = z.enum(
	["F", "J", "T"],
	{
		error: () => ({ message: "tipo_pessoa: valores válidos são [F, J, T]" }),
	},
);

export const cliente_contrato_geracao_financeiroTipoTipoCobrancaSchema = z.enum(
	["Pos", "Pre", "Todos"],
	{
		error: () => ({
			message: "tipo_tipo_cobranca: valores válidos são [Pos, Pre, Todos]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoGeracaoFinanceiroAgendado = z.infer<
	typeof cliente_contrato_geracao_financeiroAgendadoSchema
>;

export type ClienteContratoGeracaoFinanceiroDataSaida = z.infer<
	typeof cliente_contrato_geracao_financeiroDataSaidaSchema
>;

export type ClienteContratoGeracaoFinanceiroEnviarEmail = z.infer<
	typeof cliente_contrato_geracao_financeiroEnviarEmailSchema
>;

export type ClienteContratoGeracaoFinanceiroGeraAdicional = z.infer<
	typeof cliente_contrato_geracao_financeiroGeraAdicionalSchema
>;

export type ClienteContratoGeracaoFinanceiroGeraCancelados = z.infer<
	typeof cliente_contrato_geracao_financeiroGeraCanceladosSchema
>;

export type ClienteContratoGeracaoFinanceiroGeraFinanAa = z.infer<
	typeof cliente_contrato_geracao_financeiroGeraFinanAaSchema
>;

export type ClienteContratoGeracaoFinanceiroOrdem = z.infer<
	typeof cliente_contrato_geracao_financeiroOrdemSchema
>;

export type ClienteContratoGeracaoFinanceiroSomenteSip = z.infer<
	typeof cliente_contrato_geracao_financeiroSomenteSipSchema
>;

export type ClienteContratoGeracaoFinanceiroStatus = z.infer<
	typeof cliente_contrato_geracao_financeiroStatusSchema
>;

export type ClienteContratoGeracaoFinanceiroTipoContrato = z.infer<
	typeof cliente_contrato_geracao_financeiroTipoContratoSchema
>;

export type ClienteContratoGeracaoFinanceiroTipoPessoa = z.infer<
	typeof cliente_contrato_geracao_financeiroTipoPessoaSchema
>;

export type ClienteContratoGeracaoFinanceiroTipoTipoCobranca = z.infer<
	typeof cliente_contrato_geracao_financeiroTipoTipoCobrancaSchema
>;

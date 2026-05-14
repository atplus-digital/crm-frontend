/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOGERACAOFATURA_FIELD_LABELS = {
	ano_referencia: "ano_referencia",
	geracao_ate: "geracao_ate",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cidade: "id_cidade",
	id_cliente_final: "id_cliente_final",
	id_cliente_inicial: "id_cliente_inicial",
	id_contrato_final: "id_contrato_final",
	id_contrato_inicial: "id_contrato_inicial",
	id_filial: "id_filial",
	id_tipo_cliente: "id_tipo_cliente",
	id_tipo_cobranca: "id_tipo_cobranca",
	mes_referencia: "mes_referencia",
	momento_fin_geracao: "momento_fin_geracao",
	momento_ini_geracao: "momento_ini_geracao",
	status: "status",
	tipo_contrato: "tipo_contrato",
	tipo_pessoa: "tipo_pessoa",
	total_faturas_geradas: "total_faturas_geradas",
	total_valor_gerados: "total_valor_gerados",
} as const;

export const CLIENTECONTRATOGERACAOFATURA_STATUS_LABELS = {
	N: "N",
	G: "G",
	E: "E",
	I: "I",
} as const;

export const CLIENTECONTRATOGERACAOFATURA_TIPOCONTRATO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
} as const;

export const CLIENTECONTRATOGERACAOFATURA_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_geracao_faturaStatusSchema = z.enum(
	["N", "G", "E", "I"],
	{
		error: () => ({ message: "status: valores válidos são [N, G, E, I]" }),
	},
);

export const cliente_contrato_geracao_faturaTipoContratoSchema = z.enum(
	["I", "T", "S", "SVA"],
	{
		error: () => ({
			message: "tipo_contrato: valores válidos são [I, T, S, SVA]",
		}),
	},
);

export const cliente_contrato_geracao_faturaTipoPessoaSchema = z.enum(
	["F", "J", "E"],
	{
		error: () => ({ message: "tipo_pessoa: valores válidos são [F, J, E]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoGeracaoFaturaStatus = z.infer<
	typeof cliente_contrato_geracao_faturaStatusSchema
>;

export type ClienteContratoGeracaoFaturaTipoContrato = z.infer<
	typeof cliente_contrato_geracao_faturaTipoContratoSchema
>;

export type ClienteContratoGeracaoFaturaTipoPessoa = z.infer<
	typeof cliente_contrato_geracao_faturaTipoPessoaSchema
>;

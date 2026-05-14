/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOALTPLANO_FIELD_LABELS = {
	alt_plano_modelo_impressao: "alt_plano_modelo_impressao",
	alt_plano_tipo_assinatura: "alt_plano_tipo_assinatura",
	altera_plano: "altera_plano",
	altera_tipo_cobranca: "altera_tipo_cobranca",
	data_hora_alteracao: "data_hora_alteracao",
	definicao_contrato_termo: "definicao_contrato_termo",
	gerar_prorata_serv_adic: "gerar_prorata_serv_adic",
	id: "id",
	id_contrato: "id_contrato",
	id_lote: "id_lote",
	id_modelo_impressao: "id_modelo_impressao",
	id_modelo_termo: "id_modelo_termo",
	id_operador: "id_operador",
	id_tipo_plano_atual: "id_tipo_plano_atual",
	id_tipo_plano_novo: "id_tipo_plano_novo",
	id_vd_contrato_atual: "id_vd_contrato_atual",
	id_vd_contrato_novo: "id_vd_contrato_novo",
	id_vendedor: "id_vendedor",
	opcoes_vencidos: "opcoes_vencidos",
	status: "status",
	tipo_alteracao: "tipo_alteracao",
	valor_acrescimo_atual: "valor_acrescimo_atual",
	valor_atual: "valor_atual",
	valor_desconto_atual: "valor_desconto_atual",
	valor_novo: "valor_novo",
} as const;

export const CLIENTECONTRATOALTPLANO_ALTPLANOTIPOASSINATURA_LABELS = {
	D: "D",
	I: "I",
} as const;

export const CLIENTECONTRATOALTPLANO_ALTERAPLANO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOALTPLANO_ALTERATIPOCOBRANCA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOALTPLANO_DEFINICAOCONTRATOTERMO_LABELS = {
	AC: "AC",
	AT: "AT",
	NA: "NA",
} as const;

export const CLIENTECONTRATOALTPLANO_GERARPRORATASERVADIC_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATOALTPLANO_OPCOESVENCIDOS_LABELS = {
	L: "L",
	N: "N",
	R: "R",
} as const;

export const CLIENTECONTRATOALTPLANO_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

export const CLIENTECONTRATOALTPLANO_TIPOALTERACAO_LABELS = {
	UP: "UP",
	DW: "DW",
	AV: "AV",
	UV: "UV",
	DV: "DV",
	SC: "SC",
	TM: "TM",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_alt_planoAltPlanoTipoAssinaturaSchema = z.enum(
	["D", "I"],
	{
		error: () => ({
			message: "alt_plano_tipo_assinatura: valores válidos são [D, I]",
		}),
	},
);

export const cliente_contrato_alt_planoAlteraPlanoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "altera_plano: valores válidos são [S, N]" }),
});

export const cliente_contrato_alt_planoAlteraTipoCobrancaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "altera_tipo_cobranca: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contrato_alt_planoDefinicaoContratoTermoSchema = z.enum(
	["AC", "AT", "NA"],
	{
		error: () => ({
			message: "definicao_contrato_termo: valores válidos são [AC, AT, NA]",
		}),
	},
);

export const cliente_contrato_alt_planoGerarProrataServAdicSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "gerar_prorata_serv_adic: valores válidos são [S, N, P]",
		}),
	},
);

export const cliente_contrato_alt_planoOpcoesVencidosSchema = z.enum(
	["L", "N", "R"],
	{
		error: () => ({
			message: "opcoes_vencidos: valores válidos são [L, N, R]",
		}),
	},
);

export const cliente_contrato_alt_planoStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

export const cliente_contrato_alt_planoTipoAlteracaoSchema = z.enum(
	["UP", "DW", "AV", "UV", "DV", "SC", "TM"],
	{
		error: () => ({
			message:
				"tipo_alteracao: valores válidos são [UP, DW, AV, UV, DV, SC, TM]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoAltPlanoAltPlanoTipoAssinatura = z.infer<
	typeof cliente_contrato_alt_planoAltPlanoTipoAssinaturaSchema
>;

export type ClienteContratoAltPlanoAlteraPlano = z.infer<
	typeof cliente_contrato_alt_planoAlteraPlanoSchema
>;

export type ClienteContratoAltPlanoAlteraTipoCobranca = z.infer<
	typeof cliente_contrato_alt_planoAlteraTipoCobrancaSchema
>;

export type ClienteContratoAltPlanoDefinicaoContratoTermo = z.infer<
	typeof cliente_contrato_alt_planoDefinicaoContratoTermoSchema
>;

export type ClienteContratoAltPlanoGerarProrataServAdic = z.infer<
	typeof cliente_contrato_alt_planoGerarProrataServAdicSchema
>;

export type ClienteContratoAltPlanoOpcoesVencidos = z.infer<
	typeof cliente_contrato_alt_planoOpcoesVencidosSchema
>;

export type ClienteContratoAltPlanoStatus = z.infer<
	typeof cliente_contrato_alt_planoStatusSchema
>;

export type ClienteContratoAltPlanoTipoAlteracao = z.infer<
	typeof cliente_contrato_alt_planoTipoAlteracaoSchema
>;

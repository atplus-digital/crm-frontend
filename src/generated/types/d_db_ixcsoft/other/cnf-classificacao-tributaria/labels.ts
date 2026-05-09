/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CNFCLASSIFICACAOTRIBUTARIA_CFIPITIPOCALCULO_LABELS = {
	P: "P",
	V: "V",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_CFTIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
	NT: "NT",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_DESCONTARICMSBASECALCULO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_DESCONTARICMSBASECALCULOCOFINS_LABELS =
	{
		S: "S",
		N: "N",
	} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_EXCESSAOSTISENTOSFUSTFUNTTEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_EXCESSAOSTREDUCAOFUSTFUNTTEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_FINALIDADETRIBUTACAO_LABELS = {
	REM: "REM",
	RET: "RET",
	DEV: "DEV",
	COMP: "COMP",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_ICMSCONTRIBUINTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_IMPOSTOCOL_LABELS = {
	iva: "iva",
	impoconsumo: "impoconsumo",
	reteiva: "reteiva",
	reteica: "reteica",
	retefuente: "retefuente",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_IPIDEVOLUCAOOBS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_IRRFACUMULARVALOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_IRRFTIPORETENCAO_LABELS = {
	CX: "CX",
	CP: "CP",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_ISENTAIVACOL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_ISSBASECALCULO_LABELS = {
	B: "B",
	O: "O",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_RETENCAOSIAFI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_TIPOIMPCOL_LABELS = {
	imposto: "imposto",
	retencao: "retencao",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_TIPOOPERACAO_LABELS = {
	E: "E",
	S: "S",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cnf_classificacao_tributariaCfIpiTipoCalculoSchema = z.enum(
	["P", "V"],
	{
		error: () => ({
			message: "cf_ipi_tipo_calculo: valores válidos são [P, V]",
		}),
	},
);

export const cnf_classificacao_tributariaCfTipoTributacaoSchema = z.enum(
	["ICMS", "ISSQN", "NT"],
	{
		error: () => ({
			message: "cf_tipo_tributacao: valores válidos são [ICMS, ISSQN, NT]",
		}),
	},
);

export const cnf_classificacao_tributariaDescontarIcmsBaseCalculoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "descontar_icms_base_calculo: valores válidos são [S, N]",
		}),
	});

export const cnf_classificacao_tributariaDescontarIcmsBaseCalculoCofinsSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "descontar_icms_base_calculo_cofins: valores válidos são [S, N]",
		}),
	});

export const cnf_classificacao_tributariaExcessaoStIsentosFustFunttelSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "excessao_st_isentos_fust_funttel: valores válidos são [S, N]",
		}),
	});

export const cnf_classificacao_tributariaExcessaoStReducaoFustFunttelSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "excessao_st_reducao_fust_funttel: valores válidos são [S, N]",
		}),
	});

export const cnf_classificacao_tributariaFinalidadeTributacaoSchema = z.enum(
	["REM", "RET", "DEV", "COMP"],
	{
		error: () => ({
			message:
				"finalidade_tributacao: valores válidos são [REM, RET, DEV, COMP]",
		}),
	},
);

export const cnf_classificacao_tributariaIcmsContribuinteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "icms_contribuinte: valores válidos são [S, N]" }),
	},
);

export const cnf_classificacao_tributariaImpostoColSchema = z.enum(
	["iva", "impoconsumo", "reteiva", "reteica", "retefuente"],
	{
		error: () => ({
			message:
				"imposto_col: valores válidos são [iva, impoconsumo, reteiva, reteica, retefuente]",
		}),
	},
);

export const cnf_classificacao_tributariaIpiDevolucaoObsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "ipi_devolucao_obs: valores válidos são [S, N]" }),
	},
);

export const cnf_classificacao_tributariaIrrfAcumularValorSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "irrf_acumular_valor: valores válidos são [S, N]",
		}),
	},
);

export const cnf_classificacao_tributariaIrrfTipoRetencaoSchema = z.enum(
	["CX", "CP"],
	{
		error: () => ({
			message: "irrf_tipo_retencao: valores válidos são [CX, CP]",
		}),
	},
);

export const cnf_classificacao_tributariaIsentaIvaColSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "isenta_iva_col: valores válidos são [S, N]" }),
	},
);

export const cnf_classificacao_tributariaIssBaseCalculoSchema = z.enum(
	["B", "O"],
	{
		error: () => ({ message: "iss_base_calculo: valores válidos são [B, O]" }),
	},
);

export const cnf_classificacao_tributariaRetencaoSiafiSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "retencao_siafi: valores válidos são [S, N]" }),
	},
);

export const cnf_classificacao_tributariaTipoImpColSchema = z.enum(
	["imposto", "retencao"],
	{
		error: () => ({
			message: "tipo_imp_col: valores válidos são [imposto, retencao]",
		}),
	},
);

export const cnf_classificacao_tributariaTipoOperacaoSchema = z.enum(
	["E", "S"],
	{
		error: () => ({ message: "tipo_operacao: valores válidos são [E, S]" }),
	},
);

export const cnf_classificacao_tributariaTipoTributacaoSchema = z.enum(
	["ICMS", "ISSQN"],
	{
		error: () => ({
			message: "tipo_tributacao: valores válidos são [ICMS, ISSQN]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CnfClassificacaoTributariaCfIpiTipoCalculo = z.infer<
	typeof cnf_classificacao_tributariaCfIpiTipoCalculoSchema
>;

export type CnfClassificacaoTributariaCfTipoTributacao = z.infer<
	typeof cnf_classificacao_tributariaCfTipoTributacaoSchema
>;

export type CnfClassificacaoTributariaDescontarIcmsBaseCalculo = z.infer<
	typeof cnf_classificacao_tributariaDescontarIcmsBaseCalculoSchema
>;

export type CnfClassificacaoTributariaDescontarIcmsBaseCalculoCofins = z.infer<
	typeof cnf_classificacao_tributariaDescontarIcmsBaseCalculoCofinsSchema
>;

export type CnfClassificacaoTributariaExcessaoStIsentosFustFunttel = z.infer<
	typeof cnf_classificacao_tributariaExcessaoStIsentosFustFunttelSchema
>;

export type CnfClassificacaoTributariaExcessaoStReducaoFustFunttel = z.infer<
	typeof cnf_classificacao_tributariaExcessaoStReducaoFustFunttelSchema
>;

export type CnfClassificacaoTributariaFinalidadeTributacao = z.infer<
	typeof cnf_classificacao_tributariaFinalidadeTributacaoSchema
>;

export type CnfClassificacaoTributariaIcmsContribuinte = z.infer<
	typeof cnf_classificacao_tributariaIcmsContribuinteSchema
>;

export type CnfClassificacaoTributariaImpostoCol = z.infer<
	typeof cnf_classificacao_tributariaImpostoColSchema
>;

export type CnfClassificacaoTributariaIpiDevolucaoObs = z.infer<
	typeof cnf_classificacao_tributariaIpiDevolucaoObsSchema
>;

export type CnfClassificacaoTributariaIrrfAcumularValor = z.infer<
	typeof cnf_classificacao_tributariaIrrfAcumularValorSchema
>;

export type CnfClassificacaoTributariaIrrfTipoRetencao = z.infer<
	typeof cnf_classificacao_tributariaIrrfTipoRetencaoSchema
>;

export type CnfClassificacaoTributariaIsentaIvaCol = z.infer<
	typeof cnf_classificacao_tributariaIsentaIvaColSchema
>;

export type CnfClassificacaoTributariaIssBaseCalculo = z.infer<
	typeof cnf_classificacao_tributariaIssBaseCalculoSchema
>;

export type CnfClassificacaoTributariaRetencaoSiafi = z.infer<
	typeof cnf_classificacao_tributariaRetencaoSiafiSchema
>;

export type CnfClassificacaoTributariaTipoImpCol = z.infer<
	typeof cnf_classificacao_tributariaTipoImpColSchema
>;

export type CnfClassificacaoTributariaTipoOperacao = z.infer<
	typeof cnf_classificacao_tributariaTipoOperacaoSchema
>;

export type CnfClassificacaoTributariaTipoTributacao = z.infer<
	typeof cnf_classificacao_tributariaTipoTributacaoSchema
>;

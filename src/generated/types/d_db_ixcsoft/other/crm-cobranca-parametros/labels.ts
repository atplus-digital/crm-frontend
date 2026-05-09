/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMCOBRANCAPARAMETROS_ANEXARBOLETOS0_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_AUTOEXECPASSO2_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_AUTOEXECPASSO3_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_AUTOEXECPASSO4_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_AUTOEXECPASSO5_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_AUTOEXECPASSOP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_CARTACOBRANCAANEXARBOLETO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILACRESJUROS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILACRESJUROS2_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILACRESJUROSP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILACRESMULTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILACRESMULTA2_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILACRESMULTAP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILANEXARBOLETOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILANEXARBOLETOS2_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_EMAILANEXARBOLETOSP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMCOBRANCAPARAMETROS_NEGAUTOMSERASA_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CRMCOBRANCAPARAMETROS_REMAUTOMSERASA_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CRMCOBRANCAPARAMETROS_TRATACOBRANCAINDIVIDUAL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_cobranca_parametrosAnexarBoletos0Schema = z.enum(["S", "N"], {
	error: () => ({ message: "anexar_boletos_0: valores válidos são [S, N]" }),
});

export const crm_cobranca_parametrosAutoExecPasso2Schema = z.enum(["S", "N"], {
	error: () => ({ message: "auto_exec_passo_2: valores válidos são [S, N]" }),
});

export const crm_cobranca_parametrosAutoExecPasso3Schema = z.enum(["S", "N"], {
	error: () => ({ message: "auto_exec_passo_3: valores válidos são [S, N]" }),
});

export const crm_cobranca_parametrosAutoExecPasso4Schema = z.enum(["S", "N"], {
	error: () => ({ message: "auto_exec_passo_4: valores válidos são [S, N]" }),
});

export const crm_cobranca_parametrosAutoExecPasso5Schema = z.enum(["S", "N"], {
	error: () => ({ message: "auto_exec_passo_5: valores válidos são [S, N]" }),
});

export const crm_cobranca_parametrosAutoExecPassoPSchema = z.enum(["S", "N"], {
	error: () => ({ message: "auto_exec_passo_P: valores válidos são [S, N]" }),
});

export const crm_cobranca_parametrosCartaCobrancaAnexarBoletoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "carta_cobranca_anexar_boleto: valores válidos são [S, N]",
		}),
	},
);

export const crm_cobranca_parametrosEmailAcresJurosSchema = z.enum(["S", "N"], {
	error: () => ({ message: "email_acres_juros: valores válidos são [S, N]" }),
});

export const crm_cobranca_parametrosEmailAcresJuros2Schema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "email_acres_juros_2: valores válidos são [S, N]",
		}),
	},
);

export const crm_cobranca_parametrosEmailAcresJurosPSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "email_acres_juros_P: valores válidos são [S, N]",
		}),
	},
);

export const crm_cobranca_parametrosEmailAcresMultaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "email_acres_multa: valores válidos são [S, N]" }),
});

export const crm_cobranca_parametrosEmailAcresMulta2Schema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "email_acres_multa_2: valores válidos são [S, N]",
		}),
	},
);

export const crm_cobranca_parametrosEmailAcresMultaPSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "email_acres_multa_P: valores válidos são [S, N]",
		}),
	},
);

export const crm_cobranca_parametrosEmailAnexarBoletosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "email_anexar_boletos: valores válidos são [S, N]",
		}),
	},
);

export const crm_cobranca_parametrosEmailAnexarBoletos2Schema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "email_anexar_boletos_2: valores válidos são [S, N]",
		}),
	},
);

export const crm_cobranca_parametrosEmailAnexarBoletosPSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "email_anexar_boletos_P: valores válidos são [S, N]",
		}),
	},
);

export const crm_cobranca_parametrosNegAutomSerasaSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "neg_autom_serasa: valores válidos são [S, N, P]",
		}),
	},
);

export const crm_cobranca_parametrosRemAutomSerasaSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "rem_autom_serasa: valores válidos são [S, N, P]",
		}),
	},
);

export const crm_cobranca_parametrosTrataCobrancaIndividualSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "trata_cobranca_individual: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmCobrancaParametrosAnexarBoletos0 = z.infer<
	typeof crm_cobranca_parametrosAnexarBoletos0Schema
>;

export type CrmCobrancaParametrosAutoExecPasso2 = z.infer<
	typeof crm_cobranca_parametrosAutoExecPasso2Schema
>;

export type CrmCobrancaParametrosAutoExecPasso3 = z.infer<
	typeof crm_cobranca_parametrosAutoExecPasso3Schema
>;

export type CrmCobrancaParametrosAutoExecPasso4 = z.infer<
	typeof crm_cobranca_parametrosAutoExecPasso4Schema
>;

export type CrmCobrancaParametrosAutoExecPasso5 = z.infer<
	typeof crm_cobranca_parametrosAutoExecPasso5Schema
>;

export type CrmCobrancaParametrosAutoExecPassoP = z.infer<
	typeof crm_cobranca_parametrosAutoExecPassoPSchema
>;

export type CrmCobrancaParametrosCartaCobrancaAnexarBoleto = z.infer<
	typeof crm_cobranca_parametrosCartaCobrancaAnexarBoletoSchema
>;

export type CrmCobrancaParametrosEmailAcresJuros = z.infer<
	typeof crm_cobranca_parametrosEmailAcresJurosSchema
>;

export type CrmCobrancaParametrosEmailAcresJuros2 = z.infer<
	typeof crm_cobranca_parametrosEmailAcresJuros2Schema
>;

export type CrmCobrancaParametrosEmailAcresJurosP = z.infer<
	typeof crm_cobranca_parametrosEmailAcresJurosPSchema
>;

export type CrmCobrancaParametrosEmailAcresMulta = z.infer<
	typeof crm_cobranca_parametrosEmailAcresMultaSchema
>;

export type CrmCobrancaParametrosEmailAcresMulta2 = z.infer<
	typeof crm_cobranca_parametrosEmailAcresMulta2Schema
>;

export type CrmCobrancaParametrosEmailAcresMultaP = z.infer<
	typeof crm_cobranca_parametrosEmailAcresMultaPSchema
>;

export type CrmCobrancaParametrosEmailAnexarBoletos = z.infer<
	typeof crm_cobranca_parametrosEmailAnexarBoletosSchema
>;

export type CrmCobrancaParametrosEmailAnexarBoletos2 = z.infer<
	typeof crm_cobranca_parametrosEmailAnexarBoletos2Schema
>;

export type CrmCobrancaParametrosEmailAnexarBoletosP = z.infer<
	typeof crm_cobranca_parametrosEmailAnexarBoletosPSchema
>;

export type CrmCobrancaParametrosNegAutomSerasa = z.infer<
	typeof crm_cobranca_parametrosNegAutomSerasaSchema
>;

export type CrmCobrancaParametrosRemAutomSerasa = z.infer<
	typeof crm_cobranca_parametrosRemAutomSerasaSchema
>;

export type CrmCobrancaParametrosTrataCobrancaIndividual = z.infer<
	typeof crm_cobranca_parametrosTrataCobrancaIndividualSchema
>;

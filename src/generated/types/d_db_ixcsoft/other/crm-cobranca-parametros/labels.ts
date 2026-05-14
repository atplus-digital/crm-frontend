/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMCOBRANCAPARAMETROS_FIELD_LABELS = {
	anexar_boletos_0: "anexar_boletos_0",
	auto_exec_passo_2: "auto_exec_passo_2",
	auto_exec_passo_3: "auto_exec_passo_3",
	auto_exec_passo_4: "auto_exec_passo_4",
	auto_exec_passo_5: "auto_exec_passo_5",
	auto_exec_passo_P: "auto_exec_passo_P",
	carta_cobranca_anexar_boleto: "carta_cobranca_anexar_boleto",
	dias_executar_status_0: "dias_executar_status_0",
	dias_executar_status_2: "dias_executar_status_2",
	dias_executar_status_3: "dias_executar_status_3",
	dias_executar_status_4: "dias_executar_status_4",
	dias_executar_status_5: "dias_executar_status_5",
	dias_executar_status_P: "dias_executar_status_P",
	dias_prox_acao_2: "dias_prox_acao_2",
	dias_prox_acao_3: "dias_prox_acao_3",
	dias_prox_acao_4: "dias_prox_acao_4",
	dias_prox_acao_5: "dias_prox_acao_5",
	dias_prox_acao_F: "dias_prox_acao_F",
	dias_prox_acao_P: "dias_prox_acao_P",
	email_acres_dias: "email_acres_dias",
	email_acres_dias_2: "email_acres_dias_2",
	email_acres_dias_P: "email_acres_dias_P",
	email_acres_juros: "email_acres_juros",
	email_acres_juros_2: "email_acres_juros_2",
	email_acres_juros_P: "email_acres_juros_P",
	email_acres_multa: "email_acres_multa",
	email_acres_multa_2: "email_acres_multa_2",
	email_acres_multa_P: "email_acres_multa_P",
	email_adm_finan: "email_adm_finan",
	email_anexar_boletos: "email_anexar_boletos",
	email_anexar_boletos_2: "email_anexar_boletos_2",
	email_anexar_boletos_P: "email_anexar_boletos_P",
	email_dest_log: "email_dest_log",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_email_spc: "id_email_spc",
	id_email_status_0: "id_email_status_0",
	id_email_status_2: "id_email_status_2",
	id_email_status_3: "id_email_status_3",
	id_email_status_4: "id_email_status_4",
	id_email_status_5: "id_email_status_5",
	id_email_status_F: "id_email_status_F",
	id_email_status_P: "id_email_status_P",
	id_email_statusFB: "id_email_statusFB",
	id_email_statusFC: "id_email_statusFC",
	id_mensagem_omnichannel_1: "id_mensagem_omnichannel_1",
	id_mensagem_omnichannel_2: "id_mensagem_omnichannel_2",
	id_mensagem_omnichannel_3: "id_mensagem_omnichannel_3",
	id_mensagem_omnichannel_4: "id_mensagem_omnichannel_4",
	id_mensagem_omnichannel_5: "id_mensagem_omnichannel_5",
	id_mensagem_omnichannel_6: "id_mensagem_omnichannel_6",
	id_mensagem_omnichannel_F: "id_mensagem_omnichannel_F",
	id_mensagem_omnichannel_FB: "id_mensagem_omnichannel_FB",
	id_mensagem_omnichannel_FC: "id_mensagem_omnichannel_FC",
	id_mensagem_omnichannel_spc: "id_mensagem_omnichannel_spc",
	id_modelo_carta_acao_4: "id_modelo_carta_acao_4",
	id_oss_spc: "id_oss_spc",
	id_oss_status_2: "id_oss_status_2",
	id_oss_status_3: "id_oss_status_3",
	id_oss_status_4: "id_oss_status_4",
	id_oss_status_5: "id_oss_status_5",
	id_oss_status_F: "id_oss_status_F",
	id_oss_status_P: "id_oss_status_P",
	id_oss_statusFC: "id_oss_statusFC",
	id_push_spc: "id_push_spc",
	id_push_status_0: "id_push_status_0",
	id_push_status_2: "id_push_status_2",
	id_push_status_3: "id_push_status_3",
	id_push_status_4: "id_push_status_4",
	id_push_status_5: "id_push_status_5",
	id_push_status_F: "id_push_status_F",
	id_push_status_p: "id_push_status_p",
	id_push_statusFB: "id_push_statusFB",
	id_push_statusFC: "id_push_statusFC",
	id_sms_status_0: "id_sms_status_0",
	id_sms_status_2: "id_sms_status_2",
	id_sms_status_3: "id_sms_status_3",
	id_sms_status_4: "id_sms_status_4",
	id_sms_status_5: "id_sms_status_5",
	id_sms_status_F: "id_sms_status_F",
	id_sms_status_P: "id_sms_status_P",
	id_sms_statusFB: "id_sms_statusFB",
	id_sms_statusFC: "id_sms_statusFC",
	id_smtp_envio_log: "id_smtp_envio_log",
	id_smtp_envio_status_4: "id_smtp_envio_status_4",
	neg_autom_serasa: "neg_autom_serasa",
	notificacao_push_central: "notificacao_push_central",
	prox_passo_2: "prox_passo_2",
	prox_passo_3: "prox_passo_3",
	prox_passo_4: "prox_passo_4",
	prox_passo_P: "prox_passo_P",
	rem_autom_serasa: "rem_autom_serasa",
	texto_email_spc: "texto_email_spc",
	tipo_contato_padrao_passo_2: "tipo_contato_padrao_passo_2",
	tipo_contato_padrao_passo_3: "tipo_contato_padrao_passo_3",
	tipo_contato_padrao_passo_4: "tipo_contato_padrao_passo_4",
	tipo_contato_padrao_passo_5: "tipo_contato_padrao_passo_5",
	trata_cobranca_individual: "trata_cobranca_individual",
} as const;

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

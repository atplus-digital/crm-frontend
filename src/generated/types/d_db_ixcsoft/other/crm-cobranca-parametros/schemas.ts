/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_cobranca_parametrosAnexarBoletos0Schema,
	crm_cobranca_parametrosAutoExecPasso2Schema,
	crm_cobranca_parametrosAutoExecPasso3Schema,
	crm_cobranca_parametrosAutoExecPasso4Schema,
	crm_cobranca_parametrosAutoExecPasso5Schema,
	crm_cobranca_parametrosAutoExecPassoPSchema,
	crm_cobranca_parametrosCartaCobrancaAnexarBoletoSchema,
	crm_cobranca_parametrosEmailAcresJuros2Schema,
	crm_cobranca_parametrosEmailAcresJurosPSchema,
	crm_cobranca_parametrosEmailAcresJurosSchema,
	crm_cobranca_parametrosEmailAcresMulta2Schema,
	crm_cobranca_parametrosEmailAcresMultaPSchema,
	crm_cobranca_parametrosEmailAcresMultaSchema,
	crm_cobranca_parametrosEmailAnexarBoletos2Schema,
	crm_cobranca_parametrosEmailAnexarBoletosPSchema,
	crm_cobranca_parametrosEmailAnexarBoletosSchema,
	crm_cobranca_parametrosNegAutomSerasaSchema,
	crm_cobranca_parametrosRemAutomSerasaSchema,
	crm_cobranca_parametrosTrataCobrancaIndividualSchema,
} from "./labels";

export const CRM_COBRANCA_PARAMETROS_TABLE_NAME = "crm_cobranca_parametros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_cobranca_parametrosBaseSchema = z.object({
	id: z.number(),
	anexar_boletos_0: crm_cobranca_parametrosAnexarBoletos0Schema,
	auto_exec_passo_2: crm_cobranca_parametrosAutoExecPasso2Schema,
	auto_exec_passo_3: crm_cobranca_parametrosAutoExecPasso3Schema,
	auto_exec_passo_4: crm_cobranca_parametrosAutoExecPasso4Schema,
	auto_exec_passo_5: crm_cobranca_parametrosAutoExecPasso5Schema,
	auto_exec_passo_P: crm_cobranca_parametrosAutoExecPassoPSchema,
	carta_cobranca_anexar_boleto:
		crm_cobranca_parametrosCartaCobrancaAnexarBoletoSchema,
	dias_executar_status_0: z.string(),
	dias_executar_status_2: z.string(),
	dias_executar_status_3: z.string(),
	dias_executar_status_4: z.string(),
	dias_executar_status_5: z.string(),
	dias_executar_status_P: z.string(),
	dias_prox_acao_2: z.number(),
	dias_prox_acao_3: z.number(),
	dias_prox_acao_4: z.number(),
	dias_prox_acao_5: z.number(),
	dias_prox_acao_F: z.number(),
	dias_prox_acao_P: z.number(),
	email_acres_dias: z.number(),
	email_acres_dias_2: z.number(),
	email_acres_dias_P: z.number(),
	email_acres_juros: crm_cobranca_parametrosEmailAcresJurosSchema,
	email_acres_juros_2: crm_cobranca_parametrosEmailAcresJuros2Schema,
	email_acres_juros_P: crm_cobranca_parametrosEmailAcresJurosPSchema,
	email_acres_multa: crm_cobranca_parametrosEmailAcresMultaSchema,
	email_acres_multa_2: crm_cobranca_parametrosEmailAcresMulta2Schema,
	email_acres_multa_P: crm_cobranca_parametrosEmailAcresMultaPSchema,
	email_adm_finan: z.string(),
	email_anexar_boletos: crm_cobranca_parametrosEmailAnexarBoletosSchema,
	email_anexar_boletos_2: crm_cobranca_parametrosEmailAnexarBoletos2Schema,
	email_anexar_boletos_P: crm_cobranca_parametrosEmailAnexarBoletosPSchema,
	email_dest_log: z.string(),
	id_carteira_cobranca: z.number(),
	id_email_spc: z.number(),
	id_email_status_0: z.number(),
	id_email_status_2: z.number(),
	id_email_status_3: z.number(),
	id_email_status_4: z.number(),
	id_email_status_5: z.number(),
	id_email_status_F: z.number(),
	id_email_status_P: z.number(),
	id_email_statusFB: z.number(),
	id_email_statusFC: z.number(),
	id_mensagem_omnichannel_1: z.number(),
	id_mensagem_omnichannel_2: z.number(),
	id_mensagem_omnichannel_3: z.number(),
	id_mensagem_omnichannel_4: z.number(),
	id_mensagem_omnichannel_5: z.number(),
	id_mensagem_omnichannel_6: z.number(),
	id_mensagem_omnichannel_F: z.number(),
	id_mensagem_omnichannel_FB: z.number(),
	id_mensagem_omnichannel_FC: z.number(),
	id_mensagem_omnichannel_spc: z.number(),
	id_modelo_carta_acao_4: z.number(),
	id_oss_spc: z.number(),
	id_oss_status_2: z.number(),
	id_oss_status_3: z.number(),
	id_oss_status_4: z.number(),
	id_oss_status_5: z.number(),
	id_oss_status_F: z.number(),
	id_oss_status_P: z.number(),
	id_oss_statusFC: z.number(),
	id_push_spc: z.number(),
	id_push_status_0: z.number(),
	id_push_status_2: z.number(),
	id_push_status_3: z.number(),
	id_push_status_4: z.number(),
	id_push_status_5: z.number(),
	id_push_status_F: z.number(),
	id_push_status_p: z.number(),
	id_push_statusFB: z.number(),
	id_push_statusFC: z.number(),
	id_sms_status_0: z.number(),
	id_sms_status_2: z.number(),
	id_sms_status_3: z.number(),
	id_sms_status_4: z.number(),
	id_sms_status_5: z.number(),
	id_sms_status_F: z.number(),
	id_sms_status_P: z.number(),
	id_sms_statusFB: z.number(),
	id_sms_statusFC: z.number(),
	id_smtp_envio_log: z.number(),
	id_smtp_envio_status_4: z.number(),
	neg_autom_serasa: crm_cobranca_parametrosNegAutomSerasaSchema,
	notificacao_push_central: z.string(),
	prox_passo_2: z.string(),
	prox_passo_3: z.string(),
	prox_passo_4: z.string(),
	prox_passo_P: z.string(),
	rem_autom_serasa: crm_cobranca_parametrosRemAutomSerasaSchema,
	texto_email_spc: z.string(),
	tipo_contato_padrao_passo_2: z.string(),
	tipo_contato_padrao_passo_3: z.string(),
	tipo_contato_padrao_passo_4: z.string(),
	tipo_contato_padrao_passo_5: z.string(),
	trata_cobranca_individual:
		crm_cobranca_parametrosTrataCobrancaIndividualSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_cobranca_parametrosSchema = crm_cobranca_parametrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_cobranca_parametrosCreateSchema =
	crm_cobranca_parametrosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_cobranca_parametrosUpdateSchema =
	crm_cobranca_parametrosCreateSchema.partial();

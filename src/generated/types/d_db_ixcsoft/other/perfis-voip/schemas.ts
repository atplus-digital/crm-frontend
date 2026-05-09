/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	perfis_voipBillingSchema,
	perfis_voipBloquearLigacoesCobrarZeusSchema,
	perfis_voipBloquearLigacoesLdiZeusSchema,
	perfis_voipBloquearLigacoesLdnZeusSchema,
	perfis_voipBloquearLigacoesVc1ZeusSchema,
	perfis_voipRechargeSettingsSchema,
	perfis_voipSippulseActivatedailystatisticsSchema,
	perfis_voipSippulseActiveincomingcallsSchema,
	perfis_voipSippulseActiveoutgoingcallsSchema,
	perfis_voipSippulseCallsonlybyipSchema,
	perfis_voipSippulseDailyQuotaSchema,
	perfis_voipSippulseDailyQuotaTipoSchema,
	perfis_voipVscAllowcollectcallsSchema,
	perfis_voipVscDontuseccforauthSchema,
} from "./labels";

export const PERFIS_VOIP_TABLE_NAME = "perfis_voip";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const perfis_voipBaseSchema = z.object({
	id: z.number(),
	billing: perfis_voipBillingSchema,
	bloquear_ligacoes_cobrar_zeus: perfis_voipBloquearLigacoesCobrarZeusSchema,
	bloquear_ligacoes_ldi_zeus: perfis_voipBloquearLigacoesLdiZeusSchema,
	bloquear_ligacoes_ldn_zeus: perfis_voipBloquearLigacoesLdnZeusSchema,
	bloquear_ligacoes_vc1_zeus: perfis_voipBloquearLigacoesVc1ZeusSchema,
	credit_limit: z.number(),
	dia_recarga_padrao: z.number(),
	gateway: z.string(),
	grupo_plano_zeus: z.string(),
	id_integracao: z.number(),
	id_revenda_sip_pulse: z.number(),
	limite_creditos_zeus: z.number(),
	nao_perturbe_zeus: z.number(),
	nome: z.string(),
	plano_zeus: z.number(),
	profile: z.string(),
	recharge_settings: perfis_voipRechargeSettingsSchema,
	sippulse_activatedailystatistics:
		perfis_voipSippulseActivatedailystatisticsSchema,
	sippulse_activeIncomingCalls: perfis_voipSippulseActiveincomingcallsSchema,
	sippulse_activeOutgoingCalls: perfis_voipSippulseActiveoutgoingcallsSchema,
	sippulse_callsOnlyByIp: perfis_voipSippulseCallsonlybyipSchema,
	sippulse_city_code: z.number(),
	sippulse_daily_quota: perfis_voipSippulseDailyQuotaSchema,
	sippulse_daily_quota_tipo: perfis_voipSippulseDailyQuotaTipoSchema,
	sippulse_dominio: z.string(),
	sippulse_local_area: z.string(),
	sippulse_rateplanid: z.number(),
	tech_prefix_zeus: z.number(),
	tysa_line_call_limit: z.string(),
	tysa_line_function: z.string(),
	tysa_line_ip_add: z.string(),
	tysa_line_status: z.string(),
	tysa_line_type: z.string(),
	tysa_line_user_type: z.string(),
	user_code: z.string(),
	vencimento_zeus: z.number(),
	vsc_allowcollectcalls: perfis_voipVscAllowcollectcallsSchema,
	vsc_ddd: z.number(),
	vsc_ddi: z.number(),
	vsc_did_prefix: z.number(),
	vsc_dontuseccforauth: perfis_voipVscDontuseccforauthSchema,
	vsc_idd_prefix: z.string(),
	vsc_inboundcallslimit: z.number(),
	vsc_ndd_prefix: z.string(),
	vsc_outboundcallslimit: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const perfis_voipSchema = perfis_voipBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const perfis_voipCreateSchema = perfis_voipSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const perfis_voipUpdateSchema = perfis_voipCreateSchema.partial();

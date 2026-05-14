/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PERFISVOIP_FIELD_LABELS = {
	billing: "billing",
	bloquear_ligacoes_cobrar_zeus: "bloquear_ligacoes_cobrar_zeus",
	bloquear_ligacoes_ldi_zeus: "bloquear_ligacoes_ldi_zeus",
	bloquear_ligacoes_ldn_zeus: "bloquear_ligacoes_ldn_zeus",
	bloquear_ligacoes_vc1_zeus: "bloquear_ligacoes_vc1_zeus",
	credit_limit: "credit_limit",
	dia_recarga_padrao: "dia_recarga_padrao",
	gateway: "gateway",
	grupo_plano_zeus: "grupo_plano_zeus",
	id: "id",
	id_integracao: "id_integracao",
	id_revenda_sip_pulse: "id_revenda_sip_pulse",
	limite_creditos_zeus: "limite_creditos_zeus",
	nao_perturbe_zeus: "nao_perturbe_zeus",
	nome: "nome",
	plano_zeus: "plano_zeus",
	profile: "profile",
	recharge_settings: "recharge_settings",
	sippulse_activatedailystatistics: "sippulse_activatedailystatistics",
	sippulse_activeIncomingCalls: "sippulse_activeIncomingCalls",
	sippulse_activeOutgoingCalls: "sippulse_activeOutgoingCalls",
	sippulse_callsOnlyByIp: "sippulse_callsOnlyByIp",
	sippulse_city_code: "sippulse_city_code",
	sippulse_daily_quota: "sippulse_daily_quota",
	sippulse_daily_quota_tipo: "sippulse_daily_quota_tipo",
	sippulse_dominio: "sippulse_dominio",
	sippulse_local_area: "sippulse_local_area",
	sippulse_rateplanid: "sippulse_rateplanid",
	tech_prefix_zeus: "tech_prefix_zeus",
	tysa_line_call_limit: "tysa_line_call_limit",
	tysa_line_function: "tysa_line_function",
	tysa_line_ip_add: "tysa_line_ip_add",
	tysa_line_status: "tysa_line_status",
	tysa_line_type: "tysa_line_type",
	tysa_line_user_type: "tysa_line_user_type",
	user_code: "user_code",
	vencimento_zeus: "vencimento_zeus",
	vsc_allowcollectcalls: "vsc_allowcollectcalls",
	vsc_ddd: "vsc_ddd",
	vsc_ddi: "vsc_ddi",
	vsc_did_prefix: "vsc_did_prefix",
	vsc_dontuseccforauth: "vsc_dontuseccforauth",
	vsc_idd_prefix: "vsc_idd_prefix",
	vsc_inboundcallslimit: "vsc_inboundcallslimit",
	vsc_ndd_prefix: "vsc_ndd_prefix",
	vsc_outboundcallslimit: "vsc_outboundcallslimit",
} as const;

export const PERFISVOIP_BILLING_LABELS = {
	C: "C",
	D: "D",
	L: "L",
} as const;

export const PERFISVOIP_BLOQUEARLIGACOESCOBRARZEUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_BLOQUEARLIGACOESLDIZEUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_BLOQUEARLIGACOESLDNZEUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_BLOQUEARLIGACOESVC1ZEUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_RECHARGESETTINGS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_SIPPULSEACTIVATEDAILYSTATISTICS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_SIPPULSEACTIVEINCOMINGCALLS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_SIPPULSEACTIVEOUTGOINGCALLS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_SIPPULSECALLSONLYBYIP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_SIPPULSEDAILYQUOTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PERFISVOIP_SIPPULSEDAILYQUOTATIPO_LABELS = {
	M: "M",
	V: "V",
} as const;

export const PERFISVOIP_VSCALLOWCOLLECTCALLS_LABELS = {
	true: "true",
	false: "false",
} as const;

export const PERFISVOIP_VSCDONTUSECCFORAUTH_LABELS = {
	true: "true",
	false: "false",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const perfis_voipBillingSchema = z.enum(["C", "D", "L"], {
	error: () => ({ message: "billing: valores válidos são [C, D, L]" }),
});

export const perfis_voipBloquearLigacoesCobrarZeusSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloquear_ligacoes_cobrar_zeus: valores válidos são [S, N]",
	}),
});

export const perfis_voipBloquearLigacoesLdiZeusSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloquear_ligacoes_ldi_zeus: valores válidos são [S, N]",
	}),
});

export const perfis_voipBloquearLigacoesLdnZeusSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloquear_ligacoes_ldn_zeus: valores válidos são [S, N]",
	}),
});

export const perfis_voipBloquearLigacoesVc1ZeusSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloquear_ligacoes_vc1_zeus: valores válidos são [S, N]",
	}),
});

export const perfis_voipRechargeSettingsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "recharge_settings: valores válidos são [S, N]" }),
});

export const perfis_voipSippulseActivatedailystatisticsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "sippulse_activatedailystatistics: valores válidos são [S, N]",
		}),
	},
);

export const perfis_voipSippulseActiveincomingcallsSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "sippulse_activeIncomingCalls: valores válidos são [S, N]",
	}),
});

export const perfis_voipSippulseActiveoutgoingcallsSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "sippulse_activeOutgoingCalls: valores válidos são [S, N]",
	}),
});

export const perfis_voipSippulseCallsonlybyipSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "sippulse_callsOnlyByIp: valores válidos são [S, N]",
	}),
});

export const perfis_voipSippulseDailyQuotaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "sippulse_daily_quota: valores válidos são [S, N]",
	}),
});

export const perfis_voipSippulseDailyQuotaTipoSchema = z.enum(["M", "V"], {
	error: () => ({
		message: "sippulse_daily_quota_tipo: valores válidos são [M, V]",
	}),
});

export const perfis_voipVscAllowcollectcallsSchema = z.enum(["true", "false"], {
	error: () => ({
		message: "vsc_allowcollectcalls: valores válidos são [true, false]",
	}),
});

export const perfis_voipVscDontuseccforauthSchema = z.enum(["true", "false"], {
	error: () => ({
		message: "vsc_dontuseccforauth: valores válidos são [true, false]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PerfisVoipBilling = z.infer<typeof perfis_voipBillingSchema>;

export type PerfisVoipBloquearLigacoesCobrarZeus = z.infer<
	typeof perfis_voipBloquearLigacoesCobrarZeusSchema
>;

export type PerfisVoipBloquearLigacoesLdiZeus = z.infer<
	typeof perfis_voipBloquearLigacoesLdiZeusSchema
>;

export type PerfisVoipBloquearLigacoesLdnZeus = z.infer<
	typeof perfis_voipBloquearLigacoesLdnZeusSchema
>;

export type PerfisVoipBloquearLigacoesVc1Zeus = z.infer<
	typeof perfis_voipBloquearLigacoesVc1ZeusSchema
>;

export type PerfisVoipRechargeSettings = z.infer<
	typeof perfis_voipRechargeSettingsSchema
>;

export type PerfisVoipSippulseActivatedailystatistics = z.infer<
	typeof perfis_voipSippulseActivatedailystatisticsSchema
>;

export type PerfisVoipSippulseActiveincomingcalls = z.infer<
	typeof perfis_voipSippulseActiveincomingcallsSchema
>;

export type PerfisVoipSippulseActiveoutgoingcalls = z.infer<
	typeof perfis_voipSippulseActiveoutgoingcallsSchema
>;

export type PerfisVoipSippulseCallsonlybyip = z.infer<
	typeof perfis_voipSippulseCallsonlybyipSchema
>;

export type PerfisVoipSippulseDailyQuota = z.infer<
	typeof perfis_voipSippulseDailyQuotaSchema
>;

export type PerfisVoipSippulseDailyQuotaTipo = z.infer<
	typeof perfis_voipSippulseDailyQuotaTipoSchema
>;

export type PerfisVoipVscAllowcollectcalls = z.infer<
	typeof perfis_voipVscAllowcollectcallsSchema
>;

export type PerfisVoipVscDontuseccforauth = z.infer<
	typeof perfis_voipVscDontuseccforauthSchema
>;

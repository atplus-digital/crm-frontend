/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VOIPSIPPEERS_FIELD_LABELS = {
	accountcode: "accountcode",
	allow: "allow",
	allowoverlap: "allowoverlap",
	allowsubscribe: "allowsubscribe",
	allowtransfer: "allowtransfer",
	amaflags: "amaflags",
	ativo: "ativo",
	ativo_summit: "ativo_summit",
	auth: "auth",
	autoframing: "autoframing",
	billing: "billing",
	bloquear_ligacoes_cobrar_zeus: "bloquear_ligacoes_cobrar_zeus",
	bloquear_ligacoes_ldi_zeus: "bloquear_ligacoes_ldi_zeus",
	bloquear_ligacoes_ldn_zeus: "bloquear_ligacoes_ldn_zeus",
	bloquear_ligacoes_vc1_zeus: "bloquear_ligacoes_vc1_zeus",
	buggymwi: "buggymwi",
	busylevel: "busylevel",
	"call-limit": "call-limit",
	callbackextension: "callbackextension",
	callcounter: "callcounter",
	callerid: "callerid",
	callgroup: "callgroup",
	callingpres: "callingpres",
	categoria_summit: "categoria_summit",
	centro_custo_summit: "centro_custo_summit",
	cid_number: "cid_number",
	codecs: "codecs",
	comments_summit: "comments_summit",
	constantssrc: "constantssrc",
	contactdeny: "contactdeny",
	contactpermit: "contactpermit",
	context: "context",
	credential_summit: "credential_summit",
	credit_limit: "credit_limit",
	data_ativacao_summit: "data_ativacao_summit",
	data_ativacao_zeus: "data_ativacao_zeus",
	data_cancelamento: "data_cancelamento",
	ddd: "ddd",
	ddd_saperx: "ddd_saperx",
	ddd_vsc: "ddd_vsc",
	ddi: "ddi",
	ddi_saperx: "ddi_saperx",
	ddi_vsc: "ddi_vsc",
	defaultip: "defaultip",
	defaultuser: "defaultuser",
	deny: "deny",
	descricao: "descricao",
	dia_fechamento: "dia_fechamento",
	dia_recarga_padrao: "dia_recarga_padrao",
	directmedia: "directmedia",
	disallow: "disallow",
	dtmfmode: "dtmfmode",
	dynamic: "dynamic",
	faxdetect: "faxdetect",
	fim_vigencia_summit: "fim_vigencia_summit",
	financeiro_automatico: "financeiro_automatico",
	fromdomain: "fromdomain",
	fromuser: "fromuser",
	fullcontact: "fullcontact",
	fullname: "fullname",
	g726nonstandard: "g726nonstandard",
	gravacao_chamada: "gravacao_chamada",
	grupo_plano_zeus: "grupo_plano_zeus",
	habilitar_ivr: "habilitar_ivr",
	hasvoicemail: "hasvoicemail",
	host: "host",
	id: "id",
	id_cidade: "id_cidade",
	id_contrato: "id_contrato",
	id_integracao: "id_integracao",
	id_origem: "id_origem",
	id_perfil_voip: "id_perfil_voip",
	id_perfis_voip: "id_perfis_voip",
	id_plano: "id_plano",
	id_plano_sip: "id_plano_sip",
	id_revenda_sip_pulse: "id_revenda_sip_pulse",
	id_sip: "id_sip",
	id_subscriber_integration: "id_subscriber_integration",
	id_vinculo: "id_vinculo",
	ignoresdpversion: "ignoresdpversion",
	informacao_portabilidade_sip: "informacao_portabilidade_sip",
	inicio_vigencia_summit: "inicio_vigencia_summit",
	insecure: "insecure",
	ipaddr: "ipaddr",
	language: "language",
	lastms: "lastms",
	licenca_summit: "licenca_summit",
	limite_chamadas_summit: "limite_chamadas_summit",
	limite_creditos_zeus: "limite_creditos_zeus",
	logar_com_ip: "logar_com_ip",
	mailbox: "mailbox",
	maxcallbitrate: "maxcallbitrate",
	md5secret: "md5secret",
	mohinterpret: "mohinterpret",
	mohsuggest: "mohsuggest",
	name: "name",
	nao_perturbe_zeus: "nao_perturbe_zeus",
	nat: "nat",
	numero: "numero",
	outboundproxy: "outboundproxy",
	padrao: "padrao",
	parkinglot: "parkinglot",
	particao_assinante_summit: "particao_assinante_summit",
	path: "path",
	permit: "permit",
	pickupgroup: "pickupgroup",
	plano_magnus: "plano_magnus",
	plano_summit: "plano_summit",
	plano_zeus: "plano_zeus",
	port: "port",
	porta_sbc_summit: "porta_sbc_summit",
	portabilidade_summit: "portabilidade_summit",
	profile: "profile",
	progressinband: "progressinband",
	promiscredir: "promiscredir",
	qualify: "qualify",
	qualifyfreq: "qualifyfreq",
	range_final_summit: "range_final_summit",
	range_inicial_summit: "range_inicial_summit",
	recharge_settings: "recharge_settings",
	regexten: "regexten",
	regseconds: "regseconds",
	regserver: "regserver",
	remotesecret: "remotesecret",
	rfc2833compensate: "rfc2833compensate",
	rota_personalizada: "rota_personalizada",
	rtpholdtimeout: "rtpholdtimeout",
	rtpkeepalive: "rtpkeepalive",
	rtptimeout: "rtptimeout",
	saperx_ativo: "saperx_ativo",
	saperx_bina: "saperx_bina",
	saperx_lc: "saperx_lc",
	saperx_ldn: "saperx_ldn",
	saperx_plano: "saperx_plano",
	saperx_plano_desc: "saperx_plano_desc",
	saperx_plano_inter: "saperx_plano_inter",
	saperx_tipo: "saperx_tipo",
	saperx_vc1: "saperx_vc1",
	saperx_vc2: "saperx_vc2",
	saperx_vc3: "saperx_vc3",
	sapex_plano_tipo: "sapex_plano_tipo",
	secret: "secret",
	sendrpid: "sendrpid",
	senha_ata: "senha_ata",
	"session-expires": "session-expires",
	"session-minse": "session-minse",
	"session-refresher": "session-refresher",
	"session-timers": "session-timers",
	setvar: "setvar",
	sip_pulse_status: "sip_pulse_status",
	sippulse_activatedailystatistics: "sippulse_activatedailystatistics",
	sippulse_activeIncomingCalls: "sippulse_activeIncomingCalls",
	sippulse_activeOutgoingCalls: "sippulse_activeOutgoingCalls",
	sippulse_callsOnlyByIp: "sippulse_callsOnlyByIp",
	sippulse_city_code: "sippulse_city_code",
	sippulse_daily_quota: "sippulse_daily_quota",
	sippulse_daily_quota_tipo: "sippulse_daily_quota_tipo",
	sippulse_dailyQuotaConsumed: "sippulse_dailyQuotaConsumed",
	sippulse_dailyQuotaLimit: "sippulse_dailyQuotaLimit",
	sippulse_dominio: "sippulse_dominio",
	sippulse_local_area: "sippulse_local_area",
	sippulse_lowCreditNotification: "sippulse_lowCreditNotification",
	sippulse_rateplanid: "sippulse_rateplanid",
	status_ramal: "status_ramal",
	status_vsc: "status_vsc",
	subscribemwi: "subscribemwi",
	summit_bid_type: "summit_bid_type",
	summit_categoria: "summit_categoria",
	summit_licenca: "summit_licenca",
	t38pt_usertpsource: "t38pt_usertpsource",
	tarifa: "tarifa",
	tech_prefix_zeus: "tech_prefix_zeus",
	terminal_summit: "terminal_summit",
	textsupport: "textsupport",
	timerb: "timerb",
	timert1: "timert1",
	tipo_linha_sip: "tipo_linha_sip",
	transport: "transport",
	trunk_summit: "trunk_summit",
	trunkname: "trunkname",
	trustrpid: "trustrpid",
	type: "type",
	tysa_line_call_limit: "tysa_line_call_limit",
	tysa_line_function: "tysa_line_function",
	tysa_line_ip_add: "tysa_line_ip_add",
	tysa_line_status: "tysa_line_status",
	tysa_line_type: "tysa_line_type",
	tysa_line_user_type: "tysa_line_user_type",
	usar_dados: "usar_dados",
	use_area_code: "use_area_code",
	useclientcode: "useclientcode",
	user_code: "user_code",
	useragent: "useragent",
	usereqphone: "usereqphone",
	username: "username",
	utiliza_did_como_user_code_vsc: "utiliza_did_como_user_code_vsc",
	vencimento_summit: "vencimento_summit",
	vencimento_zeus: "vencimento_zeus",
	videosupport: "videosupport",
	vmexten: "vmexten",
	vsc_allowcollectcalls: "vsc_allowcollectcalls",
	vsc_batch: "vsc_batch",
	vsc_did_prefix: "vsc_did_prefix",
	vsc_dontuseccforauth: "vsc_dontuseccforauth",
	vsc_enabled_date: "vsc_enabled_date",
	vsc_id_batch: "vsc_id_batch",
	vsc_idd_prefix: "vsc_idd_prefix",
	vsc_inboundcallslimit: "vsc_inboundcallslimit",
	vsc_ndd_prefix: "vsc_ndd_prefix",
	vsc_outboundcallslimit: "vsc_outboundcallslimit",
} as const;

export const VOIPSIPPEERS_ALLOWOVERLAP_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_ALLOWSUBSCRIBE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_ALLOWTRANSFER_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_ATIVOSUMMIT_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_AUTOFRAMING_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_BILLING_LABELS = {
	C: "C",
	D: "D",
	L: "L",
} as const;

export const VOIPSIPPEERS_BLOQUEARLIGACOESCOBRARZEUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_BLOQUEARLIGACOESLDIZEUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_BLOQUEARLIGACOESLDNZEUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_BLOQUEARLIGACOESVC1ZEUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_BUGGYMWI_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_CALLCOUNTER_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_CALLINGPRES_LABELS = {
	allowed_not_screened: "allowed_not_screened",
	allowed_passed_screen: "allowed_passed_screen",
	allowed_failed_screen: "allowed_failed_screen",
	allowed: "allowed",
	prohib_not_screened: "prohib_not_screened",
	prohib_passed_screen: "prohib_passed_screen",
	prohib_failed_screen: "prohib_failed_screen",
	prohib: "prohib",
} as const;

export const VOIPSIPPEERS_CONSTANTSSRC_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_DIRECTMEDIA_LABELS = {
	yes: "yes",
	no: "no",
	nonat: "nonat",
	update: "update",
} as const;

export const VOIPSIPPEERS_DTMFMODE_LABELS = {
	rfc2833: "rfc2833",
	info: "info",
	shortinfo: "shortinfo",
	inband: "inband",
	auto: "auto",
} as const;

export const VOIPSIPPEERS_DYNAMIC_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_FAXDETECT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_FINANCEIROAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_G726NONSTANDARD_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_HABILITARIVR_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_HASVOICEMAIL_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_IGNORESDPVERSION_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_LOGARCOMIP_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_PADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_PORTABILIDADESUMMIT_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_PROGRESSINBAND_LABELS = {
	yes: "yes",
	no: "no",
	never: "never",
} as const;

export const VOIPSIPPEERS_PROMISCREDIR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_RECHARGESETTINGS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_RFC2833COMPENSATE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_SENDRPID_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_SESSIONREFRESHER_LABELS = {
	uac: "uac",
	uas: "uas",
} as const;

export const VOIPSIPPEERS_SESSIONTIMERS_LABELS = {
	accept: "accept",
	refuse: "refuse",
	originate: "originate",
} as const;

export const VOIPSIPPEERS_SIPPULSESTATUS_LABELS = {
	A: "A",
	D: "D",
} as const;

export const VOIPSIPPEERS_SIPPULSEACTIVATEDAILYSTATISTICS_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_SIPPULSEACTIVEINCOMINGCALLS_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_SIPPULSEACTIVEOUTGOINGCALLS_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_SIPPULSECALLSONLYBYIP_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_SIPPULSEDAILYQUOTA_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_SIPPULSEDAILYQUOTATIPO_LABELS = {
	M: "M",
	V: "V",
} as const;

export const VOIPSIPPEERS_SIPPULSELOWCREDITNOTIFICATION_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_SUBSCRIBEMWI_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_TEXTSUPPORT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_TIPOLINHASIP_LABELS = {
	N: "N",
	P: "P",
	S: "S",
} as const;

export const VOIPSIPPEERS_TRANSPORT_LABELS = {
	udp: "udp",
	tcp: "tcp",
} as const;

export const VOIPSIPPEERS_TRUSTRPID_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_TYPE_LABELS = {
	friend: "friend",
	user: "user",
	peer: "peer",
} as const;

export const VOIPSIPPEERS_USARDADOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_USEAREACODE_LABELS = {
	N: "N",
	Y: "Y",
} as const;

export const VOIPSIPPEERS_USECLIENTCODE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_USEREQPHONE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_UTILIZADIDCOMOUSERCODEVSC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPSIPPEERS_VIDEOSUPPORT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPSIPPEERS_VSCALLOWCOLLECTCALLS_LABELS = {
	true: "true",
	false: "false",
} as const;

export const VOIPSIPPEERS_VSCDONTUSECCFORAUTH_LABELS = {
	true: "true",
	false: "false",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const voip_sippeersAllowoverlapSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "allowoverlap: valores válidos são [yes, no]" }),
});

export const voip_sippeersAllowsubscribeSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "allowsubscribe: valores válidos são [yes, no]" }),
});

export const voip_sippeersAllowtransferSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "allowtransfer: valores válidos são [yes, no]" }),
});

export const voip_sippeersAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const voip_sippeersAtivoSummitSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo_summit: valores válidos são [S, N]" }),
});

export const voip_sippeersAutoframingSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "autoframing: valores válidos são [yes, no]" }),
});

export const voip_sippeersBillingSchema = z.enum(["C", "D", "L"], {
	error: () => ({ message: "billing: valores válidos são [C, D, L]" }),
});

export const voip_sippeersBloquearLigacoesCobrarZeusSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "bloquear_ligacoes_cobrar_zeus: valores válidos são [S, N]",
		}),
	},
);

export const voip_sippeersBloquearLigacoesLdiZeusSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloquear_ligacoes_ldi_zeus: valores válidos são [S, N]",
	}),
});

export const voip_sippeersBloquearLigacoesLdnZeusSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloquear_ligacoes_ldn_zeus: valores válidos são [S, N]",
	}),
});

export const voip_sippeersBloquearLigacoesVc1ZeusSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloquear_ligacoes_vc1_zeus: valores válidos são [S, N]",
	}),
});

export const voip_sippeersBuggymwiSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "buggymwi: valores válidos são [yes, no]" }),
});

export const voip_sippeersCallcounterSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "callcounter: valores válidos são [yes, no]" }),
});

export const voip_sippeersCallingpresSchema = z.enum(
	[
		"allowed_not_screened",
		"allowed_passed_screen",
		"allowed_failed_screen",
		"allowed",
		"prohib_not_screened",
		"prohib_passed_screen",
		"prohib_failed_screen",
		"prohib",
	],
	{
		error: () => ({
			message:
				"callingpres: valores válidos são [allowed_not_screened, allowed_passed_screen, allowed_failed_screen, allowed, prohib_not_screened, prohib_passed_screen, prohib_failed_screen, prohib]",
		}),
	},
);

export const voip_sippeersConstantssrcSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "constantssrc: valores válidos são [yes, no]" }),
});

export const voip_sippeersDirectmediaSchema = z.enum(
	["yes", "no", "nonat", "update"],
	{
		error: () => ({
			message: "directmedia: valores válidos são [yes, no, nonat, update]",
		}),
	},
);

export const voip_sippeersDtmfmodeSchema = z.enum(
	["rfc2833", "info", "shortinfo", "inband", "auto"],
	{
		error: () => ({
			message:
				"dtmfmode: valores válidos são [rfc2833, info, shortinfo, inband, auto]",
		}),
	},
);

export const voip_sippeersDynamicSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "dynamic: valores válidos são [yes, no]" }),
});

export const voip_sippeersFaxdetectSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "faxdetect: valores válidos são [yes, no]" }),
});

export const voip_sippeersFinanceiroAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "financeiro_automatico: valores válidos são [S, N]",
	}),
});

export const voip_sippeersG726nonstandardSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "g726nonstandard: valores válidos são [yes, no]" }),
});

export const voip_sippeersHabilitarIvrSchema = z.enum(["true", "false"], {
	error: () => ({
		message: "habilitar_ivr: valores válidos são [true, false]",
	}),
});

export const voip_sippeersHasvoicemailSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "hasvoicemail: valores válidos são [yes, no]" }),
});

export const voip_sippeersIgnoresdpversionSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "ignoresdpversion: valores válidos são [yes, no]" }),
});

export const voip_sippeersLogarComIpSchema = z.enum(["true", "false"], {
	error: () => ({ message: "logar_com_ip: valores válidos são [true, false]" }),
});

export const voip_sippeersPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao: valores válidos são [S, N]" }),
});

export const voip_sippeersPortabilidadeSummitSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "portabilidade_summit: valores válidos são [S, N]",
	}),
});

export const voip_sippeersProgressinbandSchema = z.enum(
	["yes", "no", "never"],
	{
		error: () => ({
			message: "progressinband: valores válidos são [yes, no, never]",
		}),
	},
);

export const voip_sippeersPromiscredirSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "promiscredir: valores válidos são [yes, no]" }),
});

export const voip_sippeersRechargeSettingsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "recharge_settings: valores válidos são [S, N]" }),
});

export const voip_sippeersRfc2833compensateSchema = z.enum(["yes", "no"], {
	error: () => ({
		message: "rfc2833compensate: valores válidos são [yes, no]",
	}),
});

export const voip_sippeersSendrpidSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "sendrpid: valores válidos são [yes, no]" }),
});

export const voip_sippeersSessionRefresherSchema = z.enum(["uac", "uas"], {
	error: () => ({
		message: "session-refresher: valores válidos são [uac, uas]",
	}),
});

export const voip_sippeersSessionTimersSchema = z.enum(
	["accept", "refuse", "originate"],
	{
		error: () => ({
			message:
				"session-timers: valores válidos são [accept, refuse, originate]",
		}),
	},
);

export const voip_sippeersSipPulseStatusSchema = z.enum(["A", "D"], {
	error: () => ({ message: "sip_pulse_status: valores válidos são [A, D]" }),
});

export const voip_sippeersSippulseActivatedailystatisticsSchema = z.enum(
	["true", "false"],
	{
		error: () => ({
			message:
				"sippulse_activatedailystatistics: valores válidos são [true, false]",
		}),
	},
);

export const voip_sippeersSippulseActiveincomingcallsSchema = z.enum(
	["true", "false"],
	{
		error: () => ({
			message:
				"sippulse_activeIncomingCalls: valores válidos são [true, false]",
		}),
	},
);

export const voip_sippeersSippulseActiveoutgoingcallsSchema = z.enum(
	["true", "false"],
	{
		error: () => ({
			message:
				"sippulse_activeOutgoingCalls: valores válidos são [true, false]",
		}),
	},
);

export const voip_sippeersSippulseCallsonlybyipSchema = z.enum(
	["true", "false"],
	{
		error: () => ({
			message: "sippulse_callsOnlyByIp: valores válidos são [true, false]",
		}),
	},
);

export const voip_sippeersSippulseDailyQuotaSchema = z.enum(["true", "false"], {
	error: () => ({
		message: "sippulse_daily_quota: valores válidos são [true, false]",
	}),
});

export const voip_sippeersSippulseDailyQuotaTipoSchema = z.enum(["M", "V"], {
	error: () => ({
		message: "sippulse_daily_quota_tipo: valores válidos são [M, V]",
	}),
});

export const voip_sippeersSippulseLowcreditnotificationSchema = z.enum(
	["true", "false"],
	{
		error: () => ({
			message:
				"sippulse_lowCreditNotification: valores válidos são [true, false]",
		}),
	},
);

export const voip_sippeersSubscribemwiSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "subscribemwi: valores válidos são [yes, no]" }),
});

export const voip_sippeersTextsupportSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "textsupport: valores válidos são [yes, no]" }),
});

export const voip_sippeersTipoLinhaSipSchema = z.enum(["N", "P", "S"], {
	error: () => ({ message: "tipo_linha_sip: valores válidos são [N, P, S]" }),
});

export const voip_sippeersTransportSchema = z.enum(["udp", "tcp"], {
	error: () => ({ message: "transport: valores válidos são [udp, tcp]" }),
});

export const voip_sippeersTrustrpidSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "trustrpid: valores válidos são [yes, no]" }),
});

export const voip_sippeersTypeSchema = z.enum(["friend", "user", "peer"], {
	error: () => ({ message: "type: valores válidos são [friend, user, peer]" }),
});

export const voip_sippeersUsarDadosSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usar_dados: valores válidos são [S, N]" }),
});

export const voip_sippeersUseAreaCodeSchema = z.enum(["N", "Y"], {
	error: () => ({ message: "use_area_code: valores válidos são [N, Y]" }),
});

export const voip_sippeersUseclientcodeSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "useclientcode: valores válidos são [yes, no]" }),
});

export const voip_sippeersUsereqphoneSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "usereqphone: valores válidos são [yes, no]" }),
});

export const voip_sippeersUtilizaDidComoUserCodeVscSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "utiliza_did_como_user_code_vsc: valores válidos são [S, N]",
	}),
});

export const voip_sippeersVideosupportSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "videosupport: valores válidos são [yes, no]" }),
});

export const voip_sippeersVscAllowcollectcallsSchema = z.enum(
	["true", "false"],
	{
		error: () => ({
			message: "vsc_allowcollectcalls: valores válidos são [true, false]",
		}),
	},
);

export const voip_sippeersVscDontuseccforauthSchema = z.enum(
	["true", "false"],
	{
		error: () => ({
			message: "vsc_dontuseccforauth: valores válidos são [true, false]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VoipSippeersAllowoverlap = z.infer<
	typeof voip_sippeersAllowoverlapSchema
>;

export type VoipSippeersAllowsubscribe = z.infer<
	typeof voip_sippeersAllowsubscribeSchema
>;

export type VoipSippeersAllowtransfer = z.infer<
	typeof voip_sippeersAllowtransferSchema
>;

export type VoipSippeersAtivo = z.infer<typeof voip_sippeersAtivoSchema>;

export type VoipSippeersAtivoSummit = z.infer<
	typeof voip_sippeersAtivoSummitSchema
>;

export type VoipSippeersAutoframing = z.infer<
	typeof voip_sippeersAutoframingSchema
>;

export type VoipSippeersBilling = z.infer<typeof voip_sippeersBillingSchema>;

export type VoipSippeersBloquearLigacoesCobrarZeus = z.infer<
	typeof voip_sippeersBloquearLigacoesCobrarZeusSchema
>;

export type VoipSippeersBloquearLigacoesLdiZeus = z.infer<
	typeof voip_sippeersBloquearLigacoesLdiZeusSchema
>;

export type VoipSippeersBloquearLigacoesLdnZeus = z.infer<
	typeof voip_sippeersBloquearLigacoesLdnZeusSchema
>;

export type VoipSippeersBloquearLigacoesVc1Zeus = z.infer<
	typeof voip_sippeersBloquearLigacoesVc1ZeusSchema
>;

export type VoipSippeersBuggymwi = z.infer<typeof voip_sippeersBuggymwiSchema>;

export type VoipSippeersCallcounter = z.infer<
	typeof voip_sippeersCallcounterSchema
>;

export type VoipSippeersCallingpres = z.infer<
	typeof voip_sippeersCallingpresSchema
>;

export type VoipSippeersConstantssrc = z.infer<
	typeof voip_sippeersConstantssrcSchema
>;

export type VoipSippeersDirectmedia = z.infer<
	typeof voip_sippeersDirectmediaSchema
>;

export type VoipSippeersDtmfmode = z.infer<typeof voip_sippeersDtmfmodeSchema>;

export type VoipSippeersDynamic = z.infer<typeof voip_sippeersDynamicSchema>;

export type VoipSippeersFaxdetect = z.infer<
	typeof voip_sippeersFaxdetectSchema
>;

export type VoipSippeersFinanceiroAutomatico = z.infer<
	typeof voip_sippeersFinanceiroAutomaticoSchema
>;

export type VoipSippeersG726nonstandard = z.infer<
	typeof voip_sippeersG726nonstandardSchema
>;

export type VoipSippeersHabilitarIvr = z.infer<
	typeof voip_sippeersHabilitarIvrSchema
>;

export type VoipSippeersHasvoicemail = z.infer<
	typeof voip_sippeersHasvoicemailSchema
>;

export type VoipSippeersIgnoresdpversion = z.infer<
	typeof voip_sippeersIgnoresdpversionSchema
>;

export type VoipSippeersLogarComIp = z.infer<
	typeof voip_sippeersLogarComIpSchema
>;

export type VoipSippeersPadrao = z.infer<typeof voip_sippeersPadraoSchema>;

export type VoipSippeersPortabilidadeSummit = z.infer<
	typeof voip_sippeersPortabilidadeSummitSchema
>;

export type VoipSippeersProgressinband = z.infer<
	typeof voip_sippeersProgressinbandSchema
>;

export type VoipSippeersPromiscredir = z.infer<
	typeof voip_sippeersPromiscredirSchema
>;

export type VoipSippeersRechargeSettings = z.infer<
	typeof voip_sippeersRechargeSettingsSchema
>;

export type VoipSippeersRfc2833compensate = z.infer<
	typeof voip_sippeersRfc2833compensateSchema
>;

export type VoipSippeersSendrpid = z.infer<typeof voip_sippeersSendrpidSchema>;

export type VoipSippeersSessionRefresher = z.infer<
	typeof voip_sippeersSessionRefresherSchema
>;

export type VoipSippeersSessionTimers = z.infer<
	typeof voip_sippeersSessionTimersSchema
>;

export type VoipSippeersSipPulseStatus = z.infer<
	typeof voip_sippeersSipPulseStatusSchema
>;

export type VoipSippeersSippulseActivatedailystatistics = z.infer<
	typeof voip_sippeersSippulseActivatedailystatisticsSchema
>;

export type VoipSippeersSippulseActiveincomingcalls = z.infer<
	typeof voip_sippeersSippulseActiveincomingcallsSchema
>;

export type VoipSippeersSippulseActiveoutgoingcalls = z.infer<
	typeof voip_sippeersSippulseActiveoutgoingcallsSchema
>;

export type VoipSippeersSippulseCallsonlybyip = z.infer<
	typeof voip_sippeersSippulseCallsonlybyipSchema
>;

export type VoipSippeersSippulseDailyQuota = z.infer<
	typeof voip_sippeersSippulseDailyQuotaSchema
>;

export type VoipSippeersSippulseDailyQuotaTipo = z.infer<
	typeof voip_sippeersSippulseDailyQuotaTipoSchema
>;

export type VoipSippeersSippulseLowcreditnotification = z.infer<
	typeof voip_sippeersSippulseLowcreditnotificationSchema
>;

export type VoipSippeersSubscribemwi = z.infer<
	typeof voip_sippeersSubscribemwiSchema
>;

export type VoipSippeersTextsupport = z.infer<
	typeof voip_sippeersTextsupportSchema
>;

export type VoipSippeersTipoLinhaSip = z.infer<
	typeof voip_sippeersTipoLinhaSipSchema
>;

export type VoipSippeersTransport = z.infer<
	typeof voip_sippeersTransportSchema
>;

export type VoipSippeersTrustrpid = z.infer<
	typeof voip_sippeersTrustrpidSchema
>;

export type VoipSippeersType = z.infer<typeof voip_sippeersTypeSchema>;

export type VoipSippeersUsarDados = z.infer<
	typeof voip_sippeersUsarDadosSchema
>;

export type VoipSippeersUseAreaCode = z.infer<
	typeof voip_sippeersUseAreaCodeSchema
>;

export type VoipSippeersUseclientcode = z.infer<
	typeof voip_sippeersUseclientcodeSchema
>;

export type VoipSippeersUsereqphone = z.infer<
	typeof voip_sippeersUsereqphoneSchema
>;

export type VoipSippeersUtilizaDidComoUserCodeVsc = z.infer<
	typeof voip_sippeersUtilizaDidComoUserCodeVscSchema
>;

export type VoipSippeersVideosupport = z.infer<
	typeof voip_sippeersVideosupportSchema
>;

export type VoipSippeersVscAllowcollectcalls = z.infer<
	typeof voip_sippeersVscAllowcollectcallsSchema
>;

export type VoipSippeersVscDontuseccforauth = z.infer<
	typeof voip_sippeersVscDontuseccforauthSchema
>;

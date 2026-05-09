/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIEWVOIPSIPPEERSCLIENTE_ALLOWOVERLAP_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_ALLOWSUBSCRIBE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_ALLOWTRANSFER_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_AUTOFRAMING_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_BUGGYMWI_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_CALLCOUNTER_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_CALLINGPRES_LABELS = {
	allowed_not_screened: "allowed_not_screened",
	allowed_passed_screen: "allowed_passed_screen",
	allowed_failed_screen: "allowed_failed_screen",
	allowed: "allowed",
	prohib_not_screened: "prohib_not_screened",
	prohib_passed_screen: "prohib_passed_screen",
	prohib_failed_screen: "prohib_failed_screen",
	prohib: "prohib",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_CONSTANTSSRC_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_DIRECTMEDIA_LABELS = {
	yes: "yes",
	no: "no",
	nonat: "nonat",
	update: "update",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_DTMFMODE_LABELS = {
	rfc2833: "rfc2833",
	info: "info",
	shortinfo: "shortinfo",
	inband: "inband",
	auto: "auto",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_DYNAMIC_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_FAXDETECT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_FINANCEIROAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_G726NONSTANDARD_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_HASVOICEMAIL_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_IGNORESDPVERSION_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_PADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_PROGRESSINBAND_LABELS = {
	yes: "yes",
	no: "no",
	never: "never",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_PROMISCREDIR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_RFC2833COMPENSATE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_SENDRPID_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_SESSIONREFRESHER_LABELS = {
	uac: "uac",
	uas: "uas",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_SESSIONTIMERS_LABELS = {
	accept: "accept",
	refuse: "refuse",
	originate: "originate",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_SUBSCRIBEMWI_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_TEXTSUPPORT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_TRANSPORT_LABELS = {
	udp: "udp",
	tcp: "tcp",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_TRUSTRPID_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_TYPE_LABELS = {
	friend: "friend",
	user: "user",
	peer: "peer",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_USECLIENTCODE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_USEREQPHONE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VIEWVOIPSIPPEERSCLIENTE_VIDEOSUPPORT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const view_voip_sippeers_clienteAllowoverlapSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "allowoverlap: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteAllowsubscribeSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "allowsubscribe: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteAllowtransferSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "allowtransfer: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const view_voip_sippeers_clienteAutoframingSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "autoframing: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteBuggymwiSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "buggymwi: valores válidos são [yes, no]" }),
});

export const view_voip_sippeers_clienteCallcounterSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "callcounter: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteCallingpresSchema = z.enum(
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

export const view_voip_sippeers_clienteConstantssrcSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "constantssrc: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteDirectmediaSchema = z.enum(
	["yes", "no", "nonat", "update"],
	{
		error: () => ({
			message: "directmedia: valores válidos são [yes, no, nonat, update]",
		}),
	},
);

export const view_voip_sippeers_clienteDtmfmodeSchema = z.enum(
	["rfc2833", "info", "shortinfo", "inband", "auto"],
	{
		error: () => ({
			message:
				"dtmfmode: valores válidos são [rfc2833, info, shortinfo, inband, auto]",
		}),
	},
);

export const view_voip_sippeers_clienteDynamicSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "dynamic: valores válidos são [yes, no]" }),
});

export const view_voip_sippeers_clienteFaxdetectSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "faxdetect: valores válidos são [yes, no]" }),
});

export const view_voip_sippeers_clienteFinanceiroAutomaticoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "financeiro_automatico: valores válidos são [S, N]",
		}),
	},
);

export const view_voip_sippeers_clienteG726nonstandardSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "g726nonstandard: valores válidos são [yes, no]",
		}),
	},
);

export const view_voip_sippeers_clienteHasvoicemailSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "hasvoicemail: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteIgnoresdpversionSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "ignoresdpversion: valores válidos são [yes, no]",
		}),
	},
);

export const view_voip_sippeers_clientePadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao: valores válidos são [S, N]" }),
});

export const view_voip_sippeers_clienteProgressinbandSchema = z.enum(
	["yes", "no", "never"],
	{
		error: () => ({
			message: "progressinband: valores válidos são [yes, no, never]",
		}),
	},
);

export const view_voip_sippeers_clientePromiscredirSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "promiscredir: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteRfc2833compensateSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "rfc2833compensate: valores válidos são [yes, no]",
		}),
	},
);

export const view_voip_sippeers_clienteSendrpidSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "sendrpid: valores válidos são [yes, no]" }),
});

export const view_voip_sippeers_clienteSessionRefresherSchema = z.enum(
	["uac", "uas"],
	{
		error: () => ({
			message: "session-refresher: valores válidos são [uac, uas]",
		}),
	},
);

export const view_voip_sippeers_clienteSessionTimersSchema = z.enum(
	["accept", "refuse", "originate"],
	{
		error: () => ({
			message:
				"session-timers: valores válidos são [accept, refuse, originate]",
		}),
	},
);

export const view_voip_sippeers_clienteSubscribemwiSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "subscribemwi: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteTextsupportSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "textsupport: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteTransportSchema = z.enum(
	["udp", "tcp"],
	{
		error: () => ({ message: "transport: valores válidos são [udp, tcp]" }),
	},
);

export const view_voip_sippeers_clienteTrustrpidSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "trustrpid: valores válidos são [yes, no]" }),
});

export const view_voip_sippeers_clienteTypeSchema = z.enum(
	["friend", "user", "peer"],
	{
		error: () => ({
			message: "type: valores válidos são [friend, user, peer]",
		}),
	},
);

export const view_voip_sippeers_clienteUseclientcodeSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "useclientcode: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteUsereqphoneSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "usereqphone: valores válidos são [yes, no]" }),
	},
);

export const view_voip_sippeers_clienteVideosupportSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "videosupport: valores válidos são [yes, no]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViewVoipSippeersClienteAllowoverlap = z.infer<
	typeof view_voip_sippeers_clienteAllowoverlapSchema
>;

export type ViewVoipSippeersClienteAllowsubscribe = z.infer<
	typeof view_voip_sippeers_clienteAllowsubscribeSchema
>;

export type ViewVoipSippeersClienteAllowtransfer = z.infer<
	typeof view_voip_sippeers_clienteAllowtransferSchema
>;

export type ViewVoipSippeersClienteAtivo = z.infer<
	typeof view_voip_sippeers_clienteAtivoSchema
>;

export type ViewVoipSippeersClienteAutoframing = z.infer<
	typeof view_voip_sippeers_clienteAutoframingSchema
>;

export type ViewVoipSippeersClienteBuggymwi = z.infer<
	typeof view_voip_sippeers_clienteBuggymwiSchema
>;

export type ViewVoipSippeersClienteCallcounter = z.infer<
	typeof view_voip_sippeers_clienteCallcounterSchema
>;

export type ViewVoipSippeersClienteCallingpres = z.infer<
	typeof view_voip_sippeers_clienteCallingpresSchema
>;

export type ViewVoipSippeersClienteConstantssrc = z.infer<
	typeof view_voip_sippeers_clienteConstantssrcSchema
>;

export type ViewVoipSippeersClienteDirectmedia = z.infer<
	typeof view_voip_sippeers_clienteDirectmediaSchema
>;

export type ViewVoipSippeersClienteDtmfmode = z.infer<
	typeof view_voip_sippeers_clienteDtmfmodeSchema
>;

export type ViewVoipSippeersClienteDynamic = z.infer<
	typeof view_voip_sippeers_clienteDynamicSchema
>;

export type ViewVoipSippeersClienteFaxdetect = z.infer<
	typeof view_voip_sippeers_clienteFaxdetectSchema
>;

export type ViewVoipSippeersClienteFinanceiroAutomatico = z.infer<
	typeof view_voip_sippeers_clienteFinanceiroAutomaticoSchema
>;

export type ViewVoipSippeersClienteG726nonstandard = z.infer<
	typeof view_voip_sippeers_clienteG726nonstandardSchema
>;

export type ViewVoipSippeersClienteHasvoicemail = z.infer<
	typeof view_voip_sippeers_clienteHasvoicemailSchema
>;

export type ViewVoipSippeersClienteIgnoresdpversion = z.infer<
	typeof view_voip_sippeers_clienteIgnoresdpversionSchema
>;

export type ViewVoipSippeersClientePadrao = z.infer<
	typeof view_voip_sippeers_clientePadraoSchema
>;

export type ViewVoipSippeersClienteProgressinband = z.infer<
	typeof view_voip_sippeers_clienteProgressinbandSchema
>;

export type ViewVoipSippeersClientePromiscredir = z.infer<
	typeof view_voip_sippeers_clientePromiscredirSchema
>;

export type ViewVoipSippeersClienteRfc2833compensate = z.infer<
	typeof view_voip_sippeers_clienteRfc2833compensateSchema
>;

export type ViewVoipSippeersClienteSendrpid = z.infer<
	typeof view_voip_sippeers_clienteSendrpidSchema
>;

export type ViewVoipSippeersClienteSessionRefresher = z.infer<
	typeof view_voip_sippeers_clienteSessionRefresherSchema
>;

export type ViewVoipSippeersClienteSessionTimers = z.infer<
	typeof view_voip_sippeers_clienteSessionTimersSchema
>;

export type ViewVoipSippeersClienteSubscribemwi = z.infer<
	typeof view_voip_sippeers_clienteSubscribemwiSchema
>;

export type ViewVoipSippeersClienteTextsupport = z.infer<
	typeof view_voip_sippeers_clienteTextsupportSchema
>;

export type ViewVoipSippeersClienteTransport = z.infer<
	typeof view_voip_sippeers_clienteTransportSchema
>;

export type ViewVoipSippeersClienteTrustrpid = z.infer<
	typeof view_voip_sippeers_clienteTrustrpidSchema
>;

export type ViewVoipSippeersClienteType = z.infer<
	typeof view_voip_sippeers_clienteTypeSchema
>;

export type ViewVoipSippeersClienteUseclientcode = z.infer<
	typeof view_voip_sippeers_clienteUseclientcodeSchema
>;

export type ViewVoipSippeersClienteUsereqphone = z.infer<
	typeof view_voip_sippeers_clienteUsereqphoneSchema
>;

export type ViewVoipSippeersClienteVideosupport = z.infer<
	typeof view_voip_sippeers_clienteVideosupportSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RAMAISSIP_FIELD_LABELS = {
	accountcode: "accountcode",
	allow: "allow",
	allowoverlap: "allowoverlap",
	allowsubscribe: "allowsubscribe",
	allowtransfer: "allowtransfer",
	amaflags: "amaflags",
	auth: "auth",
	autoframing: "autoframing",
	buggymwi: "buggymwi",
	busylevel: "busylevel",
	"call-limit": "call-limit",
	callbackextension: "callbackextension",
	callcounter: "callcounter",
	callerid: "callerid",
	callgroup: "callgroup",
	callingpres: "callingpres",
	cid_number: "cid_number",
	constantssrc: "constantssrc",
	contactdeny: "contactdeny",
	contactpermit: "contactpermit",
	context: "context",
	ddd: "ddd",
	ddi: "ddi",
	defaultip: "defaultip",
	defaultuser: "defaultuser",
	deny: "deny",
	descricao: "descricao",
	directmedia: "directmedia",
	disallow: "disallow",
	dtmfmode: "dtmfmode",
	dynamic: "dynamic",
	faxdetect: "faxdetect",
	financeiro_automatico: "financeiro_automatico",
	fromdomain: "fromdomain",
	fromuser: "fromuser",
	fullcontact: "fullcontact",
	fullname: "fullname",
	g726nonstandard: "g726nonstandard",
	hasvoicemail: "hasvoicemail",
	host: "host",
	id: "id",
	id_contrato: "id_contrato",
	id_sip: "id_sip",
	ignoresdpversion: "ignoresdpversion",
	insecure: "insecure",
	ipaddr: "ipaddr",
	language: "language",
	lastms: "lastms",
	mailbox: "mailbox",
	maxcallbitrate: "maxcallbitrate",
	md5secret: "md5secret",
	mohinterpret: "mohinterpret",
	mohsuggest: "mohsuggest",
	name: "name",
	nat: "nat",
	numero: "numero",
	outboundproxy: "outboundproxy",
	padrao: "padrao",
	parkinglot: "parkinglot",
	permit: "permit",
	pickupgroup: "pickupgroup",
	port: "port",
	progressinband: "progressinband",
	promiscredir: "promiscredir",
	qualify: "qualify",
	qualifyfreq: "qualifyfreq",
	regexten: "regexten",
	regseconds: "regseconds",
	regserver: "regserver",
	remotesecret: "remotesecret",
	rfc2833compensate: "rfc2833compensate",
	rtpholdtimeout: "rtpholdtimeout",
	rtpkeepalive: "rtpkeepalive",
	rtptimeout: "rtptimeout",
	secret: "secret",
	sendrpid: "sendrpid",
	"session-expires": "session-expires",
	"session-minse": "session-minse",
	"session-timers": "session-timers",
	setvar: "setvar",
	subscribemwi: "subscribemwi",
	t38pt_usertpsource: "t38pt_usertpsource",
	tarifa: "tarifa",
	textsupport: "textsupport",
	timerb: "timerb",
	timert1: "timert1",
	transport: "transport",
	trunkname: "trunkname",
	trustrpid: "trustrpid",
	type: "type",
	useclientcode: "useclientcode",
	useragent: "useragent",
	usereqphone: "usereqphone",
	videosupport: "videosupport",
	vmexten: "vmexten",
} as const;

export const RAMAISSIP_ALLOWOVERLAP_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_ALLOWSUBSCRIBE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_ALLOWTRANSFER_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_AUTOFRAMING_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_BUGGYMWI_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_CALLCOUNTER_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_CALLINGPRES_LABELS = {
	allowed_not_screened: "allowed_not_screened",
	allowed_passed_screen: "allowed_passed_screen",
	allowed_failed_screen: "allowed_failed_screen",
	allowed: "allowed",
	prohib_not_screened: "prohib_not_screened",
	prohib_passed_screen: "prohib_passed_screen",
	prohib_failed_screen: "prohib_failed_screen",
	prohib: "prohib",
} as const;

export const RAMAISSIP_CONSTANTSSRC_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_DIRECTMEDIA_LABELS = {
	yes: "yes",
	no: "no",
	nonat: "nonat",
	update: "update",
} as const;

export const RAMAISSIP_DTMFMODE_LABELS = {
	rfc2833: "rfc2833",
	info: "info",
	shortinfo: "shortinfo",
	inband: "inband",
	auto: "auto",
} as const;

export const RAMAISSIP_DYNAMIC_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_FAXDETECT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_FINANCEIROAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RAMAISSIP_G726NONSTANDARD_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_HASVOICEMAIL_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_IGNORESDPVERSION_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_PADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RAMAISSIP_PROGRESSINBAND_LABELS = {
	yes: "yes",
	no: "no",
	never: "never",
} as const;

export const RAMAISSIP_PROMISCREDIR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_RFC2833COMPENSATE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_SENDRPID_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_SESSIONTIMERS_LABELS = {
	accept: "accept",
	refuse: "refuse",
	originate: "originate",
} as const;

export const RAMAISSIP_SUBSCRIBEMWI_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_TEXTSUPPORT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_TRANSPORT_LABELS = {
	udp: "udp",
	tcp: "tcp",
} as const;

export const RAMAISSIP_TRUSTRPID_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_TYPE_LABELS = {
	friend: "friend",
	user: "user",
	peer: "peer",
} as const;

export const RAMAISSIP_USECLIENTCODE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_USEREQPHONE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const RAMAISSIP_VIDEOSUPPORT_LABELS = {
	yes: "yes",
	no: "no",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ramais_sipAllowoverlapSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "allowoverlap: valores válidos são [yes, no]" }),
});

export const ramais_sipAllowsubscribeSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "allowsubscribe: valores válidos são [yes, no]" }),
});

export const ramais_sipAllowtransferSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "allowtransfer: valores válidos são [yes, no]" }),
});

export const ramais_sipAutoframingSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "autoframing: valores válidos são [yes, no]" }),
});

export const ramais_sipBuggymwiSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "buggymwi: valores válidos são [yes, no]" }),
});

export const ramais_sipCallcounterSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "callcounter: valores válidos são [yes, no]" }),
});

export const ramais_sipCallingpresSchema = z.enum(
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

export const ramais_sipConstantssrcSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "constantssrc: valores válidos são [yes, no]" }),
});

export const ramais_sipDirectmediaSchema = z.enum(
	["yes", "no", "nonat", "update"],
	{
		error: () => ({
			message: "directmedia: valores válidos são [yes, no, nonat, update]",
		}),
	},
);

export const ramais_sipDtmfmodeSchema = z.enum(
	["rfc2833", "info", "shortinfo", "inband", "auto"],
	{
		error: () => ({
			message:
				"dtmfmode: valores válidos são [rfc2833, info, shortinfo, inband, auto]",
		}),
	},
);

export const ramais_sipDynamicSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "dynamic: valores válidos são [yes, no]" }),
});

export const ramais_sipFaxdetectSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "faxdetect: valores válidos são [yes, no]" }),
});

export const ramais_sipFinanceiroAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "financeiro_automatico: valores válidos são [S, N]",
	}),
});

export const ramais_sipG726nonstandardSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "g726nonstandard: valores válidos são [yes, no]" }),
});

export const ramais_sipHasvoicemailSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "hasvoicemail: valores válidos são [yes, no]" }),
});

export const ramais_sipIgnoresdpversionSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "ignoresdpversion: valores válidos são [yes, no]" }),
});

export const ramais_sipPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao: valores válidos são [S, N]" }),
});

export const ramais_sipProgressinbandSchema = z.enum(["yes", "no", "never"], {
	error: () => ({
		message: "progressinband: valores válidos são [yes, no, never]",
	}),
});

export const ramais_sipPromiscredirSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "promiscredir: valores válidos são [yes, no]" }),
});

export const ramais_sipRfc2833compensateSchema = z.enum(["yes", "no"], {
	error: () => ({
		message: "rfc2833compensate: valores válidos são [yes, no]",
	}),
});

export const ramais_sipSendrpidSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "sendrpid: valores válidos são [yes, no]" }),
});

export const ramais_sipSessionTimersSchema = z.enum(
	["accept", "refuse", "originate"],
	{
		error: () => ({
			message:
				"session-timers: valores válidos são [accept, refuse, originate]",
		}),
	},
);

export const ramais_sipSubscribemwiSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "subscribemwi: valores válidos são [yes, no]" }),
});

export const ramais_sipTextsupportSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "textsupport: valores válidos são [yes, no]" }),
});

export const ramais_sipTransportSchema = z.enum(["udp", "tcp"], {
	error: () => ({ message: "transport: valores válidos são [udp, tcp]" }),
});

export const ramais_sipTrustrpidSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "trustrpid: valores válidos são [yes, no]" }),
});

export const ramais_sipTypeSchema = z.enum(["friend", "user", "peer"], {
	error: () => ({ message: "type: valores válidos são [friend, user, peer]" }),
});

export const ramais_sipUseclientcodeSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "useclientcode: valores válidos são [yes, no]" }),
});

export const ramais_sipUsereqphoneSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "usereqphone: valores válidos são [yes, no]" }),
});

export const ramais_sipVideosupportSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "videosupport: valores válidos são [yes, no]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RamaisSipAllowoverlap = z.infer<
	typeof ramais_sipAllowoverlapSchema
>;

export type RamaisSipAllowsubscribe = z.infer<
	typeof ramais_sipAllowsubscribeSchema
>;

export type RamaisSipAllowtransfer = z.infer<
	typeof ramais_sipAllowtransferSchema
>;

export type RamaisSipAutoframing = z.infer<typeof ramais_sipAutoframingSchema>;

export type RamaisSipBuggymwi = z.infer<typeof ramais_sipBuggymwiSchema>;

export type RamaisSipCallcounter = z.infer<typeof ramais_sipCallcounterSchema>;

export type RamaisSipCallingpres = z.infer<typeof ramais_sipCallingpresSchema>;

export type RamaisSipConstantssrc = z.infer<
	typeof ramais_sipConstantssrcSchema
>;

export type RamaisSipDirectmedia = z.infer<typeof ramais_sipDirectmediaSchema>;

export type RamaisSipDtmfmode = z.infer<typeof ramais_sipDtmfmodeSchema>;

export type RamaisSipDynamic = z.infer<typeof ramais_sipDynamicSchema>;

export type RamaisSipFaxdetect = z.infer<typeof ramais_sipFaxdetectSchema>;

export type RamaisSipFinanceiroAutomatico = z.infer<
	typeof ramais_sipFinanceiroAutomaticoSchema
>;

export type RamaisSipG726nonstandard = z.infer<
	typeof ramais_sipG726nonstandardSchema
>;

export type RamaisSipHasvoicemail = z.infer<
	typeof ramais_sipHasvoicemailSchema
>;

export type RamaisSipIgnoresdpversion = z.infer<
	typeof ramais_sipIgnoresdpversionSchema
>;

export type RamaisSipPadrao = z.infer<typeof ramais_sipPadraoSchema>;

export type RamaisSipProgressinband = z.infer<
	typeof ramais_sipProgressinbandSchema
>;

export type RamaisSipPromiscredir = z.infer<
	typeof ramais_sipPromiscredirSchema
>;

export type RamaisSipRfc2833compensate = z.infer<
	typeof ramais_sipRfc2833compensateSchema
>;

export type RamaisSipSendrpid = z.infer<typeof ramais_sipSendrpidSchema>;

export type RamaisSipSessionTimers = z.infer<
	typeof ramais_sipSessionTimersSchema
>;

export type RamaisSipSubscribemwi = z.infer<
	typeof ramais_sipSubscribemwiSchema
>;

export type RamaisSipTextsupport = z.infer<typeof ramais_sipTextsupportSchema>;

export type RamaisSipTransport = z.infer<typeof ramais_sipTransportSchema>;

export type RamaisSipTrustrpid = z.infer<typeof ramais_sipTrustrpidSchema>;

export type RamaisSipType = z.infer<typeof ramais_sipTypeSchema>;

export type RamaisSipUseclientcode = z.infer<
	typeof ramais_sipUseclientcodeSchema
>;

export type RamaisSipUsereqphone = z.infer<typeof ramais_sipUsereqphoneSchema>;

export type RamaisSipVideosupport = z.infer<
	typeof ramais_sipVideosupportSchema
>;

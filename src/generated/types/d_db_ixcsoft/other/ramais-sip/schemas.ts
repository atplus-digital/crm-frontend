/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	ramais_sipAllowoverlapSchema,
	ramais_sipAllowsubscribeSchema,
	ramais_sipAllowtransferSchema,
	ramais_sipAutoframingSchema,
	ramais_sipBuggymwiSchema,
	ramais_sipCallcounterSchema,
	ramais_sipCallingpresSchema,
	ramais_sipConstantssrcSchema,
	ramais_sipDirectmediaSchema,
	ramais_sipDtmfmodeSchema,
	ramais_sipDynamicSchema,
	ramais_sipFaxdetectSchema,
	ramais_sipFinanceiroAutomaticoSchema,
	ramais_sipG726nonstandardSchema,
	ramais_sipHasvoicemailSchema,
	ramais_sipIgnoresdpversionSchema,
	ramais_sipPadraoSchema,
	ramais_sipProgressinbandSchema,
	ramais_sipPromiscredirSchema,
	ramais_sipRfc2833compensateSchema,
	ramais_sipSendrpidSchema,
	ramais_sipSessionTimersSchema,
	ramais_sipSubscribemwiSchema,
	ramais_sipTextsupportSchema,
	ramais_sipTransportSchema,
	ramais_sipTrustrpidSchema,
	ramais_sipTypeSchema,
	ramais_sipUseclientcodeSchema,
	ramais_sipUsereqphoneSchema,
	ramais_sipVideosupportSchema,
} from "./labels";

export const RAMAIS_SIP_TABLE_NAME = "ramais_sip";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ramais_sipBaseSchema = z.object({
	id: z.number(),
	accountcode: z.string(),
	allow: z.string(),
	allowoverlap: ramais_sipAllowoverlapSchema,
	allowsubscribe: ramais_sipAllowsubscribeSchema,
	allowtransfer: ramais_sipAllowtransferSchema,
	amaflags: z.string(),
	auth: z.string(),
	autoframing: ramais_sipAutoframingSchema,
	buggymwi: ramais_sipBuggymwiSchema,
	busylevel: z.number(),
	"call-limit": z.number(),
	callbackextension: z.string(),
	callcounter: ramais_sipCallcounterSchema,
	callerid: z.string(),
	callgroup: z.string(),
	callingpres: ramais_sipCallingpresSchema,
	cid_number: z.string(),
	constantssrc: ramais_sipConstantssrcSchema,
	contactdeny: z.string(),
	contactpermit: z.string(),
	context: z.string(),
	ddd: z.number(),
	ddi: z.number(),
	defaultip: z.string(),
	defaultuser: z.string(),
	deny: z.string(),
	descricao: z.string(),
	directmedia: ramais_sipDirectmediaSchema,
	disallow: z.string(),
	dtmfmode: ramais_sipDtmfmodeSchema,
	dynamic: ramais_sipDynamicSchema,
	faxdetect: ramais_sipFaxdetectSchema,
	financeiro_automatico: ramais_sipFinanceiroAutomaticoSchema,
	fromdomain: z.string(),
	fromuser: z.string(),
	fullcontact: z.string(),
	fullname: z.string(),
	g726nonstandard: ramais_sipG726nonstandardSchema,
	hasvoicemail: ramais_sipHasvoicemailSchema,
	host: z.string(),
	id_contrato: z.number(),
	id_sip: z.number(),
	ignoresdpversion: ramais_sipIgnoresdpversionSchema,
	insecure: z.string(),
	ipaddr: z.string(),
	language: z.string(),
	lastms: z.number(),
	mailbox: z.string(),
	maxcallbitrate: z.number(),
	md5secret: z.string(),
	mohinterpret: z.string(),
	mohsuggest: z.string(),
	name: z.string(),
	nat: z.string(),
	numero: z.string(),
	outboundproxy: z.string(),
	padrao: ramais_sipPadraoSchema,
	parkinglot: z.string(),
	permit: z.string(),
	pickupgroup: z.string(),
	port: z.number(),
	progressinband: ramais_sipProgressinbandSchema,
	promiscredir: ramais_sipPromiscredirSchema,
	qualify: z.string(),
	qualifyfreq: z.number(),
	regexten: z.string(),
	regseconds: z.number(),
	regserver: z.string(),
	remotesecret: z.string(),
	rfc2833compensate: ramais_sipRfc2833compensateSchema,
	rtpholdtimeout: z.number(),
	rtpkeepalive: z.number(),
	rtptimeout: z.number(),
	secret: z.string(),
	sendrpid: ramais_sipSendrpidSchema,
	"session-expires": z.number(),
	"session-minse": z.number(),
	"session-timers": ramais_sipSessionTimersSchema,
	setvar: z.string(),
	subscribemwi: ramais_sipSubscribemwiSchema,
	t38pt_usertpsource: z.string(),
	tarifa: z.number(),
	textsupport: ramais_sipTextsupportSchema,
	timerb: z.number(),
	timert1: z.number(),
	transport: ramais_sipTransportSchema,
	trunkname: z.string(),
	trustrpid: ramais_sipTrustrpidSchema,
	type: ramais_sipTypeSchema,
	useclientcode: ramais_sipUseclientcodeSchema,
	useragent: z.string(),
	usereqphone: ramais_sipUsereqphoneSchema,
	videosupport: ramais_sipVideosupportSchema,
	vmexten: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ramais_sipSchema = ramais_sipBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ramais_sipCreateSchema = ramais_sipSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ramais_sipUpdateSchema = ramais_sipCreateSchema.partial();

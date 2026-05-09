/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	view_voip_sippeers_clienteAllowoverlapSchema,
	view_voip_sippeers_clienteAllowsubscribeSchema,
	view_voip_sippeers_clienteAllowtransferSchema,
	view_voip_sippeers_clienteAtivoSchema,
	view_voip_sippeers_clienteAutoframingSchema,
	view_voip_sippeers_clienteBuggymwiSchema,
	view_voip_sippeers_clienteCallcounterSchema,
	view_voip_sippeers_clienteCallingpresSchema,
	view_voip_sippeers_clienteConstantssrcSchema,
	view_voip_sippeers_clienteDirectmediaSchema,
	view_voip_sippeers_clienteDtmfmodeSchema,
	view_voip_sippeers_clienteDynamicSchema,
	view_voip_sippeers_clienteFaxdetectSchema,
	view_voip_sippeers_clienteFinanceiroAutomaticoSchema,
	view_voip_sippeers_clienteG726nonstandardSchema,
	view_voip_sippeers_clienteHasvoicemailSchema,
	view_voip_sippeers_clienteIgnoresdpversionSchema,
	view_voip_sippeers_clientePadraoSchema,
	view_voip_sippeers_clienteProgressinbandSchema,
	view_voip_sippeers_clientePromiscredirSchema,
	view_voip_sippeers_clienteRfc2833compensateSchema,
	view_voip_sippeers_clienteSendrpidSchema,
	view_voip_sippeers_clienteSessionRefresherSchema,
	view_voip_sippeers_clienteSessionTimersSchema,
	view_voip_sippeers_clienteSubscribemwiSchema,
	view_voip_sippeers_clienteTextsupportSchema,
	view_voip_sippeers_clienteTransportSchema,
	view_voip_sippeers_clienteTrustrpidSchema,
	view_voip_sippeers_clienteTypeSchema,
	view_voip_sippeers_clienteUseclientcodeSchema,
	view_voip_sippeers_clienteUsereqphoneSchema,
	view_voip_sippeers_clienteVideosupportSchema,
} from "./labels";

export const VIEW_VOIP_SIPPEERS_CLIENTE_TABLE_NAME =
	"view_voip_sippeers_cliente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_voip_sippeers_clienteBaseSchema = z.object({
	id: z.number(),
	accountcode: z.string(),
	allow: z.string(),
	allowoverlap: view_voip_sippeers_clienteAllowoverlapSchema,
	allowsubscribe: view_voip_sippeers_clienteAllowsubscribeSchema,
	allowtransfer: view_voip_sippeers_clienteAllowtransferSchema,
	amaflags: z.string(),
	ativo: view_voip_sippeers_clienteAtivoSchema,
	auth: z.string(),
	autoframing: view_voip_sippeers_clienteAutoframingSchema,
	buggymwi: view_voip_sippeers_clienteBuggymwiSchema,
	busylevel: z.number(),
	"call-limit": z.number(),
	callbackextension: z.string(),
	callcounter: view_voip_sippeers_clienteCallcounterSchema,
	callerid: z.string(),
	callgroup: z.string(),
	callingpres: view_voip_sippeers_clienteCallingpresSchema,
	cid_number: z.string(),
	cliente_fantasia: z.string(),
	cliente_id: z.number(),
	cliente_razao: z.string(),
	constantssrc: view_voip_sippeers_clienteConstantssrcSchema,
	contactdeny: z.string(),
	contactpermit: z.string(),
	context: z.string(),
	contrato_id: z.number(),
	ddd: z.number(),
	ddi: z.number(),
	defaultip: z.string(),
	defaultuser: z.string(),
	deny: z.string(),
	descricao: z.string(),
	directmedia: view_voip_sippeers_clienteDirectmediaSchema,
	disallow: z.string(),
	dtmfmode: view_voip_sippeers_clienteDtmfmodeSchema,
	dynamic: view_voip_sippeers_clienteDynamicSchema,
	faxdetect: view_voip_sippeers_clienteFaxdetectSchema,
	financeiro_automatico: view_voip_sippeers_clienteFinanceiroAutomaticoSchema,
	fromdomain: z.string(),
	fromuser: z.string(),
	fullcontact: z.string(),
	fullname: z.string(),
	g726nonstandard: view_voip_sippeers_clienteG726nonstandardSchema,
	gravacao_chamada: z.string(),
	hasvoicemail: view_voip_sippeers_clienteHasvoicemailSchema,
	host: z.string(),
	id_contrato: z.number(),
	id_integracao: z.number(),
	id_sip: z.number(),
	ignoresdpversion: view_voip_sippeers_clienteIgnoresdpversionSchema,
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
	numero_binagem: z.string(),
	outboundproxy: z.string(),
	padrao: view_voip_sippeers_clientePadraoSchema,
	parkinglot: z.string(),
	path: z.string(),
	permit: z.string(),
	pickupgroup: z.string(),
	port: z.number(),
	progressinband: view_voip_sippeers_clienteProgressinbandSchema,
	promiscredir: view_voip_sippeers_clientePromiscredirSchema,
	qualify: z.string(),
	qualifyfreq: z.number(),
	regexten: z.string(),
	regseconds: z.number(),
	regserver: z.string(),
	remotesecret: z.string(),
	rfc2833compensate: view_voip_sippeers_clienteRfc2833compensateSchema,
	rtpholdtimeout: z.number(),
	rtpkeepalive: z.number(),
	rtptimeout: z.number(),
	secret: z.string(),
	sendrpid: view_voip_sippeers_clienteSendrpidSchema,
	senha_ata: z.string(),
	"session-expires": z.number(),
	"session-minse": z.number(),
	"session-refresher": view_voip_sippeers_clienteSessionRefresherSchema,
	"session-timers": view_voip_sippeers_clienteSessionTimersSchema,
	setvar: z.string(),
	status_ramal: z.string(),
	subscribemwi: view_voip_sippeers_clienteSubscribemwiSchema,
	t38pt_usertpsource: z.string(),
	tarifa: z.number(),
	textsupport: view_voip_sippeers_clienteTextsupportSchema,
	timerb: z.number(),
	timert1: z.number(),
	transport: view_voip_sippeers_clienteTransportSchema,
	trunkname: z.string(),
	trustrpid: view_voip_sippeers_clienteTrustrpidSchema,
	type: view_voip_sippeers_clienteTypeSchema,
	useclientcode: view_voip_sippeers_clienteUseclientcodeSchema,
	useragent: z.string(),
	usereqphone: view_voip_sippeers_clienteUsereqphoneSchema,
	videosupport: view_voip_sippeers_clienteVideosupportSchema,
	vmexten: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_voip_sippeers_clienteSchema =
	view_voip_sippeers_clienteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_voip_sippeers_clienteCreateSchema =
	view_voip_sippeers_clienteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_voip_sippeers_clienteUpdateSchema =
	view_voip_sippeers_clienteCreateSchema.partial();

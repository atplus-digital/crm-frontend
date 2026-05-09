/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_IAX_TABLE_NAME = "voip_iax";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_iaxBaseSchema = z.object({
	id: z.number(),
	accountcode: z.string(),
	adsi: z.string(),
	allow: z.string(),
	amaflags: z.string(),
	auth: z.string(),
	callerid: z.string(),
	cid_number: z.string(),
	codecpriority: z.string(),
	context: z.string(),
	dbsecret: z.string(),
	defaultip: z.string(),
	descricao: z.string(),
	encryption: z.string(),
	forcejitterbuffer: z.string(),
	fullname: z.string(),
	host: z.string(),
	id_contrato: z.number(),
	id_contrato_iax: z.number(),
	id_iax: z.number(),
	inkeys: z.string(),
	ipaddr: z.string(),
	jitterbuffer: z.string(),
	language: z.string(),
	mailbox: z.string(),
	mask: z.string(),
	maxauthreq: z.string(),
	mohinterpret: z.string(),
	mohsuggest: z.string(),
	name: z.string(),
	outkey: z.string(),
	port: z.number(),
	qualify: z.string(),
	qualifyfreqnotok: z.string(),
	qualifyfreqok: z.string(),
	qualifysmoothing: z.string(),
	regcontext: z.string(),
	regexten: z.string(),
	regseconds: z.number(),
	requirecalltoken: z.string(),
	secret: z.string(),
	sendani: z.string(),
	senha_ata: z.string(),
	setvar: z.string(),
	sourceaddress: z.string(),
	tarifa: z.number(),
	timezone: z.string(),
	transfer: z.string(),
	trunk: z.string(),
	type: z.string(),
	username: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_iaxSchema = voip_iaxBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_iaxCreateSchema = voip_iaxSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_iaxUpdateSchema = voip_iaxCreateSchema.partial();

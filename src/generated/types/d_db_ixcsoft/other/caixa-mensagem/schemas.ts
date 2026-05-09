/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CAIXA_MENSAGEM_TABLE_NAME = "caixa_mensagem";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const caixa_mensagemBaseSchema = z.object({
	id: z.number(),
	attach: z.string(),
	attachfmt: z.string(),
	callback: z.string(),
	context: z.string(),
	deletevoicemail: z.string(),
	dialout: z.string(),
	email: z.string(),
	envelope: z.string(),
	exitcontext: z.string(),
	forcegreetings: z.string(),
	forcename: z.string(),
	fullname: z.string(),
	id_iax: z.number(),
	id_iax_id: z.number(),
	imapflags: z.string(),
	imappassword: z.string(),
	imapport: z.string(),
	imapsever: z.string(),
	imapuser: z.string(),
	language: z.string(),
	mailbox: z.string(),
	maxmsg: z.number(),
	operator: z.string(),
	pager: z.string(),
	password: z.string(),
	review: z.string(),
	saycid: z.string(),
	sayduration: z.string(),
	saydurationm: z.number(),
	sendvoicemail: z.string(),
	serveremail: z.string(),
	stamp: z.number(),
	tempgreetwarn: z.string(),
	tz: z.string(),
	uniqueid: z.number(),
	voip_sippeers_id: z.number(),
	volgain: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const caixa_mensagemSchema = caixa_mensagemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const caixa_mensagemCreateSchema = caixa_mensagemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const caixa_mensagemUpdateSchema = caixa_mensagemCreateSchema.partial();

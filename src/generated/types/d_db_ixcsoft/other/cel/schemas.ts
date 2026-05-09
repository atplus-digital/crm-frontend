/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CEL_TABLE_NAME = "cel";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const celBaseSchema = z.object({
	id: z.number(),
	accountcode: z.string(),
	amaflags: z.number(),
	appdata: z.string(),
	appname: z.string(),
	channame: z.string(),
	channel: z.string(),
	cid_ani: z.string(),
	cid_dnid: z.string(),
	cid_name: z.string(),
	cid_num: z.string(),
	cid_rdnis: z.string(),
	context: z.string(),
	dst: z.string(),
	dstchannel: z.string(),
	eventextra: z.string(),
	eventtime: z.string(),
	eventtype: z.string(),
	exten: z.string(),
	id_iax: z.number(),
	id_sip: z.number(),
	id_sip_cel: z.number(),
	linkedid: z.string(),
	peer: z.string(),
	src: z.string(),
	uniqueid: z.string(),
	userdeftype: z.string(),
	userfield: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const celSchema = celBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const celCreateSchema = celSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const celUpdateSchema = celCreateSchema.partial();

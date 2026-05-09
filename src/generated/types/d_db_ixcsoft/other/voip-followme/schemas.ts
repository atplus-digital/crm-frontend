/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_FOLLOWME_TABLE_NAME = "voip_followme";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_followmeBaseSchema = z.object({
	id: z.number(),
	call_from_prompt: z.string(),
	context: z.string(),
	declinecall: z.number(),
	id_sip: z.number(),
	id_sipp: z.number(),
	musicclass: z.string(),
	name: z.string(),
	norecording_prompt: z.string(),
	options_prompt: z.string(),
	pls_hold_prompt: z.string(),
	sorry_prompt: z.string(),
	status_from_prompt: z.string(),
	takecall: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_followmeSchema = voip_followmeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_followmeCreateSchema = voip_followmeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_followmeUpdateSchema = voip_followmeCreateSchema.partial();

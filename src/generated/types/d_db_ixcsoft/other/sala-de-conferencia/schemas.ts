/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SALA_DE_CONFERENCIA_TABLE_NAME = "sala_de_conferencia";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sala_de_conferenciaBaseSchema = z.object({
	id: z.number(),
	adminopts: z.string(),
	adminpin: z.string(),
	confno: z.string(),
	endtime: z.string(),
	maxusers: z.number(),
	members: z.number(),
	nome: z.string(),
	opts: z.string(),
	pin: z.string(),
	starttime: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sala_de_conferenciaSchema = sala_de_conferenciaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sala_de_conferenciaCreateSchema = sala_de_conferenciaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sala_de_conferenciaUpdateSchema =
	sala_de_conferenciaCreateSchema.partial();

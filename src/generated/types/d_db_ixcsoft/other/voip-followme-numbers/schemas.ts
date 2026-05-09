/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_FOLLOWME_NUMBERS_TABLE_NAME = "voip_followme_numbers";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_followme_numbersBaseSchema = z.object({
	id: z.number(),
	id_followme: z.number(),
	name: z.string(),
	ordinal: z.number(),
	phonenumber: z.string(),
	timeout: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_followme_numbersSchema = voip_followme_numbersBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_followme_numbersCreateSchema =
	voip_followme_numbersSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_followme_numbersUpdateSchema =
	voip_followme_numbersCreateSchema.partial();

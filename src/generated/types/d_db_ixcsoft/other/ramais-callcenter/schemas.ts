/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { ramais_callcenterRinginuseSchema } from "./labels";

export const RAMAIS_CALLCENTER_TABLE_NAME = "ramais_callcenter";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ramais_callcenterBaseSchema = z.object({
	id: z.number(),
	announce: z.string(),
	context: z.string(),
	interface: z.string(),
	membername: z.string(),
	musiconhold: z.string(),
	name: z.string(),
	paused: z.number(),
	penalty: z.number(),
	queue_name: z.string(),
	ringinuse: ramais_callcenterRinginuseSchema,
	state_interface: z.string(),
	timeout: z.number(),
	uniqueid: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ramais_callcenterSchema = ramais_callcenterBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ramais_callcenterCreateSchema = ramais_callcenterSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ramais_callcenterUpdateSchema =
	ramais_callcenterCreateSchema.partial();

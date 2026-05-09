/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TERMINAL_SMART_TUBE_TABLE_NAME = "terminal_smart_tube";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const terminal_smart_tubeBaseSchema = z.object({
	id: z.number(),
	uid: z.string(),
	account_number: z.string(),
	device_type: z.string(),
	hdcp: z.string(),
	id_tv_usuario: z.number(),
	location: z.string(),
	login: z.string(),
	new_uid: z.string(),
	password: z.string(),
	terminal_name: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const terminal_smart_tubeSchema = terminal_smart_tubeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const terminal_smart_tubeCreateSchema = terminal_smart_tubeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const terminal_smart_tubeUpdateSchema =
	terminal_smart_tubeCreateSchema.partial();

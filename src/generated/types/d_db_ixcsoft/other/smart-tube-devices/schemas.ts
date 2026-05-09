/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SMART_TUBE_DEVICES_TABLE_NAME = "smart_tube_devices";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const smart_tube_devicesBaseSchema = z.object({
	id: z.number(),
	uid: z.string(),
	account_number: z.string(),
	device_type: z.string(),
	hdcp: z.string(),
	id_tv: z.number(),
	location: z.string(),
	login: z.string(),
	password: z.string(),
	terminal_name: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const smart_tube_devicesSchema = smart_tube_devicesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const smart_tube_devicesCreateSchema = smart_tube_devicesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const smart_tube_devicesUpdateSchema =
	smart_tube_devicesCreateSchema.partial();

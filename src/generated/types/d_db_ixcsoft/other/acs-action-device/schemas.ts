/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ACS_ACTION_DEVICE_TABLE_NAME = "acs_action_device";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const acs_action_deviceBaseSchema = z.object({
	id: z.number(),
	date: z.string(),
	device_id: z.number(),
	message: z.string(),
	operation: z.string(),
	request_id: z.string(),
	sn: z.string(),
	status: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const acs_action_deviceSchema = acs_action_deviceBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const acs_action_deviceCreateSchema = acs_action_deviceSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const acs_action_deviceUpdateSchema =
	acs_action_deviceCreateSchema.partial();

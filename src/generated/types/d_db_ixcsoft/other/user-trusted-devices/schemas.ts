/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	user_trusted_devicesDeviceSchema,
	user_trusted_devicesStatusSchema,
} from "./labels";

export const USER_TRUSTED_DEVICES_TABLE_NAME = "user_trusted_devices";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const user_trusted_devicesBaseSchema = z.object({
	id: z.number(),
	browser: z.string(),
	created_at: z.string(),
	device: user_trusted_devicesDeviceSchema,
	device_hash: z.string(),
	expires_at: z.string(),
	op_system: z.string(),
	platform: z.string(),
	signed_token: z.string(),
	status: user_trusted_devicesStatusSchema,
	user_agent: z.string(),
	user_id: z.number(),
	user_ip: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const user_trusted_devicesSchema = user_trusted_devicesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const user_trusted_devicesCreateSchema = user_trusted_devicesSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const user_trusted_devicesUpdateSchema =
	user_trusted_devicesCreateSchema.partial();

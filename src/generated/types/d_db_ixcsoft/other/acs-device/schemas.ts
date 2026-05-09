/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { acs_deviceDevicePrimarySchema } from "./labels";

export const ACS_DEVICE_TABLE_NAME = "acs_device";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const acs_deviceBaseSchema = z.object({
	id: z.number(),
	device_primary: acs_deviceDevicePrimarySchema,
	external_id: z.string(),
	id_acs_integration: z.number(),
	id_login: z.number(),
	ipv4: z.string(),
	last_inform: z.string(),
	last_update: z.string(),
	manufacturer: z.string(),
	model: z.string(),
	senha_router_wifi: z.string(),
	senha_router_wifi_2: z.string(),
	serial_number: z.string(),
	ssid_router_wifi: z.string(),
	ssid_router_wifi_2: z.string(),
	status: z.string(),
	status_contrato: z.string(),
	status_internet_contrato: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const acs_deviceSchema = acs_deviceBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const acs_deviceCreateSchema = acs_deviceSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const acs_deviceUpdateSchema = acs_deviceCreateSchema.partial();

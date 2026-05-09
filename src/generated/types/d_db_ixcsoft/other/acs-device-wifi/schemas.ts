/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	acs_device_wifiEnableSchema,
	acs_device_wifiIsMeshSchema,
	acs_device_wifiTecnologiaSchema,
} from "./labels";

export const ACS_DEVICE_WIFI_TABLE_NAME = "acs_device_wifi";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const acs_device_wifiBaseSchema = z.object({
	id: z.number(),
	enable: acs_device_wifiEnableSchema,
	id_device: z.number(),
	is_mesh: acs_device_wifiIsMeshSchema,
	path: z.string(),
	senha: z.string(),
	ssid: z.string(),
	tecnologia: acs_device_wifiTecnologiaSchema,
	updated_at: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const acs_device_wifiSchema = acs_device_wifiBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const acs_device_wifiCreateSchema = acs_device_wifiSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const acs_device_wifiUpdateSchema =
	acs_device_wifiCreateSchema.partial();

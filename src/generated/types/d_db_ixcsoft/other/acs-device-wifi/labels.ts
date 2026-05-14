/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ACSDEVICEWIFI_FIELD_LABELS = {
	enable: "enable",
	id: "id",
	id_device: "id_device",
	is_mesh: "is_mesh",
	path: "path",
	senha: "senha",
	ssid: "ssid",
	tecnologia: "tecnologia",
	updated_at: "updated_at",
} as const;

export const ACSDEVICEWIFI_ENABLE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ACSDEVICEWIFI_ISMESH_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ACSDEVICEWIFI_TECNOLOGIA_LABELS = {
	"2.4": "2.4",
	"5.8": "5.8",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const acs_device_wifiEnableSchema = z.enum(["S", "N"], {
	error: () => ({ message: "enable: valores válidos são [S, N]" }),
});

export const acs_device_wifiIsMeshSchema = z.enum(["S", "N"], {
	error: () => ({ message: "is_mesh: valores válidos são [S, N]" }),
});

export const acs_device_wifiTecnologiaSchema = z.enum(["2.4", "5.8"], {
	error: () => ({ message: "tecnologia: valores válidos são [2.4, 5.8]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AcsDeviceWifiEnable = z.infer<typeof acs_device_wifiEnableSchema>;

export type AcsDeviceWifiIsMesh = z.infer<typeof acs_device_wifiIsMeshSchema>;

export type AcsDeviceWifiTecnologia = z.infer<
	typeof acs_device_wifiTecnologiaSchema
>;

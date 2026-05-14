/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ACSDEVICE_FIELD_LABELS = {
	device_primary: "device_primary",
	external_id: "external_id",
	id: "id",
	id_acs_integration: "id_acs_integration",
	id_login: "id_login",
	ipv4: "ipv4",
	last_inform: "last_inform",
	last_update: "last_update",
	manufacturer: "manufacturer",
	model: "model",
	senha_router_wifi: "senha_router_wifi",
	senha_router_wifi_2: "senha_router_wifi_2",
	serial_number: "serial_number",
	ssid_router_wifi: "ssid_router_wifi",
	ssid_router_wifi_2: "ssid_router_wifi_2",
	status: "status",
	status_contrato: "status_contrato",
	status_internet_contrato: "status_internet_contrato",
} as const;

export const ACSDEVICE_DEVICEPRIMARY_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const acs_deviceDevicePrimarySchema = z.enum(["S", "N"], {
	error: () => ({ message: "device_primary: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AcsDeviceDevicePrimary = z.infer<
	typeof acs_deviceDevicePrimarySchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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

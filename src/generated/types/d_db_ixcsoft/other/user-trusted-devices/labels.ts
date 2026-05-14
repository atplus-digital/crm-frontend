/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USERTRUSTEDDEVICES_FIELD_LABELS = {
	browser: "browser",
	created_at: "created_at",
	device: "device",
	device_hash: "device_hash",
	expires_at: "expires_at",
	id: "id",
	op_system: "op_system",
	platform: "platform",
	signed_token: "signed_token",
	status: "status",
	user_agent: "user_agent",
	user_id: "user_id",
	user_ip: "user_ip",
} as const;

export const USERTRUSTEDDEVICES_DEVICE_LABELS = {
	D: "D",
	M: "M",
} as const;

export const USERTRUSTEDDEVICES_STATUS_LABELS = {
	A: "A",
	I: "I",
	SA: "SA",
	R: "R",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const user_trusted_devicesDeviceSchema = z.enum(["D", "M"], {
	error: () => ({ message: "device: valores válidos são [D, M]" }),
});

export const user_trusted_devicesStatusSchema = z.enum(["A", "I", "SA", "R"], {
	error: () => ({ message: "status: valores válidos são [A, I, SA, R]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UserTrustedDevicesDevice = z.infer<
	typeof user_trusted_devicesDeviceSchema
>;

export type UserTrustedDevicesStatus = z.infer<
	typeof user_trusted_devicesStatusSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADIPPOOLV6_FIELD_LABELS = {
	called_station_id: "called_station_id",
	calling_station_id: "calling_station_id",
	expiry_time: "expiry_time",
	framed_ip_address: "framed_ip_address",
	id: "id",
	id_pool: "id_pool",
	nas_ip_address: "nas_ip_address",
	pool_key: "pool_key",
	pool_name: "pool_name",
	status: "status",
	username: "username",
} as const;

export const RADIPPOOLV6_STATUS_LABELS = {
	D: "D",
	R: "R",
	O: "O",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radippoolv6StatusSchema = z.enum(["D", "R", "O"], {
	error: () => ({ message: "status: valores válidos são [D, R, O]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type Radippoolv6Status = z.infer<typeof radippoolv6StatusSchema>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADIPPOOL_FIELD_LABELS = {
	CalledStationId: "CalledStationId",
	CallingStationID: "CallingStationID",
	expiry_time: "expiry_time",
	FramedIPAddress: "FramedIPAddress",
	id: "id",
	id_pool: "id_pool",
	NASIPAddress: "NASIPAddress",
	pool_key: "pool_key",
	pool_name: "pool_name",
	status: "status",
	ultima_atualizacao: "ultima_atualizacao",
	username: "username",
} as const;

export const RADIPPOOL_STATUS_LABELS = {
	D: "D",
	R: "R",
	O: "O",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radippoolStatusSchema = z.enum(["D", "R", "O"], {
	error: () => ({ message: "status: valores válidos são [D, R, O]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadippoolStatus = z.infer<typeof radippoolStatusSchema>;

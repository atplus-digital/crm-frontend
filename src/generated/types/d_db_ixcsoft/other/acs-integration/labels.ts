/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ACSINTEGRATION_FIELD_LABELS = {
	api_token: "api_token",
	client_id: "client_id",
	client_secret: "client_secret",
	delete_on_sync: "delete_on_sync",
	expire_api_token: "expire_api_token",
	host: "host",
	id: "id",
	name: "name",
	private_key: "private_key",
	public_key: "public_key",
	secret: "secret",
	type: "type",
	user: "user",
} as const;

export const ACSINTEGRATION_DELETEONSYNC_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const acs_integrationDeleteOnSyncSchema = z.enum(["S", "N"], {
	error: () => ({ message: "delete_on_sync: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AcsIntegrationDeleteOnSync = z.infer<
	typeof acs_integrationDeleteOnSyncSchema
>;

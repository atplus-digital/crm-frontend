/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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

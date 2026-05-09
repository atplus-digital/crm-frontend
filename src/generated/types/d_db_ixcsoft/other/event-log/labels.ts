/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const EVENTLOG_STATUS_LABELS = {
	SUCCESS: "SUCCESS",
	FAILED: "FAILED",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const event_logStatusSchema = z.enum(["SUCCESS", "FAILED"], {
	error: () => ({ message: "status: valores válidos são [SUCCESS, FAILED]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EventLogStatus = z.infer<typeof event_logStatusSchema>;

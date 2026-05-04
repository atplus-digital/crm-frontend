/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGS_LOGLEVEL_LABELS = {
	info: "Info",
	warning: "Warning",
	alert: "Alert",
	error: "Error",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logsLogLevelSchema = z.enum(
	["info", "warning", "alert", "error"],
	{
		error: () => ({
			message: "log_level: valores válidos são [Info, Warning, Alert, Error]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsLogLevel = z.infer<typeof logsLogLevelSchema>;

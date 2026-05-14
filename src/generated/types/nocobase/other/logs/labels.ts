/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_log_data: "Data",
	f_log_level: "Log Level",
	f_log_message: "Message",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

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

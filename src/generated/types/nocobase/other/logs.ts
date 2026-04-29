/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_LOGS_TABLE_NAME = "t_logs";

export const LOGS_LOGLEVEL_LABELS = {
	info: "Info",
	warning: "Warning",
	alert: "Alert",
	error: "Error",
} as const;

export type LogsLogLevel = keyof typeof LOGS_LOGLEVEL_LABELS;

export interface Logs {
	id: number;
	f_log_data: Record<string, unknown>;
	f_log_level: LogsLogLevel;
	f_log_message: string;
	updatedAt: string;
	createdAt: string;
}

export interface LogsRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type LogsRelationKey = keyof LogsRelations;

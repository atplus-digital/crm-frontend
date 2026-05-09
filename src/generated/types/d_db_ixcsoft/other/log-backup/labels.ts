/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGBACKUP_ACAO_LABELS = {
	backup: "backup",
	restaurar: "restaurar",
	download: "download",
	upload: "upload",
	deletar: "deletar",
} as const;

export const LOGBACKUP_STATUS_LABELS = {
	sucesso: "sucesso",
	verificado: "verificado",
	falha: "falha",
	falha_envio: "falha_envio",
	sucesso_sem_envio: "sucesso_sem_envio",
} as const;

export const LOGBACKUP_TIPOBACKUP_LABELS = {
	CS: "CS",
	A: "A",
	B: "B",
	C: "C",
	E: "E",
	OLD: "OLD",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const log_backupAcaoSchema = z.enum(
	["backup", "restaurar", "download", "upload", "deletar"],
	{
		error: () => ({
			message:
				"acao: valores válidos são [backup, restaurar, download, upload, deletar]",
		}),
	},
);

export const log_backupStatusSchema = z.enum(
	["sucesso", "verificado", "falha", "falha_envio", "sucesso_sem_envio"],
	{
		error: () => ({
			message:
				"status: valores válidos são [sucesso, verificado, falha, falha_envio, sucesso_sem_envio]",
		}),
	},
);

export const log_backupTipoBackupSchema = z.enum(
	["CS", "A", "B", "C", "E", "OLD"],
	{
		error: () => ({
			message: "tipo_backup: valores válidos são [CS, A, B, C, E, OLD]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogBackupAcao = z.infer<typeof log_backupAcaoSchema>;

export type LogBackupStatus = z.infer<typeof log_backupStatusSchema>;

export type LogBackupTipoBackup = z.infer<typeof log_backupTipoBackupSchema>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGBACKUP_FIELD_LABELS = {
	acao: "acao",
	data_inicio: "data_inicio",
	data_termino: "data_termino",
	id: "id",
	log_erros: "log_erros",
	log_normal: "log_normal",
	nome_arquivo: "nome_arquivo",
	obs_verificar: "obs_verificar",
	origem_backup: "origem_backup",
	status: "status",
	tamanho_arquivo: "tamanho_arquivo",
	tipo_backup: "tipo_backup",
	tipo_envio: "tipo_envio",
	ultima_atualizacao: "ultima_atualizacao",
	usuario: "usuario",
	usuario_verificou: "usuario_verificou",
} as const;

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

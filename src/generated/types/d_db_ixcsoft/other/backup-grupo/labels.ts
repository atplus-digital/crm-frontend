/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const BACKUPGRUPO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const BACKUPGRUPO_TIPOBACKUP_LABELS = {
	CS: "CS",
	B: "B",
	C: "C",
	A: "A",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const backup_grupoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const backup_grupoTipoBackupSchema = z.enum(["CS", "B", "C", "A", "E"], {
	error: () => ({
		message: "tipo_backup: valores válidos são [CS, B, C, A, E]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type BackupGrupoAtivo = z.infer<typeof backup_grupoAtivoSchema>;

export type BackupGrupoTipoBackup = z.infer<
	typeof backup_grupoTipoBackupSchema
>;

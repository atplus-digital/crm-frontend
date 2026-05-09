/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const BACKUPDRIVE_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const BACKUPDRIVE_TIPO_LABELS = {
	mega: "mega",
	ftp: "ftp",
	rclone: "rclone",
	sftp: "sftp",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const backup_driveAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const backup_driveTipoSchema = z.enum(
	["mega", "ftp", "rclone", "sftp"],
	{
		error: () => ({
			message: "tipo: valores válidos são [mega, ftp, rclone, sftp]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type BackupDriveAtivo = z.infer<typeof backup_driveAtivoSchema>;

export type BackupDriveTipo = z.infer<typeof backup_driveTipoSchema>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { backup_driveAtivoSchema, backup_driveTipoSchema } from "./labels";

export const BACKUP_DRIVE_TABLE_NAME = "backup_drive";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const backup_driveBaseSchema = z.object({
	id: z.number(),
	ativo: backup_driveAtivoSchema,
	descricao: z.string(),
	host: z.string(),
	porta: z.number(),
	registro_rclone: z.string(),
	senha: z.string(),
	tipo: backup_driveTipoSchema,
	usuario: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const backup_driveSchema = backup_driveBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const backup_driveCreateSchema = backup_driveSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const backup_driveUpdateSchema = backup_driveCreateSchema.partial();

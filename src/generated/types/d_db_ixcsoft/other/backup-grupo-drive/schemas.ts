/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const BACKUP_GRUPO_DRIVE_TABLE_NAME = "backup_grupo_drive";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const backup_grupo_driveBaseSchema = z.object({
	id: z.number(),
	dias_remover: z.number(),
	diretorio: z.string(),
	id_drive: z.number(),
	id_grupo: z.number(),
	qtde_minima_bkp: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const backup_grupo_driveSchema = backup_grupo_driveBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const backup_grupo_driveCreateSchema = backup_grupo_driveSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const backup_grupo_driveUpdateSchema =
	backup_grupo_driveCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { listar_backups_driveTipoSchema } from "./labels";

export const LISTAR_BACKUPS_DRIVE_TABLE_NAME = "listar_backups_drive";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const listar_backups_driveBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	diretorio: z.string(),
	nome: z.string(),
	tamanho_backup: z.number(),
	tipo: listar_backups_driveTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const listar_backups_driveSchema = listar_backups_driveBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const listar_backups_driveCreateSchema = listar_backups_driveSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const listar_backups_driveUpdateSchema =
	listar_backups_driveCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	backup_grupoAtivoSchema,
	backup_grupoTipoBackupSchema,
} from "./labels";

export const BACKUP_GRUPO_TABLE_NAME = "backup_grupo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const backup_grupoBaseSchema = z.object({
	id: z.number(),
	ativo: backup_grupoAtivoSchema,
	descricao: z.string(),
	dias_remover: z.number(),
	email: z.string(),
	hora: z.string(),
	id_smtp_backup: z.number(),
	porta: z.number(),
	qtde_minima_bkp: z.number(),
	tempo_estimado: z.string(),
	tipo_backup: backup_grupoTipoBackupSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const backup_grupoSchema = backup_grupoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const backup_grupoCreateSchema = backup_grupoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const backup_grupoUpdateSchema = backup_grupoCreateSchema.partial();

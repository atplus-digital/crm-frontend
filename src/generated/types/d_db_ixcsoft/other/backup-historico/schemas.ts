/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { backup_historicoTipoSchema } from "./labels";

export const BACKUP_HISTORICO_TABLE_NAME = "backup_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const backup_historicoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	nome: z.string(),
	tamanho_backup: z.number(),
	tipo: backup_historicoTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const backup_historicoSchema = backup_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const backup_historicoCreateSchema = backup_historicoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const backup_historicoUpdateSchema =
	backup_historicoCreateSchema.partial();

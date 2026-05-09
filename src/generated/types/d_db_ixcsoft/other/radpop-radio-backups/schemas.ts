/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_RADIO_BACKUPS_TABLE_NAME = "radpop_radio_backups";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_backupsBaseSchema = z.object({
	id: z.number(),
	arquivo: z.string(),
	data_envio: z.string(),
	descricao: z.string(),
	id_concentrador: z.number(),
	id_transmissor: z.number(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_backupsSchema = radpop_radio_backupsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_backupsCreateSchema = radpop_radio_backupsSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_backupsUpdateSchema =
	radpop_radio_backupsCreateSchema.partial();

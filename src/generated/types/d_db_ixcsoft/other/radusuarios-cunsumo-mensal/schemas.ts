/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSUARIOS_CUNSUMO_MENSAL_TABLE_NAME =
	"radusuarios_cunsumo_mensal";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_cunsumo_mensalBaseSchema = z.object({
	id: z.number(),
	ano: z.number(),
	ano_mes: z.number(),
	data_update: z.string(),
	download: z.number(),
	id_login: z.number(),
	mes: z.number(),
	upload: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_cunsumo_mensalSchema =
	radusuarios_cunsumo_mensalBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_cunsumo_mensalCreateSchema =
	radusuarios_cunsumo_mensalSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_cunsumo_mensalUpdateSchema =
	radusuarios_cunsumo_mensalCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	produtos_tabala_fipeTipoSchema,
	produtos_tabala_fipeZerokmSchema,
} from "./labels";

export const PRODUTOS_TABALA_FIPE_TABLE_NAME = "produtos_tabala_fipe";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_tabala_fipeBaseSchema = z.object({
	id: z.number(),
	ano: z.number(),
	combustivel: z.string(),
	id_fipe: z.string(),
	id_marca: z.number(),
	modelo: z.string(),
	referencia: z.string(),
	tipo: produtos_tabala_fipeTipoSchema,
	valor: z.number(),
	versao: z.string(),
	zerokm: produtos_tabala_fipeZerokmSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_tabala_fipeSchema = produtos_tabala_fipeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_tabala_fipeCreateSchema = produtos_tabala_fipeSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_tabala_fipeUpdateSchema =
	produtos_tabala_fipeCreateSchema.partial();

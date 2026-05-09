/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_ROMPIMENTO_FIBRA_CABO_TABLE_NAME = "df_rompimento_fibra_cabo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_rompimento_fibra_caboBaseSchema = z.object({
	id: z.number(),
	fibra: z.number(),
	id_conexao: z.number(),
	id_elemento: z.number(),
	loose_tube: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_rompimento_fibra_caboSchema =
	df_rompimento_fibra_caboBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_rompimento_fibra_caboCreateSchema =
	df_rompimento_fibra_caboSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_rompimento_fibra_caboUpdateSchema =
	df_rompimento_fibra_caboCreateSchema.partial();

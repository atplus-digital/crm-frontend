/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_ELEMENTO_COORDENADA_TABLE_NAME = "df_elemento_coordenada";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_elemento_coordenadaBaseSchema = z.object({
	id: z.number(),
	id_coordenada: z.number(),
	id_elemento: z.number(),
	sequencia: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_elemento_coordenadaSchema = df_elemento_coordenadaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_elemento_coordenadaCreateSchema =
	df_elemento_coordenadaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_elemento_coordenadaUpdateSchema =
	df_elemento_coordenadaCreateSchema.partial();

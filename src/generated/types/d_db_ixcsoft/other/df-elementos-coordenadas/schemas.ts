/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_ELEMENTOS_COORDENADAS_TABLE_NAME = "df_elementos_coordenadas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_elementos_coordenadasBaseSchema = z.object({
	id: z.number(),
	id_coordenada: z.number(),
	id_elemento: z.number(),
	sequencia: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_elementos_coordenadasSchema =
	df_elementos_coordenadasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_elementos_coordenadasCreateSchema =
	df_elementos_coordenadasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_elementos_coordenadasUpdateSchema =
	df_elementos_coordenadasCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_CONEXOES_ELEMENTOS_COORDENADAS_TABLE_NAME =
	"df_conexoes_elementos_coordenadas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_conexoes_elementos_coordenadasBaseSchema = z.object({
	id: z.number(),
	id_conexoes: z.number(),
	id_elementos_coordenadas: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_conexoes_elementos_coordenadasSchema =
	df_conexoes_elementos_coordenadasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_conexoes_elementos_coordenadasCreateSchema =
	df_conexoes_elementos_coordenadasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_conexoes_elementos_coordenadasUpdateSchema =
	df_conexoes_elementos_coordenadasCreateSchema.partial();

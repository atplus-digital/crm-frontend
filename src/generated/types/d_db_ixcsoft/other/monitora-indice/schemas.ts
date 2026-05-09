/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const MONITORA_INDICE_TABLE_NAME = "monitora_indice";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const monitora_indiceBaseSchema = z.object({
	id: z.number(),
	CARDINALITY: z.number(),
	data_coleta: z.string(),
	id_cliente: z.number(),
	index_name: z.string(),
	table_name: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const monitora_indiceSchema = monitora_indiceBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const monitora_indiceCreateSchema = monitora_indiceSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const monitora_indiceUpdateSchema =
	monitora_indiceCreateSchema.partial();

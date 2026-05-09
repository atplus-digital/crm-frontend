/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TABLE_TEST_TABLE_NAME = "table_test";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const table_testBaseSchema = z.object({
	id_table_test: z.number(),
	name: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const table_testSchema = table_testBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const table_testCreateSchema = table_testSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const table_testUpdateSchema = table_testCreateSchema.partial();

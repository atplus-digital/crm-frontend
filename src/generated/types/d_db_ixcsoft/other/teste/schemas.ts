/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { testeTesteEnum2Schema, testeTesteEnumSchema } from "./labels";

export const TESTE_TABLE_NAME = "teste";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const testeBaseSchema = z.object({
	id: z.number(),
	dfghdfghdfghdfghdfghdfg: z.string(),
	id_table: z.number(),
	teste: z.string(),
	teste_arquivo: z.string(),
	teste_enum: testeTesteEnumSchema,
	teste_enum2: testeTesteEnum2Schema,
	teste5: z.number(),
	testeee: z.string(),
	testeTabela: z.string(),
	testetesteTabela: z.string(),
	testetimestamp: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const testeSchema = testeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const testeCreateSchema = testeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const testeUpdateSchema = testeCreateSchema.partial();

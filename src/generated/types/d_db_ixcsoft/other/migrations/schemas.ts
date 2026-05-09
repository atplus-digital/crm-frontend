/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const MIGRATIONS_TABLE_NAME = "migrations";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const migrationsBaseSchema = z.object({
	id: z.number(),
	datahora: z.string(),
	etapa: z.string(),
	nome: z.string(),
	nome_arquivo: z.string(),
	versao_alvo: z.string(),
	versao_executado: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const migrationsSchema = migrationsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const migrationsCreateSchema = migrationsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const migrationsUpdateSchema = migrationsCreateSchema.partial();

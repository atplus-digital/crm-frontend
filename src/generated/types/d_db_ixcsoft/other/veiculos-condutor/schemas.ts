/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VEICULOS_CONDUTOR_TABLE_NAME = "veiculos_condutor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_condutorBaseSchema = z.object({
	id: z.number(),
	cpf: z.string(),
	funcionario: z.number(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_condutorSchema = veiculos_condutorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_condutorCreateSchema = veiculos_condutorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_condutorUpdateSchema =
	veiculos_condutorCreateSchema.partial();

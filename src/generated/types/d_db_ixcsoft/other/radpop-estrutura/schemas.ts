/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_ESTRUTURA_TABLE_NAME = "radpop_estrutura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_estruturaBaseSchema = z.object({
	id: z.number(),
	id_estrutura: z.number(),
	id_radpop: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_estruturaSchema = radpop_estruturaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_estruturaCreateSchema = radpop_estruturaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_estruturaUpdateSchema =
	radpop_estruturaCreateSchema.partial();

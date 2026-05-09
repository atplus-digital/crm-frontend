/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const OPERADORA_TELEFONIA_TABLE_NAME = "operadora_telefonia";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const operadora_telefoniaBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const operadora_telefoniaSchema = operadora_telefoniaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const operadora_telefoniaCreateSchema = operadora_telefoniaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const operadora_telefoniaUpdateSchema =
	operadora_telefoniaCreateSchema.partial();

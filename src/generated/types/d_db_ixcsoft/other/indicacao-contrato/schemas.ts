/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INDICACAO_CONTRATO_TABLE_NAME = "indicacao_contrato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const indicacao_contratoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const indicacao_contratoSchema = indicacao_contratoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const indicacao_contratoCreateSchema = indicacao_contratoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const indicacao_contratoUpdateSchema =
	indicacao_contratoCreateSchema.partial();

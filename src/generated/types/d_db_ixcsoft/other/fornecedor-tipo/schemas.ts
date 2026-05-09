/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FORNECEDOR_TIPO_TABLE_NAME = "fornecedor_tipo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fornecedor_tipoBaseSchema = z.object({
	id: z.number(),
	nome: z.string(),
	planejamento: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fornecedor_tipoSchema = fornecedor_tipoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fornecedor_tipoCreateSchema = fornecedor_tipoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fornecedor_tipoUpdateSchema =
	fornecedor_tipoCreateSchema.partial();

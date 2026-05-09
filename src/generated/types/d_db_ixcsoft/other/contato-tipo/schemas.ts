/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CONTATO_TIPO_TABLE_NAME = "contato_tipo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contato_tipoBaseSchema = z.object({
	id: z.number(),
	cor_mapa: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contato_tipoSchema = contato_tipoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contato_tipoCreateSchema = contato_tipoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const contato_tipoUpdateSchema = contato_tipoCreateSchema.partial();

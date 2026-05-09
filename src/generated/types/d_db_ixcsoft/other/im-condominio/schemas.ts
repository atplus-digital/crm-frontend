/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IM_CONDOMINIO_TABLE_NAME = "im_condominio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_condominioBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_condominioSchema = im_condominioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_condominioCreateSchema = im_condominioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_condominioUpdateSchema = im_condominioCreateSchema.partial();

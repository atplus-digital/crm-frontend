/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IM_CONTRATO_TABLE_NAME = "im_contrato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_contratoBaseSchema = z.object({
	id: z.number(),
	id_cliente: z.number(),
	id_imovel: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_contratoSchema = im_contratoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_contratoCreateSchema = im_contratoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_contratoUpdateSchema = im_contratoCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IM_IMOVEL_VANTAGEM_TABLE_NAME = "im_imovel_vantagem";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_imovel_vantagemBaseSchema = z.object({
	id: z.number(),
	id_imovel: z.number(),
	id_vantagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_imovel_vantagemSchema = im_imovel_vantagemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_imovel_vantagemCreateSchema = im_imovel_vantagemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_imovel_vantagemUpdateSchema =
	im_imovel_vantagemCreateSchema.partial();

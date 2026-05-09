/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { rad_dici_seacModeloNfSchema } from "./labels";

export const RAD_DICI_SEAC_TABLE_NAME = "rad_dici_seac";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_dici_seacBaseSchema = z.object({
	id: z.number(),
	ano: z.number(),
	cnpj_cpf: z.string(),
	data_referencia: z.string(),
	id_filial: z.number(),
	mes: z.number(),
	modelo_nf: rad_dici_seacModeloNfSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_dici_seacSchema = rad_dici_seacBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_dici_seacCreateSchema = rad_dici_seacSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_dici_seacUpdateSchema = rad_dici_seacCreateSchema.partial();

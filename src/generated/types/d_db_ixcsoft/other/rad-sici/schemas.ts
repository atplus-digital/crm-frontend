/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RAD_SICI_TABLE_NAME = "rad_sici";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_siciBaseSchema = z.object({
	id: z.number(),
	data_final: z.string(),
	data_inicial: z.string(),
	id_filial: z.number(),
	numero_fistel: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_siciSchema = rad_siciBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_siciCreateSchema = rad_siciSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_siciUpdateSchema = rad_siciCreateSchema.partial();

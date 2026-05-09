/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RAD_SICI_CAPACIDADES_TABLE_NAME = "rad_sici_capacidades";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_sici_capacidadesBaseSchema = z.object({
	id: z.number(),
	capacidade: z.number(),
	id_cidade: z.number(),
	id_filial: z.number(),
	tecnologia: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_sici_capacidadesSchema = rad_sici_capacidadesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_sici_capacidadesCreateSchema = rad_sici_capacidadesSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_sici_capacidadesUpdateSchema =
	rad_sici_capacidadesCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RAD_SICI_EMPREGOS_TABLE_NAME = "rad_sici_empregos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_sici_empregosBaseSchema = z.object({
	id: z.number(),
	id_rad_sici_parametros: z.number(),
	sigla: z.string(),
	uf: z.string(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_sici_empregosSchema = rad_sici_empregosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_sici_empregosCreateSchema = rad_sici_empregosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_sici_empregosUpdateSchema =
	rad_sici_empregosCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { rad_sici_parametrosAcataRel712Schema } from "./labels";

export const RAD_SICI_PARAMETROS_TABLE_NAME = "rad_sici_parametros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_sici_parametrosBaseSchema = z.object({
	id: z.number(),
	acata_rel712: rad_sici_parametrosAcataRel712Schema,
	iem1_a: z.number(),
	iem1_b: z.number(),
	iem1_c: z.number(),
	iem1_d: z.number(),
	iem1_e: z.number(),
	iem1_f: z.number(),
	iem1_g: z.number(),
	iem2_a: z.number(),
	iem2_b: z.number(),
	iem2_c: z.number(),
	iem3_a: z.number(),
	ipl1_a: z.number(),
	ipl1_b: z.number(),
	ipl1_c: z.number(),
	ipl1_d: z.number(),
	ipl2_a: z.number(),
	ipl2_b: z.number(),
	ipl2_c: z.number(),
	ipl2_d: z.number(),
	numero_fistel: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_sici_parametrosSchema = rad_sici_parametrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_sici_parametrosCreateSchema = rad_sici_parametrosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_sici_parametrosUpdateSchema =
	rad_sici_parametrosCreateSchema.partial();

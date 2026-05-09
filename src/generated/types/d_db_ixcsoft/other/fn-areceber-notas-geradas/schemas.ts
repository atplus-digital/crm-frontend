/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_NOTAS_GERADAS_TABLE_NAME = "fn_areceber_notas_geradas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_notas_geradasBaseSchema = z.object({
	id: z.number(),
	data_geracao: z.string(),
	filial_id: z.number(),
	id_fn_areceber: z.number(),
	id_saida: z.number(),
	modelo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_notas_geradasSchema =
	fn_areceber_notas_geradasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_notas_geradasCreateSchema =
	fn_areceber_notas_geradasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_notas_geradasUpdateSchema =
	fn_areceber_notas_geradasCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_ALT_CARTEIRA_TABLE_NAME = "fn_areceber_alt_carteira";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_alt_carteiraBaseSchema = z.object({
	id: z.number(),
	data_hora_alteracao: z.string(),
	id_areceber: z.number(),
	id_carteira_new: z.number(),
	id_carteira_old: z.number(),
	id_operador: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_alt_carteiraSchema =
	fn_areceber_alt_carteiraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_alt_carteiraCreateSchema =
	fn_areceber_alt_carteiraSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_alt_carteiraUpdateSchema =
	fn_areceber_alt_carteiraCreateSchema.partial();

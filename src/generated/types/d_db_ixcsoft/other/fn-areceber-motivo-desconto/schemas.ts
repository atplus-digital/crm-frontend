/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_MOTIVO_DESCONTO_TABLE_NAME =
	"fn_areceber_motivo_desconto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_motivo_descontoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_motivo_descontoSchema =
	fn_areceber_motivo_descontoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_motivo_descontoCreateSchema =
	fn_areceber_motivo_descontoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_motivo_descontoUpdateSchema =
	fn_areceber_motivo_descontoCreateSchema.partial();

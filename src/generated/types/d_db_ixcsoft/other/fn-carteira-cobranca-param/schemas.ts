/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_CARTEIRA_COBRANCA_PARAM_TABLE_NAME =
	"fn_carteira_cobranca_param";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_carteira_cobranca_paramBaseSchema = z.object({
	id: z.number(),
	id_carteira_cobranca: z.number(),
	parametro: z.string(),
	valor: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_carteira_cobranca_paramSchema =
	fn_carteira_cobranca_paramBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_carteira_cobranca_paramCreateSchema =
	fn_carteira_cobranca_paramSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_carteira_cobranca_paramUpdateSchema =
	fn_carteira_cobranca_paramCreateSchema.partial();

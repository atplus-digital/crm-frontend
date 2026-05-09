/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_ALT_PLANO_LOTE_TABLE_NAME =
	"cliente_contrato_alt_plano_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_alt_plano_loteBaseSchema = z.object({
	id: z.number(),
	data_hora_alteracao: z.string(),
	id_operador: z.number(),
	qtd_contratos: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_alt_plano_loteSchema =
	cliente_contrato_alt_plano_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_alt_plano_loteCreateSchema =
	cliente_contrato_alt_plano_loteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_alt_plano_loteUpdateSchema =
	cliente_contrato_alt_plano_loteCreateSchema.partial();

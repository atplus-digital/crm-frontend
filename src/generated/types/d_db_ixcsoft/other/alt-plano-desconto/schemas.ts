/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ALT_PLANO_DESCONTO_TABLE_NAME = "alt_plano_desconto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const alt_plano_descontoBaseSchema = z.object({
	id: z.number(),
	data_validade: z.string(),
	descricao: z.string(),
	id_alt_plano: z.number(),
	percentual: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const alt_plano_descontoSchema = alt_plano_descontoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const alt_plano_descontoCreateSchema = alt_plano_descontoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const alt_plano_descontoUpdateSchema =
	alt_plano_descontoCreateSchema.partial();

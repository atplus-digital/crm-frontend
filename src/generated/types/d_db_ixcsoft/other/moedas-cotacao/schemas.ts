/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const MOEDAS_COTACAO_TABLE_NAME = "moedas_cotacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const moedas_cotacaoBaseSchema = z.object({
	id: z.number(),
	cotacao: z.number(),
	data: z.string(),
	id_moeda: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const moedas_cotacaoSchema = moedas_cotacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const moedas_cotacaoCreateSchema = moedas_cotacaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const moedas_cotacaoUpdateSchema = moedas_cotacaoCreateSchema.partial();

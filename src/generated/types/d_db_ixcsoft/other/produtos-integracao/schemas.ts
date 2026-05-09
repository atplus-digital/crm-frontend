/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_INTEGRACAO_TABLE_NAME = "produtos_integracao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_integracaoBaseSchema = z.object({
	id: z.number(),
	chave: z.string(),
	id_integracao: z.number(),
	valor: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_integracaoSchema = produtos_integracaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_integracaoCreateSchema = produtos_integracaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_integracaoUpdateSchema =
	produtos_integracaoCreateSchema.partial();

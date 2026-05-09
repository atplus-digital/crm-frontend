/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ESTRUTURA_HISTORICO_TABLE_NAME = "estrutura_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const estrutura_historicoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	descricao_historico: z.string(),
	id_almox_destino: z.number(),
	id_estrutura: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const estrutura_historicoSchema = estrutura_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const estrutura_historicoCreateSchema = estrutura_historicoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const estrutura_historicoUpdateSchema =
	estrutura_historicoCreateSchema.partial();

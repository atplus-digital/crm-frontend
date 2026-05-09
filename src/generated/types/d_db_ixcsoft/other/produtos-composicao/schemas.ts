/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_COMPOSICAO_TABLE_NAME = "produtos_composicao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_composicaoBaseSchema = z.object({
	id: z.number(),
	id_produto: z.number(),
	id_produto_composicao: z.number(),
	id_unidade: z.number(),
	qtde: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_composicaoSchema = produtos_composicaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_composicaoCreateSchema = produtos_composicaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_composicaoUpdateSchema =
	produtos_composicaoCreateSchema.partial();

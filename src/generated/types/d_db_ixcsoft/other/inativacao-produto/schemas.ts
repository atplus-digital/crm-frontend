/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INATIVACAO_PRODUTO_TABLE_NAME = "inativacao_produto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const inativacao_produtoBaseSchema = z.object({
	id: z.number(),
	id_produto: z.number(),
	inativo_em: z.string(),
	inativo_por: z.number(),
	motivo_inativacao: z.number(),
	obs: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const inativacao_produtoSchema = inativacao_produtoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const inativacao_produtoCreateSchema = inativacao_produtoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const inativacao_produtoUpdateSchema =
	inativacao_produtoCreateSchema.partial();

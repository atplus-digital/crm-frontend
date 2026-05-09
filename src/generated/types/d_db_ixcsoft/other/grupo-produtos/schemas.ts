/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const GRUPO_PRODUTOS_TABLE_NAME = "grupo_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const grupo_produtosBaseSchema = z.object({
	id: z.number(),
	codigo_alternativo: z.string(),
	grupo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const grupo_produtosSchema = grupo_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const grupo_produtosCreateSchema = grupo_produtosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const grupo_produtosUpdateSchema = grupo_produtosCreateSchema.partial();

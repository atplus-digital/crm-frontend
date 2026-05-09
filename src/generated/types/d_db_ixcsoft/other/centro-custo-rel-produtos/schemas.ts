/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_CUSTO_REL_PRODUTOS_TABLE_NAME = "centro_custo_rel_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_rel_produtosBaseSchema = z.object({
	id: z.number(),
	id_centro_custo_rel_centro_custo_categoria: z.number(),
	id_produto: z.number(),
	porcentagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custo_rel_produtosSchema =
	centro_custo_rel_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_rel_produtosCreateSchema =
	centro_custo_rel_produtosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_rel_produtosUpdateSchema =
	centro_custo_rel_produtosCreateSchema.partial();

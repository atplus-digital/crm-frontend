/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { smart_tube_produtosFinalidadeProdutoSchema } from "./labels";

export const SMART_TUBE_PRODUTOS_TABLE_NAME = "smart_tube_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const smart_tube_produtosBaseSchema = z.object({
	id: z.number(),
	codigo_plataforma: z.string(),
	finalidade_produto: smart_tube_produtosFinalidadeProdutoSchema,
	id_device_limit: z.number(),
	id_integracao: z.number(),
	id_produto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const smart_tube_produtosSchema = smart_tube_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const smart_tube_produtosCreateSchema = smart_tube_produtosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const smart_tube_produtosUpdateSchema =
	smart_tube_produtosCreateSchema.partial();

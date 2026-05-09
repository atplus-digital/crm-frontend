/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { dash_cards_memcachedStatusSchema } from "./labels";

export const DASH_CARDS_MEMCACHED_TABLE_NAME = "dash_cards_memcached";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const dash_cards_memcachedBaseSchema = z.object({
	id: z.number(),
	card: z.string(),
	data_fim: z.string(),
	data_inicio: z.string(),
	dt_manager_router: z.string(),
	nome_card_memcached: z.string(),
	status: dash_cards_memcachedStatusSchema,
	tempo_execucao_consulta: z.number(),
	ultimo_registro_memcached: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const dash_cards_memcachedSchema = dash_cards_memcachedBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const dash_cards_memcachedCreateSchema = dash_cards_memcachedSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const dash_cards_memcachedUpdateSchema =
	dash_cards_memcachedCreateSchema.partial();

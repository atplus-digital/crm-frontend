/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ITENS_CARGA_TABLE_NAME = "itens_carga";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const itens_cargaBaseSchema = z.object({
	id: z.number(),
	filial_id: z.number(),
	id_carregamento: z.number(),
	item_pedido: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const itens_cargaSchema = itens_cargaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const itens_cargaCreateSchema = itens_cargaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const itens_cargaUpdateSchema = itens_cargaCreateSchema.partial();

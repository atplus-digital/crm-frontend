/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ENTRADA_PEDIDO_TABLE_NAME = "entrada_pedido";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const entrada_pedidoBaseSchema = z.object({
	id: z.number(),
	filial_id: z.number(),
	id_entrada: z.number(),
	id_pedido: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const entrada_pedidoSchema = entrada_pedidoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const entrada_pedidoCreateSchema = entrada_pedidoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const entrada_pedidoUpdateSchema = entrada_pedidoCreateSchema.partial();

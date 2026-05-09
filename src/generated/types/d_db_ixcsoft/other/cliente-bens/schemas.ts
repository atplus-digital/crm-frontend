/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_BENS_TABLE_NAME = "cliente_bens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_bensBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_cliente: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_bensSchema = cliente_bensBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_bensCreateSchema = cliente_bensSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_bensUpdateSchema = cliente_bensCreateSchema.partial();

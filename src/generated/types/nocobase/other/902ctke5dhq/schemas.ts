/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_902CTKE5DHQ_TABLE_NAME = "t_902ctke5dhq";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const _902ctke5dhqBaseSchema = z.object({
	id: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const _902ctke5dhqRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_bmu9tsi11d4: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const _902ctke5dhqSchema = _902ctke5dhqBaseSchema.merge(
	_902ctke5dhqRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const _902ctke5dhqCreateSchema = _902ctke5dhqSchema.omit({
	createdAt: true,
	createdBy: true,
	f_bmu9tsi11d4: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const _902ctke5dhqUpdateSchema = _902ctke5dhqCreateSchema.partial();

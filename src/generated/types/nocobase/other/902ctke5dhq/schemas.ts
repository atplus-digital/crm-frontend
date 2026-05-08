/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { p10scfhrhkwBaseSchema } from "../p10scfhrhkw/schemas";

export const T_902CTKE5DHQ_TABLE_NAME = "t_902ctke5dhq";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const _902ctke5dhqBaseSchema = z.object({
	id: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const _902ctke5dhqRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_bmu9tsi11d4: z.lazy(() => p10scfhrhkwBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const _902ctke5dhqSchema = _902ctke5dhqBaseSchema.extend(
	_902ctke5dhqRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const _902ctke5dhqCreateSchema = _902ctke5dhqSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_bmu9tsi11d4: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const _902ctke5dhqUpdateSchema = _902ctke5dhqCreateSchema.partial();

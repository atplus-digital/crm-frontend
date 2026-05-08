/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { _902ctke5dhqBaseSchema } from "../902ctke5dhq/schemas";

export const T_P10SCFHRHKW_TABLE_NAME = "t_p10scfhrhkw";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const p10scfhrhkwBaseSchema = z.object({
	id: z.number(),
	f_m7vet8zixc9: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const p10scfhrhkwRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_ytw8yxxeul0: z.lazy(() => _902ctke5dhqBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const p10scfhrhkwSchema = p10scfhrhkwBaseSchema.extend(
	p10scfhrhkwRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const p10scfhrhkwCreateSchema = p10scfhrhkwSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_ytw8yxxeul0: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const p10scfhrhkwUpdateSchema = p10scfhrhkwCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_VLAN_TAGS_TABLE_NAME = "t_vlan_tags";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vlan_tagsBaseSchema = z.object({
	id: z.number(),
	f_tag: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const vlan_tagsRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vlan_tagsSchema = vlan_tagsBaseSchema.extend(
	vlan_tagsRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vlan_tagsCreateSchema = vlan_tagsSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vlan_tagsUpdateSchema = vlan_tagsCreateSchema.partial();

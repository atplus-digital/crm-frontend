/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_VLAN_TAGS_TABLE_NAME = "t_vlan_tags";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vlan_tagsBaseSchema = z.object({
	id: z.number(),
	f_tag: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const vlan_tagsRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vlan_tagsSchema = vlan_tagsBaseSchema.merge(
	vlan_tagsRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vlan_tagsCreateSchema = vlan_tagsSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vlan_tagsUpdateSchema = vlan_tagsCreateSchema.partial();

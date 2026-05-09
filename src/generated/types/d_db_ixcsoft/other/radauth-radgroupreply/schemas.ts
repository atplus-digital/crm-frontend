/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_RADGROUPREPLY_TABLE_NAME = "radauth_radgroupreply";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_radgroupreplyBaseSchema = z.object({
	id: z.number(),
	attribute: z.string(),
	groupname: z.string(),
	op: z.string(),
	ultima_atualizacao: z.string(),
	value: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radauth_radgroupreplySchema = radauth_radgroupreplyBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_radgroupreplyCreateSchema =
	radauth_radgroupreplySchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_radgroupreplyUpdateSchema =
	radauth_radgroupreplyCreateSchema.partial();

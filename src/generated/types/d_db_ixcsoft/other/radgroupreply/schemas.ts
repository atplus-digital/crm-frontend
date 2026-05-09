/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADGROUPREPLY_TABLE_NAME = "radgroupreply";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radgroupreplyBaseSchema = z.object({
	id: z.number(),
	attribute: z.string(),
	groupname: z.string(),
	id_plano: z.number(),
	op: z.string(),
	prio: z.string(),
	ultima_atualizacao: z.string(),
	value: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radgroupreplySchema = radgroupreplyBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radgroupreplyCreateSchema = radgroupreplySchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radgroupreplyUpdateSchema = radgroupreplyCreateSchema.partial();

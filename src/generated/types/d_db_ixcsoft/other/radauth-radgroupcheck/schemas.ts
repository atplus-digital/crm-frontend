/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_RADGROUPCHECK_TABLE_NAME = "radauth_radgroupcheck";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_radgroupcheckBaseSchema = z.object({
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
export const radauth_radgroupcheckSchema = radauth_radgroupcheckBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_radgroupcheckCreateSchema =
	radauth_radgroupcheckSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_radgroupcheckUpdateSchema =
	radauth_radgroupcheckCreateSchema.partial();

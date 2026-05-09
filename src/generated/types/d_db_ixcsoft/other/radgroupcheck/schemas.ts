/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADGROUPCHECK_TABLE_NAME = "radgroupcheck";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radgroupcheckBaseSchema = z.object({
	id: z.number(),
	attribute: z.string(),
	groupname: z.string(),
	id_plano: z.number(),
	op: z.string(),
	ultima_atualizacao: z.string(),
	value: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radgroupcheckSchema = radgroupcheckBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radgroupcheckCreateSchema = radgroupcheckSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radgroupcheckUpdateSchema = radgroupcheckCreateSchema.partial();

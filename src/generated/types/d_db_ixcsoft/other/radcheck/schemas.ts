/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADCHECK_TABLE_NAME = "radcheck";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radcheckBaseSchema = z.object({
	id: z.number(),
	attribute: z.string(),
	id_tv_equipamentos: z.number(),
	id_usuario: z.number(),
	op: z.string(),
	ultima_atualizacao: z.string(),
	username: z.string(),
	value: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radcheckSchema = radcheckBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radcheckCreateSchema = radcheckSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radcheckUpdateSchema = radcheckCreateSchema.partial();

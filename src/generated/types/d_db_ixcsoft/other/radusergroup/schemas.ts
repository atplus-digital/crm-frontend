/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSERGROUP_TABLE_NAME = "radusergroup";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusergroupBaseSchema = z.object({
	id: z.number(),
	groupname: z.string(),
	id_usuario: z.number(),
	priority: z.number(),
	ultima_atualizacao: z.string(),
	username: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusergroupSchema = radusergroupBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusergroupCreateSchema = radusergroupSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusergroupUpdateSchema = radusergroupCreateSchema.partial();

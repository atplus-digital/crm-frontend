/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_RADUSERGROUP_TABLE_NAME = "radauth_radusergroup";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_radusergroupBaseSchema = z.object({
	id: z.number(),
	groupname: z.string(),
	priority: z.number(),
	ultima_atualizacao: z.string(),
	username: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radauth_radusergroupSchema = radauth_radusergroupBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_radusergroupCreateSchema = radauth_radusergroupSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_radusergroupUpdateSchema =
	radauth_radusergroupCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_DEPTO_SUB_GRUPO_PROD_TABLE_NAME = "su_depto_sub_grupo_prod";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_depto_sub_grupo_prodBaseSchema = z.object({
	id: z.number(),
	id_depto: z.number(),
	id_sub_grupo_produto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_depto_sub_grupo_prodSchema = su_depto_sub_grupo_prodBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_depto_sub_grupo_prodCreateSchema =
	su_depto_sub_grupo_prodSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_depto_sub_grupo_prodUpdateSchema =
	su_depto_sub_grupo_prodCreateSchema.partial();

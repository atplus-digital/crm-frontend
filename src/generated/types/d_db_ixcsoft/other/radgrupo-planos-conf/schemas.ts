/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADGRUPO_PLANOS_CONF_TABLE_NAME = "radgrupo_planos_conf";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radgrupo_planos_confBaseSchema = z.object({
	id: z.number(),
	id_plano: z.number(),
	id_regra: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radgrupo_planos_confSchema = radgrupo_planos_confBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radgrupo_planos_confCreateSchema = radgrupo_planos_confSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radgrupo_planos_confUpdateSchema =
	radgrupo_planos_confCreateSchema.partial();

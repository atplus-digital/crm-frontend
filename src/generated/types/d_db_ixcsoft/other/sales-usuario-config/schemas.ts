/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SALES_USUARIO_CONFIG_TABLE_NAME = "sales_usuario_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sales_usuario_configBaseSchema = z.object({
	id: z.number(),
	id_usuario: z.number(),
	json_novidades: z.string(),
	ultima_melhoria_vista: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sales_usuario_configSchema = sales_usuario_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sales_usuario_configCreateSchema = sales_usuario_configSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sales_usuario_configUpdateSchema =
	sales_usuario_configCreateSchema.partial();

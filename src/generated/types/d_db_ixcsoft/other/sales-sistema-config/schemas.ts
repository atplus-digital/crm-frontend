/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SALES_SISTEMA_CONFIG_TABLE_NAME = "sales_sistema_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sales_sistema_configBaseSchema = z.object({
	id: z.number(),
	id_layout_form_cliente: z.number(),
	id_layout_form_lead: z.number(),
	id_layout_form_negociacao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sales_sistema_configSchema = sales_sistema_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sales_sistema_configCreateSchema = sales_sistema_configSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sales_sistema_configUpdateSchema =
	sales_sistema_configCreateSchema.partial();

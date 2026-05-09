/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { sales_layouts_formsTipoSchema } from "./labels";

export const SALES_LAYOUTS_FORMS_TABLE_NAME = "sales_layouts_forms";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sales_layouts_formsBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	json: z.string(),
	tipo: sales_layouts_formsTipoSchema,
	versao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sales_layouts_formsSchema = sales_layouts_formsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sales_layouts_formsCreateSchema = sales_layouts_formsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sales_layouts_formsUpdateSchema =
	sales_layouts_formsCreateSchema.partial();

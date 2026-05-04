/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TIPO_X_TEMPLATES_TABLE_NAME = "tipo_x_templates";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tipo_x_templatesBaseSchema = z.object({
	f_fk_tipo_template_1: z.number(),
	f_fk_tipo_template_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tipo_x_templatesSchema = tipo_x_templatesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tipo_x_templatesCreateSchema = tipo_x_templatesSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tipo_x_templatesUpdateSchema =
	tipo_x_templatesCreateSchema.partial();

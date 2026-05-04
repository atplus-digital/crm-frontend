/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TEMPLATES_X_ORDENS_DE_SERVICO_TABLE_NAME =
	"templates_x_ordens_de_servico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const templates_x_ordens_de_servicoBaseSchema = z.object({
	f_fk_template_os_1: z.number(),
	f_fk_template_os_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const templates_x_ordens_de_servicoSchema =
	templates_x_ordens_de_servicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const templates_x_ordens_de_servicoCreateSchema =
	templates_x_ordens_de_servicoSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const templates_x_ordens_de_servicoUpdateSchema =
	templates_x_ordens_de_servicoCreateSchema.partial();

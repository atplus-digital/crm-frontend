/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_SERVICOS_X_SERVICOS_TABLE_NAME = "t_servicos_x_servicos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const servicos_x_servicosBaseSchema = z.object({
	f_8n72gqelvp5: z.number(),
	f_d40asyeldtp: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const servicos_x_servicosSchema = servicos_x_servicosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const servicos_x_servicosCreateSchema = servicos_x_servicosSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const servicos_x_servicosUpdateSchema =
	servicos_x_servicosCreateSchema.partial();

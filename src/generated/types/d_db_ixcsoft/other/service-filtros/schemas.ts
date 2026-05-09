/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SERVICE_FILTROS_TABLE_NAME = "service_filtros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const service_filtrosBaseSchema = z.object({
	id: z.number(),
	id_template: z.number(),
	id_usuario: z.number(),
	json: z.string(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const service_filtrosSchema = service_filtrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const service_filtrosCreateSchema = service_filtrosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const service_filtrosUpdateSchema =
	service_filtrosCreateSchema.partial();

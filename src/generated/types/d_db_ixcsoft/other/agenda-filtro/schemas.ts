/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AGENDA_FILTRO_TABLE_NAME = "agenda_filtro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const agenda_filtroBaseSchema = z.object({
	id: z.number(),
	calendario_filtro: z.string(),
	id_usuario: z.number(),
	os_filtro: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const agenda_filtroSchema = agenda_filtroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const agenda_filtroCreateSchema = agenda_filtroSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const agenda_filtroUpdateSchema = agenda_filtroCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const EVENTOS_DEMANDA_TABLE_NAME = "eventos_demanda";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const eventos_demandaBaseSchema = z.object({
	f_fk1_eventos_demanda: z.number(),
	f_fk2_eventos_demanda: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const eventos_demandaSchema = eventos_demandaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const eventos_demandaCreateSchema = eventos_demandaSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const eventos_demandaUpdateSchema =
	eventos_demandaCreateSchema.partial();

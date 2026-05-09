/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VEICULOS_TRACKER_TABLE_NAME = "veiculos_tracker";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_trackerBaseSchema = z.object({
	id: z.number(),
	gps_time: z.string(),
	ignition: z.string(),
	lastupdate: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	rastreador: z.string(),
	speed: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_trackerSchema = veiculos_trackerBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_trackerCreateSchema = veiculos_trackerSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_trackerUpdateSchema =
	veiculos_trackerCreateSchema.partial();

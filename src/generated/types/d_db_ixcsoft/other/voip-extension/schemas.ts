/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_EXTENSION_TABLE_NAME = "voip_extension";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_extensionBaseSchema = z.object({
	id: z.number(),
	app: z.string(),
	appdata: z.string(),
	context: z.string(),
	DDD: z.number(),
	DDI: z.number(),
	exten: z.string(),
	id_grupo: z.number(),
	id_mascara: z.number(),
	priority: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_extensionSchema = voip_extensionBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_extensionCreateSchema = voip_extensionSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_extensionUpdateSchema = voip_extensionCreateSchema.partial();

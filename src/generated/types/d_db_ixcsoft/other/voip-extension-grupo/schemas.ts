/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_EXTENSION_GRUPO_TABLE_NAME = "voip_extension_grupo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_extension_grupoBaseSchema = z.object({
	id: z.number(),
	contexto: z.string(),
	mascara: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_extension_grupoSchema = voip_extension_grupoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_extension_grupoCreateSchema = voip_extension_grupoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_extension_grupoUpdateSchema =
	voip_extension_grupoCreateSchema.partial();

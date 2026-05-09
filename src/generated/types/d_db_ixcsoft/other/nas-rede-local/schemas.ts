/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const NAS_REDE_LOCAL_TABLE_NAME = "nas_rede_local";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nas_rede_localBaseSchema = z.object({
	id: z.number(),
	id_nas: z.number(),
	ip_rede: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nas_rede_localSchema = nas_rede_localBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nas_rede_localCreateSchema = nas_rede_localSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nas_rede_localUpdateSchema = nas_rede_localCreateSchema.partial();

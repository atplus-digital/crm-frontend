/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const NAS_REDE_NAT_TABLE_NAME = "nas_rede_nat";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nas_rede_natBaseSchema = z.object({
	id: z.number(),
	id_nas: z.number(),
	ip_rede: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nas_rede_natSchema = nas_rede_natBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nas_rede_natCreateSchema = nas_rede_natSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nas_rede_natUpdateSchema = nas_rede_natCreateSchema.partial();

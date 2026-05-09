/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADACESSOSLTE_TABLE_NAME = "radacessoslte";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radacessoslteBaseSchema = z.object({
	id: z.string(),
	lte_auth_key: z.string(),
	lte_auth_opc: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radacessoslteSchema = radacessoslteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radacessoslteCreateSchema = radacessoslteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radacessoslteUpdateSchema = radacessoslteCreateSchema.partial();

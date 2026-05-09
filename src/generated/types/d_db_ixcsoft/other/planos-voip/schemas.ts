/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PLANOS_VOIP_TABLE_NAME = "planos_voip";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const planos_voipBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_plataforma: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const planos_voipSchema = planos_voipBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const planos_voipCreateSchema = planos_voipSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const planos_voipUpdateSchema = planos_voipCreateSchema.partial();

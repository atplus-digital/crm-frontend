/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FECHAMENTO_ANUAL_TABLE_NAME = "fechamento_anual";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fechamento_anualBaseSchema = z.object({
	id: z.number(),
	ano: z.number(),
	data: z.string(),
	filial_id: z.number(),
	id_conta_fechamento: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fechamento_anualSchema = fechamento_anualBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fechamento_anualCreateSchema = fechamento_anualSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fechamento_anualUpdateSchema =
	fechamento_anualCreateSchema.partial();

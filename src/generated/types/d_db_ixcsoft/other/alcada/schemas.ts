/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { alcadaAlcadaSchema } from "./labels";

export const ALCADA_TABLE_NAME = "alcada";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const alcadaBaseSchema = z.object({
	id: z.number(),
	acao: z.number(),
	alcada: alcadaAlcadaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const alcadaSchema = alcadaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const alcadaCreateSchema = alcadaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const alcadaUpdateSchema = alcadaCreateSchema.partial();

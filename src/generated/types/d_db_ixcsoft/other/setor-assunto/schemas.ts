/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SETOR_ASSUNTO_TABLE_NAME = "setor_assunto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const setor_assuntoBaseSchema = z.object({
	id: z.number(),
	id_assunto: z.number(),
	id_setor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const setor_assuntoSchema = setor_assuntoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const setor_assuntoCreateSchema = setor_assuntoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const setor_assuntoUpdateSchema = setor_assuntoCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { diagnostico_assuntoAtivoSchema } from "./labels";

export const DIAGNOSTICO_ASSUNTO_TABLE_NAME = "diagnostico_assunto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const diagnostico_assuntoBaseSchema = z.object({
	id: z.number(),
	ativo: diagnostico_assuntoAtivoSchema,
	id_assunto: z.number(),
	id_diagnostico: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const diagnostico_assuntoSchema = diagnostico_assuntoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const diagnostico_assuntoCreateSchema = diagnostico_assuntoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const diagnostico_assuntoUpdateSchema =
	diagnostico_assuntoCreateSchema.partial();

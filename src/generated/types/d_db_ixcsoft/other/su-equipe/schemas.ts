/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { su_equipeAtivoSchema } from "./labels";

export const SU_EQUIPE_TABLE_NAME = "su_equipe";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_equipeBaseSchema = z.object({
	id: z.number(),
	ativo: su_equipeAtivoSchema,
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_equipeSchema = su_equipeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_equipeCreateSchema = su_equipeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_equipeUpdateSchema = su_equipeCreateSchema.partial();

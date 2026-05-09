/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_EVENTO_STATUS_TABLE_NAME = "su_evento_status";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_evento_statusBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_evento_statusSchema = su_evento_statusBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_evento_statusCreateSchema = su_evento_statusSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_evento_statusUpdateSchema =
	su_evento_statusCreateSchema.partial();

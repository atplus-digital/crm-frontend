/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOG_INTEGRACAO_ATUALIZADO_TABLE_NAME = "log_integracao_atualizado";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_integracao_atualizadoBaseSchema = z.object({
	id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_integracao_atualizadoSchema =
	log_integracao_atualizadoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_integracao_atualizadoCreateSchema =
	log_integracao_atualizadoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_integracao_atualizadoUpdateSchema =
	log_integracao_atualizadoCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ROTINA_STATUS_ATENDIMENTO_TABLE_NAME = "rotina_status_atendimento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rotina_status_atendimentoBaseSchema = z.object({
	id: z.number(),
	gerada: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rotina_status_atendimentoSchema =
	rotina_status_atendimentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rotina_status_atendimentoCreateSchema =
	rotina_status_atendimentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rotina_status_atendimentoUpdateSchema =
	rotina_status_atendimentoCreateSchema.partial();

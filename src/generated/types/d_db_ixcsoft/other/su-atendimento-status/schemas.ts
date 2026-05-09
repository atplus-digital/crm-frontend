/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_ATENDIMENTO_STATUS_TABLE_NAME = "su_atendimento_status";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_atendimento_statusBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	status_relacionado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_atendimento_statusSchema = su_atendimento_statusBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_atendimento_statusCreateSchema =
	su_atendimento_statusSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_atendimento_statusUpdateSchema =
	su_atendimento_statusCreateSchema.partial();

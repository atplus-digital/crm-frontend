/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { logsLogLevelSchema } from "./labels";

export const T_LOGS_TABLE_NAME = "t_logs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logsBaseSchema = z.object({
	id: z.number(),
	f_log_data: z.string(),
	f_log_level: logsLogLevelSchema,
	f_log_message: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const logsRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logsSchema = logsBaseSchema.extend(logsRelationSchema.shape);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logsCreateSchema = logsSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logsUpdateSchema = logsCreateSchema.partial();

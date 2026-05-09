/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_TICKET_STATUS_TABLE_NAME = "su_ticket_status";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_ticket_statusBaseSchema = z.object({
	id: z.number(),
	status: z.string(),
	su_check: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_ticket_statusSchema = su_ticket_statusBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_ticket_statusCreateSchema = su_ticket_statusSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_ticket_statusUpdateSchema =
	su_ticket_statusCreateSchema.partial();

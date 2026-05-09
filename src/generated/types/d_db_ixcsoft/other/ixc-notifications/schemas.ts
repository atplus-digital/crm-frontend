/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IXC_NOTIFICATIONS_TABLE_NAME = "ixc_notifications";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_notificationsBaseSchema = z.object({
	id: z.number(),
	action: z.string(),
	color: z.string(),
	content: z.string(),
	external_id: z.number(),
	icon: z.string(),
	received_at: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_notificationsSchema = ixc_notificationsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_notificationsCreateSchema = ixc_notificationsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_notificationsUpdateSchema =
	ixc_notificationsCreateSchema.partial();

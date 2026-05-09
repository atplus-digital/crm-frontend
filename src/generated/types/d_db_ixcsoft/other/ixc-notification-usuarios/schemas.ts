/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IXC_NOTIFICATION_USUARIOS_TABLE_NAME = "ixc_notification_usuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_notification_usuariosBaseSchema = z.object({
	id: z.number(),
	ixc_notifications_id: z.number(),
	open: z.number(),
	usuario_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_notification_usuariosSchema =
	ixc_notification_usuariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_notification_usuariosCreateSchema =
	ixc_notification_usuariosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_notification_usuariosUpdateSchema =
	ixc_notification_usuariosCreateSchema.partial();

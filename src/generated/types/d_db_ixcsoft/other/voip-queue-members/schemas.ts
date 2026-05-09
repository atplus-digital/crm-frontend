/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_QUEUE_MEMBERS_TABLE_NAME = "voip_queue_members";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_queue_membersBaseSchema = z.object({
	id: z.number(),
	id_fila_nome: z.number(),
	id_queue_member: z.number(),
	interface: z.string(),
	membername: z.string(),
	paused: z.number(),
	penalty: z.number(),
	queue_name: z.string(),
	state_interface: z.string(),
	uniqueid: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_queue_membersSchema = voip_queue_membersBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_queue_membersCreateSchema = voip_queue_membersSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_queue_membersUpdateSchema =
	voip_queue_membersCreateSchema.partial();

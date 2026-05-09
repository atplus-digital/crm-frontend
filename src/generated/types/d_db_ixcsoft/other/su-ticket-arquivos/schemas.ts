/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_TICKET_ARQUIVOS_TABLE_NAME = "su_ticket_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_ticket_arquivosBaseSchema = z.object({
	id: z.number(),
	data_envio: z.string(),
	descricao: z.string(),
	id_ticket: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_ticket_arquivosSchema = su_ticket_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_ticket_arquivosCreateSchema = su_ticket_arquivosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_ticket_arquivosUpdateSchema =
	su_ticket_arquivosCreateSchema.partial();

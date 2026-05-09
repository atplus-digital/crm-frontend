/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usuarios_agendaPermitirConflitoDeHorarioSchema } from "./labels";

export const USUARIOS_AGENDA_TABLE_NAME = "usuarios_agenda";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_agendaBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_usuario: z.number(),
	permitir_conflito_de_horario: usuarios_agendaPermitirConflitoDeHorarioSchema,
	token_google: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_agendaSchema = usuarios_agendaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_agendaCreateSchema = usuarios_agendaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_agendaUpdateSchema =
	usuarios_agendaCreateSchema.partial();

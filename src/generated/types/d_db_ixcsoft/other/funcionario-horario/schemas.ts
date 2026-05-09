/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	funcionario_horarioStatusSchema,
	funcionario_horarioVinculaAgendaGoogleSchema,
} from "./labels";

export const FUNCIONARIO_HORARIO_TABLE_NAME = "funcionario_horario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const funcionario_horarioBaseSchema = z.object({
	id: z.number(),
	data_final: z.string(),
	data_inicial: z.string(),
	date_cancel: z.string(),
	date_create: z.string(),
	date_update: z.string(),
	id_colaborador: z.number(),
	id_evento_google: z.string(),
	id_motivo_cancelamento: z.number(),
	id_motivo_reserva_horario: z.number(),
	id_user_cancel: z.number(),
	id_user_create: z.number(),
	id_user_update: z.number(),
	obs: z.string(),
	status: funcionario_horarioStatusSchema,
	vincula_agenda_google: funcionario_horarioVinculaAgendaGoogleSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const funcionario_horarioSchema = funcionario_horarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const funcionario_horarioCreateSchema = funcionario_horarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const funcionario_horarioUpdateSchema =
	funcionario_horarioCreateSchema.partial();

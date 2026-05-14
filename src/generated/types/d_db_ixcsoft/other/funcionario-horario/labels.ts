/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FUNCIONARIOHORARIO_FIELD_LABELS = {
	data_final: "data_final",
	data_inicial: "data_inicial",
	date_cancel: "date_cancel",
	date_create: "date_create",
	date_update: "date_update",
	id: "id",
	id_colaborador: "id_colaborador",
	id_evento_google: "id_evento_google",
	id_motivo_cancelamento: "id_motivo_cancelamento",
	id_motivo_reserva_horario: "id_motivo_reserva_horario",
	id_user_cancel: "id_user_cancel",
	id_user_create: "id_user_create",
	id_user_update: "id_user_update",
	obs: "obs",
	status: "status",
	vincula_agenda_google: "vincula_agenda_google",
} as const;

export const FUNCIONARIOHORARIO_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
} as const;

export const FUNCIONARIOHORARIO_VINCULAAGENDAGOOGLE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const funcionario_horarioStatusSchema = z.enum(["A", "F", "C"], {
	error: () => ({ message: "status: valores válidos são [A, F, C]" }),
});

export const funcionario_horarioVinculaAgendaGoogleSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "vincula_agenda_google: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FuncionarioHorarioStatus = z.infer<
	typeof funcionario_horarioStatusSchema
>;

export type FuncionarioHorarioVinculaAgendaGoogle = z.infer<
	typeof funcionario_horarioVinculaAgendaGoogleSchema
>;

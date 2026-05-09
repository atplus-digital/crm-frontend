/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMAGENDA_AVISAREMAIL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMAGENDA_AVISARPOPUP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMAGENDA_CLIENTECRM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMAGENDA_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

export const CRMAGENDA_STATUSGOOGLE_LABELS = {
	N: "N",
	A: "A",
	E: "E",
} as const;

export const CRMAGENDA_VINCULARAGENDAUSUARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_agendaAvisarEmailSchema = z.enum(["S", "N"], {
	error: () => ({ message: "avisar_email: valores válidos são [S, N]" }),
});

export const crm_agendaAvisarPopupSchema = z.enum(["S", "N"], {
	error: () => ({ message: "avisar_popup: valores válidos são [S, N]" }),
});

export const crm_agendaClienteCrmSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cliente_crm: valores válidos são [S, N]" }),
});

export const crm_agendaStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

export const crm_agendaStatusGoogleSchema = z.enum(["N", "A", "E"], {
	error: () => ({ message: "status_google: valores válidos são [N, A, E]" }),
});

export const crm_agendaVincularAgendaUsuarioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "vincular_agenda_usuario: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmAgendaAvisarEmail = z.infer<typeof crm_agendaAvisarEmailSchema>;

export type CrmAgendaAvisarPopup = z.infer<typeof crm_agendaAvisarPopupSchema>;

export type CrmAgendaClienteCrm = z.infer<typeof crm_agendaClienteCrmSchema>;

export type CrmAgendaStatus = z.infer<typeof crm_agendaStatusSchema>;

export type CrmAgendaStatusGoogle = z.infer<
	typeof crm_agendaStatusGoogleSchema
>;

export type CrmAgendaVincularAgendaUsuario = z.infer<
	typeof crm_agendaVincularAgendaUsuarioSchema
>;

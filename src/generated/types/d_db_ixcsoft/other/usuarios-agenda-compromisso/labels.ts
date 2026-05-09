/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSAGENDACOMPROMISSO_AVISAREMAIL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSAGENDACOMPROMISSO_AVISARPOPUP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSAGENDACOMPROMISSO_STATUSGOOGLE_LABELS = {
	N: "N",
	A: "A",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_agenda_compromissoAvisarEmailSchema = z.enum(["S", "N"], {
	error: () => ({ message: "avisar_email: valores válidos são [S, N]" }),
});

export const usuarios_agenda_compromissoAvisarPopupSchema = z.enum(["S", "N"], {
	error: () => ({ message: "avisar_popup: valores válidos são [S, N]" }),
});

export const usuarios_agenda_compromissoStatusGoogleSchema = z.enum(
	["N", "A", "E"],
	{
		error: () => ({ message: "status_google: valores válidos são [N, A, E]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosAgendaCompromissoAvisarEmail = z.infer<
	typeof usuarios_agenda_compromissoAvisarEmailSchema
>;

export type UsuariosAgendaCompromissoAvisarPopup = z.infer<
	typeof usuarios_agenda_compromissoAvisarPopupSchema
>;

export type UsuariosAgendaCompromissoStatusGoogle = z.infer<
	typeof usuarios_agenda_compromissoStatusGoogleSchema
>;

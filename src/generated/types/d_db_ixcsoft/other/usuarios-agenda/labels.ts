/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSAGENDA_FIELD_LABELS = {
	descricao: "descricao",
	id: "id",
	id_usuario: "id_usuario",
	permitir_conflito_de_horario: "permitir_conflito_de_horario",
	token_google: "token_google",
} as const;

export const USUARIOSAGENDA_PERMITIRCONFLITODEHORARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_agendaPermitirConflitoDeHorarioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permitir_conflito_de_horario: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosAgendaPermitirConflitoDeHorario = z.infer<
	typeof usuarios_agendaPermitirConflitoDeHorarioSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	usuarios_agenda_compromissoAvisarEmailSchema,
	usuarios_agenda_compromissoAvisarPopupSchema,
	usuarios_agenda_compromissoStatusGoogleSchema,
} from "./labels";

export const USUARIOS_AGENDA_COMPROMISSO_TABLE_NAME =
	"usuarios_agenda_compromisso";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_agenda_compromissoBaseSchema = z.object({
	id: z.number(),
	avisar_email: usuarios_agenda_compromissoAvisarEmailSchema,
	avisar_email_minutos: z.string(),
	avisar_popup: usuarios_agenda_compromissoAvisarPopupSchema,
	avisar_popup_minutos: z.string(),
	data_hora_final: z.string(),
	data_hora_inicio: z.string(),
	descricao: z.string(),
	email_convidados: z.string(),
	id_evento_google: z.string(),
	id_usuario_agenda: z.number(),
	local: z.string(),
	setor: z.number(),
	status_google: usuarios_agenda_compromissoStatusGoogleSchema,
	titulo: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_agenda_compromissoSchema =
	usuarios_agenda_compromissoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_agenda_compromissoCreateSchema =
	usuarios_agenda_compromissoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_agenda_compromissoUpdateSchema =
	usuarios_agenda_compromissoCreateSchema.partial();

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_agendaAvisarEmailSchema,
	crm_agendaAvisarPopupSchema,
	crm_agendaClienteCrmSchema,
	crm_agendaStatusGoogleSchema,
	crm_agendaStatusSchema,
	crm_agendaVincularAgendaUsuarioSchema,
} from "./labels";

export const CRM_AGENDA_TABLE_NAME = "crm_agenda";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_agendaBaseSchema = z.object({
	id: z.number(),
	assunto: z.string(),
	avisar_email: crm_agendaAvisarEmailSchema,
	avisar_email_minutos: z.string(),
	avisar_popup: crm_agendaAvisarPopupSchema,
	avisar_popup_minutos: z.string(),
	cliente_crm: crm_agendaClienteCrmSchema,
	cor: z.string(),
	cor_texto: z.string(),
	email_convidados: z.string(),
	hora_fim: z.string(),
	hora_inicio: z.string(),
	id_cliente: z.number(),
	id_evento_google: z.string(),
	id_lead: z.number(),
	id_negociacao: z.number(),
	id_responsavel: z.number(),
	id_texto_padrao: z.number(),
	id_tipo_agendamento: z.number(),
	id_usuario_agenda: z.number(),
	local: z.string(),
	status: crm_agendaStatusSchema,
	status_google: crm_agendaStatusGoogleSchema,
	tipo: z.string(),
	vincular_agenda_usuario: crm_agendaVincularAgendaUsuarioSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_agendaSchema = crm_agendaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_agendaCreateSchema = crm_agendaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_agendaUpdateSchema = crm_agendaCreateSchema.partial();

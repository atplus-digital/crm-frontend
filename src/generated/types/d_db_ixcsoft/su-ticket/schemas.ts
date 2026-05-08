/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { clienteBaseSchema } from "../cliente/schemas";
import { cliente_contratoBaseSchema } from "../cliente-contrato/schemas";
import { radusuariosBaseSchema } from "../radusuarios/schemas";
import {
	su_ticketIdTicketOrigemSchema,
	su_ticketInteracaoPendenteSchema,
	su_ticketMelhorHorarioReservaSchema,
	su_ticketOrigemEnderecoEstruturaSchema,
	su_ticketOrigemEnderecoSchema,
	su_ticketPrioridadeSchema,
	su_ticketSuStatusSchema,
	su_ticketTipoSchema,
} from "./labels";

export const SU_TICKET_TABLE_NAME = "su_ticket";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_ticketBaseSchema = z.object({
	id: z.number(),
	data_criacao: z.string(),
	data_hora_execucao: z.string(),
	data_hora_os_aberta: z.string(),
	data_hora_os_encaminhada: z.string(),
	data_hora_os_execucao: z.string(),
	data_reservada: z.string(),
	data_ultima_alteracao: z.string(),
	endereco: z.string(),
	id_assunto: z.number(),
	id_canal_atendimento: z.number(),
	id_circuito: z.number(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_estrutura: z.string(),
	id_evento_status_processo: z.number(),
	id_filial: z.number(),
	id_login: z.number(),
	id_responsavel_tecnico: z.number(),
	id_resposta: z.number(),
	id_su_diagnostico: z.number(),
	id_ticket_origem: su_ticketIdTicketOrigemSchema,
	id_ticket_setor: z.number(),
	id_ticket_status: z.string(),
	id_usuario_abertura: z.string(),
	id_usuarios: z.number(),
	id_wfl_processo: z.number(),
	interacao_pendente: su_ticketInteracaoPendenteSchema,
	latitude: z.string(),
	longitude: z.string(),
	melhor_horario_agenda: z.string(),
	melhor_horario_reserva: su_ticketMelhorHorarioReservaSchema,
	mensagens_nao_lida_cli: z.number(),
	mensagens_nao_lida_sup: z.number(),
	menssagem: z.string(),
	origem_cadastro: z.string(),
	origem_endereco: su_ticketOrigemEnderecoSchema,
	origem_endereco_estrutura: su_ticketOrigemEnderecoEstruturaSchema,
	prioridade: su_ticketPrioridadeSchema,
	protocolo: z.string(),
	status: z.string(),
	status_sla: z.string(),
	su_status: su_ticketSuStatusSchema,
	tipo: su_ticketTipoSchema,
	titulo: z.string(),
	token: z.string(),
	ultima_atualizacao: z.string(),
	updated_user: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const su_ticketRelationSchema = z.object({
	f_assunto: z.number().nullable(),
	f_canal_atendimento: z.number().nullable(),
	f_cliente: z.lazy(() => clienteBaseSchema.nullable()),
	f_contrato: z.lazy(() => cliente_contratoBaseSchema.nullable()),
	f_equipe: z.number().nullable(),
	f_estrutura: z.number().nullable(),
	f_evento_status_processo: z.number().nullable(),
	f_filial: z.number().nullable(),
	f_login: z.lazy(() => radusuariosBaseSchema.nullable()),
	f_prioridade: z.number().nullable(),
	f_responsavel: z.number().nullable(),
	f_responsavel_tecnico: z.number().nullable(),
	f_resposta: z.number().nullable(),
	f_status: z.number().nullable(),
	f_su_diagnostico: z.number().nullable(),
	f_ticket_setor: z.number().nullable(),
	f_usuarios: z.number().nullable(),
	f_wfl_processo: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_ticketSchema = su_ticketBaseSchema.extend(
	su_ticketRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_ticketCreateSchema = su_ticketSchema.omit({
	f_assunto: true,
	f_canal_atendimento: true,
	f_cliente: true,
	f_contrato: true,
	f_equipe: true,
	f_estrutura: true,
	f_evento_status_processo: true,
	f_filial: true,
	f_login: true,
	f_prioridade: true,
	f_responsavel: true,
	f_responsavel_tecnico: true,
	f_resposta: true,
	f_status: true,
	f_su_diagnostico: true,
	f_ticket_setor: true,
	f_usuarios: true,
	f_wfl_processo: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_ticketUpdateSchema = su_ticketCreateSchema.partial();

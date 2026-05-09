/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { clienteBaseSchema } from "../cliente/schemas";
import { funcionariosBaseSchema } from "../other/funcionarios/schemas";
import { su_diagnosticoBaseSchema } from "../other/su-diagnostico/schemas";
import { su_oss_assuntoBaseSchema } from "../other/su-oss-assunto/schemas";
import { su_ticket_setorBaseSchema } from "../other/su-ticket-setor/schemas";
import { wfl_processoBaseSchema } from "../other/wfl-processo/schemas";
import {
	su_ticketIdTicketOrigemSchema,
	su_ticketInteracaoPendenteSchema,
	su_ticketMelhorHorarioAgendaSchema,
	su_ticketMelhorHorarioReservaSchema,
	su_ticketOrigemCadastroSchema,
	su_ticketOrigemEnderecoEstruturaSchema,
	su_ticketOrigemEnderecoSchema,
	su_ticketPrioridadeSchema,
	su_ticketStatusSchema,
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
	id_estrutura: z.number(),
	id_evento_status_processo: z.number(),
	id_filial: z.number(),
	id_login: z.number(),
	id_responsavel_tecnico: z.number(),
	id_resposta: z.number(),
	id_su_diagnostico: z.number(),
	id_ticket_origem: su_ticketIdTicketOrigemSchema,
	id_ticket_setor: z.number(),
	id_ticket_status: z.number(),
	id_usuario_abertura: z.number(),
	id_usuarios: z.number(),
	id_wfl_processo: z.number(),
	interacao_pendente: su_ticketInteracaoPendenteSchema,
	latitude: z.string(),
	longitude: z.string(),
	melhor_horario_agenda: su_ticketMelhorHorarioAgendaSchema,
	melhor_horario_reserva: su_ticketMelhorHorarioReservaSchema,
	mensagens_nao_lida_cli: z.number(),
	mensagens_nao_lida_sup: z.number(),
	menssagem: z.string(),
	origem_cadastro: su_ticketOrigemCadastroSchema,
	origem_endereco: su_ticketOrigemEnderecoSchema,
	origem_endereco_estrutura: su_ticketOrigemEnderecoEstruturaSchema,
	prioridade: su_ticketPrioridadeSchema,
	protocolo: z.string(),
	status: su_ticketStatusSchema,
	status_sla: z.string(),
	su_status: su_ticketSuStatusSchema,
	tipo: su_ticketTipoSchema,
	titulo: z.string(),
	token: z.string(),
	ultima_atualizacao: z.string(),
	updated_user: z.number(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const su_ticketRelationSchema = z.object({
	f_assuntos: z.lazy(() => su_oss_assuntoBaseSchema.nullable()),
	f_clientes: z.lazy(() => clienteBaseSchema.nullable()),
	f_diagnostico: z.lazy(() => su_diagnosticoBaseSchema.nullable()),
	f_processo: z.lazy(() => wfl_processoBaseSchema.nullable()),
	f_responsavel: z.lazy(() => funcionariosBaseSchema.nullable()),
	f_setor: z.lazy(() => su_ticket_setorBaseSchema.nullable()),
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
	f_assuntos: true,
	f_clientes: true,
	f_diagnostico: true,
	f_processo: true,
	f_responsavel: true,
	f_setor: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_ticketUpdateSchema = su_ticketCreateSchema.partial();

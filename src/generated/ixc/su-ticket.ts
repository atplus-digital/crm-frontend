/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const SU_TICKET_TABLE_NAME = "su_ticket";

export interface SuTicket {
	id: number;
	data_criacao: string;
	data_hora_execucao: string;
	data_hora_os_aberta: string;
	data_hora_os_encaminhada: string;
	data_hora_os_execucao: string;
	data_reservada: string;
	data_ultima_alteracao: string;
	endereco: string;
	id_assunto: number;
	id_canal_atendimento: number;
	id_circuito: number;
	id_cliente: number;
	id_contrato: number;
	id_estrutura: string;
	id_evento_status_processo: number;
	id_filial: number;
	id_login: number;
	id_responsavel_tecnico: number;
	id_resposta: number;
	id_su_diagnostico: number;
	id_ticket_origem: string;
	id_ticket_setor: number;
	id_ticket_status: string;
	id_usuario_abertura: string;
	id_usuarios: number;
	id_wfl_processo: number;
	interacao_pendente: string;
	latitude: string;
	longitude: string;
	melhor_horario_agenda: string;
	melhor_horario_reserva: string;
	mensagens_nao_lida_cli: number;
	mensagens_nao_lida_sup: number;
	menssagem: string;
	origem_cadastro: string;
	origem_endereco: string;
	origem_endereco_estrutura: string;
	prioridade: string;
	protocolo: string;
	status: string;
	status_sla: string;
	su_status: string;
	tipo: string;
	titulo: string;
	token: string;
	ultima_atualizacao: string;
	updated_user: string;
}

export type SuTicketRelations = Record<string, never>;

export type SuTicketRelationKey = keyof SuTicketRelations;

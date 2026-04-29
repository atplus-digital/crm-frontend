/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Cliente } from "./cliente";
import type { ClienteContrato } from "./cliente-contrato";

export const SU_TICKET_TABLE_NAME = "su_ticket";

export const SUTICKET_IDTICKETORIGEM_LABELS = {
	I: "Interna",
	H: "Hotsite",
} as const;

export const SUTICKET_INTERACAOPENDENTE_LABELS = {
	E: "Externa",
	I: "Interna",
	N: "Nenhuma",
	A: "Ambos",
} as const;

export const SUTICKET_MELHORHORARIORESERVA_LABELS = {
	M: "Manhã",
	T: "Tarde",
	N: "Noite",
	Q: "Qualquer",
} as const;

export const SUTICKET_ORIGEMENDERECO_LABELS = {
	C: "Cliente",
	L: "Login",
	CC: "Contrato",
	M: "Manual",
} as const;

export const SUTICKET_ORIGEMENDERECOESTRUTURA_LABELS = {
	E: "Estrutura",
	M: "Manual",
} as const;

export const SUTICKET_PRIORIDADE_LABELS = {
	B: "Baixa",
	M: "Normal",
	A: "Alta",
	C: "Crítica",
} as const;

export const SUTICKET_SUSTATUS_LABELS = {
	N: "Novo",
	P: "Pendente",
	EP: "Em progresso",
	S: "Solucionado",
	C: "Cancelado",
} as const;

export const SUTICKET_TIPO_LABELS = {
	C: "Cliente",
	E: "Estrutura própria",
} as const;

export type SuTicketIdTicketOrigem =
	keyof typeof SUTICKET_IDTICKETORIGEM_LABELS;

export type SuTicketInteracaoPendente =
	keyof typeof SUTICKET_INTERACAOPENDENTE_LABELS;

export type SuTicketMelhorHorarioReserva =
	keyof typeof SUTICKET_MELHORHORARIORESERVA_LABELS;

export type SuTicketOrigemEndereco =
	keyof typeof SUTICKET_ORIGEMENDERECO_LABELS;

export type SuTicketOrigemEnderecoEstrutura =
	keyof typeof SUTICKET_ORIGEMENDERECOESTRUTURA_LABELS;

export type SuTicketPrioridade = keyof typeof SUTICKET_PRIORIDADE_LABELS;

export type SuTicketSuStatus = keyof typeof SUTICKET_SUSTATUS_LABELS;

export type SuTicketTipo = keyof typeof SUTICKET_TIPO_LABELS;

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
	id_ticket_origem: SuTicketIdTicketOrigem;
	id_ticket_setor: number;
	id_ticket_status: string;
	id_usuario_abertura: string;
	id_usuarios: number;
	id_wfl_processo: number;
	interacao_pendente: SuTicketInteracaoPendente;
	latitude: string;
	longitude: string;
	melhor_horario_agenda: string;
	melhor_horario_reserva: SuTicketMelhorHorarioReserva;
	mensagens_nao_lida_cli: number;
	mensagens_nao_lida_sup: number;
	menssagem: string;
	origem_cadastro: string;
	origem_endereco: SuTicketOrigemEndereco;
	origem_endereco_estrutura: SuTicketOrigemEnderecoEstrutura;
	prioridade: SuTicketPrioridade;
	protocolo: string;
	status: string;
	status_sla: string;
	su_status: SuTicketSuStatus;
	tipo: SuTicketTipo;
	titulo: string;
	token: string;
	ultima_atualizacao: string;
	updated_user: string;
}

export interface SuTicketRelations {
	f_assunto?: unknown | null;
	f_cliente?: Cliente | null;
	f_contrato?: ClienteContrato | null;
	f_equipe?: unknown | null;
	f_prioridade?: unknown | null;
	f_responsavel?: unknown | null;
	f_status?: unknown | null;
}

export type SuTicketRelationKey = keyof SuTicketRelations;

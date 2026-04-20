/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const SU_TICKET_TABLE_NAME = "su_ticket";

export enum SuTicketIdTicketOrigem {
	I = "I",
	H = "H",
}

export enum SuTicketInteracaoPendente {
	E = "E",
	I = "I",
	N = "N",
	A = "A",
}

export enum SuTicketMelhorHorarioReserva {
	M = "M",
	T = "T",
	N = "N",
	Q = "Q",
}

export enum SuTicketOrigemEndereco {
	C = "C",
	L = "L",
	Cc = "CC",
	M = "M",
}

export enum SuTicketOrigemEnderecoEstrutura {
	E = "E",
	M = "M",
}

export enum SuTicketPrioridade {
	B = "B",
	M = "M",
	A = "A",
	C = "C",
}

export enum SuTicketSuStatus {
	N = "N",
	P = "P",
	Ep = "EP",
	S = "S",
	C = "C",
}

export enum SuTicketTipo {
	C = "C",
	E = "E",
}

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

export type SuTicketRelations = Record<string, never>;

export type SuTicketRelationKey = keyof SuTicketRelations;

export const SUTICKET_IDTICKETORIGEM_LABELS: Record<
	SuTicketIdTicketOrigem,
	string
> = {
	[SuTicketIdTicketOrigem.I]: "Interna",
	[SuTicketIdTicketOrigem.H]: "Hotsite",
};

export const SUTICKET_INTERACAOPENDENTE_LABELS: Record<
	SuTicketInteracaoPendente,
	string
> = {
	[SuTicketInteracaoPendente.E]: "Externa",
	[SuTicketInteracaoPendente.I]: "Interna",
	[SuTicketInteracaoPendente.N]: "Nenhuma",
	[SuTicketInteracaoPendente.A]: "Ambos",
};

export const SUTICKET_MELHORHORARIORESERVA_LABELS: Record<
	SuTicketMelhorHorarioReserva,
	string
> = {
	[SuTicketMelhorHorarioReserva.M]: "Manhã",
	[SuTicketMelhorHorarioReserva.T]: "Tarde",
	[SuTicketMelhorHorarioReserva.N]: "Noite",
	[SuTicketMelhorHorarioReserva.Q]: "Qualquer",
};

export const SUTICKET_ORIGEMENDERECO_LABELS: Record<
	SuTicketOrigemEndereco,
	string
> = {
	[SuTicketOrigemEndereco.C]: "Cliente",
	[SuTicketOrigemEndereco.L]: "Login",
	[SuTicketOrigemEndereco.Cc]: "Contrato",
	[SuTicketOrigemEndereco.M]: "Manual",
};

export const SUTICKET_ORIGEMENDERECOESTRUTURA_LABELS: Record<
	SuTicketOrigemEnderecoEstrutura,
	string
> = {
	[SuTicketOrigemEnderecoEstrutura.E]: "Estrutura",
	[SuTicketOrigemEnderecoEstrutura.M]: "Manual",
};

export const SUTICKET_PRIORIDADE_LABELS: Record<SuTicketPrioridade, string> = {
	[SuTicketPrioridade.B]: "Baixa",
	[SuTicketPrioridade.M]: "Normal",
	[SuTicketPrioridade.A]: "Alta",
	[SuTicketPrioridade.C]: "Crítica",
};

export const SUTICKET_SUSTATUS_LABELS: Record<SuTicketSuStatus, string> = {
	[SuTicketSuStatus.N]: "Novo",
	[SuTicketSuStatus.P]: "Pendente",
	[SuTicketSuStatus.Ep]: "Em progresso",
	[SuTicketSuStatus.S]: "Solucionado",
	[SuTicketSuStatus.C]: "Cancelado",
};

export const SUTICKET_TIPO_LABELS: Record<SuTicketTipo, string> = {
	[SuTicketTipo.C]: "Cliente",
	[SuTicketTipo.E]: "Estrutura própria",
};

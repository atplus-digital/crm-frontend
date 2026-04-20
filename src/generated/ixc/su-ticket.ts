/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const SU_TICKET_TABLE_NAME = "su_ticket";

export enum SuTicketIdFilial {
	Value1 = "1",
}

export enum SuTicketIdSuDiagnostico {
	Value0 = "0",
	Value1 = "1",
	Value10 = "10",
	Value13 = "13",
}

export enum SuTicketIdTicketOrigem {
	H = "H",
	I = "I",
}

export enum SuTicketIdTicketSetor {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value7 = "7",
	Value8 = "8",
}

export enum SuTicketInteracaoPendente {
	A = "A",
	E = "E",
	I = "I",
	N = "N",
}

export enum SuTicketMelhorHorarioAgenda {
	Q = "Q",
}

export enum SuTicketMelhorHorarioReserva {
	M = "M",
	Q = "Q",
	T = "T",
}

export enum SuTicketMensagensNaoLidaSup {
	Value0 = "0",
	Value1 = "1",
}

export enum SuTicketOrigemCadastro {
	P = "P",
}

export enum SuTicketOrigemEndereco {
	C = "C",
	Cc = "CC",
	L = "L",
	M = "M",
}

export enum SuTicketPrioridade {
	A = "A",
	C = "C",
	M = "M",
}

export enum SuTicketStatus {
	C = "C",
	F = "F",
	Osag = "OSAG",
}

export enum SuTicketSuStatus {
	S = "S",
}

export enum SuTicketTipo {
	C = "C",
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
	id_filial: SuTicketIdFilial;
	id_login: number;
	id_responsavel_tecnico: number;
	id_resposta: number;
	id_su_diagnostico: SuTicketIdSuDiagnostico;
	id_ticket_origem: SuTicketIdTicketOrigem;
	id_ticket_setor: SuTicketIdTicketSetor;
	id_ticket_status: string;
	id_usuario_abertura: string;
	id_usuarios: number;
	id_wfl_processo: number;
	interacao_pendente: SuTicketInteracaoPendente;
	latitude: string;
	longitude: string;
	melhor_horario_agenda: SuTicketMelhorHorarioAgenda;
	melhor_horario_reserva: SuTicketMelhorHorarioReserva;
	mensagens_nao_lida_cli: number;
	mensagens_nao_lida_sup: SuTicketMensagensNaoLidaSup;
	menssagem: string;
	origem_cadastro: SuTicketOrigemCadastro;
	origem_endereco: SuTicketOrigemEndereco;
	origem_endereco_estrutura: string;
	prioridade: SuTicketPrioridade;
	protocolo: string;
	status: SuTicketStatus;
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

export const SUTICKET_IDFILIAL_LABELS: Record<SuTicketIdFilial, string> = {
	[SuTicketIdFilial.Value1]: "Ativo",
};

export const SUTICKET_IDSUDIAGNOSTICO_LABELS: Record<
	SuTicketIdSuDiagnostico,
	string
> = {
	[SuTicketIdSuDiagnostico.Value0]: "Inativo",
	[SuTicketIdSuDiagnostico.Value1]: "Ativo",
	[SuTicketIdSuDiagnostico.Value10]: "Código 10",
	[SuTicketIdSuDiagnostico.Value13]: "Código 13",
};

export const SUTICKET_IDTICKETORIGEM_LABELS: Record<
	SuTicketIdTicketOrigem,
	string
> = {
	[SuTicketIdTicketOrigem.H]: "H",
	[SuTicketIdTicketOrigem.I]: "Inativo",
};

export const SUTICKET_IDTICKETSETOR_LABELS: Record<
	SuTicketIdTicketSetor,
	string
> = {
	[SuTicketIdTicketSetor.Value1]: "Ativo",
	[SuTicketIdTicketSetor.Value2]: "Código 2",
	[SuTicketIdTicketSetor.Value3]: "Código 3",
	[SuTicketIdTicketSetor.Value4]: "Código 4",
	[SuTicketIdTicketSetor.Value5]: "Código 5",
	[SuTicketIdTicketSetor.Value7]: "Código 7",
	[SuTicketIdTicketSetor.Value8]: "Código 8",
};

export const SUTICKET_INTERACAOPENDENTE_LABELS: Record<
	SuTicketInteracaoPendente,
	string
> = {
	[SuTicketInteracaoPendente.A]: "Ativo",
	[SuTicketInteracaoPendente.E]: "E",
	[SuTicketInteracaoPendente.I]: "Inativo",
	[SuTicketInteracaoPendente.N]: "Não",
};

export const SUTICKET_MELHORHORARIOAGENDA_LABELS: Record<
	SuTicketMelhorHorarioAgenda,
	string
> = {
	[SuTicketMelhorHorarioAgenda.Q]: "Q",
};

export const SUTICKET_MELHORHORARIORESERVA_LABELS: Record<
	SuTicketMelhorHorarioReserva,
	string
> = {
	[SuTicketMelhorHorarioReserva.M]: "M",
	[SuTicketMelhorHorarioReserva.Q]: "Q",
	[SuTicketMelhorHorarioReserva.T]: "T",
};

export const SUTICKET_MENSAGENSNAOLIDASUP_LABELS: Record<
	SuTicketMensagensNaoLidaSup,
	string
> = {
	[SuTicketMensagensNaoLidaSup.Value0]: "Inativo",
	[SuTicketMensagensNaoLidaSup.Value1]: "Ativo",
};

export const SUTICKET_ORIGEMCADASTRO_LABELS: Record<
	SuTicketOrigemCadastro,
	string
> = {
	[SuTicketOrigemCadastro.P]: "P",
};

export const SUTICKET_ORIGEMENDERECO_LABELS: Record<
	SuTicketOrigemEndereco,
	string
> = {
	[SuTicketOrigemEndereco.C]: "C",
	[SuTicketOrigemEndereco.Cc]: "CC",
	[SuTicketOrigemEndereco.L]: "L",
	[SuTicketOrigemEndereco.M]: "M",
};

export const SUTICKET_PRIORIDADE_LABELS: Record<SuTicketPrioridade, string> = {
	[SuTicketPrioridade.A]: "Ativo",
	[SuTicketPrioridade.C]: "C",
	[SuTicketPrioridade.M]: "M",
};

export const SUTICKET_STATUS_LABELS: Record<SuTicketStatus, string> = {
	[SuTicketStatus.C]: "C",
	[SuTicketStatus.F]: "F",
	[SuTicketStatus.Osag]: "OSAG",
};

export const SUTICKET_SUSTATUS_LABELS: Record<SuTicketSuStatus, string> = {
	[SuTicketSuStatus.S]: "Sim",
};

export const SUTICKET_TIPO_LABELS: Record<SuTicketTipo, string> = {
	[SuTicketTipo.C]: "C",
};

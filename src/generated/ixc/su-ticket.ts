/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const SU_TICKET_TABLE_NAME = "su_ticket";

export enum SuTicketDataCriacao {
	B = "B",
	M = "M",
	A = "A",
	C = "C",
}

export enum SuTicketDataReservada {
	I = "I",
	H = "H",
}

export enum SuTicketId {
	C = "C",
	E = "E",
}

export enum SuTicketIdAssunto {
	C = "C",
	L = "L",
	Cc = "CC",
	M = "M",
}

export enum SuTicketIdFilial {
	Value1 = "1",
}

export enum SuTicketIdResposta {
	E = "E",
	I = "I",
	N = "N",
	A = "A",
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

export enum SuTicketMenssagem {
	N = "N",
	P = "P",
	Ep = "EP",
	S = "S",
	C = "C",
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
	M = "M",
	T = "T",
	N = "N",
	Q = "Q",
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

export enum SuTicketTitulo {
	E = "E",
	M = "M",
}

export interface SuTicket {
	id: SuTicketId;
	data_criacao: SuTicketDataCriacao;
	data_hora_execucao: string;
	data_hora_os_aberta: string;
	data_hora_os_encaminhada: string;
	data_hora_os_execucao: string;
	data_reservada: SuTicketDataReservada;
	data_ultima_alteracao: string;
	endereco: string;
	id_assunto: SuTicketIdAssunto;
	id_canal_atendimento: number;
	id_circuito: number;
	id_cliente: number;
	id_contrato: number;
	id_estrutura: string;
	id_evento_status_processo: number;
	id_filial: SuTicketIdFilial;
	id_login: number;
	id_responsavel_tecnico: number;
	id_resposta: SuTicketIdResposta;
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
	menssagem: SuTicketMenssagem;
	origem_cadastro: SuTicketOrigemCadastro;
	origem_endereco: SuTicketOrigemEndereco;
	origem_endereco_estrutura: string;
	prioridade: SuTicketPrioridade;
	protocolo: string;
	status: SuTicketStatus;
	status_sla: string;
	su_status: SuTicketSuStatus;
	tipo: SuTicketTipo;
	titulo: SuTicketTitulo;
	token: string;
	ultima_atualizacao: string;
	updated_user: string;
}

export type SuTicketRelations = Record<string, never>;

export type SuTicketRelationKey = keyof SuTicketRelations;

export const SUTICKET_DATACRIACAO_LABELS: Record<SuTicketDataCriacao, string> =
	{
		[SuTicketDataCriacao.B]: "Baixa",
		[SuTicketDataCriacao.M]: "Normal",
		[SuTicketDataCriacao.A]: "Alta",
		[SuTicketDataCriacao.C]: "Crítica",
	};

export const SUTICKET_DATARESERVADA_LABELS: Record<
	SuTicketDataReservada,
	string
> = {
	[SuTicketDataReservada.I]: "Interna",
	[SuTicketDataReservada.H]: "Hotsite",
};

export const SUTICKET_ID_LABELS: Record<SuTicketId, string> = {
	[SuTicketId.C]: "Cliente",
	[SuTicketId.E]: "Estrutura própria",
};

export const SUTICKET_IDASSUNTO_LABELS: Record<SuTicketIdAssunto, string> = {
	[SuTicketIdAssunto.C]: "Cliente",
	[SuTicketIdAssunto.L]: "Login",
	[SuTicketIdAssunto.Cc]: "Contrato",
	[SuTicketIdAssunto.M]: "Manual",
};

export const SUTICKET_IDFILIAL_LABELS: Record<SuTicketIdFilial, string> = {
	[SuTicketIdFilial.Value1]: "Ativo",
};

export const SUTICKET_IDRESPOSTA_LABELS: Record<SuTicketIdResposta, string> = {
	[SuTicketIdResposta.E]: "Externa",
	[SuTicketIdResposta.I]: "Interna",
	[SuTicketIdResposta.N]: "Nenhuma",
	[SuTicketIdResposta.A]: "Ambos",
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

export const SUTICKET_MENSSAGEM_LABELS: Record<SuTicketMenssagem, string> = {
	[SuTicketMenssagem.N]: "Novo",
	[SuTicketMenssagem.P]: "Pendente",
	[SuTicketMenssagem.Ep]: "Em progresso",
	[SuTicketMenssagem.S]: "Solucionado",
	[SuTicketMenssagem.C]: "Cancelado",
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
	[SuTicketPrioridade.M]: "Manhã",
	[SuTicketPrioridade.T]: "Tarde",
	[SuTicketPrioridade.N]: "Noite",
	[SuTicketPrioridade.Q]: "Qualquer",
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

export const SUTICKET_TITULO_LABELS: Record<SuTicketTitulo, string> = {
	[SuTicketTitulo.E]: "Estrutura",
	[SuTicketTitulo.M]: "Manual",
};

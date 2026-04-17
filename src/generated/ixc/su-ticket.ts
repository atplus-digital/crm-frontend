/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const SU_TICKET_TABLE_NAME = "su_ticket";

export enum SuTicketIdCanalAtendimento {
	Value0 = "0",
}

export enum SuTicketIdCircuito {
	Value0 = "0",
}

export enum SuTicketIdEventoStatusProcesso {
	Value0 = "0",
}

export enum SuTicketIdFilial {
	Value1 = "1",
}

export enum SuTicketIdResponsavelTecnico {
	Value0 = "0",
	Value1 = "1",
	Value10 = "10",
	Value14 = "14",
	Value20 = "20",
	Value3 = "3",
	Value34 = "34",
	Value35 = "35",
	Value4 = "4",
	Value52 = "52",
	Value7 = "7",
}

export enum SuTicketIdResposta {
	Value0 = "0",
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

export enum SuTicketIdUsuarios {
	Value0 = "0",
	Value1 = "1",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value18 = "18",
	Value19 = "19",
	Value20 = "20",
	Value28 = "28",
	Value29 = "29",
	Value3 = "3",
	Value31 = "31",
	Value33 = "33",
	Value34 = "34",
	Value39 = "39",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
}

export enum SuTicketIdWflProcesso {
	Value0 = "0",
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
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

export enum SuTicketMensagensNaoLidaCli {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
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
	id_canal_atendimento: SuTicketIdCanalAtendimento;
	id_circuito: SuTicketIdCircuito;
	id_cliente: number;
	id_contrato: number;
	id_estrutura: string;
	id_evento_status_processo: SuTicketIdEventoStatusProcesso;
	id_filial: SuTicketIdFilial;
	id_login: number;
	id_responsavel_tecnico: SuTicketIdResponsavelTecnico;
	id_resposta: SuTicketIdResposta;
	id_su_diagnostico: SuTicketIdSuDiagnostico;
	id_ticket_origem: SuTicketIdTicketOrigem;
	id_ticket_setor: SuTicketIdTicketSetor;
	id_ticket_status: string;
	id_usuario_abertura: string;
	id_usuarios: SuTicketIdUsuarios;
	id_wfl_processo: SuTicketIdWflProcesso;
	interacao_pendente: SuTicketInteracaoPendente;
	latitude: string;
	longitude: string;
	melhor_horario_agenda: SuTicketMelhorHorarioAgenda;
	melhor_horario_reserva: SuTicketMelhorHorarioReserva;
	mensagens_nao_lida_cli: SuTicketMensagensNaoLidaCli;
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

export const SUTICKET_IDCANALATENDIMENTO_LABELS: Record<
	SuTicketIdCanalAtendimento,
	string
> = {
	[SuTicketIdCanalAtendimento.Value0]: "Inativo",
};

export const SUTICKET_IDCIRCUITO_LABELS: Record<SuTicketIdCircuito, string> = {
	[SuTicketIdCircuito.Value0]: "Inativo",
};

export const SUTICKET_IDEVENTOSTATUSPROCESSO_LABELS: Record<
	SuTicketIdEventoStatusProcesso,
	string
> = {
	[SuTicketIdEventoStatusProcesso.Value0]: "Inativo",
};

export const SUTICKET_IDFILIAL_LABELS: Record<SuTicketIdFilial, string> = {
	[SuTicketIdFilial.Value1]: "Ativo",
};

export const SUTICKET_IDRESPONSAVELTECNICO_LABELS: Record<
	SuTicketIdResponsavelTecnico,
	string
> = {
	[SuTicketIdResponsavelTecnico.Value0]: "Inativo",
	[SuTicketIdResponsavelTecnico.Value1]: "Ativo",
	[SuTicketIdResponsavelTecnico.Value10]: "Código 10",
	[SuTicketIdResponsavelTecnico.Value14]: "Código 14",
	[SuTicketIdResponsavelTecnico.Value20]: "Código 20",
	[SuTicketIdResponsavelTecnico.Value3]: "Código 3",
	[SuTicketIdResponsavelTecnico.Value34]: "Código 34",
	[SuTicketIdResponsavelTecnico.Value35]: "Código 35",
	[SuTicketIdResponsavelTecnico.Value4]: "Código 4",
	[SuTicketIdResponsavelTecnico.Value52]: "Código 52",
	[SuTicketIdResponsavelTecnico.Value7]: "Código 7",
};

export const SUTICKET_IDRESPOSTA_LABELS: Record<SuTicketIdResposta, string> = {
	[SuTicketIdResposta.Value0]: "Inativo",
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

export const SUTICKET_IDUSUARIOS_LABELS: Record<SuTicketIdUsuarios, string> = {
	[SuTicketIdUsuarios.Value0]: "Inativo",
	[SuTicketIdUsuarios.Value1]: "Ativo",
	[SuTicketIdUsuarios.Value10]: "Código 10",
	[SuTicketIdUsuarios.Value11]: "Código 11",
	[SuTicketIdUsuarios.Value12]: "Código 12",
	[SuTicketIdUsuarios.Value18]: "Código 18",
	[SuTicketIdUsuarios.Value19]: "Código 19",
	[SuTicketIdUsuarios.Value20]: "Código 20",
	[SuTicketIdUsuarios.Value28]: "Código 28",
	[SuTicketIdUsuarios.Value29]: "Código 29",
	[SuTicketIdUsuarios.Value3]: "Código 3",
	[SuTicketIdUsuarios.Value31]: "Código 31",
	[SuTicketIdUsuarios.Value33]: "Código 33",
	[SuTicketIdUsuarios.Value34]: "Código 34",
	[SuTicketIdUsuarios.Value39]: "Código 39",
	[SuTicketIdUsuarios.Value4]: "Código 4",
	[SuTicketIdUsuarios.Value5]: "Código 5",
	[SuTicketIdUsuarios.Value6]: "Código 6",
	[SuTicketIdUsuarios.Value7]: "Código 7",
};

export const SUTICKET_IDWFLPROCESSO_LABELS: Record<
	SuTicketIdWflProcesso,
	string
> = {
	[SuTicketIdWflProcesso.Value0]: "Inativo",
	[SuTicketIdWflProcesso.Value11]: "Código 11",
	[SuTicketIdWflProcesso.Value12]: "Código 12",
	[SuTicketIdWflProcesso.Value13]: "Código 13",
	[SuTicketIdWflProcesso.Value2]: "Código 2",
	[SuTicketIdWflProcesso.Value3]: "Código 3",
	[SuTicketIdWflProcesso.Value4]: "Código 4",
	[SuTicketIdWflProcesso.Value5]: "Código 5",
	[SuTicketIdWflProcesso.Value6]: "Código 6",
	[SuTicketIdWflProcesso.Value7]: "Código 7",
	[SuTicketIdWflProcesso.Value8]: "Código 8",
	[SuTicketIdWflProcesso.Value9]: "Código 9",
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

export const SUTICKET_MENSAGENSNAOLIDACLI_LABELS: Record<
	SuTicketMensagensNaoLidaCli,
	string
> = {
	[SuTicketMensagensNaoLidaCli.Value0]: "Inativo",
	[SuTicketMensagensNaoLidaCli.Value1]: "Ativo",
	[SuTicketMensagensNaoLidaCli.Value2]: "Código 2",
	[SuTicketMensagensNaoLidaCli.Value3]: "Código 3",
	[SuTicketMensagensNaoLidaCli.Value4]: "Código 4",
	[SuTicketMensagensNaoLidaCli.Value5]: "Código 5",
	[SuTicketMensagensNaoLidaCli.Value6]: "Código 6",
	[SuTicketMensagensNaoLidaCli.Value7]: "Código 7",
	[SuTicketMensagensNaoLidaCli.Value8]: "Código 8",
	[SuTicketMensagensNaoLidaCli.Value9]: "Código 9",
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

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUTICKET_FIELD_LABELS = {
	data_criacao: "data_criacao",
	data_hora_execucao: "data_hora_execucao",
	data_hora_os_aberta: "data_hora_os_aberta",
	data_hora_os_encaminhada: "data_hora_os_encaminhada",
	data_hora_os_execucao: "data_hora_os_execucao",
	data_reservada: "data_reservada",
	data_ultima_alteracao: "data_ultima_alteracao",
	endereco: "endereco",
	f_assuntos: "Assuntos",
	f_clientes: "Clientes",
	f_diagnostico: "Diagnóstico",
	f_processo: "Processo",
	f_responsavel: "Responsável",
	f_setor: "Setor",
	id: "id",
	id_assunto: "id_assunto",
	id_canal_atendimento: "id_canal_atendimento",
	id_circuito: "id_circuito",
	id_cliente: "id_cliente",
	id_contrato: "id_contrato",
	id_estrutura: "id_estrutura",
	id_evento_status_processo: "id_evento_status_processo",
	id_filial: "id_filial",
	id_login: "id_login",
	id_responsavel_tecnico: "id_responsavel_tecnico",
	id_resposta: "id_resposta",
	id_su_diagnostico: "id_su_diagnostico",
	id_ticket_origem: "id_ticket_origem",
	id_ticket_setor: "id_ticket_setor",
	id_ticket_status: "id_ticket_status",
	id_usuario_abertura: "id_usuario_abertura",
	id_usuarios: "id_usuarios",
	id_wfl_processo: "id_wfl_processo",
	interacao_pendente: "interacao_pendente",
	latitude: "latitude",
	longitude: "longitude",
	melhor_horario_agenda: "melhor_horario_agenda",
	melhor_horario_reserva: "melhor_horario_reserva",
	mensagens_nao_lida_cli: "mensagens_nao_lida_cli",
	mensagens_nao_lida_sup: "mensagens_nao_lida_sup",
	menssagem: "menssagem",
	origem_cadastro: "origem_cadastro",
	origem_endereco: "origem_endereco",
	origem_endereco_estrutura: "origem_endereco_estrutura",
	prioridade: "prioridade",
	protocolo: "protocolo",
	status: "status",
	status_sla: "status_sla",
	su_status: "su_status",
	tipo: "tipo",
	titulo: "titulo",
	token: "token",
	ultima_atualizacao: "ultima_atualizacao",
	updated_user: "updated_user",
} as const;

export const SUTICKET_IDTICKETORIGEM_LABELS = {
	I: "I",
	H: "H",
	A: "A",
} as const;

export const SUTICKET_INTERACAOPENDENTE_LABELS = {
	E: "E",
	I: "I",
	N: "N",
	A: "A",
} as const;

export const SUTICKET_MELHORHORARIOAGENDA_LABELS = {
	M: "M",
	T: "T",
	N: "N",
	Q: "Q",
} as const;

export const SUTICKET_MELHORHORARIORESERVA_LABELS = {
	M: "M",
	T: "T",
	N: "N",
	Q: "Q",
} as const;

export const SUTICKET_ORIGEMCADASTRO_LABELS = {
	P: "P",
	SV: "SV",
} as const;

export const SUTICKET_ORIGEMENDERECO_LABELS = {
	C: "C",
	L: "L",
	CC: "CC",
	M: "M",
} as const;

export const SUTICKET_ORIGEMENDERECOESTRUTURA_LABELS = {
	E: "E",
	M: "M",
} as const;

export const SUTICKET_PRIORIDADE_LABELS = {
	B: "B",
	M: "M",
	A: "A",
	C: "C",
} as const;

export const SUTICKET_STATUS_LABELS = {
	T: "T",
	C: "C",
	F: "F",
	EX: "EX",
	OSAB: "OSAB",
	OSAG: "OSAG",
	OSEX: "OSEX",
} as const;

export const SUTICKET_SUSTATUS_LABELS = {
	N: "Novo",
	P: "Pendente",
	EP: "Em progresso",
	S: "Solucionado",
	C: "Cancelado",
} as const;

export const SUTICKET_TIPO_LABELS = {
	C: "C",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_ticketIdTicketOrigemSchema = z.enum(["I", "H", "A"], {
	error: () => ({ message: "id_ticket_origem: valores válidos são [I, H, A]" }),
});

export const su_ticketInteracaoPendenteSchema = z.enum(["E", "I", "N", "A"], {
	error: () => ({
		message: "interacao_pendente: valores válidos são [E, I, N, A]",
	}),
});

export const su_ticketMelhorHorarioAgendaSchema = z.enum(["M", "T", "N", "Q"], {
	error: () => ({
		message: "melhor_horario_agenda: valores válidos são [M, T, N, Q]",
	}),
});

export const su_ticketMelhorHorarioReservaSchema = z.enum(
	["M", "T", "N", "Q"],
	{
		error: () => ({
			message: "melhor_horario_reserva: valores válidos são [M, T, N, Q]",
		}),
	},
);

export const su_ticketOrigemCadastroSchema = z.enum(["P", "SV"], {
	error: () => ({ message: "origem_cadastro: valores válidos são [P, SV]" }),
});

export const su_ticketOrigemEnderecoSchema = z.enum(["C", "L", "CC", "M"], {
	error: () => ({
		message: "origem_endereco: valores válidos são [C, L, CC, M]",
	}),
});

export const su_ticketOrigemEnderecoEstruturaSchema = z.enum(["E", "M"], {
	error: () => ({
		message: "origem_endereco_estrutura: valores válidos são [E, M]",
	}),
});

export const su_ticketPrioridadeSchema = z.enum(["B", "M", "A", "C"], {
	error: () => ({ message: "prioridade: valores válidos são [B, M, A, C]" }),
});

export const su_ticketStatusSchema = z.enum(
	["T", "C", "F", "EX", "OSAB", "OSAG", "OSEX"],
	{
		error: () => ({
			message: "status: valores válidos são [T, C, F, EX, OSAB, OSAG, OSEX]",
		}),
	},
);

export const su_ticketSuStatusSchema = z.enum(["N", "P", "EP", "S", "C"], {
	error: () => ({
		message:
			"su_status: valores válidos são [Novo, Pendente, Em progresso, Solucionado, Cancelado]",
	}),
});

export const su_ticketTipoSchema = z.enum(["C", "E"], {
	error: () => ({ message: "tipo: valores válidos são [C, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuTicketIdTicketOrigem = z.infer<
	typeof su_ticketIdTicketOrigemSchema
>;

export type SuTicketInteracaoPendente = z.infer<
	typeof su_ticketInteracaoPendenteSchema
>;

export type SuTicketMelhorHorarioAgenda = z.infer<
	typeof su_ticketMelhorHorarioAgendaSchema
>;

export type SuTicketMelhorHorarioReserva = z.infer<
	typeof su_ticketMelhorHorarioReservaSchema
>;

export type SuTicketOrigemCadastro = z.infer<
	typeof su_ticketOrigemCadastroSchema
>;

export type SuTicketOrigemEndereco = z.infer<
	typeof su_ticketOrigemEnderecoSchema
>;

export type SuTicketOrigemEnderecoEstrutura = z.infer<
	typeof su_ticketOrigemEnderecoEstruturaSchema
>;

export type SuTicketPrioridade = z.infer<typeof su_ticketPrioridadeSchema>;

export type SuTicketStatus = z.infer<typeof su_ticketStatusSchema>;

export type SuTicketSuStatus = z.infer<typeof su_ticketSuStatusSchema>;

export type SuTicketTipo = z.infer<typeof su_ticketTipoSchema>;

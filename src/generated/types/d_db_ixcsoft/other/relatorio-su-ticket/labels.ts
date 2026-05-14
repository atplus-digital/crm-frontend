/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOSUTICKET_FIELD_LABELS = {
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_criacao_final: "data_criacao_final",
	data_criacao_inicial: "data_criacao_inicial",
	data_criacao_periodo: "data_criacao_periodo",
	data_reservada_final: "data_reservada_final",
	data_reservada_inicial: "data_reservada_inicial",
	data_reservada_periodo: "data_reservada_periodo",
	data_ultima_alteracao_final: "data_ultima_alteracao_final",
	data_ultima_alteracao_inicial: "data_ultima_alteracao_inicial",
	data_ultima_alteracao_periodo: "data_ultima_alteracao_periodo",
	data_ultima_impres: "data_ultima_impres",
	id: "id",
	id_assunto: "id_assunto",
	id_canal_atendimento: "id_canal_atendimento",
	id_cliente: "id_cliente",
	id_contrato: "id_contrato",
	id_estrutura: "id_estrutura",
	id_evento_status_processo: "id_evento_status_processo",
	id_filial: "id_filial",
	id_login: "id_login",
	id_responsavel_tecnico: "id_responsavel_tecnico",
	id_su_diagnostico: "id_su_diagnostico",
	id_ticket_origem: "id_ticket_origem",
	id_ticket_setor: "id_ticket_setor",
	id_usuario_abertura: "id_usuario_abertura",
	id_usuarios: "id_usuarios",
	id_wfl_processo: "id_wfl_processo",
	impresso_por: "impresso_por",
	nome: "nome",
	relacionado_oss: "relacionado_oss",
	relatorio: "relatorio",
	tipo: "tipo",
	tipo_data_criacao: "tipo_data_criacao",
	tipo_data_reservada: "tipo_data_reservada",
	tipo_data_ultima_alteracao: "tipo_data_ultima_alteracao",
	titulo: "titulo",
} as const;

export const RELATORIOSUTICKET_IDTICKETORIGEM_LABELS = {
	A: "A",
	H: "H",
	I: "I",
} as const;

export const RELATORIOSUTICKET_RELACIONADOOSS_LABELS = {
	A: "A",
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUTICKET_TIPO_LABELS = {
	A: "A",
	C: "C",
	E: "E",
} as const;

export const RELATORIOSUTICKET_TIPODATACRIACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOSUTICKET_TIPODATARESERVADA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOSUTICKET_TIPODATAULTIMAALTERACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_su_ticketIdTicketOrigemSchema = z.enum(["A", "H", "I"], {
	error: () => ({ message: "id_ticket_origem: valores válidos são [A, H, I]" }),
});

export const relatorio_su_ticketRelacionadoOssSchema = z.enum(["A", "S", "N"], {
	error: () => ({ message: "relacionado_oss: valores válidos são [A, S, N]" }),
});

export const relatorio_su_ticketTipoSchema = z.enum(["A", "C", "E"], {
	error: () => ({ message: "tipo: valores válidos são [A, C, E]" }),
});

export const relatorio_su_ticketTipoDataCriacaoSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_criacao: valores válidos são [D, P]" }),
});

export const relatorio_su_ticketTipoDataReservadaSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_reservada: valores válidos são [D, P]" }),
});

export const relatorio_su_ticketTipoDataUltimaAlteracaoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_ultima_alteracao: valores válidos são [D, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioSuTicketIdTicketOrigem = z.infer<
	typeof relatorio_su_ticketIdTicketOrigemSchema
>;

export type RelatorioSuTicketRelacionadoOss = z.infer<
	typeof relatorio_su_ticketRelacionadoOssSchema
>;

export type RelatorioSuTicketTipo = z.infer<
	typeof relatorio_su_ticketTipoSchema
>;

export type RelatorioSuTicketTipoDataCriacao = z.infer<
	typeof relatorio_su_ticketTipoDataCriacaoSchema
>;

export type RelatorioSuTicketTipoDataReservada = z.infer<
	typeof relatorio_su_ticketTipoDataReservadaSchema
>;

export type RelatorioSuTicketTipoDataUltimaAlteracao = z.infer<
	typeof relatorio_su_ticketTipoDataUltimaAlteracaoSchema
>;

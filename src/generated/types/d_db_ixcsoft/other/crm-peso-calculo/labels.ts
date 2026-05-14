/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMPESOCALCULO_FIELD_LABELS = {
	assunto_negociacao: "assunto_negociacao",
	bloqueio_de_endereco: "bloqueio_de_endereco",
	celular_diario: "celular_diario",
	celular_peso: "celular_peso",
	celular_raro: "celular_raro",
	celular_semanal: "celular_semanal",
	computador_diario: "computador_diario",
	computador_peso: "computador_peso",
	computador_raro: "computador_raro",
	computador_semanal: "computador_semanal",
	console_diario: "console_diario",
	console_peso: "console_peso",
	console_raro: "console_raro",
	console_semanal: "console_semanal",
	cor_botoes: "cor_botoes",
	cor_topo: "cor_topo",
	email_comercial: "email_comercial",
	feriados_fds_disp_agendamento: "feriados_fds_disp_agendamento",
	google_tag_manager: "google_tag_manager",
	habilita_calculo_velocidade: "habilita_calculo_velocidade",
	horario_manha: "horario_manha",
	horario_noite: "horario_noite",
	horario_tarde: "horario_tarde",
	id: "id",
	id_filial_viabilidade: "id_filial_viabilidade",
	id_smtp: "id_smtp",
	inserir_filtros_padrao: "inserir_filtros_padrao",
	limite_os_dia: "limite_os_dia",
	limite_os_noite: "limite_os_noite",
	limite_os_tarde: "limite_os_tarde",
	link_messenger: "link_messenger",
	link_wpp: "link_wpp",
	logotipo_marca: "logotipo_marca",
	mensagem_padrao_contato: "mensagem_padrao_contato",
	numero_telefone: "numero_telefone",
	padrao_celular: "padrao_celular",
	padrao_celular_frequencia: "padrao_celular_frequencia",
	padrao_computador: "padrao_computador",
	padrao_computador_frequencia: "padrao_computador_frequencia",
	padrao_console: "padrao_console",
	padrao_console_frequencia: "padrao_console_frequencia",
	padrao_pessoa: "padrao_pessoa",
	padrao_pessoa_frequencia: "padrao_pessoa_frequencia",
	padrao_tv: "padrao_tv",
	padrao_tv_frequencia: "padrao_tv_frequencia",
	pessoa_diario: "pessoa_diario",
	pessoa_peso: "pessoa_peso",
	pessoa_raro: "pessoa_raro",
	pessoa_semanal: "pessoa_semanal",
	pode_utilizar_v1: "pode_utilizar_v1",
	politica_privacidade: "politica_privacidade",
	processo_negociacao: "processo_negociacao",
	qtd_dias_disponiveis_agendamento: "qtd_dias_disponiveis_agendamento",
	quantidade_visitas: "quantidade_visitas",
	site_direcionamento: "site_direcionamento",
	tv_diario: "tv_diario",
	tv_peso: "tv_peso",
	tv_raro: "tv_raro",
	tv_semanal: "tv_semanal",
	url_servidor_viabilidade: "url_servidor_viabilidade",
	utiliza_servidor_externo: "utiliza_servidor_externo",
	versao_viabilidade: "versao_viabilidade",
} as const;

export const CRMPESOCALCULO_BLOQUEIODEENDERECO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPESOCALCULO_FERIADOSFDSDISPAGENDAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPESOCALCULO_HABILITACALCULOVELOCIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPESOCALCULO_INSERIRFILTROSPADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPESOCALCULO_PADRAOCELULARFREQUENCIA_LABELS = {
	d: "d",
	s: "s",
	r: "r",
} as const;

export const CRMPESOCALCULO_PADRAOCOMPUTADORFREQUENCIA_LABELS = {
	d: "d",
	s: "s",
	r: "r",
} as const;

export const CRMPESOCALCULO_PADRAOCONSOLEFREQUENCIA_LABELS = {
	d: "d",
	s: "s",
	r: "r",
} as const;

export const CRMPESOCALCULO_PADRAOPESSOAFREQUENCIA_LABELS = {
	d: "d",
	s: "s",
	r: "r",
} as const;

export const CRMPESOCALCULO_PADRAOTVFREQUENCIA_LABELS = {
	d: "d",
	s: "s",
	r: "r",
} as const;

export const CRMPESOCALCULO_PODEUTILIZARV1_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPESOCALCULO_VERSAOVIABILIDADE_LABELS = {
	D: "D",
	1: "1",
	2: "2",
	3: "3",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_peso_calculoBloqueioDeEnderecoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloqueio_de_endereco: valores válidos são [S, N]",
	}),
});

export const crm_peso_calculoFeriadosFdsDispAgendamentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "feriados_fds_disp_agendamento: valores válidos são [S, N]",
		}),
	},
);

export const crm_peso_calculoHabilitaCalculoVelocidadeSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "habilita_calculo_velocidade: valores válidos são [S, N]",
		}),
	},
);

export const crm_peso_calculoInserirFiltrosPadraoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "inserir_filtros_padrao: valores válidos são [S, N]",
	}),
});

export const crm_peso_calculoPadraoCelularFrequenciaSchema = z.enum(
	["d", "s", "r"],
	{
		error: () => ({
			message: "padrao_celular_frequencia: valores válidos são [d, s, r]",
		}),
	},
);

export const crm_peso_calculoPadraoComputadorFrequenciaSchema = z.enum(
	["d", "s", "r"],
	{
		error: () => ({
			message: "padrao_computador_frequencia: valores válidos são [d, s, r]",
		}),
	},
);

export const crm_peso_calculoPadraoConsoleFrequenciaSchema = z.enum(
	["d", "s", "r"],
	{
		error: () => ({
			message: "padrao_console_frequencia: valores válidos são [d, s, r]",
		}),
	},
);

export const crm_peso_calculoPadraoPessoaFrequenciaSchema = z.enum(
	["d", "s", "r"],
	{
		error: () => ({
			message: "padrao_pessoa_frequencia: valores válidos são [d, s, r]",
		}),
	},
);

export const crm_peso_calculoPadraoTvFrequenciaSchema = z.enum(
	["d", "s", "r"],
	{
		error: () => ({
			message: "padrao_tv_frequencia: valores válidos são [d, s, r]",
		}),
	},
);

export const crm_peso_calculoPodeUtilizarV1Schema = z.enum(["S", "N"], {
	error: () => ({ message: "pode_utilizar_v1: valores válidos são [S, N]" }),
});

export const crm_peso_calculoVersaoViabilidadeSchema = z.enum(
	["D", "1", "2", "3"],
	{
		error: () => ({
			message: "versao_viabilidade: valores válidos são [D, 1, 2, 3]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmPesoCalculoBloqueioDeEndereco = z.infer<
	typeof crm_peso_calculoBloqueioDeEnderecoSchema
>;

export type CrmPesoCalculoFeriadosFdsDispAgendamento = z.infer<
	typeof crm_peso_calculoFeriadosFdsDispAgendamentoSchema
>;

export type CrmPesoCalculoHabilitaCalculoVelocidade = z.infer<
	typeof crm_peso_calculoHabilitaCalculoVelocidadeSchema
>;

export type CrmPesoCalculoInserirFiltrosPadrao = z.infer<
	typeof crm_peso_calculoInserirFiltrosPadraoSchema
>;

export type CrmPesoCalculoPadraoCelularFrequencia = z.infer<
	typeof crm_peso_calculoPadraoCelularFrequenciaSchema
>;

export type CrmPesoCalculoPadraoComputadorFrequencia = z.infer<
	typeof crm_peso_calculoPadraoComputadorFrequenciaSchema
>;

export type CrmPesoCalculoPadraoConsoleFrequencia = z.infer<
	typeof crm_peso_calculoPadraoConsoleFrequenciaSchema
>;

export type CrmPesoCalculoPadraoPessoaFrequencia = z.infer<
	typeof crm_peso_calculoPadraoPessoaFrequenciaSchema
>;

export type CrmPesoCalculoPadraoTvFrequencia = z.infer<
	typeof crm_peso_calculoPadraoTvFrequenciaSchema
>;

export type CrmPesoCalculoPodeUtilizarV1 = z.infer<
	typeof crm_peso_calculoPodeUtilizarV1Schema
>;

export type CrmPesoCalculoVersaoViabilidade = z.infer<
	typeof crm_peso_calculoVersaoViabilidadeSchema
>;

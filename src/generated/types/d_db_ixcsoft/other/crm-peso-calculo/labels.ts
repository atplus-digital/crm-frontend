/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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

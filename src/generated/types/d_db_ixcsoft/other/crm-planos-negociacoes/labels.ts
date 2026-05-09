/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMPLANOSNEGOCIACOES_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPLANOSNEGOCIACOES_AUTENTICACAO_LABELS = {
	L: "L",
	H: "H",
	M: "M",
	V: "V",
	D: "D",
} as const;

export const CRMPLANOSNEGOCIACOES_INSERIRACESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPLANOSNEGOCIACOES_INSERIRATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPLANOSNEGOCIACOES_INSERIRCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPLANOSNEGOCIACOES_INSERIRTAREFA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPLANOSNEGOCIACOES_PRIORIDADE_LABELS = {
	B: "B",
	M: "M",
	A: "A",
	C: "C",
} as const;

export const CRMPLANOSNEGOCIACOES_TIPOCONEXAOMAPA_LABELS = {
	58: "58",
	24: "24",
	F: "F",
	L: "L",
	A: "A",
} as const;

export const CRMPLANOSNEGOCIACOES_VIABILIDADEPORCAIXA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_planos_negociacoesAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const crm_planos_negociacoesAutenticacaoSchema = z.enum(
	["L", "H", "M", "V", "D"],
	{
		error: () => ({
			message: "autenticacao: valores válidos são [L, H, M, V, D]",
		}),
	},
);

export const crm_planos_negociacoesInserirAcessoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inserir_acesso: valores válidos são [S, N]" }),
});

export const crm_planos_negociacoesInserirAtendimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "inserir_atendimento: valores válidos são [S, N]",
		}),
	},
);

export const crm_planos_negociacoesInserirContratoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inserir_contrato: valores válidos são [S, N]" }),
});

export const crm_planos_negociacoesInserirTarefaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inserir_tarefa: valores válidos são [S, N]" }),
});

export const crm_planos_negociacoesPrioridadeSchema = z.enum(
	["B", "M", "A", "C"],
	{
		error: () => ({ message: "prioridade: valores válidos são [B, M, A, C]" }),
	},
);

export const crm_planos_negociacoesTipoConexaoMapaSchema = z.enum(
	["58", "24", "F", "L", "A"],
	{
		error: () => ({
			message: "tipo_conexao_mapa: valores válidos são [58, 24, F, L, A]",
		}),
	},
);

export const crm_planos_negociacoesViabilidadePorCaixaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "viabilidade_por_caixa: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmPlanosNegociacoesAtivo = z.infer<
	typeof crm_planos_negociacoesAtivoSchema
>;

export type CrmPlanosNegociacoesAutenticacao = z.infer<
	typeof crm_planos_negociacoesAutenticacaoSchema
>;

export type CrmPlanosNegociacoesInserirAcesso = z.infer<
	typeof crm_planos_negociacoesInserirAcessoSchema
>;

export type CrmPlanosNegociacoesInserirAtendimento = z.infer<
	typeof crm_planos_negociacoesInserirAtendimentoSchema
>;

export type CrmPlanosNegociacoesInserirContrato = z.infer<
	typeof crm_planos_negociacoesInserirContratoSchema
>;

export type CrmPlanosNegociacoesInserirTarefa = z.infer<
	typeof crm_planos_negociacoesInserirTarefaSchema
>;

export type CrmPlanosNegociacoesPrioridade = z.infer<
	typeof crm_planos_negociacoesPrioridadeSchema
>;

export type CrmPlanosNegociacoesTipoConexaoMapa = z.infer<
	typeof crm_planos_negociacoesTipoConexaoMapaSchema
>;

export type CrmPlanosNegociacoesViabilidadePorCaixa = z.infer<
	typeof crm_planos_negociacoesViabilidadePorCaixaSchema
>;

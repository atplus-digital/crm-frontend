/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCAPARAMETROS_ABRIROSAPOSFINALIZACAOULTIMA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAPARAMETROS_CLIENTETIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	T: "T",
	E: "E",
} as const;

export const REGUACOBRANCAPARAMETROS_COMUNICADOVENCIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAPARAMETROS_ENVIARFINAISSEMANAFERIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAPARAMETROS_FILIALABERTURA_LABELS = {
	C: "C",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_parametrosAbrirOsAposFinalizacaoUltimaSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "abrir_os_apos_finalizacao_ultima: valores válidos são [S, N]",
		}),
	});

export const regua_cobranca_parametrosClienteTipoPessoaSchema = z.enum(
	["F", "J", "T", "E"],
	{
		error: () => ({
			message: "cliente_tipo_pessoa: valores válidos são [F, J, T, E]",
		}),
	},
);

export const regua_cobranca_parametrosComunicadoVencimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "comunicado_vencimento: valores válidos são [S, N]",
		}),
	},
);

export const regua_cobranca_parametrosEnviarFinaisSemanaFeriadoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enviar_finais_semana_feriado: valores válidos são [S, N]",
		}),
	},
);

export const regua_cobranca_parametrosFilialAberturaSchema = z.enum(
	["C", "F"],
	{
		error: () => ({ message: "filial_abertura: valores válidos são [C, F]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaParametrosAbrirOsAposFinalizacaoUltima = z.infer<
	typeof regua_cobranca_parametrosAbrirOsAposFinalizacaoUltimaSchema
>;

export type ReguaCobrancaParametrosClienteTipoPessoa = z.infer<
	typeof regua_cobranca_parametrosClienteTipoPessoaSchema
>;

export type ReguaCobrancaParametrosComunicadoVencimento = z.infer<
	typeof regua_cobranca_parametrosComunicadoVencimentoSchema
>;

export type ReguaCobrancaParametrosEnviarFinaisSemanaFeriado = z.infer<
	typeof regua_cobranca_parametrosEnviarFinaisSemanaFeriadoSchema
>;

export type ReguaCobrancaParametrosFilialAbertura = z.infer<
	typeof regua_cobranca_parametrosFilialAberturaSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SERVICEROTEIRIZACAOCONFIG_APIROTEIRIZACAO_LABELS = {
	SA: "SA",
	GL: "GL",
} as const;

export const SERVICEROTEIRIZACAOCONFIG_CONSIDERARTEMPODESLOCAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SERVICEROTEIRIZACAOCONFIG_CONSIDERARTRANSITO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SERVICEROTEIRIZACAOCONFIG_INICIOROTA_LABELS = {
	F: "F",
	T: "T",
	M: "M",
} as const;

export const SERVICEROTEIRIZACAOCONFIG_RETORNARALMOCO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SERVICEROTEIRIZACAOCONFIG_ROTEIRIZARPOR_LABELS = {
	MD: "MD",
	MT: "MT",
	PR: "PR",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const service_roteirizacao_configApiRoteirizacaoSchema = z.enum(
	["SA", "GL"],
	{
		error: () => ({
			message: "api_roteirizacao: valores válidos são [SA, GL]",
		}),
	},
);

export const service_roteirizacao_configConsiderarTempoDeslocamentoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "considerar_tempo_deslocamento: valores válidos são [S, N]",
		}),
	});

export const service_roteirizacao_configConsiderarTransitoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "considerar_transito: valores válidos são [S, N]",
		}),
	},
);

export const service_roteirizacao_configInicioRotaSchema = z.enum(
	["F", "T", "M"],
	{
		error: () => ({ message: "inicio_rota: valores válidos são [F, T, M]" }),
	},
);

export const service_roteirizacao_configRetornarAlmocoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "retornar_almoco: valores válidos são [S, N]" }),
	},
);

export const service_roteirizacao_configRoteirizarPorSchema = z.enum(
	["MD", "MT", "PR"],
	{
		error: () => ({
			message: "roteirizar_por: valores válidos são [MD, MT, PR]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ServiceRoteirizacaoConfigApiRoteirizacao = z.infer<
	typeof service_roteirizacao_configApiRoteirizacaoSchema
>;

export type ServiceRoteirizacaoConfigConsiderarTempoDeslocamento = z.infer<
	typeof service_roteirizacao_configConsiderarTempoDeslocamentoSchema
>;

export type ServiceRoteirizacaoConfigConsiderarTransito = z.infer<
	typeof service_roteirizacao_configConsiderarTransitoSchema
>;

export type ServiceRoteirizacaoConfigInicioRota = z.infer<
	typeof service_roteirizacao_configInicioRotaSchema
>;

export type ServiceRoteirizacaoConfigRetornarAlmoco = z.infer<
	typeof service_roteirizacao_configRetornarAlmocoSchema
>;

export type ServiceRoteirizacaoConfigRoteirizarPor = z.infer<
	typeof service_roteirizacao_configRoteirizarPorSchema
>;

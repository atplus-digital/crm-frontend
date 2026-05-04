/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const QUALIRUNINFOADICIONAIS_GRAUESCOLARIDADE_LABELS = {
	EnsinoMedio: "Ensino Médio",
	Superior: "Superior",
	PosMba: "Pós, MBA",
	Mestrado: "Mestrado",
	Doutorado: "Doutorado",
} as const;

export const QUALIRUNINFOADICIONAIS_SITUACAOCURSO_LABELS = {
	Trancado: "Trancado",
	Cursando: "Cursando",
	Completo: "Completo",
} as const;

export const QUALIRUNINFOADICIONAIS_STATUS_LABELS = {
	recusado: "Recusado",
	aprovado: "Aprovado",
	aguardando: "Aguardando",
} as const;

export const QUALIRUNINFOADICIONAIS_VINCULOCONTATOEMERGENCIA_LABELS = {
	Pais: "Pais",
	FilhoAOuEnteadoA: "Filho(a) ou Enteado(a)",
	Avos: "Avós",
	Conjuge: "Conjuge",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const qualirun_info_adicionaisGrauEscolaridadeSchema = z.enum(
	["Ensino Médio", "Superior", "Pós, MBA", "Mestrado", "Doutorado"],
	{
		error: () => ({
			message:
				"grau_escolaridade: valores válidos são [Ensino Médio, Superior, Pós, MBA, Mestrado, Doutorado]",
		}),
	},
);

export const qualirun_info_adicionaisSituacaoCursoSchema = z.enum(
	["Trancado", "Cursando", "Completo"],
	{
		error: () => ({
			message:
				"situacao_curso: valores válidos são [Trancado, Cursando, Completo]",
		}),
	},
);

export const qualirun_info_adicionaisStatusSchema = z.enum(
	["recusado", "aprovado", "aguardando"],
	{
		error: () => ({
			message: "status: valores válidos são [Recusado, Aprovado, Aguardando]",
		}),
	},
);

export const qualirun_info_adicionaisVinculoContatoEmergenciaSchema = z.enum(
	["Pais", "Filho(a) ou Enteado(a)", "Avós", "Conjuge"],
	{
		error: () => ({
			message:
				"vinculo_contato_emergencia: valores válidos são [Pais, Filho(a) ou Enteado(a), Avós, Conjuge]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type QualirunInfoAdicionaisGrauEscolaridade = z.infer<
	typeof qualirun_info_adicionaisGrauEscolaridadeSchema
>;

export type QualirunInfoAdicionaisSituacaoCurso = z.infer<
	typeof qualirun_info_adicionaisSituacaoCursoSchema
>;

export type QualirunInfoAdicionaisStatus = z.infer<
	typeof qualirun_info_adicionaisStatusSchema
>;

export type QualirunInfoAdicionaisVinculoContatoEmergencia = z.infer<
	typeof qualirun_info_adicionaisVinculoContatoEmergenciaSchema
>;

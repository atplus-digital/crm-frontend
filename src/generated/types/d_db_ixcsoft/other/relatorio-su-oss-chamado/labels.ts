/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOSUOSSCHAMADO_ABERTURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUOSSCHAMADO_AGENDAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUOSSCHAMADO_ATIVOTECNICO_LABELS = {
	S: "S",
	N: "N",
	A: "A",
} as const;

export const RELATORIOSUOSSCHAMADO_CONSIDERARSLA_LABELS = {
	AG: "AG",
	AB: "AB",
	A: "A",
} as const;

export const RELATORIOSUOSSCHAMADO_GERACOMISSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUOSSCHAMADO_IMPRESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAABERTURA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAAGENDA_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAAGENDAMENTO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAANALISE_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAASSUMIDO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAENCAMINHADO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAEXECUCAO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAFECHAMENTO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAFINAL_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAINICIO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAPRAZOLIMITE_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAPREVFINAL_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAREABERTURA_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAREAG_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATARESERVADA_LABELS = {
	P: "P",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_su_oss_chamadoAberturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "abertura: valores válidos são [S, N]" }),
});

export const relatorio_su_oss_chamadoAgendamentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "agendamento: valores válidos são [S, N]" }),
});

export const relatorio_su_oss_chamadoAtivoTecnicoSchema = z.enum(
	["S", "N", "A"],
	{
		error: () => ({ message: "ativo_tecnico: valores válidos são [S, N, A]" }),
	},
);

export const relatorio_su_oss_chamadoConsiderarSlaSchema = z.enum(
	["AG", "AB", "A"],
	{
		error: () => ({
			message: "considerar_sla: valores válidos são [AG, AB, A]",
		}),
	},
);

export const relatorio_su_oss_chamadoGeraComissaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_comissao: valores válidos são [S, N]" }),
});

export const relatorio_su_oss_chamadoImpressoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "impresso: valores válidos são [S, N]" }),
});

export const relatorio_su_oss_chamadoTipoDataAberturaSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_abertura: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataAgendaSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_agenda: valores válidos são [P, D]" }),
});

export const relatorio_su_oss_chamadoTipoDataAgendamentoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_agendamento: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataAnaliseSchema = z.enum(
	["P", "D"],
	{
		error: () => ({ message: "tipo_data_analise: valores válidos são [P, D]" }),
	},
);

export const relatorio_su_oss_chamadoTipoDataAssumidoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_assumido: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataEncaminhadoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_encaminhado: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataExecucaoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_execucao: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataFechamentoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_fechamento: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataFinalSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_final: valores válidos são [P, D]" }),
});

export const relatorio_su_oss_chamadoTipoDataInicioSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_inicio: valores válidos são [P, D]" }),
});

export const relatorio_su_oss_chamadoTipoDataPrazoLimiteSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_prazo_limite: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataPrevFinalSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_prev_final: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataReaberturaSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_reabertura: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataReagSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_reag: valores válidos são [P, D]" }),
});

export const relatorio_su_oss_chamadoTipoDataReservadaSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_reservada: valores válidos são [P, D]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioSuOssChamadoAbertura = z.infer<
	typeof relatorio_su_oss_chamadoAberturaSchema
>;

export type RelatorioSuOssChamadoAgendamento = z.infer<
	typeof relatorio_su_oss_chamadoAgendamentoSchema
>;

export type RelatorioSuOssChamadoAtivoTecnico = z.infer<
	typeof relatorio_su_oss_chamadoAtivoTecnicoSchema
>;

export type RelatorioSuOssChamadoConsiderarSla = z.infer<
	typeof relatorio_su_oss_chamadoConsiderarSlaSchema
>;

export type RelatorioSuOssChamadoGeraComissao = z.infer<
	typeof relatorio_su_oss_chamadoGeraComissaoSchema
>;

export type RelatorioSuOssChamadoImpresso = z.infer<
	typeof relatorio_su_oss_chamadoImpressoSchema
>;

export type RelatorioSuOssChamadoTipoDataAbertura = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAberturaSchema
>;

export type RelatorioSuOssChamadoTipoDataAgenda = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAgendaSchema
>;

export type RelatorioSuOssChamadoTipoDataAgendamento = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAgendamentoSchema
>;

export type RelatorioSuOssChamadoTipoDataAnalise = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAnaliseSchema
>;

export type RelatorioSuOssChamadoTipoDataAssumido = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAssumidoSchema
>;

export type RelatorioSuOssChamadoTipoDataEncaminhado = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataEncaminhadoSchema
>;

export type RelatorioSuOssChamadoTipoDataExecucao = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataExecucaoSchema
>;

export type RelatorioSuOssChamadoTipoDataFechamento = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataFechamentoSchema
>;

export type RelatorioSuOssChamadoTipoDataFinal = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataFinalSchema
>;

export type RelatorioSuOssChamadoTipoDataInicio = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataInicioSchema
>;

export type RelatorioSuOssChamadoTipoDataPrazoLimite = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataPrazoLimiteSchema
>;

export type RelatorioSuOssChamadoTipoDataPrevFinal = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataPrevFinalSchema
>;

export type RelatorioSuOssChamadoTipoDataReabertura = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataReaberturaSchema
>;

export type RelatorioSuOssChamadoTipoDataReag = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataReagSchema
>;

export type RelatorioSuOssChamadoTipoDataReservada = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataReservadaSchema
>;

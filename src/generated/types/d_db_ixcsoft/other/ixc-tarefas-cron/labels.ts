/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCTAREFASCRON_AMBIENTECODIGO_LABELS = {
	G: "G",
	M: "M",
} as const;

export const IXCTAREFASCRON_BLOQUEAREXECUCAOSIMULTANEA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCTAREFASCRON_DIAMESOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCTAREFASCRON_DIASEMANAOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCTAREFASCRON_GRAVARLOG_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCTAREFASCRON_HORAOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCTAREFASCRON_MESOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCTAREFASCRON_MINUTOOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IXCTAREFASCRON_TIPO_LABELS = {
	N: "N",
	E: "E",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_tarefas_cronAmbienteCodigoSchema = z.enum(["G", "M"], {
	error: () => ({ message: "ambiente_codigo: valores válidos são [G, M]" }),
});

export const ixc_tarefas_cronBloquearExecucaoSimultaneaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "bloquear_execucao_simultanea: valores válidos são [S, N]",
		}),
	},
);

export const ixc_tarefas_cronDiaMesObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "dia_mes_obrigatorio: valores válidos são [S, N]" }),
});

export const ixc_tarefas_cronDiaSemanaObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "dia_semana_obrigatorio: valores válidos são [S, N]",
	}),
});

export const ixc_tarefas_cronGravarLogSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gravar_log: valores válidos são [S, N]" }),
});

export const ixc_tarefas_cronHoraObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "hora_obrigatorio: valores válidos são [S, N]" }),
});

export const ixc_tarefas_cronMesObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mes_obrigatorio: valores válidos são [S, N]" }),
});

export const ixc_tarefas_cronMinutoObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "minuto_obrigatorio: valores válidos são [S, N]" }),
});

export const ixc_tarefas_cronTipoSchema = z.enum(["N", "E", "P"], {
	error: () => ({ message: "tipo: valores válidos são [N, E, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcTarefasCronAmbienteCodigo = z.infer<
	typeof ixc_tarefas_cronAmbienteCodigoSchema
>;

export type IxcTarefasCronBloquearExecucaoSimultanea = z.infer<
	typeof ixc_tarefas_cronBloquearExecucaoSimultaneaSchema
>;

export type IxcTarefasCronDiaMesObrigatorio = z.infer<
	typeof ixc_tarefas_cronDiaMesObrigatorioSchema
>;

export type IxcTarefasCronDiaSemanaObrigatorio = z.infer<
	typeof ixc_tarefas_cronDiaSemanaObrigatorioSchema
>;

export type IxcTarefasCronGravarLog = z.infer<
	typeof ixc_tarefas_cronGravarLogSchema
>;

export type IxcTarefasCronHoraObrigatorio = z.infer<
	typeof ixc_tarefas_cronHoraObrigatorioSchema
>;

export type IxcTarefasCronMesObrigatorio = z.infer<
	typeof ixc_tarefas_cronMesObrigatorioSchema
>;

export type IxcTarefasCronMinutoObrigatorio = z.infer<
	typeof ixc_tarefas_cronMinutoObrigatorioSchema
>;

export type IxcTarefasCronTipo = z.infer<typeof ixc_tarefas_cronTipoSchema>;

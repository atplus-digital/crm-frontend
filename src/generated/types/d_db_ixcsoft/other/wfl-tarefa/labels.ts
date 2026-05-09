/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const WFLTAREFA_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLTAREFA_DECISAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLTAREFA_FINALIZAPROCESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLTAREFA_GERACOMISSAO_LABELS = {
	ROS: "ROS",
	SF: "SF",
} as const;

export const WFLTAREFA_OBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLTAREFA_ORIGEMPRIORIDADEOS_LABELS = {
	OS: "OS",
	A: "A",
} as const;

export const WFLTAREFA_PERMITEFINALIZAR_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const wfl_tarefaAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const wfl_tarefaDecisaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "decisao: valores válidos são [S, N]" }),
});

export const wfl_tarefaFinalizaProcessoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "finaliza_processo: valores válidos são [S, N]" }),
});

export const wfl_tarefaGeraComissaoSchema = z.enum(["ROS", "SF"], {
	error: () => ({ message: "gera_comissao: valores válidos são [ROS, SF]" }),
});

export const wfl_tarefaObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "obrigatorio: valores válidos são [S, N]" }),
});

export const wfl_tarefaOrigemPrioridadeOsSchema = z.enum(["OS", "A"], {
	error: () => ({
		message: "origem_prioridade_os: valores válidos são [OS, A]",
	}),
});

export const wfl_tarefaPermiteFinalizarSchema = z.enum(["S", "N"], {
	error: () => ({ message: "permite_finalizar: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type WflTarefaAtivo = z.infer<typeof wfl_tarefaAtivoSchema>;

export type WflTarefaDecisao = z.infer<typeof wfl_tarefaDecisaoSchema>;

export type WflTarefaFinalizaProcesso = z.infer<
	typeof wfl_tarefaFinalizaProcessoSchema
>;

export type WflTarefaGeraComissao = z.infer<
	typeof wfl_tarefaGeraComissaoSchema
>;

export type WflTarefaObrigatorio = z.infer<typeof wfl_tarefaObrigatorioSchema>;

export type WflTarefaOrigemPrioridadeOs = z.infer<
	typeof wfl_tarefaOrigemPrioridadeOsSchema
>;

export type WflTarefaPermiteFinalizar = z.infer<
	typeof wfl_tarefaPermiteFinalizarSchema
>;

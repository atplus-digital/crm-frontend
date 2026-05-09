/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ATIVIDADE_PRIORIDADE_LABELS = {
	baixa: "baixa",
	media: "media",
	alta: "alta",
} as const;

export const ATIVIDADE_STATUS_LABELS = {
	fazer: "fazer",
	cancelada: "cancelada",
	concluida: "concluida",
} as const;

export const ATIVIDADE_TIPO_LABELS = {
	lead: "lead",
	negociacao: "negociacao",
} as const;

export const ATIVIDADE_TIPOATIVIDADE_LABELS = {
	tarefa: "tarefa",
	reuniao: "reuniao",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const atividadePrioridadeSchema = z.enum(["baixa", "media", "alta"], {
	error: () => ({
		message: "prioridade: valores válidos são [baixa, media, alta]",
	}),
});

export const atividadeStatusSchema = z.enum(
	["fazer", "cancelada", "concluida"],
	{
		error: () => ({
			message: "status: valores válidos são [fazer, cancelada, concluida]",
		}),
	},
);

export const atividadeTipoSchema = z.enum(["lead", "negociacao"], {
	error: () => ({ message: "tipo: valores válidos são [lead, negociacao]" }),
});

export const atividadeTipoAtividadeSchema = z.enum(["tarefa", "reuniao"], {
	error: () => ({
		message: "tipo_atividade: valores válidos são [tarefa, reuniao]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AtividadePrioridade = z.infer<typeof atividadePrioridadeSchema>;

export type AtividadeStatus = z.infer<typeof atividadeStatusSchema>;

export type AtividadeTipo = z.infer<typeof atividadeTipoSchema>;

export type AtividadeTipoAtividade = z.infer<
	typeof atividadeTipoAtividadeSchema
>;

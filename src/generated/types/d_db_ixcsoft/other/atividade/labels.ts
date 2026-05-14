/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ATIVIDADE_FIELD_LABELS = {
	assunto: "assunto",
	atividade_interna: "atividade_interna",
	criado_por: "criado_por",
	data: "data",
	data_hora_fim: "data_hora_fim",
	data_hora_inicio: "data_hora_inicio",
	hora_marcada: "hora_marcada",
	id: "id",
	id_categoria_atividade: "id_categoria_atividade",
	id_lead_negociacao: "id_lead_negociacao",
	id_responsavel: "id_responsavel",
	id_usuario: "id_usuario",
	link_local: "link_local",
	observacao: "observacao",
	prioridade: "prioridade",
	status: "status",
	tipo: "tipo",
	tipo_atividade: "tipo_atividade",
} as const;

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

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Negociacoes } from "../negociacoes";
import type { Users } from "../users";

export const T_OE_QUALIRUN_TABLE_NAME = "t_oe_qualirun";

export const OEQUALIRUN_PROCEDIMENTO_LABELS = {
	Value1776052314044ff9B78615a4b0d7a3e2: "Assinatura via GOV",
} as const;

export const OEQUALIRUN_STATUS_LABELS = {
	cancelado: "Cancelado",
	novo: "Novo",
	pendente: "Pendente",
	concluido: "Concluído",
} as const;

export type OeQualirunProcedimento =
	keyof typeof OEQUALIRUN_PROCEDIMENTO_LABELS;

export type OeQualirunStatus = keyof typeof OEQUALIRUN_STATUS_LABELS;

export interface OeQualirun {
	id: number;
	f_fk_negociacoes: number;
	f_id_externo: string;
	f_link_externo: string;
	f_procedimento: OeQualirunProcedimento;
	f_status: OeQualirunStatus;
	updatedAt: string;
	createdAt: string;
}

export interface OeQualirunRelations {
	createdBy?: Users | null;
	f_negociacoes?: Negociacoes | null;
	updatedBy?: Users | null;
}

export type OeQualirunRelationKey = keyof OeQualirunRelations;

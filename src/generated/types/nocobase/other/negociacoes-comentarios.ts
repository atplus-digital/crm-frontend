/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_NEGOCIACOES_COMENTARIOS_TABLE_NAME = "t_negociacoes_comentarios";

export const NEGOCIACOESCOMENTARIOS_INSEREATENDIMENTOIXC_LABELS = {
	"0": "Não",
	"1": "Sim",
} as const;

export const NEGOCIACOESCOMENTARIOS_SETORPARAOBS_LABELS = {
	"1": "Equipe de Campo",
	"2": "Suporte Nível 1",
	"3": "Suporte Nível 2",
	"4": "Telefonia (Ativações e/ou Portabilidades)",
} as const;

export type NegociacoesComentariosInsereAtendimentoIxc =
	keyof typeof NEGOCIACOESCOMENTARIOS_INSEREATENDIMENTOIXC_LABELS;

export type NegociacoesComentariosSetorParaObs =
	keyof typeof NEGOCIACOESCOMENTARIOS_SETORPARAOBS_LABELS;

export interface NegociacoesComentarios {
	id: number;
	f_fk_comentarios_negociacoes: number;
	f_comentario: string;
	f_insere_atendimento_ixc: NegociacoesComentariosInsereAtendimentoIxc;
	f_setor_para_obs: NegociacoesComentariosSetorParaObs;
	updatedAt: string;
	createdAt: string;
}

export interface NegociacoesComentariosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type NegociacoesComentariosRelationKey =
	keyof NegociacoesComentariosRelations;

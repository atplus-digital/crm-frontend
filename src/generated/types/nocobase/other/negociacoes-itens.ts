/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { OpcoesSmp } from "../other/opcoes-smp";
import type { OpcoesStfc } from "../other/opcoes-stfc";
import type { Users } from "../users";

export const T_NEGOCIACOES_ITENS_TABLE_NAME = "t_negociacoes_itens";

export const NEGOCIACOESITENS_RELACAO_LABELS = {
	COMBO: "COMBO",
	ADICIONAL: "ADICIONAL",
} as const;

export const NEGOCIACOESITENS_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

export type NegociacoesItensRelacao =
	keyof typeof NEGOCIACOESITENS_RELACAO_LABELS;

export type NegociacoesItensTipoProduto =
	keyof typeof NEGOCIACOESITENS_TIPOPRODUTO_LABELS;

export interface NegociacoesItens {
	id: number;
	f_fk_id_negociacao: number;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_produto: string;
	f_observacoes: string;
	f_observacoes_atendimento: string;
	f_relacao: NegociacoesItensRelacao;
	f_tipo_ixc: string;
	f_tipo_produto: NegociacoesItensTipoProduto;
	updatedAt: string;
	createdAt: string;
}

export interface NegociacoesItensRelations {
	createdBy?: Users | null;
	f_opcoes_smp?: OpcoesSmp | null;
	f_opcoes_stfc?: OpcoesStfc | null;
	updatedBy?: Users | null;
}

export type NegociacoesItensRelationKey = keyof NegociacoesItensRelations;

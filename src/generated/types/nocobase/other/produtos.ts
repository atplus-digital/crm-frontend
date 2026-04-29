/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { OpcoesSmpTemplate } from "../other/opcoes-smp-template";
import type { OpcoesStfcTemplate } from "../other/opcoes-stfc-template";
import type { Users } from "../users";

export const T_PRODUTOS_TABLE_NAME = "t_produtos";

export const PRODUTOS_TIPOIXC_LABELS = {
	I: "INTERNET",
	SMP: "SMP/MVNO",
	TV: "TV/STREAMING",
	S: "SERVICO",
	T: "STFC/TELEFONE",
	SVA: "SVA",
} as const;

export const PRODUTOS_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

export type ProdutosTipoIxc = keyof typeof PRODUTOS_TIPOIXC_LABELS;

export type ProdutosTipoProduto = keyof typeof PRODUTOS_TIPOPRODUTO_LABELS;

export interface Produtos {
	id: number;
	f_descricao_produto: string;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_produto: string;
	f_tipo_ixc: ProdutosTipoIxc;
	f_tipo_produto: ProdutosTipoProduto;
	updatedAt: string;
	createdAt: string;
}

export interface ProdutosRelations {
	createdBy?: Users | null;
	f_opcoes_smp_template?: OpcoesSmpTemplate | null;
	f_opcoes_STFC?: OpcoesStfcTemplate | null;
	updatedBy?: Users | null;
}

export type ProdutosRelationKey = keyof ProdutosRelations;

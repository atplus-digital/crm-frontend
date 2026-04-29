/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { SolicitacaoCompras } from "../other/solicitacao-compras";
import type { Users } from "../users";

export const T_COMPRAS_PRODUTOS_TABLE_NAME = "t_compras_produtos";

export interface ComprasProdutos {
	id: number;
	f_834gi7nhict: number;
	f_link_produto: string;
	f_produto: string;
	f_quantidade: number;
	f_sub_total: string;
	f_valor_uni: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComprasProdutosRelations {
	createdBy?: Users | null;
	f_fk_produtos_solicitacao_compra?: SolicitacaoCompras | null;
	updatedBy?: Users | null;
}

export type ComprasProdutosRelationKey = keyof ComprasProdutosRelations;

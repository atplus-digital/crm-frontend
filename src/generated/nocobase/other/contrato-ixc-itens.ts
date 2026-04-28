/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_CONTRATO_IXC_ITENS_TABLE_NAME = "t_contrato_ixc_itens";

export interface ContratoIxcItens {
	id: number;
	f_fk_itens_contrato_ixc: number;
	f_id_produto_contrato_ixc: string;
	f_mensalidade: string;
	f_produto: string;
	f_quantidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface ContratoIxcItensRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ContratoIxcItensRelationKey = keyof ContratoIxcItensRelations;

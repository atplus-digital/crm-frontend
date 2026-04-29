/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { ContratoIxcItens } from "../other/contrato-ixc-itens";
import type { Users } from "../users";

export const T_CONTRATOS_IXC_TABLE_NAME = "t_contratos_ixc";

export interface ContratosIxc {
	id: number;
	f_descricao: string;
	f_expiracao: string;
	f_vencimento: string;
	updatedAt: string;
	createdAt: string;
}

export interface ContratosIxcRelations {
	createdBy?: Users | null;
	f_itens_contrato?: ContratoIxcItens[];
	updatedBy?: Users | null;
}

export type ContratosIxcRelationKey = keyof ContratosIxcRelations;

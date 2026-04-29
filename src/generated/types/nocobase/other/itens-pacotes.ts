/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_ITENS_PACOTES_TABLE_NAME = "t_itens_pacotes";

export const ITENSPACOTES_TIPOIXC_LABELS = {
	I: "INTERNET",
	SMP: "MVNO/SMP",
	TV: "TV/STREAMING",
	S: "SERVICO",
	T: "STFC/TELEFONE",
	SVA: "SVA",
} as const;

export const ITENSPACOTES_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

export type ItensPacotesTipoIxc = keyof typeof ITENSPACOTES_TIPOIXC_LABELS;

export type ItensPacotesTipoProduto =
	keyof typeof ITENSPACOTES_TIPOPRODUTO_LABELS;

export interface ItensPacotes {
	id: number;
	f_ch3bjzt4zr7: number;
	f_fk1: number;
	f_fk2: number;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_do_produto: string;
	f_tipo_ixc: ItensPacotesTipoIxc;
	f_tipo_produto: ItensPacotesTipoProduto;
	f_vna9rme0f5j: number;
	updatedAt: string;
	createdAt: string;
}

export interface ItensPacotesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ItensPacotesRelationKey = keyof ItensPacotesRelations;

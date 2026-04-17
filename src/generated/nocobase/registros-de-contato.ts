/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_REGISTROS_DE_CONTATO_TABLE_NAME = "t_registros_de_contato";

export enum RegistrosDeContatoCategoria {
	PosVenda = "pos-venda",
	PreVenda = "pre-venda",
	Cancelamento = "cancelamento",
}

export enum RegistrosDeContatoNotaTecnico {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
}

export enum RegistrosDeContatoNotaVendas {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
}

export interface RegistrosDeContato {
	id: number;
	f_fk_id_contrato: number;
	f_categoria: RegistrosDeContatoCategoria;
	f_encaminhamento_pendencia: string;
	f_feedback_observacao: string;
	f_ha_pendencia: boolean;
	f_nota_tecnico: RegistrosDeContatoNotaTecnico;
	f_nota_vendas: RegistrosDeContatoNotaVendas;
	f_resumo_contato: string;
	f_titulo: string;
	updatedAt: string;
	createdAt: string;
}

export interface RegistrosDeContatoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type RegistrosDeContatoRelationKey = keyof RegistrosDeContatoRelations;

export const REGISTROSDECONTATO_CATEGORIA_LABELS: Record<
	RegistrosDeContatoCategoria,
	string
> = {
	[RegistrosDeContatoCategoria.PosVenda]: "Pós Venda",
	[RegistrosDeContatoCategoria.PreVenda]: "Pré Venda",
	[RegistrosDeContatoCategoria.Cancelamento]: "Cancelamento",
};

export const REGISTROSDECONTATO_NOTATECNICO_LABELS: Record<
	RegistrosDeContatoNotaTecnico,
	string
> = {
	[RegistrosDeContatoNotaTecnico.Value0]: "N/A",
	[RegistrosDeContatoNotaTecnico.Value1]: "1 ★",
	[RegistrosDeContatoNotaTecnico.Value2]: "2 ★★",
	[RegistrosDeContatoNotaTecnico.Value3]: "3 ★★★",
	[RegistrosDeContatoNotaTecnico.Value4]: "4 ★★★★",
	[RegistrosDeContatoNotaTecnico.Value5]: "5 ★★★★★",
};

export const REGISTROSDECONTATO_NOTAVENDAS_LABELS: Record<
	RegistrosDeContatoNotaVendas,
	string
> = {
	[RegistrosDeContatoNotaVendas.Value0]: "N/A",
	[RegistrosDeContatoNotaVendas.Value1]: "1 ★",
	[RegistrosDeContatoNotaVendas.Value2]: "2 ★★",
	[RegistrosDeContatoNotaVendas.Value3]: "3 ★★★",
	[RegistrosDeContatoNotaVendas.Value4]: "4 ★★★★",
	[RegistrosDeContatoNotaVendas.Value5]: "5 ★★★★★",
};

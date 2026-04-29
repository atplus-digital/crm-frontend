/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_REGISTROS_DE_CONTATO_TABLE_NAME = "t_registros_de_contato";

export const REGISTROSDECONTATO_CATEGORIA_LABELS = {
	PosVenda: "Pós Venda",
	PreVenda: "Pré Venda",
	cancelamento: "Cancelamento",
} as const;

export const REGISTROSDECONTATO_NOTATECNICO_LABELS = {
	"0": "N/A",
	"1": "1 ★",
	"2": "2 ★★",
	"3": "3 ★★★",
	"4": "4 ★★★★",
	"5": "5 ★★★★★",
} as const;

export const REGISTROSDECONTATO_NOTAVENDAS_LABELS = {
	"0": "N/A",
	"1": "1 ★",
	"2": "2 ★★",
	"3": "3 ★★★",
	"4": "4 ★★★★",
	"5": "5 ★★★★★",
} as const;

export type RegistrosDeContatoCategoria =
	keyof typeof REGISTROSDECONTATO_CATEGORIA_LABELS;

export type RegistrosDeContatoNotaTecnico =
	keyof typeof REGISTROSDECONTATO_NOTATECNICO_LABELS;

export type RegistrosDeContatoNotaVendas =
	keyof typeof REGISTROSDECONTATO_NOTAVENDAS_LABELS;

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

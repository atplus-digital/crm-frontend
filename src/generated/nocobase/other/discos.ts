/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_DISCOS_TABLE_NAME = "t_discos";

export const DISCOS_CAPACIDADE_LABELS = {
	"1": "480 GB",
	"2": "960 GB",
	"3": "240 GB",
	"4": "1920 GB",
	"5": "3840 GB",
	"6": "7868 GB",
	"7": "120 GB",
	"8": "100 GB",
	"9": "500 GB",
	"10": "1000 GB",
	"11": "2000 GB",
	"12": "4000 GB",
} as const;

export const DISCOS_TIPO_LABELS = {
	"1": "SSD SATA",
	"2": "SSD SAS",
	"3": "HDD SAS 10k",
	"4": "HDD SAS 15k",
	"5": "HDD NLSAS",
	"6": "HDD SATA",
} as const;

export type DiscosCapacidade = keyof typeof DISCOS_CAPACIDADE_LABELS;

export type DiscosTipo = keyof typeof DISCOS_TIPO_LABELS;

export interface Discos {
	id: number;
	f_fk_discos: number;
	f_capacidade: DiscosCapacidade;
	f_data_aquisicao: string;
	f_fornecedor: string;
	f_modelo: string;
	f_preco_compra: number;
	f_preco_venda_locacao: number;
	f_SN: string;
	f_tipo: DiscosTipo;
	updatedAt: string;
	createdAt: string;
}

export interface DiscosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DiscosRelationKey = keyof DiscosRelations;

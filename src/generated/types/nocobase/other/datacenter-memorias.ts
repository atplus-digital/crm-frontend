/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { DcServidores } from "../other/dc-servidores";
import type { Users } from "../users";

export const T_DATACENTER_MEMORIAS_TABLE_NAME = "t_datacenter_memorias";

export const DATACENTERMEMORIAS_CAPACIDADE_LABELS = {
	"2": "2 GB",
	"4": "4 GB",
	"8": "8 GB",
	"16": "16 GB",
	"32": "32 GB",
	"64": "64 GB",
	"128": "128 GB",
} as const;

export const DATACENTERMEMORIAS_STATUS_LABELS = {
	"0": "Descartado",
	"1": "Disponivel",
	"2": "Alocado para Servidor",
	"3": "Manutenção",
} as const;

export const DATACENTERMEMORIAS_TIPO_LABELS = {
	"3": "DDR 3",
	"4": "DDR 4",
	"2": "DDR 2",
} as const;

export type DatacenterMemoriasCapacidade =
	keyof typeof DATACENTERMEMORIAS_CAPACIDADE_LABELS;

export type DatacenterMemoriasStatus =
	keyof typeof DATACENTERMEMORIAS_STATUS_LABELS;

export type DatacenterMemoriasTipo =
	keyof typeof DATACENTERMEMORIAS_TIPO_LABELS;

export interface DatacenterMemorias {
	id: number;
	f_fk_memorias: number;
	f_capacidade: DatacenterMemoriasCapacidade;
	f_fabricante: string;
	f_sn: string;
	f_status: DatacenterMemoriasStatus;
	f_tipo: DatacenterMemoriasTipo;
	f_valor_locacao: number;
	updatedAt: string;
	createdAt: string;
}

export interface DatacenterMemoriasRelations {
	createdBy?: Users | null;
	f_fk_servidor?: DcServidores | null;
	updatedBy?: Users | null;
}

export type DatacenterMemoriasRelationKey = keyof DatacenterMemoriasRelations;

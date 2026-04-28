/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { DatacenterMemorias } from "../other/datacenter-memorias";
import type { Discos } from "../other/discos";
import type { Users } from "../users";

export const T_DC_SERVIDORES_TABLE_NAME = "t_dc_servidores";

export const DCSERVIDORES_FABRICANTE_LABELS = {
	"1": "DELL",
	"2": "HPE",
	"3": "IBM",
	"4": "Supermicro",
	"5": "Outro",
} as const;

export const DCSERVIDORES_STATUS_LABELS = {
	"1": "Disponivel",
	"2": "Alocado para Cliente",
	"3": "Manutenção",
	"4": "Descartado",
} as const;

export type DcServidoresFabricante =
	keyof typeof DCSERVIDORES_FABRICANTE_LABELS;

export type DcServidoresStatus = keyof typeof DCSERVIDORES_STATUS_LABELS;

export interface DcServidores {
	id: number;
	f_fk_discos: number;
	f_fabricante: DcServidoresFabricante;
	f_memoria: string;
	f_modelo: string;
	f_obs: string;
	f_processador: string;
	f_sn: string;
	f_status: DcServidoresStatus;
	updatedAt: string;
	createdAt: string;
}

export interface DcServidoresRelations {
	createdBy?: Users | null;
	f_discos?: Discos[];
	f_memorias?: DatacenterMemorias[];
	updatedBy?: Users | null;
}

export type DcServidoresRelationKey = keyof DcServidoresRelations;

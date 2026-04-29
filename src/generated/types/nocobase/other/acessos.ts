/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Equipamentos } from "../other/equipamentos";
import type { Servicos } from "../other/servicos";
import type { Sites } from "../other/sites";
import type { TelecomInterfaces } from "../other/telecom-interfaces";
import type { Users } from "../users";

export const T_ACESSOS_TABLE_NAME = "t_acessos";

export const ACESSOS_TIPO_LABELS = {
	"1": "Ponta A",
	"2": "Ponta B",
	"3": "Entrega",
} as const;

export type AcessosTipo = keyof typeof ACESSOS_TIPO_LABELS;

export interface Acessos {
	id: number;
	f_fk_servicos_x_acessos: number;
	f_fk_site: number;
	f_tipo: AcessosTipo;
	f_x7w60fv71f9: number;
	updatedAt: string;
	createdAt: string;
}

export interface AcessosRelations {
	createdBy?: Users | null;
	f_equipamento?: Equipamentos | null;
	f_insumos?: Servicos[];
	f_interface?: TelecomInterfaces | null;
	f_site?: Sites | null;
	f_xzuv9d6zkhr?: Servicos | null;
	updatedBy?: Users | null;
}

export type AcessosRelationKey = keyof AcessosRelations;

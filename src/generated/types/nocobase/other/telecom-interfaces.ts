/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Acessos } from "../other/acessos";
import type { Equipamentos } from "../other/equipamentos";
import type { TelecomRecursos } from "../other/telecom-recursos";
import type { Users } from "../users";

export const T_TELECOM_INTERFACES_TABLE_NAME = "t_telecom_interfaces";

export const TELECOMINTERFACES_CONFIGURACAO_LABELS = {
	"1": "Acesso",
	"2": "Tronco",
	"3": "Hibrida",
} as const;

export const TELECOMINTERFACES_TIPO_LABELS = {
	"1": "SFP",
	"3": "METALICA",
	"2": "SFP+",
	"4": "QSFP",
	"5": "VLAN",
	"6": "VPN",
	"7": "ETH-TRUNK (LAG)",
} as const;

export type TelecomInterfacesConfiguracao =
	keyof typeof TELECOMINTERFACES_CONFIGURACAO_LABELS;

export type TelecomInterfacesTipo = keyof typeof TELECOMINTERFACES_TIPO_LABELS;

export interface TelecomInterfaces {
	id: number;
	f_configuracao: TelecomInterfacesConfiguracao;
	f_descricao: string;
	f_interface: string;
	f_p9gxrkh5utl: number;
	f_tipo: TelecomInterfacesTipo;
	parentId: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomInterfacesRelations {
	children?: TelecomInterfaces[];
	createdBy?: Users | null;
	f_fk_equipamento?: Equipamentos[];
	f_fk_interfaces_equipamentos?: Equipamentos[];
	f_fk_recurso_interface_ponta_a?: TelecomRecursos[];
	f_fk_recurso_interface_ponta_b?: TelecomRecursos[];
	f_s3gs1jjkqzm?: Acessos | null;
	parent?: TelecomInterfaces | null;
	updatedBy?: Users | null;
}

export type TelecomInterfacesRelationKey = keyof TelecomInterfacesRelations;

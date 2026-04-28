/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_TELECOM_IPS_FIXOS_TABLE_NAME = "t_telecom_ips_fixos";

export const TELECOMIPSFIXOS_POSSUIIPFIXO_LABELS = {
	"0": "Não",
	"1": "Sim",
} as const;

export type TelecomIpsFixosPossuiIpFixo =
	keyof typeof TELECOMIPSFIXOS_POSSUIIPFIXO_LABELS;

export interface TelecomIpsFixos {
	id: number;
	f_contrato_ixc: string;
	f_controle: string;
	f_ip: string;
	f_login: string;
	f_possui_ip_fixo: TelecomIpsFixosPossuiIpFixo;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomIpsFixosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomIpsFixosRelationKey = keyof TelecomIpsFixosRelations;

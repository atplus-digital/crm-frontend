/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FContatos } from "../other/contatos";
import type { Equipamentos } from "../other/equipamentos";
import type { TelecomAnexos } from "../other/telecom-anexos";
import type { TelecomRacks } from "../other/telecom-racks";
import type { Users } from "../users";

export const T_SITES_TABLE_NAME = "t_sites";

export const SITES_STATUS_LABELS = {
	repnmsclnb8: "Planejado",
	x2lk2z9p2ds: "Ativo",
	qw3vjvimoae: "Desativado",
} as const;

export const SITES_TIPO_LABELS = {
	"1": "ATPLUS",
	"2": "FORNECEDOR",
	"3": "CLIENTE",
} as const;

export type SitesStatus = keyof typeof SITES_STATUS_LABELS;

export type SitesTipo = keyof typeof SITES_TIPO_LABELS;

export interface Sites {
	id: number;
	f_fk_telecom_contatos: number;
	f_bairro: string;
	f_cep: string;
	f_cidade: string;
	f_complemento: string;
	f_dados_acesso: string;
	f_endereco: string;
	f_nome: string;
	f_numero: string;
	f_sigla: string;
	f_status: SitesStatus;
	f_tipo: SitesTipo;
	f_uf: string;
	updatedAt: string;
	createdAt: string;
}

export interface SitesRelations {
	createdBy?: Users | null;
	f_anexos?: TelecomAnexos[];
	f_contatos?: FContatos | null;
	f_fk_sites_equipamentos?: Equipamentos[];
	f_racks?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type SitesRelationKey = keyof SitesRelations;

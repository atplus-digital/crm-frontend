/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { EquipamentosBase } from "./equipamentos";
import type {
	FContatosBase,
	TelecomAnexosBase,
	TelecomRacksBase,
} from "./index";
import type { UsersBase } from "./users";

export interface SitesBase {
	createdAt: string;
	f_bairro: string;
	f_cep: string;
	f_cidade: string;
	f_complemento: string;
	f_dados_acesso: string;
	f_endereco: string;
	f_fk_telecom_contatos: number;
	f_nome: string;
	f_numero: string;
	f_sigla: string;
	f_status: string;
	f_tipo: string;
	f_uf: string;
	id: number;
	updatedAt: string;
}

export interface SitesRelations {
	createdBy?: UsersBase | null;
	f_anexos?: TelecomAnexosBase[];
	f_contatos?: FContatosBase | null;
	f_fk_sites_equipamentos?: EquipamentosBase[];
	f_racks?: TelecomRacksBase[];
	updatedBy?: UsersBase | null;
}

export type SitesRelationKey = keyof SitesRelations;

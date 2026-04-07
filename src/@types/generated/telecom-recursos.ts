/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { EquipamentosBase } from "./equipamentos";
import type {
	FornecedoresTelecomBase,
	TelecomAnexosBase,
	TelecomColocationOpcoesBase,
	TelecomInterfacesBase,
	TelecomOpcoesL2lBase,
	TelecomRacksBase,
	TelecomTransitoOpcoesBase,
} from "./index";
import type { SitesBase } from "./sites";
import type { UsersBase } from "./users";

export interface TelecomRecursosBase {
	createdAt: string;
	f_2ew016ynyo6: number;
	f_contrato_ixc: number;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_detalhes: string;
	f_finalidade: string;
	f_fk_anexos_recursos: number;
	f_fk_cliente_recurso: number;
	f_fk_fornecedor_recurso: number;
	f_fk_rack_a: number;
	f_fk_rack_b: number;
	f_fk_site_a: number;
	f_fk_site_b: number;
	f_id_produto: string;
	f_nome: string;
	f_status: string;
	f_tipo: string;
	id: number;
	parentId: number;
	updatedAt: string;
}

export interface TelecomRecursosRelations {
	children?: TelecomRecursosBase[];
	createdBy?: UsersBase | null;
	f_anexos?: TelecomAnexosBase[];
	f_cliente?: FornecedoresTelecomBase | null;
	f_equipamento_a?: EquipamentosBase | null;
	f_fornecedor?: FornecedoresTelecomBase | null;
	f_interface_ponta_a?: TelecomInterfacesBase[];
	f_interface_ponta_b?: TelecomInterfacesBase[];
	f_opcoes_colocation?: TelecomColocationOpcoesBase | null;
	f_opcoes_l2l?: TelecomOpcoesL2lBase | null;
	f_opcoes_link_ip?: TelecomTransitoOpcoesBase | null;
	f_rack_a?: TelecomRacksBase | null;
	f_rack_b?: TelecomRacksBase | null;
	f_site_a?: SitesBase | null;
	f_site_b?: SitesBase | null;
	parent?: TelecomRecursosBase | null;
	updatedBy?: UsersBase | null;
}

export type TelecomRecursosRelationKey = keyof TelecomRecursosRelations;

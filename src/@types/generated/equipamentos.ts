/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type {
	AcessosBase,
	TelecomAnexosBase,
	TelecomInterfacesBase,
	TelecomRacksBase,
} from "./index";
import type { SitesBase } from "./sites";
import type { TelecomRecursosBase } from "./telecom-recursos";
import type { UsersBase } from "./users";

export interface EquipamentosBase {
	createdAt: string;
	f_34u76klwxoj: number;
	f_fk_ativo_rack: number;
	f_fk_equipamentos_anexos: number;
	f_fk_equipamentos_interfaces: number;
	f_modelo: string;
	f_nome: string;
	f_observacoes: string;
	f_sigla: string;
	f_sn: string;
	id: number;
	updatedAt: string;
}

export interface EquipamentosRelations {
	createdBy?: UsersBase | null;
	f_fwvce6bqigw?: TelecomAnexosBase[];
	f_hcqrd9qhcid?: AcessosBase[];
	f_interfaces?: TelecomInterfacesBase[];
	f_rack?: TelecomRacksBase | null;
	f_recurso_equipamento_a?: TelecomRecursosBase[];
	f_site?: SitesBase | null;
	updatedBy?: UsersBase | null;
}

export type EquipamentosRelationKey = keyof EquipamentosRelations;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Acessos } from "../other/acessos";
import type { Sites } from "../other/sites";
import type { TelecomAnexos } from "../other/telecom-anexos";
import type { TelecomInterfaces } from "../other/telecom-interfaces";
import type { TelecomRacks } from "../other/telecom-racks";
import type { TelecomRecursos } from "../other/telecom-recursos";
import type { Users } from "../users";

export const T_EQUIPAMENTOS_TABLE_NAME = "t_equipamentos";

export interface Equipamentos {
	id: number;
	f_fk_ativo_rack: number;
	f_fk_equipamentos_anexos: number;
	f_fk_equipamentos_interfaces: number;
	f_34u76klwxoj: number;
	f_modelo: string;
	f_nome: string;
	f_observacoes: string;
	f_sigla: string;
	f_sn: string;
	updatedAt: string;
	createdAt: string;
}

export interface EquipamentosRelations {
	createdBy?: Users | null;
	f_fwvce6bqigw?: TelecomAnexos[];
	f_hcqrd9qhcid?: Acessos[];
	f_interfaces?: TelecomInterfaces[];
	f_rack?: TelecomRacks | null;
	f_recurso_equipamento_a?: TelecomRecursos[];
	f_site?: Sites | null;
	updatedBy?: Users | null;
}

export type EquipamentosRelationKey = keyof EquipamentosRelations;

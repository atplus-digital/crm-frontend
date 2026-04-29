/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_EQUIPAMENTOS_EM_PREDIOS_TABLE_NAME = "t_equipamentos_em_predios";

export interface EquipamentosEmPredios {
	id: number;
	f_contato_sindico: string;
	f_endereco: string;
	f_modelo_equipamento: string;
	f_nome_predio: string;
	f_observacao: string;
	f_sn: string;
	f_tipo_equipamento: string;
	updatedAt: string;
	createdAt: string;
}

export interface EquipamentosEmPrediosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type EquipamentosEmPrediosRelationKey =
	keyof EquipamentosEmPrediosRelations;

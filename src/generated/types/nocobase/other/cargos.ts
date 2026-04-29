/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_CARGOS_TABLE_NAME = "t_cargos";

export interface Cargos {
	id: number;
	f_fk_funcionarios: number;
	f_atividades: string;
	f_cbo: string;
	f_descricao: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface CargosRelations {
	createdBy?: Users | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type CargosRelationKey = keyof CargosRelations;

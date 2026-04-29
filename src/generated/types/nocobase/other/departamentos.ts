/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_DEPARTAMENTOS_TABLE_NAME = "t_departamentos";

export interface Departamentos {
	id: number;
	f_fk_funcionarios: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface DepartamentosRelations {
	createdBy?: Users | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type DepartamentosRelationKey = keyof DepartamentosRelations;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_LOGS_CARGOS_TABLE_NAME = "t_logs_cargos";

export interface LogsCargos {
	id: number;
	f_fk_funcionarios: number;
	CBO: string;
	f_atividades: string;
	f_cargo_anterior: string;
	f_data_inicio_cargo: string;
	f_descricao: string;
	f_nome_cargo: string;
	updatedAt: string;
	createdAt: string;
}

export interface LogsCargosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type LogsCargosRelationKey = keyof LogsCargosRelations;

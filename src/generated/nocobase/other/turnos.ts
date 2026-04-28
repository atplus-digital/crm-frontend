/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_TURNOS_TABLE_NAME = "t_turnos";

export interface Turnos {
	id: number;
	f_turno: string;
	updatedAt: string;
	createdAt: string;
}

export interface TurnosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	updatedBy?: Users | null;
}

export type TurnosRelationKey = keyof TurnosRelations;

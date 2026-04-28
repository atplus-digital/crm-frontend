/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_PARENTESCO_TABLE_NAME = "t_parentesco";

export interface Parentesco {
	id: number;
	f_fk_funcionarios: number;
	f_cpf: string;
	f_nome: string;
	f_vinculo_colaborador: string;
	updatedAt: string;
	createdAt: string;
}

export interface ParentescoRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type ParentescoRelationKey = keyof ParentescoRelations;

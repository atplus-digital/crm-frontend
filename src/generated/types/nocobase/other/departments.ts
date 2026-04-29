/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Roles } from "../other/roles";
import type { Users } from "../users";

export const DEPARTMENTS_TABLE_NAME = "departments";

export interface Departments {
	id: number;
	sort: number;
	isLeaf: boolean;
	title: string;
	updatedById: number | null;
	createdById: number | null;
}

export interface DepartmentsRelations {
	children?: Departments[];
	createdBy?: Users | null;
	members?: Users[];
	owners?: Users[];
	parent?: Departments | null;
	roles?: Roles[];
	updatedBy?: Users | null;
}

export type DepartmentsRelationKey = keyof DepartmentsRelations;

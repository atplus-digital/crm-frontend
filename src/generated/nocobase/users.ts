/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Departments, Roles } from "./index";

export const USERS_TABLE_NAME = "users";

export interface Users {
	id: number;
	sort: number;
	f_fk_cargos: number;
	f_fk_departamentos: number;
	f_fk_desconto_vendedor: number;
	f_id_tecnico_ixc: number;
	f_id_vendedor_ixc: number;
	appLang: string;
	email: string;
	nickname: string;
	password: string;
	passwordChangeTz: number;
	phone: string;
	resetToken: string;
	systemSettings: Record<string, unknown>;
	username: string;
	updatedAt: string;
	updatedById: number | null;
	createdAt: string;
	createdById: number | null;
}

export interface UsersRelations {
	createdBy?: Users | null;
	departments?: Departments[];
	mainDepartment?: Departments | null;
	roles?: Roles[];
	updatedBy?: Users | null;
}

export type UsersRelationKey = keyof UsersRelations;

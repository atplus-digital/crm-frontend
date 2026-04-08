/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { DepartmentsBase, RolesBase } from "./index";

export interface UsersBase {
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
	createdBy?: UsersBase | null;
	departments?: DepartmentsBase[];
	mainDepartment?: DepartmentsBase | null;
	roles?: RolesBase[];
	updatedBy?: UsersBase | null;
}

export type UsersRelationKey = keyof UsersRelations;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { DepartmentsBase, RolesBase } from "./index";

export interface UsersBase {
	appLang: string;
	createdAt: string;
	createdById: number | null;
	email: string;
	f_fk_cargos: number;
	f_fk_departamentos: number;
	f_fk_desconto_vendedor: number;
	f_id_tecnico_ixc: number;
	f_id_vendedor_ixc: number;
	id: number;
	nickname: string;
	password: string;
	passwordChangeTz: number;
	phone: string;
	resetToken: string;
	sort: number;
	systemSettings: Record<string, unknown>;
	updatedAt: string;
	updatedById: number | null;
	username: string;
}

export interface UsersRelations {
	createdBy?: UsersBase | null;
	departments?: DepartmentsBase[];
	mainDepartment?: DepartmentsBase | null;
	roles?: RolesBase[];
	updatedBy?: UsersBase | null;
}

export type UsersRelationKey = keyof UsersRelations;

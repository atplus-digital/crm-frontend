/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { DepartmentsBase, RolesBase } from "./index";

export interface UsersBase {
	appLang: string;
	createdAt: string;
	createdBy: UsersBase | null;
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
	updatedBy: UsersBase | null;
	updatedById: number | null;
	username: string;
	mainDepartment: DepartmentsBase | null;
}

export interface UsersRelations {
	departments?: DepartmentsBase[];
	mainDepartment?: DepartmentsBase | null;
	roles?: RolesBase[];
}

export type UsersRelationKey = keyof UsersRelations;

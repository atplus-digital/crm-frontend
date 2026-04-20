/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Departments, Roles } from "./index";

export const USERS_TABLE_NAME = "users";

export enum UsersFkDepartamentos {
	Value6 = "6",
}

export enum UsersFkDescontoVendedor {
	Value3 = "3",
	Value4 = "4",
}

export enum UsersSystemsettings {
	ObjectObject = "[object Object]",
}

export interface Users {
	id: number;
	sort: number;
	f_fk_cargos: number;
	f_fk_departamentos: UsersFkDepartamentos;
	f_fk_desconto_vendedor: UsersFkDescontoVendedor;
	f_id_tecnico_ixc: number;
	f_id_vendedor_ixc: number;
	appLang: string;
	email: string;
	nickname: string;
	password: string;
	passwordChangeTz: number;
	phone: string;
	resetToken: string;
	systemSettings: UsersSystemsettings;
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

export const USERS_FKDEPARTAMENTOS_LABELS: Record<
	UsersFkDepartamentos,
	string
> = {
	[UsersFkDepartamentos.Value6]: "Código 6",
};

export const USERS_FKDESCONTOVENDEDOR_LABELS: Record<
	UsersFkDescontoVendedor,
	string
> = {
	[UsersFkDescontoVendedor.Value3]: "Código 3",
	[UsersFkDescontoVendedor.Value4]: "Código 4",
};

export const USERS_SYSTEMSETTINGS_LABELS: Record<UsersSystemsettings, string> =
	{
		[UsersSystemsettings.ObjectObject]: "[object Object]",
	};

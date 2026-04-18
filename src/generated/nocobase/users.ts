/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Departments, Roles } from "./index";

export const USERS_TABLE_NAME = "users";

export enum UsersCreatedbyid {
	Value1 = "1",
	Value2 = "2",
	Value20 = "20",
	Value25 = "25",
	Value3 = "3",
	Value70 = "70",
}

export enum UsersFkCargos {
	Value57 = "57",
}

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

export enum UsersUpdatedbyid {
	Value1 = "1",
	Value2 = "2",
	Value20 = "20",
	Value25 = "25",
	Value3 = "3",
	Value70 = "70",
	Value78 = "78",
}

export interface Users {
	id: number;
	sort: number;
	f_fk_cargos: UsersFkCargos;
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
	updatedById: UsersUpdatedbyid;
	createdAt: string;
	createdById: UsersCreatedbyid;
}

export interface UsersRelations {
	createdBy?: Users | null;
	departments?: Departments[];
	mainDepartment?: Departments | null;
	roles?: Roles[];
	updatedBy?: Users | null;
}

export type UsersRelationKey = keyof UsersRelations;

export const USERS_CREATEDBYID_LABELS: Record<UsersCreatedbyid, string> = {
	[UsersCreatedbyid.Value1]: "Ativo",
	[UsersCreatedbyid.Value2]: "Código 2",
	[UsersCreatedbyid.Value20]: "Código 20",
	[UsersCreatedbyid.Value25]: "Código 25",
	[UsersCreatedbyid.Value3]: "Código 3",
	[UsersCreatedbyid.Value70]: "Código 70",
};

export const USERS_FKCARGOS_LABELS: Record<UsersFkCargos, string> = {
	[UsersFkCargos.Value57]: "Código 57",
};

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

export const USERS_UPDATEDBYID_LABELS: Record<UsersUpdatedbyid, string> = {
	[UsersUpdatedbyid.Value1]: "Ativo",
	[UsersUpdatedbyid.Value2]: "Código 2",
	[UsersUpdatedbyid.Value20]: "Código 20",
	[UsersUpdatedbyid.Value25]: "Código 25",
	[UsersUpdatedbyid.Value3]: "Código 3",
	[UsersUpdatedbyid.Value70]: "Código 70",
	[UsersUpdatedbyid.Value78]: "Código 78",
};

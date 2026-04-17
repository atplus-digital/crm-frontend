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

export enum UsersIdTecnicoIxc {
	Value113 = "113",
	Value114 = "114",
	Value117 = "117",
	Value119 = "119",
	Value139 = "139",
	Value141 = "141",
	Value34 = "34",
	Value35 = "35",
	Value85 = "85",
	Value86 = "86",
	Value88 = "88",
	Value89 = "89",
	Value90 = "90",
	Value94 = "94",
	Value99 = "99",
}

export enum UsersPhone {
	Value4920500101 = "4920500101",
	Value4932400000 = "4932400000",
	Value4932400800 = "4932400800",
	Value4932400801 = "4932400801",
	Value4932400807 = "4932400807",
	Value49988173423 = "49988173423",
	Value49988530573 = "49988530573",
	Value49991385477 = "49991385477",
	Value49999375456 = "49999375456",
	Value49999573525 = "49999573525",
	Value49999606003 = "49999606003",
	Value49999838518 = "49999838518",
	Value49999843778 = "49999843778",
	Value49999999999 = "49999999999",
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
	f_id_tecnico_ixc: UsersIdTecnicoIxc;
	f_id_vendedor_ixc: number;
	appLang: string;
	email: string;
	nickname: string;
	password: string;
	passwordChangeTz: number;
	phone: UsersPhone;
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

export const USERS_IDTECNICOIXC_LABELS: Record<UsersIdTecnicoIxc, string> = {
	[UsersIdTecnicoIxc.Value113]: "113",
	[UsersIdTecnicoIxc.Value114]: "114",
	[UsersIdTecnicoIxc.Value117]: "117",
	[UsersIdTecnicoIxc.Value119]: "119",
	[UsersIdTecnicoIxc.Value139]: "139",
	[UsersIdTecnicoIxc.Value141]: "141",
	[UsersIdTecnicoIxc.Value34]: "Código 34",
	[UsersIdTecnicoIxc.Value35]: "Código 35",
	[UsersIdTecnicoIxc.Value85]: "Código 85",
	[UsersIdTecnicoIxc.Value86]: "Código 86",
	[UsersIdTecnicoIxc.Value88]: "Código 88",
	[UsersIdTecnicoIxc.Value89]: "Código 89",
	[UsersIdTecnicoIxc.Value90]: "Código 90",
	[UsersIdTecnicoIxc.Value94]: "Código 94",
	[UsersIdTecnicoIxc.Value99]: "Código 99",
};

export const USERS_PHONE_LABELS: Record<UsersPhone, string> = {
	[UsersPhone.Value4920500101]: "4920500101",
	[UsersPhone.Value4932400000]: "4932400000",
	[UsersPhone.Value4932400800]: "4932400800",
	[UsersPhone.Value4932400801]: "4932400801",
	[UsersPhone.Value4932400807]: "4932400807",
	[UsersPhone.Value49988173423]: "49988173423",
	[UsersPhone.Value49988530573]: "49988530573",
	[UsersPhone.Value49991385477]: "49991385477",
	[UsersPhone.Value49999375456]: "49999375456",
	[UsersPhone.Value49999573525]: "49999573525",
	[UsersPhone.Value49999606003]: "49999606003",
	[UsersPhone.Value49999838518]: "49999838518",
	[UsersPhone.Value49999843778]: "49999843778",
	[UsersPhone.Value49999999999]: "49999999999",
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

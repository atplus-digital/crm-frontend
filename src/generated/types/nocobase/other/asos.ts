/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { InfoAso } from "../other/info-aso";
import type { Users } from "../users";

export const T_ASOS_TABLE_NAME = "t_asos";

export interface Asos {
	id: number;
	f_fk_funcionarios: number;
	f_fk_infos_aso: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface AsosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_info_aso?: InfoAso | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AsosRelationKey = keyof AsosRelations;

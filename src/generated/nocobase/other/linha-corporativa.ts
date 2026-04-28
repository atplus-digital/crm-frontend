/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_LINHA_CORPORATIVA_TABLE_NAME = "t_linha_corporativa";

export const LINHACORPORATIVA_TIPO_LABELS = {
	"1": "Chip Corporativo",
	"2": "DID Fixo",
} as const;

export type LinhaCorporativaTipo = keyof typeof LINHACORPORATIVA_TIPO_LABELS;

export interface LinhaCorporativa {
	id: number;
	f_fk_funcionarios: number;
	f_iccid_corporativo: string;
	f_numero_movel_corporativo: string;
	f_tipo: LinhaCorporativaTipo;
	updatedAt: string;
	createdAt: string;
}

export interface LinhaCorporativaRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type LinhaCorporativaRelationKey = keyof LinhaCorporativaRelations;

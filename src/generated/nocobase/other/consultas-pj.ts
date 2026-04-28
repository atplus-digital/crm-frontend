/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Empresas } from "../empresas";
import type { Users } from "../users";

export const T_CONSULTAS_PJ_TABLE_NAME = "t_consultas_pj";

export const CONSULTASPJ_STATUSCONSULTA_LABELS = {
	"1": "Aprovado",
	"2": "Aprovado com Alertas",
	"9": "Negado",
} as const;

export type ConsultasPjStatusConsulta =
	keyof typeof CONSULTASPJ_STATUSCONSULTA_LABELS;

export interface ConsultasPj {
	id: number;
	f_id_pessoa_fk: number;
	f_justificativa: string;
	f_retorno_spc: string;
	f_status_consulta: ConsultasPjStatusConsulta;
	updatedAt: string;
	createdAt: string;
}

export interface ConsultasPjRelations {
	createdBy?: Users | null;
	f_id_pessoa?: Empresas | null;
	updatedBy?: Users | null;
}

export type ConsultasPjRelationKey = keyof ConsultasPjRelations;

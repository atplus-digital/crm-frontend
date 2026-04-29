/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Pessoas } from "../pessoas";
import type { Users } from "../users";

export const T_CONSULTAS_PF_TABLE_NAME = "t_consultas_pf";

export const CONSULTASPF_STATUSCONSULTA_LABELS = {
	"1": "Aprovado",
	"2": "Aprovado com Alertas",
	"9": "Negado",
} as const;

export type ConsultasPfStatusConsulta =
	keyof typeof CONSULTASPF_STATUSCONSULTA_LABELS;

export interface ConsultasPf {
	id: number;
	f_id_pessoa_fk: number;
	f_justificativa: string;
	f_retorno_spc: string;
	f_status_consulta: ConsultasPfStatusConsulta;
	updatedAt: string;
	createdAt: string;
}

export interface ConsultasPfRelations {
	createdBy?: Users | null;
	f_id_pessoa?: Pessoas | null;
	updatedBy?: Users | null;
}

export type ConsultasPfRelationKey = keyof ConsultasPfRelations;

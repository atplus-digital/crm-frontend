/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_OPCOES_STFC_TEMPLATE_TABLE_NAME = "t_opcoes_stfc_template";

export const OPCOESSTFCTEMPLATE_PORTABILIDADE_LABELS = {
	"0": "NÃO",
	"1": "SIM",
} as const;

export type OpcoesStfcTemplatePortabilidade =
	keyof typeof OPCOESSTFCTEMPLATE_PORTABILIDADE_LABELS;

export interface OpcoesStfcTemplate {
	id: number;
	f_fk_opcoes_stfc_template: number;
	f_canais: number;
	f_franquia: string;
	f_nome_do_plano: string;
	f_portabilidade: OpcoesStfcTemplatePortabilidade;
	f_terminais: string;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesStfcTemplateRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesStfcTemplateRelationKey = keyof OpcoesStfcTemplateRelations;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_OPCOES_STFC_TABLE_NAME = "t_opcoes_stfc";

export const OPCOESSTFC_PORTABILIDADE_LABELS = {
	SIM: "SIM",
	NAO: "NÃO",
} as const;

export type OpcoesStfcPortabilidade =
	keyof typeof OPCOESSTFC_PORTABILIDADE_LABELS;

export interface OpcoesStfc {
	id: number;
	f_fk_opcoes_stfc: number;
	f_canais: string;
	f_franquia: string;
	f_nome_do_plano: string;
	f_portabilidade: OpcoesStfcPortabilidade;
	f_terminais: string;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesStfcRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesStfcRelationKey = keyof OpcoesStfcRelations;

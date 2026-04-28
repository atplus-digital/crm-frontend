/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_OPCOES_SMP_TABLE_NAME = "t_opcoes_smp";

export const OPCOESSMP_PORTABILIDADE_LABELS = {
	"0": "NÃO",
	"1": "SIM",
} as const;

export type OpcoesSmpPortabilidade =
	keyof typeof OPCOESSMP_PORTABILIDADE_LABELS;

export interface OpcoesSmp {
	id: number;
	f_fk_prod_negociacao_opcoes_smp: number;
	f_bonus: string;
	f_franquia_dados: string;
	f_minutos: string;
	f_nome_do_plano: string;
	f_portabilidade: OpcoesSmpPortabilidade;
	f_sms: string;
	f_sva_incluso: string;
	f_terminal: string;
	f_valor_smp: number;
	f_valor_sva: number;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesSmpRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesSmpRelationKey = keyof OpcoesSmpRelations;

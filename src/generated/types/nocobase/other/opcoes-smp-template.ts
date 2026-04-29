/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_OPCOES_SMP_TEMPLATE_TABLE_NAME = "t_opcoes_smp_template";

export interface OpcoesSmpTemplate {
	id: number;
	f_fk_smp_produtos: number;
	f_bonus: string;
	f_franquia_dados: string;
	f_minutos: string;
	f_nome_plano: string;
	f_sms: string;
	f_sva_incluso: string;
	f_valor_smp: number;
	f_valor_sva: number;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesSmpTemplateRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesSmpTemplateRelationKey = keyof OpcoesSmpTemplateRelations;

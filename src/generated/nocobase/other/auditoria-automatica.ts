/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Negociacoes } from "../negociacoes";
import type { Users } from "../users";

export const T_AUDITORIA_AUTOMATICA_TABLE_NAME = "t_auditoria_automatica";

export interface AuditoriaAutomatica {
	id: number;
	f_conferencia: boolean;
	f_id_negociacao: number;
	f_titulo_negociacao: string;
	f_valor_mensal: number;
	updatedAt: string;
	createdAt: string;
}

export interface AuditoriaAutomaticaRelations {
	createdBy?: Users | null;
	f_negociacoes?: Negociacoes | null;
	updatedBy?: Users | null;
}

export type AuditoriaAutomaticaRelationKey = keyof AuditoriaAutomaticaRelations;

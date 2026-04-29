/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_AEGIS_TABLE_NAME = "t_aegis";

export const AEGIS_STATUSDESBLOQUEIOCONFIACA_LABELS = {
	success: "Desbloqueio de Confiança Efetuado por 2 Dias",
	error: "Erro ao Realizar Desbloqueio de Confiança",
} as const;

export const AEGIS_STATUSLOGIN_LABELS = {
	success: "Sucesso ao Desconectar Login",
	error: "Erro ao Desconectar Login",
} as const;

export const AEGIS_STATUSMAC_LABELS = {
	success: "Sucesso ao Limpar MAC",
	error: "Erro ao Limpar MAC",
} as const;

export type AegisStatusdesbloqueioconfiaca =
	keyof typeof AEGIS_STATUSDESBLOQUEIOCONFIACA_LABELS;

export type AegisStatuslogin = keyof typeof AEGIS_STATUSLOGIN_LABELS;

export type AegisStatusmac = keyof typeof AEGIS_STATUSMAC_LABELS;

export interface Aegis {
	id: number;
	f_idlogin: string;
	f_notas: string;
	f_notas_cliente: string;
	f_statusdesbloqueioconfiaca: AegisStatusdesbloqueioconfiaca;
	f_statuslogin: AegisStatuslogin;
	f_statusmac: AegisStatusmac;
	updatedAt: string;
	createdAt: string;
}

export interface AegisRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type AegisRelationKey = keyof AegisRelations;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_TELECOM_COLOCATION_OPCOES_TABLE_NAME =
	"t_telecom_colocation_opcoes";

export const TELECOMCOLOCATIONOPCOES_ENERGIA_LABELS = {
	Value0nqbw68srah: "AC 220",
	e5b3lklfpq4: "AC 110",
	mra46p506xo: "DC -48",
} as const;

export type TelecomColocationOpcoesEnergia =
	keyof typeof TELECOMCOLOCATIONOPCOES_ENERGIA_LABELS;

export interface TelecomColocationOpcoes {
	id: number;
	f_6c1tv6gt1ey: number;
	f_designacao_rack: string;
	f_energia: TelecomColocationOpcoesEnergia;
	f_espaco_rack: string;
	fk_opcoes_colocation: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomColocationOpcoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomColocationOpcoesRelationKey =
	keyof TelecomColocationOpcoesRelations;

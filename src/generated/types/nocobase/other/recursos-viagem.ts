/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_RECURSOS_VIAGEM_TABLE_NAME = "t_recursos_viagem";

export const RECURSOSVIAGEM_DESTINOVIAGEM_LABELS = {
	"1": "Curitibanos",
	"2": "Florianópolis",
	"3": "Florianópolis",
} as const;

export const RECURSOSVIAGEM_MEIOTRANSPORTE_LABELS = {
	"1": "Kwid ATPlus",
	"2": "Fiorino ATPlus",
	"3": "Carro Particular",
	"4": "Outro",
} as const;

export type RecursosViagemDestinoViagem =
	keyof typeof RECURSOSVIAGEM_DESTINOVIAGEM_LABELS;

export type RecursosViagemMeioTransporte =
	keyof typeof RECURSOSVIAGEM_MEIOTRANSPORTE_LABELS;

export interface RecursosViagem {
	id: number;
	f_fk_recursos_viagem: number;
	f_destino_viagem: RecursosViagemDestinoViagem;
	f_km_percorrido: number;
	f_meio_transporte: RecursosViagemMeioTransporte;
	f_observacoes: string;
	updatedAt: string;
	createdAt: string;
}

export interface RecursosViagemRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type RecursosViagemRelationKey = keyof RecursosViagemRelations;

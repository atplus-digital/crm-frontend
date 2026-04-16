/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import type {
	ClienteContrato,
	ClienteContratoRelations,
} from "./cliente-contrato";

// Tipo union com todas as collections disponíveis
export type CollectionName = "cliente_contrato";

export interface CollectionMap {
	cliente_contrato: ClienteContrato;
}

export interface CollectionRelationsMap {
	cliente_contrato: ClienteContratoRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = ["cliente_contrato"] as const;

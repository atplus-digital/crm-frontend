/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_COMPRAS_FORNECEDORES_TABLE_NAME = "t_compras_fornecedores";

export interface ComprasFornecedores {
	id: number;
	f_contato: string;
	f_nome: string;
	f_site: string;
	updatedAt: string;
	createdAt: string;
}

export interface ComprasFornecedoresRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComprasFornecedoresRelationKey = keyof ComprasFornecedoresRelations;

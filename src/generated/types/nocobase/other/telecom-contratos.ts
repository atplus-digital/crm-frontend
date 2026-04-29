/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FornecedoresTelecom } from "../other/fornecedores-telecom";
import type { Servicos } from "../other/servicos";
import type { Users } from "../users";

export const T_TELECOM_CONTRATOS_TABLE_NAME = "t_telecom_contratos";

export interface TelecomContratos {
	id: number;
	f_fk_cliente: number;
	f_fk_fornecedor: number;
	f_descricao: string;
	f_o6r7bgwk9bb: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomContratosRelations {
	createdBy?: Users | null;
	f_cliente?: FornecedoresTelecom | null;
	f_fornecedor?: FornecedoresTelecom | null;
	f_servicos?: Servicos[];
	updatedBy?: Users | null;
}

export type TelecomContratosRelationKey = keyof TelecomContratosRelations;

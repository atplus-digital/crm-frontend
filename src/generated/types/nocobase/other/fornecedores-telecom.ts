/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { TelecomContratos } from "../other/telecom-contratos";
import type { TelecomRecursos } from "../other/telecom-recursos";
import type { Users } from "../users";

export const T_FORNECEDORES_TELECOM_TABLE_NAME = "t_fornecedores_telecom";

export interface FornecedoresTelecom {
	id: number;
	f_fk_cliente_circuiro: number;
	f_fk_fornecedor_circuito: number;
	f_instrucoes: string;
	f_nome_fantasia: string;
	f_razao_social: string;
	updatedAt: string;
	createdAt: string;
}

export interface FornecedoresTelecomRelations {
	createdBy?: Users | null;
	f_fk_cliente_contrato?: TelecomContratos[];
	f_fk_contrato_fornecedor?: TelecomContratos[];
	f_fk_recurso_cliente?: TelecomRecursos[];
	f_fk_recurso_fornecedor?: TelecomRecursos[];
	updatedBy?: Users | null;
}

export type FornecedoresTelecomRelationKey = keyof FornecedoresTelecomRelations;

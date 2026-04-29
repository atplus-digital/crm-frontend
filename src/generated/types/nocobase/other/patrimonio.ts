/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_PATRIMONIO_TABLE_NAME = "t_patrimonio";

export const PATRIMONIO_ESTADOUSO_LABELS = {
	NOVO: "NOVO",
	UsadoEmEstadoDeNovo: "USADO, EM ESTADO DE NOVO",
	UsadoComMarcasDeUso: "USADO, COM MARCAS DE USO",
} as const;

export const PATRIMONIO_TIPOPATRIMONIO_LABELS = {
	"1": "Equipamento",
} as const;

export type PatrimonioEstadoUso = keyof typeof PATRIMONIO_ESTADOUSO_LABELS;

export type PatrimonioTipoPatrimonio =
	keyof typeof PATRIMONIO_TIPOPATRIMONIO_LABELS;

export interface Patrimonio {
	id: number;
	f_fk_funcionarios: number;
	f_id_tecnico_ixc: number;
	f_armazenamento: string;
	f_estado_uso: PatrimonioEstadoUso;
	f_modelo: string;
	f_nome_patrimonio: string;
	f_numero_serie: string;
	f_processador: string;
	f_quantidade: number;
	f_ram: string;
	f_so: string;
	f_tipo_patrimonio: PatrimonioTipoPatrimonio;
	f_valor_patrimonio: number;
	updatedAt: string;
	createdAt: string;
}

export interface PatrimonioRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type PatrimonioRelationKey = keyof PatrimonioRelations;

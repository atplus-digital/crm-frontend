/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_REGISTROS_DE_CONTATO_TABLE_NAME = "t_registros_de_contato";

export interface RegistrosDeContato {
	id: number;
	f_fk_id_contrato: number;
	f_categoria: string;
	f_encaminhamento_pendencia: string;
	f_feedback_observacao: string;
	f_ha_pendencia: boolean;
	f_nota_tecnico: string;
	f_nota_vendas: string;
	f_resumo_contato: string;
	f_titulo: string;
	updatedAt: string;
	createdAt: string;
}

export interface RegistrosDeContatoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type RegistrosDeContatoRelationKey = keyof RegistrosDeContatoRelations;

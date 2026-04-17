/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Empresas } from "./empresas";
import type {
	AnexosTrocaTitularidade,
	Contratos,
	TrocasdetitularidadeComentarios,
} from "./index";
import type { Pessoas } from "./pessoas";
import type { Users } from "./users";

export const T_CRM_TROCA_TITULARIDADE_TABLE_NAME = "t_crm_troca_titularidade";

export interface CrmTrocaTitularidade {
	id: number;
	f_fk_negociacao_vendedor: number;
	f_fk_pessoa_negociacao: number;
	f_fk_pessoa_pj_negociacao: number;
	f_bairro: string;
	f_cedente: string;
	f_cedente_documento: string;
	f_cedente_email: string;
	f_cedente_responsavel_legal: string;
	f_cedente_telefone: string;
	f_cep: string;
	f_cessionario: string;
	f_cessionario_documento: string;
	f_cessionario_email: string;
	f_cessionario_responsavel: string;
	f_cessionario_telefone: string;
	f_cidade: string;
	f_complemento: string;
	f_endereco: string;
	f_estado: string;
	f_id_contrato: string;
	f_link_assinatura_cedente: string;
	f_link_assinatura_cessionario: string;
	f_numero: string;
	f_ordenacao: number;
	f_rw7rp8431ty: number;
	f_status: string;
	f_substatus: string;
	f_tipo_pessoa: string;
	updatedAt: string;
	createdAt: string;
}

export interface CrmTrocaTitularidadeRelations {
	createdBy?: Users | null;
	f_anexos?: AnexosTrocaTitularidade[];
	f_comentarios?: TrocasdetitularidadeComentarios[];
	f_pessoa_pf?: Pessoas | null;
	f_pessoa_pj?: Empresas | null;
	f_trocadetitularidade_contrato?: Contratos[];
	f_vendedor?: Users | null;
	updatedBy?: Users | null;
}

export type CrmTrocaTitularidadeRelationKey =
	keyof CrmTrocaTitularidadeRelations;

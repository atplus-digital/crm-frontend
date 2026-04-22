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

export const CRMTROCATITULARIDADE_COMPLEMENTO_LABELS = {
	Casa: "Casa",
	Apartamento: "Apartamento",
	Condominio: "Condominio",
	Comercial: "Comercial",
} as const;

export const CRMTROCATITULARIDADE_ESTADO_LABELS = {
	SC: "SC",
} as const;

export const CRMTROCATITULARIDADE_STATUS_LABELS = {
	"0": "Novo",
	"1": "Aguardando assinatura",
	"2": "Aguardando Auditoria",
	"3": "Concluído",
	"9": "Cancelado",
} as const;

export const CRMTROCATITULARIDADE_SUBSTATUS_LABELS = {
	"0": "NA",
	"1": "APROVADO - Aguardando inserção no IXC",
	"2": "APROVADO - Erro na integração com o IXC",
	"3": "APROVADO - Concluído",
	"4": "REPROVADO - Divergência de Dados",
	"5": "REPROVADO - Financeiro em Atraso",
	"6": "AGUARDANDO - Auditoria",
} as const;

export const CRMTROCATITULARIDADE_TIPOPESSOA_LABELS = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
} as const;

export type CrmTrocaTitularidadeComplemento =
	keyof typeof CRMTROCATITULARIDADE_COMPLEMENTO_LABELS;

export type CrmTrocaTitularidadeEstado =
	keyof typeof CRMTROCATITULARIDADE_ESTADO_LABELS;

export type CrmTrocaTitularidadeStatus =
	keyof typeof CRMTROCATITULARIDADE_STATUS_LABELS;

export type CrmTrocaTitularidadeSubstatus =
	keyof typeof CRMTROCATITULARIDADE_SUBSTATUS_LABELS;

export type CrmTrocaTitularidadeTipoPessoa =
	keyof typeof CRMTROCATITULARIDADE_TIPOPESSOA_LABELS;

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
	f_complemento: CrmTrocaTitularidadeComplemento;
	f_endereco: string;
	f_estado: CrmTrocaTitularidadeEstado;
	f_id_contrato: string;
	f_link_assinatura_cedente: string;
	f_link_assinatura_cessionario: string;
	f_numero: string;
	f_ordenacao: number;
	f_rw7rp8431ty: number;
	f_status: CrmTrocaTitularidadeStatus;
	f_substatus: CrmTrocaTitularidadeSubstatus;
	f_tipo_pessoa: CrmTrocaTitularidadeTipoPessoa;
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

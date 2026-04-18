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

export enum CrmTrocaTitularidadeComplemento {
	Casa = "Casa",
	Apartamento = "Apartamento",
	Condominio = "Condominio",
	Comercial = "Comercial",
}

export enum CrmTrocaTitularidadeEstado {
	Sc = "SC",
}

export enum CrmTrocaTitularidadeStatus {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value9 = "9",
}

export enum CrmTrocaTitularidadeSubstatus {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
}

export enum CrmTrocaTitularidadeTipoPessoa {
	Pf = "PF",
	Pj = "PJ",
}

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

export const CRMTROCATITULARIDADE_COMPLEMENTO_LABELS: Record<
	CrmTrocaTitularidadeComplemento,
	string
> = {
	[CrmTrocaTitularidadeComplemento.Casa]: "Casa",
	[CrmTrocaTitularidadeComplemento.Apartamento]: "Apartamento",
	[CrmTrocaTitularidadeComplemento.Condominio]: "Condominio",
	[CrmTrocaTitularidadeComplemento.Comercial]: "Comercial",
};

export const CRMTROCATITULARIDADE_ESTADO_LABELS: Record<
	CrmTrocaTitularidadeEstado,
	string
> = {
	[CrmTrocaTitularidadeEstado.Sc]: "SC",
};

export const CRMTROCATITULARIDADE_STATUS_LABELS: Record<
	CrmTrocaTitularidadeStatus,
	string
> = {
	[CrmTrocaTitularidadeStatus.Value0]: "Novo",
	[CrmTrocaTitularidadeStatus.Value1]: "Aguardando assinatura",
	[CrmTrocaTitularidadeStatus.Value2]: "Aguardando Auditoria",
	[CrmTrocaTitularidadeStatus.Value3]: "Concluído",
	[CrmTrocaTitularidadeStatus.Value9]: "Cancelado",
};

export const CRMTROCATITULARIDADE_SUBSTATUS_LABELS: Record<
	CrmTrocaTitularidadeSubstatus,
	string
> = {
	[CrmTrocaTitularidadeSubstatus.Value0]: "NA",
	[CrmTrocaTitularidadeSubstatus.Value1]:
		"APROVADO - Aguardando inserção no IXC",
	[CrmTrocaTitularidadeSubstatus.Value2]:
		"APROVADO - Erro na integração com o IXC",
	[CrmTrocaTitularidadeSubstatus.Value3]: "APROVADO - Concluído",
	[CrmTrocaTitularidadeSubstatus.Value4]: "REPROVADO - Divergência de Dados",
	[CrmTrocaTitularidadeSubstatus.Value5]: "REPROVADO - Financeiro em Atraso",
	[CrmTrocaTitularidadeSubstatus.Value6]: "AGUARDANDO - Auditoria",
};

export const CRMTROCATITULARIDADE_TIPOPESSOA_LABELS: Record<
	CrmTrocaTitularidadeTipoPessoa,
	string
> = {
	[CrmTrocaTitularidadeTipoPessoa.Pf]: "Pessoa Física",
	[CrmTrocaTitularidadeTipoPessoa.Pj]: "Pessoa Jurídica",
};

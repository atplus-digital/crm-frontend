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

export enum CrmTrocaTitularidadeCidade {
	CampoBeloDoSul = "Campo Belo do Sul",
	CapOAlto = "Capão Alto",
	CorreiaPinto = "CORREIA PINTO",
	Curitibanos = "Curitibanos",
	Lages = "lages",
	Painel = "Painel",
}

export enum CrmTrocaTitularidadeComplemento {
	Casa = "Casa",
	Apartamento = "Apartamento",
	Condominio = "Condominio",
	Comercial = "Comercial",
}

export enum CrmTrocaTitularidadeEstado {
	Sc = "SC",
}

export enum CrmTrocaTitularidadeFkNegociacaoVendedor {
	Value20 = "20",
	Value27 = "27",
	Value31 = "31",
	Value32 = "32",
	Value38 = "38",
	Value39 = "39",
	Value40 = "40",
	Value43 = "43",
	Value48 = "48",
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
	f_fk_negociacao_vendedor: CrmTrocaTitularidadeFkNegociacaoVendedor;
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
	f_cidade: CrmTrocaTitularidadeCidade;
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

export const CRMTROCATITULARIDADE_CIDADE_LABELS: Record<
	CrmTrocaTitularidadeCidade,
	string
> = {
	[CrmTrocaTitularidadeCidade.CampoBeloDoSul]: "Campo Belo Do Sul",
	[CrmTrocaTitularidadeCidade.CapOAlto]: "Capão Alto",
	[CrmTrocaTitularidadeCidade.CorreiaPinto]: "Correia Pinto",
	[CrmTrocaTitularidadeCidade.Curitibanos]: "Curitibanos",
	[CrmTrocaTitularidadeCidade.Lages]: "Lages",
	[CrmTrocaTitularidadeCidade.Painel]: "Painel",
};

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

export const CRMTROCATITULARIDADE_FKNEGOCIACAOVENDEDOR_LABELS: Record<
	CrmTrocaTitularidadeFkNegociacaoVendedor,
	string
> = {
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value20]: "Código 20",
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value27]: "Código 27",
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value31]: "Código 31",
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value32]: "Código 32",
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value38]: "Código 38",
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value39]: "Código 39",
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value40]: "Código 40",
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value43]: "Código 43",
	[CrmTrocaTitularidadeFkNegociacaoVendedor.Value48]: "Código 48",
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

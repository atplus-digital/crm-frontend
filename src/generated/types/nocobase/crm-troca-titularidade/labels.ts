/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMTROCATITULARIDADE_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_anexos: "Anexos",
	f_bairro: "Bairro",
	f_cedente: "Cedente",
	f_cedente_doc_resp_legal: "Documento Responsável Legal Cedente",
	f_cedente_documento: "Documento Cedente",
	f_cedente_email: "Cedente Email",
	f_cedente_responsavel_legal: "Cedente Responsável Legal",
	f_cedente_telefone: "Cedente Telefone",
	f_cep: "CEP",
	f_cessionario: "Cessionário",
	f_cessionario_doc_resp_legal: "Documento Responsável Legal Cessionário",
	f_cessionario_documento: "Documento Cessionário",
	f_cessionario_email: "Cessionário Email",
	f_cessionario_responsavel: "Cessionário Responsável Legal",
	f_cessionario_telefone: "Cessionário Telefone",
	f_cidade: "Cidade",
	f_comentarios: "Comentários",
	f_complemento: "Complemento",
	f_endereco: "Endereço",
	f_estado: "Estado",
	f_fk_negociacao_vendedor: "f_fk_negociacao_vendedor",
	f_fk_pessoa_negociacao: "f_fk_pessoa_negociacao",
	f_fk_pessoa_pj_negociacao: "f_fk_pessoa_pj_negociacao",
	f_id_contrato: "Contrato ID",
	f_link_assinatura_cedente: "Link para Assinatura Cedente",
	f_link_assinatura_cessionario: "Link para Assinatura Cessionário",
	f_numero: "Número",
	f_ordenacao: "Ordenação",
	f_pessoa_pf: "Pessoa (PF)",
	f_pessoa_pj: "Pessoa (PJ)",
	f_rw7rp8431ty: "teste",
	f_status: "Status",
	f_substatus: "Substatus",
	f_tipo_pessoa: "Tipo de Pessoa",
	f_trocadetitularidade_contrato: "Contrato",
	f_vendedor: "Vendedor",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

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
	0: "Novo",
	1: "Aguardando assinatura",
	2: "Aguardando Auditoria",
	3: "Concluído",
	9: "Cancelado",
} as const;

export const CRMTROCATITULARIDADE_SUBSTATUS_LABELS = {
	0: "NA",
	1: "APROVADO - Aguardando inserção no IXC",
	2: "APROVADO - Erro na integração com o IXC",
	3: "APROVADO - Concluído",
	4: "REPROVADO - Divergência de Dados",
	5: "REPROVADO - Financeiro em Atraso",
	6: "AGUARDANDO - Auditoria",
	7: "AGUARDANDO - Assinaturas no contrato",
} as const;

export const CRMTROCATITULARIDADE_TIPOPESSOA_LABELS = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_troca_titularidadeComplementoSchema = z.enum(
	["Casa", "Apartamento", "Condominio", "Comercial"],
	{
		error: () => ({
			message:
				"complemento: valores válidos são [Casa, Apartamento, Condominio, Comercial]",
		}),
	},
);

export const crm_troca_titularidadeEstadoSchema = z.enum(["SC"], {
	error: () => ({ message: "estado: valores válidos são [SC]" }),
});

export const crm_troca_titularidadeStatusSchema = z.enum(
	["0", "1", "2", "3", "9"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Novo, Aguardando assinatura, Aguardando Auditoria, Concluído, Cancelado]",
		}),
	},
);

export const crm_troca_titularidadeSubstatusSchema = z.enum(
	["0", "1", "2", "3", "4", "5", "6", "7"],
	{
		error: () => ({
			message:
				"substatus: valores válidos são [NA, APROVADO - Aguardando inserção no IXC, APROVADO - Erro na integração com o IXC, APROVADO - Concluído, REPROVADO - Divergência de Dados, REPROVADO - Financeiro em Atraso, AGUARDANDO - Auditoria, AGUARDANDO - Assinaturas no contrato]",
		}),
	},
);

export const crm_troca_titularidadeTipoPessoaSchema = z.enum(["PF", "PJ"], {
	error: () => ({
		message:
			"tipo_pessoa: valores válidos são [Pessoa Física, Pessoa Jurídica]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmTrocaTitularidadeComplemento = z.infer<
	typeof crm_troca_titularidadeComplementoSchema
>;

export type CrmTrocaTitularidadeEstado = z.infer<
	typeof crm_troca_titularidadeEstadoSchema
>;

export type CrmTrocaTitularidadeStatus = z.infer<
	typeof crm_troca_titularidadeStatusSchema
>;

export type CrmTrocaTitularidadeSubstatus = z.infer<
	typeof crm_troca_titularidadeSubstatusSchema
>;

export type CrmTrocaTitularidadeTipoPessoa = z.infer<
	typeof crm_troca_titularidadeTipoPessoaSchema
>;

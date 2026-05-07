/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
	20: "Aguardando assinatura teste",
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
	["0", "1", "2", "3", "9", "20"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Novo, Aguardando assinatura, Aguardando Auditoria, Concluído, Cancelado, Aguardando assinatura teste]",
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

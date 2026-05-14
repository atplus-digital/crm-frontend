/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const EMPRESAS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_analise_ixc: "Análise no IXC",
	f_cnpj: "CNPJ",
	f_cpf_responsavel: "CPF Responsável",
	f_credito: "Analise de Credito",
	f_email_responsavel: "E-mail Responsável",
	f_fundacao: "Fundação",
	f_ie: "IE",
	f_nome_fantasia: "Nome Fantasia",
	f_razao_social: "Razão Social",
	f_responsavel: "Responsável pela Assinatura",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const EMPRESAS_ANALISEIXC_LABELS = {
	0: "Com Pendências",
	1: "Sem Pendências",
} as const;

export const EMPRESAS_CREDITO_LABELS = {
	1: "Aprovado",
	2: "Aprovado com Atenção",
	9: "Negado",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const empresasAnaliseIxcSchema = z.enum(["0", "1"], {
	error: () => ({
		message:
			"analise_ixc: valores válidos são [Com Pendências, Sem Pendências]",
	}),
});

export const empresasCreditoSchema = z.enum(["1", "2", "9"], {
	error: () => ({
		message:
			"credito: valores válidos são [Aprovado, Aprovado com Atenção, Negado]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EmpresasAnaliseIxc = z.infer<typeof empresasAnaliseIxcSchema>;

export type EmpresasCredito = z.infer<typeof empresasCreditoSchema>;

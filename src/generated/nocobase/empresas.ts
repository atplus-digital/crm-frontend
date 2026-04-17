/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_EMPRESAS_TABLE_NAME = "t_empresas";

export enum EmpresasAnaliseIxc {
	Value0 = "0",
	Value1 = "1",
}

export enum EmpresasCredito {
	Value1 = "1",
	Value2 = "2",
	Value9 = "9",
}

export interface Empresas {
	id: number;
	f_analise_ixc: EmpresasAnaliseIxc;
	f_cnpj: string;
	f_cpf_responsavel: string;
	f_credito: EmpresasCredito;
	f_email_responsavel: string;
	f_fundacao: string;
	f_ie: string;
	f_nome_fantasia: string;
	f_razao_social: string;
	f_responsavel: string;
	updatedAt: string;
	createdAt: string;
}

export interface EmpresasRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type EmpresasRelationKey = keyof EmpresasRelations;

export const EMPRESAS_ANALISEIXC_LABELS: Record<EmpresasAnaliseIxc, string> = {
	[EmpresasAnaliseIxc.Value0]: "Com Pendências",
	[EmpresasAnaliseIxc.Value1]: "Sem Pendências",
};

export const EMPRESAS_CREDITO_LABELS: Record<EmpresasCredito, string> = {
	[EmpresasCredito.Value1]: "Aprovado",
	[EmpresasCredito.Value2]: "Aprovado com Atenção",
	[EmpresasCredito.Value9]: "Negado",
};

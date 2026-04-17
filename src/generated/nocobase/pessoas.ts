/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_PESSOAS_TABLE_NAME = "t_pessoas";

export enum PessoasAnaliseIxc {
	Value0 = "0",
	Value1 = "1",
}

export enum PessoasCredito {
	Value1 = "1",
	Value2 = "2",
	Value9 = "9",
}

export enum PessoasSexo {
	M = "M",
	F = "F",
	Masculino = "MASCULINO",
	Feminino = "FEMININO",
}

export interface Pessoas {
	id: number;
	f_analise_ixc: PessoasAnaliseIxc;
	f_cpf: string;
	f_credito: PessoasCredito;
	f_data_nascimento: string;
	f_nome: string;
	f_sexo: PessoasSexo;
	f_vky78cvjtdw: number;
	updatedAt: string;
	createdAt: string;
}

export interface PessoasRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type PessoasRelationKey = keyof PessoasRelations;

export const PESSOAS_ANALISEIXC_LABELS: Record<PessoasAnaliseIxc, string> = {
	[PessoasAnaliseIxc.Value0]: "Com Pendências",
	[PessoasAnaliseIxc.Value1]: "Sem Pendências",
};

export const PESSOAS_CREDITO_LABELS: Record<PessoasCredito, string> = {
	[PessoasCredito.Value1]: "Aprovado",
	[PessoasCredito.Value2]: "Aprovado com Atenção",
	[PessoasCredito.Value9]: "Negado",
};

export const PESSOAS_SEXO_LABELS: Record<PessoasSexo, string> = {
	[PessoasSexo.M]: "MASCULINO",
	[PessoasSexo.F]: "FEMININO",
	[PessoasSexo.Masculino]: "MASCULINO",
	[PessoasSexo.Feminino]: "FEMININO",
};

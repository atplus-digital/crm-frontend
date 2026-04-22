/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_PESSOAS_TABLE_NAME = "t_pessoas";

export const PESSOAS_ANALISEIXC_LABELS = {
	"0": "Com Pendências",
	"1": "Sem Pendências",
} as const;

export const PESSOAS_CREDITO_LABELS = {
	"1": "Aprovado",
	"2": "Aprovado com Atenção",
	"9": "Negado",
} as const;

export const PESSOAS_SEXO_LABELS = {
	M: "MASCULINO",
	F: "FEMININO",
	MASCULINO: "MASCULINO",
	FEMININO: "FEMININO",
} as const;

export type PessoasAnaliseIxc = keyof typeof PESSOAS_ANALISEIXC_LABELS;

export type PessoasCredito = keyof typeof PESSOAS_CREDITO_LABELS;

export type PessoasSexo = keyof typeof PESSOAS_SEXO_LABELS;

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

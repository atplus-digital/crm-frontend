/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_DADOS_ADICIONAIS_CLIENTE_CONTRATO_TABLE_NAME =
	"t_dados_adicionais_cliente_contrato";

export const DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS = {
	carne: "Carnê",
	boleto: "Boleto",
	recorrencia: "Recorrência",
} as const;

export const DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS = {
	trabalho: "Trabalho",
	estudo: "Estudo",
	jogos: "Jogos",
	streaming: "Streaming",
	pesquisa: "Pesquisa (Google)",
} as const;

export type DadosAdicionaisClienteContratoFormaDePagamento =
	keyof typeof DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS;

export type DadosAdicionaisClienteContratoPerfilDeUso =
	keyof typeof DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS;

export interface DadosAdicionaisClienteContrato {
	id: number;
	f_forma_de_pagamento: DadosAdicionaisClienteContratoFormaDePagamento;
	f_id_cliente_contrato: number;
	f_origem_cliente: string;
	f_perfil_de_uso: DadosAdicionaisClienteContratoPerfilDeUso;
	f_pessoas_na_residencia: number;
	updatedAt: string;
	createdAt: string;
}

export interface DadosAdicionaisClienteContratoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DadosAdicionaisClienteContratoRelationKey =
	keyof DadosAdicionaisClienteContratoRelations;

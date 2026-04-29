/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_TROCA_ENDERECO_TABLE_NAME = "t_troca_endereco";

export const TROCAENDERECO_STATUS_LABELS = {
	"1": "Atendimento Gerado",
	"2": "Atendimento Concluído",
	"3": "Atendimento para Campo",
	"4": "Atendimento para CR",
	"0": "Erro na Integração",
} as const;

export const TROCAENDERECO_TAXAINSTALACAO_LABELS = {
	"0": "Não",
	"1": "R$ 80,00 à vista",
	"2": "R$ 80,00 em 2 vezes",
} as const;

export type TrocaEnderecoStatus = keyof typeof TROCAENDERECO_STATUS_LABELS;

export type TrocaEnderecoTaxaInstalacao =
	keyof typeof TROCAENDERECO_TAXAINSTALACAO_LABELS;

export interface TrocaEndereco {
	id: number;
	f_bairro: string;
	f_cep: string;
	f_cliente: string;
	f_endereco: string;
	f_endereco_cidade: string;
	f_endereco_complemento: string;
	f_endereco_estado: string;
	f_endereco_numero: string;
	f_endereco_referencia: string;
	f_id_atendimento: string;
	f_id_contrato: string;
	f_obs: string;
	f_status: TrocaEnderecoStatus;
	f_taxa_instalacao: TrocaEnderecoTaxaInstalacao;
	f_telefone_contato: string;
	updatedAt: string;
	createdAt: string;
}

export interface TrocaEnderecoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TrocaEnderecoRelationKey = keyof TrocaEnderecoRelations;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Produtos } from "../other/produtos";
import type { Users } from "../users";

export const T_PACOTES_TABLE_NAME = "t_pacotes";

export const PACOTES_ABREATENDIMENTO_LABELS = {
	"0": "NAO",
	"1": "SIM",
} as const;

export const PACOTES_CLAUSULABONUSVELOCIDADE_LABELS = {
	Nao: "Nao",
	Sim: "Sim",
} as const;

export const PACOTES_PACOTEADICIONAL_LABELS = {
	"0": "NAO",
	"1": "SIM",
} as const;

export const PACOTES_PACOTEPRINCIPAL_LABELS = {
	"0": "NAO",
	"1": "SIM",
} as const;

export const PACOTES_STATUS_LABELS = {
	"1": "Ativo",
	"2": "Inativo",
} as const;

export const PACOTES_VENDERPARA_LABELS = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
} as const;

export type PacotesAbreAtendimento =
	keyof typeof PACOTES_ABREATENDIMENTO_LABELS;

export type PacotesClausulaBonusVelocidade =
	keyof typeof PACOTES_CLAUSULABONUSVELOCIDADE_LABELS;

export type PacotesPacoteAdicional =
	keyof typeof PACOTES_PACOTEADICIONAL_LABELS;

export type PacotesPacotePrincipal =
	keyof typeof PACOTES_PACOTEPRINCIPAL_LABELS;

export type PacotesStatus = keyof typeof PACOTES_STATUS_LABELS;

export type PacotesVenderPara = keyof typeof PACOTES_VENDERPARA_LABELS;

export interface Pacotes {
	id: number;
	f_fk_desconto_pacotes: number;
	f_fk_id_pacote: number;
	f_abre_atendimento: PacotesAbreAtendimento;
	f_clausula_bonus_velocidade: PacotesClausulaBonusVelocidade;
	f_mbps_bonus: string;
	f_mbps_padrao: string;
	f_mbps_total: string;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_pacote: string;
	f_pacote_adicional: PacotesPacoteAdicional;
	f_pacote_principal: PacotesPacotePrincipal;
	f_status: PacotesStatus;
	f_vender_para: PacotesVenderPara;
	updatedAt: string;
	createdAt: string;
}

export interface PacotesRelations {
	createdBy?: Users | null;
	f_itens_do_pacote?: Produtos[];
	updatedBy?: Users | null;
}

export type PacotesRelationKey = keyof PacotesRelations;

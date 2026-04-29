/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Pacotes } from "../other/pacotes";
import type { Users } from "../users";

export const T_CUPONS_DESCONTO_TABLE_NAME = "t_cupons_desconto";

export const CUPONSDESCONTO_STATUS_LABELS = {
	"0": "Inativo",
	"1": "Ativo",
} as const;

export const CUPONSDESCONTO_TIPO_LABELS = {
	"1": "Baseado no Endereço",
	"2": "Geral",
	"3": "Upgrade para para contratos abaixo de R$ 100",
	"4": "Contratação de Segundo Plano",
} as const;

export const CUPONSDESCONTO_TIPONEGOCIACAO_LABELS = {
	"1": "Upgrade",
	"2": "Venda Nova",
	S: "Segunda Contratação",
} as const;

export type CuponsDescontoStatus = keyof typeof CUPONSDESCONTO_STATUS_LABELS;

export type CuponsDescontoTipo = keyof typeof CUPONSDESCONTO_TIPO_LABELS;

export type CuponsDescontoTipoNegociacao =
	keyof typeof CUPONSDESCONTO_TIPONEGOCIACAO_LABELS;

export interface CuponsDesconto {
	id: number;
	f_fk_pacotes_desconto: number;
	f_fk_vendedor_desconto: number;
	f_cep: string;
	f_codigo: string;
	f_data_fim: string;
	f_data_inicio: string;
	f_endereco: string;
	f_endereco_numero: string;
	f_nome: string;
	f_status: CuponsDescontoStatus;
	f_tipo: CuponsDescontoTipo;
	f_tipo_negociacao: CuponsDescontoTipoNegociacao;
	f_utilizacoes: number;
	f_valor: number;
	f_valor_renovacao: number;
	updatedAt: string;
	createdAt: string;
}

export interface CuponsDescontoRelations {
	createdBy?: Users | null;
	f_pacotes?: Pacotes[];
	f_vendedor?: Users[];
	updatedBy?: Users | null;
}

export type CuponsDescontoRelationKey = keyof CuponsDescontoRelations;

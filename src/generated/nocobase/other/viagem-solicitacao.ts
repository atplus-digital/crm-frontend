/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_VIAGEM_SOLICITACAO_TABLE_NAME = "t_viagem_solicitacao";

export const VIAGEMSOLICITACAO_DESTINOVIAGEM_LABELS = {
	BocainaDoSul: "Bocaina do Sul",
	CampoBeloDoSul: "Campo Belo do Sul",
	CapaoAlto: "Capão Alto",
	CerroNegro: "Cerro Negro",
	CorreiaPinto: "Correia Pinto",
	Curitibanos: "Curitibanos",
	Florianopolis: "Florianópolis",
	Painel: "Painel",
	Outros: "Outros",
} as const;

export const VIAGEMSOLICITACAO_DIARIA_LABELS = {
	"5": "8h",
	"10": "Acima de 8h",
} as const;

export const VIAGEMSOLICITACAO_FASE_LABELS = {
	CaixaDeEntrada: "Caixa de Entrada",
	ProcessamentoFinanceiro: "Processamento Financeiro",
	Concluido: "Concluído",
	Arquivado: "Arquivado",
} as const;

export const VIAGEMSOLICITACAO_MEIOTRANSPORTE_LABELS = {
	KwidAtplus: "Kwid ATPlus",
	FiorinoAtplus: "Fiorino ATPlus",
	FiorinoFhortec: "Fiorino Fhortec",
	UnoAtplus: "Uno ATPlus",
	CarroParticular: "Carro Particular",
	Outro: "Outro",
} as const;

export type ViagemSolicitacaoDestinoViagem =
	keyof typeof VIAGEMSOLICITACAO_DESTINOVIAGEM_LABELS;

export type ViagemSolicitacaoDiaria =
	keyof typeof VIAGEMSOLICITACAO_DIARIA_LABELS;

export type ViagemSolicitacaoFase = keyof typeof VIAGEMSOLICITACAO_FASE_LABELS;

export type ViagemSolicitacaoMeioTransporte =
	keyof typeof VIAGEMSOLICITACAO_MEIOTRANSPORTE_LABELS;

export interface ViagemSolicitacao {
	id: number;
	f_fk_solicitacao_viagem: number;
	f_colaborador_beneficiado: string;
	f_data_retorno: string;
	f_data_viagem: string;
	f_destino_viagem: ViagemSolicitacaoDestinoViagem;
	f_diaria: ViagemSolicitacaoDiaria;
	f_fase: ViagemSolicitacaoFase;
	f_kaban_viagem: number;
	f_meio_transporte: ViagemSolicitacaoMeioTransporte;
	f_observacoes: string;
	f_percorrido: number;
	f_quantidade_dias: string;
	f_sub_total: string;
	f_total_pagar: number;
	f_valor_cobrado: number;
	f_valor_diaria: number;
	f_valor_pedagio: number;
	updatedAt: string;
	createdAt: string;
}

export interface ViagemSolicitacaoRelations {
	createdBy?: Users | null;
	f_anexos?: unknown[];
	updatedBy?: Users | null;
}

export type ViagemSolicitacaoRelationKey = keyof ViagemSolicitacaoRelations;

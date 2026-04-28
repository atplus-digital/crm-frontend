/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { ComprasFornecedores } from "../other/compras-fornecedores";
import type { ComprasProdutos } from "../other/compras-produtos";
import type { Users } from "../users";

export const T_SOLICITACAO_COMPRAS_TABLE_NAME = "t_solicitacao_compras";

export const SOLICITACAOCOMPRAS_CATEGORIA_LABELS = {
	Produto: "Produto",
	Servico: "Serviço",
} as const;

export const SOLICITACAOCOMPRAS_DEPARTAMENTO_LABELS = {
	Almox: "Almox",
	Comercial: "Comercial",
	Financeiro: "Financeiro",
	Infraestrutura: "Infraestrutura",
	LaboratorioTecnico: "Laboratório Técnico",
	Marketing: "Marketing",
	NOC: "NOC",
	Operacional: "Operacional",
	Platon: "Platon",
	Processos: "Processos",
	Projetos: "Projetos",
	RH: "RH",
	ServicosGerais: "Serviços Gerais",
} as const;

export const SOLICITACAOCOMPRAS_METODODEPAGAMENTO_LABELS = {
	ADefinir: "Á definir",
	Pix: "Pix",
	Boleto: "Boleto",
	Cartao: "Cartão",
} as const;

export const SOLICITACAOCOMPRAS_PRAZO_LABELS = {
	"1": "Á definir",
	"2": "Á vista",
	"3": "1x",
	"4": "2x",
	"5": "3x",
	"6": "4x",
	"7": "5x",
	"8": "6x",
	"9": "7x",
	"10": "8x",
	"11": "9x",
	"12": "10x",
	"13": "11x",
	"14": "12x",
} as const;

export const SOLICITACAOCOMPRAS_STATUS_LABELS = {
	CaixaDeEntrada: "Caixa de Entrada",
	AprovacaoDaGestao: "Aprovação da Gestão",
	PedidoDeCompra: "Pedido de Compra",
	ProcessamentoFinanceiro: "Processamento Financeiro",
	FilaDeEntrega: "Fila de Entrega",
	Concluido: "Concluído",
	Rejeitado: "Rejeitado",
	Standby: "Standby",
} as const;

export const SOLICITACAOCOMPRAS_TIPO_LABELS = {
	"1": "Pedido de Compra",
	"2": "Cotação",
} as const;

export type SolicitacaoComprasCategoria =
	keyof typeof SOLICITACAOCOMPRAS_CATEGORIA_LABELS;

export type SolicitacaoComprasDepartamento =
	keyof typeof SOLICITACAOCOMPRAS_DEPARTAMENTO_LABELS;

export type SolicitacaoComprasMetodoDePagamento =
	keyof typeof SOLICITACAOCOMPRAS_METODODEPAGAMENTO_LABELS;

export type SolicitacaoComprasPrazo =
	keyof typeof SOLICITACAOCOMPRAS_PRAZO_LABELS;

export type SolicitacaoComprasStatus =
	keyof typeof SOLICITACAOCOMPRAS_STATUS_LABELS;

export type SolicitacaoComprasTipo =
	keyof typeof SOLICITACAOCOMPRAS_TIPO_LABELS;

export interface SolicitacaoCompras {
	id: number;
	f_0i82r8a2t99: number;
	f_categoria: SolicitacaoComprasCategoria;
	f_departamento: SolicitacaoComprasDepartamento;
	f_justificativa: string;
	f_link: string;
	f_metodo_de_pagamento: SolicitacaoComprasMetodoDePagamento;
	f_motivo_arquivamento: string;
	f_observacoes_finais: string;
	f_prazo: SolicitacaoComprasPrazo;
	f_prazo_de_entrega: string;
	f_servico: string;
	f_status: SolicitacaoComprasStatus;
	f_tipo: SolicitacaoComprasTipo;
	f_titulo: string;
	f_valor_total: number;
	f_xm95ss7u5xw: number;
	fk_demandas_solicitacao_compras: number;
	fk_solicitacao_compras: number;
	updatedAt: string;
	createdAt: string;
}

export interface SolicitacaoComprasRelations {
	createdBy?: Users | null;
	f_anexos?: unknown[];
	f_fornecedor?: ComprasFornecedores | null;
	f_produtos?: ComprasProdutos[];
	updatedBy?: Users | null;
}

export type SolicitacaoComprasRelationKey = keyof SolicitacaoComprasRelations;

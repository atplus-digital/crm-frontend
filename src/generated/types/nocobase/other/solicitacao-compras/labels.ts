/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SOLICITACAOCOMPRAS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_0i82r8a2t99: "kanban",
	f_anexos: "Anexos",
	f_categoria: "Categoria de Compra",
	f_departamento: "Departamento",
	f_fornecedor: "Fornecedor",
	f_justificativa: "Justificativa",
	f_link: "Link do Produto",
	f_metodo_de_pagamento: "Metodo de Pagamento",
	f_motivo_arquivamento: "Motivo do Arquivamento",
	f_observacoes_finais: "Observações Finais",
	f_prazo: "Prazo de Pagamento",
	f_prazo_de_entrega: "Prazo de Entrega",
	f_produtos: "Produtos",
	f_servico: "Serviço",
	f_status: "Etapa",
	f_tipo: "Tipo",
	f_titulo: "Título",
	f_valor_total: "Valor Total",
	f_xm95ss7u5xw: "f_xm95ss7u5xw",
	fk_demandas_solicitacao_compras: "fk_demandas_solicitacao_compras",
	fk_solicitacao_compras: "fk_solicitacao_compras",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const SOLICITACAOCOMPRAS_CATEGORIA_LABELS = {
	Produto: "Produto",
	Serviço: "Serviço",
} as const;

export const SOLICITACAOCOMPRAS_DEPARTAMENTO_LABELS = {
	Almox: "Almox",
	Comercial: "Comercial",
	Financeiro: "Financeiro",
	Infraestrutura: "Infraestrutura",
	"Laboratório Técnico": "Laboratório Técnico",
	Marketing: "Marketing",
	NOC: "NOC",
	Operacional: "Operacional",
	Platon: "Platon",
	Processos: "Processos",
	Projetos: "Projetos",
	RH: "RH",
	"Serviços Gerais": "Serviços Gerais",
} as const;

export const SOLICITACAOCOMPRAS_METODODEPAGAMENTO_LABELS = {
	"Á definir": "Á definir",
	Pix: "Pix",
	Boleto: "Boleto",
	Cartão: "Cartão",
} as const;

export const SOLICITACAOCOMPRAS_PRAZO_LABELS = {
	1: "Á definir",
	2: "Á vista",
	3: "1x",
	4: "2x",
	5: "3x",
	6: "4x",
	7: "5x",
	8: "6x",
	9: "7x",
	10: "8x",
	11: "9x",
	12: "10x",
	13: "11x",
	14: "12x",
} as const;

export const SOLICITACAOCOMPRAS_STATUS_LABELS = {
	"Caixa de Entrada": "Caixa de Entrada",
	"Aprovação da Gestão": "Aprovação da Gestão",
	"Pedido de Compra": "Pedido de Compra",
	"Processamento Financeiro": "Processamento Financeiro",
	"Fila de Entrega": "Fila de Entrega",
	Concluído: "Concluído",
	Rejeitado: "Rejeitado",
	Standby: "Standby",
} as const;

export const SOLICITACAOCOMPRAS_TIPO_LABELS = {
	1: "Pedido de Compra",
	2: "Cotação",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const solicitacao_comprasCategoriaSchema = z.enum(
	["Produto", "Serviço"],
	{
		error: () => ({
			message: "categoria: valores válidos são [Produto, Serviço]",
		}),
	},
);

export const solicitacao_comprasDepartamentoSchema = z.enum(
	[
		"Almox",
		"Comercial",
		"Financeiro",
		"Infraestrutura",
		"Laboratório Técnico",
		"Marketing",
		"NOC",
		"Operacional",
		"Platon",
		"Processos",
		"Projetos",
		"RH",
		"Serviços Gerais",
	],
	{
		error: () => ({
			message:
				"departamento: valores válidos são [Almox, Comercial, Financeiro, Infraestrutura, Laboratório Técnico, Marketing, NOC, Operacional, Platon, Processos, Projetos, RH, Serviços Gerais]",
		}),
	},
);

export const solicitacao_comprasMetodoDePagamentoSchema = z.enum(
	["Á definir", "Pix", "Boleto", "Cartão"],
	{
		error: () => ({
			message:
				"metodo_de_pagamento: valores válidos são [Á definir, Pix, Boleto, Cartão]",
		}),
	},
);

export const solicitacao_comprasPrazoSchema = z.enum(
	["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
	{
		error: () => ({
			message:
				"prazo: valores válidos são [Á definir, Á vista, 1x, 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x, 11x, 12x]",
		}),
	},
);

export const solicitacao_comprasStatusSchema = z.enum(
	[
		"Caixa de Entrada",
		"Aprovação da Gestão",
		"Pedido de Compra",
		"Processamento Financeiro",
		"Fila de Entrega",
		"Concluído",
		"Rejeitado",
		"Standby",
	],
	{
		error: () => ({
			message:
				"status: valores válidos são [Caixa de Entrada, Aprovação da Gestão, Pedido de Compra, Processamento Financeiro, Fila de Entrega, Concluído, Rejeitado, Standby]",
		}),
	},
);

export const solicitacao_comprasTipoSchema = z.enum(["1", "2"], {
	error: () => ({
		message: "tipo: valores válidos são [Pedido de Compra, Cotação]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SolicitacaoComprasCategoria = z.infer<
	typeof solicitacao_comprasCategoriaSchema
>;

export type SolicitacaoComprasDepartamento = z.infer<
	typeof solicitacao_comprasDepartamentoSchema
>;

export type SolicitacaoComprasMetodoDePagamento = z.infer<
	typeof solicitacao_comprasMetodoDePagamentoSchema
>;

export type SolicitacaoComprasPrazo = z.infer<
	typeof solicitacao_comprasPrazoSchema
>;

export type SolicitacaoComprasStatus = z.infer<
	typeof solicitacao_comprasStatusSchema
>;

export type SolicitacaoComprasTipo = z.infer<
	typeof solicitacao_comprasTipoSchema
>;

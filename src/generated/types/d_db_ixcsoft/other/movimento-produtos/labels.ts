/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MOVIMENTOPRODUTOS_DESCARTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_ESTOQUE_LABELS = {
	S: "S",
	N: "N",
	L: "L",
} as const;

export const MOVIMENTOPRODUTOS_FATURADOPEDIDOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_GARANTIAOSS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_ICMSREGIME_LABELS = {
	1: "1",
	2: "2",
} as const;

export const MOVIMENTOPRODUTOS_IMOBILIZADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_IMPORTANDODFE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_MOVIMENTOCANCELAMENTOVENDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_MPIPITIPOCALCULO_LABELS = {
	P: "P",
	V: "V",
} as const;

export const MOVIMENTOPRODUTOS_ORIGEMMOVIMENTO_LABELS = {
	S: "S",
	P: "P",
} as const;

export const MOVIMENTOPRODUTOS_PEDIDOOSFATURADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_STATUS_LABELS = {
	N: "N",
	C: "C",
} as const;

export const MOVIMENTOPRODUTOS_STATUSCOMODATO_LABELS = {
	E: "E",
	D: "D",
	B: "B",
	A: "A",
} as const;

export const MOVIMENTOPRODUTOS_TIPO_LABELS = {
	E: "E",
	S: "S",
	I: "I",
} as const;

export const MOVIMENTOPRODUTOS_TIPOFISCALPLANO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	M: "M",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

export const MOVIMENTOPRODUTOS_TIPOPREENCHIMENTOTRIBUTACAO_LABELS = {
	CM: "CM",
	CA: "CA",
	CX: "CX",
} as const;

export const MOVIMENTOPRODUTOS_TIPOPRODUTO_LABELS = {
	C: "C",
	S: "S",
	F: "F",
	M: "M",
	P: "P",
	O: "O",
} as const;

export const MOVIMENTOPRODUTOS_TIPOTRANSFERENCIA_LABELS = {
	AOS: "AOS",
} as const;

export const MOVIMENTOPRODUTOS_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
} as const;

export const MOVIMENTOPRODUTOS_TRIBUTACAODIGITADA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const movimento_produtosDescartadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "descartado: valores válidos são [S, N]" }),
});

export const movimento_produtosEstoqueSchema = z.enum(["S", "N", "L"], {
	error: () => ({ message: "estoque: valores válidos são [S, N, L]" }),
});

export const movimento_produtosFaturadoPedidoOsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "faturado_pedido_os: valores válidos são [S, N]" }),
});

export const movimento_produtosGarantiaOssSchema = z.enum(["S", "N"], {
	error: () => ({ message: "garantia_oss: valores válidos são [S, N]" }),
});

export const movimento_produtosIcmsRegimeSchema = z.enum(["1", "2"], {
	error: () => ({ message: "icms_regime: valores válidos são [1, 2]" }),
});

export const movimento_produtosImobilizadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imobilizado: valores válidos são [S, N]" }),
});

export const movimento_produtosImportandoDfeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "importando_dfe: valores válidos são [S, N]" }),
});

export const movimento_produtosMovimentoCancelamentoVendaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "movimento_cancelamento_venda: valores válidos são [S, N]",
		}),
	},
);

export const movimento_produtosMpIpiTipoCalculoSchema = z.enum(["P", "V"], {
	error: () => ({ message: "mp_ipi_tipo_calculo: valores válidos são [P, V]" }),
});

export const movimento_produtosOrigemMovimentoSchema = z.enum(["S", "P"], {
	error: () => ({ message: "origem_movimento: valores válidos são [S, P]" }),
});

export const movimento_produtosPedidoOsFaturadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pedido_os_faturado: valores válidos são [S, N]" }),
});

export const movimento_produtosStatusSchema = z.enum(["N", "C"], {
	error: () => ({ message: "status: valores válidos são [N, C]" }),
});

export const movimento_produtosStatusComodatoSchema = z.enum(
	["E", "D", "B", "A"],
	{
		error: () => ({
			message: "status_comodato: valores válidos são [E, D, B, A]",
		}),
	},
);

export const movimento_produtosTipoSchema = z.enum(["E", "S", "I"], {
	error: () => ({ message: "tipo: valores válidos são [E, S, I]" }),
});

export const movimento_produtosTipoFiscalPlanoSchema = z.enum(
	["I", "T", "S", "M", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message:
				"tipo_fiscal_plano: valores válidos são [I, T, S, M, SVA, TV, SMP]",
		}),
	},
);

export const movimento_produtosTipoPreenchimentoTributacaoSchema = z.enum(
	["CM", "CA", "CX"],
	{
		error: () => ({
			message:
				"tipo_preenchimento_tributacao: valores válidos são [CM, CA, CX]",
		}),
	},
);

export const movimento_produtosTipoProdutoSchema = z.enum(
	["C", "S", "F", "M", "P", "O"],
	{
		error: () => ({
			message: "tipo_produto: valores válidos são [C, S, F, M, P, O]",
		}),
	},
);

export const movimento_produtosTipoTransferenciaSchema = z.enum(["AOS"], {
	error: () => ({ message: "tipo_transferencia: valores válidos são [AOS]" }),
});

export const movimento_produtosTipoTributacaoSchema = z.enum(
	["ICMS", "ISSQN"],
	{
		error: () => ({
			message: "tipo_tributacao: valores válidos são [ICMS, ISSQN]",
		}),
	},
);

export const movimento_produtosTributacaoDigitadaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "tributacao_digitada: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MovimentoProdutosDescartado = z.infer<
	typeof movimento_produtosDescartadoSchema
>;

export type MovimentoProdutosEstoque = z.infer<
	typeof movimento_produtosEstoqueSchema
>;

export type MovimentoProdutosFaturadoPedidoOs = z.infer<
	typeof movimento_produtosFaturadoPedidoOsSchema
>;

export type MovimentoProdutosGarantiaOss = z.infer<
	typeof movimento_produtosGarantiaOssSchema
>;

export type MovimentoProdutosIcmsRegime = z.infer<
	typeof movimento_produtosIcmsRegimeSchema
>;

export type MovimentoProdutosImobilizado = z.infer<
	typeof movimento_produtosImobilizadoSchema
>;

export type MovimentoProdutosImportandoDfe = z.infer<
	typeof movimento_produtosImportandoDfeSchema
>;

export type MovimentoProdutosMovimentoCancelamentoVenda = z.infer<
	typeof movimento_produtosMovimentoCancelamentoVendaSchema
>;

export type MovimentoProdutosMpIpiTipoCalculo = z.infer<
	typeof movimento_produtosMpIpiTipoCalculoSchema
>;

export type MovimentoProdutosOrigemMovimento = z.infer<
	typeof movimento_produtosOrigemMovimentoSchema
>;

export type MovimentoProdutosPedidoOsFaturado = z.infer<
	typeof movimento_produtosPedidoOsFaturadoSchema
>;

export type MovimentoProdutosStatus = z.infer<
	typeof movimento_produtosStatusSchema
>;

export type MovimentoProdutosStatusComodato = z.infer<
	typeof movimento_produtosStatusComodatoSchema
>;

export type MovimentoProdutosTipo = z.infer<
	typeof movimento_produtosTipoSchema
>;

export type MovimentoProdutosTipoFiscalPlano = z.infer<
	typeof movimento_produtosTipoFiscalPlanoSchema
>;

export type MovimentoProdutosTipoPreenchimentoTributacao = z.infer<
	typeof movimento_produtosTipoPreenchimentoTributacaoSchema
>;

export type MovimentoProdutosTipoProduto = z.infer<
	typeof movimento_produtosTipoProdutoSchema
>;

export type MovimentoProdutosTipoTransferencia = z.infer<
	typeof movimento_produtosTipoTransferenciaSchema
>;

export type MovimentoProdutosTipoTributacao = z.infer<
	typeof movimento_produtosTipoTributacaoSchema
>;

export type MovimentoProdutosTributacaoDigitada = z.infer<
	typeof movimento_produtosTributacaoDigitadaSchema
>;

/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRODUTOS_FIELD_LABELS = {
	aceita_valor: "aceita_valor",
	altura: "altura",
	ativo: "ativo",
	cambio: "cambio",
	centro_custo_regra_criterio: "centro_custo_regra_criterio",
	chassi: "chassi",
	checkbox1: "checkbox1",
	checkbox10: "checkbox10",
	checkbox11: "checkbox11",
	checkbox12: "checkbox12",
	checkbox13: "checkbox13",
	checkbox14: "checkbox14",
	checkbox15: "checkbox15",
	checkbox16: "checkbox16",
	checkbox17: "checkbox17",
	checkbox18: "checkbox18",
	checkbox19: "checkbox19",
	checkbox2: "checkbox2",
	checkbox20: "checkbox20",
	checkbox21: "checkbox21",
	checkbox22: "checkbox22",
	checkbox23: "checkbox23",
	checkbox24: "checkbox24",
	checkbox25: "checkbox25",
	checkbox26: "checkbox26",
	checkbox27: "checkbox27",
	checkbox28: "checkbox28",
	checkbox29: "checkbox29",
	checkbox3: "checkbox3",
	checkbox30: "checkbox30",
	checkbox31: "checkbox31",
	checkbox32: "checkbox32",
	checkbox33: "checkbox33",
	checkbox34: "checkbox34",
	checkbox35: "checkbox35",
	checkbox36: "checkbox36",
	checkbox37: "checkbox37",
	checkbox38: "checkbox38",
	checkbox39: "checkbox39",
	checkbox4: "checkbox4",
	checkbox40: "checkbox40",
	checkbox5: "checkbox5",
	checkbox6: "checkbox6",
	checkbox7: "checkbox7",
	checkbox8: "checkbox8",
	checkbox9: "checkbox9",
	cod_classificacao_servico: "cod_classificacao_servico",
	cod_servico: "cod_servico",
	codigo: "codigo",
	codigo_barras: "codigo_barras",
	codigo_externo_produto_col: "codigo_externo_produto_col",
	codigo_tecido: "codigo_tecido",
	controla_estoque: "controla_estoque",
	controle_impressao_etiqueta: "controle_impressao_etiqueta",
	custo_estoque: "custo_estoque",
	custo_medio: "custo_medio",
	custo_medio_total: "custo_medio_total",
	data_inventario: "data_inventario",
	data_ultima_compra: "data_ultima_compra",
	descricao: "descricao",
	descricao_alt: "descricao_alt",
	descricao_completa: "descricao_completa",
	descricao_pacote_watch: "descricao_pacote_watch",
	descricao_produto_col: "descricao_produto_col",
	ecommerce: "ecommerce",
	ecommerce_pg_inicial: "ecommerce_pg_inicial",
	ecommerce_prioridade: "ecommerce_prioridade",
	excecao_tributacao_nfcom: "excecao_tributacao_nfcom",
	icms_issqn: "icms_issqn",
	id: "id",
	id_assinatura_integracao: "id_assinatura_integracao",
	id_categoria_patrimonio: "id_categoria_patrimonio",
	id_centro_custo_criterio_rateio: "id_centro_custo_criterio_rateio",
	id_centro_custo_rel_centro_custo_categoria_padrao:
		"id_centro_custo_rel_centro_custo_categoria_padrao",
	id_centro_resultado_rel_centro_custo_categoria_padrao:
		"id_centro_resultado_rel_centro_custo_categoria_padrao",
	id_class_fiscal: "id_class_fiscal",
	id_class_fiscal_entrada: "id_class_fiscal_entrada",
	id_classe_financeira: "id_classe_financeira",
	id_classificacao_tributaria_col: "id_classificacao_tributaria_col",
	id_conta_comodato: "id_conta_comodato",
	id_conta_despesa: "id_conta_despesa",
	id_conta_estoque: "id_conta_estoque",
	id_conta_receita: "id_conta_receita",
	id_fr_faturamento_classificacoes: "id_fr_faturamento_classificacoes",
	id_integracao_fiscal_col: "id_integracao_fiscal_col",
	id_integracao_iot: "id_integracao_iot",
	id_integracao_tv: "id_integracao_tv",
	id_plano_mvno: "id_plano_mvno",
	id_produto_iot: "id_produto_iot",
	id_produtos_ncm_cest: "id_produtos_ncm_cest",
	id_sub_grupo: "id_sub_grupo",
	id_sva_integracao: "id_sva_integracao",
	id_sva_pacote: "id_sva_pacote",
	id_sva_pacote_adicional: "id_sva_pacote_adicional",
	id_tabela_fipe: "id_tabela_fipe",
	id_tipo_documento_servico: "id_tipo_documento_servico",
	id_tipo_documento_servico_pj: "id_tipo_documento_servico_pj",
	identificacao_item_sped: "identificacao_item_sped",
	imagem: "imagem",
	integrador: "integrador",
	iss_natureza_operacao: "iss_natureza_operacao",
	km: "km",
	largura: "largura",
	limite_pacote: "limite_pacote",
	link: "link",
	margem_lucro: "margem_lucro",
	mostra_valor_ecommerce: "mostra_valor_ecommerce",
	movimentacao: "movimentacao",
	ncm: "ncm",
	obs: "obs",
	pcomissao: "pcomissao",
	pesob: "pesob",
	pesol: "pesol",
	plataforma: "plataforma",
	plataforma_integracao: "plataforma_integracao",
	preco_base: "preco_base",
	produto_playhub: "produto_playhub",
	profundidade: "profundidade",
	qtde_entrada: "qtde_entrada",
	qtde_inventario: "qtde_inventario",
	qtde_max: "qtde_max",
	qtde_min: "qtde_min",
	qtde_saida: "qtde_saida",
	qtde_tecido_almofadas: "qtde_tecido_almofadas",
	qtde_tecido_base: "qtde_tecido_base",
	qtdportas: "qtdportas",
	renavan: "renavan",
	saldo: "saldo",
	subgrupo_tipo: "subgrupo_tipo",
	tariff_plan: "tariff_plan",
	tipo: "tipo",
	tipo_ecommerce: "tipo_ecommerce",
	tipo_produto_integracao: "tipo_produto_integracao",
	total_tickets_watch: "total_tickets_watch",
	tp_transacao_pry: "tp_transacao_pry",
	tv_data_expiracao_pacote_temporario: "tv_data_expiracao_pacote_temporario",
	tv_data_final: "tv_data_final",
	tv_data_inicial: "tv_data_inicial",
	tv_dias_expiracao_pacote_temporario: "tv_dias_expiracao_pacote_temporario",
	tv_dtvgo_produtos_disponiveis: "tv_dtvgo_produtos_disponiveis",
	tv_id_canais: "tv_id_canais",
	tv_id_pacote_canais: "tv_id_pacote_canais",
	tv_id_pacote_servicos: "tv_id_pacote_servicos",
	tv_id_pacote_servicos_watch: "tv_id_pacote_servicos_watch",
	tv_id_pacote_temporario: "tv_id_pacote_temporario",
	tv_id_pacotes: "tv_id_pacotes",
	tv_id_pacotes_adicionais: "tv_id_pacotes_adicionais",
	tv_id_plataforma: "tv_id_plataforma",
	tv_id_servicos: "tv_id_servicos",
	tv_LineUp: "tv_LineUp",
	tv_standalone: "tv_standalone",
	ultima_atualizacao: "ultima_atualizacao",
	ultima_qtde_entrada: "ultima_qtde_entrada",
	ultima_qtde_saida: "ultima_qtde_saida",
	unidade: "unidade",
	valor: "valor",
	valor_adicional_pacote: "valor_adicional_pacote",
	valor_custo: "valor_custo",
	valor_prefixo: "valor_prefixo",
	valor_sufixo: "valor_sufixo",
	veiculo_combustivel: "veiculo_combustivel",
	veiculo_cor: "veiculo_cor",
	vencimento_garantia: "vencimento_garantia",
	vICMSSTRet: "vICMSSTRet",
} as const;

export const PRODUTOS_ACEITAVALOR_LABELS = {
	P: "P",
	N: "N",
} as const;

export const PRODUTOS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CENTROCUSTOREGRACRITERIO_LABELS = {
	CE: "CE",
	CR: "CR",
} as const;

export const PRODUTOS_CHECKBOX1_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX10_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX11_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX12_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX13_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX14_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX15_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX16_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX17_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX18_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX19_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX2_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX20_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX21_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX22_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX23_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX24_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX25_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX26_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX27_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX28_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX29_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX3_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX30_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX31_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX32_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX33_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX34_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX35_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX36_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX37_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX38_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX39_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX4_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX40_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX5_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX6_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX7_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX8_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CHECKBOX9_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_CONTROLAESTOQUE_LABELS = {
	N: "N",
	S: "S",
	L: "L",
} as const;

export const PRODUTOS_ECOMMERCE_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const PRODUTOS_ECOMMERCEPGINICIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_EXCECAOTRIBUTACAONFCOM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PRODUTOS_ICMSISSQN_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
	NT: "NT",
} as const;

export const PRODUTOS_MOVIMENTACAO_LABELS = {
	C: "C",
	V: "V",
	A: "A",
} as const;

export const PRODUTOS_TIPO_LABELS = {
	C: "C",
	S: "S",
	F: "F",
	M: "M",
	P: "P",
	O: "O",
} as const;

export const PRODUTOS_TIPOPRODUTOINTEGRACAO_LABELS = {
	A: "A",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const produtosAceitaValorSchema = z.enum(["P", "N"], {
	error: () => ({ message: "aceita_valor: valores válidos são [P, N]" }),
});

export const produtosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const produtosCentroCustoRegraCriterioSchema = z.enum(["CE", "CR"], {
	error: () => ({
		message: "centro_custo_regra_criterio: valores válidos são [CE, CR]",
	}),
});

export const produtosCheckbox1Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox1: valores válidos são [S, N]" }),
});

export const produtosCheckbox10Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox10: valores válidos são [S, N]" }),
});

export const produtosCheckbox11Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox11: valores válidos são [S, N]" }),
});

export const produtosCheckbox12Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox12: valores válidos são [S, N]" }),
});

export const produtosCheckbox13Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox13: valores válidos são [S, N]" }),
});

export const produtosCheckbox14Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox14: valores válidos são [S, N]" }),
});

export const produtosCheckbox15Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox15: valores válidos são [S, N]" }),
});

export const produtosCheckbox16Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox16: valores válidos são [S, N]" }),
});

export const produtosCheckbox17Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox17: valores válidos são [S, N]" }),
});

export const produtosCheckbox18Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox18: valores válidos são [S, N]" }),
});

export const produtosCheckbox19Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox19: valores válidos são [S, N]" }),
});

export const produtosCheckbox2Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox2: valores válidos são [S, N]" }),
});

export const produtosCheckbox20Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox20: valores válidos são [S, N]" }),
});

export const produtosCheckbox21Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox21: valores válidos são [S, N]" }),
});

export const produtosCheckbox22Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox22: valores válidos são [S, N]" }),
});

export const produtosCheckbox23Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox23: valores válidos são [S, N]" }),
});

export const produtosCheckbox24Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox24: valores válidos são [S, N]" }),
});

export const produtosCheckbox25Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox25: valores válidos são [S, N]" }),
});

export const produtosCheckbox26Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox26: valores válidos são [S, N]" }),
});

export const produtosCheckbox27Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox27: valores válidos são [S, N]" }),
});

export const produtosCheckbox28Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox28: valores válidos são [S, N]" }),
});

export const produtosCheckbox29Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox29: valores válidos são [S, N]" }),
});

export const produtosCheckbox3Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox3: valores válidos são [S, N]" }),
});

export const produtosCheckbox30Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox30: valores válidos são [S, N]" }),
});

export const produtosCheckbox31Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox31: valores válidos são [S, N]" }),
});

export const produtosCheckbox32Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox32: valores válidos são [S, N]" }),
});

export const produtosCheckbox33Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox33: valores válidos são [S, N]" }),
});

export const produtosCheckbox34Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox34: valores válidos são [S, N]" }),
});

export const produtosCheckbox35Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox35: valores válidos são [S, N]" }),
});

export const produtosCheckbox36Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox36: valores válidos são [S, N]" }),
});

export const produtosCheckbox37Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox37: valores válidos são [S, N]" }),
});

export const produtosCheckbox38Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox38: valores válidos são [S, N]" }),
});

export const produtosCheckbox39Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox39: valores válidos são [S, N]" }),
});

export const produtosCheckbox4Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox4: valores válidos são [S, N]" }),
});

export const produtosCheckbox40Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox40: valores válidos são [S, N]" }),
});

export const produtosCheckbox5Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox5: valores válidos são [S, N]" }),
});

export const produtosCheckbox6Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox6: valores válidos são [S, N]" }),
});

export const produtosCheckbox7Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox7: valores válidos são [S, N]" }),
});

export const produtosCheckbox8Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox8: valores válidos são [S, N]" }),
});

export const produtosCheckbox9Schema = z.enum(["S", "N"], {
	error: () => ({ message: "checkbox9: valores válidos são [S, N]" }),
});

export const produtosControlaEstoqueSchema = z.enum(["N", "S", "L"], {
	error: () => ({ message: "controla_estoque: valores válidos são [N, S, L]" }),
});

export const produtosEcommerceSchema = z.enum(["S", "N", "P"], {
	error: () => ({ message: "ecommerce: valores válidos são [S, N, P]" }),
});

export const produtosEcommercePgInicialSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "ecommerce_pg_inicial: valores válidos são [S, N]",
	}),
});

export const produtosExcecaoTributacaoNfcomSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "excecao_tributacao_nfcom: valores válidos são [S, N]",
	}),
});

export const produtosIcmsIssqnSchema = z.enum(["ICMS", "ISSQN", "NT"], {
	error: () => ({
		message: "icms_issqn: valores válidos são [ICMS, ISSQN, NT]",
	}),
});

export const produtosMovimentacaoSchema = z.enum(["C", "V", "A"], {
	error: () => ({ message: "movimentacao: valores válidos são [C, V, A]" }),
});

export const produtosTipoSchema = z.enum(["C", "S", "F", "M", "P", "O"], {
	error: () => ({ message: "tipo: valores válidos são [C, S, F, M, P, O]" }),
});

export const produtosTipoProdutoIntegracaoSchema = z.enum(["A", "C"], {
	error: () => ({
		message: "tipo_produto_integracao: valores válidos são [A, C]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ProdutosAceitaValor = z.infer<typeof produtosAceitaValorSchema>;

export type ProdutosAtivo = z.infer<typeof produtosAtivoSchema>;

export type ProdutosCentroCustoRegraCriterio = z.infer<
	typeof produtosCentroCustoRegraCriterioSchema
>;

export type ProdutosCheckbox1 = z.infer<typeof produtosCheckbox1Schema>;

export type ProdutosCheckbox10 = z.infer<typeof produtosCheckbox10Schema>;

export type ProdutosCheckbox11 = z.infer<typeof produtosCheckbox11Schema>;

export type ProdutosCheckbox12 = z.infer<typeof produtosCheckbox12Schema>;

export type ProdutosCheckbox13 = z.infer<typeof produtosCheckbox13Schema>;

export type ProdutosCheckbox14 = z.infer<typeof produtosCheckbox14Schema>;

export type ProdutosCheckbox15 = z.infer<typeof produtosCheckbox15Schema>;

export type ProdutosCheckbox16 = z.infer<typeof produtosCheckbox16Schema>;

export type ProdutosCheckbox17 = z.infer<typeof produtosCheckbox17Schema>;

export type ProdutosCheckbox18 = z.infer<typeof produtosCheckbox18Schema>;

export type ProdutosCheckbox19 = z.infer<typeof produtosCheckbox19Schema>;

export type ProdutosCheckbox2 = z.infer<typeof produtosCheckbox2Schema>;

export type ProdutosCheckbox20 = z.infer<typeof produtosCheckbox20Schema>;

export type ProdutosCheckbox21 = z.infer<typeof produtosCheckbox21Schema>;

export type ProdutosCheckbox22 = z.infer<typeof produtosCheckbox22Schema>;

export type ProdutosCheckbox23 = z.infer<typeof produtosCheckbox23Schema>;

export type ProdutosCheckbox24 = z.infer<typeof produtosCheckbox24Schema>;

export type ProdutosCheckbox25 = z.infer<typeof produtosCheckbox25Schema>;

export type ProdutosCheckbox26 = z.infer<typeof produtosCheckbox26Schema>;

export type ProdutosCheckbox27 = z.infer<typeof produtosCheckbox27Schema>;

export type ProdutosCheckbox28 = z.infer<typeof produtosCheckbox28Schema>;

export type ProdutosCheckbox29 = z.infer<typeof produtosCheckbox29Schema>;

export type ProdutosCheckbox3 = z.infer<typeof produtosCheckbox3Schema>;

export type ProdutosCheckbox30 = z.infer<typeof produtosCheckbox30Schema>;

export type ProdutosCheckbox31 = z.infer<typeof produtosCheckbox31Schema>;

export type ProdutosCheckbox32 = z.infer<typeof produtosCheckbox32Schema>;

export type ProdutosCheckbox33 = z.infer<typeof produtosCheckbox33Schema>;

export type ProdutosCheckbox34 = z.infer<typeof produtosCheckbox34Schema>;

export type ProdutosCheckbox35 = z.infer<typeof produtosCheckbox35Schema>;

export type ProdutosCheckbox36 = z.infer<typeof produtosCheckbox36Schema>;

export type ProdutosCheckbox37 = z.infer<typeof produtosCheckbox37Schema>;

export type ProdutosCheckbox38 = z.infer<typeof produtosCheckbox38Schema>;

export type ProdutosCheckbox39 = z.infer<typeof produtosCheckbox39Schema>;

export type ProdutosCheckbox4 = z.infer<typeof produtosCheckbox4Schema>;

export type ProdutosCheckbox40 = z.infer<typeof produtosCheckbox40Schema>;

export type ProdutosCheckbox5 = z.infer<typeof produtosCheckbox5Schema>;

export type ProdutosCheckbox6 = z.infer<typeof produtosCheckbox6Schema>;

export type ProdutosCheckbox7 = z.infer<typeof produtosCheckbox7Schema>;

export type ProdutosCheckbox8 = z.infer<typeof produtosCheckbox8Schema>;

export type ProdutosCheckbox9 = z.infer<typeof produtosCheckbox9Schema>;

export type ProdutosControlaEstoque = z.infer<
	typeof produtosControlaEstoqueSchema
>;

export type ProdutosEcommerce = z.infer<typeof produtosEcommerceSchema>;

export type ProdutosEcommercePgInicial = z.infer<
	typeof produtosEcommercePgInicialSchema
>;

export type ProdutosExcecaoTributacaoNfcom = z.infer<
	typeof produtosExcecaoTributacaoNfcomSchema
>;

export type ProdutosIcmsIssqn = z.infer<typeof produtosIcmsIssqnSchema>;

export type ProdutosMovimentacao = z.infer<typeof produtosMovimentacaoSchema>;

export type ProdutosTipo = z.infer<typeof produtosTipoSchema>;

export type ProdutosTipoProdutoIntegracao = z.infer<
	typeof produtosTipoProdutoIntegracaoSchema
>;
